"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Stack", href: "#stack" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: scrolled ? "12px" : 0,
        left: scrolled ? "50%" : 0,
        right: scrolled ? "auto" : 0,
        transform: scrolled ? "translateX(-50%)" : "none",
        width: scrolled ? "min(500px, 92vw)" : "100%",
        borderRadius: scrolled ? "50px" : 0,
        background: scrolled ? "rgba(4,4,4,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        border: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid transparent",
        zIndex: 9000,
        transition: "all 0.5s cubic-bezier(0.4,0,0.2,1)",
        padding: scrolled ? "0 28px" : "0 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? "60px" : "76px",
          transition: "height 0.4s ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textDecoration: "none",
          }}
        >
          <Image
            src="/BITFRORGEAGENCY.png"
            alt="BitForge Logo"
            width={65}
            height={65}
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginRight: "8px",
            }}
          />
        </a>

        {/* Desktop CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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
              Hire on Fiverr
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

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              padding: "8px 14px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              borderRadius: "4px",
              transition: "0.3s",
            }}
            aria-label="Menu"
          >
            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "#f0f0f0",
                transition: "all 0.3s",
                transform: menuOpen ? "rotate(40deg) translateY(8px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "10px",
                height: "4px",
                background: "#f0f0f0",
                transition: "all 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "25px",
                height: "2px",
                background: "#f0f0f0",
                transition: "all 0.3s",
                transform: menuOpen
                  ? "rotate(-40deg)  translateY(-10px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Expanded Menu */}
      <div
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
          borderTop: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div
          style={{
            padding: "16px 0 20px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                background: "none",
                border: "none",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-heading)",
                fontSize: "1.1rem",
                fontWeight: 600,
                letterSpacing: "3px",
                textTransform: "uppercase",
                padding: "10px 0",
                cursor: "pointer",
                textAlign: "left",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00ff88")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-secondary)")
              }
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
