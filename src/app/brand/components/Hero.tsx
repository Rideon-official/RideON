"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const neon = {
  base: "text-white drop-shadow-[0_0_12px_rgba(255,184,0,0.45)]",
  glow: {
    textShadow:
      "0 0 16px rgba(255,184,0,0.9), 0 0 28px rgba(255,217,102,0.75), 0 0 56px rgba(255,184,0,0.45)",
    color: "#FFD966",
  } as React.CSSProperties,
};

const lineAngles = Array.from({ length: 12 }, (_, i) => i * 30); // 0~330도

export default function Hero() {
  const textControls = useAnimationControls();
  const lineControls = useAnimationControls();
  const logoControls = useAnimationControls();

  useEffect(() => {
    async function seq() {
      await textControls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
      await lineControls.start((i) => ({
        scaleX: 0,
        transition: { duration: 0.9, delay: i * 0.02, ease: [0.22, 1, 0.36, 1] },
      }));
      await logoControls.start({
        opacity: 1,
        filter: "brightness(1.15)",
        transition: { duration: 0.5 },
      });
      logoControls.start({
        opacity: [1, 0.85, 1],
        filter: ["brightness(1.15)", "brightness(1.4)", "brightness(1.15)"],
        transition: { duration: 1.8, repeat: 1 },
      });
    }
    seq();
  }, [lineControls, logoControls, textControls]);

  return (
    <section className="relative isolate overflow-hidden min-h-[80vh] flex items-center justify-center bg-[#111111]">
      {/* subtle noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20 mix-blend-soft-light"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"140\" height=\"140\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"2\" stitchTiles=\"stitch\"/></filter><rect width=\"100%\" height=\"100%\" filter=\"url(%23n)\" opacity=\"0.08\"/></svg>')",
          backgroundSize: "240px 240px",
        }}
      />

      {/* Converging neon lines */}
      <div className="absolute inset-0">
        {lineAngles.map((deg, idx) => (
          <motion.div
            key={deg}
            custom={idx}
            initial={{ scaleX: 1 }}
            animate={lineControls}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "40vw",
              height: 2,
              background:
                "linear-gradient(to right, rgba(255,184,0,0.0), rgba(255,184,0,0.85))",
              transform: `rotate(${deg}deg) translateX(-20vw)`,
              transformOrigin: "right center",
              boxShadow: "0 0 12px rgba(255,184,0,0.6)",
              filter: "drop-shadow(0 0 16px rgba(255,217,102,0.35))",
            }}
          />
        ))}
      </div>

      {/* Copy */}
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

      {/* vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_46%,rgba(0,0,0,0.55)_100%)]" />
    </section>
  );
}
