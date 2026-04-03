import ArrowDownIcon from "./icons/ArrowDownIcon";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const layers = [
  {
    id: "understanding",
    label: "UNDERSTANDING",
    sublabel: "Requirements Gathering · User Research",
    desc: "Define: Why are we building this? Who is it for? What problem does it solve? Align on goals and success metrics.",
    color: "#E85D26",
    bg: "rgba(232,93,38,0.08)",
    border: "rgba(232,93,38,0.3)",
  },
  {
    id: "requirements",
    label: "REQUIREMENTS",
    sublabel: "Functional · Non-functional",
    desc: "Define requirements, functional and non-functional.",
    color: "#2D4A6E",
    bg: "rgba(45,74,110,0.08)",
    border: "rgba(45,74,110,0.3)",
  },
  {
    id: "Prototyping",
    label: "PROTOTYPING",
    sublabel: "Design · Wireframes · MVPs",
    desc: "Validate assumptions and gather feedback early.",
    color: "#1B2A4A",
    bg: "rgba(27,42,74,0.06)",
    border: "rgba(27,42,74,0.25)",
  },
  {
    id: "architecture",
    label: "ARCHITECTURE",
    sublabel: "Define structure · Tech stack",
    desc: "Design scalable and maintainable systems that align with requirements and constraints.",
    color: "#2D4A6E",
    bg: "rgba(45,74,110,0.08)",
    border: "rgba(45,74,110,0.3)",
  },
  {
    id: "development",
    label: "DEVELOPMENT",
    sublabel: "Implementation · Testing",
    desc: "Build the product iteratively, focusing on delivering value and maintaining quality.",
    color: "#E85D26",
    bg: "rgba(232,93,38,0.08)",
    border: "rgba(232,93,38,0.3)",
  },
];

const architecturePrinciples = [
  { title: "Accountability", desc: "Everyone is responsible for their code and its impact on the system." },
  { title: "Growth", desc: "Foster a culture of feedback and improvement." },
  { title: "Continuous Learning", desc: "Embrace experimentation and learning from failures." },
  { title: "Connection", desc: "I value getting to know people, learning about their experiences and perspectives." },
];

const coreStack = ["TypeScript", "Python", "Javascript", "React", "Angular", "Next.js", "React Native", "Ionic", "Nest.js", "Express.js", "Node.js", "AWS", "Docker", "PostgreSQL", "MongoDB"];

export default function Architecture() {
  return (
    <section
      id="architecture"
      className="py-20 lg:py-28 border-t border-slate-100"
      style={{ background: "#F0F4F8" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <AnimateOnScroll animation="fade-right">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-[#E85D26]" />
              <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Experience</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] leading-tight mb-6">
              My journey
              <br />
              <span className="text-[#2D4A6E]">in tech.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 max-w-md">
              My journey started in mobile development, but quickly evolved into building full-stack systems across web and backend.
              Over time, I moved from implementing features to shaping how systems are designed defining structure, improving workflows, and helping teams deliver more effectively.
              Today, I focus on building scalable products while bringing clarity, ownership, and technical direction to the development process.
            </p>
            <br />
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
              Now life has brought me to more managerial and architectural roles, but I love to build. I always find space to keep coding and stay close. My heart is into building things, and I want to keep doing it for a long time. I want to keep building, learning, and growing as long as I can.
              And this is what I value the most in my work:
            </p>

            <div className="space-y-4">
              {architecturePrinciples.map((p, i) => (
                <AnimateOnScroll key={p.title} animation="fade-right" delay={i * 80}>
                  <div className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#E85D26] mt-1.5 shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-[#1B2A4A]">{p.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{p.desc}</div>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="text-xs font-bold text-slate-400 tracking-wider mb-3 uppercase">Core Stack</div>
              <div className="flex flex-wrap gap-2">
                {coreStack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-2.5 py-1 rounded-full text-[#1B2A4A] border border-[#1B2A4A]/20 bg-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimateOnScroll>

          <div className="relative">
            <AnimateOnScroll animation="fade-down">
              <div className="text-center mb-6">
                <span
                  className="inline-block text-xs font-bold tracking-[0.2em] text-[#2D4A6E] px-4 py-1.5 rounded-full border border-[#2D4A6E]/30"
                  style={{ background: "rgba(45,74,110,0.06)" }}
                >
                  How I work?
                </span>
              </div>
            </AnimateOnScroll>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#E85D26]/20 via-[#2D4A6E]/20 to-[#E85D26]/20 transform -translate-x-1/2" />

              <div className="space-y-0">
                {layers.map((layer, i) => (
                  <AnimateOnScroll key={layer.id} animation="fade-left" delay={i * 100}>
                    <div
                      className="relative mx-auto max-w-sm p-4 rounded-xl border-2 transition-all hover:shadow-md hover:scale-[1.02] cursor-default"
                      style={{
                        background: layer.bg,
                        borderColor: layer.border,
                      }}
                    >
                      <div
                        className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-black"
                        style={{ background: layer.color }}
                      >
                        {i + 1}
                      </div>

                      <div className="pl-2">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <div className="text-sm font-black tracking-wide" style={{ color: layer.color }}>
                              {layer.label}
                            </div>
                            <div className="text-xs font-mono text-slate-400 mt-0.5">{layer.sublabel}</div>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 leading-relaxed">{layer.desc}</p>
                      </div>
                    </div>

                    {i < layers.length - 1 && <ArrowDownIcon />}
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
