import { Amiri_400Regular, Amiri_700Bold } from '@expo-google-fonts/amiri';
import { AmiriQuran_400Regular } from '@expo-google-fonts/amiri-quran';
import { Cinzel_700Bold } from '@expo-google-fonts/cinzel';
import { Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora';
import { PlusJakartaSans_400Regular, PlusJakartaSans_500Medium, PlusJakartaSans_600SemiBold, PlusJakartaSans_700Bold } from '@expo-google-fonts/plus-jakarta-sans';
import { useFonts } from 'expo-font';
import { DarkTheme, DefaultTheme, ThemeProvider as RouterThemeProvider, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/components/useColorScheme';
import { ThemeProvider as AppThemeProvider } from '@/theme/ThemeContext';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    NotoNaskhArabic: require('../assets/fonts/NotoNaskhArabic-Variable.ttf'),
    NotoSansArabic: require('../assets/fonts/NotoSansArabic-Variable.ttf'),
    KFGQPCUthmanTahaNaskh: require('../assets/fonts/KFGQPC-Uthman-Taha-Naskh.ttf'),
    KFGQPCUthmanicScriptHafs: require('../assets/fonts/KFGQPC-Uthmanic-Script-HAFS.ttf'),
    AmiriQuranColored: require('../assets/fonts/AmiriQuran-Colored.ttf'),
    'Shaikh Hamdullah Mushaf': require('../assets/fonts/Shaikh-Hamdullah-Mushaf.ttf'),
    HusrevHattiArabca: require('../assets/fonts/Husrev-Hatti-Arabca.ttf'),
    HusrevHattiOsmanlica: require('../assets/fonts/Husrev-Hatti-Osmanlica.ttf'),
    ScheherazadeNew: require('../assets/fonts/Scheherazade-New.ttf'),
    Lateef: require('../assets/fonts/Lateef.ttf'),
    AlQalam: require('../assets/fonts/Al-Qalam.ttf'),
    PDMSaleemQuran: require('../assets/fonts/PDMS-Saleem-QuranFont.ttf'),
    TradNaskhHHKNokta: require('../assets/fonts/TradNaskhHHKNokta-Regular.ttf'),
    KuranKerimFontLatif: require('../assets/fonts/KuranKerimFontLatif.ttf'),
    KuranKerimFontHamdullah: require('../assets/fonts/KuranKerimFontHamdullah.ttf'),
    KuranKerimFontAbay: require('../assets/fonts/KuranKerimFontAbay.ttf'),
    UthmanicBazziV20: require('../assets/fonts/Uthmanic-Bazzi-V20.ttf'),
    UthmanicDouriV20: require('../assets/fonts/Uthmanic-Douri-V20.ttf'),
    UthmanicHafs1: require('../assets/fonts/Uthmanic-Hafs-1-Ver13.ttf'),
    UthmanicHafs1B: require('../assets/fonts/Uthmanic-Hafs-1B-Ver13.ttf'),
    UthmanicHafsV20: require('../assets/fonts/UthmanicHafs_V20.ttf'),
    UthmanicHafsv21: require('../assets/fonts/UthmanicHafs_v2-1.ttf'),
    UthmanicHafsV22: require('../assets/fonts/uthmanic_hafs_v22.ttf'),
    UthmanicQalounV21: require('../assets/fonts/Uthmanic-Qaloun-V21.ttf'),
    UthmanicQunbulV20: require('../assets/fonts/Uthmanic-Qunbul-V20.ttf'),
    UthmanicShubaV20: require('../assets/fonts/Uthmanic-Shuba-V20.ttf'),
    UthmanicSousiV20: require('../assets/fonts/Uthmanic-Sousi-V20.ttf'),
    UthmanicWarshV21: require('../assets/fonts/Uthmanic-Warsh-V21.ttf'),
    QCFBSML: require('../assets/fonts/QCF_BSML.ttf'),
    ArabicHasenat: require('../assets/fonts/hasenat.ttf'),
    ArabicSimpo: require('../assets/fonts/simpo.ttf'),
    ArabicTradbdo: require('../assets/fonts/tradbdo.ttf'),
    ArabicArtro: require('../assets/fonts/artro.ttf'),
    ArabicMajalla: require('../assets/fonts/majalla.ttf'),
    ArabicSimpbdo: require('../assets/fonts/simpbdo.ttf'),
    ArabicArabtype: require('../assets/fonts/arabtype.ttf'),
    ArabicArtrbdo: require('../assets/fonts/artrbdo.ttf'),
    ArabicHasenat4: require('../assets/fonts/hasenat4.ttf'),
    ArabicShaikhHamdullahBasicVolt: require('../assets/fonts/shaikh-hamdullah-basic-volt.ttf'),
    ArabicTrado: require('../assets/fonts/trado.ttf'),
    ArabicMajallab: require('../assets/fonts/majallab.ttf'),
    Cinzel_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    Lora_400Regular,
    Lora_700Bold,
    Amiri_400Regular,
    Amiri_700Bold,
    AmiriQuran_400Regular,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <AppThemeProvider>
      <RouterThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="settings" options={{ headerShown: false }} />
          <Stack.Screen name="font-lab" options={{ headerShown: false }} />
          <Stack.Screen name="arabic-font-lab" options={{ headerShown: false }} />
          <Stack.Screen name="font-lab-v2" options={{ headerShown: false }} />
          <Stack.Screen name="qcf-bsml-lab" options={{ headerShown: false }} />
        </Stack>
      </RouterThemeProvider>
    </AppThemeProvider>
  );
}
