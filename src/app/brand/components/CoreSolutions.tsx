// src/app/brand/components/CoreSolutions.tsx
"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { BarChart, Wrench, Activity, TrendingUp } from "lucide-react"; // 아이콘 이름 수정

const solutions = [
  {
    title: "ENGINE 01. Transparency",
    subtitle: "실시간 데이터 정산 시스템",
    desc: "불투명한 정산의 시대를 끝냅니다. AI 기반 LogitEats 시스템으로 라이더와 지사가 실시간으로 모든 내역을 투명하게 확인할 수 있습니다.",
    icon: <BarChart className="w-6 h-6" />,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "ENGINE 02. Stability",
    subtitle: "전국 정비 및 관리 인프라",
    desc: "이동 수단의 멈춤은 곧 수익의 중단입니다. 라이드온의 전국 직영 및 협력 정비 네트워크는 365일 파트너의 가동률을 보장합니다.",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-yellow-400 to-amber-500",
  },
  {
    title: "ENGINE 03. Growth",
    subtitle: "상생 기반의 리스 구조",
    desc: "단순한 대여를 넘어 자산이 되는 모델을 추구합니다. 합리적인 리스 조건과 성공적인 운영 지원으로 파트너의 동반 성장을 이끕니다.",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "from-[#FFB800] to-yellow-600",
  },
];

export default function CoreSolutions() {
  return (
    <section className="relative py-32 bg-black/20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <header className="mb-20">
          <FadeUp>
            <p className="text-[#FFB800] text-xs font-bold tracking-[0.2em] mb-4">CORE ENGINES</p>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tighter">
              물류의 궤도를 가동하는<br />3개의 핵심 엔진
            </h2>
          </FadeUp>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <div className="group relative p-10 h-full rounded-[40px] bg-white/[0.02] border border-white/5 backdrop-blur-md overflow-hidden transition-all hover:bg-white/[0.05] hover:border-white/10">
                <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-10 text-[#FFB800]">
                    {item.icon}
                  </div>
                  <h4 className="text-[#FFB800] text-xs font-bold mb-2 tracking-wider">{item.title}</h4>
                  <h3 className="text-2xl font-bold mb-6">{item.subtitle}</h3>
                  <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}