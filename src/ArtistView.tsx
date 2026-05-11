import { useState, useEffect, useRef } from "react";
import {
  experiences,
  education,
  projects,
  techStack,
  userReports,
  stats,
} from "./data";

// ─── GLITCH TEXT ────────────────────────────────────────────
function GlitchText({
  text,
  className = "",
  style = {},
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span className={`glitch-wrap ${className}`} style={style} data-text={text}>
      {text}
    </span>
  );
}

// ─── CURSOR ─────────────────────────────────────────────────
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let tx = 0,
      ty = 0,
      cx = 0,
      cy = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove);

    const tick = () => {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${tx - 6}px, ${ty - 6}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${cx - 20}px, ${cy - 20}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-[#F97316] rounded-full pointer-events-none z-99999 mix-blend-difference"
      />
      <div
        ref={trailRef}
        className="fixed top-0 left-0 w-10 h-10 border border-[#F97316]/50 rounded-full pointer-events-none z-99998"
        style={{ transition: "none" }}
      />
    </>
  );
}

// ─── NOISE OVERLAY ──────────────────────────────────────────
function NoiseOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-9999 opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

// ─── SCANLINES ──────────────────────────────────────────────
function Scanlines() {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-9998 opacity-[0.04]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)",
      }}
    />
  );
}

// ─── MARQUEE ────────────────────────────────────────────────
function Marquee({
  items,
  reverse = false,
  speed = 30,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex w-max"
        style={{
          animation: `marquee-scroll ${speed}s linear infinite ${reverse ? "reverse" : "normal"}`,
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-[14px] tracking-[0.2em] uppercase text-[#F97316]/60 px-10 border-r border-[#F97316]/20 whitespace-nowrap"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── SECTION HEADER ─────────────────────────────────────────
function SectionHeader({
  num,
  label,
  accent,
}: {
  num: string;
  label: string;
  accent: string;
}) {
  return (
    <div className="flex items-end gap-8 mb-20">
      <span className="font-['Bebas_Neue'] text-[150px] leading-none text-white/5 select-none tabular-nums">
        {num}
      </span>
      <div className="pb-5">
        <div className="h-0.5 w-20 mb-4" style={{ background: accent }} />
        <h2 className="font-['Bebas_Neue'] text-[clamp(50px,6.25vw,90px)] leading-none tracking-[0.04em] text-white">
          {label.split("_").map((part, i) => (
            <span key={i}>
              {i > 0 && <span style={{ color: accent }}>_</span>}
              {part}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────
interface ArtistViewProps {
  onSwitchView?: () => void;
}

export function ArtistView({ onSwitchView }: ArtistViewProps) {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
    setActiveSection(id);
  };

  const navLinks = [
    { label: "ABOUT", id: "about" },
    { label: "STACK", id: "stack" },
    { label: "LOGS", id: "logs" },
    { label: "WORK", id: "projects" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <div
      className="min-h-screen bg-[#060608] text-white overflow-x-hidden cursor-none"
      style={{ fontFamily: "'JetBrains Mono', monospace" }}
    >
      <CustomCursor />
      <NoiseOverlay />
      <Scanlines />

      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=JetBrains+Mono:wght@400;500;700;800&display=swap');

        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes flicker {
          0%, 95%, 100% { opacity: 1; }
          96% { opacity: 0.4; }
          97% { opacity: 1; }
          98% { opacity: 0.2; }
          99% { opacity: 1; }
        }

        @keyframes glitch-clip {
          0% { clip-path: inset(40% 0 50% 0); }
          10% { clip-path: inset(90% 0 1% 0); }
          20% { clip-path: inset(40% 0 59% 0); }
          30% { clip-path: inset(80% 0 5% 0); }
          40% { clip-path: inset(10% 0 85% 0); }
          50% { clip-path: inset(20% 0 40% 0); }
          60% { clip-path: inset(71% 0 22% 0); }
          70% { clip-path: inset(60% 0 37% 0); }
          80% { clip-path: inset(30% 0 65% 0); }
          90% { clip-path: inset(15% 0 80% 0); }
          100% { clip-path: inset(0% 0 100% 0); }
        }

        @keyframes glitch-skew {
          0% { transform: skew(0deg); }
          10% { transform: skew(-2deg); }
          20% { transform: skew(1deg); }
          30% { transform: skew(-0.5deg); }
          100% { transform: skew(0deg); }
        }

        @keyframes float-in {
          from { opacity: 0; transform: translateY(60px) skewY(-2deg); }
          to { opacity: 1; transform: translateY(0) skewY(0); }
        }

        @keyframes reveal-line {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg) translateX(120px) rotate(0deg); }
          to { transform: rotate(360deg) translateX(120px) rotate(-360deg); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        @keyframes blink-cursor {
          0%, 100% { border-right-color: transparent; }
          50% { border-right-color: #F97316; }
        }

        @keyframes scroll-progress {
          from { width: 0%; }
          to { width: 100%; }
        }

        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -3%); }
          20% { transform: translate(3%, 1%); }
          30% { transform: translate(-1%, 3%); }
          40% { transform: translate(2%, -2%); }
          50% { transform: translate(-3%, 1%); }
          60% { transform: translate(1%, -3%); }
          70% { transform: translate(-2%, 2%); }
          80% { transform: translate(3%, -1%); }
          90% { transform: translate(-1%, 2%); }
        }

        .glitch-wrap {
          position: relative;
          display: inline-block;
        }
        .glitch-wrap::before,
        .glitch-wrap::after {
          content: attr(data-text);
          position: absolute;
          top: 0; left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-wrap.active::before {
          color: #0ff;
          animation: glitch-clip 0.15s steps(1) 2, glitch-skew 0.15s steps(1) 2;
          transform: translateX(-3px);
          opacity: 0.8;
        }
        .glitch-wrap.active::after {
          color: #f0f;
          animation: glitch-clip 0.15s steps(1) reverse 2;
          transform: translateX(3px);
          opacity: 0.8;
        }

        .artist-nav-link {
          position: relative;
          overflow: hidden;
        }
        .artist-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: #F97316;
          transition: width 0.25s ease;
        }
        .artist-nav-link:hover::after { width: 100%; }

        .project-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .project-card:hover {
          transform: translate(-4px, -4px) rotate(-0.5deg);
        }

        .tech-pill {
          transition: all 0.2s ease;
        }
        .tech-pill:hover {
          background: #F97316;
          color: #000;
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 20px rgba(249,115,22,0.35);
        }

        .exp-card-art {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .exp-card-art:hover {
          transform: translateX(8px);
          box-shadow: -8px 0 0 #F97316;
        }

        .review-card {
          transition: transform 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-6px) rotate(0.5deg);
        }

        .stat-num-art {
          animation: flicker 6s infinite;
        }

        body { cursor: none !important; }
        * { cursor: none !important; }
      `}</style>

      {/* ─── SCROLL PROGRESS ─── */}
      <div
        className="fixed top-0 left-0 h-0.75 bg-[#F97316] z-99997 transition-none"
        style={{
          width: `${(scrollY / (document.documentElement.scrollHeight - window.innerHeight || 1)) * 100}%`,
          boxShadow: "0 0 8px #F97316, 0 0 16px #F97316",
        }}
      />

      {/* ─── NAVBAR ─── */}
      <nav
        className="fixed top-0 left-0 right-0 z-9000 mix-blend-normal"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div
          className="flex items-center justify-between px-8 h-14 border-b border-white/5"
          style={{ background: "rgba(6,6,8,0.85)" }}
        >
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            className="font-['Bebas_Neue'] text-2xl tracking-widest hover:text-[#F97316] transition-colors select-none"
          >
            W.<span className="text-[#F97316]">HACK</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`artist-nav-link font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${activeSection === id ? "text-[#F97316]" : "text-white/50 hover:text-white"}`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {onSwitchView && (
              <button
                onClick={onSwitchView}
                className="hidden md:flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase text-white/40 hover:text-[#F97316] transition-colors border border-white/10 hover:border-[#F97316]/40 px-3 py-1.5"
              >
                <span>⇄</span> PRO_VIEW
              </button>
            )}
            <a
              href="mailto:waithakaoffices@gmail.com"
              className="font-mono text-[11px] tracking-[0.2em] uppercase bg-[#F97316] text-black px-4 py-2 hover:bg-white transition-colors font-bold"
            >
              HIRE
            </a>
            <button
              onClick={() => setMenuOpen((p) => !p)}
              className="flex md:hidden flex-col gap-1.25 items-center justify-center w-10 h-10 border border-white/10"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="block w-5 h-px bg-white transition-all duration-300"
                  style={{
                    transform:
                      menuOpen && i === 0
                        ? "translateY(4px) rotate(45deg)"
                        : menuOpen && i === 1
                          ? "scaleX(0)"
                          : menuOpen && i === 2
                            ? "translateY(-4px) rotate(-45deg)"
                            : "none",
                  }}
                />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: menuOpen ? "300px" : "0",
            background: "rgba(6,6,8,0.97)",
          }}
        >
          <div className="flex flex-col gap-1 p-6 border-b border-white/5">
            {navLinks.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-left font-mono text-[13px] tracking-[0.15em] uppercase text-white/60 hover:text-[#F97316] py-2.5 transition-colors border-b border-white/5"
              >
                → {label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════════════════
          SECTION 01 — HERO
      ══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-14"
      >
        {/* Grid lines decoration */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 px-8 md:px-16 pt-12 pb-8">
          {/* Location + status row */}
          <div
            className="flex items-center gap-5 mb-13 overflow-hidden"
            style={{
              animation: loaded
                ? "float-in 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s both"
                : "none",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-[14px] tracking-[0.25em] uppercase text-white/40">
              NAIROBI, KENYA &nbsp;·&nbsp; AVAILABLE FOR PROJECTS
            </span>
            <div className="flex-1 h-px bg-white/5" />
            <span className="font-mono text-[14px] text-white/20">
              WFH / REMOTE
            </span>
          </div>

          {/* MAIN HEADLINE */}
          <div className="mb-8 overflow-hidden">
            <h1
              className="font-['Bebas_Neue'] leading-[0.85] tracking-[0.02em] select-none"
              style={{
                fontSize: "clamp(100px, 17.5vw, 250px)",
                animation: loaded
                  ? "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s both"
                  : "none",
              }}
            >
              <GlitchText
                text="SOFTWARE"
                className={glitchActive ? "active" : ""}
                style={{ color: "white", display: "block" }}
              />
              <GlitchText
                text="ENGINEER"
                className={glitchActive ? "active" : ""}
                style={{
                  display: "block",
                  WebkitTextStroke: "2px rgba(255,255,255,0.3)",
                  color: "transparent",
                }}
              />
            </h1>
          </div>

          {/* Photo + description row */}
          <div
            className="flex flex-col md:flex-row gap-15 items-start"
            style={{
              animation: loaded
                ? "float-in 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both"
                : "none",
            }}
          >
            {/* Photo */}
            <div className="relative shrink-0">
              <div
                className="w-63 h-81 relative overflow-hidden"
                style={{
                  border: "2px solid rgba(249,115,22,0.4)",
                  boxShadow: "12px 12px 0 #F97316",
                }}
              >
                <img
                  src="/me.jpg"
                  alt="Waithaka"
                  className="w-full h-full object-cover object-top"
                  style={{
                    filter: "contrast(1.1) saturate(0.7) brightness(0.9)",
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Color overlay */}
                <div
                  className="absolute inset-0 mix-blend-color-burn"
                  style={{ background: "rgba(249,115,22,0.15)" }}
                />
              </div>
              <div
                className="absolute -bottom-5 -left-5 font-mono text-[13px] tracking-[0.15em] uppercase px-4 py-2 font-bold"
                style={{ background: "#F97316", color: "#000" }}
              >
                OPEN TO WORK ↗
              </div>
            </div>

            {/* Info block */}
            <div className="flex-1 max-w-xl">
              <div
                className="font-mono text-[14px] leading-[1.9] text-white/60 mb-8"
                style={{
                  borderLeft: "2px solid rgba(249,115,22,0.3)",
                  paddingLeft: "20px",
                }}
              >
                I build digital products that{" "}
                <span className="text-[#F97316] font-bold">
                  generate revenue
                </span>
                . Fullstack developer obsessed with performance, clean
                architecture, and interfaces that{" "}
                <span className="text-white font-bold">feel alive</span>.
              </div>

              {/* Stack row */}
              <div className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase mb-8">
                Python &nbsp;·&nbsp; Go &nbsp;·&nbsp; TypeScript &nbsp;·&nbsp;
                React &nbsp;·&nbsp; Docker
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-5 items-center">
                <button
                  onClick={() => scrollTo("projects")}
                  className="font-mono font-bold text-[15px] tracking-[0.15em] uppercase px-10 py-5 bg-white text-black hover:bg-[#F97316] transition-colors"
                  style={{ boxShadow: "4px 4px 0 #F97316" }}
                >
                  VIEW PROJECTS →
                </button>
                <a
                  href="/Waithaka_Ndung'u.pdf"
                  download
                  className="font-mono text-[15px] tracking-[0.15em] uppercase px-10 py-5 border border-white/20 text-white/60 hover:border-[#F97316] hover:text-[#F97316] transition-colors"
                >
                  DOWNLOAD CV ↓
                </a>
              </div>
            </div>

            {/* Floating stats */}
            <div className="hidden lg:flex flex-col gap-6 ml-auto">
              {[
                { num: "4+", label: "YRS EXP" },
                { num: "11", label: "SHIPPED" },
                { num: "5", label: "CERTS" },
              ].map(({ num, label }) => (
                <div key={label} className="text-right">
                  <div className="font-['Bebas_Neue'] text-[65px] leading-none text-[#F97316] stat-num-art">
                    {num}
                  </div>
                  <div className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquee band */}
        <div className="mt-20 border-y border-white/5 py-4 overflow-hidden">
          <Marquee
            items={[
              "FULL STACK DEVELOPMENT",
              "HACKATHONS",
              "CODE TUTOR",
              "ACCESSIBLE",
              "FAST",
              "SECURE",
              "OPEN SOURCE",
              "SKILLS FOR MONEY",
              "PYTHON",
              "GO",
              "TYPESCRIPT",
              "REACT",
              "DOCKER",
            ]}
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 02 — ABOUT
      ══════════════════════════════════════════════════ */}
      <section id="about" className="py-40 px-10 md:px-20 relative">
        <div
          className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle, #F97316 0%, transparent 70%)",
          }}
        />

        <SectionHeader num="01" label="ABOUT_ME" accent="#F97316" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 items-start max-w-5xl">
          <div>
            <p className="font-mono text-[18px] leading-[2.1] text-white/55 mb-10">
              I am{" "}
              <span className="text-[#F97316] font-bold not-italic">
                Waithaka Ndung'u
              </span>
              , a Certified Software Developer from{" "}
              <span className="text-white font-bold">Kenya</span> with 4+ years
              of experience building digital products that make an impact. I
              specialize in creating performant, scalable, and optimal web and
              mobile applications.
            </p>
            <p className="font-mono text-[18px] leading-[2.1] text-white/55 mb-13">
              I'm obsessed with{" "}
              <span className="text-white">Data Structures</span>,{" "}
              <span className="text-white">Optimization</span>, and{" "}
              <span className="text-white">AI Integration</span>. Over 3 years
              of shipping apps that sell and scale.
            </p>

            <div className="flex flex-col gap-4">
              {[
                "Web Development & AI Integration",
                "Data Structures & Optimization",
                "3+ Years Shipping Scalable Apps",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <span className="w-6 h-px bg-[#F97316] group-hover:w-10 transition-all duration-300 shrink-0" />
                  <span className="font-mono text-[15px] tracking-[0.05em] text-white/50 group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats block */}
          <div className="grid grid-cols-3 lg:grid-cols-1 gap-5">
            {[
              { num: "4+", label: "Years of Experience", color: "#F97316" },
              { num: "50+", label: "Projects Completed", color: "#3B82F6" },
              { num: "15+", label: "Satisfied Clients", color: "#10B981" },
            ].map(({ num, label, color }) => (
              <div
                key={label}
                className="p-8 relative overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  className="absolute bottom-0 left-0 w-full h-px"
                  style={{ background: color, opacity: 0.4 }}
                />
                <div
                  className="font-['Bebas_Neue'] text-[70px] leading-none mb-1 stat-num-art"
                  style={{ color }}
                >
                  {num}
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 03 — TECH STACK
      ══════════════════════════════════════════════════ */}
      <section
        id="stack"
        className="py-40 px-10 md:px-20 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

        <SectionHeader num="02" label="TECH_STACK" accent="#3B82F6" />

        <div className="flex flex-wrap gap-4 max-w-5xl">
          {techStack.map((item, i) => (
            <div
              key={i}
              className="tech-pill group relative font-mono text-[14px] tracking-[0.12em] uppercase px-5 py-3"
              style={{
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.5)",
                animationDelay: `${i * 0.03}s`,
              }}
            >
              <span className="absolute top-0 left-0 text-[10px] leading-none px-1 text-[#3B82F6] opacity-50">
                {item.label}
              </span>
              <span className="mt-1 block">{item.name}</span>
            </div>
          ))}
        </div>

        {/* Coding stats strip */}
        <div
          className="mt-25 grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ border: "1px solid rgba(255,255,255,0.05)" }}
        >
          {[
            {
              val: stats.contributions.toLocaleString(),
              label: "CONTRIBUTIONS",
            },
            { val: stats.repositories.toString(), label: "REPOSITORIES" },
            { val: `${stats.streak}`, label: "DAY STREAK" },
            { val: `${stats.wakatimeHours}h`, label: "CODED THIS YEAR" },
          ].map(({ val, label }) => (
            <div
              key={label}
              className="py-10 px-8 text-center"
              style={{ background: "rgba(255,255,255,0.015)" }}
            >
              <div className="font-['Bebas_Neue'] text-[53px] text-[#3B82F6] leading-none mb-3 stat-num-art">
                {val}
              </div>
              <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/25">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 04 — CAREER LEDGER
      ══════════════════════════════════════════════════ */}
      <section id="logs" className="py-40 px-10 md:px-20">
        <SectionHeader num="03" label="CAREER_LOGS" accent="#10B981" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 max-w-6xl">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-13">
              <div className="w-4 h-4 bg-[#10B981]" />
              <span className="font-mono text-[14px] tracking-[0.2em] uppercase text-white/40">
                EXPERIENCE_LOG
              </span>
            </div>
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-[#10B981] to-transparent" />
              <div className="pl-10 flex flex-col gap-10">
                {experiences.map((exp, i) => (
                  <div
                    key={i}
                    className="exp-card-art relative"
                    style={{
                      borderLeft: "1px solid rgba(255,255,255,0.06)",
                      paddingLeft: "30px",
                    }}
                  >
                    <div
                      className="absolute -left-1.5 top-2.5 w-3 h-3 rounded-full bg-[#10B981]"
                      style={{ boxShadow: "0 0 10px #10B981" }}
                    />
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <div className="font-mono font-bold text-[18px] text-white">
                          {exp.title}
                        </div>
                        <div className="font-mono text-[15px] text-white/40 mt-1">
                          {exp.company}
                        </div>
                      </div>
                      <div className="font-mono text-[13px] tracking-widest text-[#10B981] shrink-0">
                        {exp.dateShort || exp.date}
                      </div>
                    </div>
                    <p className="font-mono text-[15px] leading-[1.8] text-white/35">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.worked.slice(0, 2).map((w, wi) => (
                        <span
                          key={wi}
                          className="font-mono text-[11px] tracking-widest px-2.5 py-1 text-[#10B981]/60 border border-[#10B981]/15"
                        >
                          #{w.split(" ")[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-13">
              <div className="w-4 h-4 bg-[#3B82F6]" />
              <span className="font-mono text-[14px] tracking-[0.2em] uppercase text-white/40">
                EDUCATION_LOG
              </span>
            </div>
            <div className="flex flex-col gap-8">
              {education.map((edu, i) => (
                <div
                  key={i}
                  className="p-7 relative overflow-hidden group"
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.02)",
                    transition: "border-color 0.2s ease, background 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(59,130,246,0.3)";
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(59,130,246,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLDivElement).style.background =
                      "rgba(255,255,255,0.02)";
                  }}
                >
                  <div className="flex items-start gap-5">
                    <span className="text-[35px] shrink-0">{edu.logo}</span>
                    <div>
                      <div className="font-mono font-bold text-[16px] text-white mb-1">
                        {edu.title}
                      </div>
                      <div className="font-mono text-[14px] text-[#3B82F6]/70">
                        {edu.institution}
                      </div>
                      <div className="font-mono text-[13px] text-white/25 mt-1.5">
                        {edu.date}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-4 mt-5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" />
                <span className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/25">
                  ALWAYS_LEARNING → Actively pursuing new certifications
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 05 — PROJECTS
      ══════════════════════════════════════════════════ */}
      <section id="projects" className="py-40 px-10 md:px-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(249,115,22,0.04) 0%, transparent 60%)",
          }}
        />

        <SectionHeader num="04" label="SELECTED_WORKS" accent="#F97316" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
          {projects.map((project, i) => {
            const colors = ["#F97316", "#3B82F6", "#10B981", "#8B5CF6"];
            const accent = colors[i % colors.length];
            return (
              <div
                key={i}
                className="project-card relative overflow-hidden"
                style={{
                  border: `1px solid rgba(255,255,255,0.06)`,
                  background: "rgba(255,255,255,0.02)",
                  borderTop: `3px solid ${accent}`,
                }}
                onMouseEnter={() => setHoveredProject(i)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Preview area */}
                <div
                  className="w-full h-56 relative overflow-hidden flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${accent}08, ${accent}02)`,
                  }}
                >
                  <span className="font-['Bebas_Neue'] text-[100px] tracking-widest opacity-5 select-none">
                    {project.title.charAt(0)}
                  </span>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                    }}
                  />
                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredProject === i ? "opacity-100" : "opacity-0"}`}
                    style={{ background: `${accent}15` }}
                  >
                    <span
                      className="font-mono text-[14px] tracking-[0.2em] uppercase"
                      style={{ color: accent }}
                    >
                      [{project.title} PREVIEW]
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="font-['Bebas_Neue'] text-[35px] tracking-[0.04em] text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="font-mono text-[15px] leading-[1.8] text-white/40 mb-5">
                    {project.shortDesc}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[11px] tracking-[0.12em] uppercase px-3 py-1.5"
                        style={{
                          background: `${accent}15`,
                          color: accent,
                          border: `1px solid ${accent}25`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-[13px] tracking-[0.15em] uppercase px-5 py-3 transition-all hover:bg-white hover:text-black"
                      style={{
                        border: "1px solid rgba(255,255,255,0.15)",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      GITHUB ↗
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono font-bold text-[13px] tracking-[0.15em] uppercase px-5 py-3 transition-all"
                      style={{ background: accent, color: "#000" }}
                    >
                      LIVE ↗
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 06 — USER REPORTS
      ══════════════════════════════════════════════════ */}
      <section
        className="py-40 overflow-hidden"
        style={{ background: "rgba(255,255,255,0.01)" }}
      >
        <div className="px-10 md:px-20 mb-20">
          <SectionHeader num="05" label="USER_REPORTS" accent="#8B5CF6" />
          <div className="flex items-center gap-4">
            <span className="font-mono text-[13px] text-[#8B5CF6]/60 tracking-[0.2em] uppercase">
              LIVE_FEED
            </span>
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-7"
            style={{ animation: "marquee-scroll 40s linear infinite" }}
          >
            {[...userReports, ...userReports].map((report, idx) => {
              const colorMap: Record<string, string> = {
                pink: "#EC4899",
                purple: "#8B5CF6",
                orange: "#F97316",
                green: "#10B981",
              };
              const color = colorMap[report.color] || "#8B5CF6";
              return (
                <div
                  key={idx}
                  className="review-card shrink-0 w-100 p-8 relative overflow-hidden"
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "rgba(255,255,255,0.03)",
                    borderTop: `3px solid ${color}`,
                  }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className="font-mono text-[13px] tracking-widest"
                      style={{ color }}
                    >
                      {report.log}
                    </span>
                    <span className="font-mono text-[11px] text-white/20">
                      {report.file}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-white/25 mb-4 tracking-[0.08em]">
                    FROM: {report.from}
                  </div>
                  <p className="font-mono text-[16px] font-bold text-white leading-[1.6] mb-5">
                    "{report.report}"
                  </p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: report.rating }).map((_, i) => (
                      <span key={i} style={{ color }}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SECTION 07 — CONTACT
      ══════════════════════════════════════════════════ */}
      <section id="contact" className="py-40 px-10 md:px-20 relative">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 80%, rgba(249,115,22,0.06) 0%, transparent 60%)",
          }}
        />

        <SectionHeader num="06" label="GET_IN_TOUCH" accent="#F97316" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-25 max-w-5xl">
          {/* Left */}
          <div>
            <h3 className="font-['Bebas_Neue'] text-[clamp(32px,4vw,52px)] leading-[1.1] text-white mb-8">
              LET'S BUILD SOMETHING{" "}
              <span className="text-[#F97316]">GREAT</span> TOGETHER
            </h3>
            <p className="font-mono text-[17px] leading-loose text-white/40 mb-13">
              Have a project in mind? Let's work together to create something
              that generates results.
            </p>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: "@",
                  label: "EMAIL",
                  val: "waithakaoffices@gmail.com",
                  href: "mailto:waithakaoffices@gmail.com",
                  color: "#F97316",
                },
                {
                  icon: "in",
                  label: "LINKEDIN",
                  val: "linkedin.com/in/waithaka",
                  href: "https://linkedin.com/in/waithaka-ndung-u-b2b80a255",
                  color: "#3B82F6",
                },
                {
                  icon: "GH",
                  label: "GITHUB",
                  val: "github.com/WaithakaGuru",
                  href: "https://github.com/WaithakaGuru",
                  color: "#10B981",
                },
              ].map(({ icon, label, val, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-5 group no-underline py-4"
                  style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
                >
                  <div
                    className="w-13 h-13 shrink-0 flex items-center justify-center font-mono font-bold text-[13px] transition-all duration-200 group-hover:-translate-y-0.5"
                    style={{ background: color, color: "#000" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-white/25">
                      {label}
                    </div>
                    <div className="font-mono text-[15px] text-white/60 group-hover:text-[#F97316] transition-colors">
                      {val}
                    </div>
                  </div>
                  <span className="ml-auto font-mono text-[#F97316] opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <ContactForm />
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer
        className="border-t py-10 px-10 md:px-20 flex flex-col md:flex-row items-center justify-between gap-5"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <span className="font-['Bebas_Neue'] text-2xl tracking-widest text-white/20">
          WAITHAKA<span className="text-[#F97316]">.HACK</span>
        </span>
        <span className="font-mono text-[13px] tracking-[0.15em] text-white/15">
          © {new Date().getFullYear()} &nbsp;·&nbsp; ALL RIGHTS RESERVED
          &nbsp;·&nbsp; BUILT FOR DEVS
        </span>
        {onSwitchView && (
          <button
            onClick={onSwitchView}
            className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/20 hover:text-[#F97316] transition-colors"
          >
            SWITCH TO PRO VIEW ⇄
          </button>
        )}
      </footer>
    </div>
  );
}

// ─── CONTACT FORM (isolated state) ──────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  const inputBase = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "white",
    outline: "none",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "16px",
  } as React.CSSProperties;

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h3 className="font-['Bebas_Neue'] text-[28px] tracking-[0.08em] text-white/40 mb-3">
        SEND A MESSAGE
      </h3>

      {(["name", "email", "message"] as const).map((field) => (
        <div key={field}>
          <label className="block font-mono text-[11px] tracking-[0.2em] uppercase text-white/25 mb-3">
            {field}
          </label>
          {field === "message" ? (
            <textarea
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required
              rows={6}
              placeholder="Tell me about your project..."
              className="w-full px-5 py-4 resize-none transition-all duration-150"
              style={inputBase}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(249,115,22,0.4)";
                e.target.style.background = "rgba(249,115,22,0.03)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.background = "rgba(255,255,255,0.03)";
              }}
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              value={form[field]}
              onChange={(e) => setForm({ ...form, [field]: e.target.value })}
              required
              placeholder={field === "email" ? "your@email.com" : "Your name"}
              className="w-full px-5 py-4 transition-all duration-150"
              style={inputBase}
              onFocus={(e) => {
                e.target.style.borderColor = "rgba(249,115,22,0.4)";
                e.target.style.background = "rgba(249,115,22,0.03)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "rgba(255,255,255,0.08)";
                e.target.style.background = "rgba(255,255,255,0.03)";
              }}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full font-mono font-bold text-[15px] tracking-[0.2em] uppercase py-5 transition-all duration-150"
        style={{
          background: sent ? "#10B981" : "#F97316",
          color: "#000",
          boxShadow: sent
            ? "0 0 20px rgba(16,185,129,0.3)"
            : "5px 5px 0 rgba(249,115,22,0.3)",
        }}
      >
        {sent ? "✓ MESSAGE SENT!" : "SEND MESSAGE →"}
      </button>
    </form>
  );
}
