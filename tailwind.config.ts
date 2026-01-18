// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#05070A",      // [배경] 전체 페이지 통일 색상
          accent: "#FFB800",    // [포인트] 수치 및 버튼 (옐로우)
        },
        text: {
          main: "#FFFFFF",      // 제목
          body: "#94A3B8",      // 본문 설명 (가독성 높은 슬레이트)
        },
      },
      spacing: {
        'section-y': '8rem',    // 넉넉하지만 과하지 않은 여백
      },
    },
  },
  plugins: [],
};

export default config;