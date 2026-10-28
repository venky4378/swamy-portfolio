import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, Phone, MapPin, Send, Copy, Check } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct real pre-filled mailto URL with recruiter's inputs
    const emailSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const emailBody = encodeURIComponent(
      `Hello Venkayya Swamy,\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    
    // Opens HR / Recruiter's email client directly pre-addressed to you
    window.location.href = `mailto:${personalInfo.email}?subject=${emailSubject}&body=${emailBody}`;
    
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative bg-[#01040d]/90 w-full">
      <div className="w-full px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-2 font-mono">Connect With Me</h2>
          <p className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Reliable Software
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Open for full-time opportunities, internships, and collaborative backend / AI engineering roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-8 border border-blue-900/50 flex flex-col justify-between text-left">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Feel free to email me directly or connect through LinkedIn.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-slate-400 font-mono">Email Address</p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">{personalInfo.email}</p>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-blue-900/50 transition-colors"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono">Phone</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">{personalInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-blue-950/40 border border-blue-900/40">
                  <div className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400 font-mono">Location</p>
                    <p className="text-xs sm:text-sm font-semibold text-white">{personalInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-blue-900/40 mt-8">
              <p className="text-xs text-slate-400 font-mono mb-3">Online Presence</p>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50 text-xs text-white font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <GithubIcon className="w-4 h-4 text-blue-400" /> GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50 text-xs text-blue-300 font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-8 border border-blue-900/50 text-left">
            <h3 className="text-xl font-bold text-white mb-2">Send an Inquiry</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill in your details below to directly dispatch an inquiry to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Recruiter / Hiring Manager"
                    className="w-full px-4 py-3 rounded-xl bg-[#04091a] border border-blue-900/60 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#04091a] border border-blue-900/60 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Java Backend Developer Role"
                  className="w-full px-4 py-3 rounded-xl bg-[#04091a] border border-blue-900/60 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5 font-mono">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Venkayya Swamy, we were impressed by your PG Finder and CognifyAI projects..."
                  className="w-full px-4 py-3 rounded-xl bg-[#04091a] border border-blue-900/60 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-2">
                {submitted ? (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Opening email client with pre-filled message...
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 font-mono">
                    Directly opens your mail app addressed to me
                  </span>
                )}
                <button
                  type="submit"
                  className="ml-auto inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/30 active:scale-95 transition-all"
                >
                  <Send className="w-3.5 h-3.5" /> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}