import { useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const SOCIAL_LINKS = [
  {
    icon: "@",
    label: "EMAIL",
    value: "waithakaoffices@gmail.com",
    href: "mailto:waithakaoffices@gmail.com",
    bg: "var(--yellow)",
    color: "#1A1A1A",
  },
  {
    icon: "in",
    label: "LINKEDIN",
    value: "linkedin.com/in/waithaka",
    href: "https://www.linkedin.com/in/waithaka-ndung-u-b2b80a255",
    bg: "var(--blue)",
    color: "#fff",
  },
  {
    icon: "GH",
    label: "GITHUB",
    value: "github.com/WaithakaGuru",
    href: "https://github.com/WaithakaGuru",
    bg: "var(--text)",
    color: "var(--bg)",
  },
  {
    icon: "PH",
    label: "PHONE",
    value: "0725676491",
    href: "https://github.com/WaithakaGuru",
    bg: "var(--text)",
    color: "var(--bg)",
  },
];

export function Contact() {
  const reveal = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const inputStyle = {
    background: "var(--bg)",
    border: "2px solid var(--border)",
    color: "var(--text)",
    outline: "none",
  } as React.CSSProperties;

  return (
    <section
      id="contact"
      className="relative z-10 pt-10 pb-20"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-360">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#999_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-size-[40px_40px] opacity-30 pointer-events-none" />
        <div className="flex items-center gap-4 mb-14 bg-(--bg) w-dvw px-8 z-1000 sticky top-0 border-b-2 border-(--border) py-4">
          <h2 className="font-bebas text-[clamp(30px,4vw,44px)] leading-none tracking-[0.04em] whitespace-nowrap">
            <span style={{ color: "var(--text)" }}>GET_IN</span>
            <span style={{ color: "var(--accent)" }}>_TOUCH</span>
          </h2>
          <div
            className="flex-1 h-0.5"
            style={{ background: "var(--border)" }}
          />
          <span
            className="font-['JetBrains_Mono'] text-[10px] tracking-widest px-3 py-1 whitespace-nowrap"
            style={{
              color: "var(--text-muted)",
              border: "1px solid var(--border-lt)",
            }}
          >
            LET'S WORK TOGETHER
          </span>
        </div>

        {/* Main card */}
        <div ref={reveal(0)} className="relative px-10">
          {/* Floating banner */}
          <div
            className="absolute -top-5 -left-4 z-10 font-['JetBrains_Mono'] font-extrabold text-[13px] tracking-[0.08em] uppercase px-5 py-2 -rotate-2 whitespace-nowrap"
            style={{
              background: "var(--yellow)",
              border: "2px solid var(--border)",
              boxShadow: "var(--shadow)",
              color: "#1A1A1A",
            }}
          >
            START A PROJECT
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-5 gap-0"
            style={{
              border: "2px solid var(--border)",
              boxShadow: "var(--shadow-h)",
              background: "var(--surface)",
            }}
          >
            {/* LEFT: info */}
            <div
              className="md:col-span-2 flex flex-col gap-6 p-8"
              style={{ borderRight: "2px solid var(--border-lt)" }}
            >
              <div>
                <h3
                  className="font-bebas text-[clamp(32px,4vw,52px)] leading-none tracking-[0.02em] mb-2"
                  style={{ color: "var(--text)" }}
                >
                  LET'S CREATE MAGIC
                </h3>
                <p
                  className="font-newsreader text-[14px] leading-[1.7]"
                  style={{ color: "var(--text-sub)" }}
                >
                  Have a project in mind? Let's work together to create
                  something amazing.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={
                      link.href.startsWith("mailto") ? undefined : "_blank"
                    }
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 no-underline group transition-all duration-150"
                  >
                    <div
                      className="w-10 h-10 shrink-0 flex items-center justify-center font-['JetBrains_Mono'] font-extrabold text-[12px] transition-all duration-150 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                      style={{
                        background: link.bg,
                        border: "2px solid var(--border)",
                        boxShadow: "var(--shadow)",
                        color: link.color,
                      }}
                    >
                      {link.icon}
                    </div>
                    <div>
                      <div
                        className="font-['JetBrains_Mono'] text-[9px] tracking-[0.12em] uppercase"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {link.label}
                      </div>
                      <div
                        className="font-['JetBrains_Mono'] font-bold text-[12px] group-hover:underline"
                        style={{ color: "var(--text-sub)" }}
                      >
                        {link.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div
                className="p-4 mt-auto"
                style={{
                  background: "var(--yellow)",
                  border: "2px solid var(--border)",
                  boxShadow: "var(--shadow)",
                }}
              >
                <div
                  className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.08em] uppercase mb-2"
                  style={{ color: "#1A1A1A" }}
                >
                  💡 FUN FACT
                </div>
                <p
                  className="font-newsreader text-[13px] leading-[1.65]"
                  style={{ color: "#1A1A1A" }}
                >
                  I've written over 100,000 lines of code and consumed
                  approximately 2,847 cups of coffee in the process.
                </p>
              </div>
            </div>

            {/* RIGHT: form */}
            <form
              onSubmit={handleSubmit}
              className="md:col-span-3 flex flex-col gap-5 p-8"
            >
              <h3
                className="font-['JetBrains_Mono'] font-extrabold text-[18px] tracking-[0.04em] mb-1"
                style={{ color: "var(--text)" }}
              >
                CHAT ME UP
              </h3>

              {(["name", "email", "message"] as const).map((field) => (
                <div key={field} className="flex flex-col gap-2">
                  <label
                    className="font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.12em] uppercase"
                    style={{ color: "var(--text-sub)" }}
                  >
                    {field.toUpperCase()}
                  </label>
                  {field === "message" ? (
                    <textarea
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="font-newsreader text-[14px] px-4 py-3 resize-none transition-all duration-150"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.boxShadow = "var(--shadow)";
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  ) : (
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={formData[field]}
                      onChange={(e) =>
                        setFormData({ ...formData, [field]: e.target.value })
                      }
                      placeholder={
                        field === "email" ? "your@email.com" : "Your name"
                      }
                      required
                      className="font-['JetBrains_Mono'] text-[13px] px-4 py-3 transition-all duration-150"
                      style={inputStyle}
                      onFocus={(e) => {
                        e.target.style.boxShadow = "var(--shadow)";
                      }}
                      onBlur={(e) => {
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  )}
                </div>
              ))}

              <button
                type="submit"
                className="w-full font-['JetBrains_Mono'] font-extrabold text-[13px] tracking-widest uppercase
                 py-4 cursor-pointer transition-all duration-150 hover:-translate-x-0.75 hover:-translate-y-0.75"
                style={{
                  background: submitted ? "var(--green)" : "var(--text)",
                  color: submitted ? "#fff" : "var(--bg)",
                  border: "2px solid var(--border)",
                  boxShadow: submitted ? "var(--shadow)" : "var(--shadow-h)",
                }}
              >
                {submitted ? "✓ MESSAGE SENT!" : "SEND MESSAGE →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
