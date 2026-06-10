import Image from "next/image";
import PlayIcon from "./icons/PlayIcon";
import TikTokFullIcon from "./icons/TikTokFullIcon";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const videos = [
  {
    id: "1",
    title: "Never in history was it easier to learn.",
    subtitle: "Learning",
    duration: "1:48",
    views: null,
    tags: ["#learning", "#education"],
    embedUrl: "https://www.tiktok.com/@juanfcval/video/7575644544662867221",
  },
  {
    id: "2",
    title: "Generic Types in TypeScript: A Deep Dive",
    subtitle: "TypeScript",
    duration: "2:50",
    views: null,
    tags: ["#typescript", "#programming"],
    embedUrl: "https://www.tiktok.com/@juanfcval/video/7572072997918444820",
  },
  {
    id: "3",
    title: "My first AI (memorable content)",
    subtitle: "AI",
    duration: null,
    views: "77k",
    tags: ["#AI"],
    embedUrl: "https://www.tiktok.com/@juanfcval/photo/7571301813056507157",
  },
];

export default function TikTok() {
  return (
    <section id="community" className="py-20 lg:py-28 bg-surface-alt relative overflow-hidden">
      <span
        className="absolute left-0 top-1/3 text-[22vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.012)" }}
        aria-hidden="true"
      >
        06
      </span>

      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateOnScroll animation="fade-up" className="mb-14">
          <p className="font-mono text-xs tracking-[0.3em] mb-5" style={{ color: "rgba(0,212,168,0.6)" }}>
            06 / COMMUNITY
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-primary">
                SHARING WHAT I KNOW
              </h2>
              <p className="text-sm mt-2 max-w-sm text-secondary">
                I share experiences, insights, and things I find interesting.
                My goal is to give back the way my mentors gave to me.
              </p>
            </div>
            <a
              href="https://www.tiktok.com/@juanfcval"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs tracking-widest px-4 py-2 rounded transition-colors border text-secondary hover:text-accent hover:border-accent/30 shrink-0 focus-visible:outline-accent"
              style={{ borderColor: "rgba(255,255,255,0.1)" }}
            >
              <TikTokFullIcon />
              @juanfcval
            </a>
          </div>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {videos.map((video, i) => (
            <AnimateOnScroll key={video.id} animation="fade-up" delay={i * 100}>
              <a
                href={video.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl overflow-hidden transition-all cursor-pointer h-full hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div className="relative overflow-hidden" style={{ height: "180px" }}>
                  <Image
                    src="/tiktok.jpeg"
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-[#080808] transition-transform group-hover:scale-110"
                      style={{ background: "var(--accent)" }}
                    >
                      <PlayIcon />
                    </div>
                  </div>
                  {video.duration && (
                    <div
                      className="absolute top-3 right-3 font-mono text-xs px-2 py-0.5 rounded text-primary"
                      style={{ background: "rgba(0,0,0,0.65)" }}
                    >
                      {video.duration}
                    </div>
                  )}
                </div>

                <div className="p-4 flex flex-col flex-1">
                  <div
                    className="font-mono text-xs tracking-widest uppercase mb-2"
                    style={{ color: "rgba(0,212,168,0.6)" }}
                  >
                    {video.subtitle}
                  </div>
                  <h3 className="text-sm font-bold text-primary leading-snug mb-auto">
                    {video.title}
                  </h3>
                  <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex gap-2 flex-wrap">
                      {video.tags.map((tag) => (
                        <span key={tag} className="font-mono text-xs text-secondary/60">{tag}</span>
                      ))}
                    </div>
                    {video.views && (
                      <span className="font-mono text-xs text-accent/70">{video.views} views</span>
                    )}
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
}
