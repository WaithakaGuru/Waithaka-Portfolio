import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalAbout() {
  const scrollRef = useScrollReveal();

  const pillars = [
    {
      icon: "⚡",
      title: "Performance First",
      desc: "Obsessed with speed, efficiency, and scalable architectures.",
    },
    {
      icon: "🤖",
      title: "AI Integration",
      desc: "Practical ML and LLM integration in real-world applications.",
    },
    {
      icon: "🤝",
      title: "Community Builder",
      desc: "Mentor, workshop facilitator, GDSC volunteer.",
    },
    {
      icon: "🚀",
      title: "Startup-Ready",
      desc: "0→1 product development under real constraints.",
    },
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
        .pillar-card {
          background: #ffffff;
          border: 1px solid #e0e0e0;
          padding: 24px;
          border-radius: "4px";
          transition: all 0.15s;
          cursor: pointer;
        }
        .pillar-card:hover {
          border-color: #f97316;
          box-shadow: 4px 4px 0 #0a0a0a;
          transform: translate(-2px, -2px);
        }
        .availability-banner {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 12px 16px;
          border-radius: 4px;
          color: #10B981;
          font-size: 12px;
          font-weight: 600;
          text-align: center;
          margin-top: 24px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
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
          Who I Am
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
            marginBottom: "40px",
          }}
        >
          A Developer who <span style={{ color: "#f97316" }}>Ships</span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "14px",
            color: "#555555",
            maxWidth: "600px",
            lineHeight: 1.8,
            marginBottom: "40px",
          }}
        >
          Not just code – outcomes. I build things that work, scale, and
          generate real value.
        </p>

        {/* Two Column Layout */}
        <div
          ref={scrollRef()}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Left Column - Image */}
          <div
            style={{
              width: "100%",
              aspectRatio: "1/1.2",
              backgroundColor: "#e8e4dd",
              borderRadius: "8px",
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
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          {/* Right Column - Content */}
          <div>
            {/* Main Quote */}
            <p
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: "22px",
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "#0a0a0a",
                marginBottom: "24px",
              }}
            >
              I turn <span style={{ color: "#f97316" }}>complex problems</span>{" "}
              into clean, maintainable solutions that teams love working with.
            </p>

            {/* Body Text */}
            <p
              style={{
                fontSize: "14px",
                color: "#555555",
                lineHeight: 1.8,
                marginBottom: "16px",
              }}
            >
              I'm a Certified Full Stack Engineer from Kenya with 4+ years
              building digital products that make an impact. My work lives at
              the intersection of engineering rigor and product thinking — I
              don't just write code, I think about what the code needs to
              achieve.
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#555555",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Currently pursuing a B.Sc in Software Engineering at Murang'a
              University of Technology while actively taking on client projects,
              mentoring peers, and contributing to open source.
            </p>

            {/* 2x2 Grid of Pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              {pillars.map((pillar, i) => (
                <div key={i} className="pillar-card">
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
                      fontSize: "12px",
                      color: "#555555",
                      lineHeight: 1.6,
                    }}
                  >
                    {pillar.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability Banner */}
            <div className="availability-banner">
              ✓ Available for freelance projects, contracts, and full-time roles
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
