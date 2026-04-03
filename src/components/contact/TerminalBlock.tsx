"use client";
import { useEffect, useRef, useState } from "react";

const command = "--via=multiplier --multicultural=english --tech=magic";

export default function TerminalBlock() {
  const ref = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        let i = 0;
        const timer = setInterval(() => {
          i++;
          setTyped(command.slice(0, i));
          if (i >= command.length) {
            clearInterval(timer);
            setDone(true);
          }
        }, 30);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="max-w-2xl mx-auto mb-10 rounded-xl overflow-hidden border border-white/10"
      style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
    >
      <div
        className="flex items-center gap-2 px-4 py-3"
        style={{ background: "rgba(0,0,0,0.4)" }}
      >
        <div className="w-3 h-3 rounded-full bg-red-500/80" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <div className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="text-xs text-slate-500 ml-2 font-mono">terminal</span>
      </div>

      <div
        className="p-5 text-left font-mono text-sm"
        style={{ background: "rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-start gap-2 text-slate-300">
          <span className="break-all">
            <span className="text-[#2D4A6E]">[juanfcval@dev:~]</span>
            <span className="text-white">$ </span>
            <span className="text-green-400">connect </span>
            <span className="text-yellow-400">{typed}</span>
            {!done && <span className="cursor-blink text-white">|</span>}
          </span>
        </div>
        {done && (
          <div className="mt-2 text-slate-400 flex items-center gap-1">
            <span>Initializing connection...</span>
            <span className="text-green-400">✓ Ready.</span>
            <span className="cursor-blink text-white ml-1">|</span>
          </div>
        )}
      </div>
    </div>
  );
}
