import { FiArrowLeft } from "react-icons/fi";
import { BulbIcon } from "../../utils/otherIcons";
import { useTheme } from "../../contexts/ThemeContext";

export function HeaderNav({ onBack }: { onBack: () => void }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header
      className="sticky top-0 z-40 flex items-center justify-between page-margin py-4 backdrop-blur-md"
      style={{
        background: "var(--nav-bg)",
        borderBottom: "1px solid var(--border-lt)",
      }}
    >
      <button
        data-cursor="pointer"
        onClick={onBack}
        className="inline-flex items-center gap-2 font-mono-brand text-xs tracking-widest uppercase transition-opacity hover:opacity-70"
        style={{ color: "var(--text-sub)" }}
      >
        <FiArrowLeft size={14} /> Back
      </button>
      <span
        className="font-display font-bold text-sm"
        style={{ color: "var(--text)" }}
      >
        Waithaka Ndung'u
      </span>
      <button
        data-cursor="pointer"
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
        style={{ color: isDark ? "var(--accent)" : "var(--text-sub)" }}
      >
        <BulbIcon lit={isDark} size={20} />
      </button>
    </header>
  );
}
