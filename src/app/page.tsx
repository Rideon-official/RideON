// src/app/page.tsx
"use client";

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
        // 헤더랑 살짝 띄우기: pt-16 -> pt-20
        className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#1A1A1A] pt-20 pb-16 lg:pt-24 lg:pb-24"
      >
        {/* 배경 오버레이 */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"
          aria-hidden="true"
        ></div>

        {/* 메인 그리드 */}
        <div className="relative mx-auto max-w-7xl px-4 grid gap-10 lg:grid-cols-12 items-center">
          {/* 왼쪽 텍스트 */}
          <div className="relative z-10 lg:col-span-7">
            <p className="text-sm tracking-widest text-white/70">라이드온</p>

            <h1 className="mt-2 text-[clamp(28px,6vw,48px)] font-semibold leading-tight text-white">
              전국 배달 인프라 운영의 기준{" "}
              <span className="text-[#FFB800]">RIDE ON</span>
            </h1>

            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              쿠팡·배민플러스 공식 파트너 네트워크. 전국 25개 지부가 함께 움직입니다.
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

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/inquiry#지사합병문의하기"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFB800] px-5 py-3 text-sm font-semibold text-black shadow hover:brightness-95 active:translate-y-[1px] transition"
              >
                지사 합병 문의
              </a>
              <a
                href="/inquiry#파트너십문의하기"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                파트너십 문의
              </a>
            </div>
          </div>

          {/* 오른쪽: 지도 박스 */}
          <div className="relative lg:col-span-5 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[360px] md:h-[360px] rounded-2xl bg-[#0F0F0F] border border-white/5 overflow-hidden">
              {/* 어둡게 덮는 레이어 */}
              <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" aria-hidden="true" />

              <Image
                src="/main-map.png"
                alt="RIDE ON Network Map"
                fill
                priority
                className="object-cover opacity-65"
              />

              {/* 로고 오버레이는 위로 올린다 */}
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

              {/* 별똥별은 제일 위 */}
              <div className="absolute inset-0 z-30">
                <Starfield density={0.16} twinkleSpeed={1.0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Core Services ===== */}
      <CoreServices />

      {/* ===== Contact ===== */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
