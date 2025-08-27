'use client';

import { useState } from 'react';

export function SearchBar() {
  const [searchValue, setSearchValue] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSearch = () => {
    console.log('Search:', searchValue, zipCode);
    // 실제로는 검색 기능 구현
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-6">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="프로젝트나 문제를 설명하세요"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="우편번호"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full md:w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          검색
        </button>
      </div>
    </div>
  );
}

export function LanguageSelector({ currentLocale }: { currentLocale: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = [
    { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' }
  ];

  const currentLang = languages.find(lang => lang.code === currentLocale) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <span>{currentLang.flag}</span>
        <span className="hidden md:block">{currentLang.name}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border py-2 min-w-40 z-50">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={`/${lang.code}/`}
              className="flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}