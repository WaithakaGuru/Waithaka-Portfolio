import { education, type Education as EducationType } from "../data";

export function EducationSection() {
  return (
    <section id="education" className="pb-10 pt-4 px-4 md:px-20 h-[120dvh] relative">
      <h2 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold text-center mb-8 wrap-break-word leading-tight max-w-full mx-auto" style={{ wordBreak: "break-word" }}>
        EDUCATION_<span className="text-blue-500">LOG</span>
      </h2>
      <div className="flex flex-col gap-6 border-y-2 pt-4 px-2" style={{ height: "90vh", overflowY: "auto" }}>
        {education.map((edu: EducationType, idx: number) => (
          <div key={edu.title + edu.institution + idx} className="bg-white border-2 border-blue-500 p-4 shadow-[4px_4px_0_var(--color-black)] rounded-lg flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center text-2xl">{edu.logo}</div>
            <div>
              <div className="font-bold text-lg">{edu.title}</div>
              <div className="text-sm text-gray-600">{edu.institution}</div>
              <div className="text-xs text-gray-400 mb-2">{edu.date}</div>
              {edu.description && <div className="text-sm text-gray-700">{edu.description}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
