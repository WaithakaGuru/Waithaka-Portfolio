import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalHero() {
  const scrollRef = useScrollReveal();

  return (
    <section
      className="relative min-h-screen py-16 px-6 sm:px-8 lg:px-12 flex items-center"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
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
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-bold text-xs uppercase inline-flex items-center gap-2 px-6 py-3 transition-all"
                style={{
                  backgroundColor: "transparent",
                  color: "#0a0a0a",
                  border: "2px solid #0a0a0a",
                  boxShadow: "4px 4px 0 #0a0a0a",
                  fontFamily: "'Syne', sans-serif",
                  letterSpacing: "0.08em",
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
                Get in Touch
              </button>
            </div>
          </div>

          {/* Right Column - Image and Stats */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              alignItems: "center",
            }}
          >
            {/* Hero Image */}
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
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

            {/* Stats - Compact Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "0",
                border: "1px solid #e0e0e0",
                backgroundColor: "#fafafa",
                width: "100%",
              }}
            >
              {[
                { num: "4+", label: "Years Exp" },
                { num: "50+", label: "Projects" },
                { num: "15+", label: "Clients" },
                { num: "1240", label: "Hours" },
              ].map((stat, i) => (
                <div
                  key={i}
                  style={{
                    padding: "16px 12px",
                    borderRight: i % 2 === 0 ? "1px solid #e0e0e0" : "none",
                    borderBottom: i < 2 ? "1px solid #e0e0e0" : "none",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "24px",
                      fontWeight: 800,
                      color: "#f97316",
                      lineHeight: 1,
                      marginBottom: "4px",
                    }}
                  >
                    {stat.num}
                  </div>
                  <div
                    style={{
                      fontSize: "8px",
                      letterSpacing: "0.12em",
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
    </section>
  );
}
