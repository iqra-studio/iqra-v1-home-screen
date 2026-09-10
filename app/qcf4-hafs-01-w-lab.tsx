import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from '@/components/home/Icon';
import { useQuranAyahs } from '@/components/useQuranAyahs';
import { useTheme } from '@/theme/ThemeContext';

const qcf4Sample = 'اَلْحَمْدُ لِلّٰهِ رَبِّ الْـعَالَمٖينَۙ ';

export default function Qcf4Hafs01WLabScreen() {
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
            <Text style={[styles.title, { color: theme.textPrimary }]}>QCF4 Hafs 01 W</Text>
          </View>
          <View style={styles.headerSpacer} />
        </View>
        <Text style={[styles.description, { color: theme.textSecondary }]}>QCF4_Hafs_01_W fontunu Kur’an pasajlarında ayrı olarak deneyin.</Text>
        <View style={[styles.notice, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>{isLoading ? 'Fatiha suresi yerel veritabanından yükleniyor...' : hasError ? 'Yerel ayet metni yüklenemedi.' : `${ayahs.length} Fatiha ayeti yüklendi.`}</Text>
        </View>
        <View style={[styles.sample, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
          <Text style={[styles.sampleLabel, { color: theme.accent }]}>QCF4_HAFS_01_W</Text>
          <View style={[styles.specialCodeBlock, { borderTopColor: theme.cardBorder }]}>
            <Text style={[styles.specialCode, { color: theme.textPrimary }]}>{qcf4Sample}</Text>
          </View>

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
  sample: { borderRadius: 16, borderWidth: 1, padding: 18 },
  sampleLabel: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 10, letterSpacing: 1.2 },
  specialCodeBlock: { alignItems: 'flex-end', borderTopWidth: 1, gap: 6, marginTop: 13, paddingTop: 16 },
  specialCodeLabel: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 10, letterSpacing: 1.2 },
  specialCode: { fontFamily: 'QCF4Hafs01W', fontSize: 42, lineHeight: 54, textAlign: 'right' },
  arabicBlock: { borderTopWidth: 1, gap: 8, marginTop: 13, paddingVertical: 18 },
  arabic: { fontFamily: 'QCF4Hafs01W', fontSize: 30, lineHeight: 52, textAlign: 'right' },
});
