"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Consultation",
    subtitle: "We Listen First",
    desc: "Our team begins every engagement by deeply understanding your requirements, goals, and constraints. No assumptions — we map your vision to a precise technical blueprint.",
    icon: "◎",
    color: "#00ff88",
  },
  {
    num: "02",
    title: "Architecture",
    subtitle: "Type-Safe & Scalable",
    desc: "We design systems with clean structure and TypeScript type-safety from day one — engineered to scale from MVP to enterprise without accruing technical debt.",
    icon: "⬡",
    color: "#c0c0c0",
  },
  {
    num: "03",
    title: "Delivery",
    subtitle: "Fast. Secure. Polished.",
    desc: "Our team delivers on schedule with full transparency through Fiverr's secure platform. Clean documentation, deployment-ready code, and post-delivery support included.",
    icon: "⚡",
    color: "#888888",
  },
];

const whyUs = [
  { title: "Architecture-First", desc: "Clean structure and TypeScript type-safety from day one.", icon: "◈" },
  { title: "Cross-Platform", desc: "From web to desktop .exe, our team covers every platform.", icon: "⬡" },
  { title: "Transparent Process", desc: "All orders handled via Fiverr for security and clarity.", icon: "◉" },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    intervalRef.current = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length);
    }, 3000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [visible]);

  const active = steps[activeStep];

  return (
    <section id="process" ref={sectionRef} style={{ padding: "120px 40px", background: "var(--bg-primary)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="section-label" style={{ marginBottom: "12px" }}>How We Work</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
          <span className="text-metallic">The BitForge</span>{" "}
          <span style={{ color: "#00ff88" }}>Process</span>
        </h2>
        <div className="divider-glow" style={{ marginBottom: "80px" }} />

        {/* Main Process Display */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center", marginBottom: "80px" }}>

          {/* LEFT: Circle diagram */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
            <svg width="340" height="340" viewBox="0 0 340 340" style={{ overflow: "visible" }}>
              {/* Outer ring */}
              <circle cx="170" cy="170" r="155" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              <circle cx="170" cy="170" r="110" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              {/* Animated progress ring */}
              <circle
                cx="170" cy="170" r="155"
                fill="none"
                stroke={active.color}
                strokeWidth="1.5"
                strokeOpacity="0.4"
                strokeDasharray={`${(activeStep + 1) * (2 * Math.PI * 155 / 3)} ${2 * Math.PI * 155}`}
                strokeLinecap="round"
                transform="rotate(-90 170 170)"
                style={{ transition: "stroke-dasharray 0.8s ease, stroke 0.5s ease" }}
              />

              {/* Step nodes on circle */}
              {steps.map((step, i) => {
                const angle = (i * 120 - 90) * (Math.PI / 180);
                const cx = 170 + 155 * Math.cos(angle);
                const cy = 170 + 155 * Math.sin(angle);
                const isActive = i === activeStep;
                return (
                  <g key={i} style={{ cursor: "pointer" }} onClick={() => { setActiveStep(i); if (intervalRef.current) clearInterval(intervalRef.current); }}>
                    {/* Glow ring */}
                    {isActive && <circle cx={cx} cy={cy} r="24" fill={`${step.color}15`} stroke={step.color} strokeWidth="1" strokeOpacity="0.4" />}
                    {/* Node circle */}
                    <circle cx={cx} cy={cy} r="16" fill={isActive ? step.color : "#0e0e0e"} stroke={isActive ? step.color : "rgba(255,255,255,0.15)"} strokeWidth="1.5" style={{ transition: "fill 0.4s ease" }} />
                    {/* Node number */}
                    <text x={cx} y={cy + 5} textAnchor="middle" fill={isActive ? "#000" : "rgba(255,255,255,0.5)"} fontSize="11" fontFamily="Orbitron" fontWeight="700" style={{ transition: "fill 0.4s ease" }}>
                      {step.num}
                    </text>
                    {/* Label outside */}
                    <text
                      x={cx + (cx > 170 ? 28 : cx < 170 ? -28 : 0)}
                      y={cy + (cy > 170 ? 28 : cy < 170 ? -28 : 5)}
                      textAnchor={cx > 170 ? "start" : cx < 170 ? "end" : "middle"}
                      fill={isActive ? step.color : "rgba(255,255,255,0.3)"}
                      fontSize="10"
                      fontFamily="Rajdhani"
                      fontWeight="600"
                      letterSpacing="2"
                      style={{ transition: "fill 0.4s ease" }}
                    >
                      {step.title.toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {/* Center content */}
              <circle cx="170" cy="170" r="80" fill="#080808" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
              <text x="170" y="158" textAnchor="middle" fill={active.color} fontSize="22" fontFamily="Orbitron" fontWeight="900" style={{ transition: "fill 0.4s" }}>
                {active.icon}
              </text>
              <text x="170" y="178" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="11" fontFamily="Orbitron" fontWeight="700" letterSpacing="1">
                {active.title.toUpperCase()}
              </text>
              <text x="170" y="194" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="Rajdhani" fontWeight="600" letterSpacing="2">
                {active.subtitle.toUpperCase()}
              </text>

              {/* Connection lines */}
              {steps.map((_, i) => {
                const angle = (i * 120 - 90) * (Math.PI / 180);
                const x1 = 170 + 87 * Math.cos(angle);
                const y1 = 170 + 87 * Math.sin(angle);
                const x2 = 170 + 138 * Math.cos(angle);
                const y2 = 170 + 138 * Math.sin(angle);
                return (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={i === activeStep ? active.color : "rgba(255,255,255,0.06)"} strokeWidth="1" strokeDasharray="3 3" style={{ transition: "stroke 0.4s" }} />
                );
              })}
            </svg>
          </div>

          {/* RIGHT: Active step detail */}
          <div>
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => { setActiveStep(i); if (intervalRef.current) clearInterval(intervalRef.current); }}
                style={{
                  padding: "24px 28px",
                  marginBottom: "12px",
                  background: i === activeStep ? "#0e0e0e" : "transparent",
                  border: `1px solid ${i === activeStep ? step.color + "33" : "rgba(255,255,255,0.05)"}`,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Left accent */}
                <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "2px", background: i === activeStep ? `linear-gradient(to bottom, ${step.color}, transparent)` : "transparent", transition: "background 0.3s" }} />

                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", color: i === activeStep ? step.color : "rgba(255,255,255,0.1)", transition: "color 0.3s", lineHeight: 1, marginTop: "2px" }}>
                    {step.icon}
                  </div>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "6px" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "0.65rem", color: i === activeStep ? step.color : "var(--text-muted)", letterSpacing: "2px" }}>{step.num}</span>
                      <span className="tag-badge" style={{ fontSize: "0.62rem", borderColor: `${step.color}22`, color: i === activeStep ? step.color : "var(--text-muted)" }}>{step.subtitle}</span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: i === activeStep ? "var(--accent-white)" : "var(--text-secondary)", marginBottom: "8px", transition: "color 0.3s" }}>{step.title}</h3>

                    <div style={{ maxHeight: i === activeStep ? "80px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
                      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem", lineHeight: 1.8 }}>{step.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Auto-progress bar */}
            <div style={{ height: "2px", background: "rgba(255,255,255,0.05)", marginTop: "8px", overflow: "hidden" }}>
              <div
                key={activeStep}
                style={{
                  height: "100%",
                  background: active.color,
                  width: "100%",
                  transformOrigin: "left",
                  animation: "progressBar 3s linear",
                  boxShadow: `0 0 8px ${active.color}`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Why Us grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(255,255,255,0.04)" }}>
          {whyUs.map((w) => (
            <div key={w.title} style={{ background: "var(--bg-primary)", padding: "40px 32px" }}>
              <div style={{ fontSize: "1.8rem", color: "#00ff88", marginBottom: "16px" }}>{w.icon}</div>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, letterSpacing: "2px", color: "var(--accent-white)", marginBottom: "10px" }}>{w.title}</h4>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7 }}>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes progressBar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
