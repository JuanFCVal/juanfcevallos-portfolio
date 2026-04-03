function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

const socialLinks = [
  { icon: <LinkedInIcon />, href: "https://linkedin.com/in/juanfcevallos", label: "LinkedIn" },
  { icon: <TikTokIcon />, href: "https://tiktok.com/@juanfcevallos", label: "TikTok" },
  { icon: <XIcon />, href: "https://x.com/juanfcevallos", label: "X / Twitter" },
  { icon: <GlobeIcon />, href: "#", label: "Website" },
  { icon: <MailIcon />, href: "mailto:juan@cevallos.dev", label: "Email" },
];

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden" style={{ background: "#1B2A4A" }}>
      {/* Top gradient bar */}
      <div className="h-1 bg-gradient-to-r from-[#E85D26] via-[#2D4A6E] to-[#E85D26]" />

      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F8F9FC 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Geometric lines */}
      <svg className="absolute inset-0 w-full h-full opacity-5 pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMid slice">
        <line x1="0" y1="0" x2="1440" y2="600" stroke="#F8F9FC" strokeWidth="1" />
        <line x1="1440" y1="0" x2="0" y2="600" stroke="#F8F9FC" strokeWidth="1" />
        <circle cx="720" cy="300" r="200" fill="none" stroke="#F8F9FC" strokeWidth="0.5" />
        <circle cx="720" cy="300" r="150" fill="none" stroke="#F8F9FC" strokeWidth="0.5" />
      </svg>

      <div className="relative max-w-5xl mx-auto px-6 py-20 lg:py-28 text-center">

        {/* Main heading */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Contact</span>
            <div className="w-8 h-0.5 bg-[#E85D26]" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
            LET&apos;S BUILD SOMETHING
            <br />
            <span className="text-[#E85D26]">MAGICAL.</span>
          </h2>

          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            Whether it&apos;s a new product, an engineering challenge, or a conversation
            about AI and leadership — I&apos;m always open to connecting.
          </p>
        </div>

        {/* Terminal block */}
        <div
          className="max-w-2xl mx-auto mb-10 rounded-xl overflow-hidden border border-white/10"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
        >
          {/* Terminal titlebar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs text-slate-500 ml-2 font-mono">terminal</span>
          </div>

          {/* Terminal body */}
          <div
            className="p-5 text-left font-mono text-sm"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <div className="flex items-start gap-2 text-slate-300">
              <span className="text-[#E85D26] flex-shrink-0">$</span>
              <span className="text-slate-400">~</span>
              <span className="break-all">
                <span className="text-[#2D4A6E]">[juan@cevallos-portfolio:~]</span>
                <span className="text-white">$ </span>
                <span className="text-green-400">connect</span>
                <span className="text-yellow-400"> --via=multiplier</span>
                <span className="text-yellow-400"> --multicultural=english</span>
                <span className="text-yellow-400"> --tech=magic</span>
              </span>
            </div>
            <div className="mt-2 text-slate-400 flex items-center gap-1">
              <span>Initializing connection...</span>
              <span className="text-green-400">✓ Ready.</span>
              <span className="cursor-blink text-white ml-1">|</span>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-5 mb-12">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="w-11 h-11 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-[#E85D26] hover:border-[#E85D26]/50 hover:bg-[#E85D26]/10 transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href="mailto:juan@cevallos.dev"
            className="inline-flex items-center gap-2 px-7 py-3 bg-[#E85D26] text-white text-sm font-black tracking-widest rounded hover:bg-[#c04a1e] transition-colors"
          >
            <MailIcon />
            SEND AN EMAIL
          </a>
          <a
            href="https://linkedin.com/in/juanfcevallos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white/30 text-white text-sm font-black tracking-widest rounded hover:bg-white/10 transition-colors"
          >
            <LinkedInIcon />
            CONNECT ON LINKEDIN
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="text-sm font-black tracking-widest text-white/30">
              JUAN FRANCISCO CEVALLOS
            </span>
            <span className="text-xs text-slate-600 font-mono text-center">
              Minimal legal footer | distributed: nopsect, a elaBiHGFiSm version, cooler than neo versions.
            </span>
            <span className="text-xs text-slate-600">
              © {new Date().getFullYear()} JFC
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
