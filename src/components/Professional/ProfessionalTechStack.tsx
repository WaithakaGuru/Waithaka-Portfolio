import { useScrollReveal } from "../../hooks/useScrollReveal";
import { techStack } from "../../data";

export function ProfessionalTechStack() {
  const scrollRef = useScrollReveal();

  // Split techStack into 3 marquees
  const itemsPerRow = Math.ceil(techStack.length / 3);
  const marqueeItems1 = techStack
    .slice(0, itemsPerRow)
    .map((item) => item.name);
  const marqueeItems2 = techStack
    .slice(itemsPerRow, itemsPerRow * 2)
    .map((item) => item.name);
  const marqueeItems3 = techStack
    .slice(itemsPerRow * 2)
    .map((item) => item.name);

  return (
    <section
      id="stack"
      className="py-20 px-6 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-rev {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
        }
        .marquee-track.forward {
          animation: marquee 40s linear infinite;
        }
        .marquee-track.reverse {
          animation: marquee-rev 40s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto mb-20">
        {/* Section Header */}
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
          Technical Arsenal
        </div>

        {/* Section Title */}
        <h2
          ref={scrollRef()}
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
          Technologies & <span style={{ color: "#f97316" }}>Tools</span>
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
          A comprehensive toolkit spanning languages, frameworks, databases, and
          cloud infrastructure. I stay current with emerging technologies while
          maintaining expertise in battle-tested solutions.
        </p>
      </div>

      {/* Marquee Rows */}
      <div
        style={{
          borderTop: "1px solid #e0e0e0",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        {/* Row 1 - Forward */}
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="marquee-track forward">
            {[...marqueeItems1, ...marqueeItems1].map((item, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#999999",
                  padding: "16px 28px",
                  borderRight: "1px solid #e0e0e0",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#f97316";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#999999";
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#f97316",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Reverse */}
        <div
          style={{
            display: "flex",
            overflow: "hidden",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          <div className="marquee-track reverse">
            {[...marqueeItems2, ...marqueeItems2].map((item, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#999999",
                  padding: "16px 28px",
                  borderRight: "1px solid #e0e0e0",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#f97316";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#999999";
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#f97316",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Forward */}
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="marquee-track forward">
            {[...marqueeItems3, ...marqueeItems3].map((item, i) => (
              <div
                key={i}
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#999999",
                  padding: "16px 28px",
                  borderRight: "1px solid #e0e0e0",
                  whiteSpace: "nowrap",
                  transition: "color 0.15s",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#f97316";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.color = "#999999";
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    backgroundColor: "#f97316",
                    flexShrink: 0,
                  }}
                />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
