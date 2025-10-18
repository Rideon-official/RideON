// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",   // App Router 전역
  ],
  theme: {
    extend: {
      /* ===== 색상 토큰 =====
         - graphite.core  : 메인 섹션(암톤 배경)
         - graphite.gray  : 카드/보조 섹션 배경
         - graphite.line  : 헤어라인/경계
         - graphite.text  : 주 텍스트
         - graphite.mute  : 보조 텍스트
         - graphite.yellow: Accent(CTA/숫자/뱃지 전용) */
      colors: {
        // 기존 커스텀 컬러 (유지)
        rideblue: "#3D7FFF",
        rideblack: "#0F0F0F",
        rideorange: "#FF8C42",

        // 기존 브랜드 컬러 (호환 유지)
        brandYellow: "#FFB800",
        brandYellowSoft: "#FFD966",
        brandBlack: "#111111",
        brandGraphite: "#1A1A1A",

        // 신규 역할 기반 토큰
        graphite: {
          core: "#111111",
          gray: "#1A1A1A",
          line: "#2A2A2A",
          text: "#EDEDED",
          mute: "#B5B5B5",
          yellow: "#FFB800",
        },
      },

      // 라운드/섀도 토큰(카드/버튼 공통)
      borderRadius: {
        card: "1rem",   // 16px
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 20px 60px 0 rgba(0,0,0,0.35)",
        soft: "0 10px 30px 0 rgba(0,0,0,0.20)",
        hair: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        neon: "0 0 28px rgba(255,184,0,0.25)", // (네가 쓰던 값 유지)
      },

      // 선택: 노이즈 텍스처가 필요하면 /public/noise.png 준비해서 사용
      backgroundImage: {
        noise:
          "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%), url('/noise.png')",
      },
    },
  },
  plugins: [],
};

export default config;
