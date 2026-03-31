import { useScrollReveal } from "../hooks/useScrollReveal";

export function AboutMe() {
  const reveal = useScrollReveal();

  return (
    <section
      id="about"
      className="relative z-10 py-10"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-360">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />
        <h2
          className="font-bebas text-[clamp(22px,3.5vw,40px)] leading-none font-bold
        tracking-[0.04em] mb-8 bg-(--bg) w-[101dvw] sticky top-0 z-100 py-4 px-8"
          style={{
            borderBottom: "2px solid var(--border)",
          }}
        >
          <span style={{ color: "var(--text)" }}>ABOUT</span>
          <span style={{ color: "var(--accent)" }}>_ME</span>
        </h2>

        <div
          className="grid gap-8 items-start px-8 mx-auto"
          style={{ gridTemplateColumns: "280px 1fr" }}
        >
          {/* ── Profile Card ── */}
          <div
            className="overflow-hidden transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{
              background: "var(--surface)",
              border: "2px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <img
              src="/me.jpg"
              alt="Waithaka Ndung'u"
              className="w-full object-cover object-top block"
              style={{
                aspectRatio: "3/4",
                filter: "contrast(1.05) saturate(0.9)",
                borderBottom: "2px solid var(--border)",
              }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="p-5">
              <div
                className="font-['JetBrains_Mono'] font-extrabold text-[16px] mb-1"
                style={{ color: "var(--accent)" }}
              >
                Waithaka Ndung'u
              </div>
              <div
                className="font-['JetBrains_Mono'] text-[11px] tracking-[0.05em] mb-4"
                style={{ color: "var(--text-sub)" }}
              >
                Certified Software Developer
              </div>
              <div
                className="flex flex-col gap-2 pt-3.5"
                style={{ borderTop: "1px solid var(--border-lt)" }}
              >
                <div
                  className="flex items-center gap-2 text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span className="text-[13px]">📍</span>Kenya &nbsp;|&nbsp;
                  Worldwide &nbsp;|&nbsp; Remote
                </div>
                <div
                  className="flex items-center gap-2 text-[11px]"
                  style={{ color: "var(--text-muted)" }}
                >
                  <span
                    className="w-1.75 h-1.75 rounded-full shrink-0 animate-pulse-dot"
                    style={{ background: "var(--green)" }}
                  />
                  Available for Projects
                </div>
              </div>
            </div>
          </div>

          {/* ── Right panel ── */}
          <div className="flex flex-col gap-6">
            {/* Introduction */}
            <div
              ref={reveal(0)}
              className="px-8 py-7 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.14em] uppercase mb-4 flex items-center gap-2.5"
                style={{ color: "var(--accent)" }}
              >
                <span
                  className="block w-5 h-0.5"
                  style={{ background: "var(--accent)" }}
                />
                Introduction
              </div>
              <p
                className="font-newsreader text-[16px] leading-[1.75]"
                style={{ color: "var(--text-sub)" }}
              >
                I am Waithaka Ndung'u, a{" "}
                <span
                  className="italic font-bold"
                  style={{ color: "var(--accent)" }}
                >
                  Certified Software Developer
                </span>{" "}
                from Kenya with 4+ years of experience building digital products
                that make an impact. I specialize in creating performant,
                scalable, and optimal web&nbsp;/&nbsp;mobile applications.
              </p>
            </div>

            {/* What I Bring */}
            <div
              ref={reveal(1)}
              className="px-8 py-6 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div
                className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.14em] uppercase mb-4 flex items-center gap-2.5"
                style={{ color: "var(--accent)" }}
              >
                <span
                  className="block w-5 h-0.5"
                  style={{ background: "var(--accent)" }}
                />
                What I Bring
              </div>
              <div className="flex flex-col gap-3">
                {[
                  "Specialized in Web Development and AI integration",
                  "Obsessed with Data Structures and Optimization",
                  "Over 3 years of shipping Apps that sell and scale",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 font-['JetBrains_Mono'] text-[13px] leading-1.5"
                    style={{ color: "var(--text-sub)" }}
                  >
                    <span
                      className="font-extrabold text-[14px] shrink-0 mt-0.5"
                      style={{ color: "var(--accent)" }}
                    >
                      ▸
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Key Stats */}
            <div
              ref={reveal(2)}
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(3,1fr)" }}
            >
              {[
                { num: "4+", label: "Years Experience" },
                { num: "50+", label: "Projects Completed" },
                { num: "15+", label: "Satisfied Clients" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="relative text-center py-5 px-4 overflow-hidden transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
                  style={{
                    background: "var(--surface)",
                    border: "2px solid var(--border)",
                    boxShadow: "var(--shadow)",
                  }}
                >
                  <span
                    className="absolute top-0 left-0 right-0 h-0.75"
                    style={{ background: "var(--accent)" }}
                  />
                  <span
                    className="font-bebas text-[48px] leading-none block"
                    style={{ color: "var(--accent)" }}
                  >
                    {num}
                  </span>
                  <span
                    className="text-[9px] tracking-[0.14em] uppercase mt-1 block"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:860px){
          #about .grid{grid-template-columns:1fr!important}
          #about .grid>div:first-child{display:grid;grid-template-columns:140px 1fr}
          #about .grid>div:first-child img{aspect-ratio:3/4;border-right:2px solid var(--border);border-bottom:none}
        }
        @media(max-width:520px){
          #about{padding-left:1rem;padding-right:1rem}
          #about .grid>div:first-child{grid-template-columns:1fr}
          #about .grid>div:first-child img{aspect-ratio:16/9;border-right:none;border-bottom:2px solid var(--border)}
        }
      `}</style>
    </section>
  );
}
