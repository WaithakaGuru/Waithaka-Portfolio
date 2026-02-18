import { useState } from "react";
import { projects } from "../data";
import { useScrollReveal } from "../hooks/useScrollReveal";

const ACCENTS = [
  "#F97316",
  "#3B82F6",
  "#10B981",
  "#8B5CF6",
  "#EC4899",
  "#F5E642",
];

export function SelectedWorks() {
  const reveal = useScrollReveal();
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative z-[1] px-8 py-20"
      style={{ background: "var(--bg2)" }}
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <h2 className="font-bebas text-[clamp(36px,5vw,64px)] leading-none tracking-[0.04em] whitespace-nowrap">
            <span style={{ color: "var(--text)" }}>SELECTED</span>
            <span style={{ color: "var(--accent)" }}>_WORKS</span>
          </h2>
          <div
            className="flex-1 h-0.5"
            style={{ background: "var(--border)" }}
          />
          <span
            className="font-['JetBrains_Mono'] text-[10px] tracking-[0.08em] px-3 py-1 whitespace-nowrap"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border-lt)",
              fontSize: "var(--sm)",
            }}
          >
            {projects.length} PROJECTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {projects.map((project, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            const isActive = activeIdx === i;
            return (
              <div
                key={project.title}
                ref={reveal(i)}
                className="flex flex-col overflow-hidden cursor-pointer transition-all duration-200 hover:-translate-x-[3px] hover:-translate-y-[3px]"
                style={{
                  background: "var(--surface)",
                  border: "2px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
                onClick={() => setActiveIdx(isActive ? null : i)}
              >
                {/* Image placeholder */}
                <div
                  className="w-full flex items-center justify-center font-['JetBrains_Mono'] text-[11px] tracking-[0.08em] relative"
                  style={{
                    height: 180,
                    background: "var(--surface-alt)",
                    borderBottom: "2px solid var(--border)",
                    color: "var(--text-muted)",
                  }}
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-[3px]"
                    style={{ background: accent }}
                  />
                  <span
                    className="absolute top-3 right-3 w-2 h-2 rounded-full"
                    style={{
                      background: "#10B981",
                      border: "1px solid var(--border)",
                    }}
                  />
                  <span className="opacity-40">[{project.title} PREVIEW]</span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3
                      className="font-['JetBrains_Mono'] font-extrabold text-[15px] leading-[1.25]"
                      style={{ color: "var(--text)" }}
                    >
                      {project.title}
                    </h3>
                    <span
                      className="flex-shrink-0 font-['JetBrains_Mono'] text-[10px] tracking-[0.06em] px-2 py-0.5"
                      style={{
                        border: "1px solid var(--border-lt)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {isActive ? "▲ LESS" : "▼ MORE"}
                    </span>
                  </div>
                  <p
                    className="font-newsreader text-[13.5px] leading-[1.65] flex-1"
                    style={{ color: "var(--text-sub)" }}
                  >
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-['JetBrains_Mono'] font-bold text-[10px] tracking-[0.05em] px-2.5 py-[3px]"
                        style={{
                          background: accent + "22",
                          color: accent,
                          border: `1px solid ${accent}44`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Expanded */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isActive ? "300px" : "0" }}
                  >
                    <div
                      className="mt-5 pt-4"
                      style={{ borderTop: "1px solid var(--border-lt)" }}
                    >
                      <div
                        className="font-['JetBrains_Mono'] text-[10px] tracking-[0.12em] mb-3"
                        style={{ color: "var(--text-muted)" }}
                      >
                        KEY FEATURES
                      </div>
                      <ul className="flex flex-col gap-1.5">
                        {project.features.slice(0, 3).map((f) => (
                          <li
                            key={f}
                            className="flex items-start gap-2 font-['JetBrains_Mono'] text-[12px]"
                            style={{ color: "var(--text-sub)" }}
                          >
                            <span style={{ color: accent, flexShrink: 0 }}>
                              ▸
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-2.5 mt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.08em] uppercase px-4 py-2 no-underline transition-all duration-150"
                          style={{
                            background: "var(--text)",
                            color: "var(--bg)",
                            border: "2px solid var(--border)",
                            boxShadow: "var(--shadow)",
                          }}
                        >
                          GITHUB ↗
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.08em] uppercase px-4 py-2 no-underline transition-all duration-150"
                          style={{
                            background: accent,
                            color: "#fff",
                            border: `2px solid ${accent}`,
                            boxShadow: "var(--shadow)",
                          }}
                        >
                          LIVE DEMO ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            className="font-['JetBrains_Mono'] font-extrabold text-[13px] tracking-[0.1em] uppercase px-10 py-4 no-underline transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px]"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              border: "2px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            VIEW ALL PROJECTS →
          </a>
        </div>
      </div>
    </section>
  );
}
