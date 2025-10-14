// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}" // Next.js 14 (App Router) 기준
  ],
  theme: {
    extend: {
      colors: {
        // 기존 커스텀 컬러 유지
        rideblue: "#3D7FFF",
        rideblack: "#0F0F0F",
        rideorange: "#FF8C42",

        // ✅ 브랜드 컬러 (BikeIntro 등에서 사용)
        brandYellow: "#FFB800",
        brandYellowSoft: "#FFD966",
        brandBlack: "#111111",
        brandGraphite: "#1A1A1A",
      },
      borderRadius: {
        xl2: "1rem",
      },
      boxShadow: {
        neon: "0 0 28px rgba(255,184,0,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;