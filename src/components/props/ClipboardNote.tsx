export function ClipboardNote() {
  return (
    <div
      className="w-45 rounded-lg overflow-hidden min-h-30"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border-lt)",
        boxShadow: "var(--shadow-h)",
      }}
    >
      <div className="flex justify-center -mb-3 relative z-10">
        <div
          className="w-14 h-5 rounded-sm"
          style={{ background: "var(--text)" }}
        />
      </div>
      <div
        className="px-3 pt-4 pb-4 font-hand text-[1.1rem] leading-snug"
        style={{ color: "var(--text)" }}
      >
        Ship it. <br />
        Ask why twice. <br />
        Fewer moving parts.
        <br />
        <strong className="text-orange-500">
          {new Date().getFullYear() - 2022}+ Years of experience
        </strong>
      </div>
    </div>
  );
}
