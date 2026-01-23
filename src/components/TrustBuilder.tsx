// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const timeline = ["23년 1분기", "23년 3분기", "24년 1분기", "24년 3분기", "25년 1분기", "25년 3분기", "26년 1분기"];

export default function TrustBuilder() {
  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header - 제목 1줄 + 설명 2줄 */}
        <header className="mb-20">
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

          <FadeUp delay={0.3}>
            <BodyText className="mt-8 text-text-body text-sm lg:text-base opacity-70 font-light leading-relaxed max-w-3xl">
              숫자는 운영의 안정성을, 후기는 실제 현장의 신뢰를 보여줍니다. <br className="hidden sm:block" />
              라이드온은 지사와 라이더 모두가 안심하고 성장할 수 있는 물류 인프라를 만듭니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* Chart Section */}
        <div className="relative w-full bg-white/[0.03] rounded-[40px] border border-white/10 p-8 lg:p-14 backdrop-blur-sm">
          
          {/* 범례 - 색상 및 가독성 강화 */}
          <div className="flex gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-accent shadow-[0_0_12px_rgba(var(--brand-accent-rgb),0.5)]" />
              <span className="text-xs font-bold text-white tracking-tight">전국 지사 규모</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/80" />
              <span className="text-xs font-bold text-white/80 tracking-tight">활동 파트너 인원</span>
            </div>
          </div>

          {/* 그래프 영역 */}
          <div className="relative h-[320px] w-full flex items-end px-2">
            
            {/* 가이드 라인 */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-[0.05]">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
            </div>

            <svg viewBox="0 0 1000 320" className="w-full h-full overflow-visible">
              {/* 활동 파트너 인원 (보조선 - 밝은 화이트 점선으로 가독성 UP) */}
              <motion.path
                d="M 0 300 L 166 280 L 332 250 L 498 210 L 664 170 L 830 130 L 1000 80"
                fill="none"
                stroke="rgba(255,255,255,0.8)"
                strokeWidth="3"
                strokeDasharray="10 6"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* 전국 지사 규모 (주선 - 브랜드 컬러 강조) */}
              <motion.path
                d="M 0 310 L 166 290 L 332 240 L 498 160 L 664 110 L 830 50 L 1000 15"
                fill="none"
                stroke="var(--brand-accent)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* 현재 지점 포인트 */}
              <motion.circle
                cx="1000" cy="15" r="10"
                fill="var(--brand-accent)"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                className="shadow-[0_0_30px_var(--brand-accent)]"
              />
            </svg>

            {/* X축 라벨 */}
            <div className="absolute -bottom-14 w-full flex justify-between">
              {timeline.map((date) => (
                <span key={date} className="text-[11px] font-semibold text-white/30 tracking-tighter">
                  {date}
                </span>
              ))}
            </div>
          </div>

          {/* 우상단 현재 데이터 요약 */}
          <div className="mt-28 lg:mt-0 lg:absolute lg:top-14 lg:right-14 text-left lg:text-right">
            <FadeUp delay={1.2}>
              <div className="text-[10px] text-brand-accent font-black mb-3 tracking-[0.2em]">2026 1Q STATUS</div>
              <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3">30개 지사</div>
              <div className="text-base lg:text-lg text-white/50 font-light">전국 1,500명 이상의 파트너 활동 중</div>
            </FadeUp>
          </div>
        </div>

        {/* 하단 설명 - 1줄로 통합 */}
        <FadeUp delay={0.6}>
          <p className="mt-24 text-text-body text-xs lg:text-sm opacity-50 font-light tracking-tight text-center lg:text-left">
            라이드온은 2023년 런칭 이후 매 분기 폭발적인 성장을 기록하며, 단순한 숫자를 넘어 데이터로 그 신뢰를 증명하고 있습니다.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}