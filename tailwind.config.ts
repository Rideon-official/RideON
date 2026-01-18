import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070A",      // 메인 배경 (가장 깊은 블랙 네이비)
          surface: "#0D131F",   // 섹션 구분용 배경
          primary: "#1A2B4A",   // 브랜드 네이비
          secondary: "#4C6EF5", // 포인트 블루
          accent: "#FFB800",    // RIDE ON 고유 옐로우 (데이터/수치 강조)
        },
        text: {
          main: "#FFFFFF",      // 기본 텍스트
          body: "#94A3B8",      // 본문용 그레이
          muted: "#64748B",     // 보조 설명
        },
      },
      spacing: {
        'section-y': '6rem',    // 상하 여백 확대
        'section-y-lg': '10rem',
      },
      boxShadow: {
        'glow-accent': '0 0 25px rgba(255, 184, 0, 0.3)',
        'glass': 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at 30% 50%, rgba(26, 43, 74, 0.4) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};

export default config;