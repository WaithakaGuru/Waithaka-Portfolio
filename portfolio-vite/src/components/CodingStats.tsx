import { useRef, useEffect } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { techStack, stats } from "../data";

function cellColor(level: number, isDark: boolean): string {
  if (isDark) return (["#1C1C1C","#431407","#9A3412","#EA580C","#F97316"])[level] ?? "#1C1C1C";
  return (["#EDE7DB","#FED7AA","#FB923C","#F97316","#C2410C"])[level] ?? "#EDE7DB";
}

export function CodingStats() {
  const reveal     = useScrollReveal(0.06);
  const gridRef    = useRef<HTMLDivElement>(null);

  // Seed the contribution grid once on mount
  useEffect(() => {
    const wrap = gridRef.current;
    if (!wrap || wrap.childElementCount > 0) return;
    const isDark = document.documentElement.classList.contains("dark");
    const frag   = document.createDocumentFragment();
    for (let i = 0; i < 52 * 7; i++) {
      const level = Math.floor(Math.random() * 5);
      const cell  = document.createElement("div");
      cell.style.cssText = `aspect-ratio:1;border-radius:2px;background:${cellColor(level,isDark)};border:1px solid var(--border-lt);`;
      frag.appendChild(cell);
    }
    wrap.appendChild(frag);
  }, []);

  const isDark = () => document.documentElement.classList.contains("dark");

  return (
    <section id="stack" className="relative z-[1] px-8 py-20" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1440px] mx-auto">

        {/* ── TECH STACK HEADER ── */}
        <div className="flex items-center gap-4 mb-14">
          <h2 className="font-bebas text-[clamp(36px,5vw,64px)] leading-none tracking-[0.04em] whitespace-nowrap">
            <span style={{ color: "var(--text)" }}>TECH</span>
            <span style={{ color: "var(--accent)" }}>_STACK</span>
          </h2>
          <div className="flex-1 h-0.5" style={{ background: "var(--border)" }} />
          <div className="flex items-center gap-2 font-['JetBrains_Mono'] text-[10px] tracking-[0.1em]" style={{ color: "var(--text-muted)" }}>
            <span className="w-2 h-2 rounded-full animate-pulse-dot" style={{ background: "var(--accent)" }} />
            OPTIMAL STRUCTURED CODE
          </div>
        </div>

        {/* ── TECH STACK GRID ── */}
        <div className="grid mb-3"
          style={{ gridTemplateColumns: "repeat(auto-fill,minmax(120px,1fr))", border: "2px solid var(--border)", boxShadow: "var(--shadow)" }}>
          {techStack.map((item, i) => (
            <div
              key={i}
              ref={reveal(i)}
              className="flex flex-col justify-center px-4 py-6 cursor-pointer transition-all duration-150"
              style={{ border: "1px solid var(--border-lt)", background: "var(--surface)" }}
              onMouseEnter={e => {
                const el = e.currentTarget;
                el.style.background  = "var(--accent)";
                el.style.borderColor = "var(--accent)";
                el.style.transform   = "translate(-2px,-2px)";
                el.querySelectorAll<HTMLElement>("[data-lbl],[data-nm]").forEach(s => s.style.color = "#fff");
              }}
              onMouseLeave={e => {
                const el = e.currentTarget;
                el.style.background  = "var(--surface)";
                el.style.borderColor = "var(--border-lt)";
                el.style.transform   = "";
                el.querySelectorAll<HTMLElement>("[data-lbl]").forEach(s => s.style.color = "var(--accent)");
                el.querySelectorAll<HTMLElement>("[data-nm]").forEach(s  => s.style.color = "var(--text)");
              }}
            >
              <span data-lbl className="font-['JetBrains_Mono'] text-[9px] tracking-[0.14em] uppercase mb-2.5 block"
                style={{ color: "var(--accent)", transition: "color 0.15s" }}>{`>_ ${item.label}`}</span>
              <span data-nm className="font-['JetBrains_Mono'] font-extrabold text-[13px] tracking-[0.04em] break-words"
                style={{ color: "var(--text)", transition: "color 0.15s" }}>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between mb-20 font-['JetBrains_Mono'] text-[10px] tracking-[0.08em]" style={{ color: "var(--text-muted)" }}>
          <span>TOTAL_VERTICES: {techStack.length}</span>
          <span>MEMORY_USAGE: {techStack.length * 6 + 2}KB</span>
        </div>

        {/* ── CODING STATS HEADER ── */}
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-bebas text-[clamp(28px,4vw,48px)] leading-none tracking-[0.04em] whitespace-nowrap">
            <span style={{ color: "var(--text)" }}>CODING</span>
            <span style={{ color: "var(--accent)" }}>_STATS</span>
          </h2>
          <div className="flex-1 h-0.5" style={{ background: "var(--border)" }} />
          <span className="font-['JetBrains_Mono'] text-[10px] tracking-[0.08em] px-3 py-1"
            style={{ color: "var(--text-muted)", border: "1px solid var(--border-lt)" }}>LIVE DATA</span>
        </div>

        {/* ── CONTRIBUTION GRID ── */}
        <div ref={reveal(0)} className="p-6 mb-6 overflow-x-auto"
          style={{ background: "var(--surface)", border: "2px solid var(--border)", boxShadow: "var(--shadow)" }}>
          <div className="flex items-center justify-between mb-4">
            <div className="font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.08em]" style={{ color: "var(--text)" }}>
              <span style={{ color: "var(--accent)" }}>■</span> CONTRIBUTION ACTIVITY
            </div>
            <div className="font-['JetBrains_Mono'] text-[10px] tracking-[0.06em]" style={{ color: "var(--text-muted)" }}>
              {stats.contributions.toLocaleString()} CONTRIBUTIONS THIS YEAR
            </div>
          </div>
          <div ref={gridRef}
            style={{ display:"grid", gridTemplateColumns:"repeat(52,1fr)", gridTemplateRows:"repeat(7,1fr)",
              gridAutoFlow:"column", gap:"3px", minWidth:"600px" }} />
          <div className="flex items-center gap-1.5 mt-4 justify-end">
            <span className="font-['JetBrains_Mono'] text-[9px] mr-1" style={{ color: "var(--text-muted)" }}>Less</span>
            {[0,1,2,3,4].map(lvl => (
              <div key={lvl} className="w-2.5 h-2.5 rounded-[2px]"
                style={{ background: cellColor(lvl, isDark()), border: "1px solid var(--border-lt)" }} />
            ))}
            <span className="font-['JetBrains_Mono'] text-[9px] ml-1" style={{ color: "var(--text-muted)" }}>More</span>
          </div>
        </div>

        {/* ── GITHUB + WAKATIME CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* GitHub */}
          <div ref={reveal(1)} className="p-6 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px]"
            style={{ background: "var(--surface)", border: "2px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 font-['JetBrains_Mono'] font-bold text-[13px]" style={{ color: "var(--text)" }}>
                <div className="w-4 h-4" style={{ background: "var(--yellow)", border: "1px solid var(--border)" }} />
                GITHUB
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px]" style={{ color: "var(--text-muted)" }}>LAST COMMIT</span>
            </div>
            <div className="font-bebas text-[52px] leading-none mb-5" style={{ color: "var(--accent)" }}>
              {stats.contributions.toLocaleString()}
            </div>
            <div className="flex flex-col gap-2.5 pt-4" style={{ borderTop: "1px solid var(--border-lt)" }}>
              {[
                { label: "Contributions", value: `+${stats.contributions}` },
                { label: "Repositories",  value: stats.repositories.toString() },
                { label: "Streak",        value: `${stats.streak} days` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between font-['JetBrains_Mono'] text-[12px]">
                  <span style={{ color: "var(--text-sub)" }}>{label}</span>
                  <span className="font-bold" style={{ color: "var(--accent)" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WakaTime */}
          <div ref={reveal(2)} className="p-6 transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px]"
            style={{ background: "var(--surface)", border: "2px solid var(--border)", boxShadow: "var(--shadow)" }}>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2 font-['JetBrains_Mono'] font-bold text-[13px]" style={{ color: "var(--text)" }}>
                <div className="w-4 h-4" style={{ background: "var(--blue)", border: "1px solid var(--border)" }} />
                WAKATIME
              </div>
              <span className="font-['JetBrains_Mono'] text-[10px]" style={{ color: "var(--text-muted)" }}>wai.the_hacker</span>
            </div>
            <div className="font-bebas text-[52px] leading-none mb-5" style={{ color: "var(--blue)" }}>
              {stats.wakatimeHours} hrs
            </div>
            <div className="flex flex-col gap-2.5 pt-4" style={{ borderTop: "1px solid var(--border-lt)" }}>
              {[
                { label: "Daily Average", value: stats.dailyAverage },
                { label: "Top Language",  value: stats.topLanguage  },
                { label: "Total",         value: `${stats.wakatimeHours} hours` },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between font-['JetBrains_Mono'] text-[12px]">
                  <span style={{ color: "var(--text-sub)" }}>{label}</span>
                  <span className="font-bold" style={{ color: "var(--blue)" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
