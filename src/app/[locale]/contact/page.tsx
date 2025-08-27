import { use } from 'react';
import { generateMetadata as generateBaseMetadata } from '@/lib/metadata';
import ContactForm from '@/components/ui/ContactForm';

interface ContactPageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default function ContactPage({ params }: ContactPageProps) {
  const { locale } = use(params);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">연락처</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            24시간 언제든지 연락주세요. 전문가가 신속하게 도와드리겠습니다.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">온라인 문의</h2>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              
              {/* Quick Contact */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">빠른 연락</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+841234567890"
                    className="flex items-center p-4 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📞</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-red-600">긴급 전화</div>
                      <div className="text-lg font-bold text-red-700">+84 123 456 7890</div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/841234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-green-600">WhatsApp</div>
                      <div className="text-lg font-bold text-green-700">빠른 상담</div>
                    </div>
                  </a>

                  <a
                    href="https://zalo.me/841234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-blue-600">Zalo</div>
                      <div className="text-lg font-bold text-blue-700">메시지 상담</div>
                    </div>
                  </a>

                  <a
                    href="mailto:info@suatruasaigon.com"
                    className="flex items-center p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">📧</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-600">이메일</div>
                      <div className="text-lg font-bold text-gray-700">info@suatruasaigon.com</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Service Info */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">서비스 정보</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <span className="text-xl">⏰</span>
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">운영시간</div>
                      <div className="text-gray-600">
                        평일: 오전 8:00 - 오후 8:00<br />
                        주말: 오전 9:00 - 오후 6:00<br />
                        <span className="text-red-600 font-medium">응급상황: 24시간 대응</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <span className="text-xl">📍</span>
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">서비스 지역</div>
                      <div className="text-gray-600">호치민시(사이공) 전 지역</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 mt-1">
                      <span className="text-xl">🛡️</span>
                    </div>
                    <div className="ml-3">
                      <div className="font-semibold text-gray-900">서비스 보장</div>
                      <div className="text-gray-600">
                        전문 라이센스 보유<br />
                        보험 가입 완료<br />
                        만족도 100% 보장
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Generate metadata for contact page
export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  
  const metadata = generateBaseMetadata(locale);
  const contactTitle = `연락처 | ${metadata.title}`;
  const contactDescription = "24시간 홈서비스 문의 및 상담. 전화, WhatsApp, Zalo로 즉시 연락 가능. 호치민 전문 수리 서비스.";

  return {
    ...metadata,
    title: contactTitle,
    description: contactDescription,
    openGraph: {
      ...metadata.openGraph,
      title: contactTitle,
      description: contactDescription,
    },
    twitter: {
      ...metadata.twitter,
      title: contactTitle,
      description: contactDescription,
    },
  };
}