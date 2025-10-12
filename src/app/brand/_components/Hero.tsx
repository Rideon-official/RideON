"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-8 pb-10">
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.18 }}
        className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
      >
        RIDE ON — 회사 소개
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.08, duration: 0.18 }}
        className="mt-3 text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl"
      >
        전국을 잇는 배달 인프라. 운영·정산·렌트까지 한 번에 연결하여
        파트너와 라이더의 성장을 돕습니다.
      </motion.p>
    </section>
  );
}
