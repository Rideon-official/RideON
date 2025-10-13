"use client";
import { motion } from "framer-motion";


const items = [
{ k: "R", title: "Rapid", desc: "즉시 대응하는 실행력" },
{ k: "I", title: "Innovation", desc: "데이터 기반 혁신" },
{ k: "D", title: "Drive", desc: "끝까지 밀어붙이는 추진력" },
{ k: "E", title: "Endurance", desc: "꾸준함으로 만드는 안정성" },
{ k: "O", title: "Onward", desc: "한 단계 더 전진" },
{ k: "N", title: "Nexus", desc: "모두를 연결하는 허브" },
];


export default function RideonMeaning() {
return (
<section className="relative py-16 sm:py-24 bg-[#111111]">
<div className="mx-auto max-w-6xl px-6">
<h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
RIDEON 알파벳의 의미
</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
{items.map((it, i) => (
<motion.div
key={it.k}
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.4, delay: i * 0.05 }}
className="group rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm shadow-[0_0_0_0_rgba(0,0,0,0)] hover:shadow-[0_0_24px_2px_rgba(255,184,0,0.25)] hover:border-[#FFD966]/30 transition-all"
>
<div className="flex items-center gap-3">
<div className="text-xl font-bold text-[#FFD966]">{it.k}</div>
<div className="text-lg font-semibold">{it.title}</div>
</div>
<p className="mt-3 text-white/80">{it.desc}</p>
</motion.div>
))}
</div>
<p className="mt-8 text-center text-white/80">
“신속한 혁신과 지속적인 추진력으로 전진하며, 모두를 연결하는 중심점 — <span className="font-semibold text-[#FFD966]">RIDE ON</span>”
</p>
</div>
</section>
);
}