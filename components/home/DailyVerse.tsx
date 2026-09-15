import { Pressable, StyleSheet, Text, View } from "react-native";

import { useTheme } from "@/theme/ThemeContext";
import Icon from "./Icon";

type Props = {
  arabicText: string;
  meaning: string;
  source: string;
  onPlay: () => void;
  onCopy: () => void;
  onShare: () => void;
  onOpenSurah: () => void;
};
export default function DailyVerse({
  arabicText,
  meaning,
  source,
  onPlay,
  onCopy,
  onShare,
  onOpenSurah,
}: Props) {
  const { theme, themeId } = useTheme();
  const isDarkTheme = themeId === "dark" || themeId === "amber_night";
  const cardBackground = isDarkTheme ? theme.cardBg : theme.accent;
  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.cardBg,
          borderColor: theme.cardBorder,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 1,
          shadowColor: cardBackground,
        },
      ]}
    >
      <View style={styles.top}>
        <View style={styles.label}>
          <Icon name="sparkles" size={14} color={theme.gold} />
          <Text style={[styles.heading, { color: theme.textPrimary }]}>
            Günün Ayeti
          </Text>
        </View>
        <View style={[styles.badge, { backgroundColor: theme.secondary }]}>
          <Text style={[styles.source, { color: theme.textSecondary }]}>
            {source}
          </Text>
        </View>
      </View>
      <View style={{ gap: 10 }}>
        <Text style={[styles.arabic, { color: theme.textPrimary }]}>
          {arabicText}
        </Text>
        <Text style={[styles.meaning, { color: theme.textSecondary }]}>
          &quot;{meaning}&quot;
        </Text>
      </View>
      <View style={[styles.bottom, { borderColor: theme.cardBorder }]}>
        <View style={styles.actions}>
          <Pressable
            onPress={onPlay}
            style={[styles.action, { borderColor: theme.cardBorder }]}
          >
            <Icon
              name="play.fill"
              size={13}
              fill={theme.textSecondary}
              strokeWidth={0}
            />
          </Pressable>
          <Pressable
            onPress={onCopy}
            style={[styles.action, { borderColor: theme.cardBorder }]}
          >
            <Icon name="doc.on.doc" size={13} color={theme.textSecondary} />
          </Pressable>
          <Pressable
            onPress={onShare}
            style={[styles.action, { borderColor: theme.cardBorder }]}
          >
            <Icon
              name="square.and.arrow.up"
              size={13}
              color={theme.textSecondary}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={onOpenSurah}
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <Text style={[styles.open, { color: theme.accent }]}>Sureyi Aç</Text>
          <Icon
            name="chevron.right"
            size={18}
            color={theme.accent}
            strokeWidth={2}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 16, borderWidth: 1, gap: 13, padding: 16 },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    alignItems: "center",
    flexDirection: "row",
    gap: 6,
  },
  heading: { fontFamily: "PlusJakartaSans_700Bold", fontSize: 12 },
  badge: {
    borderRadius: 100,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  source: {
    fontFamily: "PlusJakartaSans_600SemiBold",
    fontSize: 10,
    textAlign: "center",
  },
  arabic: {
    fontFamily: "Iqra",
    fontSize: 22,
    textAlign: "right",
    lineHeight: 50,
  },
  meaning: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    fontStyle: "italic",
    lineHeight: 16,
  },
  bottom: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    paddingTop: 10,
  },
  actions: { flexDirection: "row", gap: 7 },
  action: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    height: 32,
    justifyContent: "center",
    width: 32,
  },
  open: { fontFamily: "PlusJakartaSans_600SemiBold", fontSize: 11 },
});
