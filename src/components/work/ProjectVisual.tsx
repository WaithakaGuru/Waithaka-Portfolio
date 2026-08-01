import type { CaseStudy as Project } from "../../data/projectCasesStudies";
import { ResponsiveImage } from "../global/ResponsiveImage";

const GRADIENTS = [
  "linear-gradient(135deg, #2F9BE0 0%, #12181F 100%)",
  "linear-gradient(135deg, #EC4899 0%, #2F9BE0 100%)",
  "linear-gradient(135deg, #12181F 0%, #2F9BE0 60%)",
  "linear-gradient(135deg, #2F9BE0 0%, #7DD3FC 100%)",
];

export function ProjectVisual({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const gradient = GRADIENTS[index % GRADIENTS.length];

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: gradient }}
    >
      {project.coverImage ? (
        <div className="absolute inset-3 md:inset-4 rounded-2xl overflow-hidden shadow-lg shadow-black/20">
          <ResponsiveImage
            src={project.coverImage}
            alt={project.title}
            variant="cardThumbnail"
            placeholder={gradient}
            className="w-full h-full"
            placeholderAspect="18/17"
            // Skip the lazy loading for the first four images
            priority={index < 4}
          />
        </div>
      ) : (
        <>
          <div className="w-full h-full flex items-center justify-center relative">
            <span
              className="font-display font-bold text-white/90 text-center px-6"
              style={{
                fontSize: "clamp(22px, 3vw, 34px)",
                letterSpacing: "-0.01em",
              }}
            >
              {project.title}
            </span>
          </div>
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "18px 18px",
            }}
          />
        </>
      )}
    </div>
  );
}
