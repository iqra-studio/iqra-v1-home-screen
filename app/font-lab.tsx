import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from '@/components/home/Icon';
import { useQuranAyahs } from '@/components/useQuranAyahs';
import { useTheme } from '@/theme/ThemeContext';

const samples = [
  {
    name: 'HafsNastaleeq_Ver10',
    family: 'HafsNastaleeq_Ver10',
    note: 'Hafs Nastaleeq Ver10 mushaf fontu',
  },
  // {
  //   name: 'HafsNastaleeq_Ver102',
  //   family: 'Nastaleeq-Regular',
  //   note: 'Hafs Nastaleeq Ver10 mushaf fontu',
  // },
  // {
  //   name: 'KFGQPCHAFSRegulaFix',
  //   family: 'KFGQPCHAFSRegulaFix',
  //   note: 'Hafs yazı karakteri',
  // },
  // {
  //   name: 'KFGQPCHAFSRegulaFix2',
  //   family: 'KFGQPCHAFSRegulaFix2',
  //   note: 'Hafs yazı karakteri',
  // },
  // {
  //   name: 'Uthmanic Hafs 1 Ver09',
  //   family: 'UthmanicHafs1Ver09',
  //   note: 'Uthmanic Hafs 1 Ver09 mushaf fontu',
  // },
  // {
  //   name: 'Iqra KFGQPC Regular',
  //   family: 'IqraKFGQPCRegular',
  //   note: 'Real App Font',
  // },
   {
    name: 'Iqra KFGQPC Regular 2',
    family: 'IqraKFGQPCRegular2',
    note: 'Real App Font',
  },
  {
    name: 'Duzeltilmis Font',
    family: 'DuzeltilmisFont',
    note: 'Duzeltilmis Font',
  },
   {
    name: 'Duzeltilmis Font 2',
    family: 'DuzeltilmisFont2',
    note: 'Duzeltilmis Font',
  },
  {
    name: 'Duzeltilmis Font 4',
    family: 'DuzeltilmisFont4',
    note: 'Duzeltilmis Font',
  },
  {
    name: 'Duzeltilmis Font 5',
    family: 'DuzeltilmisFont5',
    note: 'Duzeltilmis Font',
  },
  {
    name: 'Duzeltilmis Font 6',
    family: 'DuzeltilmisFont6',
    note: 'Duzeltilmis Font',
  },
  {
    name: 'Duzeltilmis Font 7',
    family: 'DuzeltilmisFont7',
    note: 'Duzeltilmis Font',
  },
  {
    name: 'Duzeltilmis Font 8',
    family: 'DuzeltilmisFont8',
    note: 'Duzeltilmis Font',
  },
  {
    name: 'Duzeltilmis Font 9',
    family: 'Final',
    note: 'Duzeltilmis Font',
  },
  // {
  //   name: 'Shaikh Hamdullah Mushaf',
  //   family: 'Shaikh Hamdullah Mushaf',
  //   note: 'Osmanlı mushaf yazı karakteri',
  // },
  // {
  //   name: 'Al-Qalam',
  //   family: 'AlQalam',
  //   note: 'Al-Qalam Arapça yazı karakteri',
  // },
  // {
  //   name: 'PDMS Saleem Quran',
  //   family: 'PDMSaleemQuran',
  //   note: 'Kur’an metinleri için tasarlanmış yazı karakteri',
  // },
  // {
  //   name: 'me_quran Regular',
  //   family: 'MeQuranRegular',
  //   note: 'Kur’an metni için me_quran yazı karakteri',
  // },
  // {
  //   name: 'Kuran Kerim Font Abay',
  //   family: 'KuranKerimFontAbay',
  //   note: 'Abay Kur’an fontu',
  // },
  // {
  //   name: 'Kuran Kerim Font Hamdullah',
  //   family: 'KuranKerimFontHamdullah',
  //   note: 'Hamdullah Kur’an fontu',
  // },
  // {
  //   name: 'Kuran Kerim Font Latif',
  //   family: 'KuranKerimFontLatif',
  //   note: 'Latif Kur’an fontu',
  // },
  {
    name: 'Kuran Kerim Font ScheherazadeNew',
    family: 'ScheherazadeNew',
    note: 'ScheherazadeNew Arapça yazı karakteri',
  },
  // {
  //   name: 'Hüsrev Hattı Arabca',
  //   family: 'HusrevHattiArabca',
  //   note: 'Hüsrev Hattı Arabca yazı karakteri',
  // },
  // {
  //   name: 'Hüsrev Hattı Osmanlıca',
  //   family: 'HusrevHattiOsmanlica',
  //   note: 'Hüsrev Hattı Osmanlıca yazı karakteri',
  // },
  // {
  //   name: 'Amiri Regular',
  //   family: 'Amiri_400Regular',
  //   note: 'Klasik Arapça metin gövdesi',
  // },
  // {
  //   name: 'Amiri Quran Regular',
  //   family: 'AmiriQuran_400Regular',
  //   note: 'Kur’an metni için tasarlanmış aile',
  // },
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
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>{isLoading ? 'Fatiha suresi yerel veritabanından yükleniyor...' : hasError ? 'Yerel ayet metni yüklenemedi.' : `${ayahs.length} Fatiha ayeti yüklendi.`}</Text>
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
                {/* <Text style={[styles.arabic, { color: theme.textPrimary, fontFamily: sample.family }]}>{'ﱁ ﱂ ﱃ ﱄ ﱅ'}</Text> */}
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
  arabicBlock: { borderTopWidth: 1, gap: 4, marginTop: 13, paddingHorizontal: 15, paddingVertical: 14, },
  arabic: { 
    fontSize: 26,
    lineHeight: 56, 
    textAlign: 'right',
    writingDirection: 'rtl',
    fontVariant: ['tabular-nums'],
  },
});