import { use, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import ScrollAnimations from '../../components/ui/ScrollAnimations';

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
      }
    },
    en: {
      header: {
        exploreServices: "Explore Services",
        joinAsPro: "Join as a pro",
        signUp: "Sign up", 
        logIn: "Log in"
      },
      hero: {
        title: "Home improvement,",
        subtitle: "made easy.",
        searchPlaceholder: "Describe your project or problem",
        zipPlaceholder: "Zip code",
        searchButton: "Search",
        trustText: "Over 90 million projects completed nationwide",
        guarantee: "Backed by the Sua Trua Saigon Guarantee"
      }
    }
  };
  
  return content[locale as keyof typeof content] || content.vi;
};

export default function HomePage({ params }: PageProps) {
  const { locale } = use(params);
  const content = getContent(locale);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Service categories
  const categories = [
    { 
      id: 'aircon-cleaning', 
      name: 'Air Conditioner Cleaning & Repair',
      nameKo: '에어컨 청소/보수',
      svg: <svg role="presentation" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.429 1.928a.75.75 0 10-1.5 0v1.4l-.643-.643a.75.75 0 00-1.062 1.059l1.705 1.709v2.246L5.992 6.578l-.625-2.334a.75.75 0 10-1.449.387l.237.883-1.208-.699a.75.75 0 00-.751 1.298l1.213.702-.883.238A.75.75 0 102.915 8.5l2.326-.625L7.181 9l-1.94 1.123L2.915 9.5a.75.75 0 10-.39 1.448l.884.237-1.213.703a.75.75 0 00.751 1.298l1.208-.7-.236.884a.75.75 0 101.449.388l.624-2.335L7.93 10.3v2.246l-1.705 1.709a.75.75 0 101.062 1.06l.643-.645v1.4a.75.75 0 001.5 0v-1.4l.642.644a.75.75 0 001.062-1.059l-1.704-1.709v-2.246l1.936 1.12.624 2.336a.75.75 0 101.45-.388l-.237-.883 1.208.699a.75.75 0 00.752-1.299l-1.213-.702.882-.237a.75.75 0 00-.389-1.448l-2.326.624L10.176 9l1.94-1.124 2.326.625a.75.75 0 10.39-1.448l-.883-.238 1.213-.702a.75.75 0 00-.752-1.298l-1.207.7.236-.884a.75.75 0 00-1.45-.387l-.624 2.334L9.43 7.699V5.453l1.704-1.71a.75.75 0 10-1.062-1.058l-.642.644v-1.4z"></path></svg>
    },
    { 
      id: 'plumbing', 
      name: 'Water & Plumbing Repair',
      nameKo: '수도배관 보수',
      svg: <svg role="presentation" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M7.168 1.25l-.735.679-.735-.679a1 1 0 011.47 0zm2.567 3.228a31.41 31.41 0 00-1.358-1.81A34.613 34.613 0 007.195 1.28l-.02-.021-.005-.006-.002-.003-.735.679-.735-.679-.004.005-.012.013-.04.045a31.638 31.638 0 00-.677.779 33.535 33.535 0 00-1.598 2.05c-.58.811-1.176 1.737-1.632 2.66C1.291 7.706.93 8.71.93 9.652c0 1.67.599 3.068 1.632 4.045 1.024.968 2.407 1.46 3.872 1.46.27 0 .536-.017.798-.05.147.184.306.358.478.52 1.024.968 2.407 1.46 3.872 1.46 1.465 0 2.848-.492 3.872-1.46 1.033-.977 1.633-2.374 1.633-4.045 0-.941-.363-1.946-.807-2.848-.456-.924-1.052-1.85-1.632-2.66a33.502 33.502 0 00-2.274-2.83l-.041-.045-.012-.012-.003-.004s-.001-.001-.736.677l.735-.678a1.002 1.002 0 00-1.47 0l.735.678-.735-.678-.001.001-.004.004-.01.012-.042.045a31.324 31.324 0 00-1.054 1.234zm-1.28 1.68A27.692 27.692 0 006.82 3.923c-.137-.17-.267-.328-.387-.47-.403.481-.922 1.13-1.439 1.852-.546.764-1.075 1.591-1.465 2.382-.4.812-.6 1.484-.6 1.964 0 1.172.409 2.026 1.006 2.591.573.543 1.383.876 2.334.91a6.272 6.272 0 01-.193-1.57c0-.943.363-1.947.807-2.849.44-.892 1.01-1.785 1.571-2.575zm3.126-.775c-.403.481-.922 1.13-1.439 1.853-.546.763-1.075 1.59-1.465 2.381-.4.812-.6 1.484-.6 1.964 0 1.172.408 2.027 1.006 2.592.606.573 1.476.913 2.498.913 1.022 0 1.892-.34 2.498-.913.598-.565 1.006-1.42 1.006-2.592 0-.48-.2-1.152-.6-1.964-.39-.79-.92-1.618-1.465-2.381a31.406 31.406 0 00-1.439-1.853z" fillRule="evenodd"></path></svg>
    },
    { 
      id: 'electrical', 
      name: 'Electrical Repair',
      nameKo: '전기보수',
      svg: <svg role="presentation" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M7.429 1.929a1 1 0 10-2 0v2.857H3.857a1 1 0 00-1 1V9A6.145 6.145 0 008 15.062v1.01a1 1 0 102 0v-1.01A6.145 6.145 0 0015.143 9V5.786a1 1 0 00-1-1H12.57V1.929a1 1 0 10-2 0v2.857H7.43V1.929zM9 13.143A4.143 4.143 0 014.857 9V6.786h8.286V9A4.143 4.143 0 019 13.143z" fillRule="evenodd"></path></svg>
    },
    { 
      id: 'leak-inspection', 
      name: 'Leak Inspection & Repair',
      nameKo: '누수점검/보수',
      svg: <svg role="presentation" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9 1.5a.75.75 0 01.75.75v.793l2.298-1.327a.75.75 0 01.75 1.299L10.5 4.342v1.408a.75.75 0 01-1.5 0V4.342L6.702 3.015a.75.75 0 01.75-1.299L9.75 2.043V2.25A.75.75 0 019 1.5zM4.5 7.5a4.5 4.5 0 119 0c0 .885-.322 1.693-.855 2.318l-.053.061c-.34.393-.617.712-.853 1.002-.262.321-.489.648-.489 1.119 0 1.24 1.01 2.25 2.25 2.25s2.25-1.01 2.25-2.25c0-.471-.227-.798-.489-1.119-.236-.29-.513-.609-.853-1.002l-.053-.061A5.976 5.976 0 0113.5 7.5a4.5 4.5 0 00-9 0z"/></svg>
    },
    { 
      id: 'tile-painting', 
      name: 'Tile & Painting Repair',
      nameKo: '타일/도색 보수',
      svg: <svg role="presentation" height="18" width="18" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M4.345 8.098V2.262h9.31v5.836h-9.31zM5.604 11.57a1.259 1.259 0 01-1.259-1.259v-.41h9.31v.41c0 .695-.564 1.259-1.26 1.259h-1.61a1.01 1.01 0 00-1.01 1.01v2.398c0 .218-.04.322-.07.365a.915.915 0 01-.295.296.792.792 0 01-.41.098c-.348 0-.587-.15-.77-.412-.023-.032-.064-.126-.064-.347V12.58a1.01 1.01 0 00-1.01-1.01H5.603zM3.551.457a1.01 1.01 0 00-1.01 1.01v7.425c0 .036.002.072.005.108a1.022 1.022 0 00-.005.108v1.204a3.063 3.063 0 003.063 3.063h.757v1.604c0 .388.062.913.389 1.38.474.679 1.235 1.184 2.25 1.184 1.031 0 1.755-.521 2.206-1.196.31-.463.374-.977.374-1.368v-1.604h.816a3.063 3.063 0 003.063-3.063V9.108c0-.036-.002-.072-.005-.108.003-.036.005-.072.005-.108V1.467a1.01 1.01 0 00-1.01-1.01H3.55z" fillRule="evenodd"></path></svg>
    }
  ];

  // Services data with pricing
  const services = [
    { id: 'aircon-clean-basic', name: '에어컨 기본 청소', price: 80000, unit: '대', icon: '❄️', category: 'aircon-cleaning' },
    { id: 'aircon-repair', name: '에어컨 고장 보수', price: 120000, unit: '대', icon: '🔧', category: 'aircon-cleaning' },
    { id: 'aircon-clean-deep', name: '에어컨 완전 분해청소', price: 180000, unit: '대', icon: '🧽', category: 'aircon-cleaning' },
    { id: 'pipe-leak-repair', name: '배관 누수 수리', price: 100000, unit: '건', icon: '🔧', category: 'plumbing' },
    { id: 'pipe-replacement', name: '수도배관 교체', price: 180000, unit: 'm', icon: '🚿', category: 'plumbing' },
    { id: 'drain-cleaning', name: '드레인 주배관 시공', price: 150000, unit: '건', icon: '🚽', category: 'plumbing' },
    { id: 'electrical-outlet', name: '콘센트 교체/수리', price: 60000, unit: '개', icon: '⚡', category: 'electrical' },
    { id: 'electrical-wiring', name: '전선 배선 및 교체', price: 120000, unit: 'm', icon: '🔌', category: 'electrical' },
    { id: 'electrical-panel', name: '전기 분전반 점검/보수', price: 200000, unit: '건', icon: '⚙️', category: 'electrical' },
    { id: 'leak-inspection', name: '누수 정밀 점검', price: 80000, unit: '건', icon: '🔍', category: 'leak-inspection' },
    { id: 'leak-waterproof', name: '방수공사 및 누수보수', price: 250000, unit: 'm²', icon: '🛠️', category: 'leak-inspection' },
    { id: 'tile-replacement', name: '타일 교체/보수', price: 50000, unit: 'm²', icon: '🟫', category: 'tile-painting' },
    { id: 'wall-painting', name: '벽면/천장 도색 보수', price: 30000, unit: 'm²', icon: '🎨', category: 'tile-painting' },
    { id: 'floor-repair', name: '바닥재 보수/교체', price: 80000, unit: 'm²', icon: '🏠', category: 'tile-painting' }
  ];
  
  // State for active category and service quantities
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [quantities, setQuantities] = useState<{[key: string]: number}>(() => {
    const initial: {[key: string]: number} = {};
    services.forEach(service => {
      initial[service.id] = 1;
    });
    return initial;
  });
  
  // Functions to update quantities
  const updateQuantity = (serviceId: string, change: number) => {
    setQuantities(prev => ({
      ...prev,
      [serviceId]: Math.max(1, prev[serviceId] + change)
    }));
  };
  
  const setQuantity = (serviceId: string, value: number) => {
    setQuantities(prev => ({
      ...prev,
      [serviceId]: Math.max(1, value)
    }));
  };
  
  // Filter services based on active category
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  // Calculate total estimate
  const totalEstimate = services.reduce((total, service) => {
    return total + (service.price * quantities[service.id]);
  }, 0);
  
  // Handle download estimate
  const handleDownloadEstimate = () => {
    const estimateData = services.map(service => ({
      service: service.name,
      quantity: quantities[service.id],
      unit: service.unit,
      unitPrice: service.price,
      subtotal: service.price * quantities[service.id]
    }));
    
    const csvContent = [
      ['서비스', '수량', '단위', '단가', '소계'],
      ...estimateData.map(item => [
        item.service,
        item.quantity,
        item.unit,
        `${item.unitPrice.toLocaleString()}원`,
        `${item.subtotal.toLocaleString()}원`
      ]),
      ['', '', '', '총계', `${totalEstimate.toLocaleString()}원`]
    ].map(row => row.join(',')).join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'sua_trua_saigon_estimate.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Handle consultation
  const handleConsultation = () => {
    const message = `안녕하세요! Sua Trua Saigon 견적 문의드립니다.\n\n견적 내역:\n${services.map(service => 
      `- ${service.name}: ${quantities[service.id]}${service.unit} (${(service.price * quantities[service.id]).toLocaleString()}원)`
    ).join('\n')}\n\n총 예상 견적: ${totalEstimate.toLocaleString()}원\n\n전문가와 상담을 원합니다.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/84XXXXXXXXX?text=${encodedMessage}`, '_blank');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sua Trua Saigon",
    "description": "전문 수리 및 정비 서비스 플랫폼",
    "url": "https://suatruasaigon.vn",
    "telephone": "+84-xxx-xxx-xxx",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ho Chi Minh City",
      "addressCountry": "VN"
    },
    "openingHours": "Mo-Su 00:00-23:59"
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Sua Trua Saigon - 전문 수리 및 정비 서비스 | 호치민 지역</title>
        <meta name="description" content="호치민 지역 전문 수리 및 정비 서비스. 에어컨 청소, 배관 수리, 전기 수리, 페인트 도장, 하우스 클리닝, 종합 수리 서비스를 제공합니다." />
        <meta name="keywords" content="sua trua saigon, 수리 서비스, 호치민, 에어컨 청소, 배관 수리, 전기 수리, 페인트 도장, 하우스 클리닝" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://suatruasaigon.vn" />
        <meta property="og:title" content="Sua Trua Saigon - 전문 수리 및 정비 서비스" />
        <meta property="og:description" content="호치민 지역 전문 수리 및 정비 서비스 플랫폼" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://suatruasaigon.vn" />
        <meta property="og:image" content="https://suatruasaigon.vn/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <ScrollAnimations />
      {/* Header - Exact Thumbtack Style */}
      <header style={{ 
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #dee2e6',
        boxSizing: 'border-box'
      }}>
        <div style={{ 
          width: '100%',
          padding: '0 16px'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '64px',
            width: '100%'
          }}>
            {/* Left: Logo */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img 
                  src="/scsg-blue.jpg" 
                  alt="Sua Trua Saigon Logo"
                  className="logo-header"
                  style={{
                    marginRight: '12px'
                  }}
                />
                <span style={{
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#2f3033',
                  fontFamily: 'Rise, Avenir, Helvetica, Arial, sans-serif'
                }}>Sua Trua Saigon</span>
                <sup style={{
                  fontSize: '12px',
                  color: '#6c757d',
                  marginLeft: '4px'
                }}>®</sup>
              </div>
            </div>
            
            {/* Right: Hamburger Menu */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="메뉴 토글"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Hero Section - Thumbtack Style */}
      <main className="relative">
        <div className="relative bg-white overflow-hidden">
          {/* Background Image - Half Round City View */}
          <div className="absolute inset-0">
            <img
              src="/half-round.png"
              alt="Aerial city view - Home service coverage area"
              className="w-full h-full object-cover"
              loading="eager"
              style={{
                display: 'none'
              }}
            />
            
            {/* Light overlay for text readability only */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'rgba(255, 255, 255, 0.1)'
            }}></div>
          </div>

          {/* Hero Content - Thumbtack Structure */}
          <div className="relative px-6 sm:px-8 lg:px-12 mx-auto flex flex-col items-center max-w-5xl min-h-screen" style={{ paddingTop: '30px' }}>
            
            {/* Company Logo - Clean & Simple */}
            <div className="flex justify-center mb-3">
              <img 
                src="/scsg-blue.jpg" 
                alt="Sua Trua Saigon Logo"
                className="logo-hero-simple"
              />
            </div>

            {/* Text Carousel Hero Title - Thumbtack Style */}
            <div className="text-center w-full mb-4" style={{ maxWidth: 'none' }}>
              <h1 className="text-[3.8rem] sm:text-[4.5rem] md:text-[5.1rem] font-bold text-gray-900 leading-[1.1] tracking-tight" style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 700,
                letterSpacing: '-0.025em'
              }}>
                <div className="text-carousel">
                  <ul className="carousel-scroll">
                    <li>Home improvement,</li>
                    <li>Home repair,</li>
                    <li>Home inspection,</li>
                    <li>Home cleaning,</li>
                    <li>Home improvement,</li>
                  </ul>
                </div>
                <span className="block">made easy.</span>
              </h1>
            </div>

            {/* Thumbtack-style Search Bar */}
            <div className="w-3/5 max-w-md">
              <div className="thumbtack-search-wrapper">
                <div className="thumbtack-search-bar">
                  {/* Main Search Input */}
                  <div className="search-input-section">
                    <input
                      aria-label="Search on Sua Trua Saigon"
                      role="combobox"
                      aria-controls="search-dropdown"
                      aria-expanded="false"
                      className="search-main-input"
                      data-test="search-input"
                      placeholder="Describe your project or problem — be as detailed as you'd like."
                      defaultValue=""
                    />
                    <div className="search-dropdown-wrapper">
                      <ol
                        tabIndex={-1}
                        className="search-dropdown"
                        data-test="api-search-dropdown"
                        id="search-dropdown"
                        role="listbox"
                      ></ol>
                    </div>
                  </div>

                  {/* Zip Code Section */}
                  <div className="zip-code-section">
                    <div className="map-pin-icon">
                      <svg
                        className="pin-icon"
                        height="18"
                        width="18"
                        fill="currentColor"
                        viewBox="0 0 18 18"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M3.002 7.25c0 3.248 4.342 7.756 5.23 8.825l.769.925.769-.926c.888-1.068 5.234-5.553 5.234-8.824C15.004 4.145 13 1 9.001 1c-3.999 0-6 3.145-6 6.25zm1.994 0C4.995 5.135 6.175 3 9 3s4.002 2.135 4.002 4.25c0 1.777-2.177 4.248-4.002 6.59C7.1 11.4 4.996 9.021 4.996 7.25zM8.909 5.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5z"></path>
                      </svg>
                    </div>
                    <input
                      name="address"
                      aria-label="Address"
                      className="zip-code-input"
                      placeholder="Enter your address"
                      autoComplete="address-line1"
                      defaultValue=""
                    />
                  </div>
                </div>

                {/* Search Button */}
                <button className="thumbtack-search-button btn-hover-lift">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  {content.hero.searchButton}
                </button>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="text-center text-gray-600 animate-fade-in-up delay-400" style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              <p className="text-sm font-normal mb-1" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                <span style={{ fontWeight: 700 }}>전국에서 완료된 프로젝트 9천만 건 이상</span>
              </p>
              <p className="text-sm font-normal" style={{ fontSize: '14px', lineHeight: '1.4' }}>
                <span style={{ fontWeight: 400 }}>지원: </span>
                <span style={{ fontWeight: 700 }}>Sua Trua Saigon 보장제도</span>
              </p>
            </div>

            {/* Semi Circle Hero Image - Thumbtack Style */}
            <div style={{ marginTop: '60px' }} className="flex justify-center">
              <div style={{ width: '600px', height: '300px', overflow: 'hidden', borderRadius: '300px 300px 0 0' }}>
                <img
                  src="/half-round.jpg?v=1"
                  alt="Aerial city view - Home service coverage area"
                  style={{ 
                    width: '600px', 
                    height: '600px', 
                    objectFit: 'cover',
                    objectPosition: 'center center',
                    filter: 'brightness(1.1) contrast(1.05)'
                  }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Estimate Calculator Section */}
        <section className="fade-in-section" style={{ 
          padding: '40px 0 80px 0',
          backgroundColor: '#ffffff'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px'
          }}>
            <div style={{ paddingBottom: '24px', margin: '0' }}>
              <h2 className="text-3xl font-semibold mb-3" style={{ 
                color: '#2f3033',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                전문 <span style={{ color: '#1ba3d1' }}>보수 서비스</span> 견적
              </h2>
              <p className="text-base text-gray-600 mb-6" style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                전문 기술자가 직접 수행하는 보수 서비스의 예상 비용을 확인해보세요
              </p>
              
              {/* Category Tabs - Thumbtack Style */}
              <div role="tablist" className="border-b border-gray-300 mb-6" style={{
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
              }}>
                <div className="flex flex-row overflow-x-auto pro-category-tabs">
                  <button
                    role="tab"
                    type="button"
                    aria-selected={activeCategory === 'all'}
                    className={`tp-button-reset pro-category-tab ${activeCategory === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveCategory('all')}
                    style={{
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0',
                      minWidth: '80px'
                    }}
                  >
                    <div className="flex flex-column items-center justify-center row-gap2 pv3" style={{
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '12px'
                    }}>
                      <svg role="presentation" height="18" width="18" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"/>
                      </svg>
                      <div style={{ fontSize: '14px', fontWeight: '400', color: 'inherit' }}>
                        <span style={{ fontStyle: 'normal' }}>모든 서비스</span>
                      </div>
                    </div>
                  </button>
                  
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      role="tab"
                      type="button"
                      aria-selected={activeCategory === category.id}
                      className={`tp-button-reset pro-category-tab ${activeCategory === category.id ? 'active' : ''}`}
                      onClick={() => setActiveCategory(category.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '0',
                        minWidth: '80px'
                      }}
                    >
                      <div className="flex flex-column items-center justify-center row-gap2 pv3" style={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        padding: '12px'
                      }}>
                        {category.svg}
                        <div style={{ fontSize: '14px', fontWeight: '400', color: 'inherit' }}>
                          <span style={{ fontStyle: 'normal' }}>{category.nameKo}</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Service Calculator Grid */}
              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {filteredServices.map((service, index) => (
                  <div key={service.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-all duration-300" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}>
                    <div className="flex items-center mb-4">
                      <span className="text-2xl mr-3">{service.icon}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">기본 가격: {service.price.toLocaleString()}원/{service.unit}</p>
                      <div className="flex items-center gap-3">
                        <label className="text-sm font-medium text-gray-700">수량:</label>
                        <div className="flex items-center border border-gray-300 rounded">
                          <button 
                            className="px-3 py-1 hover:bg-gray-100 transition-colors" 
                            style={{ color: '#1ba3d1' }}
                            onClick={() => updateQuantity(service.id, -1)}
                          >-</button>
                          <input 
                            type="number" 
                            value={quantities[service.id]} 
                            min="1" 
                            className="w-16 text-center py-1 border-0 outline-none" 
                            onChange={(e) => setQuantity(service.id, parseInt(e.target.value) || 1)}
                          />
                          <button 
                            className="px-3 py-1 hover:bg-gray-100 transition-colors" 
                            style={{ color: '#1ba3d1' }}
                            onClick={() => updateQuantity(service.id, 1)}
                          >+</button>
                        </div>
                      </div>
                    </div>
                    <div className="border-t pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">소계:</span>
                        <span className="text-lg font-bold transition-all duration-300" style={{ color: '#1ba3d1' }}>
                          {(service.price * quantities[service.id]).toLocaleString()}원
                        </span>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-500 text-lg mb-2">
                    선택된 카테고리에 해당하는 서비스가 없습니다.
                  </div>
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className="text-blue-500 hover:text-blue-700 font-medium"
                  >
                    모든 서비스 보기
                  </button>
                </div>
              )}

              {/* Total Estimate */}
              <div className="bg-gray-50 rounded-lg p-6 border-2" style={{ borderColor: '#1ba3d1' }}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900" style={{
                    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                  }}>총 예상 견적</h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold transition-all duration-300" style={{ color: '#1ba3d1' }}>
                      {totalEstimate.toLocaleString()}원
                    </div>
                    <p className="text-sm text-gray-600">* 실제 견적은 현장 확인 후 달라질 수 있습니다</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleDownloadEstimate}
                    className="flex-1 bg-white border-2 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors" 
                    style={{
                      borderColor: '#1ba3d1',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  >
                    견적서 다운로드
                  </button>
                  <button 
                    onClick={handleConsultation}
                    className="flex-1 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors" 
                    style={{
                      backgroundColor: '#1ba3d1',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}
                  >
                    전문가와 상담하기
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Project Showcase Section - Professional Portfolio Style */}
        <section className="fade-in-section" style={{ 
          padding: '80px 0',
          backgroundColor: '#f8f9fa'
        }}>
          <div style={{ 
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 16px'
          }}>
            <h2 style={{
              fontSize: '32px',
              fontWeight: '600',
              color: '#2f3033',
              textAlign: 'center',
              marginBottom: '16px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              시공 사례
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#6c757d',
              textAlign: 'center',
              marginBottom: '48px',
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
            }}>
              Sua Trua Saigon이 완성한 다양한 프로젝트를 확인해보세요
            </p>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '60px'
            }}>
              {[
                { 
                  title: '고급 아파트 에어컨 깊은 청소', 
                  location: '호치민시 1군',
                  duration: '2024.08',
                  description: '32평 아파트 전체 에어컨(3대) 분해청소 및 살균 완료',
                  beforeAfter: 'Deep Clean',
                  rating: 5,
                  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: '에어컨 청소'
                },
                { 
                  title: '주방 수도배관 누수 긴급수리', 
                  location: '호치민시 3군',
                  duration: '2024.08',
                  description: '싱크대 하부 배관 누수 완전수리, 배관 전체 점검 및 교체',
                  beforeAfter: 'Emergency Fix',
                  rating: 5,
                  image: 'https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: '배관 보수'
                },
                { 
                  title: '오피스텔 전기 콘센트 업그레이드', 
                  location: '호치민시 7군',
                  duration: '2024.07',
                  description: '안전 콘센트 교체 및 전기 배선 정리 작업',
                  beforeAfter: 'Safety Upgrade',
                  rating: 5,
                  image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: '전기 보수'
                },
                { 
                  title: '화장실 누수점검 및 완전수리', 
                  location: '호치민시 비인탄군',
                  duration: '2024.08',
                  description: '화장실 바닥 누수 정밀 점검 후 방수공사 완료',
                  beforeAfter: 'Waterproof',
                  rating: 5,
                  image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: '누수점검 및 보수'
                },
                { 
                  title: '거실 타일 교체 및 벽면 도색', 
                  location: '호치민시 2군',
                  duration: '2024.07',
                  description: '120m² 거실 타일 전체 교체 및 벽면 프리미엄 도색 시공',
                  beforeAfter: 'Complete Makeover',
                  rating: 5,
                  image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: '타일 및 도색 공사'
                },
                { 
                  title: '카페 인테리어 종합 리모델링', 
                  location: '호치민시 1군',
                  duration: '2024.03',
                  description: '60m² 카페 공간 가구, 조명, 인테리어 전체 시공',
                  beforeAfter: 'Full Renovation',
                  rating: 5,
                  image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
                  category: '종합 수리'
                }
              ].map((project, index) => (
                <div 
                  key={index}
                  className={`card-hover animate-scale-in delay-${(index + 1) * 100}`}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #dee2e6',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div style={{
                    height: '220px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(0, 0, 0, 0.7)',
                      color: '#ffffff',
                      padding: '4px 8px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {project.category}
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '12px',
                      right: '12px',
                      backgroundColor: '#1ba3d1',
                      color: '#ffffff',
                      padding: '6px 12px',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '600'
                    }}>
                      {project.beforeAfter}
                    </div>
                  </div>
                  
                  <div style={{ padding: '20px' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      color: '#2f3033',
                      marginBottom: '8px',
                      lineHeight: '1.3',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                    }}>
                      {project.title}
                    </h3>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '8px'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: '13px',
                        color: '#6c757d'
                      }}>
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" style={{ marginRight: '4px' }}>
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                          <circle cx="12" cy="9" r="2.5"/>
                        </svg>
                        {project.location}
                      </div>
                      <div style={{
                        fontSize: '13px',
                        color: '#6c757d'
                      }}>
                        {project.duration}
                      </div>
                    </div>
                    
                    <p style={{
                      fontSize: '14px',
                      color: '#6c757d',
                      lineHeight: '1.4',
                      marginBottom: '12px'
                    }}>
                      {project.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}>
                        {[...Array(project.rating)].map((_, i) => (
                          <svg key={i} width="16" height="16" fill="#fbbf24" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                        <span style={{
                          fontSize: '13px',
                          color: '#6c757d',
                          marginLeft: '6px'
                        }}>
                          완료 프로젝트
                        </span>
                      </div>
                      <button style={{
                        backgroundColor: 'transparent',
                        color: '#1ba3d1',
                        border: '1px solid #1ba3d1',
                        borderRadius: '6px',
                        padding: '6px 12px',
                        fontSize: '13px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}
                        className="btn-hover-lift"
                        aria-label={`${project.title} 자세히 보기`}>
                        자세히 보기
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Stats */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '60px',
              padding: '40px 0',
              borderTop: '1px solid #dee2e6',
              borderBottom: '1px solid #dee2e6',
              margin: '60px 0'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#1ba3d1',
                  marginBottom: '8px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                  2,500+
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#6c757d',
                  fontWeight: '500',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                  완료된 시공사례
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#1ba3d1',
                  marginBottom: '8px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                  100%
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#6c757d',
                  fontWeight: '500',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                  고객 만족도
                </div>
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <div style={{ 
                  fontSize: '32px', 
                  fontWeight: '700', 
                  color: '#1ba3d1',
                  marginBottom: '8px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                  24h
                </div>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#6c757d',
                  fontWeight: '500',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}>
                  긴급 대응 시간
                </div>
              </div>
            </div>
            
            {/* Call to Action for Portfolio */}
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <button style={{
                backgroundColor: '#1ba3d1',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '14px 32px',
                fontSize: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                boxShadow: '0 2px 4px rgba(27, 163, 209, 0.3)'
              }}
                className="btn-hover-lift"
                aria-label="더 많은 시공사례 보기">
                더 많은 시공사례 보기
              </button>
            </div>
            
            {/* Contact Section */}
            <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">빠른 연락처</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Emergency Phone */}
                <a 
                  href="tel:+841234567890"
                  className="flex flex-col items-center p-6 border-2 border-red-200 rounded-lg hover:border-red-300 hover:bg-red-50 transition-colors group"
                >
                  <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    📞
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 group-hover:text-red-700 mb-2">긴급 상황</div>
                    <div className="text-red-600 font-bold text-lg mb-1">+84 123 456 7890</div>
                    <div className="text-sm text-gray-500">24시간 즉시 연결</div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a 
                  href="https://wa.me/841234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center p-6 border-2 border-green-200 rounded-lg hover:border-green-300 hover:bg-green-50 transition-colors group"
                >
                  <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                    💬
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 group-hover:text-green-700 mb-2">WhatsApp</div>
                    <div className="text-green-600 font-bold text-lg mb-1">빠른 메시지</div>
                    <div className="text-sm text-gray-500">사진 전송 가능</div>
                  </div>
                </a>

                {/* Zalo */}
                <a 
                  href="#"
                  className="flex flex-col items-center p-6 border-2 border-blue-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 group-hover:scale-110 transition-transform">
                    Z
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-gray-900 group-hover:text-blue-700 mb-2">Zalo</div>
                    <div className="text-blue-600 font-bold text-lg mb-1">채팅 상담</div>
                    <div className="text-sm text-gray-500">베트남 현지 메신저</div>
                  </div>
                </a>
                
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm mb-4">
                  🏆 전문가 직접 상담 • 💰 무료 견적 • 🛡️ 라이센스 & 보험 보장
                </p>
                <a 
                  href="/ko/contact"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  📋 온라인 문의하기
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Half-Round Background */}
        <section className="relative py-16 md:py-24 overflow-hidden fade-in-section">
          {/* Half-Round Background Image */}
          <div className="absolute inset-0">
            <img
              src="/half-round.jpg"
              alt="Ho Chi Minh City service area"
              className="w-full h-full object-cover object-center"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            
            {/* Dark overlay for text contrast */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.85) 0%, rgba(37, 99, 235, 0.8) 50%, rgba(29, 78, 216, 0.85) 100%)'
            }}></div>
          </div>

          {/* Contact Content */}
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                24시간 언제든지 연락하세요
              </h2>
              <p className="text-lg text-blue-100 mb-12">
                호치민시 전 지역 신속한 응답, 전문가가 직접 상담해드립니다
              </p>
            </div>
            
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              
              {/* Phone */}
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-30 transition-all btn-hover-lift">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-white font-semibold mb-2">긴급 상황</h3>
                <a href="tel:+841234567890" className="text-blue-100 hover:text-white transition-colors text-lg font-medium">
                  +84 123 456 7890
                </a>
                <p className="text-blue-200 text-sm mt-1">즉시 통화 연결</p>
              </div>

              {/* WhatsApp */}
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-100 transition-all btn-hover-lift">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <a href="https://wa.me/841234567890" className="text-blue-100 hover:text-white transition-colors text-lg font-medium">
                  빠른 상담
                </a>
                <p className="text-blue-200 text-sm mt-1">메시지로 편리하게</p>
              </div>

              {/* Zalo */}
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-400 bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-100 transition-all btn-hover-lift">
                  <span className="text-white text-2xl font-bold">Z</span>
                </div>
                <h3 className="text-white font-semibold mb-2">Zalo</h3>
                <a href="#" className="text-blue-100 hover:text-white transition-colors text-lg font-medium">
                  채팅 문의
                </a>
                <p className="text-blue-200 text-sm mt-1">베트남 현지 메신저</p>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-600 bg-opacity-90 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-opacity-100 transition-all btn-hover-lift">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="text-white font-semibold mb-2">이메일</h3>
                <a href="mailto:info@suatruasaigon.vn" className="text-blue-100 hover:text-white transition-colors text-lg font-medium">
                  정식 견적
                </a>
                <p className="text-blue-200 text-sm mt-1">상세 견적서 발송</p>
              </div>
            </div>

            {/* Service Areas & Hours */}
            <div className="text-center">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 inline-block">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  <div className="flex items-center text-white">
                    <span className="mr-3 text-xl">📍</span>
                    <div>
                      <p className="font-semibold">서비스 지역</p>
                      <p className="text-blue-100">호치민시 전 지역</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <span className="mr-3 text-xl">⏰</span>
                    <div>
                      <p className="font-semibold">운영 시간</p>
                      <p className="text-blue-100">24시간 응급서비스</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <span className="mr-3 text-xl">🛡️</span>
                    <div>
                      <p className="font-semibold">보장</p>
                      <p className="text-blue-100">라이센스 & 보험</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Simple Clean Footer */}
          <div className="text-center py-8">
            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">서비스 소개</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">이용약관</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">개인정보처리방침</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">고객지원</a>
            </div>

            {/* Social Media */}
            <div className="flex justify-center space-x-4 mb-6">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <svg aria-label="Facebook" height="20" width="20" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 7h3v3h-3v7H8v-7H5V7h3V5.745c0-1.189.374-2.691 1.118-3.512C9.862 1.41 10.791 1 11.904 1H14v3h-2.1c-.498 0-.9.402-.9.899V7z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-pink-600 transition-colors">
                <svg aria-label="Instagram" height="20" width="20" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.908 1A3.096 3.096 0 0117 4.092v9.816a3.095 3.095 0 01-3.092 3.09H4.092A3.094 3.094 0 011 13.909V4.092A3.095 3.095 0 014.092 1h9.816zM5.215 7.549H2.94v5.963c0 .77.654 1.395 1.459 1.395h9.346c.804 0 1.459-.626 1.459-1.395V7.55H12.93c.197.462.308.966.308 1.495 0 2.195-1.868 3.982-4.165 3.982-2.297 0-4.164-1.787-4.164-3.982 0-.53.11-1.033.306-1.495zm3.857-1.226c-.818 0-1.542.405-1.988 1.022a2.435 2.435 0 00-.464 1.43c0 1.353 1.1 2.453 2.452 2.453 1.353 0 2.454-1.1 2.454-2.452 0-.534-.174-1.028-.465-1.43a2.45 2.45 0 00-1.989-1.023zm6.133-3.68l-.32.002-2.133.007.008 2.444 2.445-.008V2.644z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-red-600 transition-colors">
                <svg aria-label="YouTube" height="20" width="20" fill="currentColor" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 4.5c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-9zM7 12V6l5 3-5 3z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-500">
                © 2024 Sua Trua Saigon. 모든 권리 보유 | 
                <span className="ml-2">호치민시 전문 홈서비스</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}