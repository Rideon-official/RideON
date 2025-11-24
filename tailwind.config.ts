// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      /* ===== Brand Color Tokens ===== */
      colors: {
        // 기존 다크 테마용 토큰 (그대로 유지)
        graphite: {
          core: "#111111", // 다크 섹션 기본
          gray: "#1A1A1A", // 카드/보조 섹션
          line: "rgba(255,255,255,0.10)", // 경계선
          text: "#FFFFFF",
          mute: "rgba(255,255,255,0.70)",
        },

        // 기존 앰버 포인트 (그대로 유지)
        accent: {
          amber: "#FFB800", // 기존 브랜드 포인트 (필요 시 계속 사용)
        },

        // 신규 브랜드 팔레트 (웹 전반에서 사용할 핵심 색상)
        brand: {
          primary: "#1A2B4A",   // 메인 네이비 (헤더/타이틀/CTA 베이스)
          secondary: "#FF6B35", // 행동 유도 오렌지 (버튼/강조)
          accent: "#00B4D8",    // 데이터/포인트 청록 (KPI, 그래프 등)
        },

        // 배경/카드 레이어용 서피스 컬러
        surface: {
          base: "#FFFFFF",   // 페이지 기본 바탕
          subtle: "#F8F9FA", // 카드/섹션 배경
          elevated: "#EDF0F5", // 띄워진 컴포넌트 배경
        },

        // 텍스트 컬러 계층
        text: {
          heading: "#1A2B4A", // 주요 타이틀
          body: "#495057",    // 일반 본문
          muted: "#868E96",   // 설명/보조 텍스트
        },
      },

      /* ===== Radius (전역 규격) ===== */
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },

      /* ===== Shadow (절제된 고급감) ===== */
      boxShadow: {
        elev1: "0 6px 14px rgba(0,0,0,0.25)",
        elev2: "0 10px 28px rgba(0,0,0,0.35)",
        glowAmber: "0 8px 28px rgba(255,184,0,0.25)",
      },

      /* ===== Background helpers ===== */
      backgroundImage: {
        noise:
          "radial-gradient(60% 60% at 50% 0%, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0) 70%), url('/noise.png')",
      },

      /* ===== Letter-spacing preset for eyebrow ===== */
      letterSpacing: {
        widest2: ".2em",
      },

      /* ===== Spacing Presets (섹션/그리드 여백) ===== */
      spacing: {
        // 섹션 상하 여백 (py-section-y, md:py-section-y-lg 조합으로 사용)
        "section-y": "6rem",     // ≒ py-24
        "section-y-lg": "7.5rem", // ≒ py-30 정도 느낌
        // 카드/그리드 내부 여백 등
        "section-gutter": "2.5rem",
      },

      /* ===== Typography Scale (프리셋) ===== */
      fontSize: {
        // Hero 타이틀
        display: [
          "3.5rem", // 56px
          {
            lineHeight: "1.1",
            letterSpacing: "-0.03em",
          },
        ],
        // H1 ~ H3 헤딩
        h1: [
          "2.5rem", // 40px
          {
            lineHeight: "1.2",
            letterSpacing: "-0.02em",
          },
        ],
        h2: [
          "2rem", // 32px
          {
            lineHeight: "1.3",
            letterSpacing: "-0.01em",
          },
        ],
        h3: [
          "1.5rem", // 24px
          {
            lineHeight: "1.4",
          },
        ],
        // 본문/캡션
        body: [
          "1rem", // 16px
          {
            lineHeight: "1.7",
          },
        ],
        "body-lg": [
          "1.125rem", // 18px
          {
            lineHeight: "1.6",
          },
        ],
        caption: [
          "0.875rem", // 14px
          {
            lineHeight: "1.5",
          },
        ],
      },
    },
  },
  plugins: [],
};

export default config;
