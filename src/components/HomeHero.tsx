import { useRef } from "react";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";
import { DraggableItem } from "./props/DraggableItem";
import { Phone, CoffeeMug, Lamp } from "./props/heroProps";
import { ClipboardNote } from "./props/ClipboardNote";
import { TerminalCard } from "./props/TerminalCard";
import Folder from "./props/Folder";
import { ProfileCard } from "./props/ProfileCard";

export function HomeHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useTheme();

  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      ref={heroRef}
      className="snap-section section-bg-a relative min-h-screen page-margin pt-32 pb-20 flex items-center overflow-hidden"
    >
      {/* Grid-line background — hero only, not the whole page */}
      <div className="hero-grid-bg" />

      {/* ── Draggable desk props layer ── */}
      {/* Lamp stays visible at every breakpoint — it's the only theme toggle now */}
      <DraggableItem
        constraintsRef={heroRef}
        onActivate={toggleTheme}
        tooltip="Switch the mood"
        tooltipPos="bottom"
        initialRotate={-4}
        style={{ top: "3%", right: "6%" }}
        styling="lamp-close"
      >
        <Lamp />
      </DraggableItem>

      <div className="lg:block xl:top-10 absolute z-10 lg:ml-32 -ml-8 top-0">
        <ProfileCard />
      </div>

      <DraggableItem
        constraintsRef={heroRef}
        tooltip="Move me around"
        tooltipPos="bottom"
        initialRotate={3}
        className="hidden md:block animate-slide-down"
        style={{ top: "1%", left: "6%" }}
      >
        <CoffeeMug />
      </DraggableItem>

      <DraggableItem
        constraintsRef={heroRef}
        tooltip="Move me around"
        tooltipPos="bottom"
        initialRotate={-3}
        className="hidden md:block"
        style={{ top: "4%", right: "32%" }}
      >
        <ClipboardNote />
      </DraggableItem>

      <DraggableItem
        constraintsRef={heroRef}
        tooltip="Move me around"
        tooltipPos="right"
        initialRotate={-3}
        className="hidden lg:block z-10 less-top-margin"
        style={{ top: "62%", right: "10%" }}
      >
        <TerminalCard />
      </DraggableItem>

      <DraggableItem
        constraintsRef={heroRef}
        onActivate={scrollToContact}
        tooltip="Get in touch"
        tooltipPos="bottom"
        initialRotate={-2}
        className="hidden md:block"
        style={{ bottom: "4%", left: "8%" }}
      >
        <Phone />
      </DraggableItem>

      <DraggableItem
        constraintsRef={heroRef}
        tooltip="My Tech Stack"
        tooltipPos="bottom"
        className="hidden md:block"
        style={{ bottom: "4%", left: "45%" }}
      >
        <Folder />
      </DraggableItem>

      {/* ── Main content ── */}
      <div
        className="max-w-260 relative ml-auto z-10 mr-auto lg:mr-[28%] py-3 px-4 lg:mt-4 flex
       items-center flex-col mt-10"
      >
        <div
          className="inline-flex items-center gap-2 mb-2 md:mb-6 font-mono-brand text-xs tracking-[0.18em] uppercase"
          style={{ color: "var(--text-sub)" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full animate-pulse-dot"
            style={{ background: "var(--accent)" }}
          />
          Software Engineer · Nairobi, Kenya
        </div>

        <h1
          className="font-display font-semibold tracking-tighter text-center text-2xl xl:text-[1.8rem] leading-8
          xl:leading-11  max-w-90 xl:max-w-[34dvw]"
          style={{
            color: "var(--text)",
          }}
        >
          I turn ideas into{" "}
          <span className="animate-gradient-x">clear custom </span> direction
          <br />& ship with cross-functional teams software that{" "}
          <span className="ticker-container" style={{ color: "var(--accent)" }}>
            <span className="ticker-wrapper">
              <span className="ticker-word">scales.</span>
              <span className="ticker-word text-orange-500">sells.</span>
              <span className="ticker-word text-amber-500">converts.</span>
              <span className="ticker-word text-green-500">transforms.</span>
              {/* Duplicate the first item to ensure a seamless looping transition */}
              {/* <span className="ticker-word">scales.</span> */}
            </span>
          </span>
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            data-cursor="pointer"
            onClick={() =>
              document
                .getElementById("play")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            Play a round <FiArrowDown size={14} />
          </button>
          <a
            data-cursor="pointer"
            href="/docs/Waithaka Ndung'u Resume.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-mono-brand text-xs font-bold uppercase tracking-widest border transition-transform hover:-translate-y-0.5"
            style={{ borderColor: "var(--border-lt)", color: "var(--text)" }}
          >
            <FiDownload size={14} /> Résumé
          </a>
        </div>

        <p
          className="mt-6 font-mono-brand text-[11px] hidden md:block text-center"
          style={{ color: "var(--text-muted)" }}
        >
          try <strong>dragging</strong> items around.
        </p>
      </div>
    </section>
  );
}
