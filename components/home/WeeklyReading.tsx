import { StyleSheet, Text, View } from "react-native";

import { themes } from "@/theme/colors";
import { useTheme } from "@/theme/ThemeContext";
import Icon, { IconName } from "./Icon";

type DayState = "done" | "empty";

interface DayItem {
  day: string;
  state: DayState;
}

interface WeeklyReadingProps {
  streakCount: number;
  weekData: DayItem[];
  visible: boolean;
}

type StreakLevel = {
  key: "baslangic" | "isinma" | "alevlenme" | "ustalasma";
  label: string;
  icon: IconName;
  subtitle: string;
  min: number;
  max: number;
};

const STREAK_LEVELS: StreakLevel[] = [
  {
    key: "baslangic",
    label: "Başlangıç",
    icon: "sprout",
    subtitle: "İlk adımı attın...",
    min: 1,
    max: 3,
  },
  {
    key: "isinma",
    label: "Isınma",
    icon: "zap",
    subtitle: "Seriyi yakaladın, ritim tutuyor...",
    min: 4,
    max: 6,
  },
  {
    key: "alevlenme",
    label: "Alevlenme",
    icon: "flame.fill",
    subtitle: "Alev büyüyor...",
    min: 7,
    max: 13,
  },
  {
    key: "ustalasma",
    label: "Ustalaşma",
    icon: "trophy",
    subtitle: "Zirveye ulaştın...",
    min: 14,
    max: Infinity,
  },
];

function getStreakLevel(streakCount: number): StreakLevel {
  return (
    STREAK_LEVELS.find((l) => streakCount >= l.min && streakCount <= l.max) ??
    STREAK_LEVELS[0]
  );
}

export default function WeeklyReading({
  streakCount,
  weekData,
  visible,
}: WeeklyReadingProps) {
  const { theme, themeId } = useTheme();
  const isDarkTheme = themeId === "dark" || themeId === "amber_night";
  const cardBackground = isDarkTheme ? theme.cardBg : theme.accent;

  if (!visible) return null;

  const level = getStreakLevel(Math.max(streakCount, 0) || 1);
  const isMastery = level.key === "ustalasma";

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: theme.secondary,
          borderWidth: 1,
          borderColor: theme.cardBorder,
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 1,
          shadowColor: cardBackground,
        },
      ]}
    >
      <View style={styles.row}>
        <View style={styles.iconOuter}>
          <View
            style={[
              styles.iconWrap,
              {
                backgroundColor: theme.weeklyReadingIcon_10,
                borderWidth: 1,
                borderColor: theme.weeklyReadingIcon_25,
              },
              isMastery && {
                shadowColor: theme.accent,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.9,
                shadowRadius: 10,
                elevation: 5,
              },
            ]}
          >
            <Icon name={level.icon} size={18} color={theme.accent} />
          </View>
        </View>

        <View style={styles.info}>
          <Text style={[styles.title, { color: theme.textPrimary }]}>
            {streakCount} Günlük{"\n"}Okuma Serisi
          </Text>
        </View>

        <View style={styles.daysWrap}>
          {weekData.map((item, index) => (
            <View key={`${item.day}-${index}`} style={styles.dayCol}>
              <View
                style={[
                  styles.dot,
                  item.state === "done"
                    ? { backgroundColor: theme.accent }
                    : {
                        backgroundColor: "transparent",
                        borderWidth: 1,
                        borderColor: theme.textPrimary + "33",
                      },
                ]}
              >
                <Icon
                  name="checkmark"
                  size={12}
                  color={
                    item.state === "done"
                      ? themes.global.white_90
                      : theme.textMuted
                  }
                  strokeWidth={2.5}
                />
              </View>
              <Text
                style={[styles.dayLabel, { color: theme.textPrimary + "88" }]}
              >
                {item.day}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.bottomRow}>
        <View style={[styles.badge, { backgroundColor: theme.accent + "22" }]}>
          <Text style={[styles.badgeText, { color: theme.accent }]}>
            {level.label}
          </Text>
        </View>
        <Text style={[styles.subtitle, { color: theme.textPrimary + "66" }]}>
          "{level.subtitle}"
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 14,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconOuter: {
    width: 34,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  iconWrap: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 16,
  },
  daysWrap: {
    flexDirection: "row",
    gap: 6,
  },
  dayCol: {
    alignItems: "center",
    gap: 4,
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  dayLabel: {
    fontSize: 9,
  },
  bottomRow: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: {
    fontSize: 10,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 10,
    fontStyle: "italic",
    flexShrink: 1,
  },
});
