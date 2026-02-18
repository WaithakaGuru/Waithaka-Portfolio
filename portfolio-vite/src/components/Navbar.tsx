// import { useState, useEffect } from "react";
// import { useTheme } from "../contexts/ThemeContext";

// export function Navbar() {
//   const [hidden, setHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { theme, setTheme, actualTheme } = useTheme();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const threshold = 100;
//       if (scrollY > threshold) {
//         if (scrollY > lastScrollY) {
//           setHidden(true);
//         } else {
//           setHidden(false);
//         }
//       } else {
//         setHidden(false);
//       }
//       setLastScrollY(scrollY);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   const scrollToSection = (id: string) => {
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth", block: "start" });
//       setMenuOpen(false); // close menu on nav click
//     }
//   };

//   return (
//     <nav
//       className={`fixed top-2 left-1/2 -translate-x-1/2 z-1000 w-[90vw] max-w-420 flex items-stretch justify-between transition-all duration-300 ${
//         hidden ? "-translate-y-24 opacity-0 pointer-events-none" : ""
//       } md:fixed md:top-2 md:left-1/2 md:-translate-x-1/2 md:w-[90vw] md:max-w-420`}
//       style={{ background: "transparent" }}
//     >
//       {/* Name box */}
//       <div className="flex items-center h-12">
//         <div
//           className="bg-light-gray border-2 border-black px-8 h-full flex items-center font-extrabold text-2xl shadow-[4px_4px_0_var(--color-black)]"
//           style={{ letterSpacing: "0.01em" }}
//         >
//           WAITHAKA.hack
//         </div>
//       </div>
//       {/* Hamburger menu for small screens */}
//       <div className="flex items-center h-12 md:hidden bg-light-gray hover:bg-yellow border border-black shadow-[2px_2px_0_var(--color-black)]">
//         <button
//           className="flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
//           aria-label="Open menu"
//           onClick={() => setMenuOpen((prev) => !prev)}
//         >
//           <span
//             className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}
//           ></span>
//           <span
//             className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
//           ></span>
//           <span
//             className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
//           ></span>
//         </button>
//       </div>
//       {/* Nav box for medium and up */}
//       <div className="items-center h-12 hidden md:flex">
//         <div className="flex items-center bg-white border-2 border-black px-8 h-full shadow-[4px_4px_0_var(--color-black)] gap-8">
//           <a
//             href="#about"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("about");
//             }}
//             className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//           >
//             /ABOUT
//           </a>
//           <a
//             href="#stack"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("stack");
//             }}
//             className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//           >
//             /SKILLS
//           </a>
//           <a
//             href="#about"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("about");
//             }}
//             className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//           >
//             /LOGS
//           </a>
//           <a
//             href="#projects"
//             onClick={(e) => {
//               e.preventDefault();
//               scrollToSection("projects");
//             }}
//             className="no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//           >
//             /WORK
//           </a>
//           <button
//             onClick={() => scrollToSection("contact")}
//             className="bg-yellow border-2 border-black px-4 py-1 font-semibold text-[1rem] ml-4 shadow-[2px_2px_0_var(--color-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer hover:bg-pink-400 transition-all"
//             style={{ letterSpacing: "0.05em" }}
//           >
//             HIRE ME
//           </button>
//           <button
//             onClick={() => {
//               const themes: ("dark" | "light" | "system")[] = [
//                 "light",
//                 "dark",
//                 "system",
//               ];
//               const currentIndex = themes.indexOf(theme);
//               const nextTheme = themes[(currentIndex + 1) % themes.length];
//               setTheme(nextTheme);
//             }}
//             className="bg-gray-200 border-2 border-black px-3 py-1 font-semibold text-[1rem] ml-2 shadow-[2px_2px_0_var(--color-black)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:cursor-pointer transition-all"
//             title={`Current: ${theme} (${actualTheme}) - Click to cycle themes`}
//           >
//             {theme === "dark" ? "🌙" : theme === "light" ? "☀️" : "🖥️"}
//           </button>
//         </div>
//       </div>
//       {/* Dropdown menu for small screens */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 top-[calc(100%+0.5rem)] left-0 w-full flex flex-col items-center md:hidden z-2000 animate-fade-in bg-black/40"
//           style={{ paddingTop: 0 }}
//         >
//           <div className="flex flex-col w-full bg-white border-2 border-black shadow-[4px_4px_0_var(--color-black)] max-w-105 mx-auto">
//             <a
//               href="#about"
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection("about");
//               }}
//               className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//             >
//               /ABOUT
//             </a>
//             <a
//               href="#stack"
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection("stack");
//               }}
//               className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//             >
//               /SKILLS
//             </a>
//             <a
//               href="#about"
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection("about");
//               }}
//               className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//             >
//               /LOGS
//             </a>
//             <a
//               href="#projects"
//               onClick={(e) => {
//                 e.preventDefault();
//                 scrollToSection("projects");
//               }}
//               className="block py-3 w-full text-center border-b border-black no-underline text-black text-lg font-semibold tracking-wide hover:text-gray-500 transition-colors"
//             >
//               /WORK
//             </a>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="block bg-yellow border-2 border-black px-4 py-3 font-semibold text-[1rem] w-full shadow-[2px_2px_0_var(--color-black)] hover:bg-pink-400 hover:text-black transition-all"
//               style={{ letterSpacing: "0.05em" }}
//             >
//               HIRE ME
//             </button>
//             <button
//               onClick={() => {
//                 const themes: ("dark" | "light" | "system")[] = [
//                   "light",
//                   "dark",
//                   "system",
//                 ];
//                 const currentIndex = themes.indexOf(theme);
//                 const nextTheme = themes[(currentIndex + 1) % themes.length];
//                 setTheme(nextTheme);
//               }}
//               className="block bg-gray-200 border-2 border-black px-4 py-3 font-semibold text-[1rem] w-full shadow-[2px_2px_0_var(--color-black)] hover:bg-gray-300 transition-all"
//               title={`Current: ${theme} (${actualTheme}) - Click to cycle themes`}
//             >
//               {theme === "dark"
//                 ? "🌙 Dark"
//                 : theme === "light"
//                   ? "☀️ Light"
//                   : "🖥️ System"}
//             </button>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

import { useState, useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

const NAV_LINKS = [
  { label: "/ABOUT", id: "about" },
  { label: "/SKILLS", id: "stack" },
  { label: "/LOGS", id: "logs" },
  { label: "/WORK", id: "projects" },
];

export function Navbar() {
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

  const border = "border-2 border-[var(--border)]";
  const shadow = "shadow-[var(--shadow)]";
  const shadowH =
    "hover:shadow-[var(--shadow-h)] hover:-translate-x-0.5 hover:-translate-y-0.5";
  const surface = "bg-[var(--surface)]";

  return (
    <>
      <nav
        style={{
          background: "var(--nav-bg)",
          backdropFilter: "blur(12px) saturate(1.4)",
          borderBottom: "2px solid var(--border)",
        }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          hidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-8 h-[60px] flex items-center justify-between">
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
            className={`font-['JetBrains_Mono'] font-extrabold text-[15px] tracking-[0.04em] px-[14px] py-[6px] no-underline transition-all duration-150 ${shadowH} whitespace-nowrap`}
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
                    border: "1px solid transparent",
                  }}
                  className="font-['JetBrains_Mono'] font-bold text-[12px] tracking-[0.07em] px-[14px] py-[7px] no-underline transition-all duration-150 hover:border-[var(--border)] hover:bg-[var(--surface)] hover:text-[var(--text)]"
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
              className={`font-['JetBrains_Mono'] font-extrabold text-[12px] tracking-[0.1em] px-[18px] py-[8px] no-underline transition-all duration-150 ${shadowH} whitespace-nowrap`}
            >
              HIRE ME
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                background: "var(--surface)",
                border: "2px solid var(--border)",
                boxShadow: "var(--shadow)",
                color: "var(--text)",
              }}
              className={`hidden md:flex items-center gap-1.5 h-[38px] px-3.5 font-['JetBrains_Mono'] font-bold text-[11px] tracking-[0.08em] transition-all duration-150 ${shadowH} whitespace-nowrap cursor-pointer`}
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
              <span className="flex flex-col gap-[5px]">
                <span
                  style={{ background: "var(--text)" }}
                  className={`block w-[22px] h-[2px] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
                />
                <span
                  style={{ background: "var(--text)" }}
                  className={`block w-[22px] h-[2px] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
                />
                <span
                  style={{ background: "var(--text)" }}
                  className={`block w-[22px] h-[2px] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
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
        className={`fixed top-[60px] left-0 right-0 md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
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
              className="font-['JetBrains_Mono'] font-bold text-[13px] tracking-[0.07em] px-4 py-3 text-left transition-all duration-150 hover:border-[var(--border)] hover:bg-[var(--surface)] hover:text-[var(--text)] cursor-pointer w-full"
            >
              {label}
            </button>
          ))}
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
