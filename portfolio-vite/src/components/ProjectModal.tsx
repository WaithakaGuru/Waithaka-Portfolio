import { useEffect } from 'react';
import type { Project } from '../data';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ProjectModal({
  isOpen,
  project,
  onClose,
  onPrev,
  onNext,
}: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 z-[2000] flex items-center justify-center p-5"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white border-4 border-black max-w-[700px] w-full max-h-[90vh] overflow-y-auto shadow-[10px_10px_0_var(--color-black)]">
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
          <div className="text-[28px] font-extrabold mb-5">{project.title}</div>
          <div className="text-[15px] leading-relaxed text-gray-700 mb-6">
            {project.description}
          </div>

          <div className="text-xs font-bold text-gray-400 tracking-wider mt-6 mb-4">
            KEY FEATURES
          </div>
          <ul className="list-none p-0">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="text-sm leading-relaxed text-gray-700 mb-2.5 pl-5 relative before:content-['•'] before:absolute before:left-0 before:font-bold"
              >
                {feature}
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-black text-white py-1 px-2.5 text-[11px] font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 border-2 border-black bg-black text-white no-underline font-bold text-xs transition-all hover:bg-yellow hover:text-black"
            >
              VIEW ON GITHUB
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 border-2 border-black bg-white text-black no-underline font-bold text-xs transition-all hover:bg-black hover:text-white"
            >
              LIVE DEMO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
