import React from "react";
import { experience, education, achievements } from "../data/portfolioData";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 font-mono">Professional History</h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Internship, Education &amp; Credentials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Internship Experience (8 cols) */}
          <div className="lg:col-span-8 space-y-6 text-left">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-blue-400" /> Internship Experience
            </h3>

            {experience.map((exp, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-7 sm:p-8 relative border border-blue-900/50">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-blue-950">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-semibold text-blue-400 mt-0.5">{exp.company}</p>
                    <p className="text-xs text-slate-400 font-mono mt-1">{exp.type}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs text-slate-300 font-mono bg-blue-950/60 px-3 py-1.5 rounded-lg border border-blue-900/40">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" /> {exp.period}
                    </span>
                    <p className="text-xs text-slate-400 mt-1.5 flex items-center sm:justify-end gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-400" /> {exp.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 mt-4">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Achievements Card */}
            <div className="glass-card rounded-2xl p-7 border border-blue-900/50">
              <h4 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-400" /> Certifications &amp; Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-900/30">
                    <div className="text-xs font-bold text-white">{ach.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1 font-mono">{ach.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline (4 cols) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-blue-400" /> Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-blue-900/50">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-blue-600/20 text-blue-300 border border-blue-500/30">
                    {edu.period}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-3">{edu.degree}</h4>
                  <p className="text-xs text-slate-400 mt-1">{edu.institution}</p>
                  <div className="mt-3.5 inline-block text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20 font-mono">
                    {edu.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}