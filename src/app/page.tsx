// src/app/page.tsx
"use client";

import Image from "next/image";
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Stats from "@/components/Stats";
import MergeFlow from "@/components/MergeFlow";
import Starfield from "@/components/Starfield";

export default function Home() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-[#0E0E0E] pt-20 pb-16 lg:pt-24 lg:pb-24"
      >
        <div className="relative mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div className="relative z-10 lg:col-span-7">
            <p className="text-sm tracking-widest text-white/70">라이드온</p>

            <h1 className="mt-2 text-[clamp(28px,6vw,48px)] font-semibold leading-tight text-white">
              전국 배달 인프라 · 운영/정산 통합 솔루션{" "}
              <span className="text-[#FFB800]">RIDE ON</span>
            </h1>

            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              쿠팡·배민 B2B 운영 네트워크를 기반으로, 전국 25개 지부를 하나의
              시스템으로 연결합니다. 지사장, 라이더, 정비·보험 파트너 모두를
              위한 배달 인프라를 제공합니다.
            </p>

            {/* KPI strip */}
            <div className="mt-6 flex flex-wrap gap-2">
              {["25개 지부", "월 100만 건 처리", "출고율 99.2%"].map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white"
                >
                  <span className="mr-2 inline-block rounded-full bg-[#FFB800] px-2 py-0.5 text-[11px] font-medium text-black">
                    KPI
                  </span>
                  {k}
                </span>
              ))}
            </div>

            <p className="mt-3 text-xs text-white/60">
              지사 합병·운영 안정화, 라이더 수급, 파트너 네트워크를 한 번에
              관리하는 통합 구조를 지향합니다.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              {/* 1순위: 지사장 / 합병 */}
              <a
                href="/inquiry#지사합병문의하기"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFB800] px-5 py-3 text-sm font-semibold text-black shadow hover:brightness-95 active:translate-y-[1px] transition"
              >
                지사 합병 문의
              </a>

              {/* 2순위: 라이더 */}
              <a
                href="/inquiry#라이더가입문의"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                라이더 가입 문의
              </a>

              {/* 3순위: 정비/보험·병원 등 파트너 */}
              <a
                href="/inquiry#파트너십문의하기"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                파트너십 문의
              </a>
            </div>
          </div>

          {/* 오른쪽 비주얼 */}
          <div className="relative lg:col-span-5 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-2xl bg-[#0F0F0F] border border-white/5 overflow-hidden">
              {/* 살짝 어둡게 */}
              <div
                className="absolute inset-0 bg-black/10 z-10 pointer-events-none"
                aria-hidden="true"
              />
              <Image
                src="/main-map.png"
                alt="RIDE ON Network Map"
                fill
                priority
                className="object-cover opacity-65"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON Logo"
                  width={220}
                  height={220}
                  className="opacity-90 mix-blend-lighten select-none"
                  priority
                />
              </div>
              <div className="absolute inset-0 z-30">
                <Starfield density={0.16} twinkleSpeed={1.0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Stats (숫자 섹션) ===== */}
      <Stats />

      {/* ===== Core Services ===== */}
      <CoreServices />

      {/* ===== Merge / Flow ===== */}
      <MergeFlow />

      {/* ===== Contact ===== */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
