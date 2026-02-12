import { useState } from 'react';
import { experiences, type Experience } from '../data';
// import { ExperienceModal } from './ExperienceModal';

export function ExperienceSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = experiences.length - 1;
    if (newIndex >= experiences.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  const years = ['2024', '2023', '2022', '2021', '2020'];

  return (
    <section id="about" className="py-20 px-10 bg-transparent">
      <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-16">
        EXPERIENCE_<span className="text-red">LOG</span>
      </h2>

      <div className="max-w-250 mx-auto flex flex-col md:flex-row gap-8">
        {/* Year sidebar */}
        <div className="w-full md:w-20 bg-linear-to-b from-green/30 to-green/10 border-2 border-black p-4 flex flex-row md:flex-col justify-around md:justify-start md:gap-16">
          {years.map((year) => (
            <div key={year} className="text-sm font-bold text-center text-black">
              {year}
            </div>
          ))}
        </div>

        {/* Experience cards */}
        {/* Experience content is now inline below */}
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
