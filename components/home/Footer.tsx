import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";

import { useTheme } from "@/theme/ThemeContext";
import Icon from "./Icon";

interface QuoteFooterProps {
  quote: string;
  source: string;
}

export default function QuoteFooter({ quote, source }: QuoteFooterProps) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.dividerRow}>
        <LinearGradient
          colors={["transparent", theme.cardBorder]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.line}
        />
        <View style={styles.ornament}>
          <Icon name="flower" size={14} color={theme.accent} />
        </View>
        {/* <Text style={[styles.ornament, { color: theme.accent }]}>❋</Text> */}
        <LinearGradient
          colors={[theme.cardBorder, "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.line}
        />
      </View>

      <Text style={[styles.quote, { color: theme.textSecondary }]}>
        "{quote}"
      </Text>

      <Text style={[styles.source, { color: theme.textMuted }]}>
        {source.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    paddingTop: 20,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  dividerRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
  },
  line: {
    flex: 1,
    height: 1.5,
  },
  ornament: {
    marginHorizontal: 10,
  },
  quote: {
    fontSize: 12,
    fontStyle: "italic",
    fontFamily: "Lora_400Regular",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 8,
  },
  source: {
    fontSize: 10,
    fontFamily: "PlusJakartaSans_500Medium",
    letterSpacing: 1,
  },
});
