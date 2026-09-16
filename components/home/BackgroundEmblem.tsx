import { StyleSheet, Text } from "react-native";

import { useTheme } from "@/theme/ThemeContext";

export default function BackgroundEmblem() {
  const { theme } = useTheme();

  return (
    <Text
      style={[styles.emblem, { color: theme.textMuted }]}
      pointerEvents="none"
      allowFontScaling={false}
    >
      الله
    </Text>
  );
}

const styles = StyleSheet.create({
  emblem: {
    position: "absolute",
    right: 0,
    bottom: 0,
    fontSize: 200,
    opacity: 0.07,
    fontWeight: "700",
  },
});
