import React, { useState, useEffect } from "react";
import { projects } from "../data/portfolioData";
import { ExternalLink, CheckCircle2, ChevronRight, ChevronLeft, X, FolderGit2, Star, Play, Pause } from "lucide-react";
import { GithubIcon } from "./Icons";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const filterOptions = [
    { label: "All Projects (8)", value: "all" },
    { label: "Microservices", value: "microservices" },
    { label: "AI & RAG", value: "ai" },
    { label: "Full Stack & Web", value: "fullstack" },
    { label: "Data Analytics", value: "analytics" }
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  // Reset index when filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Autoplay carousel
  useEffect(() => {
    if (!isAutoPlay || filteredProjects.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  return (
    <section id="projects" className="py-24 relative bg-[#01040d]/80 w-full overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-xs font-mono font-medium text-blue-300 mb-3.5">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" /> Interactive Project Showcase
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Distributed Systems &amp; AI
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Swipe or navigate through 8 production-grade repositories spanning Microservices, Spring AI, Full Stack &amp; Analytics.
          </p>
        </div>

        {/* Filter Chips & Carousel Controls Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {filterOptions.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === f.value
                    ? "bg-[#2563eb] text-white shadow-lg shadow-blue-600/30"
                    : "glass-card text-slate-400 hover:text-white hover:border-blue-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Autoplay toggle & Index indicator */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 bg-blue-950/50 px-3 py-1.5 rounded-lg border border-blue-900/40">
              {currentIndex + 1} / {filteredProjects.length}
            </span>
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-2 rounded-xl glass-card text-slate-400 hover:text-white hover:border-blue-700 transition-colors"
              title={isAutoPlay ? "Pause Auto-Slide" : "Play Auto-Slide"}
            >
              {isAutoPlay ? <Pause className="w-4 h-4 text-blue-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 text-white transition-all active:scale-95 shadow-md"
                title="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 text-white transition-all active:scale-95 shadow-md"
                title="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* The Carousel Showcase Card */}
        {currentProject && (
          <div className="relative glass-card rounded-3xl p-8 sm:p-10 lg:p-12 border border-blue-800/50 bg-[#03091e]/90 shadow-2xl transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Project Info & Highlights */}
              <div className="lg:col-span-7 text-left space-y-5">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/40">
                    {currentProject.badge}
                  </span>
                  {currentProject.featured && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-300 border border-amber-500/25">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> Featured Architecture
                    </span>
                  )}
                  <span className="text-xs font-mono text-slate-400">
                    Category: <strong className="text-slate-300 uppercase">{currentProject.category}</strong>
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                  {currentProject.title}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-blue-400">
                  {currentProject.subtitle}
                </p>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {currentProject.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">Key Architecture Implementations:</h4>
                  {currentProject.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 pt-3">
                  {currentProject.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-blue-950/70 border border-blue-800/50 text-blue-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Quick Actions & GitHub Hub */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <div className="p-6 sm:p-8 rounded-2xl bg-[#020614]/80 border border-blue-900/60 shadow-xl space-y-6 text-left">
                  <div className="flex items-center justify-between pb-4 border-b border-blue-900/50">
                    <div>
                      <p className="text-xs text-slate-400 font-mono">Open Source Repository</p>
                      <h4 className="text-sm font-bold text-white mt-0.5">github.com/venky4378</h4>
                    </div>
                    <GithubIcon className="w-6 h-6 text-blue-400" />
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedProject(currentProject)}
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/30"
                    >
                      Deep-Dive Architecture Specs <ChevronRight className="w-4 h-4" />
                    </button>

                    <a
                      href={currentProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl glass-card text-white hover:bg-blue-950/60 hover:border-blue-700 font-semibold text-sm transition-all"
                    >
                      <GithubIcon className="w-4 h-4 text-blue-400" /> View Source on GitHub <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                    </a>
                  </div>

                  {/* Thumbnail Carousel Dots */}
                  <div className="pt-4 border-t border-blue-900/50">
                    <p className="text-[11px] text-slate-400 font-mono mb-3">All Projects in this category:</p>
                    <div className="flex flex-wrap gap-2">
                      {filteredProjects.map((p, idx) => (
                        <button
                          key={p.id}
                          onClick={() => setCurrentIndex(idx)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                            currentIndex === idx
                              ? "bg-blue-600 text-white font-bold shadow-md shadow-blue-600/40 scale-105"
                              : "bg-blue-950/40 text-slate-400 hover:text-white border border-blue-900/30"
                          }`}
                        >
                          {p.badge.split("+")[0].trim()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Modal for Deep Dive */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="glass-card max-w-2xl w-full rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto border border-blue-800 relative bg-[#020719]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-blue-950 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-300 border border-blue-500/30">
                {selectedProject.badge}
              </span>
              <span className="text-xs text-slate-400 font-mono">Category: {selectedProject.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mt-2 mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-6">{selectedProject.summary}</p>

            <h4 className="text-xs uppercase font-semibold text-blue-400 tracking-wider mb-3">Architectural Specs &amp; Engineering Implementations</h4>
            <div className="space-y-3 mb-6">
              {selectedProject.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/50 text-xs sm:text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{hl}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {selectedProject.tech.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-blue-950 border border-blue-800 text-xs font-mono text-blue-300">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-blue-900/50">
              <div className="text-xs text-slate-400 font-mono">Open-source on GitHub: venky4378</div>
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors shadow-lg shadow-blue-600/30"
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