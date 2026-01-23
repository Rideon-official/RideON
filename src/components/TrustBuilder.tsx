// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const timeline = ["23년 상반기", "23년 하반기", "24년 상반기", "24년 하반기", "25년 상반기", "25년 하반기", "26년 상반기"];

export default function TrustBuilder() {
  // 브랜드 컬러를 변수 대신 상수로 직접 정의 (가장 확실한 방법)
  const BRAND_COLOR = "#FF5C00"; 

  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header */}
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
          
          <div className="flex gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full bg-[${BRAND_COLOR}] shadow-[0_0_12px_rgba(255,92,0,0.5)]`} />
              <span className="text-xs font-bold text-white tracking-tight">전국 지사 규모</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
              <span className="text-xs font-bold text-white tracking-tight">활동 파트너 인원</span>
            </div>
          </div>

          <div className="relative h-[350px] w-full flex items-end px-2">
            <div className="absolute inset-0 flex flex-col justify-between opacity-[0.05]">
              {[...Array(6)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white" />)}
            </div>

            <svg viewBox="0 0 1000 350" className="w-full h-full overflow-visible">
              {/* 1. 활동 파트너 인원 (상단 선 - 흰색 점선) / Y축 높게 배치 */}
              <motion.path
                d="M 0 250 L 166 220 L 332 150 L 498 90 L 664 60 L 830 45 L 1000 40"
                fill="none"
                stroke="white" 
                strokeWidth="3"
                strokeDasharray="12 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* 2. 전국 지사 규모 (하단 선 - 브랜드 컬러 실선) / Y축 낮게 배치 */}
              <motion.path
                d="M 0 330 L 166 310 L 332 260 L 498 190 L 664 150 L 830 135 L 1000 132"
                fill="none"
                stroke={BRAND_COLOR}
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* 끝점 포인트 (브랜드 컬러) */}
              <motion.circle
                cx="1000" cy="132" r="8"
                fill={BRAND_COLOR}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                style={{ filter: `drop-shadow(0 0 15px ${BRAND_COLOR})` }}
              />

              {/* 끝점 포인트 (화이트) */}
              <motion.circle
                cx="1000" cy="40" r="6"
                fill="white"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                style={{ filter: "drop-shadow(0 0 10px white)" }}
              />
            </svg>

            <div className="absolute -bottom-14 w-full flex justify-between px-2 text-white/40 font-semibold text-[11px]">
              {timeline.map((date) => <span key={date}>{date}</span>)}
            </div>
          </div>

          <div className="mt-28 lg:mt-0 lg:absolute lg:top-14 lg:right-14 text-left lg:text-right">
            <FadeUp delay={1.2}>
              <div className={`text-[10px] text-[${BRAND_COLOR}] font-black mb-3 tracking-[0.2em]`}>2026년 상반기 운영 현황</div>
              <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3">30개 지사</div>
              <div className="text-base lg:text-lg text-white/50 font-light">전국 1,500명 이상의 파트너 활동 중</div>
            </FadeUp>
          </div>
        </div>

        <FadeUp delay={0.6}>
          <p className="mt-24 text-text-body text-xs lg:text-sm opacity-50 font-light tracking-tight text-center lg:text-left">
            라이드온은 2023년 런칭 이후 매 분기 폭발적인 성장을 기록하며, 단순한 숫자를 넘어 데이터로 그 신뢰를 증명하고 있습니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}