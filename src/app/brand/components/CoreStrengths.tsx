"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";


const cards = [
{ title: "RIDE ON BIKE", desc: "바이크 렌트·리스", href: "/bike" },
{ title: "LogitEats", desc: "정산 자동화 솔루션", href: "/logiteats" },
{ title: "STORE", desc: "장비·소모품·입점 제휴", href: "/store" },
{ title: "NOTICE", desc: "공지 및 센터 소식", href: "/notice" },
];


export default function CoreStrengths() {
const router = useRouter();
return (
<section className="relative py-16 sm:py-24 bg-[#111111]">
<div className="mx-auto max-w-6xl px-6">
<h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">Core Strengths</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
{cards.map((c, i) => (
<motion.button
key={c.title}
onClick={() => router.push(c.href)}
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.45, delay: i * 0.05 }}
className="group text-left rounded-2xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm transition-all hover:border-[#FFD966]/40 hover:shadow-[0_0_28px_2px_rgba(255,184,0,0.25)]"
>
<div className="flex items-baseline justify-between">
<h3 className="text-xl font-semibold">{c.title}</h3>
<span className="text-sm text-[#FFD966]/90">→</span>
</div>
<p className="mt-2 text-white/75">{c.desc}</p>
</motion.button>
))}
</div>
</div>
</section>
);
}