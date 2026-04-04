"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { experiences, type Experience } from "@/constants/experiences";

const MOVE_SPEED = 4;
const BOUNDS = 13;
const PAINT_W = 3.4;
const PAINT_H = 2.4;
const WALL_Z = -12.6;
const PAINT_Y = 4.0;
const PAINT_POSITIONS = [-9, -4.5, 0, 4.5, 9];

const TECH_STACK = [
  { name: "TypeScript",    color: 0x3178c6 },
  { name: "JavaScript",   color: 0xf7df1e },
  { name: "Python",       color: 0x3572a5 },
  { name: "React",        color: 0x61dafb },
  { name: "Next.js",      color: 0xffffff },
  { name: "React Native", color: 0x61dafb },
  { name: "Angular",      color: 0xdd0031 },
  { name: "Nest.js",      color: 0xe0234e },
  { name: "Node.js",      color: 0x339933 },
  { name: "Docker",       color: 0x2496ed },
  { name: "AWS",          color: 0xff9900 },
  { name: "PostgreSQL",   color: 0x336791 },
  { name: "MongoDB",      color: 0x47a248 },
  { name: "Firebase",     color: 0xffca28 },
  { name: "Ionic",        color: 0x3880ff },
];

type HobbyInfo = { title: string; category: string; desc: string; accent: string };
const HOBBIES: HobbyInfo[] = [
  { title: "Travel",        category: "Hobby",     accent: "#2D4A6E", desc: "Exploring different cultures sharpens perspective in life. Remote work has let me turn the world into my office." },
  { title: "Sports",        category: "Passion",   accent: "#E85D26", desc: "Football fanatic & amateur runner. Football, running, and weightlifting are my go-to for recharging after deep work." },
  { title: "Remote Work",   category: "Lifestyle", accent: "#4466ff", desc: "5+ years of async-first distributed work. Built frameworks for remote team health, rituals, and knowledge sharing." },
  { title: "Music & Books", category: "Always",    accent: "#9b59b6", desc: "I listen to music 90% of the time. Self improvement, fiction, and history — always have a book on the nightstand." },
];

const STATS = [
  { value: "5+",   label: "YEARS",  sub: "of experience" },
  { value: "2",    label: "TEAMS",  sub: "led as Tech Lead" },
  { value: "+10k", label: "USERS",  sub: "served globally" },
];

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let current = "";
  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (ctx.measureText(test).width > maxWidth && current) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function createPaintingTexture(exp: Experience): THREE.CanvasTexture {
  const W = 512, H = 384;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  // Background
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#0d1117");
  grad.addColorStop(1, "#0a0f1e");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, W, H);

  // Top accent bar
  ctx.fillStyle = "#E85D26";
  ctx.fillRect(0, 0, W, 6);

  const pad = 28;
  let y = 54;

  // Role
  ctx.fillStyle = "#ffffff";
  ctx.font = 'bold 28px Arial, sans-serif';
  const roleLines = wrapText(ctx, exp.role, W - pad * 2);
  for (const line of roleLines.slice(0, 2)) {
    ctx.fillText(line, pad, y);
    y += 34;
  }
  y += 4;

  // Company
  ctx.fillStyle = "#5599ff";
  ctx.font = 'bold 20px Arial, sans-serif';
  ctx.fillText(exp.company, pad, y);
  y += 28;

  // Period · Location
  ctx.fillStyle = "#777777";
  ctx.font = '15px Arial, sans-serif';
  ctx.fillText(`${exp.period}  ·  ${exp.location}`, pad, y);
  y += 26;

  // Divider
  ctx.strokeStyle = "rgba(255,255,255,0.12)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad, y);
  ctx.lineTo(W - pad, y);
  ctx.stroke();
  y += 22;

  // First 2 highlights
  ctx.font = '13px Arial, sans-serif';
  for (const hl of exp.highlights.slice(0, 2)) {
    ctx.fillStyle = "#E85D26";
    ctx.fillText("▸", pad, y);
    ctx.fillStyle = "#999999";
    const truncated = hl.length > 62 ? hl.slice(0, 59) + "..." : hl;
    ctx.fillText(truncated, pad + 18, y);
    y += 24;
  }

  // Click hint
  ctx.fillStyle = "rgba(232,93,38,0.7)";
  ctx.font = 'bold 13px Arial, sans-serif';
  ctx.fillText("Click to read more →", pad, H - 20);

  return new THREE.CanvasTexture(canvas);
}

function createStatTexture(value: string, label: string, sub: string): THREE.CanvasTexture {
  const W = 256, H = 280;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#0d1117"); grad.addColorStop(1, "#0a0f1e");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#E85D26"; ctx.fillRect(0, 0, W, 5);
  ctx.textAlign = "center";
  ctx.fillStyle = "#ffffff"; ctx.font = "bold 68px Arial, sans-serif";
  ctx.fillText(value, W / 2, 118);
  ctx.fillStyle = "#E85D26"; ctx.font = "bold 20px Arial, sans-serif";
  ctx.fillText(label, W / 2, 156);
  ctx.fillStyle = "#555555"; ctx.font = "14px Arial, sans-serif";
  ctx.fillText(sub, W / 2, 184);
  return new THREE.CanvasTexture(canvas);
}

function createHobbyTexture(hobby: HobbyInfo): THREE.CanvasTexture {
  const W = 512, H = 384;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, "#0d1117"); grad.addColorStop(1, "#0a0f1e");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = hobby.accent; ctx.fillRect(0, 0, W, 6);
  const pad = 28;
  ctx.fillStyle = hobby.accent; ctx.font = "bold 12px Arial, sans-serif";
  ctx.fillText(hobby.category.toUpperCase(), pad, 44);
  ctx.fillStyle = "#ffffff"; ctx.font = "bold 38px Arial, sans-serif";
  ctx.fillText(hobby.title, pad, 90);
  ctx.strokeStyle = "rgba(255,255,255,0.08)"; ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad, 110); ctx.lineTo(W - pad, 110); ctx.stroke();
  ctx.fillStyle = "#888888"; ctx.font = "16px Arial, sans-serif";
  let y = 142;
  for (const line of wrapText(ctx, hobby.desc, W - pad * 2).slice(0, 6)) {
    ctx.fillText(line, pad, y); y += 26;
  }
  ctx.fillStyle = "rgba(232,93,38,0.65)"; ctx.font = "bold 13px Arial, sans-serif";
  ctx.fillText("Click to read more →", pad, H - 20);
  return new THREE.CanvasTexture(canvas);
}

function createOrbLabelTexture(name: string): THREE.CanvasTexture {
  const W = 256, H = 44;
  const canvas = document.createElement("canvas");
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "rgba(5,8,20,0.85)";
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#ffffff"; ctx.font = "bold 20px Arial, sans-serif";
  ctx.textAlign = "center"; ctx.textBaseline = "middle";
  ctx.fillText(name, W / 2, H / 2);
  return new THREE.CanvasTexture(canvas);
}

// ---------- Modal ----------
function ExperienceModal({ exp, onClose }: { exp: Experience; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-50 p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[82vh] overflow-y-auto rounded-2xl p-8"
        style={{ background: "#0d1117", border: "1px solid rgba(255,255,255,0.08)" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/30 hover:text-white text-lg transition-colors"
          style={{ lineHeight: 1 }}
        >
          ✕
        </button>

        {/* Top accent */}
        <div style={{ width: 40, height: 3, background: "#E85D26", borderRadius: 2, marginBottom: 20 }} />

        {/* Header */}
        <div className="mb-2" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: "#E85D26", textTransform: "uppercase" }}>
          {exp.period}
        </div>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: "#ffffff", marginBottom: 4, lineHeight: 1.2 }}>
          {exp.role}
        </h2>
        <div style={{ fontSize: 16, fontWeight: 700, color: "#5599ff", marginBottom: 4 }}>{exp.company}</div>
        <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", marginBottom: 24 }}>{exp.location}</div>

        {/* Divider */}
        <div style={{ height: 1, background: "rgba(255,255,255,0.07)", marginBottom: 24 }} />

        {/* Highlights */}
        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px 0", display: "flex", flexDirection: "column", gap: 12 }}>
          {exp.highlights.map((h, i) => (
            <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ color: "#E85D26", flexShrink: 0, marginTop: 1 }}>▸</span>
              <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.6 }}>{h}</span>
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {exp.tech.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 6,
                border: "1px solid rgba(85,153,255,0.25)",
                color: "#5599ff",
                background: "rgba(85,153,255,0.06)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HobbyModal({ hobby, onClose }: { hobby: HobbyInfo; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center z-50 p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl p-8"
        style={{ background: "#0d1117", border: "1px solid rgba(255,255,255,0.08)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white text-lg transition-colors">✕</button>
        <div style={{ width: 40, height: 3, background: hobby.accent, borderRadius: 2, marginBottom: 20 }} />
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", color: hobby.accent, textTransform: "uppercase", marginBottom: 8 }}>
          {hobby.category}
        </div>
        <h2 style={{ fontSize: 28, fontWeight: 900, color: "#ffffff", marginBottom: 20 }}>{hobby.title}</h2>
        <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>{hobby.desc}</p>
      </div>
    </div>
  );
}

// ---------- Main Scene ----------
export default function WorldScene() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [selectedExp, setSelectedExp] = useState<Experience | null>(null);
  const [selectedHobby, setSelectedHobby] = useState<HobbyInfo | null>(null);
  const zoneHintRef = useRef<HTMLDivElement>(null);
  const joystickBaseRef = useRef<HTMLDivElement>(null);
  const joystickKnobRef = useRef<HTMLDivElement>(null);
  const modalOpenRef = useRef(false);

  // Keep modalOpenRef in sync so touch handlers can skip input when a modal is open
  useEffect(() => {
    modalOpenRef.current = !!(selectedExp || selectedHobby);
  }, [selectedExp, selectedHobby]);

  // Lock to landscape on mobile (works on Android Chrome; silently ignored on iOS)
  useEffect(() => {
    const orientation = screen.orientation as ScreenOrientation & { lock?: (o: string) => Promise<void>; unlock?: () => void };
    orientation.lock?.("landscape").catch(() => {});
    return () => { orientation.unlock?.(); };
  }, []);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    scene.fog = new THREE.Fog(0x0a0a0a, 18, 45);

    // Camera
    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.set(0, 3, 7);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // cap at 2x — 3x DPR triples pixel cost
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    // Lights — keep total point lights low; directional + ambient carry most of the load
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.4);
    dirLight.position.set(5, 10, 5);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 512; // 512 is enough, saves shadow-map memory
    dirLight.shadow.mapSize.height = 512;
    scene.add(dirLight);

    const rimLight = new THREE.DirectionalLight(0x4466ff, 0.5);
    rimLight.position.set(-5, 3, -5);
    scene.add(rimLight);

    // Ground
    const groundGeo = new THREE.PlaneGeometry(30, 30);
    const groundMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.9 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid
    const grid = new THREE.GridHelper(30, 30, 0x222222, 0x222222);
    scene.add(grid);

    // --- Gallery Wall ---
    const wallMat = new THREE.MeshStandardMaterial({ color: 0x13192b, roughness: 0.95 });
    const wall = new THREE.Mesh(new THREE.BoxGeometry(30, 12, 0.4), wallMat);
    wall.position.set(0, 6, WALL_Z - 0.2);
    wall.receiveShadow = true;
    scene.add(wall);

    // Floor strip in front of wall (subtle carpet feel)
    const carpetMat = new THREE.MeshStandardMaterial({ color: 0x0f0f1a, roughness: 1 });
    const carpet = new THREE.Mesh(new THREE.PlaneGeometry(30, 4), carpetMat);
    carpet.rotation.x = -Math.PI / 2;
    carpet.position.set(0, 0.001, WALL_Z + 2);
    scene.add(carpet);

    // --- Neon title ---
    const neonCanvas = document.createElement("canvas");
    neonCanvas.width = 1024;
    neonCanvas.height = 160;
    const nctx = neonCanvas.getContext("2d")!;

    const neonColor = "#00e5ff";
    nctx.clearRect(0, 0, 1024, 160);
    nctx.font = 'bold 80px Arial, sans-serif';
    nctx.textAlign = "center";
    nctx.textBaseline = "middle";

    // Layered glow passes
    for (let pass = 0; pass < 4; pass++) {
      nctx.shadowColor = neonColor;
      nctx.shadowBlur = 10 + pass * 18;
      nctx.fillStyle = neonColor;
      nctx.fillText("WORK EXPERIENCE", 512, 80);
    }
    // Bright white core
    nctx.shadowBlur = 6;
    nctx.shadowColor = "#ffffff";
    nctx.fillStyle = "#ffffff";
    nctx.fillText("WORK EXPERIENCE", 512, 80);

    const neonTex = new THREE.CanvasTexture(neonCanvas);
    const neonMat = new THREE.MeshBasicMaterial({ map: neonTex, transparent: true });
    const neonSign = new THREE.Mesh(new THREE.PlaneGeometry(18, 2.4), neonMat);
    neonSign.position.set(0, 7.4, WALL_Z + 0.15);
    scene.add(neonSign);

    // Subtle coloured point light to cast neon glow onto the wall
    const neonLight = new THREE.PointLight(0x00e5ff, 0.6, 8);
    neonLight.position.set(0, 7.4, WALL_Z + 1.5);
    scene.add(neonLight);

    // --- Paintings ---
    const paintingMeshes: THREE.Mesh[] = [];
    const frameMat = new THREE.MeshStandardMaterial({ color: 0xc8a84b, roughness: 0.3, metalness: 0.6 });

    experiences.forEach((exp, i) => {
      const px = PAINT_POSITIONS[i];

      // Frame (slightly larger than painting)
      const frame = new THREE.Mesh(
        new THREE.BoxGeometry(PAINT_W + 0.22, PAINT_H + 0.22, 0.1),
        frameMat
      );
      frame.position.set(px, PAINT_Y, WALL_Z + 0.07);
      frame.castShadow = true;
      scene.add(frame);

      // Painting canvas
      const texture = createPaintingTexture(exp);
      const paintingMat = new THREE.MeshStandardMaterial({ map: texture, roughness: 0.85 });
      const painting = new THREE.Mesh(new THREE.PlaneGeometry(PAINT_W, PAINT_H), paintingMat);
      painting.position.set(px, PAINT_Y, WALL_Z + 0.13);
      scene.add(painting);
      paintingMeshes.push(painting);

      // (lighting handled by single gallery zone light below)
    });

    // Single wide point light for the entire gallery wall — replaces 5 individual spotlights
    const galleryLight = new THREE.PointLight(0xfff5e0, 1.4, 18);
    galleryLight.position.set(0, PAINT_Y + 4, WALL_Z + 5);
    scene.add(galleryLight);

    // --- Stats pedestals ---
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xc8a84b, roughness: 0.3, metalness: 0.7 });
    const pillarMat = new THREE.MeshStandardMaterial({ color: 0x0d1117, roughness: 0.8, metalness: 0.2 });
    STATS.forEach((s, i) => {
      const px = (i - 1) * 5; // -5, 0, 5
      const pz = -6;
      // Base plinth
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.18, 1.0), goldMat);
      base.position.set(px, 0.09, pz);
      base.castShadow = true;
      scene.add(base);
      // Pillar
      const pillar = new THREE.Mesh(new THREE.BoxGeometry(0.7, 2.0, 0.7), pillarMat);
      pillar.position.set(px, 1.18, pz);
      pillar.castShadow = true;
      scene.add(pillar);
      // Gold cap
      const cap = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.12, 0.85), goldMat);
      cap.position.set(px, 2.24, pz);
      scene.add(cap);
      // Canvas sign (double-sided, faces +z toward player approach)
      const tex = createStatTexture(s.value, s.label, s.sub);
      const sign = new THREE.Mesh(
        new THREE.PlaneGeometry(1.0, 1.1),
        new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide })
      );
      sign.position.set(px, 1.35, pz + 0.36);
      scene.add(sign);
      // (no per-pedestal point light — ambient + directional is sufficient)
    });

    // --- Tech Stack wall (left, x = -12.8) ---
    const techWallMat = new THREE.MeshStandardMaterial({ color: 0x080d18, roughness: 0.95 });
    const techWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 14, 24), techWallMat);
    techWall.position.set(-12.8, 7, -3);
    scene.add(techWall);

    // Neon "TECH STACK" sign on left wall
    const techNeonCanvas = document.createElement("canvas");
    techNeonCanvas.width = 512; techNeonCanvas.height = 80;
    const tnCtx = techNeonCanvas.getContext("2d")!;
    const techNeonColor = "#00ff88";
    tnCtx.font = "bold 58px Arial, sans-serif";
    tnCtx.textAlign = "center"; tnCtx.textBaseline = "middle";
    for (let p = 0; p < 4; p++) {
      tnCtx.shadowColor = techNeonColor; tnCtx.shadowBlur = 8 + p * 16;
      tnCtx.fillStyle = techNeonColor; tnCtx.fillText("TECH STACK", 256, 40);
    }
    tnCtx.shadowBlur = 4; tnCtx.shadowColor = "#ffffff";
    tnCtx.fillStyle = "#ffffff"; tnCtx.fillText("TECH STACK", 256, 40);
    const techNeonSign = new THREE.Mesh(
      new THREE.PlaneGeometry(9, 1.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(techNeonCanvas), transparent: true })
    );
    techNeonSign.position.set(-12.58, 9.5, -3);
    techNeonSign.rotation.y = Math.PI / 2;
    scene.add(techNeonSign);
    const techNeonLight = new THREE.PointLight(0x00ff88, 0.5, 7);
    techNeonLight.position.set(-11.5, 9.5, -3);
    scene.add(techNeonLight);

    // Tech orbs — 3 rows × 5 cols
    const orbMeshes: THREE.Mesh[] = [];
    const orbLabels: THREE.Mesh[] = [];
    const ORB_COLS = 5;
    TECH_STACK.forEach((tech, i) => {
      const col = i % ORB_COLS;
      const row = Math.floor(i / ORB_COLS);
      const ox = -11.4;
      const oy = 1.6 + row * 2.2;
      const oz = -1.0 - col * 2.6;
      // Orb — MeshBasicMaterial: emissive look with zero lighting cost; no shadow needed
      const orb = new THREE.Mesh(
        new THREE.SphereGeometry(0.38, 10, 8),
        new THREE.MeshBasicMaterial({ color: tech.color })
      );
      orb.position.set(ox, oy, oz);
      scene.add(orb);
      orbMeshes.push(orb);
      // Label billboard
      const labelTex = createOrbLabelTexture(tech.name);
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(1.5, 0.38),
        new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, depthWrite: false })
      );
      label.position.set(ox, oy + 0.62, oz);
      scene.add(label);
      orbLabels.push(label);
    });

    // --- About Me wall (right, x = +12.8) ---
    const aboutWallMat = new THREE.MeshStandardMaterial({ color: 0x0e0818, roughness: 0.95 });
    const aboutWall = new THREE.Mesh(new THREE.BoxGeometry(0.4, 14, 24), aboutWallMat);
    aboutWall.position.set(12.8, 7, -3);
    scene.add(aboutWall);

    // Neon "ABOUT ME" sign on right wall
    const aboutNeonCanvas = document.createElement("canvas");
    aboutNeonCanvas.width = 512; aboutNeonCanvas.height = 80;
    const anCtx = aboutNeonCanvas.getContext("2d")!;
    const aboutNeonColor = "#cc44ff";
    anCtx.font = "bold 62px Arial, sans-serif";
    anCtx.textAlign = "center"; anCtx.textBaseline = "middle";
    for (let p = 0; p < 4; p++) {
      anCtx.shadowColor = aboutNeonColor; anCtx.shadowBlur = 8 + p * 16;
      anCtx.fillStyle = aboutNeonColor; anCtx.fillText("ABOUT ME", 256, 40);
    }
    anCtx.shadowBlur = 4; anCtx.shadowColor = "#ffffff";
    anCtx.fillStyle = "#ffffff"; anCtx.fillText("ABOUT ME", 256, 40);
    const aboutNeonSign = new THREE.Mesh(
      new THREE.PlaneGeometry(8, 1.4),
      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(aboutNeonCanvas), transparent: true })
    );
    aboutNeonSign.position.set(12.58, 9.5, -3);
    aboutNeonSign.rotation.y = -Math.PI / 2;
    scene.add(aboutNeonSign);
    const aboutNeonLight = new THREE.PointLight(0xcc44ff, 0.5, 7);
    aboutNeonLight.position.set(11.5, 9.5, -3);
    scene.add(aboutNeonLight);

    // Hobby panels — 2×2 grid on right wall
    const hobbyMeshes: THREE.Mesh[] = [];
    const hobbyFrameMat = new THREE.MeshStandardMaterial({ color: 0x9b59b6, roughness: 0.35, metalness: 0.5 });
    HOBBIES.forEach((hobby, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      const hz = -2.5 - col * 5.0;
      const hy = 4.8 - row * 3.0;
      // Frame
      const hframe = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, PAINT_H + 0.22, PAINT_W + 0.22),
        hobbyFrameMat
      );
      hframe.position.set(12.58, hy, hz);
      scene.add(hframe);
      // Canvas
      const htex = createHobbyTexture(hobby);
      const hpanel = new THREE.Mesh(
        new THREE.PlaneGeometry(PAINT_W, PAINT_H),
        new THREE.MeshStandardMaterial({ map: htex, roughness: 0.85 })
      );
      hpanel.position.set(12.52, hy, hz);
      hpanel.rotation.y = -Math.PI / 2;
      scene.add(hpanel);
      hobbyMeshes.push(hpanel);
      // (lighting handled by single about-wall zone light below)
    });

    // Single wide point light for the about-me wall — replaces 4 individual spotlights
    const aboutLight = new THREE.PointLight(0xfff5e0, 1.2, 16);
    aboutLight.position.set(10, 5, -3);
    scene.add(aboutLight);

    // --- Character ---
    const character = new THREE.Group();
    scene.add(character);

    const bodyMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4, metalness: 0.1 });
    const accentMat = new THREE.MeshStandardMaterial({ color: 0x4466ff, roughness: 0.3, metalness: 0.2 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.6 });

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.9, 0.4), bodyMat);
    torso.position.y = 1.45;
    torso.castShadow = true;
    character.add(torso);

    const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.5, 0.42), accentMat);
    stripe.position.y = 1.5;
    character.add(stripe);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.55, 0.5), bodyMat);
    head.position.y = 2.18;
    head.castShadow = true;
    character.add(head);

    const eyeMat = new THREE.MeshStandardMaterial({ color: 0x4466ff, emissive: 0x4466ff, emissiveIntensity: 0.8 });
    const eyeGeo = new THREE.BoxGeometry(0.1, 0.07, 0.05);
    const leftEye = new THREE.Mesh(eyeGeo, eyeMat);
    leftEye.position.set(-0.12, 2.22, 0.26);
    character.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeo, eyeMat);
    rightEye.position.set(0.12, 2.22, 0.26);
    character.add(rightEye);

    const hips = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.2, 0.38), darkMat);
    hips.position.y = 0.95;
    character.add(hips);

    const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.9, 0.3), darkMat);
    leftLeg.position.set(-0.18, 0.45, 0);
    leftLeg.castShadow = true;
    character.add(leftLeg);

    const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.9, 0.3), darkMat);
    rightLeg.position.set(0.18, 0.45, 0);
    rightLeg.castShadow = true;
    character.add(rightLeg);

    const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.8, 0.22), bodyMat);
    leftArm.position.set(-0.5, 1.4, 0);
    leftArm.castShadow = true;
    character.add(leftArm);

    const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.8, 0.22), bodyMat);
    rightArm.position.set(0.5, 1.4, 0);
    rightArm.castShadow = true;
    character.add(rightArm);

    const footGeo = new THREE.BoxGeometry(0.3, 0.15, 0.4);
    const leftFoot = new THREE.Mesh(footGeo, accentMat);
    leftFoot.position.set(-0.18, 0.07, 0.05);
    character.add(leftFoot);
    const rightFoot = new THREE.Mesh(footGeo, accentMat);
    rightFoot.position.set(0.18, 0.07, 0.05);
    character.add(rightFoot);

    // --- Input ---
    const keys: Record<string, boolean> = {};
    const onKeyDown = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = true; };
    const onKeyUp = (e: KeyboardEvent) => { keys[e.key.toLowerCase()] = false; };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);

    // --- Camera orbit via drag ---
    const CAM_RADIUS = 7;
    let camAzimuth = 0;
    let camPolar = Math.PI / 6;
    let isDragging = false;
    let lastDragX = 0;
    let lastDragY = 0;
    let dragTotalDist = 0;

    const raycaster = new THREE.Raycaster();
    const mouseNDC = new THREE.Vector2();

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      lastDragX = e.clientX;
      lastDragY = e.clientY;
      dragTotalDist = 0;
      renderer.domElement.style.cursor = "grabbing";
    };
    const onMouseUp = (e: MouseEvent) => {
      const wasClick = dragTotalDist < 5;
      isDragging = false;
      renderer.domElement.style.cursor = "grab";

      if (wasClick) {
        const rect = renderer.domElement.getBoundingClientRect();
        mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouseNDC, camera);
        const hits = raycaster.intersectObjects([...paintingMeshes, ...hobbyMeshes]);
        if (hits.length > 0) {
          const hit = hits[0].object as THREE.Mesh;
          const expIdx = paintingMeshes.indexOf(hit);
          const hobbyIdx = hobbyMeshes.indexOf(hit);
          if (expIdx >= 0) setSelectedExp(experiences[expIdx]);
          else if (hobbyIdx >= 0) setSelectedHobby(HOBBIES[hobbyIdx]);
        }
      }
    };
    const onMouseMove = (e: MouseEvent) => {
      // Update NDC for hover
      const rect = renderer.domElement.getBoundingClientRect();
      mouseNDC.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseNDC.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouseNDCDirty = true;

      if (!isDragging) return;
      const dx = e.clientX - lastDragX;
      const dy = e.clientY - lastDragY;
      dragTotalDist += Math.abs(dx) + Math.abs(dy);
      lastDragX = e.clientX;
      lastDragY = e.clientY;
      camAzimuth -= dx * 0.005;
      camPolar = Math.max(0.05, Math.min(Math.PI / 2 - 0.05, camPolar + dy * 0.004));
    };

    renderer.domElement.style.cursor = "grab";
    renderer.domElement.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mousemove", onMouseMove);

    // --- Touch controls (mobile) ---
    const JOYSTICK_RADIUS = 52;
    const joystick = { active: false, touchId: -1, originX: 0, originY: 0, dx: 0, dy: 0 };
    const camTouch = { active: false, touchId: -1, lastX: 0, lastY: 0, totalDist: 0 };

    const onTouchStart = (e: TouchEvent) => {
      if (modalOpenRef.current) return;
      e.preventDefault();
      const rect = renderer.domElement.getBoundingClientRect();
      for (const touch of Array.from(e.changedTouches)) {
        const relX = touch.clientX - rect.left;
        if (!joystick.active && relX < rect.width * 0.42) {
          joystick.active = true;
          joystick.touchId = touch.identifier;
          // Use the center of the rendered base as the fixed origin
          const baseRect = joystickBaseRef.current?.getBoundingClientRect();
          joystick.originX = baseRect ? (baseRect.left + baseRect.right) / 2 : touch.clientX;
          joystick.originY = baseRect ? (baseRect.top + baseRect.bottom) / 2 : touch.clientY;
          joystick.dx = 0; joystick.dy = 0;
          if (joystickBaseRef.current) joystickBaseRef.current.style.opacity = "1";
          if (joystickKnobRef.current) joystickKnobRef.current.style.transform = "translate(0px,0px)";
        } else if (!camTouch.active) {
          camTouch.active = true;
          camTouch.touchId = touch.identifier;
          camTouch.lastX = touch.clientX;
          camTouch.lastY = touch.clientY;
          camTouch.totalDist = 0;
        }
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (modalOpenRef.current) return;
      e.preventDefault();
      for (const touch of Array.from(e.changedTouches)) {
        if (touch.identifier === joystick.touchId) {
          const rawDx = touch.clientX - joystick.originX;
          const rawDy = touch.clientY - joystick.originY;
          const dist = Math.sqrt(rawDx * rawDx + rawDy * rawDy);
          const clamped = Math.min(dist, JOYSTICK_RADIUS);
          const angle = Math.atan2(rawDy, rawDx);
          joystick.dx = Math.cos(angle) * clamped;
          joystick.dy = Math.sin(angle) * clamped;
          if (joystickKnobRef.current)
            joystickKnobRef.current.style.transform = `translate(${joystick.dx}px,${joystick.dy}px)`;
        } else if (touch.identifier === camTouch.touchId) {
          const dx = touch.clientX - camTouch.lastX;
          const dy = touch.clientY - camTouch.lastY;
          camTouch.totalDist += Math.abs(dx) + Math.abs(dy);
          camTouch.lastX = touch.clientX;
          camTouch.lastY = touch.clientY;
          camAzimuth -= dx * 0.005;
          camPolar = Math.max(0.05, Math.min(Math.PI / 2 - 0.05, camPolar + dy * 0.004));
        }
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (modalOpenRef.current) return;
      e.preventDefault();
      for (const touch of Array.from(e.changedTouches)) {
        if (touch.identifier === joystick.touchId) {
          joystick.active = false; joystick.touchId = -1;
          joystick.dx = 0; joystick.dy = 0;
          if (joystickBaseRef.current) joystickBaseRef.current.style.opacity = "0.5";
          if (joystickKnobRef.current) joystickKnobRef.current.style.transform = "translate(0px,0px)";
        } else if (touch.identifier === camTouch.touchId) {
          // Tap = raycasting click
          if (camTouch.totalDist < 10) {
            const rect = renderer.domElement.getBoundingClientRect();
            mouseNDC.x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
            mouseNDC.y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(mouseNDC, camera);
            const hits = raycaster.intersectObjects([...paintingMeshes, ...hobbyMeshes]);
            if (hits.length > 0) {
              const hit = hits[0].object as THREE.Mesh;
              const expIdx = paintingMeshes.indexOf(hit);
              const hobbyIdx = hobbyMeshes.indexOf(hit);
              if (expIdx >= 0) setSelectedExp(experiences[expIdx]);
              else if (hobbyIdx >= 0) setSelectedHobby(HOBBIES[hobbyIdx]);
            }
          }
          camTouch.active = false; camTouch.touchId = -1;
        }
      }
    };

    renderer.domElement.addEventListener("touchstart", onTouchStart, { passive: false });
    renderer.domElement.addEventListener("touchmove", onTouchMove, { passive: false });
    renderer.domElement.addEventListener("touchend", onTouchEnd, { passive: false });

    // Resize
    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    // State
    const charPos = new THREE.Vector3(0, 0, 0);
    let facingAngle = 0;
    let isMoving = false;

    let frameId: number;
    let prevTime = performance.now();
    let elapsed = 0;

    // Pre-allocate vectors to avoid per-frame heap allocation
    const _moveDir = new THREE.Vector3();
    const _targetCam = new THREE.Vector3();
    // Pre-build clickables array once — no spread allocation every frame
    const clickables: THREE.Mesh[] = [...paintingMeshes, ...hobbyMeshes];
    let mouseNDCDirty = false; // only raycast when mouse actually moved

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const now = performance.now();
      const dt = Math.min((now - prevTime) / 1000, 0.05);
      prevTime = now;
      elapsed += dt;
      const t = elapsed;

      // Movement
      const camFwdX = -Math.sin(camAzimuth);
      const camFwdZ = -Math.cos(camAzimuth);
      const camRgtX = Math.cos(camAzimuth);
      const camRgtZ = -Math.sin(camAzimuth);

      _moveDir.set(0, 0, 0);
      const moveDir = _moveDir;
      if (keys["w"] || keys["arrowup"])    { moveDir.x += camFwdX; moveDir.z += camFwdZ; }
      if (keys["s"] || keys["arrowdown"])  { moveDir.x -= camFwdX; moveDir.z -= camFwdZ; }
      if (keys["a"] || keys["arrowleft"])  { moveDir.x -= camRgtX; moveDir.z -= camRgtZ; }
      if (keys["d"] || keys["arrowright"]) { moveDir.x += camRgtX; moveDir.z += camRgtZ; }
      // Joystick (mobile) — nx/ny are -1..1; screen-y is inverted relative to world-z
      if (joystick.active) {
        const nx = joystick.dx / JOYSTICK_RADIUS;
        const ny = joystick.dy / JOYSTICK_RADIUS;
        moveDir.x += camFwdX * (-ny) + camRgtX * nx;
        moveDir.z += camFwdZ * (-ny) + camRgtZ * nx;
      }

      isMoving = moveDir.lengthSq() > 0;

      if (isMoving) {
        moveDir.normalize();
        const targetAngle = Math.atan2(moveDir.x, moveDir.z);
        let angleDiff = targetAngle - facingAngle;
        while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
        while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;
        facingAngle += angleDiff * Math.min(1, dt * 12);

        charPos.x += moveDir.x * MOVE_SPEED * dt;
        charPos.z += moveDir.z * MOVE_SPEED * dt;
        charPos.x = Math.max(-BOUNDS, Math.min(BOUNDS, charPos.x));
        charPos.z = Math.max(-BOUNDS, Math.min(BOUNDS, charPos.z));
      }

      character.position.x = charPos.x;
      character.position.z = charPos.z;
      character.rotation.y = facingAngle;

      const bobAmp = isMoving ? 0.07 : 0.04;
      const bobFreq = isMoving ? 8 : 2;
      character.position.y = Math.sin(t * bobFreq) * bobAmp;

      const legSwing = isMoving ? Math.sin(t * bobFreq) * 0.5 : 0;
      leftLeg.rotation.x = legSwing;
      rightLeg.rotation.x = -legSwing;
      leftFoot.position.z = 0.05 + (isMoving ? Math.sin(t * bobFreq) * 0.05 : 0);
      rightFoot.position.z = 0.05 - (isMoving ? Math.sin(t * bobFreq) * 0.05 : 0);

      const armSwing = isMoving ? Math.sin(t * bobFreq) * 0.5 : Math.sin(t * 2) * 0.25;
      leftArm.rotation.x = armSwing;
      rightArm.rotation.x = -armSwing;

      // Camera orbit
      const sinP = Math.cos(camPolar);
      const cosP = Math.sin(camPolar);
      const targetCamX = charPos.x + CAM_RADIUS * sinP * Math.sin(camAzimuth);
      const targetCamY = CAM_RADIUS * cosP + 1;
      const targetCamZ = charPos.z + CAM_RADIUS * sinP * Math.cos(camAzimuth);
      _targetCam.set(targetCamX, targetCamY, targetCamZ);
      camera.position.lerp(_targetCam, 0.1);
      camera.lookAt(charPos.x, 1, charPos.z);

      // Billboard labels always face camera
      for (const label of orbLabels) label.lookAt(camera.position);

      // Hover cursor — only raycast when mouse actually moved (mouseNDCDirty flag)
      if (!isDragging && mouseNDCDirty) {
        mouseNDCDirty = false;
        raycaster.setFromCamera(mouseNDC, camera);
        const hits = raycaster.intersectObjects(clickables);
        renderer.domElement.style.cursor = hits.length > 0 ? "pointer" : "grab";
      }

      // Zone proximity hint (direct DOM, no re-render)
      if (zoneHintRef.current) {
        const x = charPos.x, z = charPos.z;
        let hint = "";
        if (z > 2)        hint = "Walk forward to explore the gallery";
        else if (x < -7)  hint = "Tech Stack Zone — these are my tools";
        else if (x > 7)   hint = "About Me — beyond the code";
        else if (z < -9)  hint = "Work Experience — click a painting";
        else              hint = "Explore: left → Tech  |  right → About Me  |  forward → Experience";
        zoneHintRef.current.textContent = hint;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      renderer.domElement.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mousemove", onMouseMove);
      renderer.domElement.removeEventListener("touchstart", onTouchStart);
      renderer.domElement.removeEventListener("touchmove", onTouchMove);
      renderer.domElement.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef} className="w-full h-full relative">
      {selectedExp && (
        <ExperienceModal exp={selectedExp} onClose={() => setSelectedExp(null)} />
      )}
      {selectedHobby && (
        <HobbyModal hobby={selectedHobby} onClose={() => setSelectedHobby(null)} />
      )}
      {/* Styles: hide joy-wrap on pointer devices, show portrait overlay in portrait */}
      <style>{`
        @media (pointer: fine) { .joy-wrap { display: none !important; } }
        .portrait-lock { display: none; }
        @media (orientation: portrait) and (pointer: coarse) { .portrait-lock { display: flex !important; } }
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* Portrait-mode blocker — tells the user to rotate */}
      <div
        className="portrait-lock"
        style={{
          position: "absolute", inset: 0, zIndex: 200, background: "#0a0a0a",
          flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 20,
          pointerEvents: "all",
        }}
      >
        <div style={{ fontSize: 52, animation: "spin-slow 2.5s linear infinite" }}>↻</div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", margin: 0 }}>
          Rotate your device
        </p>
      </div>

      {/* Virtual joystick — fixed bottom-left, always visible on touch devices */}
      <div
        ref={joystickBaseRef}
        className="joy-wrap"
        style={{
          position: "absolute", bottom: 36, left: 36,
          width: 120, height: 120, borderRadius: "50%",
          background: "rgba(255,255,255,0.07)", border: "2px solid rgba(255,255,255,0.22)",
          display: "flex", alignItems: "center", justifyContent: "center",
          pointerEvents: "none", opacity: 0.5, transition: "opacity 0.15s",
        }}
      >
        <div
          ref={joystickKnobRef}
          style={{
            width: 46, height: 46, borderRadius: "50%",
            background: "rgba(255,255,255,0.38)", border: "2px solid rgba(255,255,255,0.65)",
          }}
        />
      </div>

      {/* Mobile control hint */}
      <div
        className="joy-wrap"
        style={{
          position: "absolute", bottom: 38, left: "50%", transform: "translateX(-50%)",
          color: "rgba(255,255,255,0.25)", fontSize: 10, letterSpacing: "0.14em",
          textTransform: "uppercase", pointerEvents: "none", textAlign: "center", whiteSpace: "nowrap",
        }}
      >
        Left — move &nbsp;·&nbsp; Right — look &nbsp;·&nbsp; Tap — interact
      </div>

      {/* Zone proximity hint */}
      <div
        ref={zoneHintRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center pointer-events-none"
        style={{
          color: "rgba(255,255,255,0.28)",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          transition: "opacity 0.4s",
        }}
      />
    </div>
  );
}
