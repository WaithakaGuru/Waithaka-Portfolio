import { useState } from "react";

interface ViewSelectorProps {
  onSelectView: (view: "professional" | "artist") => void;
}

export function ViewSelector({ onSelectView }: ViewSelectorProps) {
  const [hoveredView, setHoveredView] = useState<
    "professional" | "artist" | null
  >(null);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 z-50">
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-6 py-12">
        {/* Header */}
        <div className="mb-24 text-center max-w-2xl">
          <h1
            className="text-5xl md:text-6xl font-serif font-bold mb-6 text-slate-900"
            style={{ fontFamily: "'Georgia', serif", letterSpacing: "-0.02em" }}
          >
            Choose Your Portfolio
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Select the experience that best represents your professional
            identity
          </p>
        </div>

        {/* View Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 max-w-5xl w-full mx-auto">
          {/* Professional View - Clean & Minimal */}
          <div
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredView("professional")}
            onMouseLeave={() => setHoveredView(null)}
            onClick={() => onSelectView("professional")}
          >
            <div
              className={`relative h-full bg-white rounded-lg p-12 transition-all duration-500 border-2 ${
                hoveredView === "professional"
                  ? "border-slate-900 shadow-xl scale-105"
                  : "border-slate-200 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  hoveredView === "professional"
                    ? "bg-slate-900"
                    : "bg-slate-300"
                } transition-colors duration-300`}
              />

              {/* Icon */}
              <div className="mb-8">
                <div className="text-5xl">💼</div>
              </div>

              {/* Content */}
              <h2
                className="text-3xl font-serif font-bold mb-4 text-slate-900"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Professional
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                A clean, elegant, and polished presentation. Perfect for
                recruiters, clients, and formal professional settings.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-slate-400 mt-1">→</span>
                  <span>Refined typography and spacing</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-slate-400 mt-1">→</span>
                  <span>Focus on credentials and experience</span>
                </li>
                <li className="flex items-start gap-3 text-slate-700">
                  <span className="text-slate-400 mt-1">→</span>
                  <span>Minimal, distraction-free design</span>
                </li>
              </ul>

              {/* CTA */}
              <div
                className={`pt-6 border-t transition-all duration-300 ${
                  hoveredView === "professional"
                    ? "border-slate-900"
                    : "border-slate-200"
                }`}
              >
                <p className="text-sm font-medium text-slate-900 tracking-wide">
                  EXPLORE PROFESSIONAL →
                </p>
              </div>
            </div>
          </div>

          {/* Artist View - Bold & Expressive */}
          <div
            className="group cursor-pointer"
            onMouseEnter={() => setHoveredView("artist")}
            onMouseLeave={() => setHoveredView(null)}
            onClick={() => onSelectView("artist")}
          >
            <div
              className={`relative h-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg p-12 transition-all duration-500 border-2 ${
                hoveredView === "artist"
                  ? "border-orange-400 shadow-2xl scale-105"
                  : "border-slate-700 shadow-lg hover:shadow-2xl"
              }`}
            >
              {/* Animated accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 transition-all duration-300 ${
                  hoveredView === "artist" ? "opacity-100" : "opacity-60"
                }`}
              />

              {/* Icon */}
              <div className="mb-8">
                <div className="text-5xl">🎨</div>
              </div>

              {/* Content */}
              <h2
                className="text-3xl font-serif font-bold mb-4 text-white"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Artist
              </h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                Bold and expressive neo-brutalism. Raw, authentic, and
                unapologetically creative—a celebration of the craft.
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>Experimental and innovative design</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>Focus on creativity and impact</span>
                </li>
                <li className="flex items-start gap-3 text-slate-200">
                  <span className="text-orange-400 mt-1">→</span>
                  <span>Interactive and immersive experience</span>
                </li>
              </ul>

              {/* CTA */}
              <div
                className={`pt-6 border-t transition-all duration-300 ${
                  hoveredView === "artist"
                    ? "border-orange-400"
                    : "border-slate-700"
                }`}
              >
                <p
                  className={`text-sm font-medium tracking-wide ${
                    hoveredView === "artist"
                      ? "text-orange-400"
                      : "text-orange-300"
                  }`}
                >
                  EXPLORE ARTIST →
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 text-sm">
            You can switch views anytime from your portfolio
          </p>
        </div>
      </div>
    </div>
  );
}
