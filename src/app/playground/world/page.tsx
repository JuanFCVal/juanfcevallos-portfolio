'use client'
import dynamic from "next/dynamic";
import Link from "next/link";

const WorldScene = dynamic(() => import("@/components/playground/WorldScene"), { ssr: false });

export default function WorldPage() {
  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
      <WorldScene />


      <div className="absolute top-6 left-6 flex items-center gap-4">
        <Link
          href="/playground"
          className="text-white/40 hover:text-white text-sm transition-colors duration-150"
        >
          ← Playground
        </Link>
        <span className="text-white/20">/</span>
        <span className="text-white/60 text-sm font-medium">World</span>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/20 text-xs tracking-widest uppercase">
        Move mouse to look around
      </div>
    </main>
  );
}
