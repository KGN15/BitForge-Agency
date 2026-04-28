"use client";
import { useEffect, useRef } from "react";

export default function SpotlightCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const spot = spotRef.current;
    if (!container || !spot) return;

    const onMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      spot.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(0,255,136,0.07), transparent 50%)`;
    };
    container.addEventListener("mousemove", onMove);
    return () => container.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        padding: "160px 40px",
        overflow: "hidden",
        background: "var(--bg-primary)",
      }}
    >
      {/* Spotlight gradient */}
      <div
        ref={spotRef}
        style={{
          position: "absolute",
          inset: 0,
          transition: "background 0.1s",
          zIndex: 0,
        }}
      />

      {/* Background text */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(5rem, 18vw, 18rem)",
            fontWeight: 900,
            letterSpacing: "-0.05em",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.03)",
            userSelect: "none",
            whiteSpace: "nowrap",
          }}
        >
          BITFORGE
        </span>
      </div>

      {/* Grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,136,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,136,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div
          className="section-label"
          style={{
            marginBottom: "20px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span
            className="pulse-dot"
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#00ff88",
              display: "inline-block",
            }}
          />
          Open for Collaboration
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.8rem, 5vw, 4rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          <span className="text-metallic">Ready to Forge</span>
          <br />
          <span style={{ color: "#00ff88" }}>Your Next Idea?</span>
        </h2>
        <p
          style={{
            color: "var(--text-secondary)",
            fontSize: "1rem",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Partner with our team to transform your vision into a
          high-performance, scalable digital product. Every great product starts
          with a conversation.
        </p>
        <a
          href="https://fiverr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center justify-center"
          style={{
            padding: "14px 36px",
            fontSize: "0.85rem",
            fontWeight: "800",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#00ff88",
            background: "transparent",
            border: "2px solid #00ff88",
            borderRadius: "100px",
            textDecoration: "none",
            position: "relative",
            overflow: "hidden",
            transition: "all 0.4s ease",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget;
            target.style.color = "#000000";
            target.style.boxShadow = "0 0 30px #00ff88";
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget;
            target.style.color = "#00ff88";
            target.style.boxShadow = "none";
          }}
        >
          <span
            className="absolute inset-0 translate-y-full group-hover:translate-y-0"
            style={{
              background: "#00ff88",
              transition: "transform 0.4s cubic-bezier(0.19, 1, 0.22, 1)",
              zIndex: -1,
            }}
          />

          <span
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            className="text-white"
          >
            Order on Fiverr
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ transition: "transform 0.3s" }}
              className="group-hover:rotate-45"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </span>
        </a>

        <p
          style={{
            marginTop: "20px",
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            letterSpacing: "1px",
          }}
        >
          All transactions and communication are exclusively handled via Fiverr
          for mutual security.
        </p>
      </div>
    </section>
  );
}
