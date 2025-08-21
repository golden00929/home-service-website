import { Metadata } from 'next';
import { locales } from '@/i18n';

interface LocalizedMetadata {
  title: string;
  description: string;
  keywords: string;
}

const metadataByLocale: Record<string, LocalizedMetadata> = {
  en: {
    title: 'Home Services Ho Chi Minh City | Professional Repair & Maintenance',
    description: 'Professional home services in Ho Chi Minh City. Air conditioner cleaning, plumbing, electrical repair, leak detection, painting & tile work. 24/7 emergency service.',
    keywords: 'home services, ho chi minh city, saigon, air conditioner cleaning, plumbing repair, electrical repair, leak detection, painting, tile work, emergency service'
  },
  vi: {
    title: 'Dịch vụ sửa chữa nhà TP.HCM | Chuyên nghiệp - Uy tín',
    description: 'Dịch vụ sửa chữa nhà chuyên nghiệp tại TP.HCM. Vệ sinh điều hòa, sửa ống nước, điện, kiểm tra rò rỉ, sơn nhà, lát gạch. Phục vụ 24/7.',
    keywords: 'dịch vụ sửa chữa nhà, tp hcm, sài gòn, vệ sinh điều hòa, sửa ống nước, sửa điện, kiểm tra rò rỉ, sơn nhà, lát gạch, cấp cứu 24/7'
  },
  ko: {
    title: '호치민 홈서비스 | 전문 수리 및 유지보수',
    description: '호치민시 전문 홈서비스. 에어컨 청소, 배관 수리, 전기 수리, 누수 점검, 도장 및 타일 공사. 24시간 응급 서비스.',
    keywords: '홈서비스, 호치민, 사이공, 에어컨 청소, 배관 수리, 전기 수리, 누수 점검, 도장, 타일 공사, 응급 서비스'
  },
  ja: {
    title: 'ホーチミン ホームサービス | プロの修理・メンテナンス',
    description: 'ホーチミン市のプロフェッショナル・ホームサービス。エアコンクリーニング、配管修理、電気修理、漏水検査、塗装・タイル工事。24時間緊急サービス。',
    keywords: 'ホームサービス, ホーチミン, サイゴン, エアコンクリーニング, 配管修理, 電気修理, 漏水検査, 塗装, タイル工事, 緊急サービス'
  },
  zh: {
    title: '胡志明市家居服务 | 专业维修保养',
    description: '胡志明市专业家居服务。空调清洁、管道维修、电气维修、漏水检测、油漆瓷砖工程。24小时紧急服务。',
    keywords: '家居服务, 胡志明市, 西贡, 空调清洁, 管道维修, 电气维修, 漏水检测, 油漆, 瓷砖工程, 紧急服务'
  }
};

export function generateMetadata(locale: string): Metadata {
  const metadata = metadataByLocale[locale] || metadataByLocale['en'];
  
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://homeserviceshcm.com';
  
  // Generate hreflang links
  const alternateLanguages: { [key: string]: string } = {};
  locales.forEach((loc) => {
    alternateLanguages[loc] = `${baseUrl}/${loc}`;
  });
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'Home Services HCM' }],
    creator: 'Home Services HCM',
    publisher: 'Home Services HCM',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: `/${locale}`,
      languages: alternateLanguages,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `${baseUrl}/${locale}`,
      siteName: 'Home Services HCM',
      locale: locale,
      type: 'website',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: metadata.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'YOUR_GOOGLE_VERIFICATION_CODE',
      yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
      yahoo: 'YOUR_YAHOO_VERIFICATION_CODE',
    },
  };
}

export function generateServiceMetadata(locale: string, serviceName: string, serviceDescription: string): Metadata {
  const baseMetadata = generateMetadata(locale);
  const serviceTitle = `${serviceName} | Home Services HCM`;
  
  return {
    ...baseMetadata,
    title: serviceTitle,
    description: serviceDescription,
    openGraph: {
      ...baseMetadata.openGraph,
      title: serviceTitle,
      description: serviceDescription,
    },
    twitter: {
      ...baseMetadata.twitter,
      title: serviceTitle,
      description: serviceDescription,
    },
  };
}