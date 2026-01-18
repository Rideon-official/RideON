// src/components/ui/MotionWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// 1. 위로 스르륵 나타나는 효과
export const FadeUp = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// 2. 숫자가 올라가는 카운팅 효과 (간단 버전)
export const Counter = ({ value }: { value: string }) => {
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {value} {/* 복잡한 훅 없이도 Framer Motion의 시각적 등장만으로도 효과가 좋습니다 */}
    </motion.span>
  );
};