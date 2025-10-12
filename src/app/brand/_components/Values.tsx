"use client";
import { motion } from "framer-motion";

const items = [
  { title: "신뢰", desc: "데이터와 원칙에 기반한 투명한 운영." },
  { title: "고객 중심", desc: "지사·파트너·라이더의 성과를 최우선으로." },
  { title: "혁신", desc: "정산 자동화·리포트로 업무를 단순화." },
  { title: "협업", desc: "전국 네트워크가 만드는 실행력." },
];

export default function Values() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-2xl md:text-3xl font-extrabold text-white">핵심 가치</h2>
      <p className="mt-2 text-gray-400 max-w-3xl">
        RIDE ON은 신뢰를 바탕으로 고객 중심의 운영을 수행하고, 자동화된 시스템과 협업으로
        사업의 지속가능한 성장을 추구합니다.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: i * 0.03, duration: 0.18 }}
            className="rounded-2xl border border-white/10 bg-[#1A1A1A]/70 p-6"
          >
            <h3 className="text-lg font-bold text-white">{it.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{it.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
