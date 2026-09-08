import { Tabs } from 'expo-router';
import type { ComponentProps } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Icon from '@/components/home/Icon';
import { useTheme } from '@/theme/ThemeContext';

export default function TabLayout() {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarStyle: { backgroundColor: theme.tabBarBg, borderTopColor: theme.tabBarBorder, borderTopWidth: 1, height: 72 + insets.bottom, paddingBottom: insets.bottom, paddingTop: 8 },
        tabBarButton: (props) => {
          const { ref: _ref, ...pressableProps } = props as unknown as ComponentProps<typeof Pressable>;
          return <Pressable {...pressableProps} android_ripple={{ color: 'transparent' }} />;
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Ana Sayfa',
          tabBarLabel: ({ focused }) => <Text style={[styles.tabLabel, { color: focused ? theme.accent : theme.textMuted, fontFamily: focused ? 'PlusJakartaSans_700Bold' : 'PlusJakartaSans_500Medium' }]}>Ana Sayfa</Text>,
          tabBarIcon: ({ color, focused }) => <View style={[styles.iconBackground, focused && { backgroundColor: theme.accentLight }]}><Icon name="home" color={color} size={21} strokeWidth={focused ? 1.8 : 1.5} /></View>,
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Profil',
          tabBarLabel: ({ focused }) => <Text style={[styles.tabLabel, { color: focused ? theme.accent : theme.textMuted, fontFamily: focused ? 'PlusJakartaSans_700Bold' : 'PlusJakartaSans_500Medium' }]}>Profil</Text>,
          tabBarIcon: ({ color, focused }) => <View style={[styles.iconBackground, focused && { backgroundColor: theme.accentLight }]}><Icon name="user" color={color} size={21} strokeWidth={focused ? 1.8 : 1.5} /></View>,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconBackground: {
    alignItems: 'center',
    borderRadius: 28,
    height: 28,
    justifyContent: 'center',
    width: 40,
  },
  tabLabel: {
    fontSize: 11,
  },
});
