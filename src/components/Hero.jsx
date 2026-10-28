import React from "react";
import { personalInfo } from "../data/portfolioData";
import { ArrowRight, Mail, Database, Server, Cpu, Sparkles, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section id="about" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle executive ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card text-xs font-medium text-emerald-300 mb-6 border border-emerald-500/20 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              {personalInfo.status}
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.14]">
              Engineering Scalable{" "}
              <span className="text-gradient-indigo">Microservices</span> &amp;{" "}
              <span className="text-white">AI Backends</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Hi, I'm <span className="text-white font-semibold">{personalInfo.name}</span>. A Java Backend Developer and 2026 graduate specializing in robust, high-throughput microservices with Spring Boot, event-driven pipelines via Apache Kafka, and production RAG workflows using Spring AI and PGVector.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all group"
              >
                Explore Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-slate-200 font-medium text-sm hover:text-white hover:bg-slate-800/80 hover:border-slate-700 active:scale-[0.98] transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-400" /> Contact Me
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
              <span className="text-slate-700">&bull;</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-indigo-400 transition-colors group"
              >
                <LinkedinIcon className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" /> linkedin.com/in/swamy-ch
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Profile Image Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Outer Glowing Border Ring */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500" />

              {/* Main Card Container */}
              <div className="relative glass-card rounded-2xl p-3 border border-slate-700/60 bg-[#0f172a]/90 shadow-2xl overflow-hidden max-w-xs sm:max-w-sm">
                
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] bg-slate-900">
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top filter brightness-95 contrast-105 group-hover:scale-105 transition-all duration-500"
                  />

                  {/* Gradient Overlay for Sleek Cutoff */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-65 group-hover:opacity-40 transition-opacity" />

                  {/* Floating Tech Pill 1 (Kafka) */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono font-medium text-indigo-300 flex items-center gap-1.5 shadow-lg">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
                    Kafka + Microservices
                  </div>

                  {/* Floating Tech Pill 2 (Spring AI) */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-700/80 text-[11px] font-mono font-medium text-blue-300 flex items-center gap-1.5 shadow-lg">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    Spring AI &bull; RAG
                  </div>
                </div>

                {/* Bottom Card Identity Footer */}
                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-left">
                  <div>
                    <h3 className="text-sm font-bold text-white tracking-wide">{personalInfo.name}</h3>
                    <p className="text-[11px] text-indigo-400 font-mono">Backend Engineer &bull; 2026 Grad</p>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-indigo-400">
                    <Terminal className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 3 Interactive Highlight Metrics */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-5 text-left">
          <div className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit mb-3">
              <Server className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Event-Driven Microservices</h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Spring Cloud Gateway, Netflix Eureka discovery, and Apache Kafka messaging decoupling critical paths.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Spring AI &amp; PGVector RAG</h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Multi-tenant document intelligence with cosine similarity retrieval, Apache PDFBox, and Groq LLMs.
            </p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 group">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 w-fit mb-3">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Defensive Architecture</h3>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
              Database-per-service pattern, JWT identity propagation, RBAC authorization, and date-conflict engines.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}