'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

interface BusinessHours {
  [key: string]: {
    open: string;
    close: string;
    isOpen: boolean;
  };
}

interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
  locale: string;
}

const businessHours: BusinessHours = {
  monday: { open: '08:00', close: '20:00', isOpen: true },
  tuesday: { open: '08:00', close: '20:00', isOpen: true },
  wednesday: { open: '08:00', close: '20:00', isOpen: true },
  thursday: { open: '08:00', close: '20:00', isOpen: true },
  friday: { open: '08:00', close: '20:00', isOpen: true },
  saturday: { open: '08:00', close: '18:00', isOpen: true },
  sunday: { open: '08:00', close: '18:00', isOpen: true }
};

// Mock reviews data - in production, fetch from Google My Business API
const mockReviews: Review[] = [
  {
    id: '1',
    author: 'Minh Nguyen',
    rating: 5,
    text: 'Excellent air conditioning cleaning service! Very professional and thorough.',
    date: '2024-01-15',
    locale: 'en'
  },
  {
    id: '2',
    author: 'Sarah Johnson',
    rating: 5,
    text: 'Fixed our plumbing issue quickly and at a fair price. Highly recommend!',
    date: '2024-01-10',
    locale: 'en'
  },
  {
    id: '3',
    author: 'Trần Văn Đức',
    rating: 5,
    text: 'Dịch vụ tốt, thợ làm việc chuyên nghiệp và nhanh chóng.',
    date: '2024-01-08',
    locale: 'vi'
  },
  {
    id: '4',
    author: '김민수',
    rating: 4,
    text: '에어컨 청소 서비스가 아주 좋았습니다. 추천합니다!',
    date: '2024-01-05',
    locale: 'ko'
  },
  {
    id: '5',
    author: '田中太郎',
    rating: 5,
    text: '迅速で丁寧な対応でした。料金も適正だと思います。',
    date: '2024-01-03',
    locale: 'ja'
  },
  {
    id: '6',
    author: '李小明',
    rating: 5,
    text: '服务很专业，价格合理，强烈推荐！',
    date: '2024-01-01',
    locale: 'zh'
  }
];

export default function GoogleMyBusinessWidget() {
  const t = useTranslations();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [todayHours, setTodayHours] = useState<{ open: string; close: string } | null>(null);
  const [reviews, setReviews] = useState<Review[]>(mockReviews);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
      const dayName = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'][now.getDay()];
      
      const hoursToday = businessHours[dayName];
      setTodayHours(hoursToday);

      if (hoursToday && hoursToday.isOpen) {
        const currentTime = now.getHours() * 100 + now.getMinutes();
        const openTime = parseInt(hoursToday.open.replace(':', ''));
        const closeTime = parseInt(hoursToday.close.replace(':', ''));
        
        setIsBusinessOpen(currentTime >= openTime && currentTime <= closeTime);
      } else {
        setIsBusinessOpen(false);
      }
    };

    checkBusinessHours();
  }, [currentTime]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      {/* Business Status */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Home Services HCM</h3>
          <div className="flex items-center mt-2">
            <div className={`w-3 h-3 rounded-full mr-2 ${isBusinessOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className={`font-medium ${isBusinessOpen ? 'text-green-600' : 'text-red-600'}`}>
              {isBusinessOpen ? 'Open Now' : 'Closed'}
            </span>
            {todayHours && (
              <span className="text-gray-600 ml-2">
                • {todayHours.open} - {todayHours.close}
              </span>
            )}
          </div>
        </div>
        
        {/* Rating */}
        <div className="text-right">
          <div className="flex items-center justify-end mb-1">
            {renderStars(Math.round(averageRating))}
            <span className="ml-2 text-lg font-bold text-gray-800">
              {averageRating.toFixed(1)}
            </span>
          </div>
          <p className="text-sm text-gray-600">{reviews.length} reviews</p>
        </div>
      </div>

      {/* Emergency Service Banner */}
      {!isBusinessOpen && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <span className="text-red-500 text-xl mr-3">🚨</span>
            <div>
              <p className="text-red-800 font-semibold">24/7 Emergency Service Available</p>
              <p className="text-red-600 text-sm">Call us for urgent repairs anytime</p>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="flex items-center">
          <span className="text-blue-600 text-xl mr-3">📞</span>
          <div>
            <p className="font-medium">Phone</p>
            <a href="tel:+84XXXXXXXXX" className="text-blue-600 hover:text-blue-700">
              +84 XXX XXX XXX
            </a>
          </div>
        </div>
        
        <div className="flex items-center">
          <span className="text-green-600 text-xl mr-3">📍</span>
          <div>
            <p className="font-medium">Address</p>
            <p className="text-gray-600 text-sm">Ho Chi Minh City, Vietnam</p>
          </div>
        </div>
      </div>

      {/* Business Hours */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Business Hours</h4>
        <div className="space-y-2 text-sm">
          {Object.entries(businessHours).map(([day, hours]) => (
            <div key={day} className="flex justify-between">
              <span className="capitalize text-gray-600">{day}</span>
              <span className="text-gray-800">
                {hours.isOpen ? `${hours.open} - ${hours.close}` : 'Closed'}
              </span>
            </div>
          ))}
        </div>
        <p className="text-xs text-red-600 mt-2">* Emergency services available 24/7</p>
      </div>

      {/* Recent Reviews */}
      <div>
        <h4 className="font-semibold text-gray-800 mb-3">Recent Reviews</h4>
        <div className="space-y-4 max-h-80 overflow-y-auto">
          {reviews.slice(0, 3).map((review) => (
            <div key={review.id} className="border-l-4 border-blue-200 pl-4">
              <div className="flex items-center justify-between mb-1">
                <span className="font-medium text-gray-800">{review.author}</span>
                <div className="flex items-center">
                  {renderStars(review.rating)}
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{review.text}</p>
              <p className="text-xs text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
        
        <a
          href="https://www.google.com/maps/place/YOUR_GOOGLE_MY_BUSINESS_URL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-blue-600 hover:text-blue-700 text-sm font-medium"
        >
          View all reviews on Google →
        </a>
      </div>

      {/* CTA Buttons */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="tel:+84XXXXXXXXX"
            className="flex-1 bg-blue-600 text-white text-center py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            📞 Call Now
          </a>
          <a
            href="/contact"
            className="flex-1 border border-blue-600 text-blue-600 text-center py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
          >
            📝 Get Quote
          </a>
        </div>
      </div>
    </div>
  );
}