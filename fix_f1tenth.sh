#!/usr/bin/env bash
set -euo pipefail

# --- Require sudo (self-elevate if needed) ---
if [[ $EUID -ne 0 ]]; then
  echo "⚠️  This script needs root privileges."
  echo "Re-running with sudo..."
  exec sudo bash "$0" "$@"
fi

GITHUB_OWNER=wkaisertexas
GITHUB_REPO=wkaisertexas.github.io
GITHUB_BRANCH=main
APP_DIR=/opt/racefleet
APP_UPDATE_CMD="${APP_UPDATE_CMD:-}"
UPDATE_APT="${UPDATE_APT:-yes}"

# -------- Paths --------
INSTALL_SCRIPT="/usr/local/sbin/racefleet-updater"
CONF_FILE="/etc/racefleet-updater.conf"
SRV_FILE="/etc/systemd/system/racefleet-updater.service"
TMR_FILE="/etc/systemd/system/racefleet-updater.timer"

echo "🚀 Installing racefleet-updater..."

# --- Install updater script ---
mkdir -p "$(dirname "$INSTALL_SCRIPT")"
cat > "$INSTALL_SCRIPT" <<'EOF'
#!/usr/bin/env bash
set -euo pipefail

GITHUB_OWNER="wkaisertexas"
GITHUB_REPO="my-repo-name"
GITHUB_BRANCH="main"
UPDATE_Apt="yes"
SERVICES_TO_RESTART=("pointpillars.service" "long_control.service")
APP_UPDATE_CMD=""
APP_DIR="/opt/racefleet"
LOCK_FILE="/var/lock/racefleet-updater.lock"
LOG_TAG="racefleet-updater"
SELF_PATH="$(readlink -f "$0")"
SELF_URL_BASE="https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/fleet"
CONF="/etc/racefleet-updater.conf"

[ -f "$CONF" ] && source "$CONF"

log() { logger -t "$LOG_TAG" -- "$*"; echo "[$LOG_TAG] $*"; }

exec 9>"$LOCK_FILE"
flock -n 9 || { log "Another updater run is in progress. Exiting."; exit 0; }
trap 'rm -f "$LOCK_FILE"' EXIT

if ! ping -c1 -W2 1.1.1.1 >/dev/null 2>&1; then
  log "No network; skipping update run."
  exit 0
fi

self_update() {
  local tmp="$(mktemp)"
  local remote="${SELF_URL_BASE}/racefleet-updater"
  if curl -fsSL "$remote" -o "$tmp"; then
    if ! cmp -s "$tmp" "$SELF_PATH"; then
      chmod +x "$tmp"
      log "New updater detected; swapping in."
      mv "$tmp" "${SELF_PATH}.new"
      mv "${SELF_PATH}.new" "$SELF_PATH"
      exec "$SELF_PATH" --post-self-update
    else
      rm -f "$tmp"
    fi
  else
    log "Could not fetch latest updater from $remote; continuing with current version."
  fi
}

if [[ "${1:-}" != "--post-self-update" ]]; then
  self_update
else
  log "Running post self-update."
fi

if ver=$(curl -fsSL "${SELF_URL_BASE}/VERSION" 2>/dev/null); then
  log "Updater version: ${ver}"
fi

if [[ "$UPDATE_Apt" == "yes" ]]; then
  export DEBIAN_FRONTEND=noninteractive
  log "Running apt updates…"
  apt-get update -y || true
  apt-get dist-upgrade -y || true
  apt-get autoremove -y || true
fi

if [[ -d "$APP_DIR/.git" ]]; then
  log "Updating repo in ${APP_DIR}…"
  git -C "$APP_DIR" fetch --all --tags || true
  git -C "$APP_DIR" reset --hard "origin/${GITHUB_BRANCH}" || true
  git -C "$APP_DIR" submodule update --init --recursive || true
fi

if [[ -n "$APP_UPDATE_CMD" ]]; then
  log "Running app update command…"
  (cd "$APP_DIR" && bash -lc "$APP_UPDATE_CMD") || true
fi

for svc in "${SERVICES_TO_RESTART[@]}"; do
  if systemctl list-unit-files | grep -q "^${svc}"; then
    log "Restarting ${svc}…"
    systemctl try-restart "$svc" || true
  fi
done

log "Update run complete."
EOF

chmod +x "$INSTALL_SCRIPT"

# --- Config file ---
if [[ ! -f "$CONF_FILE" ]]; then
  cat > "$CONF_FILE" <<EOF
GITHUB_OWNER="${GITHUB_OWNER}"
GITHUB_REPO="${GITHUB_REPO}"
GITHUB_BRANCH="${GITHUB_BRANCH}"
APP_DIR="${APP_DIR}"
APP_UPDATE_CMD="${APP_UPDATE_CMD}"
SERVICES_TO_RESTART=(${SERVICES_TO_RESTART})
UPDATE_Apt="${UPDATE_APT}"
EOF
fi

# --- Systemd service ---
cat > "$SRV_FILE" <<EOF
[Unit]
Description=Racefleet periodic updater
Wants=network-online.target
After=network-online.target

[Service]
Type=oneshot
ExecStart=${INSTALL_SCRIPT}
User=root
Group=root
Nice=10
IOSchedulingClass=idle
NoNewPrivileges=true
Environment=GIT_TERMINAL_PROMPT=0
SuccessExitStatus=0
EOF

# --- Timer ---
cat > "$TMR_FILE" <<'EOF'
[Unit]
Description=Run racefleet updater hourly with jitter

[Timer]
OnBootSec=5m
OnUnitActiveSec=1h
RandomizedDelaySec=15m
Persistent=true

[Install]
WantedBy=timers.target
EOF

# --- Enable ---
systemctl daemon-reload
systemctl enable --now racefleet-updater.timer
systemctl restart racefleet-updater.service || true

echo "✅ racefleet-updater installed and running."
echo "📊 Check logs: journalctl -u racefleet-updater.service -n 100 -f"

