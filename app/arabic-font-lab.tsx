import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from '@/components/home/Icon';
import { useQuranAyahs } from '@/components/useQuranAyahs';
import { useTheme } from '@/theme/ThemeContext';

const samples = [
  ['HASENAT', 'ArabicHasenat'],
  ['MAJALLA', 'ArabicMajalla'],
  ['ARABTYPE', 'ArabicArabtype'],
  ['HASENAT4', 'ArabicHasenat4'],
  ['MAJALLAB', 'ArabicMajallab'],
] as const;

export default function ArabicFontLabScreen() {
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
            <Text style={[styles.kicker, { color: theme.accent }]}>ARAPÇA.FONTLAR</Text>
            <Text style={[styles.title, { color: theme.textPrimary }]}>İndirilen fontlar</Text>
          </View>
          <View style={styles.headerSpacer} />
        </View>
        <Text style={[styles.description, { color: theme.textSecondary }]}>Aynı Kur’an pasajlarını klasördeki fontlarla karşılaştırın.</Text>
        <View style={[styles.notice, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>{isLoading ? 'Fatiha suresi yerel veritabanından yükleniyor...' : hasError ? 'Yerel ayet metni yüklenemedi.' : `${samples.length} font, ${ayahs.length} Fatiha ayeti ile hazır.`}</Text>
        </View>
        <View style={styles.list}>
          {samples.map(([name, family], index) => (
            <View key={name} style={[styles.sample, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
              <View style={styles.sampleHeader}>
                <Text style={[styles.sampleIndex, { color: theme.accent }]}>{String(index + 1).padStart(2, '0')}</Text>
                <Text style={[styles.sampleName, { color: theme.textPrimary }]}>{name}</Text>
              </View>
              <View style={[styles.arabicBlock, { borderTopColor: theme.cardBorder }]}>
                {ayahs.map((ayah) => <Text key={ayah.numberInSurah} style={[styles.arabic, { color: theme.textPrimary, fontFamily: family }]}>{ayah.text}</Text>)}
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
  sampleName: { flex: 1, fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 13 },
  arabicBlock: { borderTopWidth: 1, gap: 4, marginTop: 13, paddingHorizontal: 15, paddingVertical: 14 },
  arabic: { fontSize: 25, lineHeight: 43, textAlign: 'right' },
});