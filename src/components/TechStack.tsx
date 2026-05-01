import { techStack as stack } from "../data";

export function TechStack() {
  return (
    <section
      id="stack"
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0",
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "32px",
        paddingRight: "32px",
        marginTop: "16px",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
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
            TECHNICAL EXPERTISE
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
            Tech Stack
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.7,
              color: "#555555",
              maxWidth: "520px",
            }}
          >
            A curated selection of technologies I've mastered for building
            scalable, performant applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: "16px",
          }}
        >
          {stack.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fafafa",
                border: "2px solid #e0e0e0",
                padding: "24px",
                boxShadow: "4px 4px 0 #0a0a0a",
                transition: "all 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#f97316";
                e.currentTarget.style.background = "#fff9f5";
                e.currentTarget.style.boxShadow = "6px 6px 0 #0a0a0a";
                e.currentTarget.style.transform = "translate(-2px, -2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#e0e0e0";
                e.currentTarget.style.background = "#fafafa";
                e.currentTarget.style.boxShadow = "4px 4px 0 #0a0a0a";
                e.currentTarget.style.transform = "translate(0, 0)";
              }}
            >
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#f97316",
                  marginBottom: "12px",
                }}
              >
                {`// ${item.label}`}
              </div>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#0a0a0a",
                }}
              >
                {item.name}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          style={{
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: "1px solid #e0e0e0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: "24px",
          }}
        >
          {[
            { label: "Languages", value: "4+" },
            { label: "Frameworks", value: "6+" },
            { label: "Tools & DBs", value: "8+" },
            { label: "Platforms", value: "5+" },
          ].map((stat, idx) => (
            <div key={idx} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "32px",
                  fontWeight: 800,
                  color: "#f97316",
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#999999",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
