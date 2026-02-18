import { useScrollReveal } from "../hooks/useScrollReveal";

const impacts = [
  {
    icon: "⚡",
    title: "Open Source Contributor",
    stat: "12+",
    statLabel: "PRs MERGED",
    accentColor: "#F97316",
    desc: "Actively contributing to open-source projects, improving tools that developers worldwide rely on daily.",
  },
  {
    icon: "🎓",
    title: "Code Mentor",
    stat: "30+",
    statLabel: "DEVS MENTORED",
    accentColor: "#3B82F6",
    desc: "Mentoring junior developers and students through code reviews, pair programming and structured learning paths.",
  },
  {
    icon: "🌍",
    title: "Community Builder",
    stat: "8",
    statLabel: "EVENTS RUN",
    accentColor: "#10B981",
    desc: "Organizing and speaking at local tech meetups in Nairobi, helping grow the East African developer ecosystem.",
  },
  {
    icon: "✍️",
    title: "Technical Writer",
    stat: "20+",
    statLabel: "ARTICLES WRITTEN",
    accentColor: "#8B5CF6",
    desc: "Publishing deep-dive articles on software architecture, TypeScript patterns, and performance optimization.",
  },
];

export function CommunityImpact() {
  const reveal = useScrollReveal();

  return (
    <section
      id="community"
      className="relative z-[1] px-8 py-20"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-14 bg-(--bg2) sticky top-0 z-100 border-b border-(--text-sub) py-4">
          <h2 className="font-bebas text-[clamp(36px,5vw,64px)] leading-none tracking-[0.04em] whitespace-nowrap">
            <span style={{ color: "var(--text)" }}>COMMUNITY</span>
            <span style={{ color: "var(--accent)" }}>_IMPACT</span>
          </h2>
          <div
            className="flex-1 h-0.5"
            style={{ background: "var(--border)" }}
          />
          <span
            className="font-['JetBrains_Mono'] tracking-wider px-3 py-1 whitespace-nowrap"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border-lt)",
              fontSize: "var(--sm)",
            }}
          >
            GIVING BACK
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impacts.map((item, i) => (
            <div
              key={item.title}
              ref={reveal(i)}
              className="relative overflow-hidden flex flex-col transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px]"
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
                padding: "28px 24px",
              }}
            >
              <span
                className="absolute top-0 left-0 right-0 h-[3px]"
                style={{ background: item.accentColor }}
              />
              <div
                className="w-12 h-12 flex items-center justify-center text-[22px] mb-4"
                style={{
                  border: "2px solid var(--border)",
                  background: item.accentColor + "22",
                }}
              >
                {item.icon}
              </div>
              <h3
                className="font-['JetBrains_Mono'] font-extrabold text-[14px] leading-[1.3] mb-3"
                style={{ color: "var(--text)" }}
              >
                {item.title}
              </h3>
              <p
                className="font-newsreader text-[13.5px] leading-[1.7] flex-1"
                style={{ color: "var(--text-sub)" }}
              >
                {item.desc}
              </p>
              <div
                className="mt-5 pt-4 flex items-baseline gap-2"
                style={{ borderTop: "1px solid var(--border-lt)" }}
              >
                <span
                  className="font-bebas text-[36px] leading-none"
                  style={{ color: item.accentColor }}
                >
                  {item.stat}
                </span>
                <span
                  className="font-['JetBrains_Mono'] text-[9px] tracking-[0.12em]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.statLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
