import { useRef } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalContact() {
  const formRef = useRef<HTMLFormElement>(null);
  const scrollRef = useScrollReveal();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = (e.target as HTMLFormElement).querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    const original = btn.textContent;
    btn.textContent = "Sent ✓";
    btn.style.background = "#34d399";
    setTimeout(() => {
      btn.textContent = original;
      btn.style.background = "";
      (e.target as HTMLFormElement).reset();
    }, 3000);
  };

  const contactLinks = [
    {
      icon: "@",
      label: "EMAIL",
      value: "waithakaoffices@gmail.com",
      href: "mailto:waithakaoffices@gmail.com",
    },
    {
      icon: "GH",
      label: "GITHUB",
      value: "@WaithakaGuru",
      href: "https://github.com/WaithakaGuru",
    },
    {
      icon: "in",
      label: "LINKEDIN",
      value: "linkedin.com/in/waithaka",
      href: "https://linkedin.com/in/waithaka",
    },
    {
      icon: "𝕏",
      label: "X / TWITTER",
      value: "@waithakahack",
      href: "https://twitter.com/waithakahack",
    },
  ];

  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-8 lg:px-12"
      style={{
        backgroundColor: "#fafafa",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <style>{`
        .contact-link-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 13px;
          color: #555555;
          padding: 14px 18px;
          border: 1px solid #e0e0e0;
          background: #efefef;
          transition: all 0.15s;
        }
        .contact-link-item:hover {
          border-color: #f97316;
          color: #f97316;
          transform: translate(-2px, -2px);
          box-shadow: 3px 3px 0 #0a0a0a;
        }
        .contact-link-icon {
          width: 36px;
          height: 36px;
          border: 1px solid #cccccc;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          flex-shrink: 0;
          background: #fafafa;
        }
        .form-input,
        .form-textarea {
          background: #efefef;
          border: 1px solid #e0e0e0;
          color: #0a0a0a;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          padding: 12px 16px;
          outline: none;
          transition: border-color 0.15s;
        }
        .form-input:focus,
        .form-textarea:focus {
          border-color: #f97316;
        }
        .form-submit {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: #f97316;
          color: #ffffff;
          border: 2px solid #f97316;
          padding: 14px 32px;
          box-shadow: 4px 4px 0 #0a0a0a;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.15s;
          cursor: pointer;
        }
        .form-submit:hover {
          transform: translate(-3px, -3px);
          box-shadow: 7px 7px 0 #0a0a0a;
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
          Get in Touch
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
            marginBottom: "60px",
          }}
        >
          Contact
        </h2>

        {/* Contact Grid */}
        <div
          ref={scrollRef()}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
          }}
        >
          {/* Left Side - Contact Links */}
          <div className="contact-left">
            <p
              style={{
                fontSize: "14px",
                color: "#555555",
                maxWidth: "560px",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Have a project, role, or collaboration in mind? I'd love to hear
              from you. Whether you're a startup, an agency, or a solo founder —
              let's talk.
            </p>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              {contactLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="contact-link-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-link-icon">{link.icon}</div>
                  <div>
                    <span
                      style={{
                        fontSize: "10px",
                        color: "#999999",
                        letterSpacing: "0.08em",
                        display: "block",
                      }}
                    >
                      {link.label}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "#0a0a0a",
                      }}
                    >
                      {link.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="contact-form"
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "14px",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#999999",
                  }}
                >
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="form-input"
                  style={{ borderRadius: "0" }}
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "6px" }}
              >
                <label
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "#999999",
                  }}
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="form-input"
                  style={{ borderRadius: "0" }}
                />
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#999999",
                }}
              >
                SUBJECT
              </label>
              <input
                type="text"
                placeholder="Project inquiry / Role / Collab"
                required
                className="form-input"
                style={{ borderRadius: "0" }}
              />
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              <label
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  color: "#999999",
                }}
              >
                MESSAGE
              </label>
              <textarea
                placeholder="Tell me what you're building..."
                required
                className="form-textarea"
                style={{
                  borderRadius: "0",
                  minHeight: "120px",
                  resize: "none",
                }}
              />
            </div>

            <button type="submit" className="form-submit">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
