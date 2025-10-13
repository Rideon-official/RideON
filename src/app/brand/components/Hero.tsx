"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useMemo } from "react";

const neon = {
  base: "text-white drop-shadow-[0_0_12px_rgba(255,184,0,0.45)]",
  glow: {
    textShadow:
      "0 0 16px rgba(255,184,0,0.9), 0 0 28px rgba(255,217,102,0.75), 0 0 56px rgba(255,184,0,0.45)",
    color: "#FFD966",
  } as React.CSSProperties,
};

export default function Hero() {
  const textControls = useAnimationControls();
  const logoControls = useAnimationControls();

  // 12개 각도(도 단위)
  const angles = useMemo(() => Array.from({ length: 12 }, (_, i) => i * 30), []);

  useEffect(() => {
    (async () => {
      // 1) 텍스트 페이드업
      await textControls.start({ opacity: 1, y: 0, transition: { duration: 0.7 } });
      // 2) 라인 수렴 애니메이션이 끝나면
      await new Promise((r) => setTimeout(r, 1100)); // 라인 수렴 길이(아래 variants)와 싱크
      // 3) RIDE ON 점등 + 살짝 펄스
      await logoControls.start({
        opacity: 1,
        filter: "brightness(1.2)",
        transition: { duration: 0.45 },
      });
      logoControls.start({
        opacity: [1, 0.86, 1],
        filter: ["brightness(1.2)", "brightness(1.45)", "brightness(1.2)"],
        transition: { duration: 1.2, repeat: 1 },
      });
    })();
  }, [logoControls, textControls]);

  // SVG 라인 애니메이션: 외곽 → 중심으로 x1,y1이 이동 (x2,y2는 중심 고정)
  const lineVariants = {
    init: (i: number) => ({
      x1: polar(42, angles[i]).x,
      y1: polar(42, angles[i]).y,
      x2: 0,
      y2: 0,
      opacity: 0.0,
    }),
    anim: (i: number) => ({
      x1: 0,
      y1: 0,
      opacity: 1,
      transition: {
        // 각 라인의 시작 타이밍을 살짝씩 지연 → “둘러싸여 들어오는” 느낌
        delay: i * 0.04,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  } as const;

  return (
    <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center justify-center bg-[#111111]">
      {/* 미세 노이즈 */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.08\"/></svg>')",
          backgroundSize: "240px 240px",
        }}
      />

      {/* 12방향 수렴 라인 (SVG 좌표계: -50~50 box) */}
      <svg
        className="absolute inset-0 m-auto"
        width="100%"
        height="100%"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        {/* 네온 그라데이션 정의 */}
        <defs>
          <linearGradient id="neon" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,184,0,0.0)" />
            <stop offset="70%" stopColor="rgba(255,184,0,0.6)" />
            <stop offset="100%" stopColor="rgba(255,217,102,0.95)" />
          </linearGradient>
          <filter id="g" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {angles.map((_, i) => (
          <motion.line
            key={i}
            // 커스텀 인덱스로 variants 지연 제어
            custom={i}
            variants={lineVariants}
            initial="init"
            animate="anim"
            stroke="url(#neon)"
            strokeWidth="0.7"
            strokeLinecap="round"
            filter="url(#g)"
          />
        ))}
      </svg>

      {/* 카피 */}
      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={textControls}
          className="mb-3 text-sm tracking-widest text-[#FFD966]/90"
        >
          전국을 잇는 배달 인프라
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={logoControls}
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold ${neon.base}`}
          style={neon.glow}
        >
          RIDE ON
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={textControls}
          className="mt-5 max-w-3xl text-base sm:text-lg text-white/85 mx-auto"
        >
          신속한 혁신과 지속적인 추진력으로 전진하며, 모두를 연결하는 중심점
        </motion.p>
      </div>

      {/* 비네팅 */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_46%,rgba(0,0,0,0.55)_100%)]" />
    </section>
  );
}

/** 반지름 r(뷰박스 단위)와 각도(deg)로 x,y 반환 */
function polar(r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
}
