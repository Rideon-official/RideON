// src/components/MergeFlow.tsx
"use client";

const steps = [
  {
    title: "리스크 체크",
    desc: "계약 조건, 미수금·채권, 세무 리스크 진단",
  },
  {
    title: "계약 · 정산 구조 재설계",
    desc: "본사 기준으로 계약·정산 구조 재정비",
  },
  {
    title: "운영 기준 통합",
    desc: "배달 단가, 프로모션, 근무 규칙 표준화",
  },
  {
    title: "모니터링 · 안정화",
    desc: "초반 3개월 집중 모니터링, 이슈 즉시 조정",
  },
];

export default function MergeFlow() {
  return (
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* 헤더 */}
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
            MERGE FLOW
          </p>
          <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-white">
            지사 합병은 이렇게 진행됩니다
          </h2>
          <p className="mt-2 text-sm text-white/60">
            리스크 체크부터 운영 기준 통합, 안정화까지 네 단계로 정리합니다.
          </p>
        </header>

        {/* 왼쪽 설명 + 오른쪽 스텝 리스트 */}
        <div className="mt-6 grid gap-8 md:grid-cols-12">
          {/* 왼쪽 설명 블록 */}
          <div className="md:col-span-4">
            <p className="text-sm text-white/60 leading-relaxed">
              기존 지사의 계약·정산·운영 구조를 그대로 가져오는 것이 아니라,
              <br className="hidden xl:block" />
              본사 기준에 맞춰 리스크를 최소화하고 구조를 다시 설계하는 데
              초점을 둡니다.
            </p>
          </div>

          {/* 오른쪽 세로 스텝 리스트 */}
          <ol className="md:col-span-8 mt-2 md:mt-0 space-y-4 divide-y divide-white/10">
            {steps.map((step, idx) => (
              <li key={step.title} className="pt-4 first:pt-0">
                <div className="flex gap-4 md:gap-6">
                  {/* STEP 라벨 영역 */}
                  <div className="min-w-[90px]">
                    <p className="text-[11px] font-semibold tracking-[0.2em] text-[#FFB800]/80 uppercase">
                      STEP {idx + 1}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-[#FFB800]">
                      {step.title}
                    </p>
                  </div>

                  {/* 설명 영역 */}
                  <div className="flex-1">
                    <p className="text-sm text-white/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
