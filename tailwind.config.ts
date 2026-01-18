// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#020408",      // [배경] 더 깊고 묵직한 미드나잇 블랙
          surface: "#0A0F1A",   // [카드/섹션] 조명을 받은 듯한 다크 네이비
          primary: "#1A2B4A",   // [브랜드] 시그니처 네이비
          accent: "#FFB800",    // [강조] RIDE ON 옐로우
        },
        text: {
          main: "#FFFFFF",
          body: "#94A3B8",      // 가독성을 위한 Slate-400 계열
          muted: "#475569",
        },
      },
      spacing: {
        'section-y': '8rem',    // 여백 대폭 확대 (128px)
        'section-y-lg': '12rem', // (192px)
      },
      backgroundImage: {
        // [핵심] 글자 뒤에서 은은하게 뿜어져 나오는 네이비 조명
        'hero-glow': 'radial-gradient(circle at 20% 50%, rgba(26, 43, 74, 0.4) 0%, transparent 70%)',
        // [핵심] 지도의 경계를 자연스럽게 뭉개주는 마스크
        'map-mask': 'linear-gradient(to right, #020408 0%, rgba(2, 4, 8, 0.5) 50%, transparent 100%)',
      },
      boxShadow: {
        'accent-glow': '0 0 40px rgba(255, 184, 0, 0.15)',
      }
    },
  },
  plugins: [],
};

export default config;