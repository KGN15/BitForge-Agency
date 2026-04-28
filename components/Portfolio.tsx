"use client";
import { useState } from "react";
import { Monitor, TabletSmartphone, ExternalLink, Code2 } from "lucide-react"; 

const projects = [
  {
    id: 1,
    title: "Lumina Books",
    tag: "Desktop OS & Web Suite",
    tagline: "Smart Inventory & POS Desktop Solution",
    bio: "A complete POS and Inventory management system built with Electron.js and React, paired with a high-converting Next.js landing page.",
    tech: ["Electron.js", "React", "Next.js", "TypeScript"],
    link: "https://myluminabooks.vercel.app/",
    color: "#00ff88",
    featured: true,
  },
  {
    id: 2,
    title: "MostafizTradeHub",
    tag: "Secure Fin-Tech Dashboard",
    tagline: "Multi-user Role-Based Management System",
    bio: "Enterprise-grade dashboard with Firebase authentication, encrypted secret-code access, and admin approval flow for new registrations.",
    tech: ["MERN Stack", "Firebase", "React", "Node.js"],
    link: "https://mostafiztradehub.vercel.app/",
    color: "#c0c0c0",
    featured: false,
  },
  {
    id: 3,
    title: "ThunderLink",
    tag: "SaaS Utility Tool",
    tagline: "Next-Gen URL Shortener & Analytics Engine",
    bio: "Modern link shortener with real-time analytics, custom aliases, and MongoDB storage — engineered for speed and reliability.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    link: "https://mythunderlink.vercel.app/",
    color: "#00ff88",
    featured: false,
  },
  {
    id: 4,
    title: "Premium SMP",
    tag: "Gaming Community Platform",
    tagline: "High-Performance Minecraft Community Hub",
    bio: "Visually immersive community hub for a Minecraft server — crafted with pure HTML, CSS, and JavaScript with seamless UI/UX.",
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    link: "https://premium-smp-mincraft.netlify.app/",
    color: "#888",
    featured: false,
  },
  {
    id: 5,
    title: "KGN Hub",
    tag: "Experimental Web Lab",
    tagline: "Modern Web Architecture Showcase",
    bio: "Our team's foundational project and the genesis of the BitForge journey — exploring modern CSS architectures and AI-driven web patterns.",
    tech: ["HTML5", "CSS3", "JavaScript", "AI Patterns"],
    link: "https://kgnhub.netlify.app/",
    color: "#666",
    featured: false,
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [iframeLoaded, setIframeLoaded] = useState<Record<number, boolean>>({});
  
  const active = projects[activeProject];

  return (
    <section id="portfolio" style={{ background: "#050505", padding: "100px 0", color: "#fff" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 20px" }}>
        
        {/* Header */}
        <div style={{ marginBottom: "50px", textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, marginBottom: "10px" }}>
            <span style={{ color: "#fff", opacity: 0.6 }}>The 5 Core</span>{" "}
            <span style={{ color: "#00ff88" }}>Assets</span>
          </h2>
          <div style={{ width: "60px", height: "4px", background: "#00ff88", margin: "0 auto", borderRadius: "10px", boxShadow: "0 0 15px #00ff88" }} />
        </div>

        {/* --- LIVE PREVIEW PANEL (TOP) --- */}
        <div style={{ marginBottom: "60px" }}>
          {/* Device Toggle Buttons */}
          <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "30px" }}>
            <button 
              onClick={() => setViewMode("desktop")}
              style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "12px 24px", borderRadius: "12px",
                background: viewMode === "desktop" ? `${active.color}20` : "transparent",
                color: viewMode === "desktop" ? active.color : "#666",
                border: `1px solid ${viewMode === "desktop" ? active.color : "#222"}`,
                cursor: "pointer", fontSize: "0.9rem", fontWeight: 600, transition: "all 0.3s ease"
              }}
            >
              <Monitor size={20} /> Desktop View
            </button>
            <button 
              onClick={() => setViewMode("mobile")}
              style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "12px 24px", borderRadius: "12px",
                background: viewMode === "mobile" ? `${active.color}20` : "transparent",
                color: viewMode === "mobile" ? active.color : "#666",
                border: `1px solid ${viewMode === "mobile" ? active.color : "#222"}`,
                cursor: "pointer", fontSize: "0.9rem", fontWeight: 600, transition: "all 0.3s ease"
              }}
            >
              <TabletSmartphone size={20} /> Mobile View
            </button>
          </div>

          {/* Browser Container */}
          <div style={{ 
            maxWidth: viewMode === "desktop" ? "1100px" : "375px", 
            margin: "0 auto",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            background: "#0e0e0e", 
            border: `1px solid ${active.color}30`, 
            borderRadius: "24px", 
            overflow: "hidden", 
            boxShadow: `0 50px 100px -20px rgba(0,0,0,1), 0 0 40px ${active.color}10`
          }}>
            {/* Browser Header */}
            <div style={{ background: "#111", padding: "15px 25px", display: "flex", alignItems: "center", gap: "20px", borderBottom: "1px solid #222" }}>
              <div style={{ display: "flex", gap: "8px" }}>
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#ff5f57" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#febc2e" }} />
                <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#28c840" }} />
              </div>
              <div style={{ flex: 1, background: "#050505", borderRadius: "10px", padding: "8px 15px", color: "#555", fontSize: "0.8rem", overflow: "hidden", textOverflow: "ellipsis" }}>
                {active.link}
              </div>
              <a href={active.link} target="_blank" rel="noopener noreferrer" style={{ color: active.color }}><ExternalLink size={18}/></a>
            </div>

            {/* iframe */}
            <div style={{ position: "relative", width: "100%", height: "600px", background: "#000" }}>
              {!iframeLoaded[activeProject] && (
                <div style={{ position: "absolute", inset: 0, display: "flex", justifyContent: "center", alignItems: "center" }}>
                   <div style={{ width: "40px", height: "40px", border: `3px solid ${active.color}20`, borderTop: `3px solid ${active.color}`, borderRadius: "50%", animation: "spin 1s linear infinite" }} />
                </div>
              )}
              <iframe
                key={`${activeProject}-${viewMode}`}
                src={active.link}
                style={{ width: "100%", height: "100%", border: "none", opacity: iframeLoaded[activeProject] ? 1 : 0, transition: "opacity 0.5s ease" }}
                onLoad={() => setIframeLoaded(prev => ({ ...prev, [activeProject]: true }))}
              />
            </div>
          </div>
        </div>

        {/* --- PROJECT CARDS (BOTTOM FLEX) --- */}
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "25px", 
          justifyContent: "center" 
        }}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              onClick={() => setActiveProject(i)}
              style={{
                flex: "1 1 350px",
                maxWidth: "450px",
                background: i === activeProject ? "#0f0f0f" : "#080808",
                border: `1px solid ${i === activeProject ? p.color : "#151515"}`,
                padding: "30px",
                borderRadius: "20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
                transform: i === activeProject ? "translateY(-8px)" : "none",
                boxShadow: i === activeProject ? `0 20px 40px -10px ${p.color}15` : "none"
              }}
            >
              {/* Card Header Info */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                <span style={{ fontSize: "0.75rem", color: p.color, fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>{p.tag}</span>
                <span style={{ fontSize: "1.5rem", fontWeight: 900, color: i === activeProject ? p.color : "#111", transition: "0.3s" }}>0{i+1}</span>
              </div>

              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px", color: i === activeProject ? "#fff" : "#888" }}>{p.title}</h3>
              <p style={{ fontSize: "0.95rem", color: p.color, opacity: 0.8, marginBottom: "15px", fontWeight: 500 }}>{p.tagline}</p>
              
              {/* Project Bio / Description (FIXED: এটা এখন সবসময় থাকবে) */}
              <p style={{ fontSize: "0.9rem", color: "#666", lineHeight: "1.6", marginBottom: "20px" }}>
                {p.bio}
              </p>

              {/* Tech Stack List */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "auto" }}>
                {p.tech.map(t => (
                  <span key={t} style={{ 
                    fontSize: "0.7rem", 
                    color: i === activeProject ? "#fff" : "#444", 
                    background: i === activeProject ? "#1a1a1a" : "transparent",
                    border: `1px solid ${i === activeProject ? "#333" : "#1a1a1a"}`,
                    padding: "4px 10px", 
                    borderRadius: "6px" 
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Active Glow Indicator */}
              {i === activeProject && (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", borderRadius: "20px", boxShadow: `inset 0 0 30px ${p.color}05` }} />
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; }
      `}</style>
    </section>
  );
}