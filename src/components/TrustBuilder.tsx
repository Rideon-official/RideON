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
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-24">
        {/* Header 영역 - 중복을 피하고 명확한 근거 제시 */}
        <header className="max-w-3xl mb-16">
          <FadeUp delay={0.1}>
            {/* 요청하신 대로 굵기를 빼고 가볍게 처리 (font-normal) */}
            <Eyebrow className="text-brand-accent font-normal tracking-[0.2em] text-[10px] lg:text-xs mb-4 opacity-80">
              신뢰와 데이터
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            {/* 상단 문구와 겹치지 않게 '실증적 지표'를 강조 */}
            <Heading
              level={2}
              align="left"
              className="text-[28px] lg:text-[40px] font-black tracking-tighter leading-[1.1] m-0 text-white"
            >
              성장은 숫자로 증명됩니다. <br className="hidden md:block" />
              현장에서 검증된 압도적 지표
            </Heading>
          </FadeUp>

          <FadeUp delay={0.3}>
            {/* 내용을 더 담백하고 신뢰감 있게 수정 */}
            <BodyText className="mt-6 text-text-body text-xs lg:text-sm leading-relaxed opacity-70 max-w-2xl">
              단순한 구호보다 강력한 것은 실제 운영 데이터입니다. <br className="hidden sm:block" />
              라이드온은 투명한 지표를 통해 지속 가능한 파트너십의 기준을 제시합니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* KPI 섹션 */}
        <div className="grid gap-4 sm:grid-cols-3 mb-16">
          {kpis.map((item, i) => (
            <FadeUp key={item.label} delay={0.4 + i * 0.1}>
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm px-6 py-10 transition-all hover:bg-white/[0.05]">
                <div className="text-[10px] lg:text-[11px] text-text-body font-medium tracking-wider opacity-40 uppercase mb-4">
                  {item.label}
                </div>
                <div className="text-3xl lg:text-4xl font-black font-mono text-brand-accent tracking-tighter">
                  {item.value}
                </div>
                <p className="mt-4 text-[11px] lg:text-xs text-text-body opacity-60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* 후기 섹션 - 현장의 목소리로 연결 */}
        <div className="grid gap-6 md:grid-cols-2">
          <FadeUp delay={0.7}>
            <article className="relative h-full rounded-2xl border border-white/5 bg-white/[0.03] px-8 py-10">
              <div className="mb-4 text-2xl font-black text-brand-accent opacity-30">“</div>
              <p className="text-sm lg:text-base leading-relaxed text-text-body font-normal opacity-90">
                가장 큰 변화는 투명성입니다. 본사와 지사 간의 데이터 불일치가 없으니 
                불필요한 감정 소모 없이 오직 운영 효율화에만 집중할 수 있게 되었습니다.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-6 h-[1px] bg-brand-accent/40" />
                <span className="text-[10px] font-medium text-text-body opacity-50">광역 지사 지사장 인터뷰 중</span>
              </div>
            </article>
          </FadeUp>

          <FadeUp delay={0.8}>
            <article className="relative h-full rounded-2xl border border-white/5 bg-white/[0.03] px-8 py-10">
              <div className="mb-4 text-2xl font-black text-brand-accent opacity-30">“</div>
              <p className="text-sm lg:text-base leading-relaxed text-text-body font-normal opacity-90">
                라이더 입장에서 가장 중요한 건 제시간에 정확히 들어오는 정산입니다. 
                라이드온은 이 기본적인 약속을 단 한 번도 어긴 적이 없는 든든한 파트너입니다.
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-6 h-[1px] bg-brand-accent/40" />
                <span className="text-[10px] font-medium text-text-body opacity-50">소속 라이더 만족도 조사 중</span>
              </div>
            </article>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}