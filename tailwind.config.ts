// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      /* ===== Brand Color Tokens ===== */
      colors: {
        graphite: {
          core: "#111111",   // 다크 섹션 기본
          gray: "#1A1A1A",   // 카드/보조 섹션
          line: "rgba(255,255,255,0.10)", // 경계선
          text: "#FFFFFF",
          mute: "rgba(255,255,255,0.70)",
        },
        accent: {
          amber: "#FFB800",  // 브랜드 포인트
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
    },
  },
  plugins: [],
};

export default config;
