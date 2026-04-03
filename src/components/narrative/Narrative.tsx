import DiagonalAccent from "./svgs/DiagonalAccent";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
  {
    stat: "60%",
    label: "Reduction in deployment time",
    desc: "Through CI/CD automation and containerization strategy",
  },
  {
    stat: "3x",
    label: "Developer productivity",
    desc: "Via internal AI tools and standardized workflows",
  },
  {
    stat: "99.9%",
    label: "System uptime achieved",
    desc: "With microservice architecture and health monitoring",
  },
];

export default function Narrative() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{ background: "#1B2A4A" }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F8F9FC 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <DiagonalAccent />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <AnimateOnScroll animation="fade-up">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Core Narrative</span>
            <div className="w-12 h-0.5 bg-[#E85D26]" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-8 tracking-tight">
            TRANSFORMING BUSINESS GOALS INTO{" "}
            <span className="shimmer-text">ARCHITECTURAL REALITY.</span>
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto mb-14">
            With over 8 years of experience bridging technical leadership and strategic product thinking,
            I specialize in designing end-to-end systems that scale — from mobile apps to cloud microservices.
            I&apos;ve guided multicultural teams across Ecuador, Colombia, and the US, consistently delivering
            solutions that reduce time-to-market, improve developer experience, and unlock measurable business value.
            My approach combines architectural rigor with an AI-first mindset, helping teams do more with less friction.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={150}>
          <div className="inline-block">
            <div
              className="relative px-10 py-8 rounded-xl overflow-hidden glow-pulse"
              style={{
                background: "linear-gradient(135deg, #0d1a30 0%, #1e3557 100%)",
                border: "1px solid rgba(232,93,38,0.2)",
              }}
            >
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#E85D26] opacity-60" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#E85D26] opacity-60" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#E85D26] opacity-60" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#E85D26] opacity-60" />

              <div className="text-xs font-bold tracking-[0.3em] text-slate-400 mb-3 uppercase">
                Key Achievement
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                CI/CD:{" "}
                <span className="text-slate-400 line-through decoration-[#E85D26]">1 DAY</span>
                <span className="text-white mx-3">→</span>
                <span className="text-[#E85D26]">1 HOUR</span>
              </div>
              <div className="text-sm text-slate-400 mt-3 tracking-wider">
                Pipeline optimization via GitHub Actions + Docker + AWS ECS
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 text-left">
          {stats.map((item, i) => (
            <AnimateOnScroll key={item.stat} animation="fade-up" delay={i * 120}>
              <div
                className="p-6 rounded-lg border border-white/10 hover:border-[#E85D26]/40 transition-colors h-full"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div className="text-3xl font-black text-[#E85D26] mb-2">{item.stat}</div>
                <div className="text-sm font-bold text-white mb-2 tracking-wide">{item.label}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{item.desc}</div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
