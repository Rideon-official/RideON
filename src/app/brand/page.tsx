"use client";

import Hero from "./components/Hero";
import RideonMeaning from "./components/RideonMeaning";
import About from "./components/About";
import CoreStrengths from "./components/CoreStrengths";
import Journey from "./components/Journey";

// ✅ 메인에서 쓰던 MergeFlow를 BRAND로 이동
import MergeFlow from "@/components/MergeFlow";

export default function BrandPage() {
  return (
    <main className="bg-[#111111] text-white">
      {/* Hero */}
      <Hero />

      {/* RIDEON 알파벳 의미 */}
      <RideonMeaning />

      {/* ✅ BRAND: Story 앵커 (Header에서 /brand#story로 연결됨) */}
      <section id="story">
        {/* About */}
        <About />
      </section>

      {/* Journey */}
      <Journey />

      {/* ✅ BRAND: Network 앵커 (Header에서 /brand#network로 연결될 예정)
          - 지금은 “자리 확보 + 교통정리”가 목적이라 임시 블록만 둠
          - 다음 단계에서 실제 지도/지부 데이터 컴포넌트를 여기에 삽입 */}
      <section id="network" className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8">
            <p className="text-sm font-semibold text-white/70">NATIONAL NETWORK</p>
            <h2 className="mt-2 text-2xl lg:text-3xl font-extrabold">
              전국 지부 네트워크
            </h2>
            <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">
              이 섹션에는 전국 지도/지부 현황/모집 지역 안내가 들어갑니다.
              다음 단계에서 기존 /network 내용을 이 위치로 옮겨서
              BRAND 페이지 안에서 완성도 있게 보여주겠습니다.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/network"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#111111]"
              >
                (임시) 네트워크 페이지 보기 →
              </a>
              <a
                href="#merge-flow"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white/90 hover:border-white/35 transition"
              >
                지사 개설/합병 프로세스 ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ BRAND: Merge Flow 앵커 (Header에서 /brand#merge-flow로 연결될 예정) */}
      <section id="merge-flow">
        <MergeFlow />
      </section>

      {/* Core Strengths */}
      <CoreStrengths />
    </main>
  );
}