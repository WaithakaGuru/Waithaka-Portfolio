import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  actualTheme: "dark" | "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("system");
  const [actualTheme, setActualTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;

    let systemTheme: "dark" | "light" = "dark";
    if (theme === "system") {
      systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }

    const currentTheme = theme === "system" ? systemTheme : theme;
    setActualTheme(currentTheme);

    root.classList.remove("light", "dark");
    root.classList.add(currentTheme);

    // Update CSS custom properties
    if (currentTheme === "dark") {
      root.style.setProperty("--bg-primary", "#000000");
      root.style.setProperty("--bg-secondary", "#1a1a1a");
      root.style.setProperty("--bg-card", "#1a1a1a");
      root.style.setProperty("--text-primary", "#ffffff");
      root.style.setProperty("--text-secondary", "#cccccc");
      root.style.setProperty("--accent-green", "#22c55e");
      root.style.setProperty("--accent-yellow", "#eab308");
      root.style.setProperty("--border-color", "#374151");
      root.style.setProperty("--grid-color", "#cccccc");
    } else {
      root.style.setProperty("--bg-primary", "transparent");
      root.style.setProperty("--bg-secondary", "#f8f9fa");
      root.style.setProperty("--bg-card", "#ffffff");
      root.style.setProperty("--text-primary", "#000000");
      root.style.setProperty("--text-secondary", "#666666");
      root.style.setProperty("--accent-green", "#16a34a");
      root.style.setProperty("--accent-yellow", "#ca8a04");
      root.style.setProperty("--border-color", "#374151");
      root.style.setProperty("--grid-color", "#1a1a1a");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, actualTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
