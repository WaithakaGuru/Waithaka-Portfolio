import { useMemo, useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import {
  caseStudies as projects,
  type CaseStudy,
} from "../data/projectCasesStudies";
import { ProjectVisual } from "./work/ProjectVisual";
import { Tooltip } from "./global/Tooltip";
import { useProjectStudy } from "../contexts";

export function SelectedWork({
  onOpenDetails,
}: {
  onOpenDetails: VoidFunction;
}) {
  const categories = useMemo(
    () => [...Array.from(new Set(projects.map((p) => p.category))), "ALL"],
    [],
  );
  // use the Case study Contest to set the current case study for redirects to the correct projectCase Study page
  const [active, setActive] = useState<string>(categories[0]);
  const visible = useMemo(
    () =>
      active === "ALL"
        ? projects
        : projects.filter((p) => p.category === active),
    [active],
  );

  return (
    <section
      id="works"
      className="snap-section section-bg-a page-margin pb-10 min-h-[90dvh] height-100dvh
      flex flex-col items-center"
    >
      <div className="max-w-325 relative min-w-100 xl:w-7xl flex flex-col items-center">
        {/* ── Header + filters ── */}
        <div
          className="min-w-100 xl:w-6xl max-w-7xl px-4 z-60 sticky top-0
         bg-(--section-a) pt-5 md:w-[90%] "
        >
          <div
            className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
            style={{ color: "var(--text-sub)" }}
          >
            Selected Work
          </div>
          <h2
            className="font-display font-bold"
            style={{
              fontSize: "clamp(32px, 4.5vw, 56px)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              color: "var(--text)",
            }}
          >
            What I've shipped
          </h2>

          <div className="mt-8 pb-3 flex flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  data-cursor="pointer"
                  key={cat}
                  onClick={() => setActive(cat)}
                  className="px-4 py-2 rounded-full font-mono-brand text-xs font-bold tracking-wide transition-colors"
                  style={{
                    background: isActive ? "var(--text)" : "transparent",
                    color: isActive ? "var(--bg)" : "var(--text-sub)",
                    border: `1px solid ${isActive ? "var(--text)" : "var(--border-lt)"}`,
                  }}
                >
                  {cat === "ALL" ? "ALL" : cat}
                </button>
              );
            })}
          </div>
        </div>
        <div
          className=" relative md:w-11/12 flex flex-col items-center justify-center"
          style={{
            placeItems: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {visible.map((project, i) => (
            <Tooltip
              side="cursor"
              label="Click to View CaseStudy"
              key={project.slug}
              className="md:w-16/17 mx-auto sticky! top-48"
            >
              <StackedProjectCard
                project={project}
                index={i}
                onOpenDetails={onOpenDetails}
              />
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
}

function StackedProjectCard({
  project,
  index,
  onOpenDetails,
}: {
  project: CaseStudy;
  index: number;
  onOpenDetails: VoidFunction;
}) {
  const { setCurrentProjectStudy } = useProjectStudy();
  const imageFirst = index % 2 === 0;

  const image = (
    <div className="relative h-[38vh] md:h-full shrink-0">
      <ProjectVisual project={project} index={index} />
      <span
        className="absolute top-4 left-4 font-mono-brand text-xs px-2 py-1 rounded-md"
        style={{ background: "rgba(0,0,0,0.35)", color: "#fff" }}
      >
        {project.year}
      </span>
    </div>
  );

  const info = (
    <div className="h-full p-4 md:p-6 flex flex-col md:justify-center">
      <div>
        <span
          className="font-mono-brand text-[11px] px-2 py-1 rounded-md"
          style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
        >
          {project.category}
        </span>
        <h3
          className="font-display font-bold mt-3"
          style={{
            fontSize: "clamp(22px, 2.4vw, 32px)",
            color: "var(--text)",
            letterSpacing: "-0.01em",
          }}
        >
          {project.slug}
        </h3>
        <p
          className="mt-3 text-[15px] leading-relaxed"
          style={{ color: "var(--text-sub)" }}
        >
          {project.title}
        </p>
      </div>

      {/* Project details - techstack and features list  */}

      <div className="overflow-y-scroll h-1/2 min-h-[30dvh] bg-(--bg2) p-2 rounded-md">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tag) => (
            <span
              key={tag}
              className="font-mono-brand text-[11px] px-2.5 py-1 rounded-full"
              style={{
                border: "1px solid var(--border-lt)",
                color: "var(--text-sub)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <ul className="flex flex-col gap-2">
          {project.features.map(
            (f, i) =>
              i < 3 && (
                <li
                  key={f}
                  className="text-sm leading-relaxed flex gap-2"
                  style={{ color: "var(--text-sub)" }}
                >
                  <span style={{ color: "var(--accent)" }}>•</span> {f}
                </li>
              ),
          )}
        </ul>
      </div>
      <div className="flex items-center gap-6 pb-2 pt-5">
        <a
          data-cursor="pointer"
          href={project.github}
          target="_blank"
          rel="noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
          style={{ border: "1px solid var(--border-lt)", color: "var(--text)" }}
        >
          <FiGithub size={14} /> Code
        </a>
        {project.live && (
          <a
            data-cursor="pointer"
            href={project.live}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            <FiExternalLink size={14} /> Live
          </a>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="w-16/17 mx-auto "
      style={{ zIndex: index + 10 }}
      onClick={() => {
        setCurrentProjectStudy(project.slug);
        onOpenDetails();
      }}
    >
      <div
        className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10 h-[64dvh]!"
        style={{
          // height: "66dvh !important",
          background: "var(--card-bg)",
          border: "1px solid var(--border-lt)",
        }}
      >
        {imageFirst ? (
          <>
            {image}
            {info}
          </>
        ) : (
          <>
            <div className="md:order-2">{image}</div>
            <div className="md:order-1">{info}</div>
          </>
        )}
      </div>
    </div>
  );
}
