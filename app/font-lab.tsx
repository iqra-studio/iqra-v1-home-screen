import { useRouter } from "expo-router";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Icon from "@/components/home/Icon";
import { useQuranAyahs } from "@/components/useQuranAyahs";
import { useTheme } from "@/theme/ThemeContext";

const samples = [
  {
    name: "Iqra",
    family: "Iqra",
    note: "Iqra Kur’an fontu",
  },
] as const;

const ayahsSample: { text: string; numberInSurah: number }[] = [
  {
    text: "بِـــــــــــــسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحٖيمِ",
    numberInSurah: 0,
  },
  {
    text: "وَالشَّمْسِ وَضُحٰيهَاۙࣕ١",
    numberInSurah: 1,
  },
  {
    text: "وَالْقَمَرِ اِذَا تَلٰيهَاۙࣕ٢",
    numberInSurah: 2,
  },
  {
    text: "وَالنَّهَارِ اِذَا جَلّٰيهَاۙࣕ٣",
    numberInSurah: 3,
  },
  {
    text: "وَالَّيْلِ اِذَا يَغْشٰيهَاۙࣕ٤",
    numberInSurah: 4,
  },
  {
    text: "وَالسَّمَٓاءِ وَمَا بَنٰيهَاۙࣕ٥",
    numberInSurah: 5,
  },
  {
    text: "وَالْاَرْضِ وَمَا طَحٰيهَاۙࣕ٦",
    numberInSurah: 6,
  },
  {
    text: "وَنَفْسٍ وَمَا سَوّٰيهَاۙࣕ٧",
    numberInSurah: 7,
  },
  {
    text: "فَاَلْهَمَهَا فُجُورَهَا وَتَقْوٰيهَاۙࣕ٨",
    numberInSurah: 8,
  },
  {
    text: "قَدْ اَفْلَحَ مَنْ زَكّٰيهَاۙࣕ٩",
    numberInSurah: 9,
  },
  {
    text: "وَقَدْ خَابَ مَنْ دَسّٰيهَاؕ١٠",
    numberInSurah: 10,
  },
  {
    text: "كَذَّبَتْ ثَمُودُ بِطَغْوٰيهَاۙࣕ١١",
    numberInSurah: 11,
  },
  {
    text: "اِذِ انْبَعَثَ اَشْقٰيهَاۙࣕ١٢",
    numberInSurah: 12,
  },
  {
    text: "فَقَالَ لَهُمْ رَسُولُ اللّٰهِ نَاقَةَ اللّٰهِ وَسُقْيٰيهَاࣞ١٣",
    numberInSurah: 13,
  },
  {
    text: "فَكَذَّبُوهُ فَعَقَرُوهَاۙࣕ فَدَمْدَمَ عَلَيْهِمْ رَبُّهُمْ بِذَنْبِهِمْ فَسَوّٰيهَاۙࣕ١٤",
    numberInSurah: 14,
  },
  {
    text: "وَلَا يَخَافُ عُقْبٰيهَا١٥",
    numberInSurah: 15,
  },
];

export default function FontLabScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { ayahs, isLoading, hasError } = useQuranAyahs();
  const bismillah = ayahsSample[0];
  const remainingAyahs = ayahsSample
    .slice(1)
    .sort((first, second) => first.numberInSurah - second.numberInSurah);

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.main }]}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={[
              styles.back,
              { backgroundColor: theme.cardBg, borderColor: theme.cardBorder },
            ]}
          >
            <Icon name="chevron.right" size={18} color={theme.textPrimary} />
          </Pressable>
          <View style={styles.heading}>
            <Text style={[styles.kicker, { color: theme.accent }]}>
              FONT LAB
            </Text>
            <Text style={[styles.title, { color: theme.textPrimary }]}>
              Arapça font denemeleri
            </Text>
          </View>
          <View style={styles.headerSpacer} />
        </View>

        <Text style={[styles.description, { color: theme.textSecondary }]}>
          Aynı ayet parçalarını farklı font aileleriyle karşılaştırın.
        </Text>

        <View
          style={[
            styles.notice,
            {
              backgroundColor: theme.accentLight,
              borderColor: theme.accentSoft,
            },
          ]}
        >
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>
            {isLoading
              ? "Fatiha suresi yerel veritabanından yükleniyor..."
              : hasError
                ? "Yerel ayet metni yüklenemedi."
                : `${ayahs.length} Fatiha ayeti yüklendi.`}
          </Text>
        </View>

        <View style={styles.list}>
          {samples.map((sample, index) => (
            <View
              key={sample.family}
              style={[
                styles.sample,
                {
                  backgroundColor: theme.cardBg,
                  borderColor: theme.cardBorder,
                },
              ]}
            >
              <View style={styles.sampleHeader}>
                <Text style={[styles.sampleIndex, { color: theme.accent }]}>
                  {String(index + 1).padStart(2, "0")}
                </Text>
                <View style={styles.sampleMeta}>
                  <Text
                    style={[styles.sampleName, { color: theme.textPrimary }]}
                  >
                    {sample.name}
                  </Text>
                  <Text style={[styles.sampleNote, { color: theme.textMuted }]}>
                    {sample.note}
                  </Text>
                </View>
              </View>
              <View
                style={[
                  styles.arabicBlock,
                  { borderTopColor: theme.cardBorder },
                ]}
              >
                {bismillah && (
                  <Text
                    style={[
                      styles.bismillah,
                      { color: theme.textPrimary, fontFamily: sample.family },
                    ]}
                  >
                    {bismillah.text}
                  </Text>
                )}
                <Text
                  style={[
                    styles.arabic,
                    { color: theme.textPrimary, fontFamily: sample.family },
                  ]}
                >
                  {remainingAyahs.map((ayah) => (
                    <Text key={ayah.numberInSurah}>{ayah.text} </Text>
                  ))}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  content: { gap: 16, padding: 20, paddingBottom: 34 },
  header: { alignItems: "center", flexDirection: "row", gap: 14 },
  back: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    height: 38,
    justifyContent: "center",
    transform: [{ rotate: "180deg" }],
    width: 38,
  },
  heading: { flex: 1, gap: 3 },
  headerSpacer: { width: 38 },
  kicker: {
    fontFamily: "PlusJakartaSans_700Bold",
    fontSize: 10,
    letterSpacing: 1.4,
  },
  title: { fontFamily: "Lora_700Bold", fontSize: 21 },
  description: {
    fontFamily: "PlusJakartaSans_400Regular",
    fontSize: 12,
    lineHeight: 19,
    paddingLeft: 52,
  },
  notice: {
    borderRadius: 12,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  noticeText: { fontFamily: "PlusJakartaSans_500Medium", fontSize: 11 },
  list: { gap: 12 },
  sample: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: "hidden",
    paddingTop: 14,
  },
  sampleHeader: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
    paddingHorizontal: 15,
  },
  sampleIndex: { fontFamily: "PlusJakartaSans_700Bold", fontSize: 11 },
  sampleMeta: { flex: 1, gap: 3 },
  sampleName: { fontFamily: "PlusJakartaSans_600SemiBold", fontSize: 13 },
  sampleNote: { fontFamily: "PlusJakartaSans_400Regular", fontSize: 10 },
  arabicBlock: {
    borderTopWidth: 1,
    marginTop: 13,
    paddingHorizontal: 15,
    paddingVertical: 14,
    direction: "rtl",
  },
  bismillah: {
    fontSize: 20,
    lineHeight: 48,
    textAlign: "center",
    writingDirection: "rtl",
  },
  arabic: {
    fontSize: 20,
    lineHeight: 52,
    textAlign: "justify",
  },
});
