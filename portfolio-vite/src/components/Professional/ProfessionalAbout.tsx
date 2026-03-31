import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalAbout() {
  const scrollRef = useScrollReveal();

  const pillars = [
    {
      icon: "💻",
      title: "Full Stack Developer",
      desc: "Build production-ready applications from concept to deployment using modern technologies and best practices.",
    },
    {
      icon: "🎨",
      title: "Creative Engineer",
      desc: "Combine design thinking with technical excellence to create meaningful user experiences.",
    },
    {
      icon: "🚀",
      title: "Builder Mindset",
      desc: "Ship real code quickly. From idea to production, I deliver what matters most.",
    },
    {
      icon: "🌍",
      title: "Community First",
      desc: "Mentor others, contribute to open source, and help developers grow their skills.",
    },
  ];

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "AWS",
    "PostgreSQL",
    "Next.js",
    "Tailwind CSS",
    "Git",
    "Docker",
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-gray-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Who I am
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Full-stack engineer passionate about creating beautiful, performant,
            and accessible digital experiences
          </p>
        </div>

        {/* Pillars Grid */}
        <div
          ref={scrollRef()}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {pillars.map((pillar, i) => (
            <div
              key={i}
              // ref={pillarRefs[i]}
              className={`p-8 rounded-xl border transition-all hover:shadow-lg ${
                i === 0
                  ? "border-orange-500 bg-white shadow-md"
                  : "border-gray-200 bg-white hover:border-orange-500"
              }`}
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="font-['Playfair_Display'] font-bold text-lg mb-3 text-gray-900">
                {pillar.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Technical Skills
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
