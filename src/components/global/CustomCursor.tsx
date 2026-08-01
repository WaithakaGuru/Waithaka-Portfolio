import { useEffect, useRef, useState } from "react";
/**
 * Site-wide custom cursor. Elements opt into the "interactive" hand state by
 * setting data-cursor="grab" (draggable props) or data-cursor="pointer"
 * (buttons/links) — anything else falls back to the default pink arrow.
 * Disabled automatically on touch/coarse-pointer devices.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [variant, setVariant] = useState<"arrow" | "grab" | "pointer">("arrow");
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(isFine);
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      const el = (e.target as HTMLElement)?.closest?.("[data-cursor]");
      const kind = el?.getAttribute("data-cursor");
      setVariant(
        kind === "grab" ? "grab" : kind === "pointer" ? "pointer" : "arrow",
      );
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 z-999 pointer-events-none transition-opacity duration-150"
      style={{
        opacity: visible ? 1 : 0,
        willChange: "transform",
      }}
    >
      <div style={{ transform: "translate(-2px, -2px)" }}>
        {variant === "grab" ? (
          <HandGlyph />
        ) : variant === "pointer" ? (
          <HandPointerGlyph />
        ) : (
          <ArrowGlyph />
        )}
      </div>
    </div>
  );
}

function ArrowGlyph() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#36C9F4" />
          <stop offset="100%" stopColor="#5B2BE0" />
        </linearGradient>
      </defs>

      <path
        fill="url(#cursorGradient)"
        d="
          M40 40
          L488 230
          C505 238 505 255 488 263
          L330 292
          C235 308 170 380 155 472
          C152 493 130 498 120 479
          Z"
      />
    </svg>
  );
}
function HandGlyph() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="url(#cursorGradient)"
      height={30}
      width={30}
    >
      <defs>
        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#36C9F4" />
          <stop offset="100%" stopColor="#5B2BE0" />
        </linearGradient>
      </defs>
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="url(#cursorGradient)"
          stroke="url(#cursorGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
          d="m15.46 7-3.2-2.19-.71 1 2.29 1.57H8.62V2.16l1.57 2.29 1-.71L9 .54a1.25 1.25 0 0 0-2 0l-2.22 3.2 1 .71 1.59-2.29v5.22H2.16l2.29-1.57-.71-1L.54 7a1.25 1.25 0 0 0 0 2l3.2 2.19.71-1-2.29-1.57h5.21v5.22l-1.56-2.29-1 .71L7 15.46a1.25 1.25 0 0 0 2.06 0l2.19-3.2-1-.71-1.63 2.29V8.62h5.22l-2.29 1.57.71 1L15.46 9a1.25 1.25 0 0 0 0-2z"
        ></path>
      </g>
    </svg>
  );
}
function HandPointerGlyph() {
  return (
    <svg
      viewBox="-1.92 -1.92 27.84 27.84"
      fill="none"
      stroke="url(#cursorGradient)"
      height={35}
      width={35}
    >
      <defs>
        <linearGradient id="cursorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#36C9F4" />
          <stop offset="100%" stopColor="#5B2BE0" />
        </linearGradient>
      </defs>

      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="url(#cursorGradient)"
          stroke="url(#cursorGradient)"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.2"
          d="M11.5 22C4.7 22 3 16.333 3 13.5V10c0-.333.2-1 1-1s1 .667 1 1v2c0 .5.3 1.5 1.5 1.5S8 12.5 8 12V3c0-.333.2-1 1-1s1 .667 1 1v7c.5.5.8 1.2 2 0V8c0-.333.2-1 1-1s1 .667 1 1v1h1c0-.333.2-1 1-1s1 .667 1 1v1h1c0-.333.2-1 1-1s1 .667 1 1v3.5c0 2.833-1.7 8.5-8.5 8.5z"
        ></path>
      </g>
    </svg>
  );
}
