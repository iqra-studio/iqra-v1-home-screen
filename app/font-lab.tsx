import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from '@/components/home/Icon';
import { useQuranAyahs } from '@/components/useQuranAyahs';
import { useTheme } from '@/theme/ThemeContext';

const samples = [
  {
    name: 'Noto Naskh Arabic',
    family: 'NotoNaskhArabic',
    note: 'Akıcı nesih gövde metni',
  },
  {
    name: 'Noto Sans Arabic',
    family: 'NotoSansArabic',
    note: 'Modern, sade ekran metni',
  },
  {
    name: 'KFGQPC Uthman Taha Naskh',
    family: 'KFGQPCUthmanTahaNaskh',
    note: 'QCF4 mushaf fontu ile deneme',
  },
  {
    name: 'KFGQPC Uthmanic Script HAFS',
    family: 'KFGQPCUthmanicScriptHafs',
    note: 'Hafs yazı karakteri',
  },
  {
    name: 'Shaikh Hamdullah Mushaf',
    family: 'Shaikh Hamdullah Mushaf',
    note: 'Osmanlı mushaf yazı karakteri',
  },
  {
    name: 'Hüsrev Hattı Arapça',
    family: 'HusrevHattiArabca',
    note: 'Hüsrev hattı Arapça yazı karakteri',
  },
  {
    name: 'Hüsrev Hattı Osmanlıca',
    family: 'HusrevHattiOsmanlica',
    note: 'Hüsrev hattı Osmanlıca yazı karakteri',
  },
  {
    name: 'Scheherazade New',
    family: 'ScheherazadeNew',
    note: 'Arapça ve Kur’an metinleri için tasarlanmış aile',
  },
  {
    name: 'Lateef',
    family: 'Lateef',
    note: 'Arapça metinler için Google Fonts ailesi',
  },
  {
    name: 'Al-Qalam',
    family: 'AlQalam',
    note: 'Al-Qalam Arapça yazı karakteri',
  },
  {
    name: 'PDMS Saleem Quran',
    family: 'PDMSaleemQuran',
    note: 'Kur’an metinleri için tasarlanmış yazı karakteri',
  },
  {
    name: 'TradNaskh HHK Nokta Regular',
    family: 'TradNaskhHHKNokta',
    note: 'Noktalı nesih Arapça yazı karakteri',
  },
  {
    name: 'Kuran Kerim Font Latif',
    family: 'KuranKerimFontLatif',
    note: 'Latif Kur’an fontu',
  },
  {
    name: 'Kuran Kerim Font Hamdullah',
    family: 'KuranKerimFontHamdullah',
    note: 'Hamdullah Kur’an fontu',
  },
  {
    name: 'Kuran Kerim Font Abay',
    family: 'KuranKerimFontAbay',
    note: 'Abay Kur’an fontu',
  },
  {
    name: 'Amiri Quran Colored',
    family: 'AmiriQuranColored',
    note: 'Amiri Quran tabanlı deneme',
  },
  {
    name: 'Amiri Regular',
    family: 'Amiri_400Regular',
    note: 'Klasik Arapça metin gövdesi',
  },
  {
    name: 'Amiri Bold',
    family: 'Amiri_700Bold',
    note: 'Klasik Arapça kalın ağırlık',
  },
  {
    name: 'Amiri Quran Regular',
    family: 'AmiriQuran_400Regular',
    note: 'Kur’an metni için tasarlanmış aile',
  },
  {
    name: 'Lora Regular',
    family: 'Lora_400Regular',
    note: 'Arapça glif fallback davranışı',
  },
  {
    name: 'Lora Bold',
    family: 'Lora_700Bold',
    note: 'Arapça glif fallback davranışı',
  },
  {
    name: 'Plus Jakarta Sans Regular',
    family: 'PlusJakartaSans_400Regular',
    note: 'Arapça glif fallback davranışı',
  },
  {
    name: 'Plus Jakarta Sans Medium',
    family: 'PlusJakartaSans_500Medium',
    note: 'Arapça glif fallback davranışı',
  },
  {
    name: 'Plus Jakarta Sans SemiBold',
    family: 'PlusJakartaSans_600SemiBold',
    note: 'Arapça glif fallback davranışı',
  },
  {
    name: 'Plus Jakarta Sans Bold',
    family: 'PlusJakartaSans_700Bold',
    note: 'Arapça glif fallback davranışı',
  },
] as const;

export default function FontLabScreen() {
  const router = useRouter();
  const { theme } = useTheme();
  const { ayahs, isLoading, hasError } = useQuranAyahs();


  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.main }]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={[styles.back, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
            <Icon name="chevron.right" size={18} color={theme.textPrimary} />
          </Pressable>
          <View style={styles.heading}>
            <Text style={[styles.kicker, { color: theme.accent }]}>FONT LAB</Text>
            <Text style={[styles.title, { color: theme.textPrimary }]}>Arapça font denemeleri</Text>
          </View>
          <View style={styles.headerSpacer} />
        </View>

        <Text style={[styles.description, { color: theme.textSecondary }]}>
          Aynı ayet parçalarını farklı font aileleriyle karşılaştırın.
        </Text>

        <View style={[styles.notice, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>{isLoading ? 'Zilzal suresi API’den yükleniyor...' : hasError ? 'API metni yüklenemedi.' : `${ayahs.length} ayet API’den yüklendi.`}</Text>
        </View>

        <View style={styles.list}>
          {samples.map((sample, index) => (
            <View key={sample.family} style={[styles.sample, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
              <View style={styles.sampleHeader}>
                <Text style={[styles.sampleIndex, { color: theme.accent }]}>{String(index + 1).padStart(2, '0')}</Text>
                <View style={styles.sampleMeta}>
                  <Text style={[styles.sampleName, { color: theme.textPrimary }]}>{sample.name}</Text>
                  <Text style={[styles.sampleNote, { color: theme.textMuted }]}>{sample.note}</Text>
                </View>
              </View>
              <View style={[styles.arabicBlock, { borderTopColor: theme.cardBorder }]}>
                {ayahs.map((ayah) => (
                  <Text key={ayah.numberInSurah} style={[styles.arabic, { color: theme.textPrimary, fontFamily: sample.family }]}>{ayah.text}</Text>
                ))}
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
  header: { alignItems: 'center', flexDirection: 'row', gap: 14 },
  back: { alignItems: 'center', borderRadius: 10, borderWidth: 1, height: 38, justifyContent: 'center', transform: [{ rotate: '180deg' }], width: 38 },
  heading: { flex: 1, gap: 3 },
  headerSpacer: { width: 38 },
  kicker: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 10, letterSpacing: 1.4 },
  title: { fontFamily: 'Lora_700Bold', fontSize: 21 },
  description: { fontFamily: 'PlusJakartaSans_400Regular', fontSize: 12, lineHeight: 19, paddingLeft: 52 },
  notice: { borderRadius: 12, borderWidth: 1, paddingHorizontal: 14, paddingVertical: 11 },
  noticeText: { fontFamily: 'PlusJakartaSans_500Medium', fontSize: 11 },
  list: { gap: 12 },
  sample: { borderRadius: 16, borderWidth: 1, overflow: 'hidden', paddingTop: 14 },
  sampleHeader: { alignItems: 'center', flexDirection: 'row', gap: 12, paddingHorizontal: 15 },
  sampleIndex: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 11 },
  sampleMeta: { flex: 1, gap: 3 },
  sampleName: { fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 13 },
  sampleNote: { fontFamily: 'PlusJakartaSans_400Regular', fontSize: 10 },
  arabicBlock: { borderTopWidth: 1, gap: 4, marginTop: 13, paddingHorizontal: 15, paddingVertical: 14 },
  arabic: { fontSize: 25, textAlign: 'right' },
});