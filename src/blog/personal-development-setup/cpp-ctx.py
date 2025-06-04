#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.12"
# dependencies = [
#     "nbconvert>=7.0",  # For converting .ipynb files
#     "pyperclip>=1.8", # For cross-platform clipboard access
# ]
# ///

import os
import sys
import subprocess
import platform
from pathlib import Path
import io
import logging
import argparse # Import argparse

# --- Configuration ---
MAX_CSV_LINES = 10  # Max number of lines to show from CSV files
EXCLUDED_DIRS = { # Set of lowercase directory names to exclude
    'build',
    'install',
    'log',
    'logs',
    '.git',
    '__pycache__',
    '.pytest_cache',
    'node_modules',
    '.venv',
    'venv',
    'env',
    '.env',
    'dist',
    'bin', # Often contains compiled outputs or scripts not meant as source
    'obj', # Common intermediate build folder name
    '.vscode', # Editor-specific config
    '.idea',  # Editor-specific config
}

# File types and their priorities (lower number = higher priority)
FILE_PRIORITIES = {
    "CMakeLists.txt": 0,
    ".md": -1,
    ".cmake": 1,
    ".sh": 2,
    "Makefile": 3,
    ".py": 10,
    ".ipynb": 10,
    ".cpp": 20,
    ".hpp": 20,
    ".c": 20,
    ".h": 20,
    ".cc": 20,
    ".hh": 20,
    ".cu": 20,
    ".cuh": 20,
    ".csv": 30,
    ".action": 40,
    ".msg": 40,
    ".srv": 40,
    # Add other build system files if needed
}

# Mapping file extensions to markdown language identifiers
LANG_MAP = {
    ".md": "md",
    ".py": "python",
    ".ipynb": "python", # After conversion
    ".sh": "sh",
    "Makefile": "make",
    ".cpp": "cpp",
    ".hpp": "cpp",
    ".c": "c",
    ".h": "c",
    ".cc": "cpp",
    ".hh": "cpp",
    ".cu": "cuda",
    ".cuh": "cuda",
    ".cmake": "cmake",
    "CMakeLists.txt": "cmake",
    ".csv": "csv",
    ".action": "console",
    ".msg": "console",
    ".srv": "console",
    # Add other mappings as needed
}

MAX_LINES_PARAMETER = 600
HEAD_LINES = 10

# --- Logging Setup ---
logging.basicConfig(level=logging.INFO, format='%(levelname)s: %(message)s')

# --- Helper Functions ---

def get_file_priority(path: Path) -> int:
    """Determines the sort priority of a file."""
    if path.name == "CMakeLists.txt":
        return FILE_PRIORITIES.get("CMakeLists.txt", 99)
    return FILE_PRIORITIES.get(path.suffix.lower(), 99)

def get_markdown_language(path: Path) -> str:
    """Gets the markdown language identifier for a file."""
    if path.name == "CMakeLists.txt":
        return LANG_MAP.get("CMakeLists.txt", "")
    return LANG_MAP.get(path.suffix.lower(), "")

def convert_notebook_to_script(notebook_path: Path) -> str | None:
    """Converts an .ipynb notebook to a Python script string using nbconvert."""
    logging.info(f"Converting notebook: {notebook_path}")
    try:
        # Ensure using the python executable managed by uv/the script runner
        python_executable = sys.executable
        result = subprocess.run(
            [python_executable, "-m", "nbconvert", "--to", "script", "--stdout", str(notebook_path)],
            capture_output=True,
            text=True,
            check=True,
            encoding='utf-8'
        )
        logging.info(f"Successfully converted {notebook_path}")
        return result.stdout
    except FileNotFoundError:
        logging.error("Error: 'nbconvert' command not found. Is it installed in the uv environment?")
        return None
    except subprocess.CalledProcessError as e:
        logging.error(f"Error converting notebook {notebook_path}:")
        logging.error(f"Stderr: {e.stderr}")
        return None
    except Exception as e:
        logging.error(f"An unexpected error occurred during notebook conversion {notebook_path}: {e}")
        return None

def read_file_content(path: Path) -> str | None:
    """Reads content based on file type."""
    logging.info(f"Reading file: {path}")
    content = None
    try:
        if path.suffix.lower() == ".ipynb":
            content = convert_notebook_to_script(path)
        elif path.suffix.lower() == ".csv":
            with path.open('r', encoding='utf-8', errors='ignore') as f:
                lines = [next(f) for _ in range(MAX_CSV_LINES)]
            content = "".join(lines)
            # Check if more lines might exist by trying to read one more line
            try:
                with path.open('r', encoding='utf-8', errors='ignore') as f:
                    for i, _ in enumerate(f):
                        if i >= MAX_CSV_LINES:
                            content += "\n... (truncated)\n"
                            break
            except StopIteration: # Reached end of file within MAX_CSV_LINES
                pass

        else:
             # For text files, attempt to read as UTF-8, fallback if needed
             with path.open('r', encoding='utf-8', errors='ignore') as f:
                 lines = f.readlines()
             if len(lines) > MAX_LINES_PARAMETER:
                 content = "".join(lines[:HEAD_LINES]) + "\n... (truncated)\n"
             else:
                 content = "".join(lines)

    except FileNotFoundError:
        logging.error(f"File not found during read: {path}")
        return None
    except UnicodeDecodeError:
        logging.warning(f"Could not decode file {path} as UTF-8. Skipping binary or incompatible file.")
        return None # Skip files that cannot be decoded
    except Exception as e:
        logging.error(f"Error reading file {path}: {e}")
        return None

    return content

def get_git_submodule_dirs(repo_root: Path) -> set[Path]:
    """
    Return the absolute paths of every Git sub-module declared in .gitmodules.
    Cost: O(lines in .gitmodules) – run once.
    """
    gm = repo_root / ".gitmodules"
    if not gm.exists():
        return set()

    sub_dirs: set[Path] = set()
    with gm.open("r", encoding="utf-8", errors="ignore") as f:
        for line in f:
            line = line.strip()
            if line.startswith("path"):
                # line:  path = some/dir
                _, path_str = line.split("=", 1)
                sub_dirs.add((repo_root / path_str.strip()).resolve())
    return sub_dirs

def copy_to_clipboard(text: str):
    """Copies text to the system clipboard."""
    try:
        import pyperclip
        pyperclip.copy(text)
        logging.info("Content successfully copied to clipboard using pyperclip.")
    except ImportError:
         logging.warning("pyperclip not found. Attempting system-specific commands.")
         system = platform.system()
         try:
             if system == "Darwin":  # macOS
                 process = subprocess.Popen('pbcopy', env={'LANG': 'en_US.UTF-8'}, stdin=subprocess.PIPE)
                 process.communicate(text.encode('utf-8'))
                 logging.info("Content copied to clipboard using pbcopy (macOS).")
             elif system == "Linux":
                 # Try Wayland's wl-copy first
                 try:
                     process = subprocess.Popen(['wl-copy'], stdin=subprocess.PIPE)
                     process.communicate(text.encode('utf-8'))
                     logging.info("Content copied to clipboard using wl-copy (Wayland).")
                 except FileNotFoundError:
                     logging.warning("wl-copy not found. Trying xclip (X11).")
                     # Fallback to X11's xclip
                     try:
                         process = subprocess.Popen(['xclip', '-selection', 'clipboard'], stdin=subprocess.PIPE)
                         process.communicate(text.encode('utf-8'))
                         logging.info("Content copied to clipboard using xclip (X11).")
                     except FileNotFoundError:
                         logging.error("Error: Neither wl-copy nor xclip found on Linux. Cannot copy to clipboard.")
                         print("\n--- SCRIPT OUTPUT (Could not copy to clipboard) ---")
                         print(text)
                         print("--- END SCRIPT OUTPUT ---")
                         return # Avoid further error messages

             else:
                 logging.error(f"Clipboard access not supported on this platform ({system}) via subprocess.")
                 print("\n--- SCRIPT OUTPUT (Could not copy to clipboard) ---")
                 print(text)
                 print("--- END SCRIPT OUTPUT ---")
         except Exception as e:
              logging.error(f"Error copying to clipboard using system command: {e}")
              print("\n--- SCRIPT OUTPUT (Error copying to clipboard) ---")
              print(text)
              print("--- END SCRIPT OUTPUT ---")

# --- Argument Parsing ---
def parse_arguments():
    parser = argparse.ArgumentParser(
        description="Scans a directory recursively for relevant files (excluding specific folders), formats their content, and copies it to the clipboard.",
        formatter_class=argparse.ArgumentDefaultsHelpFormatter
    )
    parser.add_argument(
        "target_dir",
        nargs="?",
        default=".",
        help="The target directory to scan recursively."
    )
    parser.add_argument(
        "-v", "--verbose",
        action="store_true",
        help="Enable debug logging."
    )
    parser.add_argument(
        "--submodules",
        action="store_true",
        help="Include files that live inside Git sub-modules."
    )
    # Example for future extension: allow adding exclusions
    # parser.add_argument(
    #     "--exclude-dir",
    #     action="append",
    #     default=[],
    #     help="Add a directory name to exclude (case-insensitive). Can be used multiple times."
    # )

    return parser.parse_args()

# --- Main Logic ---

def main():
    args = parse_arguments()

    if args.verbose:
        logging.getLogger().setLevel(logging.DEBUG)

    target_dir_path = Path(args.target_dir)

    if not target_dir_path.is_dir():
        logging.error(f"Error: Target directory '{target_dir_path}' not found or is not a directory.")
        sys.exit(1)

    target_dir = target_dir_path.resolve() # Use absolute path
    submodule_roots = get_git_submodule_dirs(target_dir)

    # --- File Scanning (Recursive BFS with Exclusions) ---
    files_to_process = []
    queue = [target_dir] # Start BFS queue with the resolved target directory
    visited_dirs = {target_dir} # Keep track of visited directories to avoid cycles

    logging.info(f"Scanning directory recursively: {target_dir}")
    logging.info(f"Excluding directory names (case-insensitive): {', '.join(sorted(EXCLUDED_DIRS))}")

    while queue:
        current_dir = queue.pop(0)
        logging.debug(f"Scanning in: {current_dir}")

        try:
            # Sort items alphabetically within the directory for consistent processing order
            items_in_dir = sorted(current_dir.iterdir(), key=lambda p: p.name)

            for item in items_in_dir:
                # 1. Skip Symbolic Links entirely to avoid complexity/cycles
                if item.is_symlink():
                     logging.debug(f"Skipping symbolic link: {item}")
                     continue

                # 2. Process Directories
                if item.is_dir():
                    dir_name_lower = item.name.lower()
                    resolved_item = item.resolve() # Resolve to handle relative paths and check visited

                    if dir_name_lower in EXCLUDED_DIRS:
                        logging.debug(f"Skipping excluded directory: {item}")
                        continue # Skip this directory and its contents

                    if (not args.submodules) and resolved_item in submodule_roots:
                        logging.debug(f"Skipping sub-module: {item} (use --submodules to include)")
                        continue

                    if resolved_item not in visited_dirs:
                        visited_dirs.add(resolved_item)
                        queue.append(item) # Add directory to queue for further scanning
                        logging.debug(f"Adding directory to scan queue: {item}")
                    else:
                        logging.debug(f"Already visited directory: {item}")


                # 3. Process Files
                elif item.is_file():
                     # Check if it's a target file type (CMakeLists.txt or matching suffix)
                     if item.name == "CMakeLists.txt" or item.suffix.lower() in FILE_PRIORITIES:
                         files_to_process.append(item) # Collect the file Path object

        except PermissionError:
            logging.warning(f"Permission denied accessing: {current_dir}")
        except FileNotFoundError:
             logging.warning(f"Directory not found during scan (might have been deleted): {current_dir}")
        except Exception as e:
             logging.error(f"Error scanning directory {current_dir}: {e}")


    # Sort collected files: Priority first, then alphabetically by full relative path
    def sort_key(path_obj):
        priority = get_file_priority(path_obj)
        try:
            # Ensure consistent sorting using POSIX-style relative paths
            relative_path_str = str(path_obj.relative_to(target_dir).as_posix())
        except ValueError:
             # Fallback if somehow not relative (shouldn't happen with current logic but safe)
            relative_path_str = str(path_obj.as_posix())
        return (priority, relative_path_str)

    sorted_files = sorted(files_to_process, key=sort_key)
    logging.info(f"Found {len(sorted_files)} relevant files across all scanned subdirectories.")

    # --- Build the output string ---
    output = io.StringIO()
    output.write(f"# Context for Folder: {target_dir} (Recursive Scan)\n\n")

    for file_path in sorted_files:
        try:
            # Use POSIX paths for consistency in the output markdown
            relative_path = file_path.relative_to(target_dir).as_posix()
        except ValueError:
            logging.warning(f"Could not determine relative path for {file_path} relative to {target_dir}. Using absolute path.")
            relative_path = file_path.as_posix()

        logging.debug(f"Processing: {relative_path} (Priority: {get_file_priority(file_path)})")

        content = read_file_content(file_path)
        if content is None:
            logging.warning(f"Skipping file due to read/conversion error or incompatible encoding: {relative_path}")
            continue

        lang = get_markdown_language(file_path)

        output.write(f"## ./{relative_path}\n") # Prepend ./ for clarity
        if lang != 'md':
            output.write(f"```{lang}\n")
        output.write(content.strip()) # Remove leading/trailing whitespace from content
        
        if lang != 'md':
            output.write("\n```\n\n")

    prefix = """
When adding to the codebase, do your best to use the existing codebase for inspiration and avoid commenting every single line. Avoid dependencies as duplicated code can often be better than non-duplicated code in instances such as these.
"""
    final_output = prefix.strip() + output.getvalue()
    output.close()

    # --- Copy to clipboard ---
    if final_output.strip(): # Check if there's non-whitespace content
        copy_to_clipboard(final_output)
    else:
        logging.info("No relevant files found or processed. Nothing to copy.")

if __name__ == "__main__":
    main()