// src/config/site.ts

export const siteConfig = {
  name: "RIDE ON",
  description: "전국 라이더 운영 인프라",
  links: {
    naverStore: "https://smartstore.naver.com/rideon",
    coupangStore: "https://store.coupang.com/rideon",
    kakaoTalk: "https://pf.kakao.com/_link",
  },
  // 자주 바뀌는 핵심 지표 (KPI)
  stats: {
    branches: "30개",      // 기존 page.tsx 기준
    riders: "1,500+",     // 기존 page.tsx 기준
    payoutAccuracy: "99.9%",
    monthlyVolume: "1,000,000+",
  }
};

export type SiteConfig = typeof siteConfig;