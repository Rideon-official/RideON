// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const quarters = ["23' 1Q", "23' 3Q", "24' 1Q", "24' 3Q", "25' 1Q", "25' 3Q", "26' 1Q"];

export default function TrustBuilder() {
  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header - 임팩트 강조 */}
        <header className="mb-20">
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
              현장에서 검증된 <br /> 압도적 지표
            </Heading>
          </FadeUp>
        </header>

        {/* Chart Section */}
        <div className="relative w-full bg-white/[0.02] rounded-[32px] border border-white/5 p-8 lg:p-12">
          
          {/* 상단 인디케이터 (범례) */}
          <div className="flex gap-6 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-brand-accent" />
              <span className="text-[11px] font-medium text-white opacity-60 uppercase tracking-wider">전국 지사 규모</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-white/30" />
              <span className="text-[11px] font-medium text-white opacity-60 uppercase tracking-wider">활성 파트너 인원</span>
            </div>
          </div>

          {/* 그래프 본체 */}
          <div className="relative h-[350px] w-full flex items-end">
            
            {/* 세로축 가이드라인 */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
            </div>

            <svg className="w-full h-full overflow-visible">
              {/* 지사 규모 (Main Line - Accent) */}
              <motion.path
                d="M 0 350 L 150 320 L 300 280 L 450 200 L 600 150 L 750 80 L 950 30"
                fill="none"
                stroke="var(--brand-accent)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              
              {/* 라이더 인원 (Sub Line - Dimmed) */}
              <motion.path
                d="M 0 350 L 150 340 L 300 310 L 450 260 L 600 220 L 750 160 L 950 100"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                strokeDasharray="6 4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />

              {/* 현재 시점 포인트 (지사 30개) */}
              <motion.circle
                cx="950" cy="30" r="6"
                fill="var(--brand-accent)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 }}
                className="shadow-[0_0_20px_var(--brand-accent)]"
              />
            </svg>

            {/* X축 라벨 (분기 단위) */}
            <div className="absolute -bottom-10 w-full flex justify-between px-2">
              {quarters.map((q) => (
                <span key={q} className="text-[10px] font-mono text-white/30 uppercase tracking-tighter">
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* 현재 데이터 요약 툴팁 (우상단) */}
          <div className="absolute top-12 right-12 text-right">
            <FadeUp delay={1.5}>
              <div className="text-[10px] text-brand-accent font-bold mb-1">CURRENT STATUS (26' 1Q)</div>
              <div className="text-3xl lg:text-4xl font-black text-white tracking-tighter">30 BRANCHES</div>
              <div className="text-sm text-white/40 font-mono mt-1">1,500+ RIDERS ACTIVE</div>
            </FadeUp>
          </div>
        </div>

        {/* Bottom Note */}
        <FadeUp delay={0.5}>
          <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <BodyText className="text-text-body text-xs lg:text-sm opacity-40 font-light max-w-xl leading-relaxed">
              2023년 1분기 첫 배달 인프라 구축 이후, 라이드온은 연평균 180% 이상의 성장률을 기록하며 <br className="hidden lg:block"/>
              전국 단위의 통합 물류 표준을 정립해 나가고 있습니다.
            </BodyText>
            <div className="flex flex-col items-end gap-2">
              <span className="text-[10px] text-white/20 font-mono">GROWTH RATE ANALYSIS</span>
              <div className="h-[1px] w-32 bg-white/10" />
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}