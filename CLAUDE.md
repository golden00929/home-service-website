# Sua Trua Saigon - Home Service Website

## 프로젝트 개요
- **서비스명**: Sua Trua Saigon (수아 추아 사이공)
- **목적**: 호치민(사이공) 지역 전문 수리 및 정비 서비스 플랫폼
- **기술 스택**: Next.js 15.4.7, TypeScript, Tailwind CSS, next-intl
- **개발 서버**: `npm run dev` (현재 포트 3001에서 실행 중)

## 언어 설정 (우선순위)
1. **베트남어 (vi)** - 메인 언어
2. 영어 (en)
3. 중국어 (zh)
4. 한국어 (ko)
5. 일본어 (ja)

## 주요 완료 작업

### 1. 기술적 문제 해결 ✅
- TypeScript 컴파일 에러 수정 (EmergencyServiceBanner.tsx)
- Layout 중복 HTML 구조 문제 해결
- next.config.js turbopack 설정 업데이트
- 언어 우선순위 설정 완료

### 2. 디자인 개선 ✅
- **Thumbtack.com 스타일 적용**: 모던하고 전문적인 UI/UX
- **그라디언트 배경**: Hero, CTA 섹션에 다층 그라디언트 적용
- **서비스 카드**: 호버 효과, 그림자, 개별 CTA 버튼
- **애니메이션**: 마이크로 인터랙션, 스케일 효과, 블러 배경
- **반응형 디자인**: 모바일-데스크톱 최적화

### 3. 브랜딩 업데이트 ✅
- **회사명**: HomeServe → **Sua Trua Saigon**
- **지역 태그**: HCM → **SGN**
- **도메인**: info@homeserve.vn → **info@suatruasaigon.vn**
- **메타데이터**: "Sua Trua Saigon - Professional Repair Services"

## 현재 사이트 구조

### 주요 섹션
1. **Header**: 브랜드명 + 네비게이션 + 언어 선택
2. **Hero**: 그라디언트 배경, 검색바, 신뢰 지표
3. **Services**: 6개 서비스 카테고리 (에어컨, 배관, 전기, 페인트, 청소, 종합수리)
4. **How it Works**: 3단계 프로세스 설명
5. **CTA**: 연락 방법 (전화, WhatsApp, Zalo)
6. **Footer**: 회사 정보, 소셜 링크, 연락처, 언어 선택

### 디자인 특징
- **색상**: 블루-퍼플 그라디언트 메인 팔레트
- **타이포그래피**: Geist 폰트, 다양한 크기 계층
- **애니메이션**: hover 효과, transform, 블러 배경
- **레이아웃**: 7xl 최대 너비, 반응형 그리드

## 파일 구조
```
src/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx (로케일별 레이아웃)
│   │   └── page.tsx (메인 홈페이지)
│   ├── layout.tsx (루트 레이아웃)
│   └── globals.css
├── components/ui/
│   └── EmergencyServiceBanner.tsx (수정됨)
├── messages/ (다국어 JSON 파일들)
├── i18n.ts (언어 설정)
└── middleware.ts (로케일 라우팅)
```

## 개발 명령어
- **개발 서버**: `npm run dev` (포트 3001)
- **빌드**: `npm run build`
- **타입 체크**: `npx tsc --noEmit`
- **린트**: `npm run lint` (설정 필요시)

## 현재 이슈/알림
- ⚠️ 포트 3000이 사용 중 → 자동으로 3001 사용
- ⚠️ 여러 lockfile 감지됨 (/home/jay/package-lock.json 우선 선택)

## 향후 개선 사항
1. **실제 연락처 정보** 업데이트 (+84 xxx xxx xxx)
2. **서비스별 상세 페이지** 구현
3. **예약 시스템** 통합
4. **고객 리뷰** 섹션 추가
5. **SEO 최적화** (메타 태그, 구조화 데이터)
6. **성능 최적화** (이미지, 폰트 로딩)

## 디자인 참조
- **영감**: Thumbtack.com의 모던 UI/UX
- **색상 팔레트**: 블루(#2563eb) - 퍼플(#7c3aed) 그라디언트
- **컴포넌트 스타일**: 라운드 코너, 그림자, 유리morphism 효과

## 브랜드 아이덴티티
- **핵심 메시지**: "믿을 수 있는 Sua Trua (수리 전문가) 파트너"
- **대상 고객**: 호치민/사이공 지역 거주자
- **서비스 영역**: 에어컨, 배관, 전기, 페인트, 청소, 종합수리
- **차별점**: 24/7 서비스, 라이센스/보험, 5성급 평가

---
**마지막 업데이트**: 2024년 8월 20일
**현재 상태**: 개발 서버 실행 중 (localhost:3001)
**다음 작업**: 실제 연락처 정보 및 예약 시스템 구현