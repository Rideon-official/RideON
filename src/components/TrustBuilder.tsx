// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

const kpis = [
  {
    label: "네트워크 규모",
    value: "30개 지사",
    desc: "전국 주요 거점을 잇는 최적화된 배달 망",
  },
  {
    label: "정산 신뢰도",
    value: "ZERO",
    desc: "오차 없는 자동 정산으로 실현하는 투명성",
  },
  {
    label: "활동 파트너",
    value: "1,500명+",
    desc: "매일 현장을 누비는 라이드온의 핵심 동력",
  },
];

export default function TrustBuilder() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-32"> {/* 상하 여유 공간 확대 */}
        
        {/* Header 영역 */}
        <header className="max-w-4xl mb-20"> {/* 하단과의 간격 확보 */}
          <FadeUp delay={0.1}>
            {/* 굵기 제거, 자간 기본, 기존 스타일 유지 */}
            <Eyebrow className="text-brand-accent font-normal text-[10px] lg:text-xs mb-5 opacity-90">
              신뢰와 데이터
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            {/* 제목 행간(leading) 넓히고 굵기 강조 */}
            <Heading
              level={2}
              align="left"
              className="text-[32px] lg:text-[48px] font-black tracking-tighter leading-[1.2] m-0 text-white"
            >
              성장은 숫자로 증명됩니다. <br />
              현장에서 검증된 압도적 지표
            </Heading>
          </FadeUp>

          <FadeUp delay={0.3}>
            {/* 본문 한 줄 처리 및 여유로운 간격 */}
            <BodyText className="mt-8 text-text-body text-sm lg:text-base opacity-60 font-light tracking-tight">
              라이드온은 투명한 지표를 통해 지속 가능한 파트너십의 기준을 제시합니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* KPI 섹션 - 카드 디자인 고도화 */}
        <div className="grid gap-6 sm:grid-cols-3 mb-20">
          {kpis.map((item, i) => (
            <FadeUp key={item.label} delay={0.4 + i * 0.1}>
              <div className="group rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05] hover:border-brand-accent/20">
                <div className="text-[11px] text-text-body font-medium opacity-40 mb-5 tracking-tighter">
                  {item.label}
                </div>
                <div className="text-4xl lg:text-5xl font-black font-mono text-brand-accent tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.value}
                </div>
                <p className="mt-5 text-xs text-text-body opacity-50 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* 인터뷰 섹션 - 짜치는 느낌 제거를 위해 디자인 수정 */}
        {/* 만약 여전히 짜치면 여기서부터 삭제하세요! */}
        <div className="grid gap-6 md:grid-cols-2 opacity-80">
          <FadeUp delay={0.7}>
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent px-8 py-10">
              <span className="absolute -top-2 -right-2 text-7xl font-black text-white/[0.02] select-none">“</span>
              <p className="relative z-10 text-sm lg:text-[15px] leading-relaxed text-text-body font-light italic">
                "데이터 불일치가 없으니 불필요한 감정 소모 없이 <br className="hidden lg:block"/>
                오직 운영 효율화에만 집중할 수 있게 되었습니다."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-brand-accent/20 flex items-center justify-center text-[8px] text-brand-accent font-bold">B</div>
                <span className="text-[11px] font-medium text-text-body opacity-40">부산 지역 지사장 파트너</span>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.8}>
            <div className="relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent px-8 py-10">
              <span className="absolute -top-2 -right-2 text-7xl font-black text-white/[0.02] select-none">“</span>
              <p className="relative z-10 text-sm lg:text-[15px] leading-relaxed text-text-body font-light italic">
                "라이더에게 가장 중요한 건 정확한 정산입니다. <br className="hidden lg:block"/>
                라이드온은 이 기본적인 약속을 단 한 번도 어긴 적이 없습니다."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-4 h-4 rounded-full bg-brand-accent/20 flex items-center justify-center text-[8px] text-brand-accent font-bold">R</div>
                <span className="text-[11px] font-medium text-text-body opacity-40">5년 차 전문 라이더 파트너</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}