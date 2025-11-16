// src/components/MergeFlow.tsx
"use client";

const steps = [
  { title: "상담/현황 파악", desc: "지부 구조, 계약, 인원 파악" },
  { title: "계약/이관", desc: "지부 정보와 정산 포인트 이관" },
  { title: "운영 연결", desc: "기존 배송망·플릿 이어 붙이기" },
  { title: "안정화", desc: "본사 규격에 맞춰 고도화" },
];

export default function MergeFlow() {
  return (
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* 헤더 */}
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
            MERGE FLOW
          </p>
          <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-white">
            지사 합병은 이렇게 진행됩니다
          </h2>
          <p className="mt-2 text-sm text-white/60">
            현장 중단 없이 단계별로 안정적으로 연결되는 구조입니다.
          </p>
        </header>

        {/* 타임라인 영역 */}
        <div className="mt-8 md:mt-10">
          {/* PC용 수평 라인 */}
          <div className="relative hidden md:block">
            <div className="absolute left-0 right-0 top-5 h-px bg-white/10" />
          </div>

          <ol className="relative flex flex-col gap-7 md:flex-row md:gap-0 md:justify-between">
            {steps.map((step, idx) => (
              <li
                key={step.title}
                className="relative flex-1 md:px-3"
              >
                <div className="flex items-start gap-4 md:flex-col md:items-start">
                  {/* STEP 동그라미 */}
                  <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#FFB800]/60 bg-[#111111] shadow-sm md:mb-3">
                    <span className="text-[11px] font-semibold text-[#FFB800]">
                      {idx + 1}
                    </span>
                  </div>

                  {/* 모바일 세로 라인 */}
                  {idx !== steps.length - 1 && (
                    <div className="absolute left-5 top-10 h-full w-px bg-white/10 md:hidden" />
                  )}

                  {/* 텍스트 블록 */}
                  <div className="md:mt-1">
                    <p className="text-sm font-semibold text-white">
                      {step.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-[13px] text-white/60 leading-relaxed">
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
