import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Show button when scrolled past 40% of content
      setIsVisible(scrollPercent > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300 transform ${
        isVisible
          ? "opacity-100 scale-100 pointer-events-auto"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
      style={{
        background: "var(--accent)",
        border: "2px solid var(--border)",
        boxShadow: "var(--shadow-h)",
        color: "var(--surface)",
      }}
      title="Scroll to top"
    >
      <span className="text-lg">↑</span>
    </button>
  );
}
