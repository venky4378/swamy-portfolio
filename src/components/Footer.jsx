import React from "react";
import { personalInfo } from "../data/portfolioData";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-[#030712] text-center text-xs text-gray-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-400">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span>Designed & Built by <strong className="text-white">{personalInfo.name}</strong></span>
        </div>

        <p className="flex items-center gap-1">
          Built with React 19, Vite & Tailwind CSS
        </p>

        <div className="text-gray-500 font-mono">
          � {new Date().getFullYear()} All rights reserved.
        </div>
      </div>
    </footer>
  );
}
