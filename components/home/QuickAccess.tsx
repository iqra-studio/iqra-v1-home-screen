import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/theme/ThemeContext';
import Icon, { type IconName } from './Icon';

export type QuickAccessItem = { icon: IconName; label: string; count: string; onPress: () => void };
export default function QuickAccess({ items }: { items: QuickAccessItem[] }) {
  const { theme } = useTheme();
  return <View style={styles.section}><Text style={[styles.heading, { color: theme.textPrimary }]}>Hızlı Erişim</Text><View style={styles.grid}>{items.map((item) => <Pressable key={item.label} onPress={item.onPress} style={[styles.item, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}><View style={[styles.iconCircle, { backgroundColor: theme.accentLight }]}><Icon name={item.icon} size={17} color={theme.accent} /></View><Text style={[styles.label, { color: theme.textPrimary }]}>{item.label}</Text><Text style={[styles.count, { color: theme.textMuted }]}>{item.count}</Text></Pressable>)}</View></View>;
}

const styles = StyleSheet.create({ section: { gap: 10 }, heading: { fontFamily: 'PlusJakartaSans_700Bold', fontSize: 12, textTransform: 'uppercase' }, grid: { flexDirection: 'row', gap: 8 }, item: { alignItems: 'center', borderRadius: 14, borderWidth: 1, flex: 1, gap: 5, paddingHorizontal: 4, paddingVertical: 12 }, iconCircle: { alignItems: 'center', borderRadius: 20, height: 32, justifyContent: 'center', width: 32 }, label: { fontFamily: 'PlusJakartaSans_600SemiBold', fontSize: 9, textAlign: 'center' }, count: { fontFamily: 'PlusJakartaSans_400Regular', fontSize: 8 } });