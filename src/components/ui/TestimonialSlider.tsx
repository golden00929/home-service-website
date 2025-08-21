'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

interface Testimonial {
  id: string;
  name: string;
  service: string;
  rating: number;
  text: string;
  date: string;
  locale: string;
  location: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Minh Nguyen',
    service: 'Air Conditioner Cleaning',
    rating: 5,
    text: 'Excellent service! The technician was very professional and thorough. My AC is working much better now and the air quality has improved significantly.',
    date: '2024-01-15',
    locale: 'en',
    location: 'District 1, HCMC',
    avatar: '👨‍💼'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    service: 'Plumbing Repair',
    rating: 5,
    text: 'Fast and reliable plumbing service! They fixed our kitchen sink leak quickly and at a very reasonable price. Highly recommend their emergency service.',
    date: '2024-01-12',
    locale: 'en',
    location: 'District 2, HCMC',
    avatar: '👩‍🦳'
  },
  {
    id: '3',
    name: 'Trần Văn Đức',
    service: 'Vệ sinh điều hòa',
    rating: 5,
    text: 'Dịch vụ rất tốt! Thợ làm việc chuyên nghiệp, nhanh chóng và giá cả hợp lý. Điều hòa của tôi hoạt động mát hơn và tiết kiệm điện hơn rất nhiều.',
    date: '2024-01-10',
    locale: 'vi',
    location: 'Quận 7, TP.HCM',
    avatar: '👨‍🔧'
  },
  {
    id: '4',
    name: 'Lê Thị Mai',
    service: 'Sửa chữa điện',
    rating: 4,
    text: 'Thợ điện đến rất nhanh và sửa xong trong 2 tiếng. Giá cả minh bạch, không phát sinh chi phí. Tôi sẽ gọi lại khi cần.',
    date: '2024-01-08',
    locale: 'vi',
    location: 'Quận 3, TP.HCM',
    avatar: '👩‍💻'
  },
  {
    id: '5',
    name: '김민수',
    service: '에어컨 청소',
    rating: 5,
    text: '정말 깔끔하고 전문적인 서비스였습니다. 가격도 합리적이고 직원분들도 친절해서 다음에도 꼭 이용할 예정입니다.',
    date: '2024-01-06',
    locale: 'ko',
    location: '1군, 호치민',
    avatar: '👨‍💼'
  },
  {
    id: '6',
    name: '박지영',
    service: '배관 수리',
    rating: 5,
    text: '응급 상황에서 빠르게 대응해주셔서 감사합니다. 24시간 서비스가 정말 도움이 되었어요. 기술도 확실하고 믿을 만합니다.',
    date: '2024-01-04',
    locale: 'ko',
    location: '2군, 호치민',
    avatar: '👩‍🎓'
  },
  {
    id: '7',
    name: '田中太郎',
    service: 'エアコンクリーニング',
    rating: 5,
    text: '作業が丁寧で、説明も分かりやすく、料金も適正でした。アフターサービスもしっかりしていて、安心してお任せできます。',
    date: '2024-01-02',
    locale: 'ja',
    location: '1区、ホーチミン',
    avatar: '👨‍💼'
  },
  {
    id: '8',
    name: '佐藤花子',
    service: '電気修理',
    rating: 4,
    text: '迅速な対応でした。技術者の方がとても親切で、作業後の掃除もきちんとしてくださいました。また利用したいと思います。',
    date: '2023-12-30',
    locale: 'ja',
    location: '7区、ホーチミン',
    avatar: '👩‍🍳'
  },
  {
    id: '9',
    name: '李小明',
    service: '空调清洁',
    rating: 5,
    text: '服务非常专业，价格合理。工作人员很有礼貌，清洁得很彻底。现在空调制冷效果比以前好很多，强烈推荐！',
    date: '2023-12-28',
    locale: 'zh',
    location: '第1郡，胡志明市',
    avatar: '👨‍🔬'
  },
  {
    id: '10',
    name: '王美丽',
    service: '管道维修',
    rating: 5,
    text: '24小时紧急服务真的很好用！半夜漏水立刻就有师傅来修，技术过硬，收费透明。非常感谢！',
    date: '2023-12-26',
    locale: 'zh',
    location: '第3郡，胡志明市',
    avatar: '👩‍⚕️'
  }
];

export default function TestimonialSlider() {
  const locale = useLocale();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([]);

  // Filter testimonials by current locale and fallback to English
  useEffect(() => {
    const localeTestimonials = testimonials.filter(t => t.locale === locale);
    const englishTestimonials = testimonials.filter(t => t.locale === 'en');
    
    // Show locale testimonials first, then English if not enough
    const combined = [...localeTestimonials, ...englishTestimonials];
    const unique = combined.filter((item, index, self) => 
      index === self.findIndex(t => t.id === item.id)
    );
    
    setFilteredTestimonials(unique.slice(0, 6)); // Show max 6 testimonials
  }, [locale]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || filteredTestimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => 
        prev === filteredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, filteredTestimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? filteredTestimonials.length - 1 : currentIndex - 1);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === filteredTestimonials.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  if (filteredTestimonials.length === 0) {
    return null;
  }

  const currentTestimonial = filteredTestimonials[currentIndex];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-gray-800">💬 Customer Reviews</h3>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`px-3 py-1 text-sm rounded-full ${
              isAutoPlay ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {isAutoPlay ? '⏸️ Pause' : '▶️ Play'}
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* Main testimonial */}
        <div className="transition-all duration-500 ease-in-out">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border-l-4 border-blue-500">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-2xl">
                  {currentTestimonial.avatar}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{currentTestimonial.name}</h4>
                    <p className="text-sm text-gray-600">{currentTestimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end mb-1">
                      {renderStars(currentTestimonial.rating)}
                    </div>
                    <p className="text-xs text-gray-500">
                      {new Date(currentTestimonial.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {currentTestimonial.service}
                  </span>
                </div>
                
                <blockquote className="text-gray-700 italic">
                  "{currentTestimonial.text}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute top-1/2 -translate-y-1/2 left-2">
          <button
            onClick={goToPrevious}
            className="w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-md transition-all"
          >
            ←
          </button>
        </div>
        
        <div className="absolute top-1/2 -translate-y-1/2 right-2">
          <button
            onClick={goToNext}
            className="w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center shadow-md transition-all"
          >
            →
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {filteredTestimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Summary stats */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              {Math.round(filteredTestimonials.reduce((acc, t) => acc + t.rating, 0) / filteredTestimonials.length * 10) / 10}
            </p>
            <p className="text-sm text-gray-600">Average Rating</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-green-600">{filteredTestimonials.length}+</p>
            <p className="text-sm text-gray-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-purple-600">100%</p>
            <p className="text-sm text-gray-600">Satisfaction</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6">
        <a
          href="/contact"
          className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-3 px-4 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold"
        >
          Join Our Happy Customers
        </a>
      </div>
    </div>
  );
}