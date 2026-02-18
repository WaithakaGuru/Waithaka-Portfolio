import { EducationSection } from "./Education";
import { ExperienceSection } from "./Experience";

export function CareerLedger() {
  return (
    <div id="logs" style={{ background: "var(--bg)" }}>
      {/* ── Sticky section header ── */}
      <div
        className="sticky z-50 px-8"
        style={{
          top: 0,
          background: "var(--bg)",
          borderBottom: "2px solid var(--border)",
          transition: "top 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}
        id="ledger-header"
      >
        <div className="max-w-360 mx-auto h-17 flex items-center justify-between">
          <div
            className="font-bebas font-bold tracking-[0.04em] leading-none"
            style={{
              fontSize: "clamp(22px, 3.5vw, 40px)",
              color: "var(--text)",
            }}
          >
            CAREER <span style={{ color: "var(--accent)" }}>LEDGER</span>
            <span
              className="inline-block w-0.5 align-middle ml-1 blink"
              style={{ height: "1em", background: "var(--accent)" }}
            />
          </div>
          <span
            className="font-['JetBrains_Mono'] text-[10px] tracking-[0.06em] px-2.5 py-0.75"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border-lt)",
            }}
          >
            7 ENTRIES
          </span>
        </div>
      </div>

      {/* ── Two-column: Experience + Education ── */}
      <div
        className="max-w-360 mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 500px), 1fr))",
          gap: "72px",
          alignItems: "start",
        }}
      >
        <ExperienceSection />
        <EducationSection />
      </div>
    </div>
  );
}
