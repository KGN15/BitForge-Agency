"use client";

type TechItem = { name: string; icon: string };

const techCategories: { label: string; items: TechItem[] }[] = [
  {
    label: "Frontend",
    items: [
      { name: "Next.js", icon: "▲" },
      { name: "React", icon: "⚛" },
      { name: "TypeScript", icon: "TS" },
      { name: "Tailwind CSS", icon: "◈" },
      { name: "Framer Motion", icon: "◉" },
      { name: "HTML5", icon: "⬡" },
      { name: "CSS3", icon: "⬢" },
      { name: "Redux", icon: "⬟" },
    ],
  },
  {
    label: "Backend",
    items: [
      { name: "Node.js", icon: "⬡" },
      { name: "Express.js", icon: "⬢" },
      { name: "Firebase", icon: "🔥" },
      { name: "REST APIs", icon: "⟳" },
      { name: "GraphQL", icon: "◈" },
      { name: "JWT Auth", icon: "🔐" },
    ],
  },
  {
    label: "Database & Storage",
    items: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firestore", icon: "◉" },
      { name: "Redis", icon: "⬟" },
      { name: "SQLite", icon: "◈" },
      { name: "Prisma ORM", icon: "⬡" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "Electron.js", icon: "⚡" },
      { name: "VS Code", icon: "◈" },
      { name: "Git & GitHub", icon: "⬡" },
      { name: "Vercel", icon: "▲" },
      { name: "Netlify", icon: "◉" },
      { name: "Cloudflare", icon: "☁" },
      { name: "Hostinger", icon: "⬢" },
      { name: "Fiverr", icon: "★" },
      { name: "Payoneer", icon: "💳" },
      { name: "Figma", icon: "◈" },
      { name: "Docker", icon: "🐳" },
      { name: "Postman", icon: "⬟" },
    ],
  },
];

function InfiniteRow({ items, reverse = false }: { items: TechItem[]; reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div className={reverse ? "infinite-scroll-reverse" : "infinite-scroll"} style={{ gap: "16px" }}>
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              background: "#0c0c0c",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "12px 24px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              transition: "border-color 0.3s, background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(0,255,136,0.3)";
              (e.currentTarget as HTMLDivElement).style.background = "rgba(0,255,136,0.04)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
              (e.currentTarget as HTMLDivElement).style.background = "#0c0c0c";
            }}
          >
            <span style={{ fontSize: "1rem", color: "#00ff88" }}>{item.icon}</span>
            <span style={{ fontFamily: "var(--font-heading)", fontSize: "0.85rem", fontWeight: 600, letterSpacing: "1px", color: "var(--text-secondary)", whiteSpace: "nowrap" }}>
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="stack" style={{ padding: "120px 0", background: "var(--bg-primary)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", marginBottom: "60px" }}>
        <div className="section-label" style={{ marginBottom: "12px" }}>Our Tech Arsenal</div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "16px" }}>
          <span className="text-metallic">Battle-Tested</span>{" "}
          <span style={{ color: "#00ff88" }}>Technologies</span>
        </h2>
        <div className="divider-glow" />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
        {techCategories.map((cat, i) => (
          <div key={cat.label}>
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 40px", marginBottom: "16px" }}>
              <span className="tag-badge">{cat.label}</span>
            </div>
            <InfiniteRow items={cat.items} reverse={i % 2 !== 0} />
          </div>
        ))}
      </div>
    </section>
  );
}
