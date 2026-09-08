import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme/ThemeContext';
import ContinueReading from './home/ContinueReading';
import DailyVerse from './home/DailyVerse';
import Header from './home/Header';
import QuickAccess from './home/QuickAccess';
import WeeklyReading from './home/WeeklyReading';

export default function HomeScreen() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  return <View style={[styles.screen, { backgroundColor: theme.main }]}><View style={[styles.headerContainer, { paddingTop: insets.top + 26 }]}><Header /></View><ScrollView contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + 22 }]} showsVerticalScrollIndicator={false}><ContinueReading surahName="2. Bakara Suresi" surahNameArabic="البقرة" ayetInfo="255. Ayet (el-Kürsî)" juz={3} page={42} arabicPreview="اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ" onPress={() => Alert.alert('Okuma', 'Bakara Suresi açılıyor.')} /><QuickAccess items={[{ icon: 'book.closed', label: 'SURELER', count: '114 Sure', onPress: () => { } }, { icon: 'bookmark', label: 'NOT & AYRAÇ', count: '18 Kayıt', onPress: () => { } }, { icon: 'gearshape', label: 'AYARLAR', count: 'Tema seç', onPress: () => { } }]} /><DailyVerse arabicText="إِنَّ اللَّهَ مَعَ الصَّابِرِينَ" meaning="Şüphesiz Allah sabredenlerle beraberdir." source="Fâtiha, 5" onPlay={() => { }} onCopy={() => { }} onShare={() => { }} onOpenSurah={() => { }} /><WeeklyReading streakCount={2} status="Devam ediyor" visible weekData={[{ day: 'P', state: 'done' }, { day: 'S', state: 'done' }, { day: 'Ç', state: 'empty' }, { day: 'P', state: 'empty' }, { day: 'C', state: 'empty' }, { day: 'C', state: 'empty' }, { day: 'P', state: 'empty' }]} /></ScrollView></View>;
}

const styles = StyleSheet.create({ screen: { flex: 1 }, headerContainer: { marginHorizontal: 16 }, content: { gap: 17, paddingVertical: 26, paddingHorizontal: 16 } });