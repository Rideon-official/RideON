// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070A",      // [배경] 가장 깊은 블랙 네이비
          surface: "#0D131F",   // [카드] 배경보다 한 단계 밝은 레이어
          primary: "#1A2B4A",   // [브랜드] 메인 네이비
          secondary: "#4C6EF5", // [포인트] 블루
          accent: "#FFB800",    // [강조] RIDE ON 옐로우 (가장 잘 보임)
        },
        text: {
          heading: "#FFFFFF",   // 모든 제목은 순백색
          body: "#94A3B8",      // 본문은 눈이 편한 슬레이트 그레이
          muted: "#64748B",     // 보조 설명
        },
      },
      spacing: {
        'section-y': '6rem',    // 96px (여백 확대)
        'section-y-lg': '10rem', // 160px (데스크탑 여백 대폭 확대)
      },
      boxShadow: {
        'glow-accent': '0 0 20px rgba(255, 184, 0, 0.2)',
        'glass': 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
};

export default config;