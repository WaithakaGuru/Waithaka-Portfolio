import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [clock, setClock] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setClock(
        `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}` +
          ` ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`,
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const contactLinks = [
    {
      label: "EMAIL",
      value: "waithakaoffices@gmail.com",
      href: "mailto:waithakaoffices@gmail.com",
      icon: "email",
    },
    {
      label: "PHONE",
      value: "0725676491",
      href: "tel:+254725676491",
      icon: "phone",
    },
    {
      label: "GITHUB",
      value: "github.com/waithaka",
      href: "https://github.com/waithaka",
      icon: "github",
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/waithaka",
      href: "https://linkedin.com/in/waithaka",
      icon: "linkedin",
    },
    {
      label: "X/TWITTER",
      value: "@waithaka_dev",
      href: "https://twitter.com/waithaka_dev",
      icon: "twitter",
    },
  ];

  const renderIcon = (iconType: string) => {
    const iconSize = 20;
    const iconColor = "#0a0a0a";
    switch (iconType) {
      case "email":
        return <MdEmail size={iconSize} color={iconColor} />;
      case "phone":
        return <FaPhone size={iconSize} color={iconColor} />;
      case "github":
        return <FaGithub size={iconSize} color={iconColor} />;
      case "linkedin":
        return <FaLinkedin size={iconSize} color={iconColor} />;
      case "twitter":
        return <FaXTwitter size={iconSize} color={iconColor} />;
      default:
        return null;
    }
  };

  return (
    <footer
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid #e0e0e0",
      }}
      className="py-20 px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Top section - Contact info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 mb-20 pb-20 border-b border-[#e0e0e0]">
          {/* Left - Text */}
          <div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.12em",
                color: "#999999",
                marginBottom: "16px",
              }}
            >
              GET IN TOUCH
            </div>
            <h3
              style={{
                fontFamily: "Syne, sans-serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.01em",
                color: "#ffffff",
                marginBottom: "16px",
              }}
            >
              Have a project in mind?
            </h3>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#999999",
              }}
            >
              Let's build something great together. I'm available for freelance
              work, consulting, and full-time opportunities.
            </p>
          </div>

          {/* Right - Contact links */}
          <div>
            <div className="space-y-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px",
                    background: "#ffffff",
                    border: "2px solid #e0e0e0",
                    boxShadow: "4px 4px 0 #ffffff",
                    color: "#0a0a0a",
                    textDecoration: "none",
                    transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "6px 6px 0 #ffffff";
                    e.currentTarget.style.transform = "translate(-2px, -2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "4px 4px 0 #ffffff";
                    e.currentTarget.style.transform = "translate(0, 0)";
                  }}
                >
                  <span style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {renderIcon(link.icon)}
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "10px",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        color: "#f97316",
                      }}
                    >
                      {link.label}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#0a0a0a",
                      }}
                    >
                      {link.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {/* Logo & copyright */}
          <div>
            <div
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "14px",
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: "8px",
              }}
            >
              WAITHAKA<span style={{ color: "#f97316" }}>.dev</span>
            </div>
            <p
              style={{
                fontSize: "11px",
                color: "#666666",
                letterSpacing: "0.04em",
              }}
            >
              © {currentYear} Waithaka Ndung'u. All rights reserved.
            </p>
          </div>

          {/* Digital clock */}
          <div
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: "12px",
              color: "#999999",
              letterSpacing: "0.04em",
            }}
          >
            {clock || "Loading..."}
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "8px" }}>
            {[
              {
                Icon: FaGithub,
                href: "https://github.com/waithaka",
                label: "GitHub",
              },
              {
                Icon: FaLinkedin,
                href: "https://linkedin.com/in/waithaka",
                label: "LinkedIn",
              },
              {
                Icon: FaXTwitter,
                href: "https://twitter.com/waithaka_dev",
                label: "X",
              },
              {
                Icon: MdEmail,
                href: "mailto:waithakaoffices@gmail.com",
                label: "Email",
              },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #e0e0e0",
                  background: "#ffffff",
                  color: "#0a0a0a",
                  textDecoration: "none",
                  transition: "all 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#f97316";
                  e.currentTarget.style.background = "#f97316";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e0e0e0";
                  e.currentTarget.style.background = "#ffffff";
                  e.currentTarget.style.color = "#0a0a0a";
                }}
                title={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
