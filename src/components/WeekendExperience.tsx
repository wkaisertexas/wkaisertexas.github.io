import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type BookPage = {
  eyebrow: string;
  title: string;
  items: string[];
  flourish?: string;
  packing?: boolean;
  love?: boolean;
};

const pages: BookPage[] = [
  {
    eyebrow: "Day 01",
    title: "Friday",
    flourish: "A lovely beginning",
    items: [
      "Arrive — 6:00 PM",
      "Sunset walk",
      "Dinner: Scallops and Polenta in a bell pepper sauce",
      "Movie at home",
    ],
  },
  {
    eyebrow: "Day 02",
    title: "Saturday",
    flourish: "Make a splash",
    items: [
      "Wake around 10 AM",
      "Cassel Earth Coffee",
      "Meander back home",
      "Bacon-and-eggs breakfast",
      "Pool — 2:00 PM",
      "Read and play",
      "Shower and refresh",
      "Billiards at Appt. — 5:30 PM",
      "Dinner Out.",
    ],
  },
  {
    eyebrow: "Day 03",
    title: "Sunday",
    flourish: "Take the scenic route",
    items: [
      "Wake around 10 AM",
      "Hike Buck Gully (1 hour)",
      "Huntington Beach coffee -> libray -> park",
      "Boss's party — 2:00 PM",
      "Ally leaves to see friend",
    ],
  },
  {
    eyebrow: "For the bag",
    title: "Packing list",
    flourish: "Bring the essentials",
    packing: true,
    items: [
      "LBD",
      "Swimsuit",
      "Sunscreen",
      "Sunglasses",
      "Walking shoes",
      "Weekend casual outfits",
      "Casual party outfit",
      "Black Lululemon Align leggings",
      "Pajamas",
      "Toiletries",
      "Book",
    ],
  },
  {
    eyebrow: "",
    title: "I love you Ally",
    love: true,
    items: [],
  },
];

const vertexShader = /* glsl */ `
  void main() {
    gl_Position = vec4(position, 1.0);
  }
`;

// Power-8 White–Nylander Mandelbulb with the customary distance estimate.
// References: mathworld.wolfram.com/Mandelbulb.html and paulbourke.net/fractals/bulb/
const fragmentShader = /* glsl */ `
  precision highp float;

  uniform vec2 uResolution;
  uniform vec2 uPointer;
  uniform float uTime;

  #define PI 3.14159265359

  mat2 rotate2d(float angle) {
    float c = cos(angle);
    float s = sin(angle);
    return mat2(c, -s, s, c);
  }

  float hash21(vec2 point) {
    point = fract(point * vec2(123.34, 456.21));
    point += dot(point, point + 45.32);
    return fract(point.x * point.y);
  }

  float mandelbulb(vec3 point, out float orbit) {
    vec3 z = point;
    float derivative = 1.0;
    float radius = 0.0;
    orbit = 10.0;

    for (int iteration = 0; iteration < 8; iteration++) {
      radius = length(z);
      orbit = min(orbit, radius);
      if (radius > 2.5) break;

      float safeRadius = max(radius, 0.00001);
      float theta = acos(clamp(z.z / safeRadius, -1.0, 1.0));
      float phi = atan(z.y, z.x);
      float radiusToSeven = pow(safeRadius, 7.0);
      derivative = 8.0 * radiusToSeven * derivative + 1.0;
      float radiusToEight = radiusToSeven * safeRadius;

      theta *= 8.0;
      phi *= 8.0;
      z = radiusToEight * vec3(
        sin(theta) * cos(phi),
        sin(phi) * sin(theta),
        cos(theta)
      ) + point;
    }

    return 0.5 * log(max(radius, 1.00001)) * radius / derivative;
  }

  float sceneDistance(vec3 point, out float orbit) {
    point.yz = rotate2d(-0.42) * point.yz;
    point.xz = rotate2d(0.24 + sin(uTime * 0.13) * 0.12) * point.xz;
    return mandelbulb(point, orbit);
  }

  vec3 getNormal(vec3 point) {
    float orbit;
    vec2 epsilon = vec2(0.0012, 0.0);
    float center = sceneDistance(point, orbit);
    return normalize(vec3(
      sceneDistance(point + epsilon.xyy, orbit) - center,
      sceneDistance(point + epsilon.yxy, orbit) - center,
      sceneDistance(point + epsilon.yyx, orbit) - center
    ));
  }

  vec3 background(vec2 uv, vec3 ray) {
    float horizon = smoothstep(-0.55, 0.7, ray.y);
    vec3 color = mix(vec3(0.012, 0.014, 0.035), vec3(0.055, 0.025, 0.09), horizon);
    float bloom = pow(max(0.0, dot(ray, normalize(vec3(-0.7, 0.45, -0.4)))), 18.0);
    color += vec3(0.56, 0.24, 0.72) * bloom * 0.7;

    vec2 starCell = floor((uv + 2.0) * 115.0);
    float star = step(0.994, hash21(starCell));
    float twinkle = 0.55 + 0.45 * sin(uTime * 1.4 + hash21(starCell + 7.0) * 20.0);
    color += vec3(0.9, 0.75, 0.46) * star * twinkle * 0.55;
    return color;
  }

  void main() {
    vec2 uv = (gl_FragCoord.xy * 2.0 - uResolution.xy) / min(uResolution.x, uResolution.y);
    uv.y *= -1.0;
    vec2 fractalUv = uv;
    fractalUv.y -= 0.3;

    vec3 rayOrigin = vec3(0.0, 0.0, 3.45);
    vec3 rayDirection = normalize(vec3(fractalUv * 0.72, -1.75));
    float pointerTurn = uPointer.x * 0.24;
    float pointerTilt = uPointer.y * 0.12;
    rayOrigin.xz = rotate2d(pointerTurn) * rayOrigin.xz;
    rayDirection.xz = rotate2d(pointerTurn) * rayDirection.xz;
    rayOrigin.yz = rotate2d(pointerTilt) * rayOrigin.yz;
    rayDirection.yz = rotate2d(pointerTilt) * rayDirection.yz;

    vec3 color = background(uv, rayDirection);
    float travel = 0.0;
    float orbit = 10.0;
    float glow = 0.0;
    int steps = 0;

    for (int index = 0; index < 64; index++) {
      vec3 point = rayOrigin + rayDirection * travel;
      float localOrbit;
      float distanceToScene = sceneDistance(point, localOrbit);
      orbit = min(orbit, localOrbit);
      glow += exp(-10.0 * abs(distanceToScene)) * 0.0027;
      travel += max(distanceToScene * 0.76, 0.0008);
      steps = index;
      if (distanceToScene < 0.0012 || travel > 7.0) break;
    }

    if (travel < 7.0) {
      vec3 point = rayOrigin + rayDirection * travel;
      vec3 normal = getNormal(point);
      vec3 lightDirection = normalize(vec3(-0.65, 0.8, 0.55));
      float diffuse = max(dot(normal, lightDirection), 0.0);
      float rim = pow(1.0 - max(dot(normal, -rayDirection), 0.0), 2.6);
      float detail = smoothstep(0.0, 1.0, 1.0 - orbit);
      float occlusion = 1.0 - float(steps) / 84.0;

      vec3 deepViolet = vec3(0.055, 0.025, 0.11);
      vec3 burnishedGold = vec3(0.95, 0.55, 0.12);
      vec3 pearl = vec3(1.0, 0.84, 0.55);
      color = mix(deepViolet, burnishedGold, diffuse * 0.72 + detail * 0.28);
      color += pearl * rim * 0.78;
      color *= 0.56 + occlusion * 0.62;
      color += vec3(0.32, 0.12, 0.5) * glow;
    } else {
      color += vec3(0.34, 0.12, 0.48) * glow;
    }

    float vignette = 1.0 - smoothstep(0.55, 1.65, length(uv));
    color *= 0.56 + vignette * 0.44;
    color = pow(color, vec3(0.82));
    gl_FragColor = vec4(color, 1.0);
  }
`;

function Page({ page, number }: { page: BookPage; number: number }) {
  if (page.love) {
    return (
      <article className="book-page love-page">
        <p>I love you Ally</p>
      </article>
    );
  }

  return (
    <article className={`book-page ${page.packing ? "packing-page" : ""}`}>
      <div className="page-heading">
        <span>{page.eyebrow}</span>
        <span>{String(number + 1).padStart(2, "0")}</span>
      </div>
      <h2>{page.title}</h2>
      <ul>
        {page.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      {page.flourish && <div className="page-flourish" aria-hidden="true">{page.flourish}</div>}
    </article>
  );
}

export default function WeekendExperience() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [turnDirection, setTurnDirection] = useState<"forward" | "backward" | null>(null);
  const turningRef = useRef(false);
  const turnTimerRef = useRef<number | null>(null);
  const swipeStartRef = useRef<number | null>(null);
  const didSwipeRef = useRef(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 700px)");
    const update = () => {
      setIsMobile(media.matches);
      if (!media.matches) {
        setPageIndex((current) => Math.min(Math.floor(current / 2) * 2, Math.floor((pages.length - 1) / 2) * 2));
      }
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const experience = experienceRef.current;
    if (!canvas || !experience) return;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false,
      powerPreference: "high-performance",
    });
    const scene = new THREE.Scene();
    const camera = new THREE.Camera();
    const pointer = new THREE.Vector2();
    const pointerTarget = new THREE.Vector2();
    const uniforms = {
      uResolution: { value: new THREE.Vector2(1, 1) },
      uPointer: { value: pointer },
      uTime: { value: 0 },
    };
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms });
    const geometry = new THREE.PlaneGeometry(2, 2);
    scene.add(new THREE.Mesh(geometry, material));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = new THREE.Clock();
    let animationFrame = 0;

    const resize = () => {
      const { width, height } = experience.getBoundingClientRect();
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 700 ? 0.58 : 0.82));
      renderer.setSize(width, height, false);
      renderer.getDrawingBufferSize(uniforms.uResolution.value);
    };

    const onPointerMove = (event: PointerEvent) => {
      const bounds = experience.getBoundingClientRect();
      pointerTarget.set(
        ((event.clientX - bounds.left) / bounds.width - 0.5) * 2,
        ((event.clientY - bounds.top) / bounds.height - 0.5) * 2,
      );
    };

    const render = () => {
      pointer.lerp(pointerTarget, reducedMotion ? 1 : 0.035);
      uniforms.uTime.value = reducedMotion ? 1.5 : clock.getElapsedTime();
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener("resize", resize);
    experience.addEventListener("pointermove", onPointerMove);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      experience.removeEventListener("pointermove", onPointerMove);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  const visiblePages = useMemo(() => {
    if (isMobile) return [{ page: pages[pageIndex], index: pageIndex }];
    const spreadStart = Math.floor(pageIndex / 2) * 2;
    return [
      { page: pages[spreadStart], index: spreadStart },
      ...(pages[spreadStart + 1] ? [{ page: pages[spreadStart + 1], index: spreadStart + 1 }] : []),
    ];
  }, [isMobile, pageIndex]);

  const step = isMobile ? 1 : 2;
  const lastIndex = isMobile ? pages.length - 1 : Math.floor((pages.length - 1) / 2) * 2;
  const progress = isMobile ? pageIndex + 1 : Math.floor(pageIndex / 2) + 1;
  const total = isMobile ? pages.length : Math.ceil(pages.length / 2);

  const turnPage = useCallback((direction: "forward" | "backward") => {
    if (turningRef.current) return;
    const target = direction === "forward"
      ? Math.min(pageIndex + step, lastIndex)
      : Math.max(pageIndex - step, 0);
    if (target === pageIndex) return;

    turningRef.current = true;
    setTurnDirection(direction);
    setPageIndex(target);
    turnTimerRef.current = window.setTimeout(() => {
      turningRef.current = false;
      setTurnDirection(null);
      turnTimerRef.current = null;
    }, 1100);
  }, [lastIndex, pageIndex, step]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
      if (!isOpen) return;
      if (event.key === "ArrowRight") turnPage("forward");
      if (event.key === "ArrowLeft") turnPage("backward");
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, turnPage]);

  useEffect(() => {
    const experience = experienceRef.current;
    if (!experience || !isOpen) return;
    let accumulatedScroll = 0;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (turningRef.current) {
        accumulatedScroll = 0;
        return;
      }

      accumulatedScroll += event.deltaY;
      if (Math.abs(accumulatedScroll) < 150) return;
      turnPage(accumulatedScroll > 0 ? "forward" : "backward");
      accumulatedScroll = 0;
    };

    experience.addEventListener("wheel", onWheel, { passive: false });
    return () => experience.removeEventListener("wheel", onWheel);
  }, [isOpen, turnPage]);

  useEffect(() => () => {
    if (turnTimerRef.current !== null) window.clearTimeout(turnTimerRef.current);
  }, []);

  const onSpreadClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (didSwipeRef.current) {
      didSwipeRef.current = false;
      return;
    }
    const bounds = event.currentTarget.getBoundingClientRect();
    const position = (event.clientX - bounds.left) / bounds.width;
    turnPage(position < (isMobile ? 0.28 : 0.5) ? "backward" : "forward");
  };

  const onSpreadPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    swipeStartRef.current = event.clientY;
    didSwipeRef.current = false;
  };

  const onSpreadPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (swipeStartRef.current === null) return;
    const distance = event.clientY - swipeStartRef.current;
    swipeStartRef.current = null;
    if (Math.abs(distance) < 45) return;
    didSwipeRef.current = true;
    turnPage(distance < 0 ? "forward" : "backward");
  };

  return (
    <section className={`weekend-experience ${isOpen ? "is-open" : ""}`} ref={experienceRef}>
      <canvas className="fractal-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="fractal-wash" aria-hidden="true" />

      <header className="experience-title">
        <p>Three days · just us</p>
        <h1>A weekend adventure</h1>
      </header>

      <div className="book-stage">
        <div className="book-object">
          <div
            className="book-spread"
            aria-live="polite"
            aria-hidden={!isOpen}
            onClick={onSpreadClick}
            onPointerDown={onSpreadPointerDown}
            onPointerUp={onSpreadPointerUp}
          >
            {visiblePages.map(({ page, index }) => <Page page={page} number={index} key={`${index}-${pageIndex}-${isMobile}`} />)}
          </div>

          {isOpen && turnDirection && <div className={`turning-sheet ${turnDirection}`} aria-hidden="true" />}

          <button
            className="front-cover"
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label="Open our weekend book"
            aria-hidden={isOpen}
            tabIndex={isOpen ? -1 : 0}
          >
            <span className="cover-rule" aria-hidden="true" />
            <span className="cover-kicker">Our weekend</span>
            <span className="cover-script">together</span>
            <span className="cover-mark" aria-hidden="true">✦</span>
            <span className="cover-date">California · 2026</span>
          </button>
        </div>
      </div>

      {!isOpen && <p className="open-instruction">Click the cover to begin <span>↗</span></p>}

      {isOpen && (
        <nav className="book-controls" aria-label="Book navigation">
          <button type="button" onClick={() => turnPage("backward")} disabled={pageIndex === 0}>
            ← Previous
          </button>
          <span>Scroll or tap · {progress} / {total}</span>
          <button type="button" onClick={() => turnPage("forward")} disabled={pageIndex >= lastIndex}>
            Next →
          </button>
        </nav>
      )}

      {isOpen && (
        <button className="close-book" type="button" onClick={() => { setIsOpen(false); setPageIndex(0); }}>
          Close book
        </button>
      )}

      <a className="shader-credit" href="https://mathworld.wolfram.com/Mandelbulb.html" target="_blank" rel="noreferrer">
        Power-8 Mandelbulb · WebGL
      </a>
    </section>
  );
}
