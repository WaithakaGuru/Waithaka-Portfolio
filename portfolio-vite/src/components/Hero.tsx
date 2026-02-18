// import { useEffect, useRef } from "react";
import { useEffect, useRef } from "react";
import { TICKER_ITEMS } from "../data";
import { useTheme } from "../contexts/ThemeContext";

export function Hero() {
  const { isDark } = useTheme();
  const animRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    animRefs.current.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      setTimeout(
        () => {
          if (el) {
            el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
          }
        },
        100 + i * 120,
      );
    });
  }, []);

  const setRef = (i: number) => (el: HTMLDivElement | null) => {
    animRefs.current[i] = el;
  };

  return (
    <>
      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative z-[1] min-h-[100svh] pt-[60px] flex flex-col overflow-hidden"
        // style={{ background: "var(--bg)" }}
      >
        {/* Ghost watermark */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none select-none whitespace-nowrap z-0"
        >
          <span
            className="font-bebas text-[clamp(80px,14vw,210px)] leading-[0.88] tracking-[0.06em]"
            style={{ color: "var(--hero-ghost)" }}
          >
            DEVELOPER
          </span>
          <span
            className="font-bebas text-[clamp(80px,14vw,210px)] leading-[0.88] tracking-[0.06em]"
            style={{ color: "var(--hero-ghost)" }}
          >
            CODER
          </span>
        </div>

        {/* Hero grid body */}
        <div
          className="relative z-[2] flex-1 max-w-[1440px] mx-auto w-full px-8 py-[60px] pb-[40px]
            grid gap-0 items-start"
          style={{
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "auto auto auto auto",
          }}
        >
          {/* ── Photo — col 1, all rows ── */}
          <div
            ref={setRef(0)}
            className="relative mt-6"
            style={{ gridColumn: 1, gridRow: "1 / 5", alignSelf: "center" }}
          >
            {/* Corner accent */}
            <span
              className="absolute top-[-12px] left-[-12px] w-6 h-6 border-t-[3px] border-l-[3px]"
              style={{ borderColor: "var(--accent)" }}
            />
            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(200px, 18vw, 280px)",
                aspectRatio: "3/4",
                border: "3px solid var(--border)",
                boxShadow: "var(--shadow-h)",
                background: "var(--surface-alt)",
              }}
            >
              <img
                src="/me.jpg"
                alt="Waithaka Ndung'u"
                className="w-full h-full object-cover object-top"
                style={{ filter: "contrast(1.05) saturate(0.9)" }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
            <div
              className="absolute bottom-[-2px] right-[-2px] font-['JetBrains_Mono'] font-extrabold text-[10px] tracking-[0.08em] px-3 py-1.5"
              style={{
                background: "var(--yellow)",
                border: "2px solid var(--border)",
                color: "#1A1A1A",
              }}
            >
              OPEN TO WORK ↗
            </div>
          </div>

          {/* ── Headline — col 2, row 1 ── */}
          <div
            ref={setRef(1)}
            style={{
              gridColumn: 2,
              gridRow: 1,
              paddingLeft: "clamp(32px, 8vw, 120px)",
              paddingTop: 20,
            }}
          >
            <div
              className="text-[11px] tracking-[0.18em] mb-4 flex items-center gap-2.5"
              style={{ color: "var(--text-muted)" }}
            >
              <span
                className="block w-8 h-0.5"
                style={{ background: "var(--accent)" }}
              />
              SOFTWARE ENGINEER · NAIROBI, KE
            </div>
            <div
              className="font-bebas text-[clamp(72px,11vw,160px)] leading-[0.9] tracking-[0.01em]"
              style={{ color: "var(--text)" }}
            >
              SOFTWARE
            </div>
            <span
              className="font-bebas text-[clamp(72px,11vw,160px)] leading-[0.9] tracking-[0.01em] block"
              style={{
                WebkitTextStroke: "2px var(--text)",
                color: "transparent",
              }}
            >
              ENGINEER
              <span
                style={{
                  color: "var(--accent)",
                  WebkitTextStroke: 0 as unknown as string,
                }}
              >
                _
              </span>
            </span>
          </div>

          {/* ── Tagline — col 2, row 2 ── */}
          <div
            ref={setRef(2)}
            style={{
              gridColumn: 2,
              gridRow: 2,
              paddingLeft: "clamp(32px, 8vw, 120px)",
              marginTop: 28,
            }}
          >
            <div
              className="inline-flex"
              style={{
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
                background: "var(--yellow)",
              }}
            >
              <div className="px-7 py-3.5 max-w-[680px]">
                <div
                  className="font-['JetBrains_Mono'] font-bold text-[clamp(13px,1.5vw,16px)] leading-[1.4]"
                  style={{ color: "#1A1A1A" }}
                >
                  I build digital products that generate revenue.
                </div>
                <div
                  className="text-[12px] font-medium mt-1.5 tracking-[0.03em]"
                  style={{ color: "rgba(26,26,26,0.65)" }}
                >
                  Python · Go · TypeScript · HonoJS · Docker · React
                </div>
              </div>
            </div>
          </div>

          {/* ── CTAs — col 2, row 3 ── */}
          <div
            ref={setRef(3)}
            className="flex gap-3.5 flex-wrap items-center mt-7"
            style={{
              gridColumn: 2,
              gridRow: 3,
              paddingLeft: "clamp(32px, 8vw, 120px)",
            }}
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-['JetBrains_Mono'] font-extrabold text-[13px] tracking-[0.1em] uppercase px-8 py-3.5 inline-flex items-center gap-2.5 no-underline transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px]"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              VIEW PROJECTS <span>→</span>
            </a>
            <a
              href="/cv.pdf"
              download
              className="font-['JetBrains_Mono'] font-bold text-[13px] tracking-[0.08em] uppercase px-8 py-3.5 inline-flex items-center gap-2.5 no-underline transition-all duration-150 hover:-translate-x-[3px] hover:-translate-y-[3px]"
              style={{
                background: "transparent",
                color: "var(--text)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              DOWNLOAD CV <span>↓</span>
            </a>
            <div
              className="flex items-center gap-2.5 text-[10px] tracking-[0.14em] ml-2"
              style={{ color: "var(--text-muted)" }}
            >
              <div
                className="w-[18px] h-7 border-2 rounded-[9px] relative flex-shrink-0"
                style={{ borderColor: "var(--border-lt)" }}
              >
                <span
                  className="absolute left-1/2 -translate-x-1/2 w-[3px] h-[6px] rounded-full animate-scroll-dot"
                  style={{ top: 4, background: "var(--accent)" }}
                />
              </div>
              SCROLL DOWN
            </div>
          </div>

          {/* ── Stats chips — col 2, row 4, horizontal ── */}
          <div
            ref={setRef(4)}
            className="flex flex-row flex-wrap gap-3 mt-6 pb-2"
            style={{
              gridColumn: 2,
              gridRow: 4,
              paddingLeft: "clamp(32px, 8vw, 120px)",
              alignSelf: "end",
            }}
          >
            {[
              { num: "5+", label: "YRS EXPERIENCE" },
              { num: "12", label: "PROJECTS SHIPPED" },
              { num: "3", label: "CERTIFICATIONS" },
            ].map(({ num, label }) => (
              <div
                key={label}
                className="flex flex-col flex-1 min-w-[100px] max-w-[160px] px-5 py-2.5"
                style={{
                  background: "var(--surface)",
                  border: "2px solid var(--border)",
                  boxShadow: "3px 3px 0 var(--border)",
                }}
              >
                <span
                  className="font-bebas text-[28px] leading-none"
                  style={{ color: "var(--accent)" }}
                >
                  {num}
                </span>
                <span
                  className="text-[9px] tracking-[0.12em] mt-0.5"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* ── Mobile: full-width single col ── */}
          {/* (handled by the @media rule in index.css via the grid layout) */}
        </div>
      </section>

      {/* ── TICKER TAPE ── */}
      <div
        className="relative z-[2] overflow-hidden py-3"
        style={{
          background: "var(--ticker-bg)",
          borderTop: "2px solid var(--border)",
          borderBottom: "2px solid var(--border)",
        }}
        aria-hidden="true"
      >
        <div className="flex w-max animate-ticker">
          {TICKER_ITEMS.map((item, i) => (
            <span
              key={i}
              className="font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.1em] uppercase whitespace-nowrap px-6"
              style={{ color: "var(--ticker-text)" }}
            >
              {item}{" "}
              <span
                style={{
                  color: isDark ? "#0B0B0B" : "var(--accent)",
                  opacity: 0.7,
                }}
              >
                ///
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Mobile hero layout override ── */}
      <style>{`
        @media (max-width: 900px) {
          #hero .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
