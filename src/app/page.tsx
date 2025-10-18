// src/app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import CoreServices from "@/components/CoreServices";
import Starfield from "@/components/Starfield";

export default function Home() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#1A1A1A] pt-20 pb-16 lg:pt-24 lg:pb-24 noise"
      >
        {/* 배경 오버레이: 라디얼 + 노이즈 (가독 보장 & 과한 대비 방지) */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_20%,rgba(255,184,0,0.10)_0%,rgba(0,0,0,0)_70%)]" />
        </div>

        {/* 컨테이너 */}
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-10">
            {/* 왼쪽: 카피 */}
            <div className="relative z-10 lg:col-span-7">
              <p className="text-sm tracking-widest text-white/70">
                RIDE ON
              </p>

              <h1 className="mt-2 text-[clamp(28px,6vw,48px)] font-semibold leading-tight text-white">
                전국 배달 인프라 운영의 기준,{" "}
                <span className="text-[#FFB800]">RIDE ON</span>
              </h1>

              <p className="mt-4 text-gray-300 text-base sm:text-lg">
                쿠팡·배민 B2B 운영 네트워크 1위 · 전국 25개 지부
              </p>

              {/* KPI strip (공통 권장안) */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["25개 지부", "월 ○○만 주문", "출고율 ○○%"].map((k) => (
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

              {/* Primary CTA (공통 권장안: 단일 1차 CTA) */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-xl bg-[#FFB800] px-5 py-3 text-sm font-semibold text-black shadow hover:brightness-95 active:translate-y-[1px] transition"
                >
                  파트너십·합병 문의
                </a>
              </div>
            </div>

            {/* 오른쪽: 비주얼(지도 + 별똥별) */}
            <div className="relative mt-10 lg:mt-0 lg:col-span-5">
              {/* 지도 이미지 */}
              <div className="relative h-[360px] w-full">
                <Image
                  src="/main-map.png"
                  alt="RIDE ON Network Map"
                  fill
                  priority
                  className={`
                    object-cover object-[35%_center]
                    opacity-60 mix-blend-screen select-none
                    [mask-image:linear-gradient(to_bottom,rgba(0,0,0,.95),rgba(0,0,0,.65),rgba(0,0,0,1))]
                  `}
                />
                {/* 별똥별 */}
                <Starfield density={0.16} twinkleSpeed={1.2} />
              </div>

              {/* 로고 (옵션) */}
              <div className="mt-6 flex items-center gap-4">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON"
                  width={280}
                  height={64}
                  className="h-auto w-[180px] md:w-[220px] lg:w-[280px] opacity-95"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Core Services (4카드) ===== */}
      <CoreServices />

      {/* ===== Contact Section ===== */}
      {/* 앵커: 위 CTA의 href="#contact" 와 연결 */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
