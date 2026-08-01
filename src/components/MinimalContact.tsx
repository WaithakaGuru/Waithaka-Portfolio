import { useState } from "react";
import {
  FiCopy,
  FiCheck,
  FiMail,
  FiLinkedin,
  FiGithub,
  FiInstagram,
} from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";
import { useContact } from "../contexts";

const services = [
  "Full Stack Engineering",
  "API Architecture",
  "M-Pesa Integrations",
  "DevRel / Mentoring",
  "Consultancy",
];

export function MinimalContact() {
  const [copied, setCopied] = useState(false);
  const { wa, em, gh, li, ig } = useContact();

  const copy = () => {
    navigator.clipboard.writeText(em.link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const socials = [
    { label: "LinkedIn", icon: <FiLinkedin size={16} />, href: li.link },
    { label: "GitHub", icon: <FiGithub size={16} />, href: gh.link },
    { label: "Instagram", icon: <FiInstagram size={16} />, href: ig.link },
    { label: "WhatsApp", icon: <SiWhatsapp size={15} />, href: wa.link },
  ];

  return (
    <section
      id="contact"
      className="snap-section section-bg-b relative page-margin py-20 md:py-28 flex flex-col items-center text-center overflow-hidden"
    >
      {/* Ambient glow — tied to the brand accent so it stays on-theme in light/dark */}
      <div
        aria-hidden
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "var(--accent)", opacity: 0.14 }}
      />
      {/* Eyebrow — matches the rest of the site's section labels */}
      <div
        className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
        style={{ color: "var(--text-sub)" }}
      >
        Contact
      </div>
      {/* Availability pill */}
      <div
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 backdrop-blur-sm"
        style={{
          border: "1px solid var(--border-lt)",
          background: "var(--card-bg)",
        }}
      >
        <span
          aria-hidden
          className="w-2 h-2 rounded-full shrink-0 animate-pulse"
          style={{ background: "var(--accent)" }}
        />
        <span
          className="text-sm font-medium tracking-wide"
          style={{ color: "var(--text)" }}
        >
          Open to full-time roles, contracts, and interesting side quests.
        </span>
      </div>
      {/* Services tags */}
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mb-12 px-4">
        {services.map((service) => (
          <span
            key={service}
            className="text-xs font-mono-brand px-4 py-2 rounded-md border transition-transform duration-300 hover:scale-105"
            style={{
              background: "var(--bg)",
              borderColor: "var(--border-lt)",
              color: "var(--text)",
            }}
          >
            {service}
          </span>
        ))}
      </div>
      {/* Headline */}
      <h2
        className="font-display font-bold max-w-4xl px-4 tracking-tight leading-[1.1] mb-12"
        style={{
          fontSize: "clamp(36px, 6vw, 72px)",
          color: "var(--text)",
        }}
      >
        Let's build something{" "}
        <span className="italic font-serif font-normal bg-linear-to-r from-(--accent) via-(--accent-soft) to-(--accent) bg-clip-text text-transparent px-2  animate-gradient-x">
          thoughtful
        </span>
        together.
      </h2>
      {/* Action CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16 z-10">
        <button
          data-cursor="pointer"
          onClick={copy}
          aria-label="Copy email address to clipboard"
          className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-mono-brand text-xs font-bold border transition-colors duration-300"
          style={{
            background: "var(--card-bg)",
            borderColor: "var(--border-lt)",
            color: "var(--text)",
          }}
        >
          <span className="opacity-80 group-hover:opacity-100 transition-opacity">
            {em.link}
          </span>
          {copied ? (
            <FiCheck size={14} style={{ color: "var(--accent)" }} />
          ) : (
            <FiCopy
              size={14}
              className="opacity-60 group-hover:opacity-100 transition-opacity"
            />
          )}
          <span
            role="status"
            aria-live="polite"
            className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-mono-brand px-2.5 py-1 rounded-md shadow-md transition-all duration-200"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
              opacity: copied ? 1 : 0,
              transform: copied ? "translate(-50%, 0)" : "translate(-50%, 4px)",
            }}
          >
            Copied!
          </span>
        </button>

        <a
          data-cursor="pointer"
          href={`mailto:${em.link}`}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          style={{ background: "var(--text)", color: "var(--bg)" }}
        >
          <FiMail size={16} /> Let's talk
        </a>
      </div>
      {/* Social strip */}
      <div className="flex flex-col items-center gap-4">
        <span
          className="font-mono-brand text-[10px] tracking-[0.25em] uppercase"
          style={{ color: "var(--text-sub)", opacity: 0.7 }}
        >
          Also find me on
        </span>
        <div className="flex items-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.label}
              data-cursor="pointer"
              className="w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border-lt)",
                background: "var(--card-bg)",
                color: "var(--text-sub)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--accent)";
                e.currentTarget.style.borderColor = "var(--accent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--text-sub)";
                e.currentTarget.style.borderColor = "var(--border-lt)";
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
