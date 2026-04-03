import ArrowDownIcon from "./icons/ArrowDownIcon";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const layers = [
  {
    id: "mobile",
    label: "MOBILE",
    sublabel: "React Native",
    desc: "Cross-platform iOS & Android app with offline-first architecture and real-time sync",
    color: "#E85D26",
    bg: "rgba(232,93,38,0.08)",
    border: "rgba(232,93,38,0.3)",
  },
  {
    id: "gateway",
    label: "API GATEWAY",
    sublabel: "Next.js / tRPC",
    desc: "Type-safe API layer handling auth, rate limiting, request routing & edge caching",
    color: "#2D4A6E",
    bg: "rgba(45,74,110,0.08)",
    border: "rgba(45,74,110,0.3)",
  },
  {
    id: "microservices",
    label: "CMS / MICROSERVICES",
    sublabel: "Next.js · Node.js · AWS Lambda",
    desc: "Headless CMS + independent services for notifications, payments, and analytics",
    color: "#1B2A4A",
    bg: "rgba(27,42,74,0.06)",
    border: "rgba(27,42,74,0.25)",
  },
  {
    id: "databases",
    label: "DATABASES",
    sublabel: "PostgreSQL · MongoDB · Redis",
    desc: "Relational + document stores with Redis cache layer and automated backups",
    color: "#2D4A6E",
    bg: "rgba(45,74,110,0.08)",
    border: "rgba(45,74,110,0.3)",
  },
  {
    id: "identity",
    label: "IDENTITY PROVIDER",
    sublabel: ".NET / Auth0",
    desc: "Centralized authentication, RBAC, SSO, and OAuth2 / OIDC integration",
    color: "#E85D26",
    bg: "rgba(232,93,38,0.08)",
    border: "rgba(232,93,38,0.3)",
  },
];

const architecturePrinciples = [
  { title: "Separation of Concerns", desc: "Each layer has a single responsibility and communicates via typed APIs" },
  { title: "Cloud-Native by Default", desc: "AWS Lambda, ECS, and RDS for elastic scaling without infrastructure overhead" },
  { title: "Zero-Trust Security", desc: "Auth at every boundary, RBAC enforcement, and audit trails throughout" },
  { title: "Developer Experience First", desc: "Type-safe end-to-end with tRPC + TypeScript, local dev parity" },
];

const coreStack = ["Next.js", "React Native", "Node.js", ".NET", "AWS", "Docker", "PostgreSQL", "MongoDB", "Redis", "TypeScript", "tRPC", "Auth0"];

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
              <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Architecture</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] leading-tight mb-6">
              PLATFORM
              <br />
              <span className="text-[#2D4A6E]">ARCHITECTURE.</span>
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
              End-to-end architecture for the PPM/Sorvo digital platform — a multi-tenant,
              multi-platform ecosystem built for scale. Each layer is independently deployable,
              observable, and connected through a typed contract layer.
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
                  PPM / SORVO PLATFORM
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
