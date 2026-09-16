import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/theme/ThemeContext";
import BackgroundEmblem from "./home/BackgroundEmblem";
import ContinueReading from "./home/ContinueReading";
import DailyVerse from "./home/DailyVerse";
import QuoteFooter from "./home/Footer";
import Header from "./home/Header";
import QuickAccess from "./home/QuickAccess";
import ScreenCornerGlow from "./home/ScreenGlow";
import WeeklyReading from "./home/WeeklyReading";

export default function HomeScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { backgroundColor: theme.main }]}>
      <BackgroundEmblem />
      <View style={[styles.headerContainer, { paddingTop: insets.top + 26 }]}>
        <Header />
      </View>
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingBottom: insets.bottom + 22 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <ContinueReading
          surahName="2. Bakara Suresi"
          surahNameArabic="البقرة"
          ayetInfo="255. Ayet (el-Kürsî)"
          juz={3}
          page={42}
          arabicPreview="اَللّٰهُ لَٓا اِلٰهَ اِلَّا هُوَ ۚ اَلْحَيُّ الْقَيُّومُ ۚ"
          onPress={() => Alert.alert("Okuma", "Bakara Suresi açılıyor.")}
        />
        <QuickAccess
          items={[
            {
              icon: "book",
              label: "SURELER",
              count: "114 Sure",
              onPress: () => {},
            },
            {
              icon: "bookmark",
              label: "NOT & AYRAÇ",
              count: "18 Kayıt",
              onPress: () => {},
            },
            {
              icon: "gearshape",
              label: "AYARLAR",
              count: "Tema seç",
              onPress: () => {},
            },
          ]}
        />
        <DailyVerse
          arabicText="اِنَّ اللّٰهَ مَعَ الصَّابِرٖينَ"
          meaning="Şüphesiz Allah sabredenlerle beraberdir."
          source="Bakara, 153"
          onPlay={() => {}}
          onCopy={() => {}}
          onShare={() => {}}
          onOpenSurah={() => {}}
        />
        <WeeklyReading
          streakCount={16}
          visible
          weekData={[
            { day: "P", state: "done" },
            { day: "S", state: "done" },
            { day: "Ç", state: "done" },
            { day: "P", state: "done" },
            { day: "C", state: "done" },
            { day: "C", state: "done" },
            { day: "P", state: "done" },
          ]}
        />
        <QuoteFooter
          quote="Şüphesiz kalpler ancak Allah'ı anmakla huzur bulur."
          source="RA'D, 28"
        />
        <ScreenCornerGlow />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1 },
  headerContainer: { marginHorizontal: 16 },
  content: { gap: 24, paddingVertical: 26, paddingHorizontal: 16 },
});
