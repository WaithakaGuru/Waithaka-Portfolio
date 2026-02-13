import { useState } from "react";
import { type Experience, experiences } from "../data";

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  // Calculate year range from experiences
  const currentYear = new Date().getFullYear();
  const minYear = Math.min(
    ...experiences.map((exp: any) => exp.startYear || 2017),
  );
  const experiencesByYear: { [year: number]: Experience[] } = {};
  const maxYear = currentYear;
  const years = Array.from(
    { length: maxYear - minYear + 1 },
    (_, i) => maxYear - i,
  );
  const maxExperiencesInYear = Math.max(
    ...years.map((year) => experiencesByYear[year]?.length || 0),
  );
  // Group experiences by startYear
  experiences.forEach((exp) => {
    if (!experiencesByYear[exp.startYear])
      experiencesByYear[exp.startYear] = [];
    experiencesByYear[exp.startYear].push(exp);
  });
  // Sort each year's experiences by startMonth descending (youngest to oldest)
  Object.keys(experiencesByYear).forEach((year) => {
    experiencesByYear[Number(year)].sort((a, b) => b.startMonth - a.startMonth);
  });

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
      <h2
        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center mb-8 break-words leading-tight max-w-full mx-auto"
        style={{ wordBreak: "break-word" }}
      >
        EXPERIENCE_<span className="text-red-600">LOG</span>
      </h2>

      <div className="max-w-full md:max-w-7xl mx-auto px-2 sm:px-4">
        {/* Timeline Container */}
        <div className="relative flex flex-col md:flex-row gap-4 md:gap-8">
          {/* Year Timeline Sidebar */}
          <div className="relative w-16 md:w-24 shrink-0">
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
            <div className="relative">
              {years.map((year) => {
                const yearExperiences = experiencesByYear[year] || [];
                if (yearExperiences.length === 0) return null;

                // Each experience contributes height
                const baseUnit = 12; // height per experience (vh)
                const dynamicHeight = Math.max(
                  yearExperiences.length * baseUnit,
                  baseUnit,
                );

                return (
                  <div
                    key={year}
                    className="relative flex items-start"
                    style={{ minHeight: `${dynamicHeight}vh` }}
                  >
                    {/* Year Marker */}
                    <div className="absolute -left-12 sm:-left-16 top-0 bg-white border-2 border-gray-800 px-2 sm:px-3 py-1 font-bold text-xs sm:text-sm shadow-sm rounded">
                      {year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Experience Cards */}
          <div className="flex-1 relative min-h-screen min-w-0">
            {expanded === null ? (
              <div className="relative">
                {years.map((year) => {
                  const yearExperiences = experiencesByYear[year] || [];
                  if (yearExperiences.length === 0) return null;
                  // Dynamically set the height for the year block
                  const yearBlockHeight =
                    (100 / years.length) * Math.max(1, yearExperiences.length);
                  return (
                    <div
                      key={year}
                      className="relative"
                      style={{ minHeight: `${yearBlockHeight}vh` }}
                    >
                      {yearExperiences.map((exp, idx) => (
                        <div
                          key={exp.title + exp.company}
                          className="relative group cursor-pointer mb-4"
                          style={{ zIndex: 10 + idx }}
                          onClick={() =>
                            setExpanded(experiences.findIndex((e) => e === exp))
                          }
                        >
                          {/* Connecting line from timeline */}
                          <div className="absolute -left-8 top-4 w-8 h-0.5 bg-gray-400 group-hover:bg-blue-500 transition-colors"></div>
                          {/* Experience Card */}
                          <div className="bg-white border-2 border-gray-900 p-4 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200">
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
                      ))}
                    </div>
                  );
                })}
              </div>
            ) : (
              // Expanded view
              <div className="sticky top-20 w-full animate-slide-in bg-white border-2 border-gray-900 p-4 sm:p-6 md:p-8 shadow-[6px_6px_0_rgba(0,0,0,1)] rounded-lg max-w-full overflow-hidden">
                <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4 mb-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-gray-900 flex items-center justify-center text-white font-bold text-xl sm:text-2xl flex-shrink-0">
                    {experiences[expanded].logo}
                  </div>
                  <div className="flex-1 max-w-full">
                    <h3
                      className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2 break-words max-w-full"
                      style={{ wordBreak: "break-word" }}
                    >
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

{
  /**
   *  <div className="relative space-y-0">
              {years.map((year) => {
                const yearExperiences = experiencesByYear[year] || [];
                if (yearExperiences.length === 0) return null;
                // Proportional height: block is at least 1 unit, but grows with more experiences
                const yearBlockHeight =
                  (100 / years.length) *
                  (yearExperiences.length / (maxExperiencesInYear || 1));
                return (
                  <div
                    key={year}
                    className="relative"
                    style={{
                      minHeight: `${yearBlockHeight * (maxExperiencesInYear || 1)}vh`,
                    }}
                  >
                    {/* Year label }
                    <div className="absolute -left-16 top-0 flex items-center gap-2 z-20">
                      <div className="bg-white border-2 border-gray-800 px-2 sm:px-3 py-1 font-bold text-xs sm:text-sm shadow-sm rounded">
                        {year}
                      </div>
                    </div>
                    {yearExperiences.map((exp, idx) => (
                      <div
                        key={exp.title + exp.company + exp.startMonth}
                        className="relative group cursor-pointer mb-4"
                        style={{ zIndex: 10 + idx }}
                        onClick={() =>
                          setExpanded(experiences.findIndex((e) => e === exp))
                        }
                      >
                        {/* Connecting line from timeline }
                        <div className="absolute -left-8 top-4 w-8 h-0.5 bg-gray-400 group-hover:bg-blue-500 transition-colors"></div>
                        {/* Experience Card }
                          <div className="bg-white border-2 border-gray-900 p-2 sm:p-4 shadow-[4px_4px_0_rgba(0,0,0,1)] hover:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-200 rounded-lg max-w-full overflow-hidden">
                            <div className="flex flex-col sm:flex-row items-start gap-2 sm:gap-4">
                            {/* Logo}
                              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 border-2 border-gray-900 flex items-center justify-center text-white font-bold text-base sm:text-lg flex-shrink-0">
                              {exp.logo}
                            </div>
                            {/* Content }
                              <div className="flex-1 min-w-0 max-w-full">
                                <div className="font-bold text-base sm:text-lg mb-1 truncate max-w-full" style={{wordBreak:'break-word'}}>
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
                    ))}
                  </div>
                );
              })}
            </div>
   */
}
