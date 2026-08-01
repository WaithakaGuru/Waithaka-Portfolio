export function ImagePlaceholder({
  label,
  aspect = "16/9",
}: {
  label: string;
  aspect?: string;
}) {
  return (
    <div
      className="w-full flex items-center justify-center rounded-2xl text-center px-6"
      style={{
        aspectRatio: aspect,
        background: "var(--accent-soft)",
        border: "1px dashed var(--border-lt)",
        color: "var(--text-sub)",
        objectFit: "cover",
      }}
    >
      <span className="font-mono-brand text-xs">{label}</span>
    </div>
  );
}
