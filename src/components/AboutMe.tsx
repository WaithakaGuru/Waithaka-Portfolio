import { useState } from "react";
import { EducationCarousel } from "./EducationCarousel";
import TechMarquee from "./TechStack";

export function AboutMe() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section
      id="about"
      className="snap-section section-bg-a relative page-margin pt-28 pb-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
        {/* ── Left: bio ── */}
        <div>
          <div
            className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: "var(--text-sub)" }}
          >
            Little About Me
          </div>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(30px, 4vw, 46px)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            Still early, already shipping what I build.
          </h2>

          <p
            className="mt-6 text-base leading-relaxed max-w-md"
            style={{ color: "var(--text-sub)" }}
          >
            I'm a full stack developer based in Nairobi &mdash; founder of{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              Kiru Tech
            </span>
            , where I build AI automations and MVPs for people who need
            something shipped, not just demoed. Outside of client work, I go
            deep on systems programming and database internals for the sake of
            understanding how the tools I use every day actually work.
          </p>

          <div
            className="grid transition-[grid-template-rows] duration-300 ease-out"
            style={{ gridTemplateRows: expanded ? "1fr" : "0fr" }}
          >
            <div className="overflow-hidden">
              <p
                className="mt-4 text-base leading-relaxed max-w-md"
                style={{ color: "var(--text-sub)" }}
              >
                Right now that means building an LSM-tree key-value storage
                engine in Go from scratch &mdash; the same design underneath
                RocksDB and LevelDB &mdash; as a way to actually earn an
                understanding of write-ahead logs, memtables, SSTable
                compaction, and bloom filters instead of just reading about
                them. I finish my BSc in Software Engineering at Murang'a
                University of Technology in August 2026.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              data-cursor="pointer"
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              {expanded ? "Show less" : "More about me"}
            </button>
            <button
              data-cursor="pointer"
              onClick={() =>
                document
                  .getElementById("education-certs")
                  ?.scrollIntoView({ behavior: "smooth", block: "center" })
              }
              className="px-5 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest border"
              style={{
                borderColor: "var(--border-lt)",
                color: "var(--text-sub)",
              }}
            >
              Education & certs
            </button>
          </div>
        </div>

        {/* ── Right: tech grid ── */}
        <div>
          <div
            className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-8 text-center lg:text-left"
            style={{ color: "var(--text-sub)" }}
          >
            Tech I Work With
          </div>
          <TechMarquee />
        </div>
      </div>

      {/* ── Education & Certifications subsection ── */}
      <div id="education-certs" className="max-w-6xl mx-auto mt-24">
        <div
          className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
          style={{ color: "var(--text-sub)" }}
        >
          Education & Certifications
        </div>
        <h3
          className="font-display font-bold"
          style={{ fontSize: "clamp(24px, 3vw, 36px)", color: "var(--text)" }}
        >
          Always still learning.
        </h3>
        <EducationCarousel />
      </div>
    </section>
  );
}
