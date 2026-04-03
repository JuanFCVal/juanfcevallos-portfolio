function AirplaneIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2c-.5.1-.8.7-.5 1.1L4 10l-2 3.5c-.3.5 0 1.1.5 1.3L6 16l1.7 3.5c.2.5.8.8 1.3.5L12 18l3.5 2.7c.4.3 1 0 1.1-.5l.2-.3z" />
    </svg>
  );
}

function SoccerIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 010 20" opacity="0.3" />
      <polygon points="12,7 14.5,10 13.5,13 10.5,13 9.5,10" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LaptopIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="2" y1="20" x2="22" y2="20" />
    </svg>
  );
}

function MusicIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </svg>
  );
}

const destinations = [
  "Colombia", "USA", "Mexico", "Peru", "Spain", "Argentina",
];

export default function BentoBox() {
  return (
    <section
      className="py-20 lg:py-28 border-t border-slate-100"
      style={{ background: "#F8F9FC" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Personal</span>
            <div className="w-8 h-0.5 bg-[#E85D26]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] leading-tight">
            PERSONAL CONNECTION &amp;
            <br />
            <span className="text-[#2D4A6E]">HOBBY BENTO BOX.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            Work is what I do; these are what I love.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">

          {/* TRAVEL — large left block (spans 2 rows on lg) */}
          <div
            className="lg:row-span-2 relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-64"
            style={{
              background: "linear-gradient(135deg, #1B2A4A 0%, #2D4A6E 100%)",
              boxShadow: "0 8px 30px rgba(27,42,74,0.15)",
            }}
          >
            {/* Background pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
              <circle cx="200" cy="150" r="120" fill="none" stroke="#F8F9FC" strokeWidth="1" />
              <circle cx="200" cy="150" r="80" fill="none" stroke="#F8F9FC" strokeWidth="0.5" />
              <line x1="80" y1="150" x2="320" y2="150" stroke="#F8F9FC" strokeWidth="0.5" />
              <line x1="200" y1="30" x2="200" y2="270" stroke="#F8F9FC" strokeWidth="0.5" />
            </svg>

            <div className="relative">
              <div className="text-white/60 mb-4">
                <AirplaneIcon />
              </div>
              <div className="text-xs font-bold tracking-[0.3em] text-[#E85D26] mb-2 uppercase">Hobby</div>
              <h3 className="text-3xl font-black text-white mb-3">TRAVEL</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Exploring different cultures sharpens perspective — both in design and in life.
                Remote work has let me turn the world into my office.
              </p>
            </div>

            <div className="relative mt-6">
              <div className="text-xs font-bold text-slate-400 tracking-wider mb-3 uppercase">Visited</div>
              <div className="flex flex-wrap gap-2">
                {destinations.map((dest) => (
                  <span
                    key={dest}
                    className="text-xs font-semibold text-white/80 bg-white/10 px-2.5 py-1 rounded-full border border-white/10"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SPORTS */}
          <div
            className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-44"
            style={{
              background: "linear-gradient(135deg, #E85D26 0%, #c04a1e 100%)",
              boxShadow: "0 8px 30px rgba(232,93,38,0.15)",
            }}
          >
            <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
              <circle cx="150" cy="100" r="60" fill="none" stroke="#F8F9FC" strokeWidth="1" />
              <circle cx="150" cy="100" r="90" fill="none" stroke="#F8F9FC" strokeWidth="0.5" />
            </svg>
            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-xs font-bold tracking-[0.3em] text-white/60 mb-2 uppercase">Passion</div>
                <h3 className="text-2xl font-black text-white">SPORTS</h3>
              </div>
              <div className="text-white/70">
                <SoccerIcon />
              </div>
            </div>
            <div className="relative">
              <p className="text-white/80 text-sm leading-relaxed">
                Football fanatic &amp; amateur runner. Competitive spirit on the pitch mirrors
                how I push engineering teams to excellence.
              </p>
              <div className="flex gap-2 mt-3">
                {["⚽ Football", "🏃 Running", "🎾 Tennis"].map((s) => (
                  <span key={s} className="text-xs font-semibold bg-white/15 text-white px-2 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* REMOTE WORK */}
          <div
            className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-44 border border-slate-200"
            style={{ background: "#ffffff" }}
          >
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice">
              <path d="M0 100 Q75 50 150 100 Q225 150 300 100" fill="none" stroke="#1B2A4A" strokeWidth="1" />
              <path d="M0 60 Q75 10 150 60 Q225 110 300 60" fill="none" stroke="#1B2A4A" strokeWidth="0.5" />
            </svg>
            <div className="relative flex items-start justify-between">
              <div>
                <div className="text-xs font-bold tracking-[0.3em] text-[#E85D26] mb-2 uppercase">Lifestyle</div>
                <h3 className="text-2xl font-black text-[#1B2A4A]">REMOTE WORK</h3>
              </div>
              <div className="text-[#2D4A6E]">
                <LaptopIcon />
              </div>
            </div>
            <p className="relative text-slate-500 text-sm leading-relaxed">
              4+ years of async-first distributed work. I&apos;ve built frameworks for remote team health,
              rituals, and knowledge sharing.
            </p>
          </div>

          {/* MUSIC */}
          <div
            className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-36 border border-slate-200"
            style={{ background: "#ffffff" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold tracking-[0.3em] text-[#2D4A6E] mb-2 uppercase">Vibe</div>
                <h3 className="text-xl font-black text-[#1B2A4A]">MUSIC</h3>
              </div>
              <div className="text-[#2D4A6E]">
                <MusicIcon />
              </div>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed mt-2">
              Coding to lofi, leading to jazz. Music shapes every context-switch.
            </p>
          </div>

          {/* READING */}
          <div
            className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-36"
            style={{
              background: "linear-gradient(135deg, #2D4A6E 0%, #1B2A4A 100%)",
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-bold tracking-[0.3em] text-[#E85D26] mb-2 uppercase">Always</div>
                <h3 className="text-xl font-black text-white">READING</h3>
              </div>
              <div className="text-white/60">
                <BookIcon />
              </div>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed mt-2">
              Tech leadership, system design, and the occasional sci-fi novel.
              Current: &quot;Staff Engineer&quot; by Will Larson.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
