import Link from "next/link";

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-5xl font-bold tracking-tight">Playground</h1>
      <p className="text-white/50 text-lg">Experiments and interactive demos.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        <Link
          href="/playground/world"
          className="group border border-white/10 rounded-xl p-6 hover:border-white/40 hover:bg-white/5 transition-all duration-200"
        >
          <h2 className="text-xl font-semibold mb-2 group-hover:text-white/90">World</h2>
          <p className="text-white/40 text-sm">A 3D scene with an interactive character built with Three.js.</p>
        </Link>
      </div>
    </main>
  );
}
