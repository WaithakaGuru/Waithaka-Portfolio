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
    <section
      id="about"
      className="pb-10 pt-4 px-4 md:px-20 h-[120dvh] relative"
    >
      <h2
        className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center mb-8 wrap-break-word leading-tight max-w-full mx-auto"
        style={{ wordBreak: "break-word" }}
      >
        EXPERIENCE_<span className="text-orange">LOG</span>
      </h2>

      {/* Timeline Container */}
      <div
        className="flex flex-col gap-4 md:gap-8 relative overflow-y-auto 
        border-y-2 pt-4"
        style={{ height: "90vh" }}
      >
        {expanded === null ? (
          <div className="relative max-w-11/12">
            {/* Year Timeline Sidebar */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-orange" />

            {years.map((year) => {
              const yearExperiences = experiencesByYear[year] || [];
              if (!yearExperiences.length) return null;

              return (
                <div key={year} className="relative mb-16">
                  {/* YEAR LABEL */}
                  <div className="absolute left-0 top-0 flex items-center">
                    <div className="w-16 text-center bg-white border-2 border-gray-900 font-bold py-1 shadow">
                      {year}
                    </div>

                    {/* horizontal bar from year */}
                    <div className="w-10 h-0.5 bg-gray-400" />
                  </div>

                  {/* EXPERIENCES */}
                  <div className="ml-24 flex flex-col gap-8 pt-8">
                    {yearExperiences.map((exp, idx) => (
                      <div
                        key={exp.title + exp.company || idx}
                        className="relative group cursor-pointer"
                        onClick={() =>
                          setExpanded(experiences.findIndex((e) => e === exp))
                        }
                      >
                        {/* horizontal connector */}
                        <div className="absolute -left-14 top-6 w-14 h-0.5 bg-gray-400 group-hover:bg-blue-500 transition-colors" />

                        {/* card */}
                        <div
                          className="bg-white border-2 border-gray-900 p-4 shadow-[4px_4px_0_rgba(0,0,0,1)] max-w-100
                      hover:shadow-[6px_6px_0_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange border-2 border-gray-900 flex items-center justify-center text-white font-bold">
                              {exp.logo}
                            </div>

                            <div>
                              <div className="font-bold text-lg">
                                {exp.title}
                              </div>
                              <div className="text-sm text-gray-600">
                                {exp.company}
                              </div>
                              <div className="text-xs text-gray-400 mb-3">
                                {exp.dateShort || exp.date}
                              </div>
                            </div>
                          </div>
                          {/* Hover message */}
                          <div
                            className="absolute left-2 bottom-1 flex justify-center opacity-0 
                        group-hover:opacity-100 transition-opacity duration-200 "
                          >
                            <span className="bg-orange text-white text-xs font-semibold px-2 py-1 rounded shadow-lg mt-2">
                              CLICK TO SEE DETAILS
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          // Detailed experience view
          <div className="max-w-xl mx-4 animate-fade-in">
            <div className="bg-white border-2 border-gray-900 p-6 shadow-[6px_6px_0_rgba(0,0,0,1)]">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-orange border-2 border-gray-900 flex items-center justify-center text-white font-bold text-xl">
                  {experiences[expanded].logo}
                </div>

                <div>
                  <h3 className="text-3xl font-extrabold">
                    {experiences[expanded].title}
                  </h3>
                  <p className="text-gray-600">
                    {experiences[expanded].company}
                  </p>
                  <p className="text-sm text-gray-400">
                    {experiences[expanded].date}
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {experiences[expanded].description}
              </p>

              {/* Worked */}
              <div className="mb-6">
                <h4 className="font-bold mb-2">WHAT I WORKED ON</h4>
                <ul className="space-y-2">
                  {experiences[expanded].worked.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      ▪ {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Learned */}
              <div className="mb-8">
                <h4 className="font-bold mb-2">WHAT I LEARNED</h4>
                <ul className="space-y-2">
                  {experiences[expanded].learned.map((item, i) => (
                    <li key={i} className="text-sm text-gray-700">
                      ▪ {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-center gap-4">
                <button
                  disabled={expanded === 0}
                  onClick={handlePrevious}
                  className="px-4 py-2 border-2 border-gray-900 bg-white font-bold
              shadow-[4px_4px_0_rgba(0,0,0,1)]
              disabled:opacity-30"
                >
                  ← PREVIOUS
                </button>

                <button
                  onClick={() => setExpanded(null)}
                  className="px-6 py-2 border-2 border-gray-900 bg-red-500 text-white font-bold
              shadow-[4px_4px_0_rgba(0,0,0,1)]"
                >
                  CLOSE
                </button>

                <button
                  disabled={expanded === experiences.length - 1}
                  onClick={handleNext}
                  className="px-4 py-2 border-2 border-gray-900 bg-white font-bold
              shadow-[4px_4px_0_rgba(0,0,0,1)]
              disabled:opacity-30"
                >
                  NEXT →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
