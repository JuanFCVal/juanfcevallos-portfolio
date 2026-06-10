import LinkedInIcon from "./icons/LinkedInIcon";
import MailIcon from "./icons/MailIcon";
import TikTokIcon from "./icons/TikTokIcon";
import GithubIcon from "./icons/GithubIcon";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import TerminalBlock from "./TerminalBlock";

const socialLinks = [
  { icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/juanfcval", label: "LinkedIn" },
  { icon: <GithubIcon />, href: "https://github.com/JuanFCVal", label: "GitHub" },
  { icon: <TikTokIcon />, href: "https://www.tiktok.com/@juanfcval", label: "TikTok" },
  { icon: <MailIcon />, href: "mailto:juanfcval@gmail.com", label: "Email" },
];

export default function Contact() {
  return (
    <footer id="contact" className="bg-surface-darker relative overflow-hidden">
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)" }} />

      {/* faint teal glow from bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at bottom, rgba(0,212,168,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-28">

        <AnimateOnScroll animation="fade-up" className="mb-12">
          <p className="font-mono text-xs tracking-[0.3em] mb-6" style={{ color: "rgba(0,212,168,0.6)" }}>
            08 / CONTACT
          </p>
          <h2 className="text-3xl lg:text-5xl font-black tracking-tight leading-tight text-primary mb-4">
            LET&apos;S BUILD<br />
            <span className="text-accent">SOMETHING.</span>
          </h2>
          <p className="text-sm leading-relaxed max-w-sm text-secondary">
            Whether it&apos;s a new product, a potential collaboration, or just to say hi — I&apos;m always open to connecting.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={100}>
          <TerminalBlock />
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={150} className="flex flex-wrap gap-3 mb-10">
          <a
            href="mailto:juanfcval@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-bold tracking-widest transition-colors bg-accent hover:bg-accent-light text-[#080808] focus-visible:outline-accent"
          >
            <MailIcon />
            SEND AN EMAIL
          </a>
          <a
            href="https://www.linkedin.com/in/juanfcval/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded text-sm font-bold tracking-widest transition-colors border text-primary hover:border-accent/30 hover:text-accent focus-visible:outline-accent"
            style={{ borderColor: "rgba(255,255,255,0.12)" }}
          >
            <LinkedInIcon />
            CONNECT ON LINKEDIN
          </a>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-up" delay={200} className="flex items-center gap-4 mb-12">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-lg transition-all text-secondary hover:text-accent focus-visible:outline-accent"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {s.icon}
            </a>
          ))}
        </AnimateOnScroll>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
            </span>
            <span className="font-mono text-xs text-secondary/60">
              Open to freelance &amp; full-time opportunities
            </span>
          </div>
          <span className="font-mono text-xs text-secondary/40">
            © {new Date().getFullYear()} Juan F. Cevallos · Ecuador
          </span>
        </div>

      </div>
    </footer>
  );
}
