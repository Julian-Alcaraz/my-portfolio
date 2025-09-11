import { createContext } from 'react';
import type { ThemeContextType } from '@ProjectTypes/theme';

export const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {}, // función vacía por defecto
});
