import { useEffect, useState } from 'react';

const quranApiUrl = process.env.EXPO_PUBLIC_QURAN_API_URL || 'http://192.168.115.251:3001/v1/surah/99';

export type QuranAyah = {
  numberInSurah: number;
  text: string;
};

type QuranApiResponse = {
  data?: {
    ayahs?: QuranAyah[];
  };
};

export function useQuranAyahs() {
  const [ayahs, setAyahs] = useState<QuranAyah[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    let isActive = true;

    fetch(quranApiUrl)
      .then((response) => {
        if (!response.ok) throw new Error(`Quran API request failed: ${response.status}`);
        return response.json() as Promise<QuranApiResponse>;
      })
      .then((result) => {
        if (!isActive) return;
        setAyahs(result.data?.ayahs ?? []);
        setHasError(!result.data?.ayahs?.length);
      })
      .catch(() => {
        if (isActive) setHasError(true);
      })
      .finally(() => {
        if (isActive) setIsLoading(false);
      });

    return () => {
      isActive = false;
    };
  }, []);

  return { ayahs, isLoading, hasError };
}
