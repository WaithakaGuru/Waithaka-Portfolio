import { education } from "../data";

export const getImageURL = (name: string) =>
  new URL(`${name}`, import.meta.url).pathname;

const GRADIENTS = [
  "linear-gradient(135deg, #2F9BE0 0%, #12181F 100%)",
  "linear-gradient(135deg, #EC4899 0%, #2F9BE0 100%)",
  "linear-gradient(135deg, #12181F 0%, #2F9BE0 60%)",
  "linear-gradient(135deg, #2F9BE0 0%, #7DD3FC 100%)",
  "linear-gradient(135deg, #7DD3FC 0%, #12181F 100%)",
];

export function EducationCarousel() {
  const items = [...education, ...education];

  return (
    <div className="mt-14 max-w-6xl mx-auto">
      <div className="marquee-fade overflow-hidden py-3">
        <div
          className="flex gap-5 w-max animate-marquee"
          style={{ animationDuration: "55s" }}
        >
          {items.map((ed, i) => (
            <div
              key={`${ed.title}-${i}`}
              className="group relative shrink-0 w-85 h-92 rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--border-lt)",
                background: "var(--card-bg)",
                boxShadow: "var(--shadow)",
              }}
            >
              {/* IMAGE */}
              <div
                className="relative h-[70%] overflow-hidden transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                style={{
                  background: GRADIENTS[i % GRADIENTS.length],
                }}
              >
                <img
                  src={getImageURL(ed.logo)}
                  className="absolute inset-0 flex items-center justify-center text-5xl"
                />

                <span
                  className="absolute top-3 left-3 font-mono-brand text-[10px] px-2 py-1 rounded-md"
                  style={{
                    background: "rgba(0,0,0,0.35)",
                    color: "#fff",
                  }}
                >
                  {ed.date}
                </span>

                {/* Dark fade for readability */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
              </div>

              {/* SLIDING CONTENT PANEL */}
              <div
                className="absolute left-0 right-0 bottom-0 bg-(--card-bg) p-5  transition-transform  duration-500  ease-[cubic-bezier(.22,1,.36,1)]  translate-y-[48%]  group-hover:translate-y-0
                "
              >
                <span
                  className="font-mono-brand text-[10px] px-2 py-1 rounded-md"
                  style={{
                    background: "var(--tag-bg)",
                    color: "var(--tag-text)",
                  }}
                >
                  {ed.category}
                </span>

                <h4
                  className="font-display font-bold mt-3 leading-snug"
                  style={{
                    fontSize: "17px",
                    color: "var(--text)",
                  }}
                >
                  {ed.title}
                </h4>

                <p
                  className="text-sm mt-1"
                  style={{
                    color: "var(--text-sub)",
                  }}
                >
                  {ed.institution}
                </p>

                <div
                  className="mt-4 pt-4 border-t opacity-0 translate-y-3  transition-all  duration-300  delay-150  group-hover:opacity-100  group-hover:translate-y-0
                  "
                  style={{
                    borderColor: "var(--border-lt)",
                  }}
                >
                  <p
                    className="text-xs leading-relaxed"
                    style={{
                      color: "var(--text-sub)",
                    }}
                  >
                    {ed.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
