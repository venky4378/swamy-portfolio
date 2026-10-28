import React, { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [trailPos, setTrailPos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Smooth fluid cursor aura
  useEffect(() => {
    let animationFrameId;
    const followCursor = () => {
      setTrailPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.12,
        y: prev.y + (mousePos.y - prev.y) * 0.12
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* 1. Deep Midnight Black Canvas */}
      <div className="absolute inset-0 bg-[#020611]" />

      {/* 2. Heavy, Rich Sapphire & Royal Blue Aurora Bloom */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[650px] bg-gradient-to-b from-blue-700/35 via-blue-900/25 to-transparent rounded-full blur-[140px]" />
      <div className="absolute top-1/3 -left-48 w-[750px] h-[750px] bg-gradient-to-r from-blue-600/25 via-indigo-900/20 to-transparent rounded-full blur-[150px]" />
      <div className="absolute top-2/3 -right-48 w-[800px] h-[800px] bg-gradient-to-l from-blue-700/25 via-blue-950/20 to-transparent rounded-full blur-[150px]" />
      <div className="absolute -bottom-48 left-1/3 w-[700px] h-[700px] bg-gradient-to-t from-blue-600/20 via-sky-900/15 to-transparent rounded-full blur-[140px]" />

      {/* 3. Subtle Cybernetic Dot Grid */}
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage: `radial-gradient(rgba(96, 165, 250, 0.45) 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
      />

      {/* 4. Primary Interactive Dynamic Blue Spotlight */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 blur-[90px]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.28) 0%, rgba(29, 78, 216, 0.16) 45%, transparent 75%)"
        }}
      />

      {/* 5. Trailing Sky Blue Fluid Aura */}
      <div
        className="absolute w-[340px] h-[340px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-[70px]"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(37, 99, 235, 0.10) 50%, transparent 80%)"
        }}
      />

      {/* 6. Precision Micro-Cursor Ring */}
      <div
        className="fixed w-4 h-4 rounded-full border border-blue-400/50 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />
    </div>
  );
}