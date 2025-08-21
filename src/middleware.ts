import createMiddleware from 'next-intl/middleware';
import {locales} from './i18n';

export default createMiddleware({
  // 지원하는 언어 목록
  locales,
  
  // 기본 언어 (호치민 = 베트남어)
  defaultLocale: 'vi',
  
  // 언어 감지 방식
  localeDetection: true
});

export const config = {
  // '/api'나 '/_next' 등을 제외하고 모든 pathnames에 적용
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};