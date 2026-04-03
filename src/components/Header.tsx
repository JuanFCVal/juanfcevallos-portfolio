"use client";
import { useState } from "react";

const navLinks = [
  { label: "EXPERIENCE", href: "#experience" },
  { label: "LEADERSHIP", href: "#leadership" },
  { label: "ARCHITECTURE", href: "#architecture" },
  { label: "COMMUNITY", href: "#community" },
  { label: "CONTACT", href: "#contact" },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-start justify-between gap-4">
          {/* Left: Name + Social Icons */}
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm font-bold tracking-widest text-[#1B2A4A] hover:text-[#2D4A6E] transition-colors">
              JUAN FRANCISCO CEVALLOS
            </a>
            <div className="flex items-center gap-3 text-[#2D4A6E]">
              <a
                href="https://linkedin.com/in/juanfcevallos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E85D26] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://tiktok.com/@juanfcevallos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E85D26] transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://x.com/juanfcevallos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E85D26] transition-colors"
                aria-label="X / Twitter"
              >
                <XIcon />
              </a>
              <a
                href="#"
                className="hover:text-[#E85D26] transition-colors"
                aria-label="Website"
              >
                <GlobeIcon />
              </a>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 mt-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-wider text-[#1B2A4A] hover:text-[#E85D26] transition-colors px-3 py-1.5 rounded hover:bg-slate-50 before:content-['['] after:content-[']'] before:mr-0.5 after:ml-0.5 before:text-[#2D4A6E] after:text-[#2D4A6E]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#1B2A4A] mt-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden mt-3 pb-2 border-t border-slate-100 pt-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-semibold tracking-wider text-[#1B2A4A] hover:text-[#E85D26] transition-colors px-2 py-2 rounded hover:bg-slate-50 before:content-['['] after:content-[']'] before:mr-0.5 after:ml-0.5 before:text-[#2D4A6E] after:text-[#2D4A6E]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
