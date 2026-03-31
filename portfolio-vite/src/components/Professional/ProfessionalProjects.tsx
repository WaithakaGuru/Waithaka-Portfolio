import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalProjects() {
  const scrollRef = useScrollReveal();

  const projects = [
    {
      title: "CryptoVault",
      desc: "A secure cryptocurrency wallet and portfolio tracker with real-time market data and advanced analytics dashboard.",
      tags: ["REACT", "TYPESCRIPT", "NODE.JS", "MONGODB"],
      featured: true,
    },
    {
      title: "DesignSystem",
      desc: "Comprehensive component library and design system documentation for scaling design across large teams.",
      tags: ["REACT", "STORYBOOK", "TAILWIND"],
    },
    {
      title: "ContentHub",
      desc: "Content management platform with collaborative editing, version control, and advanced publishing workflows.",
      tags: ["NEXT.JS", "PRISMA", "POSTGRESQL"],
    },
    {
      title: "Analytics Dashboard",
      desc: "Real-time data visualization platform for tracking user behavior and business metrics with interactive charts.",
      tags: ["REACT", "D3.JS", "PYTHON"],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-b border-gray-200">
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
                project.featured
                  ? "border-orange-500 bg-white shadow-md"
                  : "border-gray-200 bg-white hover:border-orange-500 hover:shadow-lg"
              }`}
            >
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {project.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-xs font-bold text-gray-900 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  View Project →
                </a>
                <a
                  href="#"
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
