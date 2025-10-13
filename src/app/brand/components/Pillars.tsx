"use client";
import { motion } from "framer-motion";

const pillars = [
  {
    k: "운영 인프라",
    lines: ["지사 운영 표준화", "채용/홍보·리포트 대행", "전국 단일 품질 기준"],
  },
  {
    k: "정산·데이터",
    lines: ["실적 자동수집", "익일·주정산 알림", "투명한 리포트 공유"],
  },
  {
    k: "렌트·정비",
    lines: ["합리적 요금제", "정비·보험·사고처리 전담", "센터 직영(강동)"],
  },
];

export default function Pillars() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">전략 축</h2>
      <p className="mt-2 text-gray-400 max-w-3xl">
        세 가지 축이 연결되어 지사와 파트너의 운영 효율과 라이더 경험을 동시에 높입니다.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.k}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: i * 0.05, duration: 0.18 }}
            className="rounded-2xl border border-white/10 bg-[#1A1A1A]/70 p-6"
          >
            <h3 className="text-lg font-bold text-[#FFB800]">{p.k}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {p.lines.map((l) => <li key={l}>· {l}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
