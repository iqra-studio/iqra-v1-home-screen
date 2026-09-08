import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from '@/components/home/Icon';
import { useQuranAyahs } from '@/components/useQuranAyahs';
import { useTheme } from '@/theme/ThemeContext';

export default function QcfBsmlLabScreen() {
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
            <Text style={[styles.kicker, { color: theme.accent }]}>QCF LAB</Text>
            <Text style={[styles.title, { color: theme.textPrimary }]}>QCF_BSML</Text>
          </View>
          <View style={styles.headerSpacer} />
        </View>
        <Text style={[styles.description, { color: theme.textSecondary }]}>QCF_BSML fontunu Kur’an pasajlarında ayrı olarak deneyin.</Text>
        <View style={[styles.notice, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>{isLoading ? 'Zilzal suresi API’den yükleniyor...' : hasError ? 'API metni yüklenemedi.' : `${ayahs.length} ayet API’den yüklendi.`}</Text>
        </View>
        <View style={[styles.sample, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
          {ayahs.map((ayah) => <Text key={ayah.numberInSurah} style={[styles.arabic, { color: theme.textPrimary }]}>{ayah.text} <Text style={[styles.ayahNumber, { color: theme.accent }]}>{ayah.numberInSurah}</Text></Text>)}
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
  sample: { borderRadius: 16, borderWidth: 1, gap: 8, padding: 18 },
  arabic: { fontFamily: 'QCFBSML', fontSize: 48, lineHeight: 52, textAlign: 'right' },
  ayahNumber: { fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 11 },
});