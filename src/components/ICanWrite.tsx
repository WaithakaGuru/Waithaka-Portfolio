import { FiArrowUpRight } from "react-icons/fi";
import { writings } from "../data";

export function ICanWrite() {
  return (
    <section id="write" className="snap-section section-bg-a relative page-margin pt-28 pb-20">
      <div className="max-w-6xl mx-auto">
        <div
          className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
          style={{ color: "var(--text-sub)" }}
        >
          I Can Write, Too
        </div>
        <h2
          className="font-display font-bold"
          style={{
            fontSize: "clamp(32px, 4.5vw, 56px)",
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            color: "var(--text)",
          }}
        >
          Notes from building things
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
          {writings.map((w) => (
            <a
              key={w.id}
              href={w.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="pointer"
              className={`group relative flex flex-col justify-between p-6 rounded-2xl transition-transform hover:-translate-y-1 ${
                w.featured ? "md:col-span-2" : ""
              }`}
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-lt)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className="font-mono-brand text-[11px] px-2 py-1 rounded-md"
                    style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
                  >
                    {w.platform}
                  </span>
                  <span className="font-mono-brand text-[11px]" style={{ color: "var(--text-muted)" }}>
                    {w.date}
                  </span>
                </div>
                <h3
                  className="font-display font-bold"
                  style={{ fontSize: "clamp(18px, 2vw, 24px)", color: "var(--text)" }}
                >
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--text-sub)" }}>
                  {w.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {w.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-brand text-[10px] px-2 py-1 rounded-full"
                      style={{ border: "1px solid var(--border-lt)", color: "var(--text-sub)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span
                  className="inline-flex items-center gap-1 font-mono-brand text-xs font-bold shrink-0"
                  style={{ color: "var(--accent)" }}
                >
                  Read <FiArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
