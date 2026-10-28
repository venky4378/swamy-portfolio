import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowRight, Mail, Database, Server, Cpu, Sparkles, Terminal, Code2, Download, Eye } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import profileImg from "../assets/profile.jpg";

export default function Hero({ onOpenResume }) {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-left">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-medium text-emerald-400 border border-emerald-500/25 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {personalInfo.status}
              </div>

              {/* Solid High-Contrast Professional Highlight Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1d4ed8] text-white text-xs font-semibold tracking-wide shadow-md shadow-blue-700/30">
                <Code2 className="w-3.5 h-3.5 text-blue-200" />
                Java &bull; Spring Boot Specialist
              </div>
            </div>

            {/* Main Headline with Solid Professional Focus */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12]">
              <span className="text-[#3b82f6]">Java &amp; Spring Boot</span> Backend Engineer
            </h1>

            <p className="mt-4 text-xl sm:text-2xl font-semibold text-slate-200 tracking-tight">
              Architecting Event-Driven Microservices &amp; Production AI Systems
            </p>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
              Hi, I'm <span className="text-white font-semibold">{personalInfo.name}</span>. A Java Backend Developer and 2026 graduate specializing in robust, high-throughput microservices using <span className="text-white font-medium bg-blue-950/70 px-2 py-0.5 rounded border border-blue-800/60">Spring Boot</span>, distributed event streaming with <span className="text-white font-medium bg-blue-950/70 px-2 py-0.5 rounded border border-blue-800/60">Apache Kafka</span>, and enterprise AI RAG pipelines with <span className="text-white font-medium bg-blue-950/70 px-2 py-0.5 rounded border border-blue-800/60">Spring AI &amp; PGVector</span>.
            </p>

            {/* Action Buttons: Includes View Resume and Download */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                Explore Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* View Resume Button */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-blue-500/40 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 font-semibold text-sm transition-all hover:-translate-y-0.5 active:scale-95 shadow-lg shadow-blue-950/50 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-400" /> View Resume
              </button>

              {/* Download Resume Button */}
              <a
                href="/Venkayya_Swamy_Resume.pdf"
                download="Venkayya_Swamy_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-sm hover:text-white hover:bg-blue-950/70 hover:border-blue-600 active:scale-[0.98] transition-all"
                title="Download PDF"
              >
                <Download className="w-4 h-4 text-blue-400" /> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-white transition-colors group"
              >
                <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" /> github.com/venky4378
              </a>
              <span className="text-blue-900 font-bold">&bull;</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-blue-400 transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-blue-400 transition-colors" /> linkedin.com/in/swamy-ch
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500" />

              {/* Main Card Container */}
              <div className="relative glass-card rounded-2xl p-3.5 border border-blue-900/70 bg-[#04091a]/90 shadow-2xl overflow-hidden w-full">
                
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-slate-950">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Gradient Overlay for Sleek Cutoff */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020611] via-transparent to-transparent opacity-65 group-hover:opacity-40 transition-opacity" />

                  {/* Floating Tech Pill 1 (Kafka) */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-[#04091a]/90 backdrop-blur-md border border-blue-600/40 text-[11px] font-mono font-medium text-blue-200 flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                    Kafka + Microservices
                  </div>

                  {/* Floating Tech Pill 2 (Spring AI) */}
                  <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-[#04091a]/90 backdrop-blur-md border border-blue-600/40 text-[11px] font-mono font-medium text-blue-200 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    Spring AI &bull; RAG
                  </div>
                </div>

                {/* Bottom Card Identity Footer */}
                <div className="pt-3.5 pb-1 px-2 flex items-center justify-between text-left">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">{personalInfo.name}</h3>
                    <p className="text-[11px] text-blue-400 font-mono font-medium">Java Spring Boot Specialist</p>
                  </div>
                  <div className="p-2 rounded-xl bg-blue-950/60 border border-blue-900/60 text-blue-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 3 Interactive Highlight Metrics spanning fluid width */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="glass-card p-6 rounded-2xl border border-blue-900/40 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 w-fit mb-3.5">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Event-Driven Microservices</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Spring Cloud Gateway, Netflix Eureka discovery, and Apache Kafka messaging decoupling critical transaction paths.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-blue-900/40 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 w-fit mb-3.5">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Spring AI &amp; PGVector RAG</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Multi-tenant document intelligence with cosine similarity retrieval, Apache PDFBox, and Groq LLMs.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-blue-900/40 hover:border-blue-500/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-3 rounded-xl bg-blue-600/15 text-blue-400 w-fit mb-3.5">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white">Defensive Architecture</h3>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Database-per-service pattern, JWT identity propagation, RBAC authorization, and date-conflict engines.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}