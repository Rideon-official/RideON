// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

/**
 * 데이터 설정부: 수정이 훨씬 간편해졌습니다.
 */
const timeline = ["23년 상반기", "23년 하반기", "24년 상반기", "24년 하반기", "25년 상반기", "25년 하반기", "26년 상반기"];
const branchValues = [3, 12, 18, 24, 28, 29, 30];      // 23년 상반기 지사 규모 3으로 수정
const riderValues = [100, 580, 850, 1100, 1380, 1450, 1500]; // 23년 상반기 기사수 100명으로 수정

export default function TrustBuilder() {
  const BRAND_COLOR = "#FFB800"; 
  const CHART_WIDTH = 1000;
  const CHART_HEIGHT = 300;
  
  const stepX = CHART_WIDTH / (timeline.length - 1);
  const getBranchY = (val: number) => 300 - (val / 40) * 200; 
  const getRiderY = (val: number) => 250 - (val / 1800) * 200; 

  const branchPath = branchValues.map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${getBranchY(val)}`).join(" ");
  const riderPath = riderValues.map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${getRiderY(val)}`).join(" ");

  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header - 설명 문구 '후기' 삭제 및 재구성 */}
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
              정확한 데이터는 운영의 투명성을 증명하고, 안정적인 시스템은 협력의 기반이 됩니다. <br className="hidden sm:block" />
              라이드온은 전국 단위의 견고한 인프라를 통해 물류 현장의 새로운 표준을 구축하고 있습니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* Chart Section */}
        <div className="relative w-full bg-white/[0.03] rounded-[40px] border border-white/10 p-8 lg:p-14 backdrop-blur-sm">
          
          <div className="flex gap-8 mb-20">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: BRAND_COLOR, boxShadow: `0 0 10px ${BRAND_COLOR}` }} />
              <span className="text-xs font-bold text-white tracking-tight">전국 지사 규모</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-white/80 shadow-[0_0_10px_white]" />
              <span className="text-xs font-bold text-white/80 tracking-tight">활동 파트너 인원</span>
            </div>
          </div>

          <div className="relative h-[350px] w-full flex items-end px-2">
            <div className="absolute inset-0 flex flex-col justify-between opacity-[0.05]">
              {[...Array(6)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white" />)}
            </div>

            <svg viewBox={`0 -50 ${CHART_WIDTH} ${CHART_HEIGHT + 50}`} className="w-full h-full overflow-visible">
              <motion.path
                d={riderPath}
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="8 6"
                strokeOpacity="0.4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />

              <motion.path
                d={branchPath}
                fill="none"
                stroke={BRAND_COLOR}
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
              />

              {timeline.map((_, i) => (
                <g key={i}>
                  <motion.circle
                    cx={i * stepX} cy={getRiderY(riderValues[i])} r="3"
                    fill="white"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 1 + i * 0.1 }}
                  />
                  <motion.text
                    x={i * stepX} y={getRiderY(riderValues[i]) - 15}
                    textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" opacity="0.4"
                  >
                    {riderValues[i].toLocaleString()}
                  </motion.text>

                  <motion.circle
                    cx={i * stepX} cy={getBranchY(branchValues[i])} r="4"
                    fill={BRAND_COLOR}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 + i * 0.1 }}
                  />
                  <motion.text
                    x={i * stepX} y={getBranchY(branchValues[i]) + 25}
                    textAnchor="middle" fill={BRAND_COLOR} fontSize="11" fontWeight="bold"
                  >
                    {branchValues[i]}
                  </motion.text>
                </g>
              ))}
            </svg>

            <div className="absolute -bottom-14 w-full flex justify-between px-2 text-white/30 font-semibold text-[10px] lg:text-[11px]">
              {timeline.map((date) => <span key={date}>{date}</span>)}
            </div>
          </div>

          {/* 우상단 현황 - 폰트 크기 및 굵기 조정 */}
          <div className="mt-28 lg:mt-0 lg:absolute lg:top-14 lg:right-14 text-left lg:text-right">
            <FadeUp delay={1.2}>
              {/* 글자 크게(text-xl), 굵기 제거(font-light) */}
              <div className="text-xl lg:text-2xl font-light mb-4 tracking-tight" style={{ color: BRAND_COLOR }}>
                2026년 상반기 운영 현황
              </div>
              <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3">30개 지사</div>
              <div className="text-base lg:text-lg text-white/50 font-light tracking-tight">전국 1,500명 이상의 파트너 활동 중</div>
            </FadeUp>
          </div>
        </div>

        {/* 하단 한 줄 문구 - 간격 조정(mt-16) 및 문장 재구성 */}
        <FadeUp delay={0.6}>
          <p className="mt-16 text-text-body text-xs lg:text-sm opacity-50 font-light tracking-tight text-center lg:text-left">
            라이드온은 2023년 첫 발을 내딛은 이후, 지속적인 인프라 확장을 통해 단순한 지표 이상의 신뢰를 데이터로 직접 증명하고 있습니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}