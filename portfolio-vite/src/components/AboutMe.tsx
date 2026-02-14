export function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-20 px-10 relative border-y-2 border-[#333]"
      style={{
        backgroundColor: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Subtle grid background */}
      <div
        className="
        absolute inset-0 opacity-20 pointer-events-none
        bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)]
        bg-size-[40px_40px]"
      />

      <div className="relative">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-left mb-10 z-10 py-4 -mx-10 px-10 sticky! top-0!"
          style={{
            backgroundColor: "var(--bg-primary)",
            backdropFilter: "blur(4px)",
          }}
        >
          ABOUT_<span style={{ color: "var(--accent-green)" }}>ME</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-[#1a1a1a] border-2 border-gray-700 rounded-lg overflow-hidden hover:border-green-500 transition-all duration-300">
              <div className="h-64 bg-linear-to-br from-green-600 to-green-800 flex items-center justify-center">
                <img
                  src="./me.jpg"
                  alt="Waithaka Ndung'u"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling!.className =
                      e.currentTarget.nextElementSibling!.className.replace(
                        "hidden",
                        "",
                      );
                  }}
                />
                <div className="hidden text-8xl">👨‍💻</div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-green-400">
                  Waithaka Ndung'u
                </h3>
                <p className="text-gray-300 mb-4">
                  Certified Software Developer
                </p>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">📍</span>
                    <span>Kenya | Worldwide | Remote</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-green-400">●</span>
                    <span>Available for Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Introduction Card */}
            <div className="bg-[#1a1a1a] border-2 border-gray-700 rounded-lg p-6 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Introduction
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I am Waithaka Ndung'u, a{" "}
                <span className="text-green-400 font-semibold">
                  Certified Software Developer
                </span>{" "}
                from Kenya with 4+ years of experience building digital products
                that make an impact. I specialize in creating performant,
                scalable, and optimal web/mobile applications.
              </p>
              <div className="bg-[#2a2a2a] border border-gray-600 rounded p-4">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      Specialized in Web Development and AI integration
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">▸</span>
                    <span>Obsessed with Data Structures and Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">▸</span>
                    <span>
                      Over 3 years of shipping Apps that sell and scale
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-[#1a1a1a] border-2 border-gray-700 rounded-lg p-6 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Key Stats
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-[#2a2a2a] border border-gray-600 rounded-lg p-4 text-center">
                  <div className="text-3xl font-extrabold text-green-400 mb-1">
                    4+
                  </div>
                  <div className="text-xs text-gray-400 font-semibold">
                    YEARS EXPERIENCE
                  </div>
                </div>
                <div className="bg-[#2a2a2a] border border-gray-600 rounded-lg p-4 text-center">
                  <div className="text-3xl font-extrabold text-green-400 mb-1">
                    50+
                  </div>
                  <div className="text-xs text-gray-400 font-semibold">
                    PROJECTS COMPLETED
                  </div>
                </div>
                <div className="bg-[#2a2a2a] border border-gray-600 rounded-lg p-4 text-center">
                  <div className="text-3xl font-extrabold text-green-400 mb-1">
                    15+
                  </div>
                  <div className="text-xs text-gray-400 font-semibold">
                    SATISFIED CLIENTS
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Card */}
            <div className="bg-[#1a1a1a] border-2 border-gray-700 rounded-lg p-6 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-green-400">
                Core Expertise
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  "Full-Stack Development",
                  "AI/ML Integration",
                  "System Optimization",
                  "Cloud Architecture",
                  "UI/UX Design",
                  "Agile Development",
                ].map((skill, index) => (
                  <div
                    key={index}
                    className="bg-[#2a2a2a] border border-gray-600 rounded px-3 py-2 text-center text-sm text-gray-300 hover:bg-green-900 hover:text-white transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
