import { useState } from 'react';
import { projects, type Project } from '../data';
import { ProjectModal } from './ProjectModal';

export function SelectedWorks() {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
  };

  const navigate = (direction: number) => {
    let newIndex = currentIndex + direction;
    if (newIndex < 0) newIndex = projects.length - 1;
    if (newIndex >= projects.length) newIndex = 0;
    setCurrentIndex(newIndex);
  };

  return (
    <section id="projects" className="bg-yellow py-20 px-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-left mb-10 text-black">
        SELECTED WORKS
      </h2>

      <div className="max-w-[1400px] mx-auto mt-10 overflow-x-auto pb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 min-w-min">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        isOpen={modalOpen}
        project={projects[currentIndex]}
        onClose={() => setModalOpen(false)}
        onPrev={() => navigate(-1)}
        onNext={() => navigate(1)}
      />
    </section>
  );
}

function ProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="bg-white border-4 border-black shadow-[8px_8px_0_var(--color-black)] transition-all cursor-pointer min-w-[350px] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0_var(--color-black)]"
    >
      {/* Project image placeholder */}
      <div className="w-full h-[250px] bg-[#2a2a2a] border-b-4 border-black flex items-center justify-center text-white text-sm">
        [{project.title} Preview]
      </div>

      {/* Project content */}
      <div className="p-6">
        <div className="text-xl font-extrabold mb-2.5 flex justify-between items-center">
          {project.title}
          <div className="w-3 h-3 bg-green border-2 border-black rounded-full flex-shrink-0"></div>
        </div>
        <div className="text-[13px] leading-relaxed text-gray-600 mb-4">
          {project.shortDesc}
        </div>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-black text-white py-1 px-2.5 text-[11px] font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
