// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

/**
 * 데이터 설정부: 이 숫자들만 수정하면 그래프가 자동으로 업데이트됩니다.
 */
const timeline = ["23년 상반기", "23년 하반기", "24년 상반기", "24년 하반기", "25년 상반기", "25년 하반기", "26년 상반기"];
const branchValues = [5, 12, 18, 24, 28, 29, 30];      // 전국 지사 수
const riderValues = [250, 580, 850, 1100, 1380, 1450, 1500]; // 활동 파트너 수

export default function TrustBuilder() {
  const BRAND_COLOR = "#FFB800"; // 라이드온 브랜드 컬러 (옐로우/골드)
  const CHART_WIDTH = 1000;
  const CHART_HEIGHT = 300;
  
  // 데이터 포인트 간의 간격 계산
  const stepX = CHART_WIDTH / (timeline.length - 1);

  // 값을 SVG 좌표로 변환하는 함수 (데이터 범위에 따라 Y축 밸런스 조정)
  const getBranchY = (val: number) => 300 - (val / 40) * 200; // 지사는 아래쪽 영역 (최대 40개 기준)
  const getRiderY = (val: number) => 250 - (val / 1800) * 200; // 인원은 위쪽 영역 (최대 1800명 기준)

  // 선 경로(Path) 생성
  const branchPath = branchValues.map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${getBranchY(val)}`).join(" ");
  const riderPath = riderValues.map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * stepX} ${getRiderY(val)}`).join(" ");

  return (
    <section className="bg-transparent overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32">
        
        {/* Header - 요청하신 텍스트 반영 */}
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
            {/* 배경 그리드 */}
            <div className="absolute inset-0 flex flex-col justify-between opacity-[0.05]">
              {[...Array(6)].map((_, i) => <div key={i} className="w-full h-[1px] bg-white" />)}
            </div>

            <svg viewBox={`0 -50 ${CHART_WIDTH} ${CHART_HEIGHT + 50}`} className="w-full h-full overflow-visible">
              {/* 1. 활동 파트너 선 (흰색 점선) */}
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

              {/* 2. 전국 지사 선 (브랜드색 실선) */}
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

              {/* 각 데이터 포인트에 점(Node)과 숫자 찍기 */}
              {timeline.map((_, i) => (
                <g key={i}>
                  {/* 인원수 포인트 */}
                  <motion.circle
                    cx={i * stepX} cy={getRiderY(riderValues[i])} r="3"
                    fill="white"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 0.6 }} transition={{ delay: 1 + i * 0.1 }}
                  />
                  <motion.text
                    x={i * stepX} y={getRiderY(riderValues[i]) - 15}
                    textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" opacity="0.4"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 0.4 }} transition={{ delay: 1.2 + i * 0.1 }}
                  >
                    {riderValues[i].toLocaleString()}
                  </motion.text>

                  {/* 지사수 포인트 */}
                  <motion.circle
                    cx={i * stepX} cy={getBranchY(branchValues[i])} r="4"
                    fill={BRAND_COLOR}
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.5 + i * 0.1 }}
                  />
                  <motion.text
                    x={i * stepX} y={getBranchY(branchValues[i]) + 25}
                    textAnchor="middle" fill={BRAND_COLOR} fontSize="11" fontWeight="bold"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 0.8 }} transition={{ delay: 1.7 + i * 0.1 }}
                  >
                    {branchValues[i]}
                  </motion.text>
                </g>
              ))}
            </svg>

            {/* X축 라벨 */}
            <div className="absolute -bottom-14 w-full flex justify-between px-2 text-white/30 font-semibold text-[10px] lg:text-[11px]">
              {timeline.map((date) => <span key={date}>{date}</span>)}
            </div>
          </div>

          {/* 우상단 현재 요약 박스 */}
          <div className="mt-28 lg:mt-0 lg:absolute lg:top-14 lg:right-14 text-left lg:text-right">
            <FadeUp delay={1.2}>
              <div className="text-[10px] font-black mb-3 tracking-[0.2em]" style={{ color: BRAND_COLOR }}>2026년 상반기 운영 현황</div>
              <div className="text-5xl lg:text-6xl font-black text-white tracking-tighter mb-3">30개 지사</div>
              <div className="text-base lg:text-lg text-white/50 font-light tracking-tight">전국 1,500명 이상의 파트너 활동 중</div>
            </FadeUp>
          </div>
        </div>

        {/* 하단 한 줄 문구 */}
        <FadeUp delay={0.6}>
          <p className="mt-24 text-text-body text-xs lg:text-sm opacity-50 font-light tracking-tight text-center lg:text-left">
            라이드온은 2023년 런칭 이후 매 분기 폭발적인 성장을 기록하며, 단순한 숫자를 넘어 데이터로 그 신뢰를 증명하고 있습니다.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}