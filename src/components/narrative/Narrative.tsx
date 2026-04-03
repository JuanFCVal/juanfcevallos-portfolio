import DiagonalAccent from "./svgs/DiagonalAccent";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const stats = [
  {
    stat: "Ownership",
    label: "End-to-End Delivery",
    desc: "Led projects from idea to production, ensuring alignment between business goals and technical execution",
  },
  {
    stat: "Accountability",
    label: "I'll Ship It",
    desc: "Took responsibility for delivery, I'll learn what it takes to get the job done.",
  },
  {
    stat: "Maintainability",
    label: "Scalable Systems",
    desc: "Applied clean architecture and design patterns to build maintainable systems",
  },
];

export default function Narrative() {
  return (
    <section
      id="about"
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
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">JuanFCVal Dev</span>
            <div className="w-12 h-0.5 bg-[#E85D26]" />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white mb-8 tracking-tight">
            TRANSFORMING IDEAS INTO {" "}
            <span className="shimmer-text">REAL WORLD PRODUCTS</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto mb-4">
            With 5+ years as a full-stack developer, I design and build scalable systems.
            I’ve worked across mobile and web platforms, focusing on performance, developer experience, and maintainable architecture.
            I’m particularly interested in evolving toward software architecture and cloud-native solutions, applying design patterns, clean architecture principles, and modern practices.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-slate-300 max-w-3xl mx-auto mb-4">
            My goal is simple: build systems that are easy to scale, easy to maintain, and deliver real value.
          </p>
          <span className="shimmer-text text-xl">{" "}And don't forget, ship, ship, ship.</span>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={150}>
          <div className="inline-block mt-4">
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
                From concept to release
              </div>
              <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Product delivery:{" "}
                <span className="text-slate-400 line-through decoration-[#E85D26]">Idea</span>
                <span className="text-white mx-3">→</span>
                <span className="text-[#E85D26]">Production</span>
              </div>
              <div className="text-sm text-slate-400 mt-3 tracking-wider">
                Led the development of mobile and web applications from concept to release
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
