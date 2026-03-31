import { useScrollReveal } from "../../hooks/useScrollReveal";
import { projects } from "../../data";

export function ProfessionalProjects() {
  const scrollRef = useScrollReveal();

  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-8 lg:px-12 border-b border-gray-200"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Hand-Coded Work
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Projects
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Real projects I've built from scratch, line by line, with clean code
            and thoughtful design.
          </p>
        </div>

        {/* Projects Grid */}
        <div
          ref={scrollRef()}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl border transition-all ${
                i === 0
                  ? "border-orange-500 bg-white shadow-md"
                  : "border-gray-200 bg-white hover:border-orange-500 hover:shadow-lg"
              }`}
            >
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.live || "#"}
                  className="text-xs font-bold text-gray-900 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  View Project →
                </a>
                <a
                  href={project.github || "#"}
                  className="text-xs font-bold text-gray-900 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
