import { useState } from "react";

interface ViewSelectorProps {
  onSelectView: (view: "professional" | "artist") => void;
}

export function ViewSelector({ onSelectView }: ViewSelectorProps) {
  const [hovered, setHovered] = useState<"professional" | "artist" | null>(
    null,
  );

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-white px-6 py-12"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <p className="text-xs tracking-widest uppercase text-slate-400 font-medium mb-3">
        Portfolio
      </p>
      <h1
        className="text-4xl text-slate-900 text-center mb-2"
        style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
      >
        How do you want to view me?
      </h1>
      <p className="text-sm text-slate-400 font-light text-center mb-10">
        Pick a presentation that fits your identity
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 w-full max-w-xl">
        {/* Professional */}
        <div
          className={`relative bg-white rounded-2xl p-8 cursor-pointer border transition-all duration-300 ${
            hovered === "professional"
              ? "border-slate-900 -translate-y-1"
              : "border-slate-400"
          }`}
          onMouseEnter={() => setHovered("professional")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelectView("professional")}
        >
          <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
            Clean
          </span>
          <div className="w-10 h-10 rounded-xl border border-slate-200 flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="3" width="14" height="2" rx="1" fill="#1e293b" />
              <rect
                x="2"
                y="7.5"
                width="9"
                height="1.5"
                rx=".75"
                fill="#94a3b8"
              />
              <rect
                x="2"
                y="11"
                width="11"
                height="1.5"
                rx=".75"
                fill="#94a3b8"
              />
              <rect
                x="2"
                y="14"
                width="7"
                height="1.5"
                rx=".75"
                fill="#94a3b8"
              />
            </svg>
          </div>
          <h2
            className="text-xl text-slate-900 mb-2"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Professional
          </h2>
          <p className="text-xs font-light text-slate-600 leading-relaxed mb-5">
            Refined and distraction-free. Built for recruiters, clients, and
            formal settings where clarity counts.
          </p>
          <div className="border-t border-slate-100 pt-4">
            <span
              className={`text-xs font-medium tracking-widest uppercase flex items-center gap-1.5 transition-all duration-200 ${
                hovered === "professional"
                  ? "text-slate-900 gap-2.5"
                  : "text-slate-500"
              }`}
            >
              Explore →
            </span>
          </div>
        </div>

        {/* Artist */}
        <div
          className={`relative bg-slate-900 rounded-2xl p-8 cursor-pointer border-2 transition-all duration-300 ${
            hovered === "artist"
              ? "border-white/20 -translate-y-1"
              : "border-transparent"
          }`}
          onMouseEnter={() => setHovered("artist")}
          onMouseLeave={() => setHovered(null)}
          onClick={() => onSelectView("artist")}
        >
          <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase font-medium text-white/40 bg-white/10 px-2.5 py-1 rounded-full">
            Bold
          </span>
          <div className="w-10 h-10 rounded-xl border border-white/15 bg-white/8 flex items-center justify-center mb-5">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="6" cy="6" r="3" fill="rgba(255,255,255,0.7)" />
              <circle cx="12" cy="10" r="2" fill="rgba(255,255,255,0.4)" />
              <circle cx="7" cy="13" r="1.5" fill="rgba(255,255,255,0.55)" />
            </svg>
          </div>
          <h2
            className="text-xl text-white mb-2"
            style={{ fontFamily: "'DM Serif Display', serif", fontWeight: 400 }}
          >
            Artist
          </h2>
          <p className="text-xs font-light text-white/45 leading-relaxed mb-5">
            Bold and expressive. Raw creative energy — an immersive space that
            celebrates the work itself.
          </p>
          <div className="border-t border-white/10 pt-4">
            <span
              className={`text-xs font-medium tracking-widest uppercase flex items-center gap-1.5 transition-all duration-200 ${
                hovered === "artist" ? "text-white/85 gap-2.5" : "text-white/40"
              }`}
            >
              Explore →
            </span>
          </div>
        </div>
      </div>

      <p className="mt-7 text-xs text-slate-400 font-light">
        Switch views anytime · No commitment
      </p>
    </div>
  );
}
