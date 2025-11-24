// src/components/TrustBuilder.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

const kpis = [
  {
    label: "전국 지부",
    value: "25개+",
    desc: "주요 권역을 기준으로 운영되는 지부 네트워크",
  },
  {
    label: "정산 정확도",
    value: "99.9%",
    desc: "표준화된 프로세스로 관리되는 월별 정산 내역",
  },
  {
    label: "활동 라이더",
    value: "1,200+",
    desc: "전국에서 활동 중인 RIDE ON 라이더",
  },
];

export default function TrustBuilder() {
  return (
    <section id="trust-builder" className="bg-surface-base">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg">
        {/* Header */}
        <header className="max-w-3xl">
          <Eyebrow className="text-brand-primary">
            TRUST &amp; DATA
          </Eyebrow>

          <Heading
            level={2}
            align="left"
            className="mt-3 text-text-heading"
          >
            운영 데이터와 현장의 목소리로
            <br className="hidden md:block" />
            신뢰를 증명합니다.
          </Heading>

          <BodyText className="mt-3 text-text-muted">
            숫자는 운영의 안정성을, 후기는 실제 현장의 신뢰를 보여줍니다.
            RIDE ON은 지부와 라이더 모두가 안심하고 성장할 수 있는 환경을 만드는 것을
            가장 중요한 가치로 두고 있습니다.
          </BodyText>
        </header>

        {/* KPI 3개 */}
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {kpis.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200/70 bg-surface-subtle px-5 py-6 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-widest2 text-text-muted">
                {item.label}
              </div>
              <div className="mt-3 text-2xl font-semibold text-brand-accent font-mono">
                {item.value}
              </div>
              <p className="mt-2 text-sm text-text-muted">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 후기 카드 2개 */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <article className="relative rounded-2xl border border-slate-200/80 bg-surface-subtle px-6 py-7 shadow-sm">
            <div className="mb-3 text-3xl leading-none text-brand-secondary">
              “
            </div>
            <p className="text-sm leading-relaxed text-text-body">
              RIDE ON과 함께한 뒤로 정산 스트레스가 사라졌습니다. 월말·월초에
              정산 내역을 다시 확인해야 하는 일이 거의 없고, 문제가 생겨도 본사에서
              데이터를 바로 공유해 주기 때문에 지부 운영에만 집중할 수 있습니다.
            </p>
            <div className="mt-5 text-xs font-semibold text-text-muted">
              부산 지부장 박OO
            </div>
          </article>

          <article className="relative rounded-2xl border border-slate-200/80 bg-surface-subtle px-6 py-7 shadow-sm">
            <div className="mb-3 text-3xl leading-none text-brand-secondary">
              “
            </div>
            <p className="text-sm leading-relaxed text-text-body">
              처음 배달 일을 시작할 때 가장 걱정됐던 건 정산과 사고 처리였는데,
              RIDE ON에서는 교육 과정에서부터 상황별 대응 방법을 자세히 알려주고
              실제로 문제가 생겼을 때도 지부와 본사가 함께 도와줘서 혼자라는 느낌이
              들지 않습니다.
            </p>
            <div className="mt-5 text-xs font-semibold text-text-muted">
              수도권 전담 라이더 김OO
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
