"use client";
import Image from "next/image";
export default function Footer() {
  return (
    <footer
      style={{
        background: "#020202",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "60px 40px 40px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                marginBottom: "16px",
              }}
            >
              <Image
                src="/logo.png"
                alt="BitForge Logo"
                width={120}
                height={120}
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginRight: "8px",
                }}
              />
            </div>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                maxWidth: "220px",
              }}
            >
              A high-end development collective forging scalable digital
              solutions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Navigation
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {["#services", "#portfolio", "#stack", "#process"].map((href) => (
                <button
                  key={href}
                  onClick={() =>
                    document
                      .querySelector(href)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    background: "none",
                    border: "none",
                    color: "var(--text-muted)",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "color 0.2s",
                    padding: 0,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00ff88")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {href.replace("#", "").charAt(0).toUpperCase() +
                    href.slice(2)}
                </button>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Live Projects
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                {
                  name: "Lumina Books",
                  href: "https://myluminabooks.vercel.app/",
                },
                {
                  name: "MostafizTradeHub",
                  href: "https://mostafiztradehub.vercel.app/",
                },
                {
                  name: "ThunderLink",
                  href: "https://mythunderlink.vercel.app/",
                },
                {
                  name: "Premium SMP",
                  href: "https://premium-smp-mincraft.netlify.app/",
                },
                { name: "KGN Hub", href: "https://kgnhub.netlify.app/" },
              ].map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "var(--text-muted)",
                    textDecoration: "none",
                    fontFamily: "var(--font-heading)",
                    fontSize: "0.9rem",
                    letterSpacing: "1px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "#00ff88")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--text-muted)")
                  }
                >
                  {p.name} ↗
                </a>
              ))}
            </div>
          </div>

          {/* Hire */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "0.8rem",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                marginBottom: "20px",
              }}
            >
              Work With Us
            </h4>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.85rem",
                lineHeight: 1.8,
                marginBottom: "20px",
              }}
            >
              All orders and communication are handled exclusively through
              Fiverr for secure, transparent collaboration.
            </p>
            <a
              href="https://fiverr.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden group"
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "12px 32px",
                fontSize: "0.9rem",
                fontWeight: "600",
                letterSpacing: "1px",
                color: "#00ff88",
                background: "rgba(0, 255, 136, 0.05)",
                border: "1px solid rgba(0, 255, 136, 0.3)",
                borderRadius: "100px",
                textDecoration: "none",
                textTransform: "uppercase",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 0 20px rgba(0, 255, 136, 0.05)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 30px rgba(0, 255, 136, 0.2)";
                e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.6)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 20px rgba(0, 255, 136, 0.05)";
                e.currentTarget.style.borderColor = "rgba(0, 255, 136, 0.3)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Shimmer Effect - আলোর ঝলকানি */}
              <span
                className="absolute top-0 -left-full w-full h-full block"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transition: "all 0.6s ease",
                }}
                // CSS class handling via Tailwind/CSS for the sweep effect
              />

              <span className="relative z-10 flex items-center gap-2">
                Hire on Fiverr
                <span
                  style={{ fontSize: "1.1rem", transition: "transform 0.3s" }}
                  className="group-hover:translate-x-1"
                >
                  ↗
                </span>
              </span>

              {/* CSS for Shimmer Animation */}
              <style>{`
    .relative:hover span:first-of-type {
      left: 100%;
    }
  `}</style>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.8rem",
              letterSpacing: "1px",
              color: "var(--text-muted)",
            }}
          >
            © {new Date().getFullYear()} BitForge Agency. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "0.75rem",
              letterSpacing: "2px",
              color: "var(--text-muted)",
            }}
          >
            Forged with <span style={{ color: "#00ff88" }}>⚡</span> by Our Team
          </span>
        </div>
      </div>
    </footer>
  );
}
