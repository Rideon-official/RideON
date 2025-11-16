// src/components/ContactSection.tsx
"use client";

import { Users, Wrench, ShieldCheck, Building2 } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-[#0E0E0E] py-16 lg:py-20">
      {/* 다른 섹션과 같은 정렬: max-w-7xl + px-6 */}
      <div className="mx-auto max-w-7xl px-6">
        {/* 상단: 왼쪽 설명 + 오른쪽 CTA 카드 */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-12 items-stretch">
          {/* 왼쪽 텍스트 블록 */}
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
              CONNECT
            </p>
            <h2 className="mt-2 text-[24px] md:text-[28px] font-semibold text-white">
              파트너 네트워크로 연결하세요
            </h2>
            <p className="mt-3 text-[15px] md:text-[16px] text-white/70 leading-relaxed">
              전국 단위 라이더 인프라를 기반으로 정비·사고 처리·금융·의료 네트워크까지
              하나의 구조 안에서 통합 운영합니다.
              <br className="hidden lg:block" />
              새로 합류하는 지사·센터·제휴사 또한 본사 표준에 맞춰 정산·운영·리스크
              체계를 안정적으로 재정비해 드립니다.
            </p>
          </div>

          {/* 오른쪽 노란 CTA 카드 */}
          <div className="md:col-span-6 lg:col-span-7">
            <div
              className="
                relative h-full overflow-hidden rounded-3xl
                bg-gradient-to-r from-[#FFB800] to-[#FFCF4D]
                px-7 py-7 lg:px-9 lg:py-8
                text-[#111111] shadow-[0_18px_40px_rgba(0,0,0,0.35)]
              "
            >
              <div className="absolute -top-20 -right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#4A3300]/80">
                  PARTNER WITH RIDE ON
                </p>
                <h3 className="mt-2 text-[20px] md:text-[22px] font-bold leading-snug">
                  지사 · 정비 · 사고대행 · 기업 제휴 문의
                </h3>
                <p className="mt-3 text-[14px] md:text-[15px] text-[#3B2A00]/85 leading-relaxed">
                  규모나 상황이 달라도 문제 없습니다.
                  <br className="hidden md:block" />
                  현재 운영 방식·조직 구조·지역 특성을 함께 진단하여 지사 합류, 제휴 협력,
                  파트너십 구축까지 가장 적합한 방식을 설계해 드립니다.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href="https://pf.kakao.com/_link" // 실제 카톡 채널 URL로 교체
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center rounded-full
                      bg-[#111111] px-5 py-2.5 text-[14px] font-semibold
                      text-[#FFB800] hover:bg-black transition
                    "
                  >
                    카카오톡으로 제휴 상담하기
                  </a>
                  <a
                    href="mailto:partner@rideon.co.kr"
                    className="
                      inline-flex items-center justify-center rounded-full
                      border border-[#674800] px-4 py-2.5 text-[13px] font-semibold
                      text-[#4A3300] hover:bg-[#FFE9A8]/60 transition
                    "
                  >
                    이메일 제휴 제안 보내기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단: 파트너 유형 4 타일 */}
        <div className="mt-12 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* 지사 / 지점 파트너 */}
          <article className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#121212] px-6 py-6 lg:px-7 lg:py-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFB800]/10 border border-[#FFB800]/40">
                <Users className="h-5 w-5 text-[#FFB800]" />
              </div>
              <p className="text-sm font-semibold text-white">
                지사 · 지점 파트너
              </p>
            </div>
            <p className="text-xs md:text-[13px] text-white/65 leading-relaxed">
              지역 배달 인프라를 함께 만들 지사/지점 파트너를 모집합니다.
              기존 조직도 리스크·정산 구조를 라이드온 기준으로 재설계해 드립니다.
            </p>
          </article>

          {/* 정비 / 센터 제휴 */}
          <article className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#121212] px-6 py-6 lg:px-7 lg:py-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFB800]/10 border border-[#FFB800]/40">
                <Wrench className="h-5 w-5 text-[#FFB800]" />
              </div>
              <p className="text-sm font-semibold text-white">
                정비 · 센터 제휴
              </p>
            </div>
            <p className="text-xs md:text-[13px] text-white/65 leading-relaxed">
              오토바이 정비/튜닝/타이어/소모품 센터와 장기적인 파트너십을 구축하고,
              라이더 유입·정비 수요를 꾸준히 연결합니다.
            </p>
          </article>

          {/* 사고 · 보험 · 렌트 파트너 */}
          <article className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#121212] px-6 py-6 lg:px-7 lg:py-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFB800]/10 border border-[#FFB800]/40">
                <ShieldCheck className="h-5 w-5 text-[#FFB800]" />
              </div>
              <p className="text-sm font-semibold text-white">
                사고 · 보험 · 렌트
              </p>
            </div>
            <p className="text-xs md:text-[13px] text-white/65 leading-relaxed">
              사고대행, 보험사, 렌트/리스사와의 협업으로 라이더가 사고부터 복구까지
              원스톱으로 지원받는 구조를 만듭니다.
            </p>
          </article>

          {/* 기업 · B2B 제휴 */}
          <article className="relative overflow-hidden rounded-2xl border border-white/8 bg-[#121212] px-6 py-6 lg:px-7 lg:py-7">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FFB800]/10 border border-[#FFB800]/40">
                <Building2 className="h-5 w-5 text-[#FFB800]" />
              </div>
              <p className="text-sm font-semibold text-white">
                기업 · B2B 제휴
              </p>
            </div>
            <p className="text-xs md:text-[13px] text-white/65 leading-relaxed">
              프랜차이즈, 플랫폼, 유통사 등 B2B 고객을 위한
              커스텀 배달/정산/운영 솔루션을 함께 설계합니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
