import { useScrollReveal } from "../../hooks/useScrollReveal";
import { userReports } from "../../data";

export function ProfessionalTestimonials() {
  const scrollRef = useScrollReveal();

  return (
    <section
      className="py-24 px-6 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#f5f5f5",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        .testimonial-card {
          background: #fafafa;
          border: 1px solid #e0e0e0;
          padding: 32px;
          position: relative;
          overflow: hidden;
          transition: all 0.2s;
        }
        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: -10px;
          right: 20px;
          font-family: 'Instrument Serif', serif;
          font-size: 120px;
          color: rgba(249, 115, 22, 0.1);
          line-height: 1;
          pointer-events: none;
        }
        .testimonial-card:hover {
          border-color: #f97316;
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #0a0a0a;
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
          What Others Say
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
          Social <span style={{ color: "#f97316" }}>Proof</span>
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
          Hear from the clients, colleagues, and mentees I've worked with.
        </p>

        {/* Testimonials Grid */}
        <div
          ref={scrollRef()}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "20px",
          }}
        >
          {userReports.map((testimonial, i) => (
            <div key={testimonial.id || i} className="testimonial-card">
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  lineHeight: 1.85,
                  color: "#555555",
                  marginBottom: "28px",
                }}
              >
                "{testimonial.report}"
              </p>

              <div
                style={{ display: "flex", alignItems: "center", gap: "14px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "#efefef",
                    border: "2px solid #cccccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "14px",
                    color: "#f97316",
                    flexShrink: 0,
                  }}
                >
                  {testimonial.from.charAt(0)}
                  {testimonial.from.charAt(testimonial.from.length - 1)}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Syne', sans-serif",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "#0a0a0a",
                      marginBottom: "3px",
                    }}
                  >
                    {testimonial.from}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#999999",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {testimonial.log}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
