// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

const kpis = [
  {
    label: "전국 지사",
    value: "30개",
    desc: "주요 권역별로 촘촘하게 구축된 운영 네트워크",
  },
  {
    label: "정산 정확도",
    value: "99.9%",
    desc: "표준화된 시스템으로 관리되는 투명한 정산 프로세스",
  },
  {
    label: "실운행 라이더",
    value: "1,500+",
    desc: "전국에서 신뢰를 바탕으로 활동 중인 RIDE ON 파트너",
  },
];

export default function TrustBuilder() {
  return (
    <section className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-24">
        {/* Header 영역 - 히어로 섹션과 폰트 위계 통일 */}
        <header className="max-w-3xl mb-16">
          <FadeUp delay={0.1}>
            {/* 부제목: 한글로 변경 및 히어로 섹션 Eyebrow 스타일 적용 */}
            <Eyebrow className="text-brand-accent font-black tracking-wider text-[10px] lg:text-xs mb-3">
              신뢰와 데이터
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            {/* 제목: 히어로 섹션과 유사한 굵기(font-black) 적용 */}
            <Heading
              level={2}
              align="left"
              className="text-[28px] lg:text-[40px] font-black tracking-tighter leading-tight m-0 text-white"
            >
              운영 데이터와 현장의 목소리로 <br className="hidden md:block" />
              RIDE ON의 가치를 증명합니다.
            </Heading>
          </FadeUp>

          <FadeUp delay={0.3}>
            <BodyText className="mt-6 text-text-body text-xs lg:text-sm leading-relaxed opacity-80 max-w-2xl">
              숫자는 운영의 안정성을, 후기는 실제 현장의 신뢰를 보여줍니다. <br className="hidden sm:block" />
              라이드온은 지사와 라이더 모두가 안심하고 성장할 수 있는 물류 인프라를 만듭니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* KPI 섹션 - 히어로 섹션의 Stat 스타일과 일치 */}
        <div className="grid gap-6 sm:grid-cols-3 mb-16">
          {kpis.map((item, i) => (
            <FadeUp key={item.label} delay={0.4 + i * 0.1}>
              <div className="rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm px-6 py-8 transition-all hover:bg-white/10">
                <div className="text-[10px] lg:text-[11px] text-text-body font-bold tracking-tighter opacity-50 uppercase mb-3">
                  {item.label}
                </div>
                <div className="text-2xl lg:text-3xl font-black font-mono text-brand-accent">
                  {item.value}
                </div>
                <p className="mt-3 text-xs text-text-body opacity-70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* 후기 섹션 - 다크 모드에 최적화된 카드 디자인 */}
        <div className="grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.7}>
            <article className="relative h-full rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm px-8 py-10">
              <div className="mb-4 text-3xl font-black text-brand-accent opacity-50">“</div>
              <p className="text-sm lg:text-base leading-relaxed text-text-body font-medium">
                RIDE ON과 함께한 뒤로 정산 스트레스가 사라졌습니다. 월말·월초에
                정산 내역을 다시 확인해야 하는 일이 거의 없고, 모든 데이터가 투명하게 공유되어 지부 운영에만 집중할 수 있습니다.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-brand-accent/30" />
                <span className="text-[11px] font-bold text-text-body opacity-60">부산 지사 지사장 박OO</span>
              </div>
            </article>
          </FadeUp>

          <FadeUp delay={0.8}>
            <article className="relative h-full rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm px-8 py-10">
              <div className="mb-4 text-3xl font-black text-brand-accent opacity-50">“</div>
              <p className="text-sm lg:text-base leading-relaxed text-text-body font-medium">
                처음 일을 시작할 때 가장 걱정됐던 건 사고 처리와 정산이었는데,
                RIDE ON은 교육부터 현장 지원까지 체계적입니다. 지부와 본사가 함께 도와주니 라이더로서 존중받으며 일한다는 느낌을 받습니다.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-[1px] bg-brand-accent/30" />
                <span className="text-[11px] font-bold text-text-body opacity-60">수도권 전담 라이더 김OO</span>
              </div>
            </article>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}