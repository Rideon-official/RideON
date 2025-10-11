"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function ConvergeToText() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [1.1, 1.05, 1],
      opacity: [0.8, 1, 0.9],
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse" },
    });
  }, [controls]);

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      {/* 배경 지도 */}
      <motion.img
        src="/map-core.png"
        alt="Map Background"
        className="absolute w-[90%] max-w-[900px] opacity-80"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, ease: "easeOut" }}
      />

      {/* 빛이 모이는 효과 */}
      <motion.div
        animate={controls}
        className="absolute bg-[#ffb800] blur-[180px] opacity-70 w-[600px] h-[600px] rounded-full"
      ></motion.div>

      {/* 중앙 텍스트 */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="text-6xl font-black text-white tracking-tight"
      >
        <span className="text-[#ffb800]">RIDE ON</span>
      </motion.h1>
    </div>
  );
}
