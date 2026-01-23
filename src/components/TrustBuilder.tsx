// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const timeline = ["23년 상반기", "23년 하반기", "24년 상반기", "24년 하반기", "25년 상반기", "25년 하반기", "26년 상반기"];

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
          
          {/* 범례 */}
          <div className="flex gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#FF5C00] shadow-[0_0_12px_rgba(255,92,0,0.5)]" />
              <span className="text-xs font-bold text-white tracking-tight">전국 지사 규모</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
              <span className="text-xs font-bold text-white tracking-tight">활동 파트너 인원</span>
            </div>
          </div>

          {/* 그래프 영역 */}
          <div className="relative h-[350px] w-full flex items-end px-2">
            
            {/* 배경 가이드 라인 */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-[0.05]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
            </div>

            <svg viewBox="0 0 1000 350" className="w-full h-full overflow-visible">
              {/* 1. 활동 파트너 인원 (상단 선 - 흰색 점선) 
                  인원수가 훨씬 많으므로 Y좌표를 50~100 사이로 위쪽에 배치 */}
              <motion.path
                d="M 0 280 L 166 230 L 332 160 L 498 100 L 664 70 L 830 55 L 1000 50"
                fill="none"
                stroke="white" 
                strokeWidth="3"
                strokeDasharray="12 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* 2. 전국 지사 규모 (하단 선 - 브랜드색 실선)
                  지사 수는 상대적으로 적으므로 Y좌표를 150~300 사이 하단에 배치 */}
              <motion.path
                d="M 0 330 L 166 310 L 332 270 L 498 220 L 664 190 L 830 175 L 1000 170"
                fill="none"
                stroke="#FF5C00" 
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* 지사 규모 끝점 포인트 (좌표 정확히 1000, 170에 고정) */}
              <motion.circle
                cx="1000" cy="170" r="8"
                fill="#FF5C00"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                style={{ filter: "drop-shadow(0 0 15px #FF5C00)" }}
              />

              {/* 파트너 인원 끝점 포인트 (좌표 정확히 1000, 50에 고정) */}
              <motion.circle
                cx="1000" cy="50" r="6"
                fill="white"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                style={{ filter: "drop-shadow(0 0 10px white)" }}
              />
            </svg>

            {/* X축 라벨 */}
            <div className="absolute -bottom-14 w-full flex justify-between px-2">
              {timeline.map((date) => (
                <span key={date} className="text-[11px] font-semibold text-white/30 tracking-tighter">
                  {date}
                </span>
              ))}
            </div>
          </div>

          {/* 우상단 현재 데이터 요약 - 완전 한글화 */}
          <div className="mt-28 lg:mt-0 lg:absolute lg:top-14 lg:right-14 text-left lg:text-right">
            <FadeUp delay={1.2}>
              <div className="text-[10px] text-[#FF5C00] font-black mb-3 tracking-[0.2em]">2026년 상반기 운영 현황</div>
              <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3">30개 지사</div>
              <div className="text-base lg:text-lg text-white/50 font-light">전국 1,500명 이상의 파트너 활동 중</div>
            </FadeUp>
          </div>
        </div>

        {/* 하단 설명 - 1줄 */}
        <FadeUp delay={0.6}>
          <p className="mt-24 text-text-body text-xs lg:text-sm opacity-50 font-light tracking-tight text-center lg:text-left">
            라이드온은 2023년 런칭 이후 매 분기 폭발적인 성장을 기록하며, 단순한 숫자를 넘어 데이터로 그 신뢰를 증명하고 있습니다.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}