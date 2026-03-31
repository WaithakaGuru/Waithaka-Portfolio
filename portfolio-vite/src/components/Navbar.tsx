import { useState, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

const NAV_LINKS = [
  { label: "/ABOUT", id: "about" },
  { label: "/SKILLS", id: "stack" },
  { label: "/LOGS", id: "logs" },
  { label: "/WORK", id: "projects" },
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

  const shadowH =
    "hover:shadow-[var(--shadow-h)] hover:-translate-x-0.5 hover:-translate-y-0.5";

  return (
    <>
      <nav
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(12px) saturate(1.4)",
          borderBottom: "2px solid var(--border)",
        }}
        className={`fixed top-0 left-0 right-0 z-100 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-360 mx-auto px-8 h-15 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("hero");
            }}
            style={{
              boxShadow: "var(--shadow)",
              background: "var(--surface)",
              color: "var(--text)",
              border: "2px solid var(--border)",
            }}
            className={`font-['JetBrains_Mono'] font-extrabold text-[15px] tracking-[0.04em] 
              px-3.5 py-1.5 no-underline transition-all duration-150 ${shadowH} whitespace-nowrap`}
          >
            WAITHAKA<span style={{ color: "var(--accent)" }}>.hack</span>
          </a>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1.5 list-none">
            {NAV_LINKS.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(id);
                  }}
                  style={{
                    color: "var(--text-sub)",
                  }}
                  className="font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.07em] px-3.5 py-1.75
                   no-underline transition-all duration-150  hover:bg-(--surface) hover:text-(--text) border-hover"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right controls */}
          <div className="flex items-center gap-2.5">
            {/* HIRE ME */}
            <a
              href="mailto:waithakaoffices@gmail.com"
              style={{
                background: "var(--yellow)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
                color: "#1A1A1A",
              }}
              className={`font-['JetBrains_Mono'] font-extrabold text-[12px] tracking-widest px-4.5 py-2
                 no-underline transition-all duration-150 ${shadowH} whitespace-nowrap`}
            >
              HIRE ME
            </a>

            {/* Switch View */}
            {onSwitchView && (
              <button
                onClick={onSwitchView}
                style={{
                  background: "var(--surface)",
                  border: "2px solid var(--border)",
                  boxShadow: "var(--shadow)",
                  color: "var(--text)",
                }}
                className={`hidden md:flex items-center gap-1.5 h-9.5 px-3.5 font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.08em] transition-all duration-150 ${shadowH} whitespace-nowrap cursor-pointer`}
                title="Switch to view selector"
              >
                <span className="text-[15px]">🎨</span>
                <span>SWITCH_VIEW</span>
              </button>
            )}

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
                color: "var(--text)",
              }}
              className={`hidden md:flex items-center gap-1.5 h-9.5 px-3.5 font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.08em] transition-all duration-150 ${shadowH} whitespace-nowrap cursor-pointer`}
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
