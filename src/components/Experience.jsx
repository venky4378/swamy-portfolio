import React from "react";
import { experience, education, achievements } from "../data/portfolioData";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Track Record</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Internship, Education & Credentials
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Internship Experience */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-indigo-400" /> Internship Experience
            </h3>

            {experience.map((exp, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 sm:p-7 relative border border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h4 className="text-lg font-bold text-white">{exp.role}</h4>
                    <p className="text-sm font-semibold text-indigo-400">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono bg-white/5 px-2.5 py-1 rounded-md">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" /> {exp.period}
                    </span>
                    <p className="text-xs text-gray-500 mt-1 flex items-center justify-end gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 mt-5">
                  {exp.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Achievements Card */}
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <h4 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-amber-400" /> Certifications & Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-xs font-semibold text-white">{ach.title}</div>
                    <div className="text-[11px] text-gray-400 mt-0.5">{ach.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-purple-400" /> Education
            </h3>

            <div className="space-y-4">
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">
                    {edu.period}
                  </span>
                  <h4 className="text-sm font-bold text-white mt-2.5">{edu.degree}</h4>
                  <p className="text-xs text-gray-400 mt-1">{edu.institution}</p>
                  <div className="mt-3 inline-block text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
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
