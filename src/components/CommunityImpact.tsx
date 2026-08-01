import { communityImpact } from "../data";
import { ResponsiveImage } from "./global/ResponsiveImage";

function Row({ reverse }: { reverse?: boolean }) {
  // Duplicate for a seamless infinite loop
  const items = [...communityImpact, ...communityImpact];
  return (
    <div className="marquee-fade overflow-hidden py-4">
      <div
        className={`flex gap-6 w-max transition-all duration-300
          ${reverse ? "animate-marquee-reverse" : "animate-marquee"} 
          hover:[animation-play-state:paused]`}
      >
        {items.map((item, i) => (
          <div
            key={`${item.id}-${i}`}
            className="group relative flex flex-col justify-end overflow-hidden rounded-2xl shrink-0 w-90
             sm:w-80 cursor-pointer transition-transform duration-300 hover:scale-[1.02] h-60"
            style={{
              border: "1px solid var(--border-lt)",
              boxShadow: "var(--shadow)",
            }}
          >
            {/* 1. Card Background Image */}
            <ResponsiveImage
              priority={i < 4}
              src={item.image}
              alt={item.label}
              variant="marqueeCard"
              placeholder="var(--card-bg)"
              placeholderAspect="4/3"
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
            />

            {/* 2. Dark Overlay (Fades in on Hover) */}
            <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* 3. Text Info Content (Slides & Fades in on Hover) */}
            <div
              className="absolute z-10 p-6 translate-y-4 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0
                 group-hover:opacity-100"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: "var(--accent)" }}
                />
                <span className="font-mono-brand text-sm font-bold text-white">
                  {item.label}
                </span>
              </div>
              <span className="font-mono-brand text-xs text-zinc-300 pl-4">
                {item.org} · {item.year}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function CommunityImpact() {
  return (
    <section
      id="community"
      className="snap-section section-bg-b relative py-10"
    >
      <div className="max-w-6xl mx-auto mb-10 px-4">
        <div
          className="font-mono-brand text-xs tracking-[0.18em] uppercase"
          style={{ color: "var(--text-sub)" }}
        >
          Community Impact
        </div>
        <h3
          className="font-display font-bold mt-2"
          style={{ fontSize: "clamp(22px, 2.8vw, 32px)", color: "var(--text)" }}
        >
          Product Meetings and events I impacted outside the codebase
        </h3>
      </div>

      {/* Container holding rows of image-cards */}
      <div className="max-w-6xl flex flex-col overflow-hidden mx-auto">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
