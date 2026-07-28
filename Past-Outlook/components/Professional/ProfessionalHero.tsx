import { useScrollReveal } from "../../hooks/useScrollReveal";
import { TICKER_ITEMS } from "../../../src/data";

export function ProfessionalHero() {
  const scrollRef = useScrollReveal();

  return (
    <section
      className="relative px-6 sm:px-8 lg:px-12 flex flex-col"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        minHeight: "100dvh",
        paddingTop: "120px",
        paddingBottom: "0",
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 0 0 0 rgba(249, 115, 22, 0.4);
          }
          50% {
            opacity: 0.7;
            box-shadow: 0 0 0 6px rgba(249, 115, 22, 0);
          }
        }
        .pulse-dot {
          animation: pulse 2s ease-in-out infinite;
        }
        .hero-shadow {
          box-shadow: 4px 4px 0 #0a0a0a;
        }
        .hero-shadow:hover {
          transform: translate(-3px, -3px);
          box-shadow: 7px 7px 0 #0a0a0a;
        }
        .hero-ghost {
          position: absolute;
          bottom: -20px;
          right: -20px;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: clamp(120px, 18vw, 260px);
          color: rgba(249, 115, 22, 0.06);
          letter-spacing: -0.04em;
          line-height: 1;
          pointer-events: none;
          user-select: none;
          z-index: 0;
        }
      `}</style>

      <div className="max-w-6xl mx-auto w-full relative z-1">
        <div
          ref={scrollRef()}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
            flex: 1,
          }}
        >
          {/* Left Column - Text Content */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Open Badge */}
            <div
              className="inline-flex items-center gap-3 px-4 py-2 rounded border"
              style={{
                borderColor: "#cccccc",
                backgroundColor: "#fafafa",
                width: "fit-content",
              }}
            >
              <span
                className="inline-block w-2 h-2 rounded-full pulse-dot"
                style={{ backgroundColor: "#f97316" }}
              ></span>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: "#555555", letterSpacing: "0.12em" }}
              >
                Open to Opportunities
              </span>
            </div>

            {/* Eyebrow */}
            <div
              className="flex items-center gap-3 text-sm font-semibold"
              style={{ color: "#f97316", letterSpacing: "0.16em" }}
            >
              <span
                style={{
                  width: "36px",
                  height: "2px",
                  backgroundColor: "#f97316",
                }}
              ></span>
              Full Stack Engineer · Nairobi, Kenya
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(42px, 5vw, 72px)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.03em",
                color: "#0a0a0a",
              }}
            >
              Building
              <br />
              digital
              <br />
              <span
                style={{
                  WebkitTextStroke: "2px #0a0a0a",
                  color: "transparent",
                }}
              >
                products
              </span>
              <br />
              that <span style={{ color: "#f97316" }}>ship.</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "clamp(14px, 1.5vw, 18px)",
                fontStyle: "italic",
                color: "#555555",
                lineHeight: 1.6,
              }}
            >
              Full Stack Engineer with 4+ years turning ideas into scalable,
              revenue-generating software. Python · Go · TypeScript · React.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3" style={{ marginTop: "8px" }}>
              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="hero-shadow font-bold text-xs uppercase inline-flex items-center gap-2 px-6 py-3 transition-all"
                style={{
                  backgroundColor: "#f97316",
                  color: "#ffffff",
                  border: "2px solid #f97316",
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                View Projects →
              </button>
              <a
                href="/Waithaka Ndung'u.pdf"
                download
                className="font-bold text-xs uppercase inline-flex items-center gap-2 px-6 py-3 transition-all"
                style={{
                  backgroundColor: "transparent",
                  color: "#0a0a0a",
                  border: "2px solid #0a0a0a",
                  boxShadow: "4px 4px 0 #0a0a0a",
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "0.08em",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translate(-2px, -2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translate(0, 0)";
                }}
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "stretch",
            }}
          >
            {/* Hero Image */}
            <div
              style={{
                width: "100%",
                maxWidth: "300px",
                aspectRatio: "9/11",
                border: "2px solid #e0e0e0",
                backgroundColor: "#fafafa",
                overflow: "hidden",
              }}
            >
              <img
                src="/me.jpg"
                alt="Waithaka Ndung'u"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>

            {/* Stats - Full Width Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: "0",
                border: "1px solid #e0e0e0",
                backgroundColor: "#fafafa",
                width: "100%",
              }}
            >
              {[
                { num: "4+", label: "Yrs" },
                { num: "50+", label: "Prj" },
                { num: "15+", label: "Cls" },
                { num: "1.2k", label: "Hrs" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "12px 8px",
                    borderRight: i < 3 ? "1px solid #e0e0e0" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "18px",
                      fontWeight: 800,
                      color: "#f97316",
                      lineHeight: 1,
                      marginBottom: "2px",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: "7px",
                      letterSpacing: "0.1em",
                      color: "#999999",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-ghost" aria-hidden="true">
        CODE
      </div>

      {/* Marquee Section */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .marquee-container {
          overflow: hidden;
          background: #0a0a0a;
          border-top: 1px solid #e0e0e0;
          border-bottom: 1px solid #e0e0e0;
          padding: 16px 0;
          margin-top: 40px;
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
        }
        .marquee-wrapper {
          display: flex;
          width: fit-content;
          animation: marquee 60s linear infinite;
        }
        .marquee-content {
          display: flex;
          white-space: nowrap;
          gap: 0;
        }
        .marquee-item {
          display: inline-flex;
          align-items: center;
          padding: 0 24px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #ffffff;
          flex-shrink: 0;
        }
        .marquee-divider {
          color: #f97316;
          margin: 0 8px;
        }
      `}</style>

      <div className="marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {TICKER_ITEMS.map((item, idx) => (
              <div key={`set1-${idx}`} className="marquee-item">
                {item}
                {idx < TICKER_ITEMS.length - 1 && (
                  <span className="marquee-divider">◆</span>
                )}
              </div>
            ))}
          </div>
          <div className="marquee-content">
            {TICKER_ITEMS.map((item, idx) => (
              <div key={`set2-${idx}`} className="marquee-item">
                {item}
                {idx < TICKER_ITEMS.length - 1 && (
                  <span className="marquee-divider">◆</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
