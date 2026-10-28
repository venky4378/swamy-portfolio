import React, { useState } from "react";
import { skillsData } from "../data/portfolioData";
import { Server, Share2, Sparkles, Shield, Wrench, Layers } from "lucide-react";

export default function Skills() {
  const categories = [
    {
      title: "Backend Core & Frameworks",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      skills: skillsData.backend
    },
    {
      title: "Microservices & Distributed Systems",
      icon: <Share2 className="w-5 h-5 text-purple-400" />,
      skills: skillsData.distributed
    },
    {
      title: "AI Integration & RAG Architecture",
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
      skills: skillsData.aiAndRAG
    },
    {
      title: "Security & Database Persistence",
      icon: <Shield className="w-5 h-5 text-emerald-400" />,
      skills: skillsData.securityAndDatabases
    },
    {
      title: "Core CS, Tools & Full Stack",
      icon: <Layers className="w-5 h-5 text-amber-400" />,
      skills: skillsData.coreCsAndTools
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Technical Capabilities</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Comprehensive Backend &amp; Full Stack Skills
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Clean code, scalable microservices, relational and vector databases, and modern AI integrations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-white text-base">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center justify-between gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-300 hover:border-indigo-500/40 hover:bg-white/10 transition-colors"
                  >
                    <span>{skill.name}</span>
                    <span className="text-[10px] text-gray-500 font-mono bg-black/40 px-1.5 py-0.5 rounded">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}