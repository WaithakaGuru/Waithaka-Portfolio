// import { useState, type ReactNode } from "react";

// interface TooltipProps {
//   label: string;
//   children: ReactNode;
//   side?: "top" | "bottom" | "left" | "right";
//   className?: string;
//   styling?: string;
// }

// const SIDE_STYLES: Record<string, React.CSSProperties> = {
//   top: {
//     bottom: "100%",
//     left: "50%",
//     transform: "translateX(-50%)",
//     marginBottom: 8,
//   },
//   bottom: {
//     top: "100%",
//     left: "50%",
//     transform: "translateX(-50%)",
//     marginTop: 8,
//   },
//   left: {
//     right: "100%",
//     top: "50%",
//     transform: "translateY(-50%)",
//     marginRight: 8,
//   },
//   right: {
//     left: "100%",
//     top: "50%",
//     transform: "translateY(-50%)",
//     marginLeft: 8,
//   },
// };

// export function Tooltip({
//   label,
//   children,
//   side = "top",
//   className = "",
//   styling = "",
// }: TooltipProps) {
//   const [show, setShow] = useState(false);

//   return (
//     <div
//       className={`relative inline-flex ${className}`}
//       onMouseEnter={() => setShow(true)}
//       onMouseLeave={() => setShow(false)}
//       onFocus={() => setShow(true)}
//       onBlur={() => setShow(false)}
//     >
//       {children}
//       <span
//         role="tooltip"
//         className={`absolute whitespace-nowrap pointer-events-none font-mono-brand text-[11px] px-2.5 py-1.5 rounded-md transition-all duration-150 z-50 ${styling}`}
//         style={{
//           ...SIDE_STYLES[side],
//           background: "var(--text)",
//           color: "var(--bg)",
//           opacity: show ? 1 : 0,
//           transform: `${SIDE_STYLES[side].transform} ${show ? "" : "scale(0.92)"}`,
//         }}
//       >
//         {label}
//       </span>
//     </div>
//   );
// }
import { useState, type ReactNode, type MouseEvent } from "react";

interface TooltipProps {
  label: string;
  children: ReactNode;
  side?: "top" | "bottom" | "left" | "right" | "cursor"; // Added "cursor" option
  className?: string;
  styling?: string;
}

const SIDE_STYLES: Record<string, React.CSSProperties> = {
  top: {
    bottom: "100%",
    left: "20%",
    transform: "translateX(-50%)",
    marginBottom: 8,
  },
  bottom: {
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginTop: 8,
  },
  left: {
    right: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginRight: 8,
  },
  right: {
    left: "100%",
    top: "50%",
    transform: "translateY(-50%)",
    marginLeft: 8,
  },
};

export function Tooltip({
  label,
  children,
  side = "top",
  className = "",
  styling = "",
}: TooltipProps) {
  const [show, setShow] = useState(false);
  // State to hold live mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const isCursorMode = side === "cursor";

  // Capture cursor positions on mouse movement
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isCursorMode) return;
    setCoords({
      x: e.clientX,
      // Adds a 16px offset downward so the tooltip sits comfortably below the pointer tip
      y: e.clientY + 16,
    });
  };

  // Build styles dynamically based on the positioning mode
  const getDynamicStyles = (): React.CSSProperties => {
    if (isCursorMode) {
      return {
        position: "fixed",
        left: coords.x,
        top: coords.y,
        transform: `translateX(-50%) ${show ? "" : "scale(0.92)"}`, // Centers horizontally under cursor
      };
    }

    return {
      ...SIDE_STYLES[side],
      transform: `${SIDE_STYLES[side]?.transform} ${show ? "" : "scale(0.92)"}`,
    };
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onMouseMove={handleMouseMove} // Attached to track movement
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      <span
        role="tooltip"
        className={`absolute whitespace-nowrap pointer-events-none font-mono-brand text-[11px] px-2.5 py-1.5 rounded-3xl transition-all duration-150 z-500 ${styling}`}
        style={{
          ...getDynamicStyles(),
          background: "var(--text)",
          color: "var(--bg)",
          opacity: show ? 1 : 0,
        }}
      >
        {label}
      </span>
    </div>
  );
}
