import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getTechIcon } from "../../utils/techIcons";

interface FolderProps {
  color?: string;
  size?: number;
  items?: React.ReactNode[];
  className?: string;
}

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith("#") ? hex.slice(1) : hex;
  if (color.length === 3) {
    color = color
      .split("")
      .map((c) => c + c)
      .join("");
  }
  const num = parseInt(color.slice(0, 6), 16);
  let r = (num >> 16) & 0xff;
  let g = (num >> 8) & 0xff;
  let b = num & 0xff;
  r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
  g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
  b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()
  );
};

const Folder: React.FC<FolderProps> = ({
  color = "#38BDF8",
  size = 1,
  items = [],
  className = "",
}): React.ReactElement => {
  const maxItems = 3;
  const papers = items.slice(0, maxItems);
  while (papers.length < maxItems) {
    papers.push(null);
  }

  const [triggers, setTriggers] = useState<Record<
    "open" | "isHovering",
    boolean
  > | null>({ open: false, isHovering: false });
  const [paperOffsets, setPaperOffsets] = useState<{ x: number; y: number }[]>(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })),
  );

  const folderBackColor = darkenColor(color, 0.08);
  const paper1 = darkenColor("#ffffff", 0.1);
  const paper2 = darkenColor("#ffffff", 0.05);
  const paper3 = "#ffffff";

  const FEATURED_TECH = [
    "GOLANG",
    "TYPESCRIPT",
    "REACT",
    "POSTGRES",
    "PYTHON",
    "GIT",
  ];
  const FAN_RADIUS = 74;
  const FAN_START_ANGLE = 200; // degrees, arc opens upward
  const FAN_END_ANGLE = 340;

  // const handleClick = () => {
  //   setOpen((prev) => !prev);
  //   if (open) {
  //     setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })));
  //   }
  // };

  const handlePaperMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    if (!open) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = (e.clientX - centerX) * 0.15;
    const offsetY = (e.clientY - centerY) * 0.15;
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: offsetX, y: offsetY };
      return newOffsets;
    });
  };

  const handlePaperMouseLeave = (index: number) => {
    setPaperOffsets((prev) => {
      const newOffsets = [...prev];
      newOffsets[index] = { x: 0, y: 0 };
      return newOffsets;
    });
  };

  const folderStyle: React.CSSProperties = {
    "--folder-color": color,
    "--folder-back-color": folderBackColor,
    "--paper-1": paper1,
    "--paper-2": paper2,
    "--paper-3": paper3,
  } as React.CSSProperties;

  const scaleStyle = { transform: `scale(${size})` };

  const getOpenTransform = (index: number) => {
    if (index === 0) return "translate(-120%, -70%) rotate(-15deg)";
    if (index === 1) return "translate(10%, -70%) rotate(15deg)";
    if (index === 2) return "translate(-50%, -100%) rotate(5deg)";
    return "";
  };

  return (
    <div style={scaleStyle} className={className}>
      <div
        className={`group relative transition-all duration-200 ease-in cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 ${
          triggers?.open ? "hover:-translate-y-2" : ""
        }`}
        style={{
          ...folderStyle,
          transform: triggers?.open ? "translateY(-8px)" : undefined,
        }}
        // onClick={handleClick}
        // onKeyDown={(e) => {
        //   if (e.key === "Enter" || e.key === " ") {
        //     e.preventDefault();
        //     handleClick();
        //   }
        // }}
        onMouseEnter={() => setTriggers({ open: false, isHovering: true })}
        onMouseLeave={() => setTriggers({ open: false, isHovering: false })}
        tabIndex={0}
        role="button"
        aria-expanded={triggers?.open}
        aria-label={triggers?.open ? "Close folder" : "Open folder"}
      >
        <div
          className="relative w-25 h-20 rounded-tl-0 rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          {/* The papers in the Folder  */}
          <span
            className="absolute z-0 bottom-[98%] left-0 w-7.5 h-2.5 rounded-tl-[5px] rounded-tr-[5px] rounded-bl-0 rounded-br-0"
            style={{ backgroundColor: folderBackColor }}
          ></span>
          {papers.map((item, i) => {
            let sizeClasses = "";
            if (i === 0)
              sizeClasses = triggers?.open
                ? "w-[70%] h-[80%]"
                : "w-[70%] h-[80%]";
            if (i === 1)
              sizeClasses = triggers?.open
                ? "w-[80%] h-[80%]"
                : "w-[80%] h-[70%]";
            if (i === 2)
              sizeClasses = triggers?.open
                ? "w-[90%] h-[80%]"
                : "w-[90%] h-[60%]";

            const transformStyle = triggers?.open
              ? `${getOpenTransform(i)} translate(${paperOffsets[i].x}px, ${paperOffsets[i].y}px)`
              : undefined;

            return (
              <div
                key={i}
                onMouseMove={(e) => handlePaperMouseMove(e, i)}
                onMouseLeave={() => handlePaperMouseLeave(i)}
                className={`absolute z-20 bottom-[10%] left-1/2 transition-all duration-300 ease-in-out ${
                  !triggers?.open
                    ? "transform -translate-x-1/2 translate-y-[10%] group-hover:translate-y-0"
                    : "hover:scale-110"
                } ${sizeClasses}`}
                style={{
                  ...(!triggers?.open ? {} : { transform: transformStyle }),
                  backgroundColor: i === 0 ? paper1 : i === 1 ? paper2 : paper3,
                  borderRadius: "10px",
                }}
              >
                {item}
              </div>
            );
          })}

          {/* The folder  */}
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !triggers?.open
                ? "group-hover:transform-[skew(15deg)_scaleY(0.6)]"
                : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(triggers?.open && { transform: "skew(15deg) scaleY(0.6)" }),
            }}
          ></div>
          <div
            className={`absolute z-30 w-full h-full origin-bottom transition-all duration-300 ease-in-out ${
              !triggers?.open
                ? "group-hover:transform-[skew(-15deg)_scaleY(0.6)]"
                : ""
            }`}
            style={{
              backgroundColor: color,
              borderRadius: "5px 10px 10px 10px",
              ...(triggers?.open && { transform: "skew(-15deg) scaleY(0.6)" }),
            }}
          ></div>
        </div>
      </div>
      {/* the Tech Icons animation  */}
      <AnimatePresence>
        {triggers?.isHovering &&
          FEATURED_TECH.map((name, i) => {
            const t =
              FEATURED_TECH.length === 1 ? 0 : i / (FEATURED_TECH.length - 1);
            const angle =
              ((FAN_START_ANGLE + t * (FAN_END_ANGLE - FAN_START_ANGLE)) *
                Math.PI) /
              180;
            const x = Math.cos(angle) * FAN_RADIUS;
            const y = Math.sin(angle) * FAN_RADIUS;
            const config = getTechIcon(name);
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                animate={{ opacity: 1, x, y: y + 20, scale: 1 }}
                exit={{ opacity: 0, x: 0, y: 0, scale: 0.3 }}
                transition={{
                  duration: 0.28,
                  delay: i * 0.03,
                  ease: "easeOut",
                }}
                className="absolute left-1/2 top-2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center text-base pointer-events-none z-40"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-lt)",
                  boxShadow: "var(--shadow)",
                  color: config?.color ?? "var(--text)",
                }}
              >
                {config?.icon}
              </motion.div>
            );
          })}
      </AnimatePresence>
    </div>
  );
};

export default Folder;
