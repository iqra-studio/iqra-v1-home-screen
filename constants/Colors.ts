import { themes } from '@/theme/colors';

export default {
  light: {
    text: themes.light.textPrimary,
    background: themes.light.main,
    tint: themes.light.accent,
    tabIconDefault: themes.light.textMuted,
    tabIconSelected: themes.light.accent,
  },
  dark: {
    text: themes.dark.textPrimary,
    background: themes.dark.main,
    tint: themes.dark.accent,
    tabIconDefault: themes.dark.textMuted,
    tabIconSelected: themes.dark.accent,
  },
};
