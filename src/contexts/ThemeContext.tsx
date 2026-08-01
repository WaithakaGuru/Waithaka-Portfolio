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

// ── Design tokens — light sky-blue, minimal ────────────────────────────────
const TOKENS: Record<Theme, Record<string, string>> = {
  light: {
    "--bg": "#EAF4FB",
    "--bg2": "#DCEDFA",
    "--surface": "#FFFFFF",
    "--surface-alt": "#F3F9FD",
    "--float-icons-bg": "var(--accent-soft)",
    "--border": "#16202B",
    "--border-lt": "#CFE3F2",
    "--text": "#12181F",
    "--text-sub": "#55677A",
    "--text-muted": "#8496A9",
    "--accent": "#2F9BE0",
    "--accent-soft": "#CFEBFB",
    "--pink": "#EC4899",
    "--yellow": "#F5E642",
    "--blue": "#2F9BE0",
    "--green": "#10B981",
    "--year-bg": "#12181F",
    "--year-text": "#EAF4FB",
    "--shadow": "0 1px 2px rgba(18,24,31,0.06)",
    "--shadow-h": "0 12px 28px rgba(18,24,31,0.10)",
    "--nav-bg": "rgba(255,255,255,0.75)",
    "--tag-bg": "#EAF4FB",
    "--tag-text": "#3A536A",
    "--dot": "rgba(18,24,31,0.07)",
    "--hero-ghost": "rgba(47,155,224,0.08)",
    "--sm": ".8rem",
    "--ticker-bg": "#12181F",
    "--ticker-text": "#8FD3FA",
    "--section-a": "#F4F5F8",
    "--section-b": "#FFFFFF",
    "--card-bg": "#FFFFFF",
  },
  dark: {
    "--bg": "#0B1220",
    "--bg2": "#0F1729",
    "--surface": "#111A2C",
    "--surface-alt": "#16213A",
    "--border": "#DCEBF7",
    "--border-lt": "#22314A",
    "--text": "#E7F1FB",
    "--text-sub": "#93A6BC",
    "--float-icons-bg": "#f4fbfd",
    "--text-muted": "#65788D",
    "--accent": "#4CB6F0",
    "--accent-soft": "#1B3350",
    "--pink": "#F472B6",
    "--yellow": "#F5E642",
    "--blue": "#4CB6F0",
    "--green": "#34D399",
    "--year-bg": "#4CB6F0",
    "--year-text": "#0B1220",
    "--shadow": "0 1px 2px rgba(0,0,0,0.3)",
    "--shadow-h": "0 12px 28px rgba(0,0,0,0.4)",
    "--nav-bg": "rgba(11,18,32,0.85)",
    "--tag-bg": "#16213A",
    "--tag-text": "#93A6BC",
    "--dot": "rgba(255,255,255,0.08)",
    "--hero-ghost": "rgba(76,182,240,0.10)",
    "--sm": ".8rem",
    "--ticker-bg": "#4CB6F0",
    "--ticker-text": "#0B1220",
    "--section-a": "#1B1D28",
    "--section-b": "#262940",
    "--card-bg": "#262940",
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
// function getSystemTheme(): Theme {
//   return window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light";
// }

// ── Provider ───────────────────────────────────────────────────────────────
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // "userPicked" tracks whether the user has ever manually toggled.
  // If not, we always follow the system.
  const [userPicked, setUserPicked] = useState<Theme | null>(() => {
    const saved = localStorage.getItem("portfolio-theme-pick") as Theme | null;
    return saved === "dark" || saved === "light" ? saved : null;
  });

  // const [systemTheme, setSystemTheme] = useState<Theme>(getSystemTheme);

  // Resolved theme: user's explicit choice wins; otherwise default to light
  const theme: Theme = userPicked ?? "light";

  // Listen for OS-level theme changes — only matters when user hasn't picked
  // useEffect(() => {
  //   const mq = window.matchMedia("(prefers-color-scheme: dark)");
  //   const handler = (e: MediaQueryListEvent) =>
  //     setSystemTheme(e.matches ? "dark" : "light");
  //   mq.addEventListener("change", handler);
  //   return () => mq.removeEventListener("change", handler);
  // }, []);

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
