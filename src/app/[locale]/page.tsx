import { use } from 'react';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ locale: string }>;
}

// Generate static params for all supported locales
export async function generateStaticParams() {
  const locales = ['ko', 'vi', 'en', 'zh', 'ja'];
  return locales.map((locale) => ({
    locale: locale,
  }));
}

const getContent = (locale: string) => {
  const content = {
    ko: {
      title: "Sua Trua Saigon - 홈서비스",
      description: "호치민 전문 수리 및 정비 서비스",
      services: [
        { name: "에어컨 청소", icon: "❄️", link: "/ko/aircon-cleaning" },
        { name: "배관 보수", icon: "🔧", link: "/ko/plumbing-repair" },
        { name: "전기 보수", icon: "⚡", link: "/ko/electrical-repair" },
        { name: "누수 점검", icon: "💧", link: "/ko/leak-inspection" },
        { name: "타일/도색", icon: "🎨", link: "/ko/tile-painting" }
      ]
    },
    vi: {
      title: "Sua Trua Saigon - Dịch vụ sửa chữa",
      description: "Dịch vụ sửa chữa chuyên nghiệp tại TP.HCM",
      services: [
        { name: "Vệ sinh điều hòa", icon: "❄️", link: "/vi/aircon-cleaning" },
        { name: "Sửa ống nước", icon: "🔧", link: "/vi/plumbing-repair" },
        { name: "Sửa điện", icon: "⚡", link: "/vi/electrical-repair" },
        { name: "Kiểm tra rò rỉ", icon: "💧", link: "/vi/leak-inspection" },
        { name: "Sơn gạch", icon: "🎨", link: "/vi/tile-painting" }
      ]
    },
    en: {
      title: "Sua Trua Saigon - Home Services",
      description: "Professional repair and maintenance services in Ho Chi Minh City",
      services: [
        { name: "Air Conditioner Cleaning", icon: "❄️", link: "/en/aircon-cleaning" },
        { name: "Plumbing Repair", icon: "🔧", link: "/en/plumbing-repair" },
        { name: "Electrical Repair", icon: "⚡", link: "/en/electrical-repair" },
        { name: "Leak Detection", icon: "💧", link: "/en/leak-inspection" },
        { name: "Tile & Painting", icon: "🎨", link: "/en/tile-painting" }
      ]
    },
    zh: {
      title: "Sua Trua Saigon - 家居服务",
      description: "胡志明市专业维修保养服务",
      services: [
        { name: "空调清洁", icon: "❄️", link: "/zh/aircon-cleaning" },
        { name: "管道维修", icon: "🔧", link: "/zh/plumbing-repair" },
        { name: "电气维修", icon: "⚡", link: "/zh/electrical-repair" },
        { name: "漏水检测", icon: "💧", link: "/zh/leak-inspection" },
        { name: "瓷砖油漆", icon: "🎨", link: "/zh/tile-painting" }
      ]
    },
    ja: {
      title: "Sua Trua Saigon - ホームサービス",
      description: "ホーチミン市の専門修理・メンテナンスサービス",
      services: [
        { name: "エアコンクリーニング", icon: "❄️", link: "/ja/aircon-cleaning" },
        { name: "配管修理", icon: "🔧", link: "/ja/plumbing-repair" },
        { name: "電気修理", icon: "⚡", link: "/ja/electrical-repair" },
        { name: "漏水検査", icon: "💧", link: "/ja/leak-inspection" },
        { name: "タイル塗装", icon: "🎨", link: "/ja/tile-painting" }
      ]
    }
  };
  return content[locale as keyof typeof content] || content.en;
};

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);
  const content = getContent(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">{content.title}</h1>
          <p className="text-xl mb-8">{content.description}</p>
          <div className="flex justify-center gap-4 mb-8">
            <a href="tel:+841234567890" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              📞 긴급 전화
            </a>
            <a href="https://wa.me/841234567890" className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">서비스 목록</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.map((service, index) => (
              <Link href={service.link} key={index} className="block">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 text-center border border-gray-200">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">연락처</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:+841234567890" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📞</div>
              <div className="font-semibold">전화</div>
              <div className="text-gray-600">+84 123 456 7890</div>
            </a>
            <a href="https://wa.me/841234567890" className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold">WhatsApp</div>
              <div className="text-gray-600">빠른 상담</div>
            </a>
            <Link href={`/${locale}/contact`} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-2">📧</div>
              <div className="font-semibold">문의하기</div>
              <div className="text-gray-600">온라인 문의</div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-lg font-semibold mb-4">Sua Trua Saigon</h3>
          <p className="text-gray-400">호치민시 전문 홈서비스</p>
          <p className="text-gray-400 mt-2">24시간 응급 서비스 | 전문 라이센스 | 보험 완비</p>
        </div>
      </footer>
    </div>
  );
}