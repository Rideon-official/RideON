// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const kpis = [
  { label: "전국 지사 규모", value: "30개", growth: "+150%" },
  { label: "활성 라이더 수", value: "1,500+", growth: "+210%" },
];

export default function TrustBuilder() {
  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header - 간결하고 임팩트 있게 */}
        <header className="mb-24">
          <FadeUp delay={0.1}>
            <Eyebrow className="text-brand-accent font-normal text-[10px] lg:text-xs mb-6 opacity-80">
              신뢰와 데이터
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Heading
              level={2}
              className="text-[32px] lg:text-[52px] font-black tracking-tighter leading-tight m-0 text-white"
            >
              현장에서 검증된 <br className="sm:hidden" /> 압도적 지표
            </Heading>
          </FadeUp>

          <FadeUp delay={0.3}>
            <BodyText className="mt-10 text-text-body text-sm lg:text-base opacity-50 font-light tracking-tight">
              라이드온은 데이터로 증명된 투명한 성장 지표를 공유합니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* Growth Visual Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* Left: Numbers */}
          <div className="lg:col-span-4 space-y-12">
            {kpis.map((kpi, i) => (
              <FadeUp key={kpi.label} delay={0.4 + i * 0.1}>
                <div className="group">
                  <div className="text-[11px] text-text-body font-medium opacity-40 mb-3 tracking-tighter uppercase">
                    {kpi.label}
                  </div>
                  <div className="flex items-baseline gap-4">
                    <span className="text-5xl lg:text-6xl font-black font-mono text-white tracking-tighter">
                      {kpi.value}
                    </span>
                    <span className="text-brand-accent font-bold text-sm">
                      {kpi.growth}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Right: Growth Graph (SVG Animation) */}
          <div className="lg:col-span-8 relative h-[300px] w-full bg-white/[0.02] rounded-3xl border border-white/5 p-8 flex items-end overflow-hidden">
            {/* 배경 격자 */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', size: '40px 40px', backgroundSize: '40px 40px' }} />
            
            {/* 그래프 영역 */}
            <svg className="relative w-full h-full overflow-visible">
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* 우상향 곡선 애니메이션 */}
              <motion.path
                d="M 0 250 Q 150 230 300 150 T 600 50 T 900 20"
                fill="none"
                stroke="var(--brand-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />
              
              {/* 곡선 아래 채우기 */}
              <motion.path
                d="M 0 250 Q 150 230 300 150 T 600 50 T 900 20 V 300 H 0 Z"
                fill="url(#gradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />

              {/* 현재 포인트 강조 */}
              <motion.circle
                cx="90%"
                cy="10%"
                r="6"
                fill="var(--brand-accent)"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className="shadow-[0_0_20px_var(--brand-accent)]"
                transition={{ delay: 1.8 }}
              />
            </svg>
            
            {/* 그래프 레이블 */}
            <div className="absolute top-8 left-8">
              <span className="text-[10px] font-mono text-brand-accent/50">GROWTH TRAJECTORY</span>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <FadeUp delay={0.9}>
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-[11px] text-text-body opacity-30 leading-relaxed max-w-md">
              * 위 지표는 2024년 4분기 기준 실제 운영 데이터를 기반으로 산출되었습니다. <br />
              라이드온은 매 분기 투명한 운영 성과를 파트너사에게 공개합니다.
            </p>
            <div className="px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent text-[10px] font-bold">
              지속 성장 중인 인프라
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}