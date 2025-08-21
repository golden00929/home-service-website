import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

// 지원하는 언어 목록 (우선순위 순: 베트남어 → 영어 → 중국어 → 한국어 → 일본어)
export const locales = ['vi', 'en', 'zh', 'ko', 'ja'] as const;
export type Locale = typeof locales[number];

export default getRequestConfig(async ({locale}) => {
  // locale이 지원하는 언어인지 확인
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default
  };
});