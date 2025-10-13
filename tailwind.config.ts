import type { Config } from "tailwindcss";

const config: Config = {
  // Next.js 14 (App Router) 기준: src 전체를 폭넓게 스캔
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // 기존 커스텀 컬러 유지
        rideblue: "#3D7FFF",
        rideblack: "#0F0F0F",
        rideorange: "#FF8C42",
        // 브랜드 톤(이번 페이지용)도 함께 확장해두면 편함
        brandYellow: "#FFB800",
        brandYellowSoft: "#FFD966",
        brandBlack: "#111111",
        brandGraphite: "#1A1A1A",
      },
      borderRadius: {
        // 기존 값 유지
        xl2: "1rem",
      },
      // 필요시 그림자 프리셋(네온 느낌)도 미리 정의 가능
      boxShadow: {
        neon: "0 0 28px rgba(255,184,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;