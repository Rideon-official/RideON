"use client";
import { motion } from "framer-motion";

const rows = [
  { date: "2022", text: "RIDE ON 설립, 전국 네트워크 시작" },
  { date: "2023", text: "정산 자동화 베타, 주간 리포트 정식화" },
  { date: "2024", text: "RIDE ON BIKE 센터 직영(강동) 오픈" },
  { date: "2025", text: "파트너/지사 확대 및 운영 표준 고도화" },
];

export default function Timeline() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">연혁</h2>

      <ol className="mt-6 space-y-4">
        {rows.map((r, i) => (
          <motion.li
            key={r.date}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.04, duration: 0.16 }}
            className="relative rounded-xl border border-white/10 bg-[#1A1A1A]/70 p-5"
          >
            <div className="absolute left-5 top-5 h-2 w-2 rounded-full bg-[#FFB800]" aria-hidden />
            <div className="pl-6">
              <p className="text-sm text-gray-400">{r.date}</p>
              <p className="mt-1 font-semibold text-white">{r.text}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
