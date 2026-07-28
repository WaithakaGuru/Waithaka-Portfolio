import { useScrollReveal } from "../../hooks/useScrollReveal";
import { projects } from "../../../src/data";

export function ProfessionalProjects() {
  const scrollRef = useScrollReveal();

  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        .project-card {
          background: #fafafa;
          border: 1px solid #e0e0e0;
          overflow: hidden;
          transition: all 0.2s;
          display: flex;
          flex-direction: column;
          padding: 24px;
        }
        .project-card:hover {
          border-color: #f97316;
          transform: translate(-3px, -3px);
          box-shadow: 6px 6px 0 #0a0a0a;
        }
        .project-tag {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.08em;
          background: #efefef;
          color: #999999;
          border: 1px solid #e0e0e0;
          padding: 4px 10px;
          text-transform: uppercase;
        }
        .project-link {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #555555;
          border: 1px solid #e0e0e0;
          padding: 8px 16px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.15s;
        }
        .project-link:hover {
          color: #f97316;
          border-color: #f97316;
        }
        .project-link.primary {
          background: #f97316;
          color: #ffffff;
          border-color: #f97316;
        }
        .project-link.primary:hover {
          background: transparent;
          color: #f97316;
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
          Hand-Coded Work
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
          Selected <span style={{ color: "#f97316" }}>Projects</span>
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
          Real products built for real users — architected with care, shipped
          with speed.
        </p>

        {/* Projects Grid */}
        <div
          ref={scrollRef()}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 360px), 1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project, i) => (
            <div key={i} className="project-card">
              {/* Project Number */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "14px",
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#999999",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "18px",
                  fontWeight: 800,
                  color: "#0a0a0a",
                  marginBottom: "10px",
                  letterSpacing: "-0.01em",
                }}
              >
                {project.title}
              </div>

              <div
                style={{
                  fontSize: "12px",
                  color: "#555555",
                  lineHeight: 1.75,
                  flex: 1,
                  marginBottom: "20px",
                }}
              >
                {project.shortDesc}
              </div>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px",
                  marginBottom: "20px",
                }}
              >
                {project.tags.slice(0, 5).map((tag, idx) => (
                  <span key={idx} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: "10px", marginTop: "auto" }}>
                <a
                  href={project.github || "#"}
                  className="project-link primary"
                >
                  GitHub ↗
                </a>
                <a href={project.live || "#"} className="project-link">
                  Live Demo ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
