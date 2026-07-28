import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { education } from "../../../src/data";

export function ProfessionalEducation() {
  const scrollRef = useScrollReveal();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-8" style={{ backgroundColor: "#fafafa" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "16px",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#f97316",
            }}
          >
            <span
              style={{ width: "28px", height: "2px", background: "#f97316" }}
            />
            LEARNING & GROWTH
          </div>
          <h2
            style={{
              fontFamily: "Syne, sans-serif",
              fontSize: "clamp(40px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              color: "#0a0a0a",
              marginBottom: "16px",
            }}
          >
            Education & Certifications
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#555555",
              maxWidth: "520px",
            }}
          >
            Continuous learning through formal education and specialized
            certifications in software development and technology.
          </p>
        </div>

        {/* Education Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "24px",
          }}
        >
          {education.map((edu, i) => (
            <div
              key={i}
              ref={scrollRef(i)}
              style={{
                background: "#ffffff",
                border: "2px solid #e0e0e0",
                padding: "24px",
                boxShadow: "none",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f97316";
                e.currentTarget.style.boxShadow = "6px 6px 0 #0a0a0a";
                e.currentTarget.style.transform = "translate(-2px, -2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e0e0e0";
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              {/* Header */}
              <div style={{ marginBottom: "16px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    marginBottom: "12px",
                  }}
                >
                  <span style={{ fontSize: "24px" }}>{edu.logo}</span>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#f97316",
                    }}
                  >
                    {edu.date}
                  </div>
                </div>
                <h3
                  style={{
                    fontFamily: "Syne, sans-serif",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0a0a0a",
                    marginBottom: "4px",
                  }}
                >
                  {edu.title}
                </h3>
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#999999",
                    letterSpacing: "0.04em",
                  }}
                >
                  {edu.institution}
                </p>
              </div>

              {/* Description */}
              {edu.description && (
                <p
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.6,
                    color: "#555555",
                    marginBottom: "16px",
                  }}
                >
                  {edu.description}
                </p>
              )}

              {/* Show Proof Button */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  background: "#f5f5f5",
                  border: "1px solid #e0e0e0",
                  color: "#f97316",
                  padding: "8px 16px",
                  cursor: "pointer",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#f97316";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#f5f5f5";
                  e.currentTarget.style.color = "#f97316";
                }}
              >
                {expandedIndex === i ? "HIDE PROOF" : "SHOW PROOF"}
              </button>

              {/* Certificate Preview - Inline */}
              {expandedIndex === i && (
                <div
                  style={{
                    marginTop: "16px",
                    paddingTop: "16px",
                    borderTop: "1px solid #e0e0e0",
                    background: "#f5f5f5",
                    padding: "20px",
                  }}
                >
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                      📜
                    </div>
                    <p
                      style={{
                        fontFamily: "Syne, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#0a0a0a",
                        marginBottom: "8px",
                      }}
                    >
                      Certificate of {edu.title}
                    </p>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#999999",
                      }}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
