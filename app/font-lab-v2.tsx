import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from '@/components/home/Icon';
import { useQuranAyahs } from '@/components/useQuranAyahs';
import { useTheme } from '@/theme/ThemeContext';

export default function FontLabV2Screen() {
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
            <Text style={[styles.kicker, { color: theme.accent }]}>FONT LAB V2</Text>
            <Text style={[styles.title, { color: theme.textPrimary }]}>Uthmanic Bazzi &amp; Douri V20</Text>
          </View>
          <View style={styles.headerSpacer} />
        </View>
        <Text style={[styles.description, { color: theme.textSecondary }]}>Yeni fontu Kur’an pasajlarında ayrı bir ekranda deneyin.</Text>
        <View style={[styles.notice, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>{isLoading ? 'Zilzal suresi API’den yükleniyor...' : hasError ? 'API metni yüklenemedi.' : `${ayahs.length} ayet API’den yüklendi.`}</Text>
        </View>
        <Pressable onPress={() => router.push('/qcf-bsml-lab' as never)} style={[styles.qcfButton, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <View style={styles.qcfCopy}>
            <Text style={[styles.qcfTitle, { color: theme.textPrimary }]}>QCF_BSML Lab</Text>
            <Text style={[styles.qcfDescription, { color: theme.textSecondary }]}>QCF_BSML fontunu ayrı ekranda aç</Text>
          </View>
          <Icon name="chevron.right" size={18} color={theme.accent} />
        </Pressable>
        <View style={styles.list}>
          {(['Uthmanic Bazzi V20', 'Uthmanic Douri V20', 'Uthmanic Hafs 1 Ver13', 'Uthmanic Hafs 1B Ver13', 'Uthmanic Hafs V20', 'Uthmanic Hafs V2-1', 'Uthmanic Hafs V22', 'Uthmanic Qaloun V21', 'Uthmanic Qunbul V20', 'Uthmanic Shuba V20', 'Uthmanic Sousi V20', 'Uthmanic Warsh V21'] as const).map((name) => {
            const family = name.includes('Bazzi') ? 'UthmanicBazziV20' : name.includes('Douri') ? 'UthmanicDouriV20' : name.includes('1B') ? 'UthmanicHafs1B' : name.includes('1 Ver') ? 'UthmanicHafs1' : name.includes('V2-1') ? 'UthmanicHafsv21' : name.includes('V22') ? 'UthmanicHafsV22' : name.includes('Qaloun') ? 'UthmanicQalounV21' : name.includes('Qunbul') ? 'UthmanicQunbulV20' : name.includes('Shuba') ? 'UthmanicShubaV20' : name.includes('Sousi') ? 'UthmanicSousiV20' : name.includes('Warsh') ? 'UthmanicWarshV21' : 'UthmanicHafsV20';
            return <View key={name} style={[styles.sample, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
              <Text style={[styles.sampleTitle, { color: theme.textPrimary }]}>{name}</Text>
              {ayahs.map((ayah) => <Text key={ayah.numberInSurah} style={[styles.arabic, { color: theme.textPrimary, fontFamily: family }]}>{ayah.text}</Text>)}
            </View>;
          })}
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
  qcfButton: { alignItems: 'center', borderRadius: 14, borderWidth: 1, flexDirection: 'row', padding: 15 },
  qcfCopy: { flex: 1, gap: 3 },
  qcfTitle: { fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 13 },
  qcfDescription: { fontFamily: 'PlusJakartaSans_400Regular', fontSize: 10 },
  list: { gap: 12 },
  sample: { borderRadius: 16, borderWidth: 1, gap: 8, padding: 18 },
  sampleTitle: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 13, marginBottom: 4 },
  arabic: { fontFamily: 'UthmanicBazziV20', fontSize: 30, lineHeight: 52, textAlign: 'right' },
});