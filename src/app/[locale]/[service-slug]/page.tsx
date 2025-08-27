
import { use, Suspense } from 'react';
import { notFound } from 'next/navigation';
import { generateServiceMetadata } from '@/lib/metadata';

interface ServiceDetailPageProps {
  params: Promise<{
    locale: string;
    'service-slug': string;
  }>;
}

// Service data mapping
const serviceData = {
  'aircon-cleaning': {
    id: 'aircon-cleaning',
    name: '에어컨 청소/보수',
    nameEn: 'Air Conditioner Cleaning & Repair',
    description: '전문 에어컨 청소부터 고장 보수까지 완벽한 에어컨 관리 서비스를 제공합니다.',
    descriptionEn: 'Complete air conditioner management service from professional cleaning to repair.',
    icon: '❄️',
    price: '80,000원 ~ 180,000원',
    duration: '1-3시간',
    services: [
      '에어컨 기본/완전 청소',
      '에어컨 고장 진단 및 보수', 
      '내부 부품 분해 청소',
      '살균 및 소독 처리',
      '냉매 점검 및 충전',
      '성능 테스트 및 A/S'
    ],
    benefits: [
      '전력 소모량 감소',
      '공기 질 개선',
      '알레르기 예방',
      '에어컨 수명 연장',
      '냉방 효율 향상'
    ],
    process: [
      '현장 방문 및 상태 점검',
      '에어컨 분해 및 부품 분리',
      '전문 청소제로 깊은 청소',
      '살균 처리 및 조립',
      '성능 테스트 및 완료 확인'
    ],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  'plumbing-repair': {
    id: 'plumbing-repair',
    name: '수도배관 보수',
    nameEn: 'Water & Plumbing Repair',
    description: '수도배관 누수부터 전체 교체까지 모든 배관 문제를 전문적으로 해결합니다.',
    descriptionEn: 'Professional solution for all water and plumbing issues from leaks to complete replacement.',
    icon: '🔧',
    price: '100,000원 ~ 250,000원',
    duration: '1-5시간',
    services: [
      '배관 누수 수리',
      '수도배관 전체 교체',
      '드레인 주배관 시공',
      '하수관 청소 및 수리',
      '압력 테스트 및 검증'
    ],
    benefits: [
      '물 손실 방지',
      '구조적 손상 예방',
      '위생 환경 개선',
      '장기적 비용 절약',
      '안전한 급수 시스템'
    ],
    process: [
      '누수 지점 정확한 진단',
      '배관 상태 종합 점검',
      '필요 부품 확인 및 준비',
      '전문 도구로 수리 작업',
      '압력 테스트 및 완료 점검'
    ],
    image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  'electrical-repair': {
    id: 'electrical-repair',
    name: '전기보수',
    nameEn: 'Electrical Repair',
    description: '안전하고 전문적인 전기 설비 보수, 교체 및 설치 서비스를 제공합니다.',
    descriptionEn: 'Safe and professional electrical repair, replacement and installation services.',
    icon: '⚡',
    price: '60,000원 ~ 200,000원',
    duration: '1-4시간',
    services: [
      '콘센트 교체 및 수리',
      '전선 배선 및 교체',
      '전기 분전반 점검/보수',
      '스위치 및 조명 설치',
      '전기 안전 종합 점검'
    ],
    benefits: [
      '전기 안전성 확보',
      '전력 효율 개선',
      '화재 위험 방지',
      '안정적인 전력 공급',
      '전기요금 절약'
    ],
    process: [
      '전기 시설 안전 점검',
      '문제 지점 정확한 진단',
      '전원 차단 및 안전 조치',
      '전문 장비로 수리 작업',
      '안전 테스트 및 완료 확인'
    ],
    image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  'leak-inspection': {
    id: 'leak-inspection',
    name: '누수점검/보수',
    nameEn: 'Leak Inspection & Repair',
    description: '전문장비로 정밀한 누수 점검부터 방수공사까지 완벽한 원스톱 서비스를 제공합니다.',
    descriptionEn: 'Complete one-stop service from precise leak detection with professional equipment to waterproofing.',
    icon: '🔍',
    price: '80,000원 ~ 250,000원',
    duration: '2-5시간',
    services: [
      '누수 지점 정밀 탐지',
      '숨은 누수 전문 탐지',
      '방수공사 및 누수보수',
      '구조적 보수 및 보강',
      '재발 방지 및 사후관리'
    ],
    benefits: [
      '구조적 손상 방지',
      '곰팡이 발생 예방',
      '건물 자산 가치 보호',
      '에너지 손실 방지',
      '건강한 주거 환경'
    ],
    process: [
      '전문 장비로 누수 탐지',
      '누수 원인 정확한 분석',
      '최적의 수리 방법 결정',
      '전문 기술로 완벽 수리',
      '재발 방지 점검 및 관리'
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  },
  'tile-painting': {
    id: 'tile-painting',
    name: '타일/도색 보수',
    nameEn: 'Tile & Painting Repair',
    description: '타일 교체부터 벽면 도색 보수까지 전문 기술자가 수행하는 인테리어 보수 서비스입니다.',
    descriptionEn: 'Professional interior repair service from tile replacement to wall painting repair by expert technicians.',
    icon: '🎨',
    price: '30,000원 ~ 80,000원/m²',
    duration: '1-3일',
    services: [
      '타일 교체 및 보수',
      '벽면/천장 도색 보수',
      '바닥재 보수 및 교체',
      '방수 작업 및 마감',
      '인테리어 마감 정리'
    ],
    benefits: [
      '공간 미관 향상',
      '방수 기능 강화',
      '내구성 증대',
      '청소 용이성',
      '부동산 가치 상승'
    ],
    process: [
      '현장 측정 및 견적',
      '기존 자재 제거 작업',
      '바탕면 정리 및 준비',
      '전문 기법으로 시공',
      '마감 정리 및 완료 점검'
    ],
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80'
  }
};

function ServiceDetailContent({ params }: ServiceDetailPageProps) {
  const { locale, 'service-slug': serviceSlug } = use(params);
  const service = serviceData[serviceSlug as keyof typeof serviceData];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-4">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              {service.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                💰 {service.price}
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                ⏱️ {service.duration}
              </div>
              <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                🏆 5성급 서비스
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Service Image */}
            <div className="order-2 lg:order-1">
              <img 
                src={service.image} 
                alt={service.name}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Service Details */}
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">서비스 내용</h2>
              <ul className="space-y-3">
                {service.services.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      ✓
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            
            {/* Benefits */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">서비스 혜택</h3>
              <ul className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                      ★
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Process */}
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">작업 프로세스</h3>
              <ol className="space-y-4">
                {service.process.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">지금 바로 상담 받으세요!</h3>
            <p className="text-blue-100 text-lg mb-8">24시간 응급 서비스 가능 • 무료 견적 • 전문가 직접 상담</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+841234567890"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                📞 긴급 전화: +84 123 456 7890
              </a>
              <a 
                href="https://wa.me/841234567890"
                className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors flex items-center justify-center"
              >
                💬 WhatsApp 상담
              </a>
              <a 
                href="/ko/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                ✉️ 온라인 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <ServiceDetailContent params={params} />
    </Suspense>
  );
}

// Generate metadata for each service page
export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { locale, 'service-slug': serviceSlug } = await params;
  const service = serviceData[serviceSlug as keyof typeof serviceData];
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service was not found.'
    };
  }

  return generateServiceMetadata(
    locale,
    service.name,
    service.description
  );
}

// Generate static params for all services
export async function generateStaticParams() {
  const locales = ['ko', 'vi', 'en', 'zh', 'ja'];
  const serviceSlugs = Object.keys(serviceData);

  const params = [];
  for (const locale of locales) {
    for (const serviceSlug of serviceSlugs) {
      params.push({
        locale,
        'service-slug': serviceSlug
      });
    }
  }

  return params;
}