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
        {/* 🌌 배경 오버레이: 섹션 기준, 좌~중앙까지 꽉 */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-[45%] z-0">
          {/* 네온 맵 */}
          <Image
            src="/main-map.png"
            alt="RIDE ON Network Map"
            fill
            priority
            className={`
              object-contain object-left
              opacity-60 mix-blend-screen select-none
              translate-y-[8%] md:translate-y-[10%] lg:translate-y-[12%]
              scale-[1.35] md:scale-[1.55] lg:scale-[1.75]
              -translate-x-[6%] md:-translate-x-[8%] lg:-translate-x-[10%]
              origin-left
              z-0
            `}
          />

          {/* 별똥별 */}
          <Starfield
            density={0.16}
            twinkleSpeed={0.9}
            shootingEvery={0.08}
            accent="#FFB800"
          />
        </div>

        {/* 콘텐츠 그리드 */}
        <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: 텍스트 */}
          <div className="relative z-10">
            <h1 className="font-black tracking-tight text-[clamp(28px,5.6vw,52px)] leading-[1.05]">
              전국을 잇는 배달 인프라,{" "}
              <span className="text-[#FFB800]">RIDE ON</span>
            </h1>

            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              쿠팡·배민 B2B 운영 네트워크 1위 · 전국 25개 지부
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=rider"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold hover:bg-neutral-800"
              >
                기사 가입 문의
              </Link>
              <Link
                href="/apply/branch-merge"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 font-semibold hover:bg-neutral-100 hover:text-black"
              >
                지사장·합병 제안
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-[#FFB800]/40 px-5 py-3 font-medium hover:bg-[#FFB800]/10"
              >
                서비스 살펴보기
              </Link>
            </div>
          </div>

          {/* Right: 로고 */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/rideon-logo.png"
              alt="RIDE ON Logo"
              width={360}
              height={360}
              className="w-[180px] md:w-[220px] lg:w-[280px] h-auto opacity-95"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== Core Services (4카드) ===== */}
      <CoreServices />

      {/* ===== Contact Section ===== */}
      <ContactSection />
    </main>
  );
}
