export default function Hero() {
  return (
    <section
      id="about"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "#F8F9FC" }}
    >
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geo-pattern opacity-40 pointer-events-none" />

      {/* SVG network lines background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1B2A4A" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        {/* Diagonal lines for network feel */}
        <line x1="0" y1="200" x2="400" y2="0" stroke="#1B2A4A" strokeWidth="0.4" />
        <line x1="200" y1="600" x2="800" y2="0" stroke="#1B2A4A" strokeWidth="0.4" />
        <line x1="600" y1="600" x2="1200" y2="100" stroke="#1B2A4A" strokeWidth="0.4" />
        <circle cx="200" cy="150" r="3" fill="#2D4A6E" />
        <circle cx="500" cy="80" r="2" fill="#2D4A6E" />
        <circle cx="750" cy="300" r="3" fill="#2D4A6E" />
        <circle cx="100" cy="400" r="2" fill="#2D4A6E" />
        <line x1="200" y1="150" x2="500" y2="80" stroke="#2D4A6E" strokeWidth="0.6" />
        <line x1="500" y1="80" x2="750" y2="300" stroke="#2D4A6E" strokeWidth="0.6" />
        <line x1="100" y1="400" x2="200" y2="150" stroke="#2D4A6E" strokeWidth="0.6" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Portrait Placeholder with network lines */}
          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-full border border-[#2D4A6E]/20 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute -inset-8 rounded-full border border-dashed border-[#2D4A6E]/10" />

              {/* Portrait circle */}
              <div
                className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden float-anim"
                style={{
                  background: "linear-gradient(135deg, #1B2A4A 0%, #2D4A6E 50%, #3a5a80 100%)",
                  boxShadow: "0 20px 60px rgba(27,42,74,0.25), 0 0 0 6px rgba(45,74,110,0.15)",
                }}
              >
                {/* Geometric network pattern inside the circle */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-30"
                  viewBox="0 0 320 320"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Network nodes */}
                  <circle cx="160" cy="80" r="4" fill="#F8F9FC" />
                  <circle cx="80" cy="160" r="4" fill="#F8F9FC" />
                  <circle cx="240" cy="160" r="4" fill="#F8F9FC" />
                  <circle cx="120" cy="240" r="4" fill="#F8F9FC" />
                  <circle cx="200" cy="240" r="4" fill="#F8F9FC" />
                  <circle cx="160" cy="160" r="6" fill="#E85D26" />
                  <circle cx="50" cy="100" r="3" fill="#F8F9FC" />
                  <circle cx="270" cy="100" r="3" fill="#F8F9FC" />
                  <circle cx="50" cy="220" r="3" fill="#F8F9FC" />
                  <circle cx="270" cy="220" r="3" fill="#F8F9FC" />
                  {/* Network edges */}
                  <line x1="160" y1="80" x2="80" y2="160" stroke="#F8F9FC" strokeWidth="1" />
                  <line x1="160" y1="80" x2="240" y2="160" stroke="#F8F9FC" strokeWidth="1" />
                  <line x1="80" y1="160" x2="160" y2="160" stroke="#F8F9FC" strokeWidth="1" />
                  <line x1="240" y1="160" x2="160" y2="160" stroke="#F8F9FC" strokeWidth="1" />
                  <line x1="80" y1="160" x2="120" y2="240" stroke="#F8F9FC" strokeWidth="1" />
                  <line x1="240" y1="160" x2="200" y2="240" stroke="#F8F9FC" strokeWidth="1" />
                  <line x1="120" y1="240" x2="200" y2="240" stroke="#F8F9FC" strokeWidth="1" />
                  <line x1="50" y1="100" x2="160" y2="80" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="270" y1="100" x2="160" y2="80" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="50" y1="100" x2="80" y2="160" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="270" y1="100" x2="240" y2="160" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="50" y1="220" x2="80" y2="160" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="270" y1="220" x2="240" y2="160" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="50" y1="220" x2="120" y2="240" stroke="#F8F9FC" strokeWidth="0.5" />
                  <line x1="270" y1="220" x2="200" y2="240" stroke="#F8F9FC" strokeWidth="0.5" />
                </svg>

                {/* Initials */}
                <div className="absolute inset-0 flex items-center justify-center flex-col gap-1">
                  <span className="text-5xl font-black text-white/90 tracking-tight">JF</span>
                  <span className="text-xs font-semibold tracking-[0.3em] text-white/50 uppercase">Cevallos</span>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -bottom-3 -right-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-slate-100"
                style={{ boxShadow: "0 4px 20px rgba(27,42,74,0.12)" }}
              >
                <span className="text-xs font-bold text-[#E85D26] tracking-wider">TECH LEAD</span>
              </div>
            </div>
          </div>

          {/* Right: Text content */}
          <div className="order-1 lg:order-2 flex flex-col gap-6">
            {/* Name */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight">
                <span className="text-[#1B2A4A]">JUAN F.</span>
                <br />
                <span className="text-[#2D4A6E]">CEVALLOS.</span>
              </h1>
            </div>

            {/* Tagline */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#E85D26]" />
              <p className="text-lg font-bold tracking-widest text-[#1B2A4A] uppercase">
                Tech Lead &amp; AI Multiplier
              </p>
            </div>

            {/* Description */}
            <p className="text-base leading-relaxed text-slate-600 max-w-lg">
              I bridge strategy and execution — designing{" "}
              <span className="font-semibold text-[#E85D26] bg-[#E85D26]/10 px-1 rounded">
                scalable solutions
              </span>{" "}
              that align business goals with technical architecture. Passionate about building{" "}
              <span className="font-semibold text-[#E85D26] bg-[#E85D26]/10 px-1 rounded">
                internal AI productivity tools
              </span>{" "}
              and fostering high-performance multicultural teams across Latin America and beyond.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="/CV_EN_JuanCevallos_SoftwareEngineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#1B2A4A] text-[#1B2A4A] text-sm font-bold tracking-widest hover:bg-[#1B2A4A] hover:text-white transition-all rounded-sm before:content-['['] after:content-[']'] before:text-[#E85D26] after:text-[#E85D26] before:font-black after:font-black"
              >
                CV
              </a>
              <a
                href="https://linkedin.com/in/juanfcevallos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#2D4A6E] text-[#2D4A6E] text-sm font-bold tracking-widest hover:bg-[#2D4A6E] hover:text-white transition-all rounded-sm before:content-['['] after:content-[']'] before:text-[#E85D26] after:text-[#E85D26] before:font-black after:font-black"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:juan@cevallos.dev"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#E85D26] text-[#E85D26] text-sm font-bold tracking-widest hover:bg-[#E85D26] hover:text-white transition-all rounded-sm before:content-['['] after:content-[']'] before:text-[#1B2A4A] after:text-[#1B2A4A] before:font-black after:font-black"
              >
                EMAIL
              </a>
            </div>

            {/* Small stats row */}
            <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-slate-200">
              <div>
                <div className="text-2xl font-black text-[#1B2A4A]">8+</div>
                <div className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Years Exp.</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1B2A4A]">12+</div>
                <div className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Teams Led</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#1B2A4A]">3</div>
                <div className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-black text-[#E85D26]">AI</div>
                <div className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Multiplier</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
