// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070A",      // [배경] 전체 페이지 통일 색상
          accent: "#FFB800",    // [포인트] 옐로우
        },
        text: {
          main: "#FFFFFF",
          body: "#94A3B8",
        },
      },
      // 섹션 간 간격을 줄여 "횡한 느낌" 삭제
      spacing: {
        'section-y': '5rem', 
      }
    },
  },
  plugins: [],
};

export default config;