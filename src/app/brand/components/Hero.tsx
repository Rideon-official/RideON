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
  const dotControls = useAnimationControls();
  const burstControls = useAnimationControls();
  const logoControls = useAnimationControls();
  const subControls = useAnimationControls();

  const COUNT = 12;
  const R = 48;
  const angles = useMemo(
    () => Array.from({ length: COUNT }, (_, i) => i * (360 / COUNT)),
    [COUNT]
  );

  useEffect(() => {
    (async () => {
      await Promise.all([
        lineControls.start("anim"),
        dotControls.start("toCenter"),
      ]);

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
        dotControls.start({
          opacity: 0,
          transition: { duration: 0.25, ease: "easeOut" },
        }),
      ]);

      subControls.start({ opacity: 1, y: 0, transition: { duration: 0.55 } });
    })();
  }, [lineControls, dotControls, burstControls, logoControls, subControls]);

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

  const dotVariants = {
    init: (i: number) => ({
      x: polar(R, angles[i]).x,
      y: polar(R, angles[i]).y,
      opacity: 0,
    }),
    toCenter: {
      x: 0,
      y: 0,
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
          <filter id="blur-strong" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.1" />
          </filter>
          <filter id="blur-soft" x="-200%" y="-200%" width="400%" height="400%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.5" />
          </filter>
        </defs>

        {angles.map((_, i) => (
          <g key={i} shapeRendering="geometricPrecision">
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

      {/* 헤드 점들 */}
      {angles.map((_, i) => (
        <motion.div
          key={`dot-${i}`}
          className="absolute left-1/2 top-1/2 pointer-events-none"
          style={{ translateX: "-50%", translateY: "-50%" }}
          custom={i}
          variants={dotVariants}
          initial="init"
          animate={dotControls}
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
      ))}

      {/* Burst ring */}
      <motion.div
        initial={{ scale: 0.25, opacity: 0 }}
        animate={burstControls}
        className="pointer-events-none absolute"
        style={{
          width: 220,
          height: 220,
          borderRadius: 9999,
          boxShadow:
            "0 0 36px rgba(255,184,0,0.55), 0 0 96px rgba(255,217,102,0.35)",
          background:
            "radial-gradient(circle, rgba(255,217,102,0.55) 0%, rgba(255,184,0,0.35) 35%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Copy */}
      <div className="relative z-10 px-6 text-center">
        {/* 스트랩라인 - 살짝 위로 올리고 더 붙이기 */}
        <motion.p
          initial={{ opacity: 0, y: -3 }}
          animate={subControls}
          className="mb-[1px] -mt-[6px] text-[14px] sm:text-[15px] tracking-[0.12em] text-[#FFD966]/90"
        >
          전국을 잇는 배달 인프라
        </motion.p>

        {/* RIDE ON - 3px 위로 올림 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.92, y: -3 }}
          animate={logoControls}
          className={`h1-logo text-[43px] sm:text-[69px] lg:text-[77px] font-black tracking-tight ${neon.base}`}
          style={{
            ...neon.glow,
            WebkitTextStrokeWidth: "0.2px",
            WebkitTextStrokeColor: "rgba(0,0,0,0.30)",
            lineHeight: 1.02,
          }}
        >
          RIDE ON
        </motion.h1>

        {/* 보조 문장 - 3px 올림 */}
        <motion.p
          initial={{ opacity: 0, y: -3 }}
          animate={subControls}
          className="mt-1 sm:mt-2 max-w-3xl text-[15px] sm:text-[18px] text-white/85 mx-auto"
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
