const videos = [
  {
    id: "1",
    title: "Shift to Tech Lead: Lessons Learned",
    subtitle: "From IC to leadership — what nobody tells you",
    duration: "4:32",
    views: "12.4K",
    tags: ["#techlead", "#career"],
    embedUrl: "https://www.tiktok.com/embed/v2/7234567890123456789",
    accentColor: "#E85D26",
  },
  {
    id: "2",
    title: "AI & Dev Productivity",
    subtitle: "The tools I use daily to ship 3x faster",
    duration: "3:18",
    views: "8.7K",
    tags: ["#AI", "#productivity"],
    embedUrl: "https://www.tiktok.com/embed/v2/7234567890123456790",
    accentColor: "#2D4A6E",
  },
  {
    id: "3",
    title: "Remote Work Architecture",
    subtitle: "How I structure async-first teams across timezones",
    duration: "5:01",
    views: "6.2K",
    tags: ["#remotework", "#architecture"],
    embedUrl: "https://www.tiktok.com/embed/v2/7234567890123456791",
    accentColor: "#1B2A4A",
  },
];

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function TikTokFullIcon() {
  return (
    <svg width="20" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

export default function TikTok() {
  return (
    <section
      id="community"
      className="py-20 lg:py-28 relative overflow-hidden"
      style={{ background: "#0d1a30" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F8F9FC 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E85D26] via-[#2D4A6E] to-[#E85D26]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
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
              TIKTOK COMMUNITY HUB
            </h2>
          </div>

          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Sharing the real side of tech leadership — career pivots, AI tools, and
            engineering culture — one short-form video at a time.
          </p>

          <a
            href="https://tiktok.com/@juanfcevallos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2 border border-white/20 text-white text-xs font-bold tracking-wider rounded-sm hover:bg-white/10 transition-colors"
          >
            <TikTokFullIcon />
            @juanfcevallos
          </a>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-white/25 transition-all hover:shadow-2xl hover:-translate-y-1"
              style={{ background: "#1B2A4A" }}
            >
              {/* Thumbnail placeholder */}
              <div
                className="relative h-52 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${video.accentColor}22 0%, #0d1a3088 100%)`,
                }}
              >
                {/* Pattern inside thumbnail */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 208" preserveAspectRatio="xMidYMid slice">
                  <line x1="0" y1="0" x2="300" y2="208" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="300" y1="0" x2="0" y2="208" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="150" y1="0" x2="150" y2="208" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="0" y1="104" x2="300" y2="104" stroke="#F8F9FC" strokeWidth="0.5" />
                </svg>

                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-0.5 rounded">
                  {video.duration}
                </div>

                {/* Play button */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform"
                  style={{ background: video.accentColor, boxShadow: `0 0 30px ${video.accentColor}66` }}
                >
                  <PlayIcon />
                </div>

                {/* TikTok logo watermark */}
                <div className="absolute bottom-3 left-3 text-white/40">
                  <TikTokFullIcon />
                </div>
              </div>

              {/* Card content */}
              <div className="p-5">
                <h3 className="text-sm font-black text-white leading-snug mb-1">
                  {video.title}
                </h3>
                <p className="text-xs text-slate-400 mb-3">{video.subtitle}</p>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {video.tags.map((tag) => (
                      <span key={tag} className="text-xs text-slate-500">{tag}</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold" style={{ color: video.accentColor }}>
                    {video.views} views
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note about embeds */}
        <p className="text-center text-xs text-slate-600 mt-8">
          Video thumbnails shown above — click to watch on TikTok
        </p>
      </div>
    </section>
  );
}
