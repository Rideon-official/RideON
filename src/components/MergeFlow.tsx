// src/components/MergeFlow.tsx
"use client";

import { ShieldCheck, FileCog, Gauge, Activity } from "lucide-react";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

const steps = [
  {
    label: "STEP 1",
    title: "리스크 체크",
    desc: "계약 조건, 미수금·채권, 세무 리스크를 먼저 진단합니다.",
    icon: ShieldCheck,
  },
  {
    label: "STEP 2",
    title: "계약 · 정산 구조 재설계",
    desc: "본사 기준에 맞춰 계약·정산 구조를 다시 설계합니다.",
    icon: FileCog,
  },
  {
    label: "STEP 3",
    title: "지역별 운영 기준 설계",
    desc: "각 지역 상권·라이더 특성에 맞춰 단가·프로모션·근무 규칙을 재설계합니다.",
    icon: Gauge,
  },
  {
    label: "STEP 4",
    title: "모니터링 · 안정화",
    desc: "초반 3개월 집중 모니터링으로 이슈를 즉시 조정합니다.",
    icon: Activity,
  },
];

export default function MergeFlow() {
  return (
    <section className="bg-[#0E0E0E] py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* ===== Header ===== */}
        <header>
          <Eyebrow>MERGE FLOW</Eyebrow>

          <Heading level={2} className="mt-2">
            지사 합병은 이렇게 진행됩니다
          </Heading>

          <BodyText muted className="mt-2 max-w-2xl">
            기존 지사의 계약·정산·운영 구조를 그대로 가져오는 것이 아니라,
            본사 기준에 맞춰 리스크를 최소화하고 구조를 다시 설계하는 데
            초점을 둡니다.
          </BodyText>
        </header>

        {/* ===== Timeline ===== */}
        <div className="relative mt-10 lg:mt-14">
          {/* 가운데 가로 라인 */}
          <div className="pointer-events-none absolute left-0 right-0 top-[52px] h-px bg-gradient-to-r from-transparent via-[#FFB800]/35 to-transparent" />

          <div className="grid gap-10 md:grid-cols-4">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}
                  className="relative flex flex-col items-center text-center text-white"
                >
                  {/* 아이콘 + 발광링 */}
                  <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#FFB800]/60 bg-black/40">
                    <div className="absolute inset-0 rounded-full bg-[#FFB800]/40 blur-lg" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#FFB800] bg-black">
                      <Icon className="h-6 w-6 text-[#FFB800]" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* STEP 라벨 */}
                  <Eyebrow className="text-white/55">
                    {step.label}
                  </Eyebrow>

                  {/* 타이틀 */}
                  <Heading
                    level={4}
                    className="mt-1 text-[#FFB800]"
                  >
                    {step.title}
                  </Heading>

                  {/* 설명 */}
                  <BodyText
                    size="sm"
                    muted
                    className="mt-2 max-w-xs leading-relaxed"
                  >
                    {step.desc}
                  </BodyText>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
