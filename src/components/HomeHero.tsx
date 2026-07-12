import { FiArrowDown, FiDownload } from "react-icons/fi";

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-6 sm:px-10 lg:px-24 pt-32 pb-20 flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center relative">
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 mb-6 font-mono-brand text-xs tracking-[0.18em] uppercase"
            style={{ color: "var(--text-sub)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ background: "var(--accent)" }}
            />
            Software Engineer · Nairobi, Kenya
          </div>

          <h1
            className="font-display font-bold tracking-tight"
            style={{
              fontSize: "clamp(40px, 6vw, 84px)",
              lineHeight: 0.98,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            I turn ideas into
            <br />
            software that <span style={{ color: "var(--accent)" }}>ships.</span>
          </h1>

          <p
            className="mt-6 max-w-md text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-sub)" }}
          >
            Full stack engineer and founder of{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              Kiru Tech
            </span>
            . I build AI automations, MVPs, and dig into the systems underneath
            &mdash; Go, databases, and the occasional weekend project that has
            no business being this deep.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("play")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              Play a round <FiArrowDown size={14} />
            </button>
            <a
              href="/Waithaka Ndung'u.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest border transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--border-lt)", color: "var(--text)" }}
            >
              <FiDownload size={14} /> Résumé
            </a>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center lg:items-end gap-6">
          <div
            className="hidden sm:block self-start lg:self-end -rotate-3 rounded-sm px-5 py-4 font-hand text-lg leading-snug"
            style={{
              background: "var(--accent-soft)",
              color: "var(--text)",
              boxShadow: "var(--shadow-h)",
              width: "190px",
            }}
          >
            Ship it. <br />
            Ask why twice. <br />
            Fewer moving parts.
          </div>

          <div
            className="w-full max-w-sm rounded-xl overflow-hidden font-mono-brand text-xs"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-lt)",
              boxShadow: "var(--shadow-h)",
            }}
          >
            <div
              className="flex items-center gap-1.5 px-4 py-2.5"
              style={{
                background: "var(--accent-soft)",
                borderBottom: "1px solid var(--border-lt)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span
                className="ml-2 text-[11px]"
                style={{ color: "var(--text-sub)" }}
              >
                waithaka &mdash; zsh
              </span>
            </div>
            <div className="p-4 space-y-3" style={{ color: "var(--text)" }}>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span> who_am_i
                <p className="mt-1" style={{ color: "var(--text-sub)" }}>
                  Full Stack Engineer · Founder, Kiru Tech · Nairobi
                </p>
              </div>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span> focus
                <p className="mt-1" style={{ color: "var(--text-sub)" }}>
                  Go, systems programming, database internals
                </p>
              </div>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span> currently
                <p className="mt-1" style={{ color: "var(--text-sub)" }}>
                  Building an LSM-tree storage engine, from scratch
                </p>
              </div>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span>{" "}
                <span className="blink">▍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { FiArrowDown, FiDownload } from "react-icons/fi";

export function HomeHero() {
  return (
    <section
      id="home"
      className="relative min-h-screen px-6 sm:px-10 lg:px-24 pt-32 pb-20 flex items-center overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center relative">
        {/* ── Left: text content ── */}
        <div className="relative z-10">
          <div
            className="inline-flex items-center gap-2 mb-6 font-mono-brand text-xs tracking-[0.18em] uppercase"
            style={{ color: "var(--text-sub)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-dot"
              style={{ background: "var(--accent)" }}
            />
            Software Engineer · Nairobi, Kenya
          </div>

          <h1
            className="font-display font-bold tracking-tight"
            style={{
              fontSize: "clamp(40px, 6vw, 84px)",
              lineHeight: 0.98,
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            I turn ideas into
            <br />
            software that <span style={{ color: "var(--accent)" }}>ships.</span>
          </h1>

          <p
            className="mt-6 max-w-md text-base sm:text-lg leading-relaxed"
            style={{ color: "var(--text-sub)" }}
          >
            Full stack engineer and founder of{" "}
            <span style={{ color: "var(--text)", fontWeight: 600 }}>
              Kiru Tech
            </span>
            . I build AI automations, MVPs, and dig into the systems underneath
            &mdash; Go, databases, and the occasional weekend project that has
            no business being this deep.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("play")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{
                background: "var(--text)",
                color: "var(--bg)",
              }}
            >
              Play a round <FiArrowDown size={14} />
            </button>
            <a
              href="/Waithaka Ndung'u.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest border transition-transform hover:-translate-y-0.5"
              style={{
                borderColor: "var(--border-lt)",
                color: "var(--text)",
              }}
            >
              <FiDownload size={14} /> Résumé
            </a>
          </div>
        </div>

        {/* ── Right: terminal card + props ── */}
        <div className="relative z-10 flex flex-col items-center lg:items-end gap-6">
          {/* Sticky note */}
          <div
            className="hidden sm:block self-start lg:self-end -rotate-3 rounded-sm px-5 py-4 font-hand text-lg leading-snug"
            style={{
              background: "var(--accent-soft)",
              color: "var(--text)",
              boxShadow: "var(--shadow-h)",
              width: "190px",
            }}
          >
            Ship it. <br />
            Ask why twice. <br />
            Fewer moving parts.
          </div>

          {/* Terminal window */}
          <div
            className="w-full max-w-sm rounded-xl overflow-hidden font-mono-brand text-xs"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-lt)",
              boxShadow: "var(--shadow-h)",
            }}
          >
            <div
              className="flex items-center gap-1.5 px-4 py-2.5"
              style={{
                background: "var(--accent-soft)",
                borderBottom: "1px solid var(--border-lt)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <span
                className="ml-2 text-[11px]"
                style={{ color: "var(--text-sub)" }}
              >
                waithaka &mdash; zsh
              </span>
            </div>
            <div className="p-4 space-y-3" style={{ color: "var(--text)" }}>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span> who_am_i
                <p className="mt-1" style={{ color: "var(--text-sub)" }}>
                  Full Stack Engineer · Founder, Kiru Tech · Nairobi
                </p>
              </div>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span> focus
                <p className="mt-1" style={{ color: "var(--text-sub)" }}>
                  Go, systems programming, database internals
                </p>
              </div>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span> currently
                <p className="mt-1" style={{ color: "var(--text-sub)" }}>
                  Building an LSM-tree storage engine, from scratch
                </p>
              </div>
              <div>
                <span style={{ color: "var(--accent)" }}>~ $</span>{" "}
                <span className="blink">▍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
