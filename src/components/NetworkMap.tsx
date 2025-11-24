// src/components/NetworkMap.tsx
"use client";

import { useState } from "react";
import { branches, type Branch } from "@/data/branches";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

export default function NetworkMap() {
  const [selected, setSelected] = useState<Branch | null>(branches[0] ?? null);

  return (
    <section className="bg-surface-subtle">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg grid gap-10 lg:grid-cols-12 items-start">
        {/* 왼쪽: 지도 영역 */}
        <div className="lg:col-span-7">
          <Eyebrow className="text-brand-primary">
            NATIONAL NETWORK
          </Eyebrow>
          <Heading
            level={2}
            align="left"
            className="mt-2 text-text-heading"
          >
            전국으로 확장 중인
            <br className="hidden md:block" />
            RIDE ON 지부 네트워크
          </Heading>
          <BodyText className="mt-3 max-w-xl text-text-muted">
            현재 운영 중인 지부와 지사 모집 중인 전략 지역을 한눈에 볼 수 있습니다.
            지도에서 지역을 선택하면 지부 정보와 지사 모집 현황을 확인할 수 있습니다.
          </BodyText>

          {/* 지도 컨테이너 */}
          <div className="mt-8 rounded-3xl border border-slate-200/80 bg-gradient-to-b from-surface-base to-surface-subtle shadow-sm px-4 py-5 sm:px-6 sm:py-6">
            <div className="relative mx-auto max-w-md aspect-[3/4]">
              {/* 한반도 실루엣 느낌의 배경 (추후 /korea-map.svg로 교체 가능) */}
              <div className="absolute inset-[8%] rounded-full bg-gradient-to-b from-brand-primary/15 via-brand-primary/8 to-brand-primary/5" />
              <div className="absolute inset-[18%] rounded-[999px] bg-gradient-to-b from-brand-primary/20 via-brand-primary/10 to-brand-primary/5 blur-sm" />

              {/* 마커들 */}
              {branches.map((b) => {
                const isSelected = selected?.id === b.id;
                const isOpen = b.status === "open";
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setSelected(b)}
                    className={`
                      group absolute -translate-x-1/2 -translate-y-1/2
                      flex flex-col items-center
                      focus:outline-none
                    `}
                    style={{
                      left: `${b.x}%`,
                      top: `${b.y}%`,
                    }}
                  >
                    <span
                      className={`
                        flex h-6 w-6 items-center justify-center rounded-full border
                        text-[10px] font-semibold
                        transition-all duration-200
                        ${
                          isSelected
                            ? "bg-brand-secondary text-white border-brand-secondary shadow-elev1 scale-110"
                            : isOpen
                            ? "bg-surface-base text-brand-accent border-brand-accent/60"
                            : "bg-surface-base text-brand-primary border-brand-primary/50"
                        }
                      `}
                    >
                      {isOpen ? " +" : "●"}
                    </span>
                    <span
                      className={`
                        mt-1 rounded-full px-2 py-0.5 text-[10px]
                        bg-surface-base/90 backdrop-blur
                        border border-slate-200/80
                        text-text-muted
                        whitespace-nowrap
                        group-hover:border-brand-secondary/60
                      `}
                    >
                      {b.city}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-3 text-[11px] text-text-muted">
              ● 운영 중 지부 / + 지사 모집 중인 지역
            </p>
          </div>
        </div>

        {/* 오른쪽: 상세 정보 패널 */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-slate-200/80 bg-surface-base px-5 py-6 shadow-sm lg:sticky lg:top-24">
            <Eyebrow className="text-text-muted">
              {selected ? selected.region : "지부 정보"}
            </Eyebrow>

            <Heading
              level={3}
              align="left"
              className="mt-2 text-text-heading"
            >
              {selected ? selected.name : "지부를 선택해 주세요"}
            </Heading>

            <BodyText className="mt-2 text-text-muted">
              {selected
                ? `${selected.city} 권역을 중심으로 운영되는 RIDE ON 지부입니다.`
                : "지도에서 관심 있는 지역을 선택하면 상세 지부 정보를 확인할 수 있습니다."}
            </BodyText>

            {selected && (
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-text-muted">운영 상태</span>
                  <span
                    className={
                      selected.status === "active"
                        ? "inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700"
                        : "inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-700"
                    }
                  >
                    {selected.status === "active" ? "운영 중" : "지사 모집 중"}
                  </span>
                </div>
                {selected.riders && (
                  <div className="flex items-center justify-between">
                    <span className="text-text-muted">활동 라이더</span>
                    <span className="text-sm font-semibold text-text-heading">
                      {selected.riders}
                    </span>
                  </div>
                )}
                {selected.note && (
                  <p className="pt-2 text-xs leading-relaxed text-text-muted">
                    {selected.note}
                  </p>
                )}
              </div>
            )}

            <div className="mt-6">
              <a
                href="#branch-apply"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-secondary px-5 py-3 text-sm font-semibold text-white shadow-elev1 transition hover:shadow-elev2 hover:bg-brand-secondary/90"
              >
                {selected?.status === "open"
                  ? "이 지역 지사 상담 신청하기"
                  : "지사 운영/확장 상담 신청하기"}
              </a>
              <p className="mt-2 text-[11px] text-text-muted">
                간단한 정보만 남겨주시면, 담당자가 지부 운영 조건과 예상 수익 구조를
                안내드립니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
