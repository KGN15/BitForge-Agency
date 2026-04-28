"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    icon: "⬡",
    title: "Enterprise Web Solutions",
    subtitle: "Next.js Architecture",
    desc: "Our engineers craft blazing-fast, SEO-optimized web platforms using Next.js 15. From SSR to static generation, we architect systems that scale with your ambition.",
    tech: ["Next.js 15", "TypeScript", "Tailwind", "Framer Motion"],
    accent: "#00ff88",
  },
  {
    icon: "⬢",
    title: "Desktop Software (.exe)",
    subtitle: "Electron.js Engineering",
    desc: "We build real-world business automation tools as cross-platform desktop applications. POS systems, inventory managers, and workflow tools — all delivered as native-feeling software.",
    tech: ["Electron.js", "React", "Node.js", "SQLite"],
    accent: "#c0c0c0",
  },
  {
    icon: "◈",
    title: "Complex Systems",
    subtitle: "Full-Stack Architecture",
    desc: "Our team designs and delivers custom dashboards, inventory management suites, and payment gateway integrations. We handle the complexity so your business runs smoothly.",
    tech: ["MERN Stack", "Firebase", "PostgreSQL", "MongoDB"],
    accent: "#888888",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            setTimeout(() => {
              (entry.target as HTMLDivElement).style.opacity = "1";
              (entry.target as HTMLDivElement).style.transform = "translateY(0)";
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );
    cardsRef.current.forEach(card => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: "120px 40px", maxWidth: "1200px", margin: "0 auto" }}>
      <div ref={sectionRef}>
        <div className="section-label" style={{ marginBottom: "12px" }}>What We Forge</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
          <span className="text-metallic">Our Core</span>{" "}
          <span style={{ color: "#00ff88" }}>Services</span>
        </h2>
        <div className="divider-glow" style={{ marginBottom: "60px" }} />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {services.map((s, i) => (
            <div
              key={s.title}
              ref={el => { if (el) cardsRef.current[i] = el; }}
              className="card-hover"
              style={{
                background: "var(--bg-card)",
                padding: "40px 32px",
                opacity: 0,
                transform: "translateY(30px)",
                transition: "opacity 0.6s ease, transform 0.6s ease, border-color 0.3s, box-shadow 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent line */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${s.accent}, transparent)` }} />

              <div style={{ fontSize: "2.5rem", marginBottom: "20px", color: s.accent }}>{s.icon}</div>
              <div className="tag-badge" style={{ marginBottom: "16px" }}>{s.subtitle}</div>
              <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, letterSpacing: "1px", marginBottom: "16px", color: "var(--accent-white)" }}>{s.title}</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: "28px" }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {s.tech.map(t => (
                  <span key={t} style={{ fontFamily: "var(--font-heading)", fontSize: "0.75rem", letterSpacing: "1px", color: "var(--text-muted)", border: "1px solid rgba(255,255,255,0.07)", padding: "3px 10px" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
