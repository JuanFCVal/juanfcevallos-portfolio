import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const journey = [
  { title: "Accountability", desc: "Everyone is responsible for their code and its impact on the system." },
  { title: "Growth", desc: "Foster a culture of feedback and continuous improvement." },
  { title: "Continuous Learning", desc: "Embrace experimentation and learning from failures." },
  { title: "Connection", desc: "I value getting to know people, learning about their experiences and perspectives." },
];

const skillRows = [
  {
    label: "FRONTEND",
    accentColor: "var(--accent)",
    skills: ["React", "React Native", "Next.js", "TypeScript", "Tailwind CSS", "Angular"],
  },
  {
    label: "BACKEND",
    accentColor: "rgba(232,232,232,0.7)",
    skills: ["Node.js", "Nest.js", "Express.js", "Python", "PostgreSQL", "REST APIs"],
  },
  {
    label: "DEVOPS",
    accentColor: "rgba(136,136,136,0.8)",
    skills: ["Docker", "AWS", "GitHub Actions", "Digital Ocean", "N8N", "CI/CD"],
  },
  {
    label: "LEADERSHIP",
    accentColor: "rgba(0,212,168,0.5)",
    skills: ["Team Mentoring", "Architecture Design", "Code Review", "Technical Ownership", "Roadmap Planning"],
  },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <span
        className="absolute right-0 bottom-0 text-[22vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.012)" }}
        aria-hidden="true"
      >
        05
      </span>

      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateOnScroll animation="fade-up" className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] mb-5" style={{ color: "rgba(0,212,168,0.6)" }}>
            05 / SKILLS
          </p>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight mb-6" style={{ color: "var(--primary)" }}>
            THE STACK
          </h2>
          <p className="text-sm leading-relaxed max-w-md" style={{ color: "var(--secondary)" }}>
            My journey started in mobile development, then grew into full-stack systems, architecture, and team leadership.
          </p>
        </AnimateOnScroll>

        {/* ── Skills inline rows ── */}
        <AnimateOnScroll animation="fade-up" className="mb-16">
          <div className="space-y-0">
            {skillRows.map((row, i) => (
              <div
                key={row.label}
                className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 py-5"
                style={{ borderTop: i === 0 ? "1px solid rgba(255,255,255,0.06)" : "1px solid rgba(255,255,255,0.04)" }}
              >
                <div
                  className="font-mono text-xs tracking-[0.25em] shrink-0 w-24"
                  style={{ color: row.accentColor }}
                >
                  {row.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {row.skills.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-2.5 py-1 rounded"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "rgba(232,232,232,0.75)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }} />
          </div>
        </AnimateOnScroll>

        {/* ── Values ── */}

      </div>
    </section>
  );
}
