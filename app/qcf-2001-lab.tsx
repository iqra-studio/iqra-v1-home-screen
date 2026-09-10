import { useRouter } from 'expo-router';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import Icon from '@/components/home/Icon';
import { useTheme } from '@/theme/ThemeContext';

const qcfSample = 'ﭖ ﭗ ﭘ ﭙ ﭚ';

export default function Qcf2001LabScreen() {
  const router = useRouter();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: theme.main }]}> 
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={[styles.back, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
            <Icon name="chevron.right" size={18} color={theme.textPrimary} />
          </Pressable>
          <View style={styles.heading}>
            <Text style={[styles.kicker, { color: theme.accent }]}>QCF LAB</Text>
            <Text style={[styles.title, { color: theme.textPrimary }]}>QCF2001</Text>
          </View>
          <View style={styles.headerSpacer} />
        </View>
        <Text style={[styles.description, { color: theme.textSecondary }]}>QCF2001 fontunun özel karakter kodlarını ayrı olarak deneyin.</Text>
        <View style={[styles.notice, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <Text style={[styles.noticeText, { color: theme.textSecondary }]}>Özel örnek: 1 ve beş QCF karakteri</Text>
        </View>
        <Pressable onPress={() => router.push('/qcf4-hafs-01-w-lab' as never)} style={[styles.qcfButton, { backgroundColor: theme.accentLight, borderColor: theme.accentSoft }]}>
          <Text style={[styles.qcfButtonText, { color: theme.textPrimary }]}>QCF4 Hafs 01 W labını aç</Text>
          <Icon name="chevron.right" size={18} color={theme.accent} />
        </Pressable>
        <View style={[styles.sample, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
          <Text style={[styles.sampleLabel, { color: theme.accent }]}>QCF2001 ÖZEL KOD</Text>
          <View style={[styles.arabicBlock, { borderTopColor: theme.cardBorder }]}>
            <Text style={[styles.arabic, { color: theme.textPrimary }]}>{qcfSample}</Text>
          </View>
          <Text style={[styles.code, { color: theme.textMuted }]}>1,ﱁ ﱂ ﱃ ﱄ ﱅ</Text>
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
  qcfButton: { alignItems: 'center', borderRadius: 14, borderWidth: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 15 },
  qcfButtonText: { fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 13 },
  sample: { borderRadius: 16, borderWidth: 1, padding: 18 },
  sampleLabel: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 10, letterSpacing: 1.2 },
  arabicBlock: { borderTopWidth: 1, marginTop: 13, paddingVertical: 18 },
  arabic: { fontFamily: 'QCF2001', fontSize: 30, lineHeight: 64, textAlign: 'right' },
  code: { fontFamily: 'PlusJakartaSans_500Medium', fontSize: 11 },
});
