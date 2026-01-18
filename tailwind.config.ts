// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // RIDE ON 브랜드 시스템
        brand: {
          dark: "#0A0F1A",      // [배경] 기존 Graphite Core보다 더 깊은 네이비 톤
          primary: "#1A2B4A",   // [메인] 브랜드 시그니처 네이비
          secondary: "#4C6EF5", // [포인트] 신뢰감을 주는 블루
          accent: "#FACC15",    // [강조] CTA 및 수치 강조용 Yellow
          surface: "#151C2C",   // [카드/섹션] 배경 위에서 구분되는 면 컬러
        },
        // 텍스트 계층
        text: {
          main: "#FFFFFF",      // 기본 텍스트
          dimmed: "#94A3B8",    // 보조 설명
          inverse: "#1A2B4A",   // 밝은 배경에서의 텍스트
        },
      },
      // 간격 및 레이아웃 시스템
      spacing: {
        'section-y': '5rem',    // 80px
        'section-y-lg': '8rem', // 128px
      },
      // 그림자 시스템 (네이비 톤 반영)
      boxShadow: {
        'elev1': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'elev2': '0 12px 40px -4px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;