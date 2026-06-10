"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const CONTAINER = 280;
const PHOTO = 156;
const MAX_X = CONTAINER - PHOTO;
const MAX_Y = CONTAINER - PHOTO;
const WALL_DAMPING = 0.65;
const FRICTION = 0.989;
const MIN_VEL = 0.1;
const MAX_VEL = 22;

function clamp(v: number, lo: number, hi: number) {
  return Math.max(lo, Math.min(hi, v));
}

export default function DraggablePortrait() {
  const containerRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const photo = photoRef.current;
    const container = containerRef.current;
    if (!photo || !container) return;

    // All mutable physics state lives here — never triggers React re-renders
    const engine = {
      x: MAX_X / 2,
      y: MAX_Y / 2,
      vx: 1.8,
      vy: -2.2,
      dragging: false,
      recent: [] as { x: number; y: number; t: number }[],
      rafId: 0,
    };

    function applyTransform() {
      photo!.style.transform = `translate(${engine.x}px, ${engine.y}px)`;
    }

    function tick() {
      if (engine.dragging) return;

      engine.x += engine.vx;
      engine.y += engine.vy;

      if (engine.x <= 0) {
        engine.x = 0;
        engine.vx = Math.abs(engine.vx) * WALL_DAMPING;
      } else if (engine.x >= MAX_X) {
        engine.x = MAX_X;
        engine.vx = -Math.abs(engine.vx) * WALL_DAMPING;
      }

      if (engine.y <= 0) {
        engine.y = 0;
        engine.vy = Math.abs(engine.vy) * WALL_DAMPING;
      } else if (engine.y >= MAX_Y) {
        engine.y = MAX_Y;
        engine.vy = -Math.abs(engine.vy) * WALL_DAMPING;
      }

      engine.vx *= FRICTION;
      engine.vy *= FRICTION;
      if (Math.abs(engine.vx) < MIN_VEL) engine.vx = 0;
      if (Math.abs(engine.vy) < MIN_VEL) engine.vy = 0;

      applyTransform();

      if (engine.vx !== 0 || engine.vy !== 0) {
        engine.rafId = requestAnimationFrame(tick);
      }
    }

    // Initial position + kick off bounce
    applyTransform();
    engine.rafId = requestAnimationFrame(tick);

    // ── Drag handlers ──────────────────────────────────────────

    function startDrag() {
      cancelAnimationFrame(engine.rafId);
      engine.dragging = true;
      engine.vx = 0;
      engine.vy = 0;
      engine.recent = [];
      photo!.style.cursor = "grabbing";
    }

    function moveDrag(clientX: number, clientY: number) {
      if (!engine.dragging) return;
      const rect = container!.getBoundingClientRect();
      const x = clamp(clientX - rect.left - PHOTO / 2, 0, MAX_X);
      const y = clamp(clientY - rect.top - PHOTO / 2, 0, MAX_Y);
      engine.x = x;
      engine.y = y;
      applyTransform();
      const now = performance.now();
      engine.recent.push({ x, y, t: now });
      if (engine.recent.length > 6) engine.recent.shift();
    }

    function endDrag() {
      if (!engine.dragging) return;
      engine.dragging = false;
      photo!.style.cursor = "grab";

      const moves = engine.recent;
      if (moves.length >= 2) {
        const a = moves[0];
        const b = moves[moves.length - 1];
        const dt = b.t - a.t;
        if (dt > 0 && dt < 130) {
          engine.vx = clamp(((b.x - a.x) / dt) * 16, -MAX_VEL, MAX_VEL);
          engine.vy = clamp(((b.y - a.y) / dt) * 16, -MAX_VEL, MAX_VEL);
        }
      }

      engine.rafId = requestAnimationFrame(tick);
    }

    // Mouse
    const onMouseDown = (e: MouseEvent) => { e.preventDefault(); startDrag(); };
    const onMouseMove = (e: MouseEvent) => moveDrag(e.clientX, e.clientY);
    const onMouseUp   = () => endDrag();

    // Touch
    const onTouchStart = (e: TouchEvent) => { startDrag(); moveDrag(e.touches[0].clientX, e.touches[0].clientY); };
    const onTouchMove  = (e: TouchEvent) => moveDrag(e.touches[0].clientX, e.touches[0].clientY);
    const onTouchEnd   = () => endDrag();

    photo.addEventListener("mousedown", onMouseDown);
    photo.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      cancelAnimationFrame(engine.rafId);
      photo.removeEventListener("mousedown", onMouseDown);
      photo.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative select-none"
      style={{ width: CONTAINER, height: CONTAINER }}
    >
      {/* bounding box border */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{ border: "1px solid rgba(0,212,168,0.1)" }}
      />

      {/* corner brackets */}
      <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t border-l pointer-events-none" style={{ borderColor: "rgba(0,212,168,0.28)" }} />
      <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t border-r pointer-events-none" style={{ borderColor: "rgba(0,212,168,0.28)" }} />
      <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b border-l pointer-events-none" style={{ borderColor: "rgba(0,212,168,0.28)" }} />
      <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b border-r pointer-events-none" style={{ borderColor: "rgba(0,212,168,0.28)" }} />

      {/* hint */}
      <div
        className="absolute bottom-3 left-0 right-0 text-center font-mono pointer-events-none select-none"
        style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(0,212,168,0.22)" }}
        aria-hidden="true"
      >
        DRAG
      </div>

      {/* photo */}
      <div
        ref={photoRef}
        className="absolute rounded-xl overflow-hidden"
        style={{
          width: PHOTO,
          height: PHOTO,
          cursor: "grab",
          willChange: "transform",
          boxShadow: "0 12px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,212,168,0.14)",
        }}
      >
        <Image
          alt="Profile picture of Juan F. Cevallos"
          src="/profile_pic.jpeg"
          fill
          loading="eager"
          className="object-cover pointer-events-none"
          draggable={false}
        />
      </div>
    </div>
  );
}
