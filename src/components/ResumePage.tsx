import { useState } from "react";
import {
  FiCopy,
  FiDownload,
  FiGithub,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { experiences, education } from "../data";
import { HeaderNav } from "./global/HeaderNav";
import { SiWhatsapp } from "react-icons/si";
import { useContact } from "../contexts";
import { renderTechWithIcon } from "../utils/techIcons";

const EMAIL = "waithakaoffices@gmail.com";
const RESUME_PDF = "/docs/Waithaka Ndung'u Resume.pdf";

interface ResumePageProps {
  onBack: () => void;
}

function isImagePath(value: string): boolean {
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|avif)$/i;
  return imageExtensions.test(value);
}

export function ResumePage({ onBack }: ResumePageProps) {
  const [copied, setCopied] = useState(false);
  const { wa, ig, li, gh } = useContact();

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      style={{
        background: "var(--section-a)",
        color: "var(--text)",
        minHeight: "100dvh",
      }}
    >
      {/* ── Simple topbar: back / name / theme bulb ── */}
      <HeaderNav onBack={onBack} />

      <div className="relative">
        <div className="page-margin max-w-360 mx-auto grid grid-cols-1 md:grid-cols-[250px_1.2fr] gap-12 lg:gap-20">
          {/* ── Sidebar ── */}
          <aside className="md:sticky md:top-30 md:self-start flex flex-col items-start gap-5">
            <img
              src="/images/me-small.jpg"
              alt="Waithaka Ndung'u"
              className="w-42 h-42 rounded-full object-cover"
              style={{ border: "1px solid var(--border-lt)" }}
            />
            <div>
              <div
                className="font-display font-bold text-lg"
                style={{ color: "var(--text)" }}
              >
                Waithaka Ndung'u
              </div>
              <button
                data-cursor="pointer"
                onClick={copyEmail}
                className="mt-1 inline-flex items-center gap-1.5 font-mono-brand text-xs transition-opacity hover:opacity-70"
                style={{ color: "var(--text-sub)" }}
              >
                {EMAIL} <FiCopy size={12} />
              </button>
              {copied && (
                <div
                  className="mt-1 font-mono-brand text-[11px]"
                  style={{ color: "var(--accent)" }}
                >
                  copied!
                </div>
              )}
            </div>

            <a
              data-cursor="pointer"
              href={RESUME_PDF}
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              <FiDownload size={14} /> Download Resume
            </a>

            <div className="flex items-center gap-4 mt-2">
              {[
                {
                  icon: <FiGithub size={16} />,
                  href: gh.link,
                },
                {
                  icon: <FiLinkedin size={16} />,
                  href: li.link,
                },
                {
                  icon: <SiWhatsapp size={16} />,
                  href: wa.link,
                },
                {
                  icon: <FiInstagram size={16} />,
                  href: ig.link,
                },
              ].map((s, i) => (
                <a
                  data-cursor="pointer"
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-all p-2 hover:bg-(--bg) rounded-full border 
                  hover:scale-125 border-accent-soft"
                  style={{ color: "var(--text-sub)" }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </aside>

          {/* ── Content ── */}
          <div className="flex flex-col gap-16 px-6 border-l border-l-(--ticker-bg) py-14 bg-(--bg) ">
            <div>
              <h3
                className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
                style={{ color: "var(--text-sub)" }}
              >
                Experience
              </h3>
              <div className="flex flex-col gap-10">
                {experiences.map((exp) => (
                  <div key={exp.title}>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                          style={{ background: "var(--accent)" }}
                        />
                        <div>
                          <div
                            className="font-display font-bold"
                            style={{ fontSize: "17px", color: "var(--text)" }}
                          >
                            {exp.title}
                          </div>
                          <div
                            className="text-sm"
                            style={{ color: "var(--text-sub)" }}
                          >
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      <span
                        className="font-mono-brand text-xs shrink-0"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {exp.dateShort ?? exp.date}
                      </span>
                    </div>
                    <ul className="mt-3 ml-5 flex flex-col gap-1.5">
                      {exp.worked.map((w) => (
                        <li
                          key={w}
                          className="text-sm leading-relaxed flex gap-2"
                          style={{ color: "var(--text-sub)" }}
                        >
                          <span style={{ color: "var(--accent)" }}>·</span> {w}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3
                className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
                style={{ color: "var(--text-sub)" }}
              >
                Education
              </h3>
              <div className="flex flex-col gap-6">
                {education.map((ed) => (
                  <div key={ed.title} className="flex items-start gap-3">
                    {isImagePath(ed.logo) ? (
                      <div className="w-40 h-30 border border-(--text-muted) flex items-center justify-center overflow-hidden">
                        <img
                          className="w-full"
                          src={new URL(ed.logo, import.meta.url).href}
                          alt=""
                        />
                      </div>
                    ) : (
                      <span className="text-lg mt-0.5 shrink-0 w-40 h-30 border border-(--text-muted) flex items-center justify-center">
                        {ed.logo}
                      </span>
                    )}

                    <div>
                      <div
                        className="font-display font-bold"
                        style={{ fontSize: "16px", color: "var(--text)" }}
                      >
                        {ed.title}
                      </div>
                      <div
                        className="text-sm"
                        style={{ color: "var(--text-sub)" }}
                      >
                        {ed.institution}
                      </div>
                      <div
                        className="font-mono-brand text-xs mt-0.5"
                        style={{ color: "var(--text-muted)" }}
                      >
                        {ed.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/*  TechStack Icons and names  */}
            <div>
              <h3
                className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
                style={{ color: "var(--text-sub)" }}
              >
                Techstack
              </h3>
              <div className="flex gap-3 flex-wrap">
                {[
                  "React",
                  "typescript",
                  "python",
                  "golang",
                  "docker",
                  "kubernetes",
                  "prisma",
                  "git",
                  "postgres",
                  "node.js",
                  "stripe",
                ].map((iconName, i) => (
                  <span
                    key={i}
                    className="font-mono-brand text-xs px-3 py-1.5 rounded-full"
                    style={{
                      border: "1px solid var(--border-lt)",
                      color: "var(--text-sub)",
                    }}
                  >
                    {renderTechWithIcon(iconName, "14")}
                  </span>
                ))}
              </div>
            </div>
            {/* Languages I speak  */}
            <div>
              <h3
                className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
                style={{ color: "var(--text-sub)" }}
              >
                Languages
              </h3>
              <div className="flex gap-3 flex-wrap">
                {["English", "Swahili", "Kikuyu"].map((iconName, i) => (
                  <span
                    key={i}
                    className="font-mono-brand text-xs px-3 py-1.5 rounded-full"
                    style={{
                      border: "1px solid var(--border-lt)",
                      color: "var(--text-sub)",
                    }}
                  >
                    {renderTechWithIcon(iconName, "14")}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
