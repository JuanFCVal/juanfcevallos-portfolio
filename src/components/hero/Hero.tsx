import DraggablePortrait from "./DraggablePortrait";

export default function Hero() {
  return (
    <section
      id="#about"
      className="relative min-h-screen flex items-center bg-surface overflow-hidden"
    >
      {/* large faded section number — art element */}
      <span
        className="absolute right-6 top-1/2 -translate-y-1/2 text-[20vw] font-black leading-none select-none pointer-events-none hidden lg:block"
        style={{ color: "rgba(255,255,255,0.018)" }}
        aria-hidden="true"
      >
        01
      </span>

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Portrait ── */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1 hero-portrait">
            <div className="relative">
              <DraggablePortrait />
              <div
                className="absolute -bottom-4 -right-4 px-3 py-1.5 rounded-md font-mono text-xs font-semibold"
                style={{
                  background: "rgba(0,212,168,0.10)",
                  border: "1px solid rgba(0,212,168,0.25)",
                  color: "var(--accent)",
                }}
              >
                Ecuador · UTC−5 · Remote
              </div>
            </div>
          </div>

          {/* ── Text content ── */}
          <div className="order-1 lg:order-2 flex flex-col gap-5">

            <div className="hero-item hero-item-1 flex items-center gap-3">
              <span className="font-mono text-xs tracking-[0.3em] text-accent/50">
                01 /
              </span>
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ background: "rgba(0,212,168,0.08)", border: "1px solid rgba(0,212,168,0.2)" }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-xs font-semibold text-green-400 tracking-wide">
                  Open to new opportunities
                </span>
              </div>
            </div>

            <div className="hero-item hero-item-2">
              <h1 className="font-black leading-none tracking-tight">
                <span className="block text-4xl lg:text-5xl xl:text-6xl text-primary">
                  Juan Francisco
                </span>
                <span className="block text-4xl lg:text-5xl xl:text-6xl text-primary/40">
                  Cevallos.
                </span>
              </h1>
            </div>

            <div className="hero-item hero-item-3 flex items-center gap-3">
              <div className="w-6 h-px bg-accent" />
              <p className="font-mono text-xs tracking-[0.22em] uppercase text-accent">
                Technical Lead · Full-Stack Engineer
              </p>
            </div>

            <p className="hero-item hero-item-4 text-sm leading-relaxed max-w-md text-secondary">
              5 years building full-stack systems across mobile, web, and backend.
              Currently leading product at PPM —{" "}
              <span className="text-primary font-medium">
                shipping Sorvo, Ecuador&apos;s most exclusive wine club.
              </span>
            </p>

            <div className="hero-item hero-item-5 flex flex-wrap gap-2 mt-1">
              <a
                href="/Juan_Cevallos_CV_2026_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-bold tracking-widest rounded transition-colors bg-accent hover:bg-accent-light text-[#080808] focus-visible:outline-accent"
              >
                RESUME
              </a>
              <a
                href="https://github.com/JuanFCVal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-bold tracking-widest rounded transition-colors border border-white/12 text-primary hover:border-accent/40 hover:text-accent focus-visible:outline-accent"
              >
                GITHUB
              </a>
              <a
                href="https://linkedin.com/in/juanfcval"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 text-sm font-bold tracking-widest rounded transition-colors border border-white/12 text-primary hover:border-accent/40 hover:text-accent focus-visible:outline-accent"
              >
                LINKEDIN
              </a>
            </div>

            <div
              className="hero-item hero-item-6 flex flex-wrap gap-8 pt-6 mt-2"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div>
                <div className="text-2xl font-black text-primary">5+</div>
                <div className="font-mono text-xs tracking-widest uppercase mt-0.5 text-secondary">YRS EXP</div>
              </div>
              <div>
                <div className="text-2xl font-black text-primary">2</div>
                <div className="font-mono text-xs tracking-widest uppercase mt-0.5 text-secondary">TEAMS LED</div>
              </div>
              <div>
                <div className="text-2xl font-black text-accent">+10k</div>
                <div className="font-mono text-xs tracking-widest uppercase mt-0.5 text-secondary">USERS</div>
              </div>
            </div>

          </div>
        </div>

        {/* scroll indicator */}
        <div className="hero-item hero-item-6 flex flex-col items-center gap-2 mt-16 lg:mt-20">
          <span className="font-mono text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(136,136,136,0.35)" }}>
            scroll
          </span>
          <div
            className="w-px h-10 relative overflow-hidden"
            style={{ background: "rgba(255,255,255,0.08)" }}
          >
            <div
              className="absolute top-0 left-0 w-full"
              style={{
                height: "40%",
                background: "var(--accent)",
                animation: "scrollDrop 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
