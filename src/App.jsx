import React, { useState } from "react";
import InteractiveBackground from "./components/InteractiveBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ResumeModal from "./components/ResumeModal";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#020611] text-gray-100 selection:bg-blue-600 selection:text-white bg-black-blue-gradient">
      {/* Dynamic Cursor Spotlight & Blue Aurora Gradient Background */}
      <InteractiveBackground />

      {/* Main Foreground Content */}
      <div className="relative z-10">
        <Navbar onOpenResume={() => setIsResumeOpen(true)} />
        <main>
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Interactive In-Browser Resume Viewer Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}