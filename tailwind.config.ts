// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0A0C10",      // 더 깊고 선명한 블랙 네이비
          primary: "#1A2B4A",   // 메인 네이비
          secondary: "#FFB800", // 포인트 컬러 (기존 옐로우로 통일)
          surface: "#161B22",   // 카드/섹션용 배경
        },
        text: {
          main: "#FFFFFF",
          dimmed: "#CBD5E1",    // 가독성을 확보한 연한 회색 (slate-300급)
        }
      },
      boxShadow: {
        // 글자가 배경에 묻히지 않게 도와주는 텍스트용 그림자
        textGlow: "0 0 15px rgba(0,0,0,0.5)",
        elevated: "0 20px 40px rgba(0,0,0,0.3)",
      },
      backgroundImage: {
        // 텍스트 가독성을 저해하지 않는 은은한 그라데이션
        'hero-vignette': 'radial-gradient(circle at 30% 50%, rgba(26, 43, 74, 0.4) 0%, rgba(10, 12, 16, 0) 70%)',
      }
    },
  },
  plugins: [],
};

export default config;