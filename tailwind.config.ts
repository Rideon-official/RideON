// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070A",      // [배경] 메인 블랙 네이비
          surface: "#0A0F14",   // [섹션] 살짝 밝은 블랙 (섹션 구분용)
          accent: "#FFB800",    // [포인트] RIDE ON 옐로우
          secondary: "#4C6EF5", // [보조] 신뢰의 블루
        },
        text: {
          main: "#FFFFFF",
          body: "#94A3B8",
        }
      },
      spacing: {
        'section-y': '5rem',    // 80px (과하지 않은 여백)
        'section-y-lg': '8rem', // 128px
      },
      boxShadow: {
        'soft-glow': '0 0 40px rgba(255, 184, 0, 0.1)',
      }
    },
  },
  plugins: [],
};

export default config;