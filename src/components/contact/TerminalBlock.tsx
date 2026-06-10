"use client";
import { useEffect, useRef, useState } from "react";

const command = 'git log --oneline --author="Juan Cevallos"';

const logEntries = [
  { hash: "7f3a12b", msg: "feat: Sorvo wine club — built 0 → production" },
  { hash: "3e8c91d", msg: "feat: real-time transport system · +30% revenue" },
  { hash: "a2d0fe4", msg: "feat: F&B platform scaled to 150+ restaurants" },
  { hash: "b9c4a87", msg: "chore: 5+ yrs · full-stack · mobile · cloud · teams" },
];

export default function TerminalBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [cmdDone, setCmdDone] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let i = 0;
        const typeTimer = setInterval(() => {
          i++;
          setTyped(command.slice(0, i));
          if (i >= command.length) {
            clearInterval(typeTimer);
            setTimeout(() => {
              setCmdDone(true);
              let line = 0;
              const lineTimer = setInterval(() => {
                line++;
                setVisibleLines(line);
                if (line >= logEntries.length) clearInterval(lineTimer);
              }, 180);
            }, 300);
          }
        }, 25);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-2xl mx-auto mb-10 rounded-xl overflow-hidden"
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
      }}
    >
      {/* window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{
          background: "rgba(255,255,255,0.04)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="font-mono text-xs ml-2" style={{ color: "rgba(136,136,136,0.5)" }}>
          ~/projects · main
        </span>
      </div>

      {/* body */}
      <div className="p-5 font-mono text-sm" style={{ background: "rgba(0,0,0,0.55)" }}>

        {/* prompt + command */}
        <div className="flex items-center gap-2 mb-4">
          <span style={{ color: "var(--accent)" }}>❯</span>
          <span className="text-sm" style={{ color: "rgba(232,232,232,0.7)" }}>{typed}</span>
          {!cmdDone && (
            <span className="cursor-blink" style={{ color: "var(--accent)" }}>▋</span>
          )}
        </div>

        {/* log entries */}
        <div className="space-y-2">
          {cmdDone && logEntries.slice(0, visibleLines).map((entry, i) => (
            <div key={i} className="flex items-start gap-3 text-xs">
              <span
                className="shrink-0 font-mono"
                style={{ color: "rgba(0,212,168,0.55)" }}
              >
                {entry.hash}
              </span>
              <span style={{ color: "rgba(232,232,232,0.6)" }}>{entry.msg}</span>
            </div>
          ))}
        </div>

        {/* final status line */}
        {visibleLines >= logEntries.length && cmdDone && (
          <div
            className="flex items-center gap-2 mt-4 pt-4 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
          >
            <span style={{ color: "var(--accent)" }}>❯</span>
            <span style={{ color: "rgba(232,232,232,0.35)" }}>
              open to opportunities · ready to ship your next idea
            </span>
            <span className="cursor-blink" style={{ color: "var(--accent)" }}>▋</span>
          </div>
        )}

      </div>
    </div>
  );
}
