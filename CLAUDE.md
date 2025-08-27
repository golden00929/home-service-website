# Sua Trua Saigon - 홈서비스 웹사이트 학습자료

## 🎯 프로젝트 개요
- **서비스명**: Sua Trua Saigon (수아 추아 사이공)
- **목적**: 호치민(사이공) 지역 전문 수리 및 정비 서비스 플랫폼
- **기술 스택**: Next.js 15.4.7, TypeScript, Tailwind CSS, next-intl
- **개발 서버**: `npm run dev` (현재 포트 3001에서 실행 중)
- **현재 URL**: http://localhost:3001

## 🌍 다국어 설정 (우선순위)
1. **베트남어 (vi)** - 메인 언어 (베트남 현지 고객용)
2. 영어 (en) - 국제 고객용
3. 중국어 (zh) - 중국인 거주자용
4. 한국어 (ko) - 한국인 거주자용
5. 일본어 (ja) - 일본인 거주자용

## 📁 전체 파일 구조 맵
```
/home/jay/home-service-website/
├── src/
│   ├── app/ (Next.js App Router)
│   │   ├── [locale]/ (다국어 라우팅)
│   │   │   ├── [service-slug]/ (서비스별 상세 페이지)
│   │   │   │   └── page.tsx (동적 서비스 페이지)
│   │   │   ├── contact/
│   │   │   │   └── page.tsx (연락처 페이지)
│   │   │   ├── layout.tsx (로케일별 레이아웃)
│   │   │   └── page.tsx (메인 홈페이지) ⭐ 메인 파일
│   │   ├── globals.css (전역 스타일)
│   │   └── layout.tsx (루트 레이아웃)
│   ├── components/ (재사용 컴포넌트)
│   │   ├── ui/ (UI 컴포넌트들)
│   │   │   ├── EmergencyServiceBanner.tsx
│   │   │   ├── CurrencyConverter.tsx
│   │   │   └── 기타 UI 컴포넌트들
│   │   └── layout/ (레이아웃 컴포넌트)
│   ├── lib/
│   │   └── metadata.ts (SEO 메타데이터 생성)
│   ├── messages/ (다국어 번역 파일)
│   │   ├── vi.json (베트남어)
│   │   ├── en.json (영어)
│   │   ├── ko.json (한국어)
│   │   ├── zh.json (중국어)
│   │   └── ja.json (일본어)
│   ├── i18n.ts (다국어 설정)
│   └── middleware.ts (로케일 라우팅 미들웨어)
├── public/ (정적 파일)
│   ├── scsg-blue.jpg (로고 이미지)
│   └── half-round.jpg (배경 이미지)
├── package.json (프로젝트 의존성)
├── next.config.js (Next.js 설정)
├── tailwind.config.js (Tailwind CSS 설정)
└── CLAUDE.md (이 파일) 📋
```

## 🚀 주요 페이지 구조

### 1. 메인 홈페이지 (src/app/[locale]/page.tsx)
**섹션별 구성:**
1. **Header** - 브랜드명, 네비게이션, 언어 선택기
2. **Hero Section** - 그라디언트 배경, 메인 타이틀, 검색바
3. **Service Categories** - 5개 서비스 카테고리 카드
4. **How It Works** - 3단계 이용 프로세스
5. **Case Studies** - 시공 사례 갤러리
6. **Quick Contact** - 전화/WhatsApp/Zalo 연락처 (최근 추가됨)
7. **Main Contact** - 24시간 연락처 섹션 (반원 배경)
8. **Footer** - 간단한 링크 및 소셜미디어

### 2. 서비스 상세 페이지 (src/app/[locale]/[service-slug]/page.tsx)
**서비스 목록:**
- `aircon-cleaning` - 에어컨 청소
- `plumbing-repair` - 배관 보수  
- `electrical-repair` - 전기 보수
- `leak-inspection` - 누수점검 및 보수
- `tile-painting` - 타일 및 도색 공사

### 3. 연락처 페이지 (src/app/[locale]/contact/page.tsx)
- 온라인 문의 폼 (이름, 전화, 이메일, 서비스, 메시지)
- 빠른 연락 옵션들 (전화, WhatsApp, Zalo, 이메일)
- 서비스 정보 (운영시간, 서비스 지역, 보장사항)

## 🛠 기술적 구현 사항

### 최근 완료 작업 ✅
1. **UI/UX 개선**
   - 슬라이딩 텍스트 폰트 굵기 조정 (font-black → font-bold)
   - 로고 크기 축소 (w-8 h-8 → w-6 h-6)
   - 푸터 로고/타이틀 제거 및 공백 정리

2. **콘텐츠 업데이트**
   - 서비스 카테고리를 베트남 현지 서비스로 특화
   - 시공사례 하단에 빠른 연락처 섹션 추가
   - 연락처 정보: +84 123 456 7890, WhatsApp, Zalo 통합

3. **페이지 구조 완성**
   - 동적 서비스 상세 페이지 구현
   - 연락처 페이지 폼 및 상호작용 구현
   - SEO 메타데이터 최적화 (generateMetadata)

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: 블루 그라디언트 (#2563eb → #7c3aed)
- **Secondary**: 그린 (#10b981 - WhatsApp), 레드 (#ef4444 - 긴급)
- **Background**: 화이트 (#ffffff), 라이트그레이 (#f9fafb)
- **Text**: 다크그레이 (#111827), 미디엄그레이 (#6b7280)

### 타이포그래피
- **Primary Font**: Geist Sans (영어/숫자)
- **Korean Font**: Noto Sans KR (한국어 텍스트)
- **크기**: text-xs ~ text-6xl (Tailwind 스케일)
- **굵기**: font-medium (500), font-semibold (600), font-bold (700)

### 컴포넌트 스타일
- **카드**: rounded-lg, shadow-md, hover:shadow-lg
- **버튼**: rounded-lg, px-6 py-3, hover 트랜지션
- **그라디언트**: from-blue-600 via-blue-700 to-blue-800
- **애니메이션**: hover:scale-105, transition-all duration-300

## 🔗 URL 라우팅 구조
```
/ (root) → 자동으로 /ko 리다이렉트
├── /ko/ (한국어 홈페이지)
├── /vi/ (베트남어 홈페이지) 
├── /en/ (영어 홈페이지)
├── /zh/ (중국어 홈페이지)
├── /ja/ (일본어 홈페이지)
└── /[locale]/
    ├── contact/ (연락처 페이지)
    └── [service-slug]/ (서비스 상세)
        ├── aircon-cleaning/
        ├── plumbing-repair/
        ├── electrical-repair/
        ├── leak-inspection/
        └── tile-painting/
```

## ⚙️ 개발 환경 설정

### 필수 명령어
```bash
# 개발 서버 실행 (현재 실행 중)
npm run dev                # → http://localhost:3001

# 프로덕션 빌드
npm run build
npm run start

# 타입 체크
npx tsc --noEmit

# 린트 (설정시)
npm run lint
```

### 현재 환경 상태
- ✅ **개발 서버**: 포트 3001에서 실행 중
- ✅ **타입스크립트**: 컴파일 에러 해결됨
- ⚠️ **포트**: 3000 사용 중이라 3001로 자동 변경
- ⚠️ **Lockfile**: 여러 package-lock.json 감지됨

## 📝 작업 히스토리 (최신순)

### 2024년 8월 23일
1. **로고 크기 조정** - w-8 h-8 → w-6 h-6으로 축소
2. **푸터 정리** - 로고/타이틀 제거, 빈 섹션 정리  
3. **빠른 연락처 추가** - 시공사례 하단에 전화/WhatsApp/Zalo 연락처
4. **학습자료 생성** - 프로젝트 이해를 위한 종합 문서화

### 이전 작업들
1. **페이지 구조 완성** - 서비스 상세, 연락처 페이지 구현
2. **UI 개선** - 슬라이딩 텍스트 폰트 조정, 디자인 정리
3. **콘텐츠 특화** - 베트남 현지 서비스에 맞춘 카테고리 업데이트
4. **브랜딩** - Sua Trua Saigon으로 브랜드 통일

## 🔮 향후 개선 계획

### 우선순위 높음
1. **실제 연락처 정보** - 베트남 현지 전화번호로 업데이트
2. **다국어 콘텐츠** - 베트남어 우선으로 모든 텍스트 번역
3. **이미지 최적화** - WebP 포맷, 적절한 해상도 적용
4. **성능 개선** - 폰트 로딩, 이미지 lazy loading

### 우선순위 중간  
5. **예약 시스템** - 온라인 예약 캘린더 통합
6. **고객 리뷰** - 구글 리뷰 연동 또는 자체 리뷰 시스템
7. **결제 시스템** - 온라인 결제 옵션 추가
8. **관리자 패널** - 서비스 요청 관리 대시보드

### 우선순위 낮음
9. **PWA 기능** - 모바일 앱 같은 경험
10. **AI 챗봇** - 자동 상담 시스템
11. **소셜 증명** - 인스타그램 피드 연동
12. **분석 도구** - GA4, 히트맵 분석

## 🎯 브랜드 아이덴티티

### 핵심 메시지
**"믿을 수 있는 Sua Trua (수리 전문가) 파트너"**

### 타겟 고객
- **주요**: 호치민시 거주 외국인 (한국, 일본, 중국, 서구)
- **보조**: 베트남 현지인 (고급 서비스 선호층)
- **지역**: 호치민시(사이공) 전 지역

### 서비스 특화
- **에어컨 청소** - 열대기후 필수 서비스
- **배관 보수** - 아파트 누수 문제 해결
- **전기 보수** - 안전한 전기 시설 관리  
- **누수 점검** - 구조적 손상 예방
- **타일/도색** - 인테리어 개선

### 경쟁 우위
- 🌍 **다국어 지원** (5개 언어)
- ⏰ **24시간 응급서비스**
- 🛡️ **라이센스 & 보험 보장**
- 📱 **WhatsApp/Zalo 즉시 소통**
- ⭐ **5성급 서비스 품질**

---
**📋 문서 최종 업데이트**: 2024년 8월 23일  
**🚀 현재 상태**: 개발 서버 실행 중 (http://localhost:3001)  
**🎯 다음 우선순위**: 베트남어 콘텐츠 번역 및 현지 연락처 업데이트