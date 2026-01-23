// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const timeline = ["23년 상반기", "23년 하반기", "24년 상반기", "24년 하반기", "25년 상반기", "25년 하반기", "26년 상반기"];

export default function TrustBuilder() {
  // 라이드온의 진짜 브랜드 컬러 (#FFB800)
  const BRAND_COLOR = "#FFB800";

  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header - 요청하신 텍스트로 수정 완료 */}
        <header className="mb-20">
          <FadeUp delay={0.1}>
            <Eyebrow className="text-[#FFB800] font-normal text-[10px] lg:text-xs mb-6 opacity-90">
              신뢰를 만드는 데이터
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Heading
              level={2}
              className="text-[32px] lg:text-[52px] font-black tracking-tighter leading-tight m-0 text-white whitespace-nowrap"
            >
              현장에서 검증된 성장 지표
            </Heading>
          </FadeUp>

          <FadeUp delay={0.3}>
            <BodyText className="mt-8 text-text-body text-sm lg:text-base opacity-70 font-light leading-relaxed max-w-3xl">
              숫자는 운영의 안정성을, 후기는 실제 현장의 신뢰를 보여줍니다. <br className="hidden sm:block" />
              라이드온은 지사와 라이더 모두가 안심하고 성장할 수 있는 물류 인프라를 만듭니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* 차트 박스 */}
        <div className="relative w-full bg-white/[0.03] rounded-[40px] border border-white/10 p-8 lg:p-14 backdrop-blur-sm">
          
          {/* 범례 - 브랜드색 동그라미 복구 */}
          <div className="flex gap-8 mb-16">
            <div className="flex items-center gap-3">
              <div 
                className="w-3.5 h-3.5 rounded-full" 
                style={{ backgroundColor: BRAND_COLOR, boxShadow: `0 0 15px ${BRAND_COLOR}60` }} 
              />
              <span className="text-xs font-bold text-white tracking-tight">전국 지사 규모</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
              <span className="text-xs font-bold text-white tracking-tight">활동 파트너 인원</span>
            </div>
          </div>

          <div className="relative h-[350px] w-full flex items-end px-2">
            {/* 가이드 라인 */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-[0.05]">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="w-full h-[1px] bg-white" />
              ))}
            </div>

            <svg viewBox="0 0 1000 350" className="w-full h-full overflow-visible">
              {/* 1. 활동 파트너 인원 (상단 선 - 흰색 점선) / 좌표: 위쪽 */}
              <motion.path
                d="M 0 240 L 166 210 L 332 150 L 498 90 L 664 60 L 830 50 L 1000 45"
                fill="none"
                stroke="white" 
                strokeWidth="3"
                strokeDasharray="12 8"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              {/* 2. 전국 지사 규모 (하단 선 - 브랜드 컬러 실선) / 좌표: 아래쪽 */}
              <motion.path
                d="M 0 320 L 166 300 L 332 260 L 498 190 L 664 160 L 830 145 L 1000 142"
                fill="none"
                stroke={BRAND_COLOR} 
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {/* 끝점 포인트 - 지사 규모 (좌표: 1000, 142) */}
              <motion.circle
                cx="1000" cy="142" r="8"
                fill={BRAND_COLOR}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.8 }}
                style={{ filter: `drop-shadow(0 0 15px ${BRAND_COLOR})` }}
              />

              {/* 끝점 포인트 - 파트너 인원 (좌표: 1000, 45) */}
              <motion.circle
                cx="1000" cy="45" r="6"
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
                <span key={date} className="text-[11px] font-semibold text-white/40 tracking-tighter">
                  {date}
                </span>
              ))}
            </div>
          </div>

          {/* 우상단 현황 요약 */}
          <div className="mt-28 lg:mt-0 lg:absolute lg:top-14 lg:right-14 text-left lg:text-right">
            <FadeUp delay={1.2}>
              <div className="text-[10px] font-black mb-3 tracking-[0.2em]" style={{ color: BRAND_COLOR }}>
                2026년 상반기 운영 현황
              </div>
              <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3">30개 지사</div>
              <div className="text-base lg:text-lg text-white/50 font-light">전국 1,500명 이상의 파트너 활동 중</div>
            </FadeUp>
          </div>
        </div>

        {/* 하단 설명 */}
        <FadeUp delay={0.6}>
          <p className="mt-24 text-text-body text-xs lg:text-sm opacity-50 font-light tracking-tight text-center lg:text-left">
            라이드온은 2023년 런칭 이후 매 분기 폭발적인 성장을 기록하며, 단순한 숫자를 넘어 데이터로 그 신뢰를 증명하고 있습니다.
          </p>
        </FadeUp>

      </div>
    </section>
  );
}