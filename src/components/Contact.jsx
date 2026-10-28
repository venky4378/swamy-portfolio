import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#040816]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Connect</h2>
          <p className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Exceptional Together
          </p>
          <p className="mt-3 text-sm text-gray-400">
            Open for full-time opportunities, internships, and collaborative backend / AI engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Details Card */}
          <div className="lg:col-span-2 glass-card rounded-2xl p-7 border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-xs text-gray-400 mb-6">
                Feel free to email me directly or connect through LinkedIn.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-gray-400">Email Address</p>
                    <p className="text-xs font-medium text-white truncate">{personalInfo.email}</p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400">Phone</p>
                    <p className="text-xs font-medium text-white">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-400">Location</p>
                    <p className="text-xs font-medium text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 mt-6">
              <p className="text-xs text-gray-400 mb-3">Profiles & Code</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-white font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-indigo-400 font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-7 border border-white/10">
            <h3 className="text-lg font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs text-gray-400 mb-6">
              Drop an inquiry or recruiter invitation and I will reply as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter or Engineering Lead"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="Java Backend Developer Role / Opportunity"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">Message</label>
                <textarea
                  rows="4"
                  required
                  placeholder="Hello Swamy, we were impressed by your PG Finder and CognifyAI projects..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                {formSubmitted && (
                  <span className="text-xs text-emerald-400 font-medium">
                    Thank you! Message logged (demo mode). Feel free to email directly!
                  </span>
                )}
                <button
                  type="submit"
                  className="ml-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-xs shadow-md shadow-indigo-600/20 hover:brightness-110 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" /> Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
