// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      /* ===== 1. Brand Color Tokens ===== */
      colors: {
        // [DARK THEME] 검정색 배경 기반의 섹션에서 사용
        graphite: {
          core: "#111111", // 기본 배경색
          gray: "#1A1A1A", // 카드 및 보조 배경
          line: "rgba(255,255,255,0.10)", // 경계선
          text: "#FFFFFF", // 기본 밝은 텍스트
          mute: "rgba(255,255,255,0.70)", // 보조 텍스트
        },

        // [BRAND PALETTE] RIDE ON의 핵심 정체성 컬러
        brand: {
          primary: "#1A2B4A",   // 메인 네이비 (신뢰감)
          secondary: "#FF6B35", // 강조 오렌지 (버튼/액션)
          accent: "#00B4D8",    // 포인트 청록 (데이터/신선함)
          yellow: "#FFB800",    // RIDE ON 고유 노란색 (Bike 테마 핵심)
        },

        // [ACCENT] 기존 코드와 호환성을 위해 유지
        accent: {
          amber: "#FFB800", 
        },

        // [LIGHT THEME] 흰색 배경 기반의 섹션에서 사용
        surface: {
          base: "#FFFFFF",
          subtle: "#F8F9FA",
          elevated: "#EDF0F5",
        },

        // 텍스트 계층 (주로 라이트 모드용)
        text: {
          heading: "#1A2B4A", 
          body: "#495057",    
          muted: "#868E96",   
        },
      },

      /* ===== 2. Shadow (고급스러운 입체감) ===== */
      boxShadow: {
        elev1: "0 6px 14px rgba(0,0,0,0.25)",
        elev2: "0 10px 28px rgba(0,0,0,0.35)",
        // 브랜드 컬러를 활용한 광채 효과 추가
        glowAmber: "0 0 20px rgba(255,184,0,0.3)",
        glowOrange: "0 0 20px rgba(255,107,53,0.3)",
      },

      /* ===== 3. Spacing (전역 여백 규격) ===== */
      spacing: {
        "section-y": "5rem",      // 모바일 섹션 상하 여백 (py-20)
        "section-y-lg": "8rem",   // 데스크탑 섹션 상하 여백 (py-32)
        "section-gutter": "2.5rem",
      },

      /* ===== 4. Typography Scale (프리셋) ===== */
      fontSize: {
        display: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em" }], // 대형 Hero
        h1: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.02em" }],      // 일반 섹션 타이틀
        h2: ["2rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],        // 중간 타이틀
        h3: ["1.5rem", { lineHeight: "1.4" }],                               // 소형 타이틀
        body: ["1rem", { lineHeight: "1.7" }],                                // 기본 본문
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],                      // 강조 본문
        caption: ["0.875rem", { lineHeight: "1.5" }],                         // 캡션/설명
      },

      /* ===== 기타 디자인 요소 ===== */
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      backgroundImage: {
        noise: "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%), url('/noise.png')",
      },
      letterSpacing: {
        widest2: ".2em",
      },
    },
  },
  plugins: [],
};

export default config;