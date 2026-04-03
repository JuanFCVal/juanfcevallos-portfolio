import Image from "next/image";
import PlayIcon from "./icons/PlayIcon";
import TikTokFullIcon from "./icons/TikTokFullIcon";
import ThumbnailPattern from "./svgs/ThumbnailPattern";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const videos = [
  {
    id: "1",
    title: "Never in history was easier to learn.",
    subtitle: "Learning",
    duration: "1:48",
    views: "I hope a lot",
    tags: ["#learning", "#knowledge", "#education"],
    embedUrl: "https://www.tiktok.com/@juanfcval/video/7575644544662867221",
    accentColor: "#E85D26",
  },
  {
    id: "2",
    title: "Generic Types in TypeScript: A Deep Dive",
    subtitle: "Typescript",
    duration: "2:50",
    views: "I hope a lot",
    tags: ["#AI", "#productivity"],
    embedUrl: "https://www.tiktok.com/@juanfcval/video/7572072997918444820",
    accentColor: "#E85D26",
  },
  {
    id: "3",
    title: "My first AI (memorable content)",
    subtitle: "AI",
    duration: "-",
    views: "77k",
    tags: ["#AI"],
    embedUrl: "https://www.tiktok.com/@juanfcval/photo/7571301813056507157",
    accentColor: "#E85D26",
  },
];

export default function TikTok() {
  return (
    <section
      id="community"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "#0d1a30" }}
    >
      <script async src="https://www.tiktok.com/embed.js"></script>
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F8F9FC 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#E85D26] via-[#2D4A6E] to-[#E85D26]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up" className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Community</span>
            <div className="w-8 h-0.5 bg-[#E85D26]" />
          </div>

          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-white">
              <TikTokFullIcon />
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
              TIKTOK COMMUNITY
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            I like to share my experiences and insights or cool stuff through TikTok. My goal is to motivate people in the same way
            my mentors motivated me.
          </p>

          <a
            href="https://www.tiktok.com/@juanfcval"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2 border border-white/20 text-white text-xs font-bold tracking-wider rounded-sm hover:bg-white/10 transition-colors"
          >
            <TikTokFullIcon />
            @juanfcval
          </a>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <AnimateOnScroll key={video.id} animation="fade-up" delay={i * 120}>
              <a
                href={video.embedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-xl overflow-hidden border border-white/10 hover:border-white/25 transition-all hover:shadow-2xl hover:-translate-y-1 h-full"
                style={{ background: "#1B2A4A" }}
              >
                <div
                  className="relative h-52 flex items-center justify-center overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${video.accentColor}22 0%, #0d1a3088 100%)`,
                  }}
                >
                  <Image
                    src={'/tiktok.jpeg'}
                    alt={video.title}
                    width={400}
                    height={400}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="z-40">
                    <ThumbnailPattern />
                  </div>

                  <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {video.duration}
                  </div>

                  <div
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                    style={{ background: video.accentColor, boxShadow: `0 0 30px ${video.accentColor}66` }}
                  >
                    <PlayIcon />
                  </div>

                  <div className="absolute bottom-3 left-3 text-white/40">
                    <TikTokFullIcon />
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-sm font-black text-white leading-snug mb-1">
                    {video.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3">{video.subtitle}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 flex-wrap">
                      {video.tags.map((tag) => (
                        <span key={tag} className="text-xs text-slate-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-bold" style={{ color: video.accentColor }}>
                      {video.views} views
                    </span>
                  </div>
                </div>
              </a>
            </AnimateOnScroll>
          ))}

        </div>

        <p className="text-center text-xs text-slate-600 mt-8">
          Video thumbnails shown above — click to watch on TikTok
        </p>
      </div>
    </section>
  );
}
