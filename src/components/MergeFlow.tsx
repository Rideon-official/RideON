// src/components/MergeFlow.tsx
"use client";

import { ShieldCheck, FileSignature, Workflow, Activity } from "lucide-react";

type Step = {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
};

const steps: Step[] = [
  {
    title: "리스크 체크",
    desc: "계약 조건, 미수금·채권, 세무 리스크를 먼저 진단합니다.",
    icon: ShieldCheck,
  },
  {
    title: "계약 · 정산 구조 재설계",
    desc: "본사 기준에 맞춰 계약·정산 구조를 다시 설계합니다.",
    icon: FileSignature,
  },
  {
    title: "운영 기준 통합",
    desc: "배달 단가, 프로모션, 근무 규칙을 한 기준으로 표준화합니다.",
    icon: Workflow,
  },
  {
    title: "모니터링 · 안정화",
    desc: "초반 3개월 집중 모니터링으로 이슈를 즉시 조정합니다.",
    icon: Activity,
  },
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
            기존 지사의 계약·정산·운영 구조를 그대로 가져오는 것이 아니라,
            본사 기준에 맞춰 리스크를 최소화하고 구조를 다시 설계하는 데
            초점을 둡니다.
          </p>
        </header>

        {/* 데스크탑: 수평 비주얼 타임라인 */}
        <div className="mt-10 hidden md:block">
          <div className="relative">
            {/* 타임라인 메인 라인 */}
            <div className="pointer-events-none absolute left-4 right-4 top-10 h-px bg-gradient-to-r from-white/5 via-[#FFB800]/40 to-white/5" />

            <ol className="relative grid grid-cols-4 gap-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <li
                    key={step.title}
                    className="group relative flex flex-col items-center text-center"
                  >
                    {/* 아이콘 원 */}
                    <div className="relative flex items-center justify-center">
                      {/* 글로우 */}
                      <div className="pointer-events-none absolute -inset-4 rounded-full bg-[#FFB800]/25 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div
                        className="
                          relative flex h-16 w-16 items-center justify-center
                          rounded-full border border-[#FFB800]/70
                          bg-black/80 shadow-[0_0_25px_rgba(255,184,0,0.4)]
                        "
                      >
                        <Icon className="h-7 w-7 text-[#FFB800]" />
                      </div>
                    </div>

                    {/* STEP 라벨 */}
                    <p className="mt-4 text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase">
                      STEP {idx + 1}
                    </p>
                    {/* 타이틀 */}
                    <p className="mt-1 text-sm font-semibold text-[#FFB800]">
                      {step.title}
                    </p>
                    {/* 설명 */}
                    <p className="mt-2 text-xs text-white/65 max-w-[220px] leading-relaxed">
                      {step.desc}
                    </p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* 모바일: 세로 타임라인 버전 */}
        <ol className="mt-6 space-y-6 md:hidden">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isLast = idx === steps.length - 1;
            return (
              <li key={step.title} className="flex gap-4">
                {/* 왼쪽 타임라인 + 아이콘 */}
                <div className="relative flex flex-col items-center">
                  {!isLast && (
                    <span className="absolute top-7 bottom-0 w-px bg-white/15" />
                  )}
                  <div
                    className="
                      relative flex h-12 w-12 items-center justify-center
                      rounded-full border border-[#FFB800]/70 bg-black/80
                      shadow-[0_0_15px_rgba(255,184,0,0.35)]
                    "
                  >
                    <Icon className="h-6 w-6 text-[#FFB800]" />
                  </div>
                </div>

                {/* 오른쪽 텍스트 */}
                <div className="flex-1">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-white/55 uppercase">
                    STEP {idx + 1}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#FFB800]">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-white/70 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
