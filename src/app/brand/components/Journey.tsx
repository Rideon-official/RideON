"use client";
import { motion } from "framer-motion";


const stages = [
{ title: "Stage 1", sub: "지역 센터 운영 및 정산 시스템 출시" },
{ title: "Stage 2", sub: "렌트·리스 네트워크 전국 확장" },
{ title: "Stage 3", sub: "AI 정산 및 데이터 통합 관리" },
{ title: "Stage 4", sub: "전국 1등 배달 운영 인프라 구축" },
];


export default function Journey() {
return (
<section className="relative py-16 sm:py-24 bg-[#111111]">
<div className="mx-auto max-w-6xl px-6">
<h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">RIDE ON Journey</h2>
<div className="relative">
{/* horizontal line */}
<div className="absolute left-0 right-0 top-6 h-[2px] bg-white/10" />
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
{stages.map((s, i) => (
<motion.div
key={s.title}
initial={{ opacity: 0, y: 12 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.45, delay: i * 0.05 }}
className="relative pt-10"
>
{/* node */}
<div className="absolute left-0 right-0 top-5 flex justify-center">
<div className="h-3 w-3 rounded-full bg-[#FFD966] shadow-[0_0_18px_rgba(255,184,0,0.6)]" />
</div>
<div className="rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
<div className="text-sm text-[#FFD966]/90 font-semibold">{s.title}</div>
<div className="mt-1 text-white/85">{s.sub}</div>
</div>
</motion.div>
))}
</div>
</div>
<p className="mt-10 text-center text-white/80">
“신속한 혁신과 지속적인 추진력으로 전진하며, 모두를 연결하는 중심점 — <span className="font-semibold text-[#FFD966]">RIDE ON</span>”
</p>
</div>
</section>
);
}