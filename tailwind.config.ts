// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070A",      // [배경] 전체 페이지 통일
          accent: "#FFB800",    // [포인트] 옐로우
        },
        text: {
          main: "#FFFFFF",
          body: "#94A3B8",
        },
      },
      spacing: {
        'section-y': '5rem',    // 상하 여백 (과하지 않게)
      },
      // 글자 크기를 다시 정상화 (너무 크지 않게)
      fontSize: {
        'hero-title': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      }
    },
  },
  plugins: [],
};

export default config;