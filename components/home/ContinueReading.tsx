import { Pressable, StyleSheet, Text, View } from 'react-native';

import { themes } from '@/theme/colors';
import { useTheme } from '@/theme/ThemeContext';
import Icon from './Icon';

type Props = { surahName: string; surahNameArabic: string; ayetInfo: string; juz: number; page: number; arabicPreview: string; onPress: () => void };

export default function ContinueReading({ surahName, surahNameArabic, ayetInfo, juz, page, arabicPreview, onPress }: Props) {
  const { theme, themeId } = useTheme();
  const isDarkTheme = themeId === 'dark' || themeId === 'amber_night';
  const cardBackground = isDarkTheme ? theme.cardBg : theme.accent;

  return <View style={[styles.card, { backgroundColor: cardBackground, borderColor: theme.cardBorder, shadowColor: cardBackground }]}> 
    <View style={styles.meta}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, justifyContent: 'center' }}>
        <Icon name="rotate.clock" size={11} color={isDarkTheme ? theme.accent: themes.global.white_90} />
        <Text style={[styles.eyebrow, { color: isDarkTheme ? theme.accent: themes.global.white_90 }]}>KALDIĞINIZ SURE</Text>
      </View>
      <Text style={[styles.eyebrow, { color: isDarkTheme ? theme.textSecondary: themes.global.white_90 }]}>Cüz {juz} • Sayfa {page}</Text>
    </View>
    <View style={styles.titleRow}>
      <View>
        <Text style={[styles.title, { color: isDarkTheme ? theme.textPrimary: themes.global.white_90 }]}>{surahName}</Text>
        <Text style={[styles.subtitle, { color: isDarkTheme ? theme.textSecondary: themes.global.white_90 }]}>{ayetInfo}</Text>
      </View>
      <Text style={[styles.arabicName, { color: isDarkTheme ? theme.gold: themes.global.white_90 }]}>{surahNameArabic}</Text>
    </View>
    <Text numberOfLines={2} style={[styles.preview, { color: isDarkTheme ? theme.gold: themes.global.white_90, backgroundColor: isDarkTheme ? theme.secondary : themes.global.white_10, borderColor: isDarkTheme ? theme.cardBorder : themes.global.white_15}]}>{arabicPreview}</Text>
    <Pressable onPress={onPress} style={[styles.button, { backgroundColor: isDarkTheme ? theme.accent : theme.cardBg }]}>
      <Icon name="book.closed" size={15} color={isDarkTheme ? theme.cardBg: theme.accent} strokeWidth={2} />
      <Text style={[styles.buttonText, { color: isDarkTheme ? theme.cardBg: theme.accent }]}>Okumaya Başla</Text>
    </Pressable>
  </View>;
}

const styles = StyleSheet.create({ 
  card: { borderRadius: 16, gap: 13, padding: 16, borderWidth: 1, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  meta: { flexDirection: 'row', justifyContent: 'space-between' }, 
  eyebrow: { fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase' }, 
  titleRow: { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }, 
  title: { fontFamily: 'Lora_700Bold', fontSize: 19, marginBottom: 3 }, 
  subtitle: { fontFamily: 'PlusJakartaSans_500Medium', fontSize: 12, opacity: 0.80 }, 
  arabicName: { fontFamily: 'Amiri_700Bold', fontSize: 22, lineHeight: 32, textAlign: 'right',}, 
  preview: { fontFamily: 'AmiriQuran_400Regular', fontSize: 22, textAlign: 'right', paddingHorizontal: 10, paddingVertical: 8, borderRadius: 12, borderWidth: 1, letterSpacing: 1.5 }, 
  button: { alignItems: 'flex-end', borderRadius: 12, flexDirection: 'row', gap: 6, justifyContent: 'center', paddingVertical: 10, marginTop: 8 }, 
  buttonText: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 12 } });