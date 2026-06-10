import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-surface-alt relative overflow-hidden">
      <span
        className="absolute left-0 top-1/4 text-[22vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.012)" }}
        aria-hidden="true"
      >
        04
      </span>

      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateOnScroll animation="fade-up" className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] mb-5" style={{ color: "rgba(0,212,168,0.6)" }}>
            04 / WORK
          </p>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight" style={{ color: "var(--primary)" }}>
            PROJECTS I&apos;VE SHIPPED
          </h2>
          <p className="text-sm mt-2" style={{ color: "var(--secondary)" }}>
            Production systems built and led from concept to release.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} animation="fade-up" delay={i * 80}>
              <div
                className="py-8 group"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-start">

                  <div>
                    {/* number + metric */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className="font-mono text-xs"
                        style={{ color: "rgba(0,212,168,0.4)" }}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className="font-mono text-xs px-2 py-0.5 rounded"
                        style={{
                          background: "rgba(0,212,168,0.08)",
                          border: "1px solid rgba(0,212,168,0.2)",
                          color: "var(--accent)",
                        }}
                      >
                        {project.metric}
                      </span>
                    </div>

                    {/* title */}
                    <h3
                      className="text-xl lg:text-2xl font-black leading-tight mb-2 transition-colors group-hover:text-accent"
                      style={{ color: "var(--primary)" }}
                    >
                      {project.title}
                    </h3>

                    {/* description */}
                    {project.description && (
                      <p className="text-sm leading-relaxed mb-4 max-w-xl" style={{ color: "var(--secondary)" }}>
                        {project.description}
                      </p>
                    )}

                    {/* tech */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
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

                  {/* links */}
                  <div className="flex lg:flex-col items-start gap-3 lg:pt-1">
                    <span className="font-mono text-xs" style={{ color: "rgba(136,136,136,0.5)" }}>
                      {project.role} · {project.company}
                    </span>
                    <div className="flex gap-3">
                      {project.isPrivate && (
                        <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                          Private
                        </span>
                      )}
                      {!project.isPrivate && project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs transition-colors hover:text-accent"
                          style={{ color: "var(--secondary)" }}
                        >
                          GitHub ↗
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs transition-colors font-bold"
                          style={{ color: "var(--accent)" }}
                        >
                          Live ↗
                        </a>
                      )}
                    </div>
                  </div>

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
