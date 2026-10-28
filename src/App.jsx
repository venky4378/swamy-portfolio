import React from "react";
import InteractiveBackground from "./components/InteractiveBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#030712] text-gray-100 selection:bg-indigo-500 selection:text-white">
      {/* Dynamic Cursor Spotlight & Aurora Gradient Background */}
      <InteractiveBackground />

      {/* Main Foreground Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}