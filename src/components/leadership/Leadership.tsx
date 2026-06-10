import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { experiences } from "@/constants/experiences";

export default function Leadership() {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.012)" }}
        aria-hidden="true"
      >
        03
      </span>

      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateOnScroll animation="fade-up" className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] mb-5" style={{ color: "rgba(0,212,168,0.6)" }}>
            03 / EXPERIENCE
          </p>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight" style={{ color: "var(--primary)" }}>
            WORK HISTORY
          </h2>
        </AnimateOnScroll>

        <div className="relative">
          {experiences.map((exp, i) => (
            <AnimateOnScroll key={i} animation="fade-up" delay={i * 60}>
              <div
                className="py-8 group"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                {/* ── Header row ── */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="text-xl font-black leading-tight mb-1 group-hover:text-accent transition-colors"
                      style={{ color: "var(--primary)" }}
                    >
                      {exp.company}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs" style={{ color: "var(--secondary)" }}>
                      <span>{exp.role}</span>
                      <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <span
                    className="font-mono text-xs tracking-wider shrink-0 self-start sm:text-right"
                    style={{ color: "rgba(0,212,168,0.6)" }}
                  >
                    {exp.period}
                  </span>
                </div>

                {/* ── Highlights ── */}
                <ul className="space-y-1.5 mb-5">
                  {exp.highlights.map((hl, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "rgba(136,136,136,0.85)" }}>
                      <svg
                        className="shrink-0 mt-1.25"
                        width="5"
                        height="5"
                        viewBox="0 0 6 6"
                        fill="currentColor"
                        style={{ color: "var(--accent)", opacity: 0.6 }}
                        aria-hidden="true"
                      >
                        <circle cx="3" cy="3" r="3" />
                      </svg>
                      {hl}
                    </li>
                  ))}
                </ul>

                {/* ── Tech tags ── */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "var(--secondary)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }} />
        </div>

      </div>
    </section>
  );
}
