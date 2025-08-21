import Link from 'next/link';
import Image from 'next/image';

const getContent = (locale: string) => {
  const content = {
    ko: {
      title: "호치민에서 믿을 수 있는 홈 서비스를 찾으세요",
      subtitle: "에어컨 청소부터 배관 수리까지, 전문가들이 도와드립니다",
      searchPlaceholder: "어떤 서비스가 필요하세요?",
      searchButton: "전문가 찾기",
      services: {
        aircon: "에어컨 청소",
        plumbing: "배관 수리", 
        electrical: "전기 수리",
        painting: "페인트 도장",
        cleaning: "하우스 클리닝",
        handyman: "종합 수리"
      },
      howItWorks: "이용 방법",
      steps: [
        { title: "서비스 선택", desc: "필요한 서비스를 선택하세요" },
        { title: "전문가 매칭", desc: "최적의 전문가를 찾아드립니다" },
        { title: "서비스 완료", desc: "만족스러운 서비스를 받으세요" }
      ]
    },
    vi: {
      title: "Tìm dịch vụ gia đình đáng tin cậy tại TP.HCM",
      subtitle: "Từ vệ sinh điều hòa đến sửa chữa đường ống, các chuyên gia sẵn sàng giúp bạn",
      searchPlaceholder: "Bạn cần dịch vụ gì?",
      searchButton: "Tìm chuyên gia",
      services: {
        aircon: "Vệ sinh điều hòa",
        plumbing: "Sửa ống nước",
        electrical: "Sửa điện", 
        painting: "Sơn nhà",
        cleaning: "Dọn dẹp nhà",
        handyman: "Sửa chữa tổng hợp"
      },
      howItWorks: "Cách thức hoạt động",
      steps: [
        { title: "Chọn dịch vụ", desc: "Chọn dịch vụ bạn cần" },
        { title: "Kết nối chuyên gia", desc: "Chúng tôi tìm chuyên gia phù hợp" },
        { title: "Hoàn thành", desc: "Nhận dịch vụ hài lòng" }
      ]
    },
    en: {
      title: "Find trusted home services in Ho Chi Minh City",
      subtitle: "From AC cleaning to plumbing repair, professionals are here to help",
      searchPlaceholder: "What service do you need?",
      searchButton: "Find Experts",
      services: {
        aircon: "AC Cleaning",
        plumbing: "Plumbing Repair",
        electrical: "Electrical Repair",
        painting: "House Painting", 
        cleaning: "House Cleaning",
        handyman: "General Repair"
      },
      howItWorks: "How it works",
      steps: [
        { title: "Choose Service", desc: "Select the service you need" },
        { title: "Get Matched", desc: "We find the right professional" },
        { title: "Get it Done", desc: "Enjoy quality service" }
      ]
    },
    ja: {
      title: "ホーチミンで信頼できるホームサービスを見つけよう",
      subtitle: "エアコンクリーニングから配管修理まで、専門家がお手伝いします",
      searchPlaceholder: "どのようなサービスが必要ですか？",
      searchButton: "専門家を探す",
      services: {
        aircon: "エアコンクリーニング",
        plumbing: "配管修理",
        electrical: "電気修理",
        painting: "塗装",
        cleaning: "ハウスクリーニング", 
        handyman: "総合修理"
      },
      howItWorks: "利用方法",
      steps: [
        { title: "サービス選択", desc: "必要なサービスを選択" },
        { title: "専門家マッチング", desc: "最適な専門家を見つけます" },
        { title: "完了", desc: "満足のいくサービスを受ける" }
      ]
    },
    zh: {
      title: "在胡志明市寻找可信赖的家居服务",
      subtitle: "从空调清洁到管道维修，专业人士随时为您服务",
      searchPlaceholder: "您需要什么服务？", 
      searchButton: "寻找专家",
      services: {
        aircon: "空调清洁",
        plumbing: "管道维修",
        electrical: "电气维修",
        painting: "房屋油漆",
        cleaning: "家庭清洁",
        handyman: "综合维修"
      },
      howItWorks: "工作流程",
      steps: [
        { title: "选择服务", desc: "选择您需要的服务" },
        { title: "匹配专家", desc: "我们为您找到合适的专家" },
        { title: "完成服务", desc: "享受优质服务" }
      ]
    }
  };
  
  return content[locale as keyof typeof content] || content.en;
};

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const t = getContent(locale);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            <div className="flex items-center">
              <Image 
                src="/logo.png" 
                alt="Sua Trua Saigon Logo" 
                width={120} 
                height={50} 
                className="rounded-lg"
              />
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#services" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Services</Link>
              <Link href="#how-it-works" className="text-gray-700 hover:text-green-600 font-medium transition-colors">How it works</Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-1">
                <Link href="/vi" className="px-2 py-1 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-all">VI</Link>
                <Link href="/en" className="px-2 py-1 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-all">EN</Link>
                <Link href="/zh" className="px-2 py-1 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-all">ZH</Link>
                <Link href="/ko" className="px-2 py-1 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-all">KO</Link>
                <Link href="/ja" className="px-2 py-1 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded transition-all">JA</Link>
              </div>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t.subtitle}
            </p>
            
            {/* Simple Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-4 flex items-center hover:border-green-300 transition-colors">
                <div className="flex items-center flex-1">
                  <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    className="flex-1 bg-transparent text-gray-900 border-none outline-none text-lg placeholder-gray-500"
                  />
                </div>
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg transition-colors">
                  {t.searchButton}
                </button>
              </div>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-medium">4.8/5 (2,000+ reviews)</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">10,000+ Happy Customers</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional experts ready to help with all your home service needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                key: 'aircon', 
                icon: '❄️', 
                description: 'Professional AC cleaning & maintenance'
              },
              { 
                key: 'plumbing', 
                icon: '🔧', 
                description: 'Expert plumbing repair & installation'
              },
              { 
                key: 'electrical', 
                icon: '⚡', 
                description: 'Licensed electrical work & repair'
              },
              { 
                key: 'painting', 
                icon: '🎨', 
                description: 'Interior & exterior painting services'
              },
              { 
                key: 'cleaning', 
                icon: '🧽', 
                description: 'Deep cleaning & maintenance'
              },
              { 
                key: 'handyman', 
                icon: '🔨', 
                description: 'General repairs & installations'
              }
            ].map((service) => (
              <div key={service.key} className="group">
                <div className="bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-200 p-6 cursor-pointer">
                  {/* Service Icon */}
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 text-2xl">
                    {service.icon}
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t.services[service.key as keyof typeof t.services]}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* CTA Button */}
                  <button className="text-green-600 hover:text-green-700 font-medium text-sm flex items-center group-hover:underline">
                    Get quotes
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          {/* View All Services Button */}
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.howItWorks}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Getting your home service needs met has never been easier
            </p>
          </div>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-indigo-200 rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {t.steps.map((step, index) => (
                <div key={index} className="text-center group">
                  {/* Step Circle */}
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300 relative z-10">
                      {index + 1}
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-2">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.desc}
                    </p>
                    
                    {/* Decorative Arrow */}
                    {index < t.steps.length - 1 && (
                      <div className="hidden lg:block absolute -right-6 top-1/2 transform -translate-y-1/2">
                        <svg className="w-8 h-8 text-blue-300 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center mt-12">
            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to get started?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of satisfied customers in Saigon
            </p>
            
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-200 cursor-pointer">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="text-lg font-semibold mb-2">Call Now</h3>
                <p className="text-green-100">+84 xxx xxx xxx</p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-200 cursor-pointer">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
                <p className="text-green-100">Chat with us</p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition-all duration-200 cursor-pointer">
                <div className="text-3xl mb-3">🗨️</div>
                <h3 className="text-lg font-semibold mb-2">Zalo</h3>
                <p className="text-green-100">Message us</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold">Sua Trua Saigon</h3>
                <span className="ml-2 bg-blue-600 text-white text-sm px-2 py-1 rounded">SGN</span>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                전문 수리 및 정비 서비스 in Saigon. 믿을 수 있는 Sua Trua (수리 전문가) 파트너입니다.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {[
                  { icon: '📘', label: 'Facebook' },
                  { icon: '📷', label: 'Instagram' }, 
                  { icon: '📱', label: 'WhatsApp' },
                  { icon: '🗨️', label: 'Zalo' }
                ].map((social) => (
                  <div key={social.label} className="w-12 h-12 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group">
                    <span className="text-xl group-hover:scale-110 transition-transform">{social.icon}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-3">
                {['AC Cleaning', 'Plumbing', 'Electrical', 'Painting', 'General Repair', 'Emergency Service'].map((service) => (
                  <li key={service}>
                    <Link href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">+84 xxx xxx xxx</p>
                    <p className="text-gray-400 text-sm">24/7 Support</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">info@suatruasaigon.vn</p>
                    <p className="text-gray-400 text-sm">Quick Response</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Ho Chi Minh City</p>
                    <p className="text-gray-400 text-sm">All Districts</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Languages */}
            <div>
              <h4 className="font-bold text-lg mb-6">Languages</h4>
              <div className="grid grid-cols-1 gap-2">
                {[
                  { code: '/vi', name: 'Tiếng Việt', flag: '🇻🇳' },
                  { code: '/en', name: 'English', flag: '🇺🇸' },
                  { code: '/zh', name: '中文', flag: '🇨🇳' },
                  { code: '/ko', name: '한국어', flag: '🇰🇷' },
                  { code: '/ja', name: '日本語', flag: '🇯🇵' }
                ].map((lang) => (
                  <Link key={lang.code} href={lang.code} className="flex items-center text-gray-300 hover:text-white hover:bg-gray-800 rounded-lg px-3 py-2 transition-all duration-200">
                    <span className="mr-2">{lang.flag}</span>
                    {lang.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom Section */}
          <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
                <p>&copy; 2024 Sua Trua Saigon. All rights reserved.</p>
                <p className="text-sm mt-1">Licensed & Insured • Professional Service Guarantee</p>
              </div>
              
              <div className="flex space-x-6 text-sm">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}