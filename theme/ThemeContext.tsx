import * as NavigationBar from 'expo-navigation-bar';
import { createContext, useContext, useEffect, useMemo, useState, type PropsWithChildren } from 'react';
import { Platform } from 'react-native';

import { themes } from './colors';

export type ThemeId = Exclude<keyof typeof themes, 'global'>;
export type AppTheme = (typeof themes)[ThemeId];

type ThemeContextValue = { theme: AppTheme; themeId: ThemeId; setThemeId: (themeId: ThemeId) => void };
const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeId, setThemeId] = useState<ThemeId>('light');
  const value = useMemo(() => ({ theme: themes[themeId], themeId, setThemeId }), [themeId]);

  useEffect(() => {
    if (Platform.OS !== 'android') return;

    const isDarkTheme = themeId === 'dark' || themeId === 'amber_night';
    NavigationBar.setStyle(isDarkTheme ? 'light' : 'dark');
  }, [themeId, value.theme.tabBarBg]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used inside ThemeProvider');
  return context;
}