export function TerminalCard() {
  return (
    <div
      className="group w-75 rounded-2xl overflow-hidden font-mono-brand text-xs"
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
        <span className="ml-2 text-[11px]" style={{ color: "var(--text-sub)" }}>
          waithaka &mdash; zsh
        </span>
      </div>
      <div className="p-4 space-y-3" style={{ color: "var(--text)" }}>
        <div>
          <span style={{ color: "var(--accent)" }}>~ $</span> who_am_i
          <p className="mt-1" style={{ color: "var(--text-sub)" }}>
            Full Stack Engineer · Founder, Kiru Tech · Nairobi ·{" "}
            <strong>4+ years</strong>
          </p>
        </div>
        <div>
          <span style={{ color: "var(--accent)" }}>~ $</span> focus
          <p className="mt-1" style={{ color: "var(--text-sub)" }}>
            Go, systems programming, database internals
          </p>
        </div>
        {/* Hidden by default — hover the terminal to extend it and reveal this */}
        <div className="max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 overflow-hidden transition-all duration-300 ease-out">
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
  );
}
