import React, { useState } from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, CheckCircle2, ChevronRight, X, FolderGit2, Star } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { label: "All Repositories (8)", value: "all" },
    { label: "Microservices", value: "microservices" },
    { label: "AI & RAG", value: "ai" },
    { label: "Full Stack & Web", value: "fullstack" },
    { label: "Data Analytics", value: "analytics" }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative bg-[#0b0f19]/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono font-medium text-indigo-400 mb-3">
            <FolderGit2 className="w-3.5 h-3.5" /> Public Repositories &amp; Architectures
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Systems &amp; Projects
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Real-world systems spanning microservices, generative AI &amp; RAG, enterprise full-stack web applications, and analytics.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {filterOptions.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                activeFilter === f.value
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                  : "glass-card text-slate-400 hover:text-white hover:border-slate-700"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className={`glass-card rounded-2xl p-7 flex flex-col justify-between border border-slate-800/80 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 relative group shadow-xl ${
                proj.featured ? "bg-gradient-to-br from-[#0f172a]/95 via-[#0b1120]/95 to-[#090d16]/95" : ""
              }`}
            >
              <div>
                {/* Header Tag & GitHub Link */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {proj.badge}
                    </span>
                    {proj.featured && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Featured
                      </span>
                    )}
                  </div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors p-1.5 hover:bg-slate-800/50 rounded-lg"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-xs text-indigo-300/90 font-medium mt-1 mb-3.5">{proj.subtitle}</p>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                  {proj.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 mb-6">
                  {proj.highlights.slice(0, 2).map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/60 text-slate-300 group-hover:border-slate-600 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Architecture Specs <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800/70 hover:bg-slate-700/70 text-xs font-medium text-white border border-slate-700 transition-all active:scale-95"
                  >
                    Repository <ExternalLink className="w-3 h-3 text-indigo-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Deep Dive */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-slate-700 relative bg-[#0f172a]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {selectedProject.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">Category: {selectedProject.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mt-2 mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{selectedProject.summary}</p>

            <h4 className="text-xs uppercase font-semibold text-indigo-400 tracking-wider mb-3">Architectural Specs &amp; Engineering Implementations</h4>
            <div className="space-y-3 mb-6">
              {selectedProject.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <div className="text-xs text-slate-400 font-mono">Open-source on GitHub: venky4378</div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors shadow-lg shadow-indigo-600/30"
              >
                <GithubIcon className="w-4 h-4" /> Open Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}