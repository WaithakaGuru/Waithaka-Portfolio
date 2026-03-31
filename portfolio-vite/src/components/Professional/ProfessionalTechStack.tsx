import { techStack } from "../../data";

export function ProfessionalTechStack() {
  // Duplicate the tech stack array for seamless looping
  const repeatedTechs = [...techStack, ...techStack, ...techStack];

  return (
    <section
      className="py-16 px-6 sm:px-8 lg:px-12 border-b border-gray-200 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-full">
        {/* Section Header */}
        <div className="mb-12 max-w-6xl mx-auto">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Tech Stack
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
            Technologies
          </h2>
        </div>

        {/* Horizontal Scrolling Skills - Two Rows */}
        <div className="space-y-6 group">
          <style>{`
            @keyframes scrollLeft {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            
            @keyframes scrollRight {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0);
              }
            }
            
            .animate-scroll-left {
              animation: scrollLeft 57.14s linear infinite;
            }
            
            .animate-scroll-right {
              animation: scrollRight 57.14s linear infinite;
            }
            
            .group:hover .animate-scroll-left,
            .group:hover .animate-scroll-right {
              animation-play-state: paused;
            }
            
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
            
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
          `}</style>

          {/* Row 1 - Left to Right */}
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide pb-4 px-6 sm:px-8 lg:px-12">
              <div className="flex gap-6 sm:gap-8 animate-scroll-left">
                {repeatedTechs.map((tech, i) => (
                  <div
                    key={`left-${i}`}
                    className="flex items-center gap-2 px-4 sm:px-6 py-3 border border-gray-200 rounded-full whitespace-nowrap hover:border-orange-500 hover:shadow-md transition-all"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 2 - Right to Left */}

          {/* Row 2 - Right to Left */}
          <div className="relative overflow-hidden w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide pb-4 px-6 sm:px-8 lg:px-12">
              <div className="flex gap-6 sm:gap-8 animate-scroll-right">
                {repeatedTechs.map((tech, i) => (
                  <div
                    key={`right-${i}`}
                    className="flex items-center gap-2 px-4 sm:px-6 py-3 border border-gray-200 rounded-full whitespace-nowrap hover:border-orange-500 hover:shadow-md transition-all"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-gray-700">
                      {tech.name}
                    </span>
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
