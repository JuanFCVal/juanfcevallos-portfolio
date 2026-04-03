import LinkedInIcon from "./icons/LinkedInIcon";
import TikTokIcon from "./icons/TikTokIcon";
import XIcon from "./icons/XIcon";
import GlobeIcon from "./icons/GlobeIcon";
import MailIcon from "./icons/MailIcon";
import GeometricLines from "./svgs/GeometricLines";

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
      <div className="h-1 bg-linear-to-r from-[#E85D26] via-[#2D4A6E] to-[#E85D26]" />

      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #F8F9FC 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <GeometricLines />

      <div className="relative max-w-5xl mx-auto px-6 py-20 lg:py-28 text-center">

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

        <div
          className="max-w-2xl mx-auto mb-10 rounded-xl overflow-hidden border border-white/10"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="text-xs text-slate-500 ml-2 font-mono">terminal</span>
          </div>

          <div
            className="p-5 text-left font-mono text-sm"
            style={{ background: "rgba(0,0,0,0.6)" }}
          >
            <div className="flex items-start gap-2 text-slate-300">
              <span className="text-[#E85D26] shrink-0">$</span>
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
