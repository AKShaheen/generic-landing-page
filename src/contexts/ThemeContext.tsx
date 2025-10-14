import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { theme as themeConfig } from '../config';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
  colors: typeof themeConfig.light;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ThemeMode>(() => {
    // Check localStorage and system preference
    const saved = localStorage.getItem('theme') as ThemeMode | null;
    if (saved) return saved;

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  const colors = mode === 'light' ? themeConfig.light : themeConfig.dark;

  useEffect(() => {
    // Update HTML class for Tailwind dark mode
    document.documentElement.classList.toggle('dark', mode === 'dark');

    // Apply CSS variables for dynamic theming
    const root = document.documentElement;
    Object.entries(colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Save preference
    localStorage.setItem('theme', mode);
  }, [mode, colors]);

  const toggleTheme = () => {
    setMode(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
