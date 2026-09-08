import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '@/theme/ThemeContext';
import Icon from './Icon';

export default function Header() {
  const { theme } = useTheme();
  return <View style={[styles.row, { borderBottomColor: theme.cardBorder }]}>
    <View style={styles.brand}>
      <Icon name="mosque" size={26} color={theme.textPrimary} />
      <Text style={[styles.logo, { color: theme.textPrimary }]}>IQRA</Text>
    </View>
    <View style={[styles.badge, { backgroundColor: theme.cardBg, borderColor: theme.cardBorder }]}>
      <Icon name="calendar" size={14} color={theme.textSecondary} />
      <Text style={[styles.date, { color: theme.textSecondary }]}>•  23 Rebiülevvel 1448</Text>
    </View>
  </View>;
}

const styles = StyleSheet.create({ 
  row: { alignItems: 'center', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: -16, paddingBottom: 16, paddingHorizontal: 16 }, 
  brand: { alignItems: 'flex-start', flexDirection: 'row', gap: 5 }, 
  logo: { fontFamily: 'Cinzel_700Bold', fontSize: 26, letterSpacing: 2 },
  badge: { alignItems: 'center', borderRadius: 12, borderWidth: 1, flexDirection: 'row', gap: 4, paddingHorizontal: 12, paddingVertical: 6 }, date: { fontFamily: 'PlusJakartaSans_500Medium', fontSize: 11 } });