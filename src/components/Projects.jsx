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
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlay, filteredProjects.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#01040d]/80 w-full overflow-hidden">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/60 text-xs font-mono font-medium text-blue-300 mb-3.5">
            <FolderGit2 className="w-3.5 h-3.5 text-blue-400" /> Interactive Project Deck
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Production Distributed Systems &amp; AI
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Slide through real-world enterprise architectures spanning Microservices, Spring AI, Full Stack &amp; Analytics.
          </p>
        </div>

        {/* Filter Chips & Navigation Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
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

          {/* Autoplay toggle & Navigation buttons */}
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
                title="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 text-white transition-all active:scale-95 shadow-md"
                title="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3D Depth Sliding Multi-Card Track */}
        <div className="relative py-6 overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
            style={{
              transform: `translateX(-${currentIndex * (window.innerWidth < 768 ? 100 : window.innerWidth < 1200 ? 50 : 33.333)}%)`
            }}
          >
            {filteredProjects.map((proj, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={proj.id}
                  className="w-full md:w-1/2 xl:w-1/3 shrink-0 px-3.5 transition-all duration-500"
                >
                  <div
                    className={`h-full flex flex-col justify-between rounded-3xl p-7 border transition-all duration-500 text-left relative group ${
                      isActive
                        ? "bg-gradient-to-b from-[#081538] via-[#040b21] to-[#020614] border-blue-500/80 shadow-2xl shadow-blue-600/25 scale-[1.02]"
                        : "glass-card border-blue-900/40 opacity-75 hover:opacity-100 hover:border-blue-700"
                    }`}
                  >
                    <div>
                      {/* Top Badges & GitHub Link */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold px-3 py-1 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30">
                            {proj.badge}
                          </span>
                          {proj.featured && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 border border-amber-500/25">
                              <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Featured
                            </span>
                          )}
                        </div>
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-blue-950/50 transition-colors"
                          title="View Repository"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-semibold text-blue-400/90 mt-1 mb-3.5">
                        {proj.subtitle}
                      </p>

                      {/* Summary */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 line-clamp-3">
                        {proj.summary}
                      </p>

                      {/* Key Highlights */}
                      <div className="space-y-2.5 mb-6">
                        {proj.highlights.slice(0, 2).map((hl, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed line-clamp-2">{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {proj.tech.slice(0, 5).map((t, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-blue-950/70 border border-blue-800/40 text-blue-200"
                          >
                            {t}
                          </span>
                        ))}
                        {proj.tech.length > 5 && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-blue-900/30 text-slate-400">
                            +{proj.tech.length - 5}
                          </span>
                        )}
                      </div>

                      {/* Footer Actions */}
                      <div className="flex items-center justify-between pt-4 border-t border-blue-900/40">
                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition-colors"
                        >
                          Architecture Specs <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50 text-xs font-semibold text-white transition-all active:scale-95"
                        >
                          Repo <ExternalLink className="w-3 h-3 text-blue-400" />
                        </a>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Pagination Progress Indicator */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {filteredProjects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-blue-500 shadow-md shadow-blue-500/50" : "w-2 bg-blue-950 hover:bg-blue-800"
              }`}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

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