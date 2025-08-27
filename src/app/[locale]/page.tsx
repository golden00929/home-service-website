import { use } from 'react';
import Link from 'next/link';
import { SearchBar, LanguageSelector } from '@/components/ui/InteractiveElements';

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
      header: {
        exploreServices: "서비스 탐색",
        joinAsPro: "전문가로 참여",
        signUp: "회원가입",
        logIn: "로그인"
      },
      hero: {
        title: "홈 개선,",
        subtitle: "쉽게 만들어드립니다.",
        searchPlaceholder: "프로젝트나 문제를 설명하세요",
        zipPlaceholder: "우편번호", 
        searchButton: "검색",
        trustText: "전국에서 완료된 프로젝트 9천만 건 이상",
        guarantee: "Sua Trua Saigon 보장제도 지원"
      },
      services: {
        title: "인기 프로젝트",
        categories: [
          {
            name: "에어컨 청소/보수",
            icon: "❄️",
            description: "전문 에어컨 청소 및 고장 수리",
            link: "/ko/aircon-cleaning",
            color: "from-blue-500 to-cyan-500"
          },
          {
            name: "배관 보수",
            icon: "🔧", 
            description: "누수, 막힘, 배관 교체 전문",
            link: "/ko/plumbing-repair",
            color: "from-blue-600 to-indigo-600"
          },
          {
            name: "전기 보수",
            icon: "⚡",
            description: "안전한 전기 시설 점검 및 수리",
            link: "/ko/electrical-repair", 
            color: "from-yellow-500 to-orange-500"
          },
          {
            name: "누수 점검",
            icon: "💧",
            description: "정확한 누수 탐지 및 보수",
            link: "/ko/leak-inspection",
            color: "from-cyan-500 to-blue-500"
          },
          {
            name: "타일/도색 보수",
            icon: "🎨",
            description: "인테리어 마감 및 보수 공사",
            link: "/ko/tile-painting",
            color: "from-purple-500 to-pink-500"
          }
        ]
      },
      howItWorks: {
        title: "이용 방법",
        steps: [
          {
            number: "1",
            title: "문제 설명",
            description: "필요한 서비스를 간단히 설명해 주세요",
            icon: "📝"
          },
          {
            number: "2", 
            title: "전문가 매칭",
            description: "검증된 전문가를 빠르게 연결해 드립니다",
            icon: "👥"
          },
          {
            number: "3",
            title: "서비스 완료",
            description: "만족스러운 서비스를 받으세요",
            icon: "✅"
          }
        ]
      },
      contact: {
        title: "24시간 연락처",
        phone: "+84 123 456 7890",
        emergency: "긴급 상황",
        whatsapp: "WhatsApp",
        zalo: "Zalo"
      }
    },
    vi: {
      header: {
        exploreServices: "Khám phá dịch vụ",
        joinAsPro: "Gia nhập với tư cách chuyên gia",
        signUp: "Đăng ký",
        logIn: "Đăng nhập"
      },
      hero: {
        title: "Cải tạo ngôi nhà,",
        subtitle: "trở nên dễ dàng.",
        searchPlaceholder: "Mô tả dự án hoặc vấn đề của bạn",
        zipPlaceholder: "Mã bưu điện",
        searchButton: "Tìm kiếm", 
        trustText: "Hơn 90 triệu dự án hoàn thành trên toàn quốc",
        guarantee: "Được bảo vệ bởi Sua Trua Saigon Guarantee"
      },
      services: {
        title: "Dự án phổ biến",
        categories: [
          {
            name: "Vệ sinh điều hòa",
            icon: "❄️",
            description: "Vệ sinh và sửa chữa điều hòa chuyên nghiệp",
            link: "/vi/aircon-cleaning",
            color: "from-blue-500 to-cyan-500"
          },
          {
            name: "Sửa ống nước",
            icon: "🔧",
            description: "Chuyên sửa rò rỉ, tắc nghẽn, thay ống",
            link: "/vi/plumbing-repair",
            color: "from-blue-600 to-indigo-600"
          },
          {
            name: "Sửa điện",
            icon: "⚡",
            description: "Kiểm tra và sửa chữa hệ thống điện an toàn",
            link: "/vi/electrical-repair",
            color: "from-yellow-500 to-orange-500"
          },
          {
            name: "Kiểm tra rò rỉ",
            icon: "💧", 
            description: "Phát hiện và sửa chữa rò rỉ chính xác",
            link: "/vi/leak-inspection",
            color: "from-cyan-500 to-blue-500"
          },
          {
            name: "Sơn gạch",
            icon: "🎨",
            description: "Thi công nội thất và sửa chữa hoàn thiện",
            link: "/vi/tile-painting", 
            color: "from-purple-500 to-pink-500"
          }
        ]
      },
      howItWorks: {
        title: "Cách thức hoạt động",
        steps: [
          {
            number: "1",
            title: "Mô tả vấn đề", 
            description: "Hãy mô tả ngắn gọn dịch vụ bạn cần",
            icon: "📝"
          },
          {
            number: "2",
            title: "Kết nối chuyên gia",
            description: "Chúng tôi sẽ kết nối bạn với chuyên gia phù hợp",
            icon: "👥"
          },
          {
            number: "3", 
            title: "Hoàn thành dịch vụ",
            description: "Nhận dịch vụ chất lượng cao",
            icon: "✅"
          }
        ]
      },
      contact: {
        title: "Liên hệ 24/7",
        phone: "+84 123 456 7890", 
        emergency: "Tình huống khẩn cấp",
        whatsapp: "WhatsApp",
        zalo: "Zalo"
      }
    },
    en: {
      header: {
        exploreServices: "Explore Services",
        joinAsPro: "Join as a Pro", 
        signUp: "Sign Up",
        logIn: "Log In"
      },
      hero: {
        title: "Home improvement",
        subtitle: "made simple.",
        searchPlaceholder: "Describe your project or problem",
        zipPlaceholder: "ZIP code",
        searchButton: "Search",
        trustText: "Over 90 million projects completed nationwide", 
        guarantee: "Protected by Sua Trua Saigon Guarantee"
      },
      services: {
        title: "Popular projects",
        categories: [
          {
            name: "Air Conditioner Service",
            icon: "❄️",
            description: "Professional AC cleaning and repair",
            link: "/en/aircon-cleaning",
            color: "from-blue-500 to-cyan-500"
          },
          {
            name: "Plumbing Repair", 
            icon: "🔧",
            description: "Fix leaks, clogs, and pipe replacements",
            link: "/en/plumbing-repair", 
            color: "from-blue-600 to-indigo-600"
          },
          {
            name: "Electrical Repair",
            icon: "⚡",
            description: "Safe electrical system inspection and repair",
            link: "/en/electrical-repair",
            color: "from-yellow-500 to-orange-500"
          },
          {
            name: "Leak Detection",
            icon: "💧",
            description: "Accurate leak detection and repair", 
            link: "/en/leak-inspection",
            color: "from-cyan-500 to-blue-500"
          },
          {
            name: "Tile & Painting",
            icon: "🎨",
            description: "Interior finishing and repair work",
            link: "/en/tile-painting",
            color: "from-purple-500 to-pink-500"
          }
        ]
      },
      howItWorks: {
        title: "How it works",
        steps: [
          {
            number: "1",
            title: "Describe your issue",
            description: "Tell us briefly about the service you need",
            icon: "📝" 
          },
          {
            number: "2",
            title: "Get matched with pros",
            description: "We'll connect you with verified professionals",
            icon: "👥"
          },
          {
            number: "3",
            title: "Get it done",
            description: "Receive high-quality service completion", 
            icon: "✅"
          }
        ]
      },
      contact: {
        title: "24/7 Contact",
        phone: "+84 123 456 7890",
        emergency: "Emergency",
        whatsapp: "WhatsApp", 
        zalo: "Zalo"
      }
    },
    zh: {
      header: {
        exploreServices: "探索服务",
        joinAsPro: "加入专家团队",
        signUp: "注册",
        logIn: "登录"
      },
      hero: {
        title: "家居改善，",
        subtitle: "变得简单。",
        searchPlaceholder: "描述您的项目或问题",
        zipPlaceholder: "邮政编码",
        searchButton: "搜索",
        trustText: "全国已完成超过9000万个项目",
        guarantee: "受Sua Trua Saigon保障制度保护"
      },
      services: {
        title: "热门项目",
        categories: [
          {
            name: "空调清洁",
            icon: "❄️",
            description: "专业空调清洁和维修",
            link: "/zh/aircon-cleaning",
            color: "from-blue-500 to-cyan-500"
          },
          {
            name: "管道维修",
            icon: "🔧",
            description: "修复漏水、堵塞和管道更换",
            link: "/zh/plumbing-repair",
            color: "from-blue-600 to-indigo-600"
          },
          {
            name: "电气维修",
            icon: "⚡",
            description: "安全的电气系统检查和维修",
            link: "/zh/electrical-repair", 
            color: "from-yellow-500 to-orange-500"
          },
          {
            name: "漏水检测",
            icon: "💧",
            description: "准确的漏水检测和修复",
            link: "/zh/leak-inspection",
            color: "from-cyan-500 to-blue-500"
          },
          {
            name: "瓷砖油漆",
            icon: "🎨", 
            description: "室内装修和维修工程",
            link: "/zh/tile-painting",
            color: "from-purple-500 to-pink-500"
          }
        ]
      },
      howItWorks: {
        title: "工作流程",
        steps: [
          {
            number: "1",
            title: "描述问题",
            description: "简要告诉我们您需要的服务",
            icon: "📝"
          },
          {
            number: "2",
            title: "匹配专家",
            description: "我们将为您连接经过验证的专业人士",
            icon: "👥"
          },
          {
            number: "3",
            title: "完成服务",
            description: "接受高质量的服务完成",
            icon: "✅"
          }
        ]
      },
      contact: {
        title: "24小时联系",
        phone: "+84 123 456 7890",
        emergency: "紧急情况",
        whatsapp: "WhatsApp",
        zalo: "Zalo"
      }
    },
    ja: {
      header: {
        exploreServices: "サービスを探す",
        joinAsPro: "プロとして参加",
        signUp: "サインアップ",
        logIn: "ログイン"
      },
      hero: {
        title: "ホーム改善を",
        subtitle: "簡単に。",
        searchPlaceholder: "プロジェクトや問題を説明してください",
        zipPlaceholder: "郵便番号",
        searchButton: "検索",
        trustText: "全国で9000万件以上のプロジェクトを完了",
        guarantee: "Sua Trua Saigon保証制度による保護"
      },
      services: {
        title: "人気プロジェクト",
        categories: [
          {
            name: "エアコンクリーニング",
            icon: "❄️",
            description: "プロのエアコン清掃と修理",
            link: "/ja/aircon-cleaning",
            color: "from-blue-500 to-cyan-500"
          },
          {
            name: "配管修理",
            icon: "🔧",
            description: "漏れ、詰まり、パイプ交換の修理",
            link: "/ja/plumbing-repair", 
            color: "from-blue-600 to-indigo-600"
          },
          {
            name: "電気修理",
            icon: "⚡",
            description: "安全な電気システムの点検と修理",
            link: "/ja/electrical-repair",
            color: "from-yellow-500 to-orange-500"
          },
          {
            name: "漏水検査",
            icon: "💧",
            description: "正確な漏水検出と修理",
            link: "/ja/leak-inspection",
            color: "from-cyan-500 to-blue-500"
          },
          {
            name: "タイル・塗装",
            icon: "🎨",
            description: "内装仕上げと修理工事",
            link: "/ja/tile-painting",
            color: "from-purple-500 to-pink-500"
          }
        ]
      },
      howItWorks: {
        title: "利用方法",
        steps: [
          {
            number: "1",
            title: "問題を説明",
            description: "必要なサービスを簡単に教えてください",
            icon: "📝"
          },
          {
            number: "2",
            title: "プロとマッチング",
            description: "検証済みの専門家とお繋ぎします",
            icon: "👥"
          },
          {
            number: "3",
            title: "サービス完了",
            description: "高品質なサービスをお受けください",
            icon: "✅"
          }
        ]
      },
      contact: {
        title: "24時間連絡先",
        phone: "+84 123 456 7890",
        emergency: "緊急事態",
        whatsapp: "WhatsApp", 
        zalo: "Zalo"
      }
    }
  };
  return content[locale as keyof typeof content] || content.en;
};

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);
  const content = getContent(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href={`/${locale}`} className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold text-gray-900">Sua Trua Saigon</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-gray-900">{content.header.exploreServices}</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it works</a>
              <Link href={`/${locale}/contact`} className="text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>

            <div className="flex items-center space-x-4">
              <LanguageSelector currentLocale={locale} />
              <Link href={`/${locale}/contact`} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {content.hero.title} <br />
            <span className="text-blue-200">{content.hero.subtitle}</span>
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            {content.hero.trustText}
          </p>
          
          <SearchBar />
          
          <p className="text-sm text-blue-200 mt-6">
            {content.hero.guarantee}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.services.title}</h2>
            <p className="text-xl text-gray-600">Choose from our most requested services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.services.categories.map((service, index) => (
              <Link href={service.link} key={index} className="group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 p-8 text-center border border-gray-100">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="mt-6 text-blue-600 font-semibold group-hover:text-blue-700">
                    Learn more →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{content.howItWorks.title}</h2>
            <p className="text-xl text-gray-600">Get your project done in 3 simple steps</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  {step.number}
                </div>
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">{content.contact.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href={`tel:${content.contact.phone}`} className="bg-red-600 hover:bg-red-700 p-6 rounded-xl transition-colors">
              <div className="text-3xl mb-2">📞</div>
              <div className="font-semibold">{content.contact.emergency}</div>
              <div className="text-red-100">{content.contact.phone}</div>
            </a>
            <a href={`https://wa.me/${content.contact.phone.replace(/\s/g, '')}`} className="bg-green-600 hover:bg-green-700 p-6 rounded-xl transition-colors">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold">{content.contact.whatsapp}</div>
              <div className="text-green-100">Quick Chat</div>
            </a>
            <a href={`https://zalo.me/${content.contact.phone.replace(/\s/g, '')}`} className="bg-blue-500 hover:bg-blue-600 p-6 rounded-xl transition-colors">
              <div className="text-3xl mb-2">💬</div>
              <div className="font-semibold">{content.contact.zalo}</div>
              <div className="text-blue-100">Message Us</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">Sua Trua Saigon</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Professional home services in Ho Chi Minh City. Licensed, insured, and guaranteed quality work.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href={`/${locale}/aircon-cleaning`} className="hover:text-white">Air Conditioner</Link></li>
                <li><Link href={`/${locale}/plumbing-repair`} className="hover:text-white">Plumbing</Link></li>
                <li><Link href={`/${locale}/electrical-repair`} className="hover:text-white">Electrical</Link></li>
                <li><Link href={`/${locale}/leak-inspection`} className="hover:text-white">Leak Detection</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>24/7 Emergency</li>
                <li>{content.contact.phone}</li>
                <li><Link href={`/${locale}/contact`} className="hover:text-white">Get Quote</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sua Trua Saigon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}