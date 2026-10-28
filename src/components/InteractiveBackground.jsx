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

  // Smooth lag/spring effect for secondary cursor aura
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
      {/* 1. Deep Mesh Gradient Aurora Background */}
      <div className="absolute inset-0 bg-[#030712]" />

      {/* 2. Floating Ambient Glow Orbs (Subtle Breathing Animations) */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-transparent rounded-full blur-[130px] animate-pulse duration-1000" />
      <div className="absolute top-1/3 -right-40 w-[650px] h-[650px] bg-gradient-to-bl from-cyan-600/15 via-blue-600/10 to-transparent rounded-full blur-[140px]" />
      <div className="absolute -bottom-40 left-1/3 w-[550px] h-[550px] bg-gradient-to-t from-purple-700/15 via-indigo-600/10 to-transparent rounded-full blur-[130px]" />

      {/* 3. Subtle Cybernetic Dot Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
          backgroundSize: "28px 28px"
        }}
      />

      {/* 4. Primary Interactive Spotlight that follows the mouse instantly */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full pointer-events-none transition-opacity duration-300 -translate-x-1/2 -translate-y-1/2 blur-[80px]"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, rgba(168, 85, 247, 0.10) 40%, transparent 75%)"
        }}
      />

      {/* 5. Secondary Trailing Ambient Aura with Spring Lag */}
      <div
        className="absolute w-[320px] h-[320px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-[60px]"
        style={{
          left: `${trailPos.x}px`,
          top: `${trailPos.y}px`,
          background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(99, 102, 241, 0.08) 50%, transparent 80%)"
        }}
      />

      {/* 6. Precision Micro-Cursor Ring */}
      <div
        className="fixed w-4 h-4 rounded-full border border-indigo-400/40 pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`
        }}
      />
    </div>
  );
}