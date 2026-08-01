import { FiGithub, FiExternalLink } from "react-icons/fi";
import type { CaseStudy } from "../data/projectCasesStudies";
import { HeaderNav } from "./global/HeaderNav";
import { ResponsiveImage } from "./global/ResponsiveImage";

/** Placeholder used wherever a real screenshot hasn't been dropped in yet. */

const TLDR_ROWS: { key: keyof CaseStudy["tldr"]; label: string }[] = [
  { key: "context", label: "Context" },
  { key: "problem", label: "Problem" },
  { key: "role", label: "My Role" },
  { key: "outcome", label: "Outcome" },
];

interface ProjectCaseStudyProps {
  study: CaseStudy;
  onBack: () => void;
}

export function ProjectCaseStudy({ study, onBack }: ProjectCaseStudyProps) {
  return (
    <div
      style={{
        background: "var(--section-a)",
        color: "var(--text)",
        minHeight: "100dvh",
      }}
    >
      {/* ── Simple topbar: back / name / theme bulb — same pattern as the resume page ── */}
      <HeaderNav onBack={onBack} />
      {/* ── Hero cover ── */}
      <div className="page-margin pt-10">
        <div className="max-w-6xl mx-auto">
          <ResponsiveImage
            src={study.coverImage}
            alt={study.title}
            variant="coverImage"
            aspectRatio="21/9"
            placeholder="var(--card-bg)"
            placeholderLabel={`Cover image needed — ${study.coverImage}`}
            priority
            className="rounded-2xl"
          />
        </div>
      </div>
      <div className="page-margin pb-24">
        <div className="max-w-6xl mx-auto">
          {/* ── Title + meta row ── */}
          <div className="mt-10 max-w-3xl">
            {study.logo && (
              <div
                className="font-mono-brand text-xs mb-3"
                style={{ color: "var(--text-muted)" }}
              >
                logo needed — {study.logo}
              </div>
            )}
            <h1
              className="font-display font-bold"
              style={{
                fontSize: "clamp(28px, 4vw, 44px)",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
              }}
            >
              {study.title}
            </h1>
            <p className="mt-3 text-base" style={{ color: "var(--text-sub)" }}>
              {study.tagline}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
            {[
              { label: "Scope", value: study.scope.join(" · ") },
              { label: "Role", value: study.role },
              { label: "Duration", value: study.duration },
              { label: "Contributors", value: study.contributors },
            ].map((m) => (
              <div key={m.label}>
                <div
                  className="font-mono-brand text-[11px] uppercase tracking-wider"
                  style={{ color: "var(--text-muted)" }}
                >
                  {m.label}
                </div>
                <div
                  className="text-sm font-bold mt-1"
                  style={{ color: "var(--text)" }}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              data-cursor="pointer"
              href={study.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
              style={{
                border: "1px solid var(--border-lt)",
                color: "var(--text)",
              }}
            >
              <FiGithub size={14} /> Code
            </a>
            {study.live && (
              <a
                data-cursor="pointer"
                href={study.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                <FiExternalLink size={14} /> Live
              </a>
            )}
          </div>

          {/* ── TL;DR ── */}
          <div className="mt-16">
            <div
              className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
              style={{ color: "var(--text-sub)" }}
            >
              TL;DR
            </div>
            <div
              className="rounded-2xl overflow-hidden"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-lt)",
              }}
            >
              {TLDR_ROWS.map((row, i) => (
                <div
                  key={row.key}
                  className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 px-6 md:px-8 py-6"
                  style={{
                    borderTop: i > 0 ? "1px solid var(--border-lt)" : "none",
                  }}
                >
                  <div
                    className="font-mono-brand text-xs uppercase tracking-wider"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {row.label}
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--text-sub)" }}
                  >
                    {study.tldr[row.key]}
                  </p>
                </div>
              ))}

              {study.stats.length > 0 && (
                <div
                  className="grid gap-px"
                  style={{
                    gridTemplateColumns: `repeat(${study.stats.length}, 1fr)`,
                    borderTop: "1px solid var(--border-lt)",
                    background: "var(--border-lt)",
                  }}
                >
                  {study.stats.map((s) => (
                    <div
                      key={s.label}
                      className="px-6 py-6"
                      style={{ background: "var(--card-bg)" }}
                    >
                      <div
                        className="font-display font-bold"
                        style={{ fontSize: "28px", color: "var(--text)" }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-xs mt-1"
                        style={{ color: "var(--text-sub)" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── Features ── */}
          <div className="mt-16">
            <div
              className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
              style={{ color: "var(--text-sub)" }}
            >
              What it does
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
              {study.features.map((f) => (
                <li
                  key={f}
                  className="text-sm leading-relaxed flex gap-2"
                  style={{ color: "var(--text-sub)" }}
                >
                  <span style={{ color: "var(--accent)" }}>•</span> {f}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Gallery ── */}
          {study.gallery.length > 0 && (
            <div className="mt-16">
              <div
                className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
                style={{ color: "var(--text-sub)" }}
              >
                A look inside
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {study.gallery.map((g) => (
                  <div key={g.src}>
                    <ResponsiveImage
                      src={g.src}
                      alt={g.caption}
                      variant="gallerySnapshot"
                      placeholder="var(--card-bg)"
                      placeholderLabel={`Screenshot needed — ${g.src}`}
                      className="rounded-xl"
                    />
                    <p
                      className="mt-2 text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {g.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ── Tech stack ── */}
          <div className="mt-16">
            <div
              className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-6"
              style={{ color: "var(--text-sub)" }}
            >
              Built with
            </div>
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((t) => (
                <span
                  key={t}
                  className="font-mono-brand text-xs px-3 py-1.5 rounded-full"
                  style={{
                    border: "1px solid var(--border-lt)",
                    color: "var(--text-sub)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
