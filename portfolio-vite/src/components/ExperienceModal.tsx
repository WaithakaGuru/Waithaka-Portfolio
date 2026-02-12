import { useEffect } from "react";
import type { Experience } from "../data";

interface ExperienceModalProps {
  isOpen: boolean;
  experience: Experience;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ExperienceModal({
  isOpen,
  experience,
  onClose,
  onPrev,
  onNext,
}: ExperienceModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-1000 flex items-center justify-center p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white border-4 border-black max-w-175 w-full max-h-[90vh] overflow-y-auto shadow-[10px_10px_0_var(--color-black)]">
        {/* Modal header */}
        <div className="flex justify-between items-center px-5 py-4 border-b-[3px] border-black bg-light-gray">
          <button
            onClick={onPrev}
            className="w-10 h-10 border-2 border-black bg-white font-bold text-lg transition-all hover:bg-yellow"
          >
            &lt;
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2.5 border-2 border-black bg-black text-white font-bold text-xs transition-all hover:bg-white hover:text-black"
          >
            CLOSE
          </button>
          <button
            onClick={onNext}
            className="w-10 h-10 border-2 border-black bg-white font-bold text-lg transition-all hover:bg-yellow"
          >
            &gt;
          </button>
        </div>

        {/* Modal body */}
        <div className="p-8">
          <div className="w-12.5 h-12.5 bg-blue border-2 border-black flex items-center justify-center text-white font-bold text-xl mb-4">
            {experience.logo}
          </div>
          <div className="text-[28px] font-extrabold mb-2.5">
            {experience.title}
          </div>
          <div className="text-[13px] text-gray-500 mb-5">
            {experience.date}
          </div>
          <div className="text-[15px] leading-relaxed text-gray-700 mb-6">
            {experience.description}
          </div>

          <div className="text-xs font-bold text-gray-400 tracking-wider mt-6 mb-4">
            STUFF I WORKED ON
          </div>
          <ul className="list-none p-0">
            {experience.worked.map((item, index) => (
              <li
                key={index}
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
            {experience.learned.map((item, index) => (
              <li
                key={index}
                className="text-sm leading-relaxed text-gray-700 mb-2.5 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
