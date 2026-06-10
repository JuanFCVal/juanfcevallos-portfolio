import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const values = [
  {
    key: "01",
    title: "Ownership",
    desc: "Led projects from idea to production, ensuring alignment between business goals and technical execution.",
  },
  {
    key: "02",
    title: "Accountability",
    desc: "I take full responsibility for delivery — and I'll learn whatever it takes to get the job done.",
  },
  {
    key: "03",
    title: "Maintainability",
    desc: "Clean architecture and design patterns that make systems easy to extend and hand off.",
  },
];

export default function Narrative() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-surface-alt relative overflow-hidden">
      {/* large faded section number */}
      <span
        className="absolute left-0 bottom-0 text-[25vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.012)" }}
        aria-hidden="true"
      >
        02
      </span>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Statement ── */}
          <AnimateOnScroll animation="fade-right">
            <p className="font-mono text-xs tracking-[0.3em] mb-5" style={{ color: "rgba(0,212,168,0.6)" }}>
              02 / ABOUT
            </p>
            <h2
              className="text-3xl lg:text-4xl xl:text-5xl font-black leading-tight tracking-tight mb-6"
              style={{ color: "var(--primary)" }}
            >
              TRANSFORMING<br />IDEAS INTO{" "}
              <span className="shimmer-text">REAL PRODUCTS.</span>
            </h2>
            <p className="text-sm leading-relaxed mb-4 max-w-sm" style={{ color: "var(--secondary)" }}>
              5+ years building full-stack systems across mobile, web, and backend.
              I care about performance, clean architecture, and shipping things that actually work.
            </p>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(136,136,136,0.7)" }}>
              Now in leadership and architecture roles, but I always stay close to the code.
              Building is what I love — I plan to keep doing it for a long time.
            </p>
          </AnimateOnScroll>

          {/* ── Right: Values as terminal lines ── */}
          <div className="flex flex-col gap-0 pt-1">
            {values.map((v, i) => (
              <AnimateOnScroll key={v.key} animation="fade-left" delay={i * 100}>
                <div
                  className="py-5 group transition-colors"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="font-mono text-xs shrink-0 mt-0.5 transition-colors group-hover:text-accent"
                      style={{ color: "rgba(0,212,168,0.35)" }}
                    >
                      {v.key}
                    </span>
                    <div>
                      <div
                        className="text-sm font-bold mb-1 transition-colors group-hover:text-accent"
                        style={{ color: "var(--primary)" }}
                      >
                        {v.title}
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: "var(--secondary)" }}>
                        {v.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
