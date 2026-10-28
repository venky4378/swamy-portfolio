import React from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[90vh] glass-card rounded-2xl border border-blue-800 bg-[#020614] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900/60 bg-[#040a1d]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-600/20 text-blue-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">
                Venkayya Swamy Chamanthi — Resume
              </h3>
              <p className="text-xs text-blue-400 font-mono">
                Java Backend &bull; Microservices &bull; Spring AI &bull; 2026 Grad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Download Button */}
            <a
              href="/Venkayya_Swamy_Resume.pdf"
              download="Venkayya_Swamy_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 transition-all active:scale-95"
            >
              <Download className="w-3.5 h-3.5" /> Download PDF
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-blue-950/60 transition-colors"
              title="Close Viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Embedded Viewer */}
        <div className="flex-1 w-full bg-slate-900 relative">
          <iframe
            src="/Venkayya_Swamy_Resume.pdf#toolbar=1"
            title="Resume Viewer"
            className="w-full h-full border-none"
          />
        </div>

        {/* Modal Footer Note */}
        <div className="px-6 py-3 border-t border-blue-900/40 bg-[#03081a] flex items-center justify-between text-xs text-slate-400">
          <span>Official Resume &bull; Updated October 2026</span>
          <a
            href="/Venkayya_Swamy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300"
          >
            Open in New Tab <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </div>
  );
}