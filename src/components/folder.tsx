import { useMemo, useState, type ReactNode } from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: ReactNode[];
  className?: string;
}

function darkenColor(hex: string, percent: number): string {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((character) => character + character)
      .join("");
  }

  const numeric = Number.parseInt(color, 16);
  const red = Math.max(0, Math.min(255, Math.floor(((numeric >> 16) & 0xff) * (1 - percent))));
  const green = Math.max(0, Math.min(255, Math.floor(((numeric >> 8) & 0xff) * (1 - percent))));
  const blue = Math.max(0, Math.min(255, Math.floor((numeric & 0xff) * (1 - percent))));

  return `#${((1 << 24) + (red << 16) + (green << 8) + blue).toString(16).slice(1).toUpperCase()}`;
}

export default function Folder({
  color = "#BA8FE0",
  size = 1,
  items = [],
  className = "",
}: FolderProps) {
  const [open, setOpen] = useState(false);
  const [paperOffsets, setPaperOffsets] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);

  const papers = useMemo(() => {
    const next = items.slice(0, 3);
    while (next.length < 3) next.push(null);
    return next;
  }, [items]);

  const folderBackColor = darkenColor(color, 0.08);
  const paperColors = [darkenColor("#ffffff", 0.1), darkenColor("#ffffff", 0.05), "#ffffff"];

  const handleClick = () => {
    setOpen((current) => !current);
    if (open) {
      setPaperOffsets([{ x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }]);
    }
  };

  const folderStyle: React.CSSProperties = {
    transform: `scale(${size})`,
    transformOrigin: "top left",
  };

  const paperLayout = [
    { width: 118, height: 90, left: "50%", bottom: 16, transform: "translate(-120%, -70%) rotate(-15deg)" },
    { width: 126, height: 86, left: "50%", bottom: 12, transform: "translate(8%, -70%) rotate(15deg)" },
    { width: 134, height: 82, left: "50%", bottom: 18, transform: "translate(-50%, -100%) rotate(5deg)" },
  ];

  return (
    <div className={className} style={folderStyle}>
      <button
        type="button"
        onClick={handleClick}
        aria-expanded={open}
        aria-label={open ? "Close folder" : "Open folder"}
        className="relative cursor-pointer select-none focus:outline-none"
        style={{ width: 166, height: 132, background: "transparent", border: "none", padding: 0 }}
      >
        <div
          className="absolute inset-0 rounded-[22px] transition-transform duration-200"
          style={{
            background: color,
            clipPath: "polygon(0 14%, 19% 14%, 26% 0, 100% 0, 100% 100%, 0 100%)",
            boxShadow: "0 16px 28px rgba(18,24,31,0.10)",
            transform: open ? "translateY(-4px)" : "translateY(0)",
          }}
        />
        <div
          className="absolute left-4 top-0 rounded-t-[16px]"
          style={{
            width: 72,
            height: 42,
            background: darkenColor(color, 0.06),
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
          }}
        />
        <div
          className="absolute left-5 top-3 rounded-full"
          style={{ width: 40, height: 6, background: "rgba(255,255,255,0.28)" }}
        />

        {papers.map((item, index) => {
          const layout = paperLayout[index];
          const isOpen = open;
          const translate = isOpen
            ? `${layout.transform} translate(${paperOffsets[index].x}px, ${paperOffsets[index].y}px)`
            : "translate(-50%, 10%)";

          return (
            <div
              key={index}
              className="absolute z-10 rounded-[11px] border border-[rgba(18,24,31,0.10)] shadow-[0_10px_18px_rgba(18,24,31,0.08)] transition-all duration-300"
              style={{
                left: layout.left,
                bottom: layout.bottom,
                width: layout.width,
                height: layout.height,
                transform: isOpen ? translate : "translate(-50%, 10%)",
                backgroundColor: paperColors[index],
                opacity: isOpen ? 1 : 0.94,
              }}
              onMouseMove={(event) => {
                if (!isOpen) return;
                const rect = event.currentTarget.getBoundingClientRect();
                const offsetX = (event.clientX - (rect.left + rect.width / 2)) * 0.12;
                const offsetY = (event.clientY - (rect.top + rect.height / 2)) * 0.12;
                setPaperOffsets((current) => {
                  const next = [...current];
                  next[index] = { x: offsetX, y: offsetY };
                  return next;
                });
              }}
              onMouseLeave={() => {
                setPaperOffsets((current) => {
                  const next = [...current];
                  next[index] = { x: 0, y: 0 };
                  return next;
                });
              }}
            >
              <div className="h-full w-full rounded-[11px] p-2">
                {item}
              </div>
            </div>
          );
        })}
      </button>

      <div className="pointer-events-none" style={{ width: 166, height: 132, marginTop: 0, position: "relative" }}>
        <div
          className="absolute inset-x-0 bottom-0 rounded-[22px]"
          style={{
            height: 82,
            background: `linear-gradient(180deg, ${darkenColor(color, 0.02)} 0%, ${folderBackColor} 100%)`,
            boxShadow: "0 14px 26px rgba(18,24,31,0.10)",
          }}
        />
      </div>
    </div>
  );
}
