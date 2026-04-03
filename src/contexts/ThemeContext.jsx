import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("sahbi-theme");
    if (saved === "dark") return "light";
    return saved || "system";
  });

  // Project requirement: remove `data-theme="dark"` entirely.
  // We keep the theme state for UI, but force the applied attribute to `light`.
  const resolvedTheme = "light";

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  useEffect(() => {
    localStorage.setItem("sahbi-theme", theme);
  }, [theme]);

  // Clamp any future `dark` selection to `light` so the state stays consistent.
  const setThemeClamped = (next) => {
    setTheme((prev) => {
      const candidate = typeof next === "function" ? next(prev) : next;
      return candidate === "dark" ? "light" : candidate;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: setThemeClamped,
        resolvedTheme,
      }}
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
