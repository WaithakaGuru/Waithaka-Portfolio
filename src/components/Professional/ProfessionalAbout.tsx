import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalAbout() {
  const scrollRef = useScrollReveal();

  const pillars = [
    {
      icon: "🏗️",
      title: "Systems Thinker",
      desc: "I architect for scale first, then build. No spaghetti, no shortcuts.",
    },
    {
      icon: "🌍",
      title: "Africa-First",
      desc: "Deep expertise in M-Pesa, Africa's Talking, and local fintech rails.",
    },
    {
      icon: "⚡",
      title: "Speed Obsessed",
      desc: "87% API response time reduction on a live logistics platform. Speed is a feature.",
    },
    {
      icon: "🤝",
      title: "Community Builder",
      desc: "Co-organiser of Nairobi JS meetup. 40+ devs mentored into their first jobs.",
    },
  ];

  const skills = [
    "Python",
    "Golang",
    "TypeScript",
    "React",
    "HonoJS",
    "Next.js",
    "Django",
    "PostgreSQL",
    "Redis",
    "Docker",
    "M-Pesa API",
    "AWS S3",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        .about-shadow {
          box-shadow: 4px 4px 0 #0a0a0a;
        }
        .about-shadow:hover {
          transform: translate(-2px, -2px);
          border-color: #f97316;
        }
        .skill-pill {
          border: 1px solid #cccccc;
          background: #efefef;
          color: #555555;
          transition: all 0.15s;
        }
        .skill-pill:hover {
          background: #f97316;
          color: #0a0a0a;
          border-color: #f97316;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div style={{ marginBottom: "20px" }}>
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
            Who I Am
          </div>
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
          About <span style={{ color: "#f97316" }}>Me</span>
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
          I'm <strong>Waithaka Ndung'u</strong>, a Certified Full Stack Engineer
          from Nairobi, Kenya. I specialize in building{" "}
          <strong>performant, scalable web and mobile applications</strong> that
          solve real business problems — from M-Pesa-integrated SaaS platforms
          to
          <strong> high-throughput Go microservices</strong> handling tens of
          thousands of daily transactions.
        </p>

        <p
          style={{
            fontSize: "14px",
            color: "#555555",
            maxWidth: "560px",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          I've collaborated with logistics companies, digital agencies, and
          government bodies across East Africa, shipping products that{" "}
          <strong>real users depend on every day</strong>. I care deeply about
          clean architecture, developer experience, and code that the next
          engineer can actually maintain.
        </p>

        {/* Skills Section */}
        <div style={{ marginBottom: "60px" }}>
          <div
            style={{
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.16em",
              color: "#999999",
              textTransform: "uppercase",
              marginBottom: "14px",
            }}
          >
            Core Technologies
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {skills.map((skill) => (
              <span
                key={skill}
                className="skill-pill"
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  padding: "6px 14px",
                  borderRadius: "4px",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div
          ref={scrollRef()}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "16px",
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="about-shadow"
              style={{
                backgroundColor: "#fafafa",
                border: "1px solid #e0e0e0",
                padding: "20px",
                transition: "all 0.2s",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "22px", marginBottom: "10px" }}>
                {pillar.icon}
              </div>
              <div
                style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0a0a0a",
                  marginBottom: "6px",
                }}
              >
                {pillar.title}
              </div>
              <div
                style={{
                  fontSize: "11px",
                  color: "#555555",
                  lineHeight: 1.7,
                }}
              >
                {pillar.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
