import { StyleSheet, View } from "react-native";
import Svg, { Circle, Defs, RadialGradient, Stop } from "react-native-svg";

import { useTheme } from "@/theme/ThemeContext";

const SIZE = 260;
const GLOW_THEMES = ["dark", "amber_night"];

export default function ScreenCornerGlow() {
  const { theme, themeId } = useTheme();

  if (!GLOW_THEMES.includes(themeId)) return null;

  return (
    <View pointerEvents="none" style={styles.wrapper}>
      <Svg width={SIZE} height={SIZE}>
        <Defs>
          <RadialGradient
            id="cornerGlow"
            cx="50%"
            cy="50%"
            r="50%"
            fx="50%"
            fy="50%"
          >
            <Stop offset="0%" stopColor={theme.accent} stopOpacity={0.18} />
            <Stop offset="35%" stopColor={theme.accent} stopOpacity={0.1} />
            <Stop offset="65%" stopColor={theme.accent} stopOpacity={0.04} />
            <Stop offset="100%" stopColor={theme.accent} stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <Circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={SIZE / 2}
          fill="url(#cornerGlow)"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    left: -SIZE / 1.75,
    bottom: -SIZE / 3,
    zIndex: 0,
  },
});
