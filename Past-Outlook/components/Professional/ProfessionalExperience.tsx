import { useScrollAnimations } from "../../hooks/useScrollReveal";
import { experiences } from "../../data";

export function ProfessionalExperience() {
  const scrollRef = useScrollAnimations();

  return (
    <section
      id="experience"
      className="py-24 px-6 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        .exp-item {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 0;
          border-top: 1px solid #e0e0e0;
          padding: 40px 0;
          transition: background 0.2s;
        }
        .exp-item:last-child {
          border-bottom: 1px solid #e0e0e0;
        }
        .exp-item:hover {
          background: #fafafa;
        }
        .exp-item:hover .exp-main {
          padding-left: 20px;
        }
        .exp-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.06em;
          background: #efefef;
          color: #999999;
          border: 1px solid #e0e0e0;
          padding: 4px 10px;
        }
        @media (max-width: 900px) {
          .exp-item {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            color: "#f97316",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          <span
            style={{
              display: "block",
              width: "28px",
              height: "2px",
              backgroundColor: "#f97316",
            }}
          ></span>
          Where I've Worked
        </div>

        {/* Section Title */}
        <h2
          style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(36px, 4.5vw, 58px)",
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#0a0a0a",
            marginBottom: "16px",
          }}
        >
          Experience
        </h2>

        {/* Section Description */}
        <p
          style={{
            fontSize: "14px",
            color: "#555555",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "60px",
          }}
        >
          From government data pipelines to funded SaaS startups — here's the
          trail of code I've shipped.
        </p>

        {/* Experience List */}
        <div
          ref={scrollRef()}
          style={{ display: "flex", flexDirection: "column", gap: "0" }}
        >
          {experiences.map((exp, i) => (
            <div key={i} className="exp-item">
              <div style={{ paddingRight: "40px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    background: "#efefef",
                    border: "1px solid #e0e0e0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "14px",
                    color: "#f97316",
                    marginBottom: "14px",
                    flexShrink: 0,
                  }}
                >
                  {exp.logo}
                </div>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    marginBottom: "4px",
                  }}
                >
                  {exp.company}
                </div>
                <div
                  style={{
                    fontSize: "10px",
                    color: "#999999",
                    letterSpacing: "0.08em",
                  }}
                >
                  {exp.date}
                </div>
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    background: "#efefef",
                    color: "#f97316",
                    border: "1px solid #cccccc",
                    padding: "3px 10px",
                    display: "inline-block",
                  }}
                >
                  {exp.company === "Wofis Technologies" && "FOUNDING ENGINEER"}
                  {exp.company === "Swahili Tech Labs" && "CONTRACT"}
                  {exp.company === "Koddi Digital Agency" && "FULL-TIME"}
                  {exp.company === "iNoobi Solutions" && "INTERNSHIP"}
                </div>
              </div>
              <div className="exp-main" style={{ transition: "padding 0.2s" }}>
                <div
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "clamp(20px, 2vw, 26px)",
                    fontWeight: 800,
                    letterSpacing: "-0.01em",
                    color: "#0a0a0a",
                    marginBottom: "16px",
                  }}
                >
                  {exp.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: "italic",
                    fontSize: "15px",
                    color: "#555555",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                    maxWidth: "620px",
                  }}
                >
                  {exp.description}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    marginBottom: "20px",
                  }}
                >
                  {exp.learned.slice(0, 3).map((item, idx) => (
                    <li
                      key={idx}
                      style={{
                        fontSize: "12px",
                        color: "#555555",
                        lineHeight: 1.6,
                        paddingLeft: "16px",
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          position: "absolute",
                          left: "0",
                          color: "#f97316",
                        }}
                      >
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {exp.learned.slice(0, 4).map((tag, idx) => (
                    <span key={idx} className="exp-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
