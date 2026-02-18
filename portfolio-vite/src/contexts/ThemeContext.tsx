import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ── Design tokens ──────────────────────────────────────────────────────────
const TOKENS: Record<Theme, Record<string, string>> = {
  light: {
    "--bg": "#F4EFE6",
    "--bg2": "#EDE7DB",
    "--surface": "#FDFAF4",
    "--surface-alt": "#EDE7DB",
    "--border": "#1A1A1A",
    "--border-lt": "#C4BAA6",
    "--text": "#1A1A1A",
    "--text-sub": "#584E43",
    "--text-muted": "#4AA9B9A",
    "--accent": "#F97316",
    "--yellow": "#F5E642",
    "--blue": "#3B82F6",
    "--green": "#10B981",
    "--year-bg": "#1A1A1A",
    "--year-text": "#F4EFE6",
    "--shadow": "4px 4px 0 #1A1A1A",
    "--shadow-h": "7px 7px 0 #1A1A1A",
    "--nav-bg": "rgba(244,239,230,0.88)",
    "--tag-bg": "#E4DDD0",
    "--tag-text": "#584E43",
    "--dot": "rgba(0,0,0,0.16)",
    "--hero-ghost": "rgba(0,0,0,0.11)",
    "--sm": ".8rem",
    "--ticker-bg": "#1A1A1A",
    "--ticker-text": "#F5E642",
  },
  dark: {
    "--bg": "#0B0B0B",
    "--bg2": "#111111",
    "--surface": "#141414",
    "--surface-alt": "#1C1C1C",
    "--border": "#DDD5C4",
    "--border-lt": "#2A2A2A",
    "--text": "#EDE7DC",
    "--text-sub": "#9A8E7E",
    "--text-muted": "#AF4F40",
    "--accent": "#F97316",
    "--yellow": "#F5E642",
    "--blue": "#60A5FA",
    "--green": "#34D399",
    "--year-bg": "#F97316",
    "--year-text": "#0B0B0B",
    "--shadow": "4px 4px 0 #F97316",
    "--shadow-h": "7px 7px 0 #F97316",
    "--nav-bg": "rgba(11,11,11,0.92)",
    "--tag-bg": "#1E1E1E",
    "--tag-text": "#9A8E7E",
    "--dot": "rgba(255,255,255,0.26)",
    "--hero-ghost": "rgba(255,255,255,0.08)",
    "--sm": ".8rem",
    "--ticker-bg": "#F97316",
    "--ticker-text": "#0B0B0B",
  },
};

// Apply tokens to :root without touching React state — safe to call any time
function applyTokens(theme: Theme) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  const tokens = TOKENS[theme];
  Object.entries(tokens).forEach(([k, v]) => root.style.setProperty(k, v));
}

// Read system preference
function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

// ── Provider ───────────────────────────────────────────────────────────────
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // "userPicked" tracks whether the user has ever manually toggled.
  // If not, we always follow the system.
  const [userPicked, setUserPicked] = useState<Theme | null>(() => {
    const saved = localStorage.getItem("portfolio-theme-pick") as Theme | null;
    return saved === "dark" || saved === "light" ? saved : null;
  });

  const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);

  // Resolved theme: user's explicit choice wins; otherwise follow system
  const theme: Theme = userPicked ?? systemTheme;

  // Listen for OS-level theme changes — only matters when user hasn't picked
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) =>
      setSystemTheme(e.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Apply tokens whenever resolved theme changes — NO React state for tokens,
  // just direct DOM mutation so card inline styles are never touched
  useEffect(() => {
    applyTokens(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setUserPicked(next);
    localStorage.setItem("portfolio-theme-pick", next);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isDark: theme === "dark" }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
