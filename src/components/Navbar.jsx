import React, { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolioData";
import { Terminal, Mail, Menu, X, FileText } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#020611]/90 backdrop-blur-md border-b border-blue-900/40 py-3.5 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-full px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-blue-500 to-sky-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-bold text-base sm:text-lg text-white group-hover:text-blue-400 transition-colors tracking-tight">
              {personalInfo.name}
            </span>
            <span className="block text-xs text-blue-400 font-mono">Java Backend Developer</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-blue-500 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA / Socials / Resume */}
        <div className="hidden md:flex items-center gap-3.5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-400 hover:text-white hover:bg-blue-950/50 rounded-xl border border-transparent hover:border-blue-900/50 transition-colors"
            title="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 text-slate-400 hover:text-blue-400 hover:bg-blue-950/50 rounded-xl border border-transparent hover:border-blue-900/50 transition-colors"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>

          {/* Direct Resume Action */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-blue-500/30 bg-blue-500/10 hover:bg-blue-500/20 text-xs font-semibold text-blue-300 transition-all"
          >
            <FileText className="w-3.5 h-3.5" /> Resume
          </a>

          <a
            href="#contact"
            className="text-xs font-semibold px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#030a1c] border-b border-blue-900/50 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-blue-400"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-blue-900/50 flex items-center justify-between">
            <div className="flex gap-4">
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalInfo.email}`} className="text-slate-400 hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 text-white"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}