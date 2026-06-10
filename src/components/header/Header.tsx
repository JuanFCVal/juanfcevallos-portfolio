"use client";
import { useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import GithubIIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import MenuIcon from "./icons/MenuIcon";
import TikTokIcon from "./icons/TikTokIcon";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "WORK", href: "#projects" },
  { label: "COMMUNITY", href: "#community" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-sm"
      style={{
        background: "rgba(8,8,8,0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-6">

          <div className="flex flex-col items-start">
            <a
              href="#"
              className="font-mono text-xs font-bold tracking-[0.25em] text-accent hover:text-accent-light transition-colors"
            >
              HI
            </a>
            <span
              className="font-mono text-xs tracking-[0.25em] select-none pointer-events-none"
              style={{ color: "rgba(255,255,255,0.35)" }}
              aria-hidden="true"
            >
              ↑↓→→←
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-xs tracking-[0.18em] text-secondary hover:text-primary transition-colors px-3 py-1.5 rounded hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3 text-secondary">
            <a href="https://linkedin.com/in/juanfcval" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://github.com/JuanFCVal" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub">
              <GithubIIcon />
            </a>
            <a href="https://www.tiktok.com/@juanfcval" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>

          <button
            className="md:hidden text-secondary hover:text-primary transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {menuOpen && (
          <nav
            className="md:hidden mt-3 pt-3 flex flex-col gap-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs tracking-[0.18em] text-secondary hover:text-primary transition-colors px-2 py-2.5 rounded hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
            <div
              className="flex items-center gap-4 px-2 pt-3 mt-2 text-secondary"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <a href="https://linkedin.com/in/juanfcval" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="https://github.com/JuanFCVal" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="GitHub"><GithubIIcon /></a>
              <a href="https://www.tiktok.com/@juanfcval" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="TikTok"><TikTokIcon /></a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
