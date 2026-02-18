import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { education } from "../data";

const EDU_META = [
  {
    color: "#4F46E5",
    badge: "FIRST CLASS HONORS ✓",
    mock: "📜",
    certTitle: "Academic Transcript",
  },
  {
    color: "#F97316",
    badge: "VERIFIED ✓",
    mock: "☁️",
    certTitle: "AWS Cloud Practitioner",
  },
  {
    color: "#10B981",
    badge: "COMPLETED ✓",
    mock: "🏆",
    certTitle: "Frontend Developer Nanodegree",
  },
];

export function EducationSection() {
  const reveal = useScrollReveal();
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <div className="flex-1" style={{ background: "var(--bg)" }}>
      {/* Column header */}
      <div className="flex items-center gap-3.5 mb-9 px-8 pt-14">
        <span
          className="font-['JetBrains_Mono'] font-extrabold text-[18px] tracking-[0.04em]"
          style={{ color: "var(--text)" }}
        >
          EDUCATION<span style={{ color: "var(--blue)" }}>_LOG</span>
        </span>
        <div className="flex-1 h-0.5" style={{ background: "var(--border)" }} />
        <span
          className="font-['JetBrains_Mono'] text-[10px] tracking-[0.05em] px-2.5 py-0.75"
          style={{
            color: "var(--text-muted)",
            border: "1px solid var(--border-lt)",
          }}
        >
          {education.length} ENTRIES
        </span>
      </div>

      <div className="px-8 pb-16 flex flex-col gap-5">
        {education.map((edu, i) => {
          const meta = EDU_META[i] ?? {
            color: "#9A8E7E",
            badge: "DONE ✓",
            mock: "📋",
            certTitle: edu.title,
          };
          const isOpen = openIdx === i;
          return (
            <div
              key={i}
              ref={reveal(i)}
              className="overflow-hidden transition-all duration-200 hover:-translate-x-0.75 hover:-translate-y-0.75"
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div className="p-5">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 shrink-0 flex items-center justify-center text-[22px]"
                    style={{
                      border: "2px solid var(--border)",
                      background: meta.color,
                    }}
                  >
                    {edu.logo}
                  </div>
                  <div>
                    <div
                      className="font-['JetBrains_Mono'] font-bold text-[14px] leading-[1.3]"
                      style={{ color: "var(--text)" }}
                    >
                      {edu.title}
                    </div>
                    <div
                      className="font-['JetBrains_Mono'] text-[12px] mt-0.5"
                      style={{ color: "var(--text-sub)" }}
                    >
                      {edu.institution}
                    </div>
                    <div
                      className="font-['JetBrains_Mono'] text-[11px] mt-1 tracking-[0.04em]"
                      style={{ color: "var(--accent)" }}
                    >
                      {edu.date}
                    </div>
                  </div>
                </div>
                {edu.description && (
                  <p
                    className="font-newsreader text-[13.5px] leading-[1.75] mt-3.5 pt-3"
                    style={{
                      color: "var(--text-sub)",
                      borderTop: "1px solid var(--border-lt)",
                    }}
                  >
                    {edu.description}
                  </p>
                )}
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="mt-3.5 font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.08em] uppercase px-5 py-2.5 inline-flex items-center gap-2 cursor-pointer transition-all duration-200"
                  style={{
                    background: isOpen ? "var(--accent)" : "transparent",
                    color: isOpen ? "#fff" : "var(--accent)",
                    border: "2px solid var(--accent)",
                  }}
                >
                  <span>{isOpen ? "▲" : "▼"}</span>
                  {isOpen ? "Hide Proof" : "See Proof"}
                </button>
              </div>

              {/* Cert accordion */}
              <div
                className="overflow-hidden transition-all duration-500"
                style={{
                  maxHeight: isOpen ? "480px" : "0",
                  borderTop: isOpen ? "2px dashed var(--accent)" : "none",
                }}
              >
                <div
                  className="p-7 flex flex-col items-center text-center"
                  style={{ background: "var(--surface-alt)" }}
                >
                  <div
                    className="flex flex-col items-center gap-3 w-full py-9 px-5"
                    style={{ border: "2px dashed var(--border-lt)" }}
                  >
                    <span className="text-[40px]">{meta.mock}</span>
                    <span
                      className="font-['JetBrains_Mono'] font-extrabold text-[17px] tracking-[0.04em]"
                      style={{ color: "var(--text)" }}
                    >
                      {meta.certTitle}
                    </span>
                    <span
                      className="font-['JetBrains_Mono'] text-[12px]"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Awarded to:{" "}
                      <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                        Waithaka
                      </span>
                    </span>
                    <span
                      className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-widest px-5 py-1.5"
                      style={{
                        background: meta.color,
                        border: "2px solid var(--border)",
                        color: "#fff",
                      }}
                    >
                      {meta.badge}
                    </span>
                    <span
                      className="font-['JetBrains_Mono'] text-[10px] leading-[1.6] mt-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      Replace mock with{" "}
                      <code style={{ color: "var(--accent)" }}>
                        &lt;img src="your-cert-url"&gt;
                      </code>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Status bar */}
        <div
          className="mt-3 flex items-center gap-3.5 px-5 py-3.5"
          style={{ border: "1px dashed var(--border-lt)" }}
        >
          <span
            className="w-2 h-2 rounded-full shrink-0 animate-pulse-dot"
            style={{ background: "var(--green)" }}
          />
          <span
            className="font-['JetBrains_Mono'] text-[11px] tracking-[0.07em]"
            style={{ color: "var(--text-muted)" }}
          >
            ALWAYS_LEARNING → Actively pursuing new certifications
          </span>
        </div>
      </div>
    </div>
  );
}
