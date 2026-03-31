import { useScrollReveal } from "../../hooks/useScrollReveal";

export function ProfessionalExperience() {
  const scrollRef = useScrollReveal();

  const experiences = [
    {
      logo: "A",
      title: "Senior Full Stack Engineer",
      company: "Anthropic",
      period: "Contract · Jan 2026 — Present",
      desc: "Building innovative features for Claude and developing tools that help developers integrate AI into their applications effectively.",
      tags: ["React", "TypeScript", "Python", "AI Integration"],
    },
    {
      logo: "D",
      title: "Full Stack Developer",
      company: "Diverse Tech Solutions",
      period: "Full-Time · Jun 2023 — Dec 2025",
      desc: "Led development of web applications and APIs serving thousands of users. Mentored junior developers and established best practices for code quality and performance.",
      tags: ["Node.js", "React", "PostgreSQL", "AWS"],
    },
    {
      logo: "S",
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "Full-Time · Mar 2021 — May 2023",
      desc: "Built responsive web interfaces and optimized performance. Collaborated with designers and backend teams to deliver seamless user experiences.",
      tags: ["Vue.js", "CSS", "JavaScript", "Git"],
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-8 lg:px-12 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Where I've Worked
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Partnered with top tech companies to create innovative solutions and
            drive product adoption.
          </p>
        </div>

        {/* Experience List */}
        <div ref={scrollRef()} className="space-y-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`p-8 rounded-xl border transition-all ${
                i === 0
                  ? "border-orange-500 bg-white shadow-md"
                  : "border-gray-200 bg-white hover:border-orange-500 hover:shadow-lg"
              }`}
            >
              <div className="flex gap-6 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 font-bold text-gray-700">
                  {exp.logo}
                </div>
                <div className="flex-1">
                  <h3 className="font-['Playfair_Display'] text-xl font-bold text-gray-900 mb-1">
                    {exp.title}
                  </h3>
                  <div className="text-sm text-gray-600 font-semibold mb-1">
                    {exp.company}
                  </div>
                  <div className="text-xs text-gray-500">{exp.period}</div>
                </div>
              </div>

              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {exp.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 border border-gray-200 rounded-full text-xs text-gray-600 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
