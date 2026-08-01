import { techStack } from "../data";
import { renderTechWithIcon } from "../utils/techIcons";

export default function TechMarquee() {
  // 1. Distribute the technologies evenly into 3 columns
  const col1 = techStack.filter((_, i) => i % 3 === 0);
  const col2 = techStack.filter((_, i) => i % 3 === 1);
  const col3 = techStack.filter((_, i) => i % 3 === 2);

  // Helper to render a column with duplicated items for seamless looping
  const renderMarqueeColumn = (
    items: { label: string; name: string }[],
    directionClass: string,
  ) => {
    // Duplicate the items so the scroll is infinite and gap-free
    const doubledItems = [...items, ...items, ...items];

    return (
      <div className="h-100 overflow-hidden relative Mask-Edges">
        <div className={`flex flex-col gap-y-6 py-4 ${directionClass}`}>
          {doubledItems.map((name, index) => (
            <span
              key={`${name}-${index}`}
              className="font-display font-bold text-lg flex justify-center items-center"
              style={{ color: "var(--text-sub)" }}
            >
              {renderTechWithIcon(name.name, "22", 21)}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-3 gap-x-8 max-w-3xl mx-auto overflow-hidden">
      {/* Column 1: Top-to-Bottom */}
      {renderMarqueeColumn(col1, "animate-marquee-down")}

      {/* Column 2: Bottom-to-Top (Alternating) */}
      {renderMarqueeColumn(col2, "animate-marquee-up")}

      {/* Column 3: Top-to-Bottom */}
      {renderMarqueeColumn(col3, "animate-marquee-down")}
    </div>
  );
}
