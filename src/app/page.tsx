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
          <div className="relative z-10 lg:col-span-7 w-full max-w-xl">
            <p className="text-sm tracking-widest text-white/70">라이드온</p>

            <h1 className="mt-2 text-[clamp(32px,7vw,60px)] font-semibold leading-tight text-white">
              <span className="block whitespace-nowrap">
                전국 배달 인프라 통합 솔루션
              </span>
              <span className="block whitespace-nowrap text-[#FFB800]">
                RIDE ON
              </span>
            </h1>

            <p className="mt-4 text-gray-300 text-sm sm:text-base whitespace-nowrap">
              쿠팡·배민 B2B 네트워크를 기반으로 전국 25개 이상 지부를 하나로
              운영합니다.
            </p>

            <div className="mt-2 space-y-1 text-gray-300 text-sm sm:text-base">
              <p>지사장에겐 안정된 운영과 리스·렌트·정산까지 한 번에 지원합니다.</p>
              <p>
                라이더에겐 몸만 와도 바로 일할 수 있는 바이크·장비·정산
                풀패키지를 제공합니다.
              </p>
              <p>
                파트너에겐 전국 1위급 라이더 네트워크와 꾸준한 수요를
                연결합니다.
              </p>
            </div>

            {/* KPI strip */}
            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "25개 지부",
                "월 100만 건 처리",
                "출고율 99.2%",
                "렌트·리스 50대+",
              ].map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[11px] sm:text-xs text-white"
                >
                  <span className="mr-2 inline-block rounded-full bg-[#FFB800] px-2 py-0.5 text-[10px] font-medium text-black">
                    KPI
                  </span>
                  {k}
                </span>
              ))}
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
