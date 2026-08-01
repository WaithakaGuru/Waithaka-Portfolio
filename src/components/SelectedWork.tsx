// import { useMemo, useState } from "react";
// import { FiGithub, FiExternalLink } from "react-icons/fi";
// import { projects, type Project } from "../data";
// import { ProjectVisual } from "./work/ProjectVisual";
// import { Tooltip } from "./global/Tooltip";
// import { useProjectStudy } from "../contexts";

// export function SelectedWork({
//   onOpenDetails,
// }: {
//   onOpenDetails: VoidFunction;
// }) {
//   const categories = useMemo(
//     () => ["ALL", ...Array.from(new Set(projects.map((p) => p.category)))],
//     [],
//   );

//   // use the Case study Contest to set the current case study for redirects to the correct projectCase Study page
//   const [active, setActive] = useState<string>("ALL");

//   const visible = useMemo(
//     () =>
//       active === "ALL"
//         ? projects
//         : projects.filter((p) => p.category === active),
//     [active],
//   );

//   return (
//     <section
//       id="works"
//       className="snap-section section-bg-a page-margin pb-10 min-h-[90dvh] height-100dvh
//       flex flex-col items-center"
//     >
//       <div className="max-w-325 relative min-w-100 xl:w-7xl flex flex-col items-center">
//         {/* ── Header + filters ── */}
//         <div
//           className="min-w-100 xl:w-6xl max-w-7xl px-4 z-60 sticky top-0
//          bg-(--section-a) pt-5 md:w-[90%] "
//         >
//           <div
//             className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
//             style={{ color: "var(--text-sub)" }}
//           >
//             Selected Work
//           </div>
//           <h2
//             className="font-display font-bold"
//             style={{
//               fontSize: "clamp(32px, 4.5vw, 56px)",
//               lineHeight: 1.02,
//               letterSpacing: "-0.02em",
//               color: "var(--text)",
//             }}
//           >
//             What I've shipped
//           </h2>

//           <div className="mt-8 pb-3 flex flex-wrap gap-2">
//             {categories.map((cat) => {
//               const isActive = cat === active;
//               return (
//                 <button
//                   data-cursor="pointer"
//                   key={cat}
//                   onClick={() => setActive(cat)}
//                   className="px-4 py-2 rounded-full font-mono-brand text-xs font-bold tracking-wide transition-colors"
//                   style={{
//                     background: isActive ? "var(--text)" : "transparent",
//                     color: isActive ? "var(--bg)" : "var(--text-sub)",
//                     border: `1px solid ${isActive ? "var(--text)" : "var(--border-lt)"}`,
//                   }}
//                 >
//                   {cat === "ALL" ? "ALL" : cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* ── CSS sticky-stacking cards ── */}
//         <div
//           className=" relative md:w-11/12 flex flex-col items-center justify-center"
//           style={{
//             placeItems: "center",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           {visible.map((project, i) => (
//             <Tooltip
//               side="cursor"
//               label="Click to View CaseStudy"
//               key={project.title}
//               className="md:w-16/17 mx-auto"
//             >
//               <StackedProjectCard
//                 project={project}
//                 index={i}
//                 onOpenDetails={onOpenDetails}
//               />
//             </Tooltip>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// function StackedProjectCard({
//   project,
//   index,
//   onOpenDetails,
// }: {
//   project: Project;
//   index: number;
//   onOpenDetails: VoidFunction;
// }) {
//   const { setCurrentProjectStudy } = useProjectStudy();
//   const imageFirst = index % 2 === 0;

//   const image = (
//     <div className="relative h-[38vh] md:h-full shrink-0">
//       <ProjectVisual project={project} index={index} />
//       <span
//         className="absolute top-4 left-4 font-mono-brand text-xs px-2 py-1 rounded-md"
//         style={{ background: "rgba(0,0,0,0.35)", color: "#fff" }}
//       >
//         {project.year}
//       </span>
//     </div>
//   );

//   const info = (
//     // Confined to the card's own height — if content is longer than that,
//     // it scrolls *within* this box rather than lengthening the page.
//     <div className="h-full overflow-y-auto p-7 md:p-9 flex flex-col gap-5 md:justify-center">
//       <div>
//         <span
//           className="font-mono-brand text-[11px] px-2 py-1 rounded-md"
//           style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
//         >
//           {project.category}
//         </span>
//         <h3
//           className="font-display font-bold mt-3"
//           style={{
//             fontSize: "clamp(22px, 2.4vw, 32px)",
//             color: "var(--text)",
//             letterSpacing: "-0.01em",
//           }}
//         >
//           {project.title}
//         </h3>
//         <p
//           className="mt-3 text-[15px] leading-relaxed"
//           style={{ color: "var(--text-sub)" }}
//         >
//           {project.shortDesc}
//         </p>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {project.tags.map((tag) => (
//           <span
//             key={tag}
//             className="font-mono-brand text-[11px] px-2.5 py-1 rounded-full"
//             style={{
//               border: "1px solid var(--border-lt)",
//               color: "var(--text-sub)",
//             }}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <ul className="flex flex-col gap-2">
//         {project.features.map((f) => (
//           <li
//             key={f}
//             className="text-sm leading-relaxed flex gap-2"
//             style={{ color: "var(--text-sub)" }}
//           >
//             <span style={{ color: "var(--accent)" }}>•</span> {f}
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center gap-3 pt-1">
//         <a
//           data-cursor="pointer"
//           href={project.github}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
//           style={{ border: "1px solid var(--border-lt)", color: "var(--text)" }}
//         >
//           <FiGithub size={14} /> Code
//         </a>
//         <a
//           data-cursor="pointer"
//           href={project.live}
//           target="_blank"
//           rel="noreferrer"
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
//           style={{ background: "var(--accent)", color: "#fff" }}
//         >
//           <FiExternalLink size={14} /> Live
//         </a>
//       </div>
//     </div>
//   );

//   return (
//     <div
//       className="sticky top-48 mt-8 w-16/17 mx-auto "
//       style={{ zIndex: index + 10 }}
//       onClick={() => {
//         setCurrentProjectStudy("");
//         onOpenDetails;
//       }}
//     >
//       {/* Inset ~5% so the previous card's edge peeks out during the stack
//           transition, and the card itself always has a solid --card-bg so it
//           fully occludes what's behind it. */}
//       <div
//         className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10"
//         style={{
//           height: "65.4vh",
//           background: "var(--card-bg)",
//           border: "1px solid var(--border-lt)",
//         }}
//       >
//         {imageFirst ? (
//           <>
//             {image}
//             {info}
//           </>
//         ) : (
//           <>
//             <div className="md:order-2">{image}</div>
//             <div className="md:order-1">{info}</div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// import { useEffect, useMemo, useRef, useState } from "react";
// import { FiGithub, FiExternalLink } from "react-icons/fi";
// import {
//   caseStudies as projects,
//   type CaseStudy,
// } from "../data/projectCasesStudies";
// import { ProjectVisual } from "./work/ProjectVisual";
// import { Tooltip } from "./global/Tooltip";
// import { useProjectStudy } from "../contexts";

// // How much extra scroll room (beyond the card's own height) each card gets
// // before the next one fully covers it. This is what drives the recede
// // (scale down + dim) animation — bigger number = slower, longer transition.
// const STACK_SCROLL_BUFFER = "48vh";

// export function SelectedWork({
//   onOpenDetails,
// }: {
//   onOpenDetails: VoidFunction;
// }) {
//   const categories = useMemo(
//     () => ["ALL", ...Array.from(new Set(projects.map((p) => p.category)))],
//     [],
//   );

//   // use the Case study Contest to set the current case study for redirects to the correct projectCase Study page
//   const [active, setActive] = useState<string>("ALL");

//   const visible = useMemo(
//     () =>
//       active === "ALL"
//         ? projects
//         : projects.filter((p) => p.category === active),
//     [active],
//   );

//   const { setSpacerRef, setCardRef } = useStackProgress(visible.length);

//   return (
//     <section
//       id="works"
//       className="snap-section section-bg-a page-margin pb-10 min-h-[90dvh] height-100dvh
//       flex flex-col items-center"
//     >
//       <div className="max-w-325 relative min-w-100 xl:w-7xl flex flex-col items-center">
//         {/* ── Header + filters ── */}
//         <div
//           className="min-w-100 xl:w-6xl max-w-7xl px-4 z-60 sticky top-0
//          bg-(--section-a) pt-5 md:w-[90%] "
//         >
//           <div
//             className="font-mono-brand text-xs tracking-[0.18em] uppercase mb-4"
//             style={{ color: "var(--text-sub)" }}
//           >
//             Selected Work
//           </div>
//           <h2
//             className="font-display font-bold"
//             style={{
//               fontSize: "clamp(32px, 4.5vw, 56px)",
//               lineHeight: 1.02,
//               letterSpacing: "-0.02em",
//               color: "var(--text)",
//             }}
//           >
//             What I've shipped
//           </h2>

//           <div className="mt-8 pb-3 flex flex-wrap gap-2">
//             {categories.map((cat) => {
//               const isActive = cat === active;
//               return (
//                 <button
//                   data-cursor="pointer"
//                   key={cat}
//                   onClick={() => setActive(cat)}
//                   className="px-4 py-2 rounded-full font-mono-brand text-xs font-bold tracking-wide transition-colors"
//                   style={{
//                     background: isActive ? "var(--text)" : "transparent",
//                     color: isActive ? "var(--bg)" : "var(--text-sub)",
//                     border: `1px solid ${isActive ? "var(--text)" : "var(--border-lt)"}`,
//                   }}
//                 >
//                   {cat === "ALL" ? "ALL" : cat}
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* ── Sticky-stacking cards with scroll-driven recede effect ── */}
//         <div
//           className=" relative md:w-11/12 flex flex-col items-center justify-center"
//           style={{
//             placeItems: "center",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//           }}
//         >
//           {visible.map((project, i) => (
//             <Tooltip
//               side="cursor"
//               label="Click to View CaseStudy"
//               key={project.slug}
//               className="md:w-16/17 mx-auto"
//             >
//               <StackedProjectCard
//                 project={project}
//                 index={i}
//                 onOpenDetails={onOpenDetails}
//                 spacerRef={setSpacerRef(i)}
//                 cardRef={setCardRef(i)}
//               />
//             </Tooltip>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

/**
 * Drives the Apple-style "receding" stack effect: as the next card scrolls
 * up to cover the current one, the current card scales down slightly and
 * dims — instead of just abruptly disappearing underneath the next card.
 *
 * Each card sits inside a taller, non-sticky "spacer" div. The gap between
 * the spacer's height and the card's own height is the scroll distance over
 * which the recede animation plays. We track that progress (0 → 1) per card
 * with rAF-driven measurement and expose it as a CSS custom property so the
 * actual scale/opacity transform stays pure CSS (fast, GPU-accelerated).
 */
// function useStackProgress(count: number) {
//   const spacerRefs = useRef<(HTMLDivElement | null)[]>([]);
//   const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const reduceMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)",
//     ).matches;
//     if (reduceMotion) return;

//     let frame = 0;
//     const tick = () => {
//       for (let i = 0; i < count; i++) {
//         const spacer = spacerRefs.current[i];
//         const card = cardRefs.current[i];
//         if (!spacer || !card) continue;

//         const range = spacer.offsetHeight - card.offsetHeight;
//         const top = spacer.getBoundingClientRect().top;
//         const progress = range > 0 ? Math.min(Math.max(-top / range, 0), 1) : 0;

//         card.style.setProperty("--stack-progress", progress.toFixed(3));
//       }
//       frame = requestAnimationFrame(tick);
//     };

//     frame = requestAnimationFrame(tick);
//     return () => cancelAnimationFrame(frame);
//   }, [count]);

//   const setSpacerRef = (i: number) => (el: HTMLDivElement | null) => {
//     spacerRefs.current[i] = el;
//   };
//   const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
//     cardRefs.current[i] = el;
//   };

//   return { setSpacerRef, setCardRef };
// }

// function StackedProjectCard({
//   project,
//   index,
//   onOpenDetails,
//   spacerRef,
//   cardRef,
// }: {
//   project: CaseStudy;
//   index: number;
//   onOpenDetails: VoidFunction;
//   spacerRef: (el: HTMLDivElement | null) => void;
//   cardRef: (el: HTMLDivElement | null) => void;
// }) {
//   const { setCurrentProjectStudy } = useProjectStudy();
//   const imageFirst = index % 2 === 0;

//   const image = (
//     <div className="relative h-[38vh] md:h-full shrink-0">
//       <ProjectVisual project={project} index={index} />
//       <span
//         className="absolute top-4 left-4 font-mono-brand text-xs px-2 py-1 rounded-md"
//         style={{ background: "rgba(0,0,0,0.35)", color: "#fff" }}
//       >
//         {project.year}
//       </span>
//     </div>
//   );

//   const info = (
//     // Confined to the card's own height — if content is longer than that,
//     // it scrolls *within* this box rather than lengthening the page.
//     <div className="h-full overflow-y-auto p-7 md:p-9 flex flex-col gap-5 md:justify-center">
//       <div>
//         <span
//           className="font-mono-brand text-[11px] px-2 py-1 rounded-md"
//           style={{ background: "var(--tag-bg)", color: "var(--tag-text)" }}
//         >
//           {project.category}
//         </span>
//         <h3
//           className="font-display font-bold mt-3"
//           style={{
//             fontSize: "clamp(22px, 2.4vw, 32px)",
//             color: "var(--text)",
//             letterSpacing: "-0.01em",
//           }}
//         >
//           {project.title}
//         </h3>
//         <p
//           className="mt-3 text-[15px] leading-relaxed"
//           style={{ color: "var(--text-sub)" }}
//         >
//           {project.tagline}
//         </p>
//       </div>

//       <div className="flex flex-wrap gap-2">
//         {project.techStack.map((tag) => (
//           <span
//             key={tag}
//             className="font-mono-brand text-[11px] px-2.5 py-1 rounded-full"
//             style={{
//               border: "1px solid var(--border-lt)",
//               color: "var(--text-sub)",
//             }}
//           >
//             {tag}
//           </span>
//         ))}
//       </div>

//       <ul className="flex flex-col gap-2">
//         {project.features.map((f) => (
//           <li
//             key={f}
//             className="text-sm leading-relaxed flex gap-2"
//             style={{ color: "var(--text-sub)" }}
//           >
//             <span style={{ color: "var(--accent)" }}>•</span> {f}
//           </li>
//         ))}
//       </ul>

//       <div className="flex items-center gap-3 pt-1">
//         <a
//           data-cursor="pointer"
//           href={project.github}
//           target="_blank"
//           rel="noreferrer"
//           onClick={(e) => e.stopPropagation()}
//           className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
//           style={{ border: "1px solid var(--border-lt)", color: "var(--text)" }}
//         >
//           <FiGithub size={14} /> Code
//         </a>
//         {project.live && (
//           <a
//             data-cursor="pointer"
//             href={project.live}
//             target="_blank"
//             rel="noreferrer"
//             onClick={(e) => e.stopPropagation()}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full font-mono-brand text-xs font-bold"
//             style={{ background: "var(--accent)", color: "#fff" }}
//           >
//             <FiExternalLink size={14} /> Live
//           </a>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     // Spacer controls how long this card stays pinned before the next one
//     // takes over — its extra height (card height + STACK_SCROLL_BUFFER) is
//     // the scroll distance the recede animation plays over.
//     <div
//       ref={spacerRef}
//       className="relative w-16/17 mx-auto"
//       style={{ height: `calc(65.4vh + ${STACK_SCROLL_BUFFER})` }}
//     >
//       <div
//         className="sticky top-48"
//         style={{ zIndex: index + 10 }}
//         onClick={() => {
//           setCurrentProjectStudy(project.slug);
//           onOpenDetails();
//         }}
//       >
//         {/* Inset ~5% so the previous card's edge peeks out during the stack
//             transition, and the card itself always has a solid --card-bg so it
//             fully occludes what's behind it. Scale/dim is driven by
//             --stack-progress (0 → 1), set via rAF in useStackProgress. */}
//         <div
//           ref={cardRef}
//           className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10"
//           style={{
//             height: "65.4vh",
//             background: "var(--card-bg)",
//             border: "1px solid var(--border-lt)",
//             transformOrigin: "top center",
//             transform:
//               "scale(calc(1 - var(--stack-progress, 0) * 0.06)) translateY(calc(var(--stack-progress, 0) * -14px))",
//             filter: "brightness(calc(1 - var(--stack-progress, 0) * 0.22))",
//             willChange: "transform, filter",
//           }}
//         >
//           {imageFirst ? (
//             <>
//               {image}
//               {info}
//             </>
//           ) : (
//             <>
//               <div className="md:order-2">{image}</div>
//               <div className="md:order-1">{info}</div>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className="h-full p-5 md:p-7 flex flex-col gap-5 md:justify-center">
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

      <div className="flex items-center gap-3 pt-1">
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
        className="rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-2 mb-10"
        style={{
          height: "66vh",
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
