import { useEffect, useState, type ReactNode } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import type { Theme } from '../types/theme';

type ThemeProviderProps = {
  children: ReactNode;
};

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('light');
  // como puedo obtener el estado del thema del navegador que se esta usando?

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(prefersDark);
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(prefersDark.matches ? 'dark' : 'light');
    }

    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    prefersDark.addEventListener('change', handleChange);
    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* {theme} */}
      {children}
    </ThemeContext.Provider>
  );
}
export { ThemeProvider, ThemeContext };

// export  ThemeProvider;
