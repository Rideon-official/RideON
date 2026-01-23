// src/components/TrustBuilder.tsx
"use client";

import { Heading, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const timeline = ["23년 1분기", "23년 3분기", "24년 1분기", "24년 3분기", "25년 1분기", "25년 3분기", "26년 1분기"];

export default function TrustBuilder() {
  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header - 무조건 1줄 */}
        <header className="mb-20 text-left">
          <FadeUp delay={0.1}>
            <Eyebrow className="text-brand-accent font-normal text-[10px] lg:text-xs mb-6 opacity-80">
              신뢰와 데이터
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Heading
              level={2}
              className="text-[32px] lg:text-[52px] font-black tracking-tighter leading-tight m-0 text-white whitespace-nowrap"
            >
              현장에서 검증된 압도적 지표
            </Heading>
          </FadeUp>
        </header>

        {/* Chart Section */}
        <div className="relative w-full bg-white/[0.02] rounded-[32px] border border-white/5 p-8 lg:p-12">
          
          {/* 범례 - 한글화 */}
          <div className="flex gap-8 mb-16">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_8px_var(--brand-accent)]" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-tight">전국 지사 규모</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="text-xs font-medium text-white/40 uppercase tracking-tight">활동 파트너 인원</span>
            </div>
          </div>

          {/* 그래프 영역 */}
          <div className="relative h-[300px] w-full flex items-end px-4">
            
            {/* 가로 그리드 라인 */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-[0.03]">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
            </div>

            <svg viewBox="0 0 1000 300" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="var(--brand-accent)" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* 활동 파트너 인원 (보조선 - 점선으로 처리하여 겹침 방지) */}
              <motion.path
                d="M 0 280 L 166 260 L 332 230 L 498 190 L 664 160 L 830 130 L 1000 90"
                fill="none"
                stroke="rgba(255,255,255,0.15)"
                strokeWidth="2"
                strokeDasharray="8 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "linear" }}
              />

              {/* 전국 지사 규모 (주선 - 더 굵고 선명하게) */}
              <motion.path
                d="M 0 290 L 166 275 L 332 240 L 498 150 L 664 110 L 830 60 L 1000 20"
                fill="none"
                stroke="url(#lineGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* 끝점 강조 포인트 */}
              <motion.circle
                cx="1000" cy="20" r="8"
                fill="var(--brand-accent)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="shadow-[0_0_25px_var(--brand-accent)]"
              />
            </svg>

            {/* X축 라벨 - 한글 분기 단위 */}
            <div className="absolute -bottom-12 w-full flex justify-between">
              {timeline.map((date) => (
                <span key={date} className="text-[10px] lg:text-[11px] font-medium text-white/30 tracking-tighter">
                  {date}
                </span>
              ))}
            </div>
          </div>

          {/* 현재 시점 요약 (26년 1분기 데이터) */}
          <div className="mt-24 lg:mt-0 lg:absolute lg:top-12 lg:right-12 text-left lg:text-right">
            <FadeUp delay={1.2}>
              <div className="text-[10px] text-brand-accent font-bold mb-2 tracking-widest">현재 기준 (26년 1분기)</div>
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tighter mb-2">30개 지사 돌파</div>
              <div className="text-sm lg:text-base text-white/40 font-light">전국 1,500명 이상의 파트너와 함께합니다</div>
            </FadeUp>
          </div>
        </div>

        {/* 추가 설명 */}
        <FadeUp delay={0.6}>
          <p className="mt-16 text-text-body text-xs lg:text-sm opacity-40 font-light leading-relaxed max-w-2xl">
            라이드온은 2023년 서비스 런칭 이후 매 분기 폭발적인 성장을 기록하고 있습니다. <br className="hidden md:block" />
            단순한 숫자 이상의 신뢰를 데이터로 증명하며, 더 넓은 인프라를 향해 나아갑니다.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}