import { useState, useEffect, useRef } from "react";
// import { useTheme } from "../contexts/ThemeContext";

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
  // const { isDark, toggleTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string | null>(null);
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
    setActiveLink(id);
    setTimeout(() => setActiveLink(null), 300);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes navLinkPulse {
          0% { transform: scale(1); }
          50% { transform: scale(0.98); }
          100% { transform: scale(1); }
        }
        .nav-link-active {
          animation: navLinkPulse 0.3s ease-out;
        }
      `}</style>
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
                    background: "transparent",
                    padding: "8px 12px",
                    borderRadius: "4px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                    border: "1px solid transparent",
                  }}
                  className={`no-underline cursor-pointer ${
                    activeLink === id ? "nav-link-active" : ""
                  }`}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#f97316";
                    el.style.borderColor = "#f97316";
                    el.style.background = "#fff9f5";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "#555555";
                    el.style.borderColor = "transparent";
                    el.style.background = "transparent";
                    el.style.transform = "translateY(0)";
                  }}
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
              className={`px-4 py-2 no-underline transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0a0a0a] whitespace-nowrap active:scale-95`}
              onMouseDown={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(0.95) translate(-2px, -2px)";
              }}
              onMouseUp={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translate(-2px, -2px)";
              }}
            >
              HIRE ME
            </a>

            {/* Art View */}
            {onSwitchView && (
              <button
                onClick={onSwitchView}
                style={{
                  background: "#ffffff",
                  border: "2px solid #f97316",
                  boxShadow: "4px 4px 0 #0a0a0a",
                  color: "#f97316",
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  padding: "6px 12px",
                }}
                className={`hidden md:flex items-center gap-1.5 transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0a0a0a] whitespace-nowrap cursor-pointer active:scale-95`}
                title="Switch to art view"
                onMouseDown={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "scale(0.95) translate(-2px, -2px)";
                }}
                onMouseUp={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.transform = "translate(-2px, -2px)";
                }}
              >
                <span>🎨</span>
                <span>Art_view</span>
              </button>
            )}

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMenuOpen((p) => !p)}
              style={{
                background: "#ffffff",
                border: "2px solid #e0e0e0",
                boxShadow: "4px 4px 0 #0a0a0a",
                color: "#0a0a0a",
              }}
              className="flex md:hidden items-center justify-center w-9 h-9 cursor-pointer transition-all duration-150 hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_#0a0a0a]"
              aria-label="Toggle menu"
            >
              <span className="flex flex-col gap-1">
                <span
                  className={`block w-4.5 h-0.5 bg-[#0a0a0a] transition-all duration-300 ${
                    menuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-4.5 h-0.5 bg-[#0a0a0a] transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-4.5 h-0.5 bg-[#0a0a0a] transition-all duration-300 ${
                    menuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #e0e0e0",
          zIndex: 99,
        }}
        className={`fixed top-16 left-0 right-0 md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                color: "#555555",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "13px",
                fontWeight: 500,
                padding: "12px 12px",
                borderRadius: "4px",
                background: "transparent",
                border: "1px solid transparent",
                textAlign: "left",
                width: "100%",
                cursor: "pointer",
                transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#f97316";
                el.style.borderColor = "#f97316";
                el.style.background = "#fff9f5";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.color = "#555555";
                el.style.borderColor = "transparent";
                el.style.background = "transparent";
              }}
              onMouseDown={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1)";
              }}
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
                background: "#f5f5f5",
                border: "1px solid #e0e0e0",
                color: "#0a0a0a",
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "12px",
                fontWeight: 600,
                padding: "12px 12px",
                marginTop: "8px",
                borderRadius: "4px",
                transition: "all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#f97316";
                el.style.background = "#fff9f5";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "#e0e0e0";
                el.style.background = "#f5f5f5";
              }}
              onMouseDown={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(0.98)";
              }}
              onMouseUp={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "scale(1)";
              }}
            >
              <span className="flex items-center gap-2">
                <span>🎨</span>
                <span>SWITCH</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
