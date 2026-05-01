import { useState, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

const NAV_LINKS = [
  { label: "/ABOUT", id: "about" },
  { label: "/EXPERIENCE", id: "experience" },
  { label: "/STACK", id: "stack" },
  { label: "/PROJECTS", id: "projects" },
  { label: "/CONTACT", id: "contact" },
];

interface NavbarProps {
  onSwitchView?: () => void;
}

export function Navbar({ onSwitchView }: NavbarProps) {
  const { isDark, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  // ── Hide on scroll down, show on scroll up ──
  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastY.current;
        if (y < 80) setHidden(false);
        else if (delta > 6) setHidden(true);
        else if (delta < -4) setHidden(false);
        lastY.current = y;
        ticking.current = false;
      });
      ticking.current = true;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          background: "#ffffff",
          backdropFilter: "blur(12px) saturate(1.4)",
          borderBottom: "1px solid #e0e0e0",
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
        }}
        className={`fixed top-0 left-0 right-0 z-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            style={{
              boxShadow: "4px 4px 0 #0a0a0a",
              background: "#ffffff",
              color: "#0a0a0a",
              border: "2px solid #0a0a0a",
              fontFamily: "JetBrains Mono, monospace",
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "0.04em",
            }}
            className={`px-4 py-2 no-underline transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0a0a0a] whitespace-nowrap`}
          >
            WAITHAKA<span style={{ color: "#f97316" }}>.dev</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-0.5 list-none">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  style={{
                    color: "#555555",
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.06em",
                  }}
                  className="px-3.5 py-2 no-underline transition-all duration-150 hover:color-[#0a0a0a] hover:background-[#f5f5f5]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* HIRE ME */}
            <a
              href="mailto:waithakaoffices@gmail.com"
              style={{
                background: "#f97316",
                border: "2px solid #f97316",
                boxShadow: "4px 4px 0 #0a0a0a",
                color: "#ffffff",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.04em",
              }}
              className={`px-4 py-2 no-underline transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0a0a0a] whitespace-nowrap`}
            >
              HIRE ME
            </a>

            {/* Switch View */}
            {onSwitchView && (
              <button
                onClick={onSwitchView}
                style={{
                  background: "#ffffff",
                  border: "2px solid #e0e0e0",
                  boxShadow: "4px 4px 0 #0a0a0a",
                  color: "#0a0a0a",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                }}
                className={`hidden md:flex items-center gap-1.5 px-3 py-2 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0a0a0a] whitespace-nowrap cursor-pointer`}
                title="Switch to view selector"
              >
                <span className="text-lg">🎨</span>
                <span>SWITCH</span>
              </button>
            )}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: "#ffffff",
                border: "2px solid #e0e0e0",
                boxShadow: "4px 4px 0 #0a0a0a",
                color: "#0a0a0a",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "11px",
                fontWeight: 600,
              }}
              className={`hidden md:flex items-center gap-1.5 px-3 py-2 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0a0a0a] whitespace-nowrap cursor-pointer`}
              title="Toggle theme"
            >
              <span className="text-[15px]">{isDark ? "◐" : "☀"}</span>
              <span>{isDark ? "LIGHT_MODE" : "DARK_MODE"}</span>
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
                color: "var(--text)",
              }}
              className="flex md:hidden items-center justify-center w-10 h-10 cursor-pointer transition-all duration-150"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-1.25">
                <span
                  style={{ background: "var(--text)" }}
                  className={`block w-5.5 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.75" : ""}`}
                />
                <span
                  style={{ background: "var(--text)" }}
                  className={`block w-5.5 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  style={{ background: "var(--text)" }}
                  className={`block w-5.5 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(12px) saturate(1.4)",
          borderBottom: "2px solid var(--border)",
          zIndex: 99,
        }}
        className={`fixed top-15 left-0 right-0 md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                color: "var(--text-sub)",
                border: "1px solid transparent",
              }}
              className="font-['JetBrains_Mono'] font-bold text-[13px] tracking-[0.07em] px-4 py-3 text-left transition-all duration-150
               hover:border-(--border) hover:bg-(--surface) hover:text-(--text) cursor-pointer w-full"
            >
              {label}
            </button>
          ))}
          {/* Switch View in mobile menu */}
          {onSwitchView && (
            <button
              onClick={() => {
                onSwitchView();
                setMenuOpen(false);
              }}
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
                color: "var(--text)",
              }}
              className="font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.08em] px-4 py-3 mt-2 text-left flex items-center gap-2 cursor-pointer w-full transition-all duration-150"
            >
              <span>🎨</span>
              <span>SWITCH_VIEW</span>
            </button>
          )}
          {/* Theme toggle in mobile menu */}
          <button
            onClick={toggleTheme}
            style={{
              background: "var(--surface)",
              border: "2px solid var(--border)",
              boxShadow: "var(--shadow)",
              color: "var(--text)",
            }}
            className="font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.08em] px-4 py-3 mt-2 text-left flex items-center gap-2 cursor-pointer w-full transition-all duration-150"
          >
            <span>{isDark ? "◐" : "☀"}</span>
            <span>{isDark ? "LIGHT_MODE" : "DARK_MODE"}</span>
          </button>
        </div>
      </div>
    </>
  );
}
