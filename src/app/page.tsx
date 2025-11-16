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
            <p className="text-[14px] sm:text-[15px] tracking-[0.08em] text-white/70">
              라이드온
            </p>

            <h1 className="mt-3 font-semibold leading-tight text-white">
              <span className="block text-[clamp(26px,4.5vw,38px)] whitespace-nowrap">
                전국 배달 인프라 통합 솔루션
              </span>
              <span className="block text-[clamp(38px,7vw,62px)] whitespace-nowrap text-[#FFB800]">
                RIDE ON
              </span>
            </h1>

            <p className="mt-5 text-gray-300 text-[15px] sm:text-[17px] whitespace-nowrap">
              쿠팡·배민 B2B 네트워크를 기반으로 전국 25개 이상 지부를 하나로
              운영합니다.
            </p>

            <div className="mt-3 space-y-1.5 text-gray-300 text-[13px] sm:text-[15px]">
              <p>
                <span className="font-semibold text-[#FFC94D]">지사장</span>
                에게는 안정된 운영과 리스·렌트·정산까지 한 번에 지원합니다.
              </p>
              <p>
                <span className="font-semibold text-[#FFC94D]">라이더</span>
                에겐 바로 일할 수 있는 바이크·장비·정산 패키지를 제공합니다.
              </p>
              <p>
                <span className="font-semibold text-[#FFC94D]">파트너십</span>
                에는 전국 1위급 라이더 네트워크와 꾸준한 수요를 연결합니다.
              </p>
            </div>

            {/* KPI strip */}
            <div className="mt-6 flex flex-wrap md:flex-nowrap gap-1.5 lg:gap-2">
              {[
                "지사 통합 운영 시스템",
                "라이더 풀세트 원스톱 셋업",
                "전국 단일 정산 프로세스",
                "전문 렌트·리스 인프라",
              ].map((k) => (
                <span
                  key={k}
                  className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1.5 text-[12px] sm:text-[13px] text-white whitespace-nowrap"
                >
                  <span className="mr-1.5 inline-block rounded-full bg-[#FFB800] px-1.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-black">
                    KPI
                  </span>
                  {k}
                </span>
              ))}
            </div>
          </div>

          {/* 오른쪽 비주얼 */}
          <div className="relative lg:col-span-5 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-[360px] h-[360px] md:w-[400px] md:h-[400px] rounded-2xl bg-[#0F0F0F] border border-white/5 overflow-hidden">
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
                  width={260}
                  height={260}
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
