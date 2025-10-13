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
  const lineControls = useAnimationControls();
  const burstControls = useAnimationControls();
  const logoControls = useAnimationControls();
  const subControls = useAnimationControls();

  const COUNT = 12; // ← 필요하면 15로만 바꿔도 동작
  const R = 48;     // 외곽 시작 반지름 (조금 키워서 겹침 방지)
  const angles = useMemo(() => Array.from({ length: COUNT }, (_, i) => i * (360 / COUNT)), [COUNT]);

  useEffect(() => {
    (async () => {
      // 1) 12개 라인 동시 수렴
      await lineControls.start("anim");

      // 2) 버스트 + 로고 팝(동시)
      await Promise.all([
        burstControls.start({
          scale: [0.25, 1.15, 1.7],
          opacity: [0, 0.9, 0],
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }),
        logoControls.start({
          opacity: [0, 1],
          scale: [0.92, 1.06, 1],
          filter: ["brightness(1.1)", "brightness(1.45)", "brightness(1.2)"],
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        }),
      ]);

      // 3) 보조 카피
      subControls.start({ opacity: 1, y: 0, transition: { duration: 0.55 } });
    })();
  }, [lineControls, burstControls, logoControls, subControls]);

  // 별똥별 느낌: 코어(얇음) + 글로우(부드러움) 2중 라인
  const lineVariants = {
    init: (i: number) => ({
      x1: polar(R, angles[i]).x,
      y1: polar(R, angles[i]).y,
      x2: 0,
      y2: 0,
      opacity: 0,
    }),
    anim: {
      x1: 0,
      y1: 0,
      opacity: 1,
      transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  return (
    <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center justify-center bg-[#111111]">
      {/* subtle noise */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.08\"/></svg>')",
          backgroundSize: "240px 240px",
        }}
      />

      {/* Rays */}
      <svg
        className="absolute inset-0 m-auto"
        width="100%"
        height="100%"
        viewBox="-50 -50 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden
      >
        <defs>
          <linearGradient id="neon-core" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,184,0,0.0)" />
            <stop offset="65%" stopColor="rgba(255,184,0,0.5)" />
            <stop offset="100%" stopColor="rgba(255,217,102,0.98)" />
          </linearGradient>
          <linearGradient id="neon-glow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,184,0,0.0)" />
            <stop offset="70%" stopColor="rgba(255,184,0,0.3)" />
            <stop offset="100%" stopColor="rgba(255,217,102,0.5)" />
          </linearGradient>
          {/* 블러 살짝 줄여서 12개가 명확히 보이게 */}
          <filter id="blur-strong" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" />
          </filter>
          <filter id="blur-soft" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
        </defs>

        {angles.map((_, i) => (
          <g key={i} shapeRendering="geometricPrecision">
            {/* Glow tail */}
            <motion.line
              custom={i}
              variants={lineVariants}
              initial="init"
              animate={lineControls}
              stroke="url(#neon-glow)"
              strokeWidth="1.2"
              strokeLinecap="round"
              filter="url(#blur-strong)"
            />
            {/* Core */}
            <motion.line
              custom={i}
              variants={lineVariants}
              initial="init"
              animate={lineControls}
              stroke="url(#neon-core)"
              strokeWidth="0.3"
              strokeLinecap="round"
              filter="url(#blur-soft)"
            />
          </g>
        ))}
      </svg>

      {/* 이동하는 “헤드”(밝은 점) : 외곽 → 중앙 */}
      {angles.map((deg, i) => {
        const start = polar(R, deg);
        return (
          <motion.div
            key={`dot-${i}`}
            initial={{ x: start.x, y: start.y, opacity: 0 }}
            animate={lineControls}
            variants={{
              anim: {
                x: 0,
                y: 0,
                opacity: 1,
                transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="absolute left-1/2 top-1/2"
            style={{ translateX: "-50%", translateY: "-50%" }}
          >
            <div
              className="rounded-full"
              style={{
                width: 6,
                height: 6,
                background: "#FFD966",
                boxShadow:
                  "0 0 10px rgba(255,217,102,0.9), 0 0 18px rgba(255,184,0,0.7)",
              }}
            />
          </motion.div>
        );
      })}

      {/* Burst ring */}
      <motion.div
        initial={{ scale: 0.25, opacity: 0 }}
        animate={burstControls}
        className="pointer-events-none absolute"
        style={{
          width: 220,
          height: 220,
          borderRadius: 9999,
          boxShadow: "0 0 36px rgba(255,184,0,0.55), 0 0 96px rgba(255,217,102,0.35)",
          background:
            "radial-gradient(circle, rgba(255,217,102,0.55) 0%, rgba(255,184,0,0.35) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Copy */}
      <div className="relative z-10 px-6 text-center">
        {/* 스트랩라인 간격 ↓ */}
        <motion.p
          initial={{ opacity: 0, y: 4 }}
          animate={subControls}
          className="mb-1 text-[13px] sm:text-sm tracking-[0.12em] text-[#FFD966]/90"
        >
          전국을 잇는 배달 인프라
        </motion.p>

        {/* H1: 모바일 시각 두께 보강 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: 4 }}
          animate={logoControls}
          className={`text-[40px] sm:text-6xl lg:text-7xl font-black tracking-tight ${neon.base}`}
          style={{
            ...neon.glow,
            WebkitTextStrokeWidth: "0.38px",
            WebkitTextStrokeColor: "rgba(0,0,0,0.35)",
            lineHeight: 1.02,
          }}
        >
          RIDE ON
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={subControls}
          className="mt-3 sm:mt-4 max-w-3xl text-[14px] sm:text-lg text-white/85 mx-auto"
        >
          신속한 혁신과 지속적인 추진력으로 전진하며, 모두를 연결하는 중심점
        </motion.p>
      </div>

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_46%,rgba(0,0,0,0.55)_100%)]" />
    </section>
  );
}

function polar(r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: r * Math.cos(rad), y: r * Math.sin(rad) };
}
