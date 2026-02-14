import { useState, useEffect } from "react";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme, actualTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 100;
      if (scrollY > threshold) {
        if (scrollY > lastScrollY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }
      setLastScrollY(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // close menu on nav click
    }
  };

  return (
    <nav
      className={`fixed top-2 left-1/2 -translate-x-1/2 z-1000 w-[90vw] max-w-420 flex items-stretch justify-between transition-all duration-300 ${
        hidden ? "-translate-y-24 opacity-0 pointer-events-none" : ""
      } md:fixed md:top-2 md:left-1/2 md:-translate-x-1/2 md:w-[90vw] md:max-w-420`}
      style={{ background: "transparent" }}
    >
      {/* Name box */}
      <div className="flex items-center h-12">
        <div
          className="bg-light-gray border-2 border-black px-8 h-full flex items-center font-extrabold text-2xl shadow-[4px_4px_0_var(--color-black)]"
          style={{ letterSpacing: "0.01em" }}
        >
          WAITHAKA.hack
        </div>
      </div>
      {/* Hamburger menu for small screens */}
      <div className="flex items-center h-12 md:hidden bg-light-gray hover:bg-yellow border border-black shadow-[2px_2px_0_var(--color-black)]">
        <button
          className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </button>
      </div>
      {/* Nav box for medium and up */}
      <div className="items-center h-12 hidden md:flex">
        <div className="flex items-center bg-white border-2 border-black px-8 h-full shadow-[4px_4px_0_var(--color-black)] gap-8">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /ABOUT
          </a>
          <a
            href="#stack"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("stack");
            }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /SKILLS
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /LOGS
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("projects");
            }}
            className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
          >
            /WORK
          </a>
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-yellow border-2 border-black px-4 py-1 font-semibold text-[1rem] ml-4 shadow-[2px_2px_0_var(--color-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-pink-400 transition-all"
            style={{ letterSpacing: "0.05em" }}
          >
            HIRE ME
          </button>
          <button
            onClick={() => {
              const themes: ("dark" | "light" | "system")[] = [
                "light",
                "dark",
                "system",
              ];
              const currentIndex = themes.indexOf(theme);
              const nextTheme = themes[(currentIndex + 1) % themes.length];
              setTheme(nextTheme);
            }}
            className="bg-gray-200 border-2 border-black px-3 py-1 font-semibold text-[1rem] ml-2 shadow-[2px_2px_0_var(--color-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer transition-all"
            title={`Current: ${theme} (${actualTheme}) - Click to cycle themes`}
          >
            {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🖥️"}
          </button>
        </div>
      </div>
      {/* Dropdown menu for small screens */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[calc(100%+0.5rem)] left-0 w-full flex flex-col items-center md:hidden z-2000 animate-fade-in bg-black/40"
          style={{ paddingTop: 0 }}
        >
          <div className="flex flex-col w-full bg-white border-2 border-black shadow-[4px_4px_0_var(--color-black)] max-w-105 mx-auto">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
            >
              /ABOUT
            </a>
            <a
              href="#stack"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("stack");
              }}
              className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
            >
              /SKILLS
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
            >
              /LOGS
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
            >
              /WORK
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="block bg-yellow border-2 border-black px-4 py-3 font-semibold text-[1rem] w-full shadow-[2px_2px_0_var(--color-black)] hover:bg-pink-400 hover:text-black transition-all"
              style={{ letterSpacing: "0.05em" }}
            >
              HIRE ME
            </button>
            <button
              onClick={() => {
                const themes: ("dark" | "light" | "system")[] = [
                  "light",
                  "dark",
                  "system",
                ];
                const currentIndex = themes.indexOf(theme);
                const nextTheme = themes[(currentIndex + 1) % themes.length];
                setTheme(nextTheme);
              }}
              className="block bg-gray-200 border-2 border-black px-4 py-3 font-semibold text-[1rem] w-full shadow-[2px_2px_0_var(--color-black)] hover:bg-gray-300 transition-all"
              title={`Current: ${theme} (${actualTheme}) - Click to cycle themes`}
            >
              {theme === "dark"
                ? "🌙 Dark"
                : theme === "light"
                  ? "☀️ Light"
                  : "🖥️ System"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
