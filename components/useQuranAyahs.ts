import { useEffect, useState } from 'react';

const quranApiUrl = 'https://api.alquran.cloud/v1/surah/99/quran-simple';

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
