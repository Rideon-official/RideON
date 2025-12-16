"use client";

import Hero from "./components/Hero";
import RideonMeaning from "./components/RideonMeaning";
import About from "./components/About";
import CoreStrengths from "./components/CoreStrengths";
import Journey from "./components/Journey";

import NetworkMap from "@/components/NetworkMap";
import BranchApplyForm from "@/components/BranchApplyForm";
import MergeFlow from "@/components/MergeFlow";

export default function BrandPage() {
  return (
    <main className="bg-[#111111] text-white">
      {/* Hero */}
      <Hero />

      {/* RIDEON 알파벳 의미 */}
      <RideonMeaning />

      {/* ✅ /brand#story 목적지 */}
      <section id="story">
        <About />
      </section>

      <Journey />

      {/* ✅ /brand#network 목적지 (기존 /network 이관) */}
      <section id="network" className="py-16 lg:py-20">
        {/* 네트워크 섹션 상단 인트로 (기존 /network Hero의 핵심만 압축) */}
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:p-8">
            <p className="text-sm font-semibold text-brand-accent tracking-widest2">
              BRANCH NETWORK
            </p>

            <h2 className="mt-3 text-2xl lg:text-3xl font-extrabold">
              전국 배달 인프라,
              <br className="hidden md:block" />
              당신의 지역에서 이어갑니다.
            </h2>

            <p className="mt-4 max-w-2xl text-white/75 leading-relaxed">
              RIDE ON은 수도권을 넘어 전국 주요 권역으로 지부 네트워크를 확장하고 있습니다.
              운영 중인 지부와, 지금 막 지사 모집이 시작된 전략 지역을 한눈에 확인하세요.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#branch-map"
                className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-elev1 transition hover:shadow-elev2 hover:bg-brand-secondary/90"
              >
                전국 지부 현황 보기 <span aria-hidden="true">↓</span>
              </a>
              <a
                href="#branch-apply"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-brand-accent hover:text-brand-accent"
              >
                지사 상담 바로 신청
              </a>
            </div>
          </div>
        </div>

        {/* 지도 */}
        <section id="branch-map" className="mt-10">
          <NetworkMap />
        </section>

        {/* 상담 폼 (컴포넌트 내부에 id가 없다면, 래핑으로 앵커 제공) */}
        <section id="branch-apply">
          <BranchApplyForm />
        </section>
      </section>

      {/* ✅ /brand#merge-flow 목적지 (메인에서 BRAND로 이동) */}
      <section id="merge-flow">
        <MergeFlow />
      </section>

      <CoreStrengths />
    </main>
  );
}
