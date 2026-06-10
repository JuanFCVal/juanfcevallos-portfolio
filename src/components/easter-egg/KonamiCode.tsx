"use client";
import { useEffect, useState, useCallback } from "react";

const KONAMI = ["ArrowUp", "ArrowDown", "ArrowRight", "ArrowRight", "ArrowLeft"];

export default function KonamiCode() {
  const [active, setActive] = useState(false);

  // Console easter egg — fires once on mount
  useEffect(() => {
    console.log(
      "%c   Juan Francisco Cevallos   \n",
      "background:#00d4a8;color:#080808;font-weight:900;font-size:18px;padding:6px 16px;border-radius:4px;"
    );
    console.log(
      "%c Technical Lead · Full-Stack Engineer\n\n%c Hey. You opened the console.\n That means you're exactly the kind of person I want to work with.\n\n → juanfcval@gmail.com\n → linkedin.com/in/juanfcval\n\n%c (psst... try the Konami code on the page)\n",
      "color:#e8e8e8;font-size:13px;font-weight:bold;",
      "color:#888888;font-size:12px;",
      "color:rgba(0,212,168,0.5);font-size:11px;"
    );
  }, []);

  // Konami sequence listener
  useEffect(() => {
    let seq: string[] = [];

    const handleKey = (e: KeyboardEvent) => {
      seq = [...seq, e.code].slice(-KONAMI.length);
      if (seq.join(",") === KONAMI.join(",")) {
        setActive(true);
        seq = [];
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const close = useCallback(() => setActive(false), []);

  useEffect(() => {
    if (!active) return;
    const onEsc = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [active, close]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.88)", backdropFilter: "blur(12px)" }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Easter egg activated"
    >
      <div
        className="relative max-w-sm w-full rounded-2xl p-8 font-mono text-center"
        style={{
          background: "#0c0c0c",
          border: "1px solid rgba(0,212,168,0.35)",
          boxShadow: "0 0 100px rgba(0,212,168,0.18), 0 0 0 1px rgba(0,212,168,0.08)",
        }}
        onClick={e => e.stopPropagation()}
      >
        {/* glow orb */}
        <div
          className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-20 pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(0,212,168,0.25) 0%, transparent 70%)" }}
        />

        {/* badge */}
        <div
          className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase px-3 py-1.5 rounded-full mb-5"
          style={{ background: "rgba(0,212,168,0.1)", border: "1px solid rgba(0,212,168,0.25)", color: "var(--accent)" }}
        >
          ◆ ACHIEVEMENT UNLOCKED
        </div>

        <h2
          className="text-2xl font-black leading-tight mb-2"
          style={{ color: "var(--primary)" }}
        >
          You found it.
        </h2>

        <p className="text-sm mb-6" style={{ color: "rgba(136,136,136,0.8)" }}>
          Only a certain kind of developer knows the Konami code by heart.
          <br />
          <span style={{ color: "var(--accent)" }}>You&apos;re that kind of developer.</span>
        </p>

        {/* terminal-style card */}
        <div
          className="text-left text-xs space-y-1.5 rounded-lg p-4 mb-6"
          style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div style={{ color: "rgba(0,212,168,0.6)" }}>$ echo "conclusion"</div>
          <div style={{ color: "var(--primary)" }}>Congrats on your excellent taste.</div>
          <div className="mt-2" style={{ color: "rgba(136,136,136,0.7)" }}>Juan is now 100% hired.</div>
          <div style={{ color: "rgba(136,136,136,0.7)" }}>(You&apos;re welcome, future company.)</div>
        </div>

        <a
          href="mailto:juanfcval@gmail.com"
          className="block w-full py-3 rounded-lg text-sm font-black tracking-widest transition-colors mb-3"
          style={{ background: "var(--accent)", color: "#080808" }}
          onFocus={e => (e.currentTarget.style.background = "var(--accent-light)")}
          onBlur={e => (e.currentTarget.style.background = "var(--accent)")}
        >
          LET&apos;S WORK TOGETHER
        </a>

        <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
          ESC or click anywhere to close
        </p>
      </div>
    </div>
  );
}
