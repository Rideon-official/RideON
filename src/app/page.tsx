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
{/* 🌌 배경 효과 제거 — 완전한 Graphite Core 톤 */}
<div
  className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#111111] to-[#1A1A1A]"
  aria-hidden="true"
></div>

        <div className="relative mx-auto max-w-7xl px-4 grid lg:grid-cols-12 gap-10 items-center">
          {/* 왼쪽 텍스트 */}
          <div className="relative z-10 lg:col-span-7">
            <p className="text-sm tracking-widest text-white/70">RIDE ON</p>

            <h1 className="mt-2 text-[clamp(28px,6vw,48px)] font-semibold leading-tight text-white">
              전국 배달 인프라 운영의 기준,{" "}
              <span className="text-[#FFB800]">RIDE ON</span>
            </h1>

            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              쿠팡·배민 B2B 운영 네트워크 1위 · 전국 25개 지부
            </p>

            {/* KPI strip */}
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

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-[#FFB800] px-5 py-3 text-sm font-semibold text-black shadow hover:brightness-95 active:translate-y-[1px] transition"
              >
                파트너십·합병 문의
              </a>
            </div>
          </div>

          {/* 오른쪽: 지도 + 로고 오버레이 */}
          <div className="relative lg:col-span-5 mt-12 lg:mt-0 flex justify-center">
            {/* 지도 이미지 */}
            <div className="relative w-[360px] h-[360px]">
              <Image
                src="/main-map.png"
                alt="RIDE ON Network Map"
                fill
                priority
                className="object-cover opacity-70"
              />

              {/* 로고 오버레이 (지도 위에 겹침) */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON Logo"
                  width={220}
                  height={220}
                  className="opacity-90 mix-blend-lighten select-none"
                  priority
                />
              </div>

              {/* 별똥별 */}
              <Starfield density={0.16} twinkleSpeed={1.0} />
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