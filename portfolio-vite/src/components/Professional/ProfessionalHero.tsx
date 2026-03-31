import { useScrollReveal } from "../../hooks/useScrollReveal";
import { FiDownload } from "react-icons/fi";

export function ProfessionalHero() {
  const scrollRef = useScrollReveal();

  return (
    <section
      className="relative py-20 px-6 sm:px-8 lg:px-12 border-b border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div ref={scrollRef()}>
            {/* Eyebrow */}
            <div className="inline-block text-xs font-semibold tracking-widest text-orange-500 uppercase mb-6">
              OPEN TO OPPORTUNITIES
            </div>

            {/* Hero Headline */}
            <h1 className="font-['Playfair_Display'] text-5xl sm:text-6xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight text-gray-900">
              Building <span className="text-orange-500">digital products</span>{" "}
              that solve real problems
            </h1>

            {/* Hero Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              Full Stack Engineer with 5+ years experience crafting
              production-ready applications, from concept to deployment.
              Passionate about building beautiful, performant, and accessible
              digital experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="px-7 py-3 bg-gray-900 text-white rounded-full font-semibold text-sm tracking-wide hover:bg-orange-500 transition-colors whitespace-nowrap"
              >
                Get in Touch →
              </button>
              <a
                href="/Waithaka Ndung'u.pdf"
                download
                className="inline-flex items-center gap-2 px-7 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-sm tracking-wide hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  20+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="font-['Playfair_Display'] text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                  50+
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Photo Card */}
          <div
            ref={scrollRef(1)}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm">
              {/* Photo Card */}
              <div className="aspect-square bg-linear-to-br from-slate-900 to-slate-800 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-200 group hover:border-orange-500 transition-all duration-300">
                <img
                  src="/me.jpg"
                  alt="Waithaka Ndung'u"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative background accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-orange-500 opacity-10 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
