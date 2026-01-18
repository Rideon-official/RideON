// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070A",      // 배경
          surface: "#0D131F",   // 카드/섹션
          primary: "#1A2B4A",   // 네이비
          secondary: "#4C6EF5", // 블루
          accent: "#FFB800",    // 옐로우 (RIDE ON 포인트)
        },
        text: {
          main: "#FFFFFF",
          body: "#94A3B8",
          muted: "#64748B",
        },
      },
      spacing: {
        'section-y': '6rem',
        'section-y-lg': '10rem',
      },
      boxShadow: {
        'glow-accent': '0 0 25px rgba(255, 184, 0, 0.3)', // 버튼용
        'glass': 'inset 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
      backgroundImage: {
        // 지도의 안개를 걷어내고 텍스트만 살려줄 마스크 그라데이션
        'hero-mask': 'linear-gradient(to right, #05070A 15%, rgba(5, 7, 10, 0.8) 40%, transparent 100%)',
        'hero-glow': 'radial-gradient(circle at 30% 50%, rgba(26, 43, 74, 0.5) 0%, transparent 70%)',
      }
    },
  },
  plugins: [],
};

export default config;