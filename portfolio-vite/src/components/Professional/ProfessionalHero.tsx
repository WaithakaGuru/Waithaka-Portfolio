import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalHero() {
  const scrollRef = useScrollReveal();

  return (
    <section className="relative py-32 px-6 sm:px-8 lg:px-12 border-b border-gray-200">
      <div className="max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-block text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">
          OPEN TO OPPORTUNITIES
        </div>

        {/* Hero Headline */}
        <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
          Building <span className="text-orange-500">digital products</span>{" "}
          that solve real problems
        </h1>

        {/* Hero Description */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8">
          Full Stack Engineer with 5+ years experience crafting production-ready
          applications, from concept to deployment. Passionate about building
          beautiful, performant, and accessible digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 bg-gray-900 text-white rounded-full font-semibold text-sm tracking-wide hover:bg-orange-500 transition-colors"
          >
            Get in Touch →
          </button>
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-7 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-sm tracking-wide hover:border-orange-500 hover:text-orange-500 transition-colors"
          >
            About Me
          </button>
        </div>

        {/* Stats */}
        <div
          ref={scrollRef()}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-t border-b border-gray-200"
        >
          <div className="text-center">
            <div className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              5+
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              20+
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Projects Completed
            </div>
          </div>
          <div className="text-center">
            <div className="font-['Playfair_Display'] text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
              50+
            </div>
            <div className="text-sm text-gray-600 font-medium">
              Happy Clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
