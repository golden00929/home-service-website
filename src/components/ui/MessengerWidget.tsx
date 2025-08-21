'use client';

import { useState, useEffect } from 'react';
import { useLocale } from 'next-intl';

interface MessengerPlatform {
  name: string;
  icon: string;
  url: string;
  bgColor: string;
  hoverColor: string;
  priority: number;
}

const messengerPlatforms: Record<string, MessengerPlatform[]> = {
  // English - WhatsApp, Telegram priority
  en: [
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/84XXXXXXXXX',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      priority: 1
    },
    {
      name: 'Telegram',
      icon: '✈️',
      url: 'https://t.me/yourusername',
      bgColor: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      priority: 2
    },
    {
      name: 'Phone',
      icon: '📞',
      url: 'tel:+84XXXXXXXXX',
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      priority: 3
    }
  ],
  // Vietnamese - Zalo, WhatsApp priority
  vi: [
    {
      name: 'Zalo',
      icon: '🗨️',
      url: 'https://zalo.me/YOUR_ZALO_ID',
      bgColor: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700',
      priority: 1
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/84XXXXXXXXX',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      priority: 2
    },
    {
      name: 'Phone',
      icon: '📞',
      url: 'tel:+84XXXXXXXXX',
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      priority: 3
    }
  ],
  // Korean - KakaoTalk, WhatsApp priority
  ko: [
    {
      name: 'KakaoTalk',
      icon: '💛',
      url: 'https://open.kakao.com/YOUR_KAKAO_LINK',
      bgColor: 'bg-yellow-500',
      hoverColor: 'hover:bg-yellow-600',
      priority: 1
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/84XXXXXXXXX',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      priority: 2
    },
    {
      name: 'Phone',
      icon: '📞',
      url: 'tel:+84XXXXXXXXX',
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      priority: 3
    }
  ],
  // Japanese - LINE, WhatsApp priority
  ja: [
    {
      name: 'LINE',
      icon: '💚',
      url: 'https://line.me/ti/p/YOUR_LINE_ID',
      bgColor: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      priority: 1
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/84XXXXXXXXX',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      priority: 2
    },
    {
      name: 'Phone',
      icon: '📞',
      url: 'tel:+84XXXXXXXXX',
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      priority: 3
    }
  ],
  // Chinese - WeChat, WhatsApp priority
  zh: [
    {
      name: 'WeChat',
      icon: '🟢',
      url: 'weixin://YOUR_WECHAT_ID',
      bgColor: 'bg-green-700',
      hoverColor: 'hover:bg-green-800',
      priority: 1
    },
    {
      name: 'WhatsApp',
      icon: '💬',
      url: 'https://wa.me/84XXXXXXXXX',
      bgColor: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      priority: 2
    },
    {
      name: 'Phone',
      icon: '📞',
      url: 'tel:+84XXXXXXXXX',
      bgColor: 'bg-gray-600',
      hoverColor: 'hover:bg-gray-700',
      priority: 3
    }
  ]
};

export default function MessengerWidget() {
  const locale = useLocale();
  const [isExpanded, setIsExpanded] = useState(false);
  const [userCountry, setUserCountry] = useState<string>('');
  const [platforms, setPlatforms] = useState<MessengerPlatform[]>([]);

  useEffect(() => {
    // Get user's country from various sources
    const detectUserCountry = async () => {
      try {
        // Try to get country from IP geolocation API
        const response = await fetch('https://ipapi.co/country_code/');
        const countryCode = await response.text();
        setUserCountry(countryCode.trim().toLowerCase());
      } catch (error) {
        // Fallback: use navigator language
        const language = navigator.language.toLowerCase();
        if (language.includes('ko')) setUserCountry('kr');
        else if (language.includes('ja')) setUserCountry('jp');
        else if (language.includes('zh')) setUserCountry('cn');
        else if (language.includes('vi')) setUserCountry('vn');
        else setUserCountry('us');
      }
    };

    detectUserCountry();
  }, []);

  useEffect(() => {
    // Set messenger platforms based on locale and country
    let selectedPlatforms = messengerPlatforms[locale] || messengerPlatforms['en'];
    
    // Override based on detected country if different from locale
    if (userCountry === 'kr' && locale !== 'ko') {
      selectedPlatforms = messengerPlatforms['ko'];
    } else if (userCountry === 'jp' && locale !== 'ja') {
      selectedPlatforms = messengerPlatforms['ja'];
    } else if (userCountry === 'cn' && locale !== 'zh') {
      selectedPlatforms = messengerPlatforms['zh'];
    } else if (userCountry === 'vn' && locale !== 'vi') {
      selectedPlatforms = messengerPlatforms['vi'];
    }

    setPlatforms(selectedPlatforms.sort((a, b) => a.priority - b.priority));
  }, [locale, userCountry]);

  if (platforms.length === 0) return null;

  const primaryPlatform = platforms[0];
  const secondaryPlatforms = platforms.slice(1);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Expanded view */}
      {isExpanded && (
        <div className="mb-4 space-y-3">
          {secondaryPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-14 h-14 ${platform.bgColor} ${platform.hoverColor} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 transform hover:scale-110 animate-fadeInUp`}
              style={{ animationDelay: `${index * 100}ms` }}
              title={`Contact via ${platform.name}`}
            >
              <span className="text-xl">{platform.icon}</span>
            </a>
          ))}
        </div>
      )}

      {/* Primary button */}
      <div className="relative">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-16 h-16 ${primaryPlatform.bgColor} ${primaryPlatform.hoverColor} rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 transform hover:scale-110 ${
            isExpanded ? 'rotate-45' : ''
          }`}
          title={isExpanded ? 'Close menu' : `Contact via ${primaryPlatform.name}`}
        >
          {isExpanded ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">{primaryPlatform.icon}</span>
          )}
        </button>
        
        {/* Direct link when not expanded */}
        {!isExpanded && (
          <a
            href={primaryPlatform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 w-full h-full rounded-full"
            title={`Contact via ${primaryPlatform.name}`}
          />
        )}

        {/* Pulse animation */}
        <div className={`absolute inset-0 w-16 h-16 ${primaryPlatform.bgColor} rounded-full opacity-30 animate-ping`}></div>
      </div>

      {/* Contact info tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-black bg-opacity-75 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        24/7 Emergency Service
        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black border-opacity-75"></div>
      </div>
    </div>
  );
}