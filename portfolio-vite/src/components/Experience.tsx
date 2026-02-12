import { useState } from "react";
import { experiences, type Experience } from "../data";
// import { ExperienceModal } from './ExperienceModal';

export function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const years = ["2024", "2023", "2022", "2021", "2020"];

  const handlePrevious = () => {
    setExpanded((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setExpanded((prev) =>
      prev !== null && prev < experiences.length - 1 ? prev + 1 : prev,
    );
  };

  return (
    <section id="about" className="py-20 px-10 bg-transparent">
      <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-16">
        EXPERIENCE_<span className="text-red">LOG</span>
      </h2>

      <div className="max-w-250 mx-auto flex flex-col md:flex-row gap-8">
        {/* Year sidebar */}
        <div className="w-full md:w-20 bg-linear-to-b from-green/30 to-green/10 border-2 border-black p-4 flex flex-row md:flex-col justify-around md:justify-start md:gap-16">
          {years.map((year) => (
            <div
              key={year}
              className="text-sm font-bold text-center text-black"
            >
              {year}
            </div>
          ))}
        </div>

        {/* Experience cards */}
        {/* Experience content fills section, slide animation */}
        <div className="flex-1 relative overflow-hidden">
          {expanded === null ? (
            <div className="grid gap-2 max-h-120 overflow-y-auto pr-2">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-white border-2 border-black p-4 shadow-[4px_4px_0_var(--color-black)] mb-8 cursor-pointer flex items-center gap-6 hover:shadow-[6px_6px_0_var(--color-black)] transition-all"
                  onClick={() => setExpanded(idx)}
                >
                  <div className="w-12.5 h-12.5 bg-blue border-2 border-black flex items-center justify-center text-white font-bold text-xl">
                    {exp.logo}
                  </div>
                  <div>
                    <div className="text-xl font-extrabold mb-1">
                      {exp.title}
                    </div>
                    <div className="text-[13px] text-gray-500">
                      {exp.company}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {exp.dateShort || exp.date}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-full animate-slide-in bg-white border-2 border-black p-8 shadow-[4px_4px_0_var(--color-black)] flex flex-col relative min-h-125">
              <div className="w-12.5 h-12.5 bg-blue border-2 border-black flex items-center justify-center text-white font-bold text-xl mb-4">
                {experiences[expanded].logo}
              </div>
              <div className="text-[28px] font-extrabold mb-2.5">
                {experiences[expanded].title}
              </div>
              <div className="text-[13px] text-gray-500 mb-5">
                {experiences[expanded].date}
              </div>
              <div className="text-[15px] leading-relaxed text-gray-700 mb-6">
                {experiences[expanded].description}
              </div>
              <div className="text-xs font-bold text-gray-400 tracking-wider mt-6 mb-4">
                STUFF I WORKED ON
              </div>
              <ul className="list-none p-0">
                {experiences[expanded].worked.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-gray-700 mb-2.5 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="text-xs font-bold text-gray-400 tracking-wider mt-6 mb-4">
                THINGS I LEARNED
              </div>
              <ul className="list-none p-0">
                {experiences[expanded].learned.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm leading-relaxed text-gray-700 mb-2.5 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto self-center">
                <div className="flex border-2 border-black shadow-[4px_4px_0_var(--color-black)] bg-white">
                  {/* Previous */}
                  <button
                    disabled={expanded === 0}
                    onClick={handlePrevious}
                    className="px-3 py-1 font-bold text-lg border-r-2 border-black 
                 hover:bg-yellow 
                 active:translate-x-0.5 active:translate-y-0.5 
                 active:shadow-none
                 transition-all duration-150
                 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {"<"}
                  </button>

                  {/* Close */}
                  <button
                    onClick={() => setExpanded(null)}
                    className="px-4 py-1 font-bold text-sm tracking-wider
                 border-r-2 border-black
                 hover:bg-red hover:text-white
                 active:translate-x-0.5 active:translate-y-0.5 
                 active:shadow-none
                 transition-all duration-150"
                  >
                    CLOSE
                  </button>

                  {/* Next */}
                  <button
                    disabled={expanded === experiences.length - 1}
                    onClick={handleNext}
                    className="px-3 py-1 font-bold text-lg
                 hover:bg-green hover:text-white
                 active:translate-x-0.5 active:translate-y-0.5 
                 active:shadow-none
                 transition-all duration-150
                 disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    {">"}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ExperienceModal removed, now inline */}
    </section>
  );
}

function ExperienceCard({
  experience,
  onClick,
}: {
  experience: Experience;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white border-[3px] border-black p-5 cursor-pointer transition-all shadow-[3px_3px_0_var(--color-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_var(--color-black)]"
    >
      <div className="bg-black text-white py-1 px-3 text-[11px] font-bold inline-block mb-2.5">
        {experience.dateShort}
      </div>
      <div className="text-lg font-bold mb-2">{experience.title}</div>
      <div className="text-[13px] text-gray-500">{experience.company}</div>
    </div>
  );
}
