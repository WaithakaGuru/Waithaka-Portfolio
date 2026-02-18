import { useState } from "react";
import { experiences } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function ExperienceSection() {
  const reveal = useScrollReveal();
  const [_open, _setOpen] = useState<number | null>(null);

  // Group by startYear descending
  const byYear = experiences.reduce<Record<number, typeof experiences>>(
    (acc, exp) => {
      const y = exp.startYear;
      if (!acc[y]) acc[y] = [];
      acc[y].push(exp);
      return acc;
    },
    {},
  );
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a);

  let idx = 0;

  return (
    <div className="flex-1" style={{ background: "var(--bg)" }}>
      {/* Column header */}
      <div className="flex items-center gap-3.5 mb-9 px-8 pt-14">
        <span
          className="font-['JetBrains_Mono'] font-extrabold text-[18px] tracking-[0.04em]"
          style={{ color: "var(--text)" }}
        >
          EXPERIENCE<span style={{ color: "var(--accent)" }}>_LOG</span>
        </span>
        <div className="flex-1 h-0.5" style={{ background: "var(--border)" }} />
        <span
          className="font-['JetBrains_Mono'] text-[10px] tracking-[0.05em] px-2.5 py-0.75"
          style={{
            color: "var(--text-muted)",
            border: "1px solid var(--border-lt)",
          }}
        >
          {experiences.length} ENTRIES
        </span>
      </div>

      {/* Timeline */}
      <div className="relative px-8 pb-16">
        {/* Vertical accent line */}
        <div
          className="absolute left-8 top-0 bottom-0 w-0.75 rounded-full"
          style={{
            background:
              "linear-gradient(to bottom, var(--accent), transparent)",
          }}
        />

        <div className="px-7 flex flex-col gap-11 max-h-[102dvh] overflow-y-auto">
          {years.map((year) => {
            const entries = byYear[year];
            return (
              <div key={year}>
                {/* Year badge */}
                <div
                  className="flex items-center gap-0 mb-5 sticky top-0 z-8"
                  style={{ background: "var(--bg)" }}
                >
                  <div
                    className="font-['JetBrains_Mono'] font-extrabold text-[13px] tracking-[0.08em] px-4.5 py-1.75"
                    style={{
                      background: "var(--year-bg)",
                      color: "var(--year-text)",
                      border: "2px solid var(--border)",
                      boxShadow: "var(--shadow)",
                    }}
                  >
                    {year}
                  </div>
                  <div
                    className="h-0.5 flex-1"
                    style={{ background: "var(--border)" }}
                  />
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-3.5">
                  {entries.map((exp, i) => {
                    const cardIdx = idx++;
                    const durMos = Math.abs(
                      (exp.endYear - exp.startYear) * 12 +
                        (exp.endMonth - exp.startMonth),
                    );
                    return (
                      <div
                        key={`${year}-${i}`}
                        ref={reveal(cardIdx)}
                        className="relative overflow-hidden transition-all duration-200 
                        hover:-translate-x-0.75 hover:-translate-y-0.75"
                        style={{
                          background: "var(--surface)",
                          border: "2px solid var(--border)",
                          boxShadow: "var(--shadow)",
                          padding: "20px 24px",
                        }}
                      >
                        <span
                          className="absolute top-0 left-0 w-1 h-full"
                          style={{ background: "var(--accent)" }}
                        />
                        <div className="flex items-center gap-4 pl-2">
                          <div
                            className="w-12 h-12 shrink-0 flex items-center justify-center font-extrabold
                             text-[14px] text-white"
                            style={{
                              border: "2px solid var(--border)",
                              background: "var(--accent)",
                            }}
                          >
                            {exp.logo}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-baseline gap-2.5 flex-wrap">
                              <span
                                className="font-['JetBrains_Mono'] font-bold text-[15px]"
                                style={{ color: "var(--text)" }}
                              >
                                {exp.title}
                              </span>
                              <span
                                className="font-['JetBrains_Mono'] text-[10px] uppercase tracking-[0.08em] px-2 py-0.5"
                                style={{
                                  background: "var(--tag-bg)",
                                  color: "var(--tag-text)",
                                  border: "1px solid var(--border-lt)",
                                }}
                              >
                                Full-time
                              </span>
                            </div>
                            <div
                              className="font-['JetBrains_Mono'] text-[12px] mt-0.5"
                              style={{ color: "var(--text-sub)" }}
                            >
                              {exp.company}
                            </div>
                            <div
                              className="font-['JetBrains_Mono'] text-[11px] mt-1 tracking-[0.04em]"
                              style={{ color: "var(--accent)" }}
                            >
                              {exp.date}
                            </div>
                          </div>
                          {durMos > 0 && (
                            <div
                              className="shrink-0 self-start font-['JetBrains_Mono'] text-[10px] tracking-[0.06em] px-2.5 py-1"
                              style={{
                                border: "1px dashed var(--border-lt)",
                                color: "var(--text-muted)",
                              }}
                            >
                              {durMos} MOS
                            </div>
                          )}
                        </div>
                        <p
                          className="font-newsreader text-[13.5px] leading-[1.75] mt-3.5 pt-3 pl-2"
                          style={{
                            color: "var(--text-sub)",
                            borderTop: "1px solid var(--border-lt)",
                          }}
                        >
                          {exp.description}
                        </p>
                        <div className="flex gap-1.5 mt-3 pl-2 flex-wrap">
                          {exp.worked.slice(0, 3).map((w) => (
                            <span
                              key={w}
                              className="font-['JetBrains_Mono'] text-[10px] px-2.5 py-0.75 tracking-[0.05em]"
                              style={{
                                background: "var(--tag-bg)",
                                color: "var(--tag-text)",
                                border: "1px solid var(--border-lt)",
                              }}
                            >
                              #{w.split(" ")[0]}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

          {/* End marker */}
          <div className="flex items-center gap-3 -ml-7 pt-3">
            <div
              className="w-3 h-3 rounded-full shrink-0"
              style={{
                border: "2px solid var(--accent)",
                background: "var(--bg)",
              }}
            />
            <span
              className="font-['JetBrains_Mono'] text-[10px] tracking-[0.12em]"
              style={{ color: "var(--text-muted)" }}
            >
              — MORE TO COME —
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
