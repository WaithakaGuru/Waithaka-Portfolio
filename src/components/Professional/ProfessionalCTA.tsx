import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalCTA() {
  const scrollRef = useScrollReveal();

  const tags = [
    "Full Stack Engineering",
    "API Architecture",
    "M-Pesa Integrations",
    "DevRel / Mentoring",
    "Consultancy",
  ];

  return (
    <section
      className="py-24 px-6 sm:px-8 lg:px-12 text-center relative overflow-hidden"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        .cta-gradient {
          background: radial-gradient(ellipse 60% 80% at 50% 50%, rgba(249, 115, 22, 0.06) 0%, transparent 70%);
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .cta-tag {
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          border: 1px solid #cccccc;
          color: #999999;
          padding: 8px 20px;
          letter-spacing: 0.04em;
          transition: 0.15s;
        }
        .cta-tag:hover {
          border-color: #f97316;
          color: #f97316;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-1">
        <div className="cta-gradient"></div>

        {/* Tags */}
        <div
          ref={scrollRef()}
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            marginBottom: "40px",
          }}
        >
          {tags.map((tag, i) => (
            <span key={i} className="cta-tag">
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(40px, 6vw, 84px)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.03em",
            color: "#0a0a0a",
            marginBottom: "16px",
          }}
        >
          Let's build something
          <br />
          <span style={{ color: "#f97316" }}>great together.</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            fontSize: "18px",
            color: "#555555",
            marginBottom: "40px",
          }}
        >
          Open to full-time roles, contracts, and interesting side quests.
        </p>

        {/* CTA Button */}
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "13px",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            backgroundColor: "#f97316",
            color: "#ffffff",
            border: "2px solid #f97316",
            padding: "14px 32px",
            boxShadow: "4px 4px 0 #0a0a0a",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            transition: "all 0.15s",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translate(-3px, -3px)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "7px 7px 0 #0a0a0a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform =
              "translate(0, 0)";
            (e.currentTarget as HTMLElement).style.boxShadow =
              "4px 4px 0 #0a0a0a";
          }}
        >
          Reach Out →
        </button>
      </div>
    </section>
  );
}
