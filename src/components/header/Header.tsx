"use client";
import { useState } from "react";
import CloseIcon from "./icons/CloseIcon";
import GithubIIcon from "./icons/GithubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";
import MenuIcon from "./icons/MenuIcon";
import TikTokIcon from "./icons/TikTokIcon";

const navLinks = [
  { label: "ABOUT ME", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "COMMUNITY", href: "#community" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-2">
            <a href="#" className="text-sm font-bold tracking-widest text-[#1B2A4A] hover:text-[#2D4A6E] transition-colors">
              JuanFCVal
            </a>
            <div className="flex items-center gap-3 text-[#2D4A6E]">
              <a href="https://linkedin.com/in/juanfcval" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85D26] transition-colors" aria-label="LinkedIn">
                <LinkedInIcon />
              </a>
              <a href="https://www.tiktok.com/@juanfcval" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85D26] transition-colors" aria-label="TikTok">
                <TikTokIcon />
              </a>
              <a href="https://github.com/JuanFCVal" target="_blank" rel="noopener noreferrer" className="hover:text-[#E85D26] transition-colors" aria-label="Github">
                <GithubIIcon

                />
              </a>
            </div>
          </div>

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

          <button
            className="md:hidden text-[#1B2A4A] mt-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

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
