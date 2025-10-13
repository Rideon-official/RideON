"use client";
import { motion } from "framer-motion";


export default function About() {
return (
<section className="relative py-16 sm:py-24 bg-[#111111]">
<div className="mx-auto max-w-4xl px-6">
<h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">About RIDE ON</h2>


<motion.div
initial={{ opacity: 0, y: 10 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.5 }}
className="space-y-5 text-white/85 leading-relaxed"
>
<p>
라이드온은 배달 라이더의 든든한 파트너를 지향하며 운영·정산·장비를 아우르는
통합 인프라를 구축해 왔습니다. 현장 중심의 실행력과 데이터 기반의 학습으로
안정적인 운영 체계를 확립했습니다.
</p>
<p>
2021년부터 주요 플랫폼과의 협업을 통해 전국 네트워크를 확장했고,
표준화된 운영 매뉴얼과 정산 프로세스로 신뢰 가능한 서비스를 제공하고 있습니다.
</p>
<p>
정산앱 <span className="font-semibold text-[#FFD966]">ridy</span>, 지역 센터 운영,
바이크 렌트·리스, 파트너사 제휴까지 라이더의 시작과 성장을 하나로 연결합니다.
현장의 문제를 빠르게 해결하고, 데이터를 통해 더 나은 효율을 만들어갑니다.
</p>
<p>
앞으로도 AI 정산과 데이터 통합 관리를 고도화해, 전국 1등 배달 운영 인프라로서
더 많은 파트너와 함께 확장하겠습니다.
</p>
</motion.div>
</div>
</section>
);
}