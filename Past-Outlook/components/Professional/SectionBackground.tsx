interface SectionBackgroundProps {
  words: string[];
  opacity?: number;
}

export function SectionBackground({
  words,
  opacity = 0.05,
}: SectionBackgroundProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        opacity,
        zIndex: 0,
      }}
    >
      <style>{`
        @keyframes float-up {
          0% {
            transform: translateY(100%) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-100vh) translateX(100px);
            opacity: 0;
          }
        }
        .floating-word {
          position: absolute;
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 6vw, 100px);
          font-weight: 800;
          white-space: nowrap;
          letter-spacing: -0.02em;
        }
      `}</style>
      {words.map((word, i) => (
        <div
          key={i}
          className="floating-word"
          style={{
            left: `${(i * 25) % 100}%`,
            animation: `float-up ${12 + i * 2}s linear infinite`,
            animationDelay: `${-i * 3}s`,
            color: "#f97316",
          }}
        >
          {word}
        </div>
      ))}
    </div>
  );
}

export const SECTION_WORDS = {
  about: ["Visionary", "Innovator", "Creator", "Developer"],
  experience: ["Dedicated", "Expert", "Proven", "Skilled"],
  projects: ["Impactful", "Scalable", "Elegant", "Efficient"],
  services: ["Quality", "Reliable", "Professional", "Excellence"],
  contact: ["Collaborative", "Responsive", "Engaged", "Ready"],
};
