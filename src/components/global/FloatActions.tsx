import { useEffect, useState } from "react";
import { FiChevronUp } from "react-icons/fi";
import { useTheme } from "../../contexts/ThemeContext";
import { Tooltip } from "./Tooltip";
import { BulbIcon } from "../../utils/otherIcons";
import { SiWhatsapp } from "react-icons/si";
// import { useTheme } from "../context/ThemeContext"; // Adjust your import path

export function FloatingActions() {
  const { toggleTheme, isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  // Monitor scroll height to conditionally display the floating capsule
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 sm:right-15 right-2.5 z-50 flex flex-col sm:flex-row items-center gap-1 sm:gap-2 py-1 px-2 sm:p-3.5 rounded-full backdrop-blur-md transition-all duration-300 ease-out border
        ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"}
      `}
      style={{
        background: "var(--nav-bg)",
        borderColor: "var(--border-lt)",
        boxShadow: "var(--shadow-h)",
      }}
    >
      {/* 1. Theme Toggle Button */}
      <Tooltip side="top" label={isDark ? "Turn Lights on" : "Turn Lights off"}>
        <button
          onClick={toggleTheme}
          className="flex items-center gap-0.75 h-4.5 cursor-pointer relative group focus:outline-none hover:border 
          hover:bg-(--float-icons-bg) pl-0.5 pr-1 py-4 rounded-full"
          aria-label="Toggle Theme"
          data-cursor="pointer"
          style={{ color: isDark ? "var(--accent)" : "var(--text-sub)" }}
        >
          {/* Custom minimalist vertical bar graphics styled exactly to the design snippet */}
          <BulbIcon lit={isDark} size={20} />
        </button>
      </Tooltip>

      {/* 2. Thin Vertical Divider Line */}
      <div
        className="sm:w-px sm:h-5 w-5 h-px opacity-60"
        style={{ background: "var(--border-lt)" }}
      />

      {/* 3. Scroll to Top Button */}
      <Tooltip side="top" label="Scroll to Top">
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center cursor-pointer opacity-80 hover:opacity-100 transition-opacity
           duration-200 focus:outline-none hover:border px-1 py-1 hover:bg-(--float-icons-bg) rounded-full"
          aria-label="Scroll to Top"
          data-cursor="pointer"
          style={{ color: isDark ? "var(--accent)" : "var(--text-sub)" }}
        >
          <FiChevronUp size={18} strokeWidth={2.5} />
        </button>
      </Tooltip>
      <div
        className="sm:w-px sm:h-5 w-5 h-px opacity-60"
        style={{ background: "var(--border-lt)" }}
      />
      <Tooltip side="top" label="Whatsapp me">
        <a
          href={`https://wa.me/254725676491?text=${encodeURIComponent(
            "Hello Waithaka, From your portfolio, Let's talk business",
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          data-cursor="pointer"
          aria-label="Contact on WhatsApp"
          className="inline-flex items-center justify-center p-1 rounded-2xl transition-transform hover:-translate-y-0.5 shrink-0"
          style={{
            color: isDark ? "var(--accent)" : "var(--color-green)",
          }}
        >
          <SiWhatsapp size={18} />
        </a>
      </Tooltip>
    </div>
  );
}
