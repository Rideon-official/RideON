"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * 지도 쪽(왼쪽)에서 중앙의 "RIDE ON" 텍스트 영역으로
 * 작은 점(입자)들이 천천히 이동했다가 돌아오는 애니메이션.
 * 성능/접근성: pointer-events 없음, requestAnimation은 framer-motion에 위임
 */
export default function HeroParticles() {
  // 파티클 개수와 이동 경로(시작/도착)를 퍼센트 좌표로 관리
  // 컨테이너는 hero 섹션의 상대좌표(absolute, inset-0) 기준
  const particles = useMemo(() => {
    const arr = [];
    const COUNT = 48; // 개수 (모바일/저사양 고려)
    for (let i = 0; i < COUNT; i++) {
      // 지도 쪽에서 시작: 왼쪽 12~30%, 위쪽 20~70% 범위에서 랜덤
      const startX = 12 + Math.random() * 18;
      const startY = 20 + Math.random() * 50;

      // RIDE ON 텍스트로 수렴: 가운데 32~44%, 36~48% 범위
      // (텍스트 위치 추정값. page.tsx의 레이아웃 기준)
      const targetX = 32 + Math.random() * 12;
      const targetY = 36 + Math.random() * 12;

      // 속도/지연을 입자별 다양화
      const duration = 3 + Math.random() * 2.5;
      const delay = Math.random() * 1.2;

      arr.push({ startX, startY, targetX, targetY, duration, delay });
    }
    return arr;
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map((p, idx) => (
        <motion.span
          key={idx}
          className="particle-dot"
          initial={{ left: `${p.startX}%`, top: `${p.startY}%`, opacity: 0.85, scale: 0.9 }}
          animate={{
            left: [`${p.startX}%`, `${p.targetX}%`, `${p.startX}%`],
            top: [`${p.startY}%`, `${p.targetY}%`, `${p.startY}%`],
            opacity: [0.85, 1, 0.7],
            scale: [0.9, 1.1, 0.8]
          }}
          transition={{
            duration: p.duration,
            ease: "easeInOut",
            delay: p.delay,
            repeat: Infinity
          }}
          aria-hidden
        />
      ))}
    </div>
  );
}
