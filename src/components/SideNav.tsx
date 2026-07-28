import {
  FiHome,
  FiBriefcase,
  FiZap,
  FiUser,
  FiMail,
  FiFileText,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useTheme } from "../contexts/ThemeContext";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  available: boolean;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", icon: <FiHome size={18} />, available: true },
  {
    id: "work",
    label: "Selected Work",
    icon: <FiBriefcase size={18} />,
    available: false,
  },
  {
    id: "play",
    label: "Play With Me",
    icon: <FiZap size={18} />,
    available: true,
  },
  {
    id: "about",
    label: "About Me",
    icon: <FiUser size={18} />,
    available: false,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <FiMail size={18} />,
    available: true,
  },
];

export function SideNav() {
  const { isDark, toggleTheme } = useTheme();

  const goTo = (id: string, available: boolean) => {
    if (!available) return;
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-1 p-2 rounded-2xl backdrop-blur-md"
      style={{
        background: "var(--nav-bg)",
        border: "1px solid var(--border-lt)",
        boxShadow: "var(--shadow-h)",
      }}
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          title={item.available ? item.label : `${item.label} — coming soon`}
          onClick={() => goTo(item.id, item.available)}
          className="group relative flex items-center justify-center w-10 h-10 rounded-xl transition-all"
          style={{
            color: item.available ? "var(--text)" : "var(--text-muted)",
            opacity: item.available ? 1 : 0.4,
            cursor: item.available ? "pointer" : "default",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            if (item.available)
              e.currentTarget.style.background = "var(--accent-soft)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
          }}
        >
          {item.icon}
          <span
            className="pointer-events-none absolute left-12 whitespace-nowrap rounded-md px-2 py-1 text-xs font-mono-brand opacity-0 group-hover:opacity-100 transition-opacity"
            style={{
              background: "var(--text)",
              color: "var(--bg)",
            }}
          >
            {item.label}
          </span>
        </button>
      ))}

      <div className="my-1 h-px" style={{ background: "var(--border-lt)" }} />

      <button
        title="Resume — coming soon"
        className="flex items-center justify-center w-10 h-10 rounded-xl"
        style={{ color: "var(--text-muted)", opacity: 0.4 }}
      >
        <FiFileText size={18} />
      </button>

      <button
        title={isDark ? "Switch to light" : "Switch to dark"}
        onClick={toggleTheme}
        className="flex items-center justify-center w-10 h-10 rounded-xl transition-colors"
        style={{ color: "var(--accent)" }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--accent-soft)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        {isDark ? <FiSun size={18} /> : <FiMoon size={18} />}
      </button>
    </nav>
  );
}
