import { useState } from "react";
import { type Experience, experiences } from "../data";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  console.log(experiences);
  // Calculate year range from experiences
  const currentYear = new Date().getFullYear();
  const minYear = Math.min(
    ...experiences.map((exp: any) => exp.startYear || 2017),
  );
  const maxYear = currentYear;
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => maxYear - i,
  );

  // Calculate position on timeline (percentage from top)
  const getTimelinePosition = (year: number, month: number = 6) => {
    const totalMonths = (maxYear - minYear + 1) * 12;
    const monthsFromTop = (maxYear - year) * 12 + (12 - month);
    return (monthsFromTop / totalMonths) * 100;
  };

  const handlePrevious = () => {
    setExpanded((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setExpanded((prev) =>
      prev !== null && prev < experiences.length - 1 ? prev + 1 : prev,
    );
  };

  return (
    <section id="about" className="py-20 px-4 md:px-10 bg-gray-50">
      <h2 className="text-4xl md:text-8xl font-extrabold text-center mb-16">
        EXPERIENCE_<span className="text-red-600">LOG</span>
      </h2>

      <div className="max-w-7xl mx-auto">
        {/* Timeline Container */}
        <div className="relative flex gap-8">
          {/* Year Timeline Sidebar */}
          <div className="relative w-24 shrink-0">
            {/* Main vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-linear-to-b from-green-300 via-green-400 to-green-200">
              {/* Pattern overlay */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                       45deg,
                       transparent,
                       transparent 10px,
                       rgba(255,255,255,0.3) 10px,
                       rgba(255,255,255,0.3) 20px
                     )`,
                }}
              ></div>
            </div>

            {/* Year markers */}
            <div className="relative space-y-0">
              {years.map((year) => {
                const yearHeight = 100 / years.length;
                return (
                  <div
                    key={year}
                    className="relative"
                    style={{ height: `${yearHeight}vh`, minHeight: "120px" }}
                  >
                    {/* Year label and connector */}
                    <div className="absolute top-0 left-0 flex items-center gap-2">
                      {/* Horizontal tick mark */}
                      <div className="w-6 h-0.5 bg-gray-800"></div>

                      {/* Year badge */}
                      <div className="bg-white border-2 border-gray-800 px-3 py-1 font-bold text-sm shadow-sm">
                        {year}
                      </div>
                    </div>

                    {/* Grid lines for months (subtle) */}
                    <div className="absolute left-6 top-0 bottom-0 w-px">
                      {Array.from({ length: 11 }).map((_, monthIdx) => (
                        <div
                          key={monthIdx}
                          className="absolute w-3 h-px bg-gray-300 left-0"
                          style={{ top: `${((monthIdx + 1) / 12) * 100}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Cards */}
          <div className="flex-1 relative min-h-screen">
            {expanded === null ? (
              <div className="relative">
                {experiences.map((exp: Experience, idx) => {
                  const startPos = getTimelinePosition(
                    exp.startYear,
                    exp.startMonth,
                  );
                  const endPos = getTimelinePosition(exp.endYear, exp.endMonth);
                  const height = endPos - startPos;

                  return (
                    <div
                      key={idx}
                      className="absolute left-0 right-0 group cursor-pointer"
                      style={{
                        top: `${startPos}%`,
                        minHeight: "80px",
                      }}
                      onClick={() => setExpanded(idx)}
                    >
                      {/* Connecting line from timeline */}
                      <div className="absolute -left-8 top-4 w-8 h-0.5 bg-gray-400 group-hover:bg-blue-500 transition-colors"></div>

                      {/* Vertical span indicator (for multi-year positions) */}
                      {height > 5 && (
                        <div
                          className="absolute -left-8 top-4 w-0.5 bg-gray-300 group-hover:bg-blue-400 transition-colors"
                          style={{ height: `${height}%` }}
                        ></div>
                      )}

                      {/* Experience Card */}
                      <div className="bg-white border-2 border-gray-900 p-4 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 mb-4">
                        <div className="flex items-start gap-4">
                          {/* Logo */}
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-gray-900 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                            {exp.logo}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="font-bold text-lg mb-1 truncate">
                              {exp.title}
                            </div>
                            <div className="text-sm text-gray-600">
                              {exp.company}
                            </div>
                            <div className="text-xs text-gray-400 mt-1">
                              {exp.dateShort || exp.date}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              // Expanded view
              <div className="sticky top-20 w-full animate-slide-in bg-white border-2 border-gray-900 p-6 md:p-8 shadow-[6px_6px_0_rgba(0,0,0,1)]">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-gray-900 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                    {experiences[expanded].logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                      {experiences[expanded].title}
                    </h3>
                    <p className="text-gray-600 mb-1">
                      {experiences[expanded].company}
                    </p>
                    <p className="text-sm text-gray-500">
                      {experiences[expanded].date}
                    </p>
                  </div>
                </div>

                <div className="prose max-w-none mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {experiences[expanded].description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider mb-3">
                    STUFF I WORKED ON
                  </h4>
                  <ul className="space-y-2">
                    {experiences[expanded].worked.map(
                      (item: string, i: number) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 pl-4 relative before:content-['▪'] before:absolute before:left-0 before:text-blue-500 before:font-bold"
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div className="mb-8">
                  <h4 className="text-xs font-bold text-gray-400 tracking-wider mb-3">
                    THINGS I LEARNED
                  </h4>
                  <ul className="space-y-2">
                    {experiences[expanded].learned.map(
                      (item: string, i: number) => (
                        <li
                          key={i}
                          className="text-sm text-gray-700 pl-4 relative before:content-['▪'] before:absolute before:left-0 before:text-purple-500 before:font-bold"
                        >
                          {item}
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Navigation */}
                <div className="flex justify-center">
                  <div className="inline-flex border-2 border-gray-900 shadow-[4px_4px_0_rgba(0,0,0,1)] bg-white">
                    <button
                      disabled={expanded === 0}
                      onClick={handlePrevious}
                      className="px-4 py-2 font-bold border-r-2 border-gray-900 hover:bg-yellow-300 active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => setExpanded(null)}
                      className="px-6 py-2 font-bold border-r-2 border-gray-900 hover:bg-red-500 hover:text-white transition-all active:translate-x-[2px] active:translate-y-[2px]"
                    >
                      CLOSE
                    </button>
                    <button
                      disabled={expanded === experiences.length - 1}
                      onClick={handleNext}
                      className="px-4 py-2 font-bold hover:bg-green-400 active:translate-x-[2px] active:translate-y-[2px] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                    >
                      →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
