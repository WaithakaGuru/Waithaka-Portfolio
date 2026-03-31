import { useState } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { education } from "../../data";

export function ProfessionalEducation() {
  const scrollRef = useScrollReveal();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      className="py-20 px-6 sm:px-8 lg:px-12 border-b border-gray-200"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4">
            Learning & Growth
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            Continuous learning through formal education and specialized
            certifications in software development and technology.
          </p>
        </div>

        {/* Education Timeline */}
        <div ref={scrollRef()} className="space-y-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="p-8 rounded-xl border border-gray-200 bg-white hover:border-orange-500 hover:shadow-lg transition-all"
            >
              {/* Header with logo and dates */}
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{edu.logo}</div>
                <div className="flex-1">
                  <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-bold text-gray-900 mb-1">
                    {edu.title}
                  </h3>
                  <p className="text-sm text-orange-500 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-gray-500 font-medium">
                    {edu.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              {edu.description && (
                <p className="text-base text-gray-600 leading-relaxed mb-4">
                  {edu.description}
                </p>
              )}

              {/* Show Proof Button */}
              <button
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors mt-2"
              >
                <span>{expandedIndex === i ? "Hide proof" : "Show proof"}</span>
                <span className="text-lg">
                  {expandedIndex === i ? "↑" : "↓"}
                </span>
              </button>

              {/* Certificate Preview - Inline */}
              {expandedIndex === i && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">📜</div>
                      <p className="text-gray-600 font-medium">
                        Certificate of {edu.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {edu.institution}
                      </p>
                      {edu.description?.includes("Proof:") && (
                        <p className="text-xs text-gray-400 mt-4">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
