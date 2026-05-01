import { techStack } from "../../data";

export function ProfessionalTechStack() {
  // Tech stack marquee items
  const marqueeItems1 = [
    "Python",
    "Golang",
    "TypeScript",
    "HonoJS",
    "React",
    "Next.js",
    "Django",
    "PostgreSQL",
    "Redis",
    "Docker",
  ];

  const marqueeItems2 = [
    "M-Pesa API",
    "Prisma ORM",
    "AWS S3",
    "Railway",
    "Cloudflare",
    "GitHub CI/CD",
    "WebSocket",
    "Celery",
    "Tailwind CSS",
    "Three.js",
  ];

  return (
    <section
      id="stack"
      className="marquee-section"
      style={{
        padding: "0",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
        backgroundColor: "#fafafa",
        overflow: "hidden",
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
          animation: marquee 30s linear infinite;
        }
        .marquee-track.reverse {
          animation: marquee-rev 30s linear infinite;
        }
      `}</style>

      {/* Row 1 - Left to Right */}
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

      {/* Row 2 - Right to Left */}
      <div style={{ display: "flex", overflow: "hidden" }}>
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
    </section>
  );
}
