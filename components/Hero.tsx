"use client";
import { useEffect, useState } from "react";
import Aurora from "./Aurora";
import GradientText from "./GradientText";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--bg-primary)]"
    >
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#1b7b0b", "#8f8f8f", "#54a24e"]}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, rgba(4,4,4,0.8) 100%)",
        }}
      />

      {/* Top-right glow */}
      <div
        className="absolute -top-[100px] -right-[100px] w-[600px] h-[600px] rounded-full z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,136,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[900px] mx-auto px-6 md:px-10 w-full text-center flex flex-col items-center gap-6 md:gap-8">
        {/* Label */}
        <div
          className={`transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="section-label flex items-center justify-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#00ff88] inline-block shadow-[0_0_8px_#00ff88]" />
            Available for Projects — 2025
          </div>
        </div>

        {/* Heading */}
        <h1
          className={`transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="font-[var(--font-display)] text-[clamp(2.2rem,5.5vw,4.5rem)] font-black leading-[1.1] block tracking-[-0.025em]">
            <span className="text-metallic">Forging Digital</span>
            <br />

            <GradientText
              colors={["#00ff28", "#777777", "#ffffff", "#2fdd08"]}
              animationSpeed={1.5}
              showBorder={false}
              className="inline-block"
            >
              Excellence,
            </GradientText>

            <br />
            <span className="text-metallic text-[clamp(1.5rem,3.5vw,3rem)] font-bold opacity-85">
              One Byte at a Time.
            </span>
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className={`max-w-[600px] text-[var(--text-secondary)] text-[0.95rem] md:text-base leading-[1.9] transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Our team is a high-end development collective specializing in{" "}
          <span className="text-[#c0c0c0] font-medium">Next.js</span>,{" "}
          <span className="text-[#c0c0c0] font-medium">MERN Stack</span>, and{" "}
          <span className="text-[#c0c0c0] font-medium">Electron.js</span>. We
          don&apos;t just build apps — we forge scalable solutions that empower
          your business.
        </p>
<div className={`flex gap-6 flex-wrap justify-center mt-6 transition-all duration-700 delay-500 ${loaded ? "opacity-100" : "opacity-0"}`}>
  
  {/* Hire Us on Fiverr Button */}
  <a
    href="https://fiverr.com"
    target="_blank"
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center overflow-hidden"
    style={{
      padding: "14px 40px",
      fontSize: "0.85rem",
      fontWeight: "800",
      letterSpacing: "3px",
      textTransform: "uppercase",
      color: "#00ff88", // নরমাল অবস্থায় সবুজ
      background: "transparent",
      border: "2px solid #00ff88",
      borderRadius: "100px",
      textDecoration: "none",
      transition: "all 0.4s ease",
    }}
  >
    {/* Background Fill Layer: নিচ থেকে উপরে উঠবে */}
    <span 
      className="absolute inset-0 translate-y-full group-hover:translate-y-0"
      style={{ 
        background: "#00ff88", 
        transition: "transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
        zIndex: 0 
      }}
    />

    {/* Text Layer: হোভারে কালার কালো হবে */}
    <span className="relative z-10 flex items-center gap-2 group-hover:text-black transition-colors duration-300">
      Hire Us on Fiverr
      <svg 
        width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
        strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        className="transform group-hover:rotate-45 transition-transform duration-300"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </span>
  </a>

  {/* View Portfolio Button (এটাকেও একটু লাক্সারি লুক দিলাম) */}
  <button
    onClick={() => document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" })}
    className="relative inline-flex items-center justify-center overflow-hidden"
    style={{
      padding: "14px 36px",
      fontSize: "0.85rem",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.6)",
      background: "transparent",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "100px",
      transition: "all 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
      e.currentTarget.style.color = "#fff";
      e.currentTarget.style.boxShadow = "0 0 20px rgba(255,255,255,0.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
      e.currentTarget.style.color = "rgba(255,255,255,0.6)";
      e.currentTarget.style.boxShadow = "none";
    }}
  >
    View Portfolio ↓
  </button>

</div>

        {/* Stats */}
        <div
          className={`flex gap-10 md:gap-14 flex-wrap justify-center border-t border-white/5 pt-8 mt-6 transition-all duration-700 delay-700 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { num: "5+", label: "Live Products" },
            { num: "3", label: "Core Stacks" },
            { num: "100%", label: "On-Time Delivery" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-[var(--font-display)] text-[1.7rem] font-extrabold text-[#00ff88] tracking-[-0.02em]">
                {s.num}
              </div>
              <div className="font-[var(--font-heading)] text-[0.7rem] tracking-[3px] uppercase text-[var(--text-muted)] mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-35 z-10">
        <span className="font-[var(--font-heading)] text-[0.65rem] tracking-[3px] text-[var(--text-muted)]">
          SCROLL
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#00ff88]/40 to-transparent" />
      </div>
    </section>
  );
}