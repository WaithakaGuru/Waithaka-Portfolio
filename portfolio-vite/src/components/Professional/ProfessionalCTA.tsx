import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalCTA() {
  const scrollRef = useScrollReveal();

  const opportunities = [
    "Full-Time Roles",
    "Contract Work",
    "Consulting",
    "Side Projects",
  ];

  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12">
      <div
        ref={scrollRef()}
        className="max-w-6xl mx-auto bg-gray-900 text-white rounded-2xl px-8 sm:px-12 py-16 sm:py-20 text-center"
      >
        {/* Eyebrow */}
        <div className="inline-block text-xs font-semibold tracking-widest text-orange-400 uppercase mb-6">
          OPEN TO OPPORTUNITIES
        </div>

        {/* Headline */}
        <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8">
          Let's build something <span className="text-orange-500">great</span>{" "}
          together.
        </h2>

        {/* Opportunity Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {opportunities.map((opp) => (
            <div
              key={opp}
              className="px-4 py-2 border border-gray-700 rounded-full text-sm font-semibold text-white hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer"
            >
              {opp}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold text-sm tracking-wide hover:bg-orange-600 transition-colors"
        >
          Get in Touch →
        </button>
      </div>
    </section>
  );
}
