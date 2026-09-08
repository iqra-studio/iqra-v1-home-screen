export const themes = {
  light: { 
    main: '#F7F5F0',
    secondary: '#EFEBE1',
    tabBarBg: '#FCFAF6', 
    cardBg: '#FCFAF6',

    tabBarBorder: "#E2DDD1",
    cardBorder: '#E2DDD1',

    textPrimary: '#23272A', 
    textSecondary: '#5A626A', 
    textMuted: '#8C939D',

    accent: '#3E7259', 
    accentLight: '#EAF3EE', 
    accentSoft: '#D2E4DA', 
    gold: '#C29B38', 
    waqfSign: '#FFE082', 

    weeklyReadingIcon: "#059669",
    weeklyReadingIcon_10: "rgba(5, 150, 105, 0.1)",
    weeklyReadingIcon_25: "rgba(5, 150, 105, 0.25)",

},
  sepia: { 
    main: '#EFE5CE',
    secondary: '#E5D9BF',
    tabBarBg: '#EFE5CE', 
    cardBg: '#F9F3E3',

    tabBarBorder: "#D8C9AA",
    cardBorder: '#D8C9AA',

    textPrimary: '#332519', 
    textSecondary: '#66523F', 
    textMuted: '#937F6A',

    accent: '#6F5B34', 
    accentLight: '#E0D1B7', 
    accentSoft: '#D7C7A8', 
    gold: '#B88B2A', 
    waqfSign: '#FFE082', 

    weeklyReadingIcon: "#7D6740",
    weeklyReadingIcon_10: "rgba(125, 103, 64, 0.1)",
    weeklyReadingIcon_25: "rgba(125, 103, 64, 0.25)",

},
  dark: { 
    main: '#161514',
    secondary: '#1E1D1B',
    tabBarBg: '#161514', 
    cardBg: '#242321',

    tabBarBorder: "#282725",
    cardBorder: '#353330',

    textPrimary: '#EDE8E1', 
    textSecondary: '#A5A096', 
    textMuted: '#726D64',

    accent: '#628CA3', 
    accentLight: '#1C252B', 
    accentSoft: '#2B3B45', 
    gold: '#D6BA82', 
    waqfSign: '#62BEF0', 

    weeklyReadingIcon: "#7BA2B8",
    weeklyReadingIcon_10: "rgba(123, 162, 184, 0.1)",
    weeklyReadingIcon_25: "rgba(123, 162, 184, 0.25)",
},
  warm: { 
    main: '#F5E8DB',
    secondary: '#EBD9C8',
    tabBarBg: '#F5E8DB', 
    cardBg: '#FDF5ED',

    tabBarBorder: "#DEC6B2",
    cardBorder: '#DEC6B2',

    textPrimary: '#382016', 
    textSecondary: '#6D4C3B', 
    textMuted: '#9B7864',

    accent: '#A6572A', 
    accentLight: '#F3DFD1', 
    accentSoft: '#E4C7B4', 
    gold: '#D18E29', 
    waqfSign: '#FFE082', 

    weeklyReadingIcon: "#B86B3E",
    weeklyReadingIcon_10: "rgba(184, 107, 62, 0.1)",
    weeklyReadingIcon_25: "rgba(184, 107, 62, 0.25)",
},
  amber_night: { 
    main: '#14110E',
    secondary: '#1B1612',
    tabBarBg: '#14110E', 
    cardBg: '#201A14',

    tabBarBorder: "#261E16",
    cardBorder: '#30261D',

    textPrimary: '#F5ECDC', 
    textSecondary: '#BFB0A0', 
    textMuted: '#867768',

    accent: '#DCA052', 
    accentLight: '#261C12', 
    accentSoft: '#3E2D1C', 
    gold: '#E0C07E', 
    waqfSign: '#D68BFF', 

    weeklyReadingIcon: "#C88E44",
    weeklyReadingIcon_10: "rgba(200, 142, 68, 0.1)",
    weeklyReadingIcon_25: "rgba(200, 142, 68, 0.25)",
},
global: {
    white: '#FFFFFF',
    white_10: 'rgba(255, 255, 255, 0.1)',
    white_15: 'rgba(255, 255, 255, 0.15)',
    white_20: 'rgba(255, 255, 255, 0.2)',
    white_90: 'rgba(255, 255, 255, 0.9)',
}
} as const;

export type ThemeId = keyof typeof themes;
export type AppTheme = (typeof themes)[ThemeId];