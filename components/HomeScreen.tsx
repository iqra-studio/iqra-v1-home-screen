import { Alert, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useTheme } from "@/theme/ThemeContext";
import ContinueReading from "./home/ContinueReading";
import DailyVerse from "./home/DailyVerse";
import QuoteFooter from "./home/Footer";
import Header from "./home/Header";
import QuickAccess from "./home/QuickAccess";
import ScreenCornerGlow from "./home/ScreenGlow";

export default function HomeScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.screen, { backgroundColor: theme.main }]}>
      {/* <BackgroundEmblem /> */}
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
          ayetInfo="255. Âyet  •  Az önce okundu"
          juz={3}
          page={42}
          arabicPreview="اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ..."
          onPress={() => Alert.alert("Okuma", "Bakara Suresi açılıyor.")}
        />
        <QuickAccess
          items={[
            {
              icon: "scroll",
              label: "NAMAZ SURELERİ",
              count: "11 Kısa Sure",
              onPress: () => {},
            },
            {
              icon: "bookmark",
              label: "NOT & AYRAÇ",
              count: "18 Kayıt",
              onPress: () => {},
            },
            {
              icon: "compass",
              label: "SECDE SURELERİ",
              count: "14 Tilavet Secdesi",
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
