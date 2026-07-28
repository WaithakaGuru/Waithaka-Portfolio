import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { FiArrowDown, FiDownload, FiExternalLink } from "react-icons/fi";
import Folder from "./folder";
import Lanyard from "./lanyard";
import { useTheme } from "../contexts/ThemeContext";

type DragKey = "lanyard" | "coffee" | "clipboard" | "folder" | "phone" | "terminal" | "lamp";
type DragPos = { x: number; y: number };

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function useViewportSize() {
  const [size, setSize] = useState(() => ({
    width: typeof window === "undefined" ? 1440 : window.innerWidth,
    height: typeof window === "undefined" ? 900 : window.innerHeight,
  }));

  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

function ruledBackgroundStyle() {
  return {
    backgroundImage:
      "linear-gradient(to right, rgba(47,155,224,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(47,155,224,0.08) 1px, transparent 1px), linear-gradient(to right, transparent 0, transparent 71px, rgba(47,155,224,0.12) 71px, rgba(47,155,224,0.12) 72px, transparent 72px)",
    backgroundSize: "72px 72px, 72px 72px, 72px 72px",
  } as const;
}

function DraggableItem({
  dragKey,
  boardWidth,
  boardHeight,
  width,
  height,
  zIndex,
  children,
}: {
  dragKey: DragKey;
  boardWidth: number;
  boardHeight: number;
  width: number;
  height: number;
  zIndex: number;
  children: ReactNode;
}) {
  const [position, setPosition] = useState<DragPos>(() => {
    const positions: Record<DragKey, DragPos> = {
      lanyard: { x: Math.round(boardWidth * 0.08), y: Math.round(boardHeight * 0.18) },
      coffee: { x: Math.round(boardWidth * 0.18), y: Math.round(boardHeight * 0.06) },
      clipboard: { x: Math.round(boardWidth * 0.56), y: Math.round(boardHeight * 0.11) },
      folder: { x: Math.round(boardWidth * 0.42), y: Math.round(boardHeight * 0.80) },
      phone: { x: Math.round(boardWidth * 0.13), y: Math.round(boardHeight * 0.72) },
      terminal: { x: Math.round(boardWidth * 0.70), y: Math.round(boardHeight * 0.56) },
      lamp: { x: Math.round(boardWidth * 0.86), y: Math.round(boardHeight * 0.08) },
    };
    return positions[dragKey];
  });
  const draggingRef = useRef(false);
  const offsetRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const positions: Record<DragKey, DragPos> = {
      lanyard: { x: Math.round(boardWidth * 0.08), y: Math.round(boardHeight * 0.18) },
      coffee: { x: Math.round(boardWidth * 0.18), y: Math.round(boardHeight * 0.06) },
      clipboard: { x: Math.round(boardWidth * 0.56), y: Math.round(boardHeight * 0.11) },
      folder: { x: Math.round(boardWidth * 0.42), y: Math.round(boardHeight * 0.80) },
      phone: { x: Math.round(boardWidth * 0.13), y: Math.round(boardHeight * 0.72) },
      terminal: { x: Math.round(boardWidth * 0.70), y: Math.round(boardHeight * 0.56) },
      lamp: { x: Math.round(boardWidth * 0.86), y: Math.round(boardHeight * 0.08) },
    };
    if (!draggingRef.current) {
      setPosition(positions[dragKey]);
    }
  }, [boardWidth, boardHeight, dragKey]);

  useEffect(() => {
    const onMove = (event: globalThis.PointerEvent) => {
      if (!draggingRef.current) return;
      const nextX = clamp(event.clientX - offsetRef.current.x, 16, boardWidth - width - 16);
      const nextY = clamp(event.clientY - offsetRef.current.y, 16, boardHeight - height - 16);
      setPosition({ x: nextX, y: nextY });
    };

    const onUp = () => {
      draggingRef.current = false;
      document.body.style.userSelect = "";
    };

    window.addEventListener("pointermove", onMove as unknown as EventListener);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);

    return () => {
      window.removeEventListener("pointermove", onMove as unknown as EventListener);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [boardWidth, boardHeight, width, height]);

  const onPointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    draggingRef.current = true;
    const rect = event.currentTarget.getBoundingClientRect();
    offsetRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    document.body.style.userSelect = "none";
  };

  return (
    <div
      onPointerDown={onPointerDown}
      className="absolute select-none cursor-grab active:cursor-grabbing"
      style={{
        left: position.x,
        top: position.y,
        width,
        height,
        zIndex,
        touchAction: "none",
      }}
    >
      {children}
    </div>
  );
}

function Eyebrow() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono-brand text-[11px] uppercase tracking-[0.34em]" style={{ borderColor: "rgba(18,24,31,0.10)", color: "var(--text-sub)", background: "rgba(255,255,255,0.72)", boxShadow: "0 8px 18px rgba(18,24,31,0.05)" }}>
      <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
      Software Engineer · Nairobi, Kenya
    </div>
  );
}

function CoffeeCup() {
  return (
    <img
      src="/coffee1.png"
      alt="Coffee cup"
      className="h-full w-full object-contain"
      style={{ filter: "drop-shadow(0 12px 20px rgba(18,24,31,0.14))" }}
    />
  );
}

function ClipboardCard() {
  return (
    <div className="h-full w-full rounded-[24px] border border-[rgba(18,24,31,0.10)] bg-[rgba(255,255,255,0.82)] p-4 shadow-[0_20px_36px_rgba(18,24,31,0.08)] backdrop-blur-[2px]">
      <div className="mx-auto mb-3 h-5 w-14 rounded-full border border-[rgba(18,24,31,0.12)]" />
      <div className="grid gap-2">
        <div className="h-2 rounded-full bg-[rgba(47,155,224,0.24)]" />
        <div className="h-2 rounded-full bg-[rgba(47,155,224,0.16)]" />
        <div className="h-2 rounded-full bg-[rgba(47,155,224,0.12)]" />
        <div className="h-2 w-2/3 rounded-full bg-[rgba(47,155,224,0.12)]" />
      </div>
      <div className="mt-4 rounded-xl border border-dashed border-[rgba(18,24,31,0.10)] px-3 py-2 text-center font-mono-brand text-[9px] uppercase tracking-[0.26em] text-[var(--text-sub)]">
        Notes
      </div>
    </div>
  );
}

function PhoneCard({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onOpenContact();
      }}
      className="block h-full w-full"
      aria-label="Open contact section"
    >
      <img
        src="/blue_phone.png"
        alt="Phone"
        className="h-full w-full object-contain"
        style={{ filter: "drop-shadow(0 14px 22px rgba(18,24,31,0.16))" }}
      />
    </button>
  );
}

function LampCard({ onToggleTheme }: { onToggleTheme: () => void }) {
  return (
    <button
      type="button"
      onClick={(event) => {
        event.stopPropagation();
        onToggleTheme();
      }}
      className="block h-full w-full"
      aria-label="Toggle theme"
    >
      <img
        src="/bluelamp1.png"
        alt="Lamp"
        className="h-full w-full object-contain"
        style={{ filter: "drop-shadow(0 12px 20px rgba(18,24,31,0.14))" }}
      />
    </button>
  );
}

function TerminalCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onPointerEnter={() => setExpanded(true)}
      onPointerLeave={() => setExpanded(false)}
      className="h-full w-full rounded-[28px] border border-[rgba(18,24,31,0.12)] bg-[rgba(255,255,255,0.82)] shadow-[0_22px_44px_rgba(18,24,31,0.10)] backdrop-blur-[2px] transition-all duration-300"
      style={{ boxShadow: expanded ? "0 28px 56px rgba(18,24,31,0.14)" : "0 22px 44px rgba(18,24,31,0.10)" }}
    >
      <div className="flex items-center gap-1.5 border-b border-[rgba(18,24,31,0.10)] px-4 py-3" style={{ background: "rgba(47,155,224,0.08)" }}>
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B6B]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#F3C94A]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#31C96C]" />
        <span className="ml-2 text-[11px] font-mono-brand uppercase tracking-[0.22em] text-[var(--text-sub)]">waithaka — zsh</span>
      </div>
      <div className="space-y-3 px-4 py-4 font-mono-brand text-[11px] leading-5 text-[var(--text)] transition-all duration-300">
        <div>
          <span className="text-[var(--accent)]">~ $</span> who_am_i
          <p className="mt-1 text-[var(--text-sub)]">Full stack engineer · founder, Kiru Tech</p>
        </div>
        <div>
          <span className="text-[var(--accent)]">~ $</span> focus
          <p className="mt-1 text-[var(--text-sub)]">Go, systems thinking, databases, product work</p>
        </div>
        <div className={expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}>
          <span className="text-[var(--accent)]">~ $</span> currently
          <p className="mt-1 text-[var(--text-sub)]">Building careful interfaces with a bias toward clarity</p>
        </div>
        <div className={expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}>
          <span className="text-[var(--accent)]">~ $</span> terminal
          <p className="mt-1 text-[var(--text-sub)]">Hover to reveal more detail, drag to move it</p>
        </div>
        <div>
          <span className="text-[var(--accent)]">~ $</span> <span className="blink">▍</span>
        </div>
      </div>
    </div>
  );
}

function ContactPill() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2 rounded-full border border-[rgba(18,24,31,0.12)] bg-[rgba(255,255,255,0.82)] px-4 py-2 font-mono-brand text-[10px] uppercase tracking-[0.26em] text-[var(--text-sub)] shadow-[0_10px_20px_rgba(18,24,31,0.06)]"
    >
      Contact
      <FiExternalLink size={12} />
    </a>
  );
}

export function HomeHero() {
  const { toggleTheme } = useTheme();
  const { width, height } = useViewportSize();
  const boardWidth = width;
  const boardHeight = Math.max(height, 820);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-16 pt-24 sm:px-10 lg:px-24 lg:pt-28">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 14%, rgba(47,155,224,0.08), transparent 28%), radial-gradient(circle at 82% 18%, rgba(236,72,153,0.05), transparent 24%), linear-gradient(180deg, rgba(255,255,255,0.58) 0%, rgba(255,255,255,0.22) 100%)",
          ...ruledBackgroundStyle(),
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[rgba(255,255,255,0.96)] to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl grid-cols-1 items-center lg:grid-cols-[1fr_1.02fr] lg:gap-8">
        <div className="relative z-10 max-w-3xl text-center lg:mx-auto lg:-mt-4">
          <div className="mb-6 flex justify-center lg:justify-start">
            <Eyebrow />
          </div>
          <h1 className="font-display text-[clamp(48px,6vw,92px)] font-bold tracking-[-0.045em] leading-[0.93] text-[var(--text)]">
            I turn ideas into
            <br />
            software that <span style={{ color: "var(--accent)" }}>ships.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[var(--text-sub)] sm:text-lg lg:mx-0 lg:max-w-2xl">
            Full stack engineer and founder of <span className="font-semibold text-[var(--text)]">Kiru Tech</span>. I build AI automations, MVPs, and systems work with a clear bias toward useful, legible interfaces.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <button
              onClick={() => document.getElementById("play")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--text)", color: "var(--bg)" }}
            >
              Play a round <FiArrowDown size={14} />
            </button>
            <a
              href="/Waithaka Ndung'u Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border px-6 py-3 font-mono-brand text-xs font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5"
              style={{ borderColor: "var(--border-lt)", color: "var(--text)", background: "rgba(255,255,255,0.56)" }}
            >
              <FiDownload size={14} /> Résumé
            </a>
          </div>
        </div>

        <div className="relative mt-10 h-[72vh] min-h-[640px] w-full lg:mt-0">
          <div className="absolute inset-0 rounded-[36px] border border-[rgba(18,24,31,0.06)] bg-[rgba(255,255,255,0.20)]" />

          <DraggableItem dragKey="lanyard" boardWidth={boardWidth} boardHeight={boardHeight} width={220} height={280} zIndex={10}>
            <Lanyard className="h-full w-full" />
          </DraggableItem>

          <DraggableItem dragKey="coffee" boardWidth={boardWidth} boardHeight={boardHeight} width={124} height={124} zIndex={18}>
            <CoffeeCup />
          </DraggableItem>

          <DraggableItem dragKey="clipboard" boardWidth={boardWidth} boardHeight={boardHeight} width={132} height={176} zIndex={12}>
            <ClipboardCard />
          </DraggableItem>

          <DraggableItem dragKey="folder" boardWidth={boardWidth} boardHeight={boardHeight} width={168} height={136} zIndex={11}>
            <Folder
              color="#BA8FE0"
              size={1}
              items={[
                <div key="paper-1" className="h-full rounded-[10px] border border-[rgba(18,24,31,0.10)] bg-white px-3 py-2 font-hand text-[18px] leading-5 text-[#6D5BA8] shadow-sm">
                  Test &gt; debate
                  <br />
                  Ship it.
                </div>,
                <div key="paper-2" className="h-full rounded-[10px] border border-[rgba(18,24,31,0.10)] bg-white px-3 py-2 font-hand text-[18px] leading-5 text-[#6D5BA8] shadow-sm">
                  Ask why twice.
                  <br />
                  Move with intent.
                </div>,
                <div key="paper-3" className="h-full rounded-[10px] border border-[rgba(18,24,31,0.10)] bg-white px-3 py-2 font-hand text-[18px] leading-5 text-[#6D5BA8] shadow-sm">
                  Metrics over pixels.
                </div>,
              ]}
            />
          </DraggableItem>

          <DraggableItem dragKey="phone" boardWidth={boardWidth} boardHeight={boardHeight} width={108} height={154} zIndex={20}>
            <PhoneCard onOpenContact={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} />
          </DraggableItem>

          <DraggableItem dragKey="terminal" boardWidth={boardWidth} boardHeight={boardHeight} width={392} height={258} zIndex={13}>
            <TerminalCard />
          </DraggableItem>

          <DraggableItem dragKey="lamp" boardWidth={boardWidth} boardHeight={boardHeight} width={142} height={136} zIndex={19}>
            <LampCard onToggleTheme={toggleTheme} />
          </DraggableItem>

          <div className="absolute left-1/2 top-[52%] z-0 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="font-display text-[clamp(18px,2.35vw,30px)] font-bold leading-[1.08] tracking-[-0.03em] text-[var(--text)]">
              I turn ambiguity into clear product direction
              <br />
              & ship with cross-functional teams faster.
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <ContactPill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}