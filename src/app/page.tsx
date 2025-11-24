// src/app/page.tsx
"use client";

import Image from "next/image";
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import MergeFlow from "@/components/MergeFlow";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

// 타이포그래피 컴포넌트
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

export default function Home() {
  return (
    <main>
      {/* ===== Section 1: Hero + Integrated KPI ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-graphite-core text-white"
      >
        {/* 배경 그라데이션/노이즈 레이어 (필요 시 조정 가능) */}
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/60 via-graphite-core to-black" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg grid gap-12 lg:grid-cols-12 items-center">
          {/* 왼쪽 텍스트 영역 */}
          <div className="relative z-10 lg:col-span-7 w-full max-w-2xl">
            {/* 상단 라벨 */}
            <Eyebrow className="text-brand-accent tracking-widest2 uppercase">
              전국 라이더 운영 인프라
            </Eyebrow>

            {/* 메인 타이틀 */}
            <Heading
              level={1}
              align="left"
              className="mt-4 max-w-3xl"
            >
              <span className="block">
                전국을 연결하는
              </span>
              <span className="block text-brand-secondary">
                라이더 운영 인프라
              </span>
            </Heading>

            {/* 서브 메시지 */}
            <BodyText className="mt-5 max-w-xl text-white/80">
              표준화된 시스템으로 안정적인 배달 운영을 지원합니다. 정산·출고·교육·렌탈까지,
              라이더 성장의 모든 과정을 한 번에 관리하세요.
            </BodyText>

            {/* KPI 3개 통합 */}
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <div className="text-brand-accent text-2xl font-semibold font-mono">
                  56개
                </div>
                <div className="mt-1 text-sm text-white/70">
                  전국 지부
                </div>
              </div>
              <div>
                <div className="text-brand-accent text-2xl font-semibold font-mono">
                  12,000+
                </div>
                <div className="mt-1 text-sm text-white/70">
                  활동 라이더
                </div>
              </div>
              <div>
                <div className="text-brand-accent text-2xl font-semibold font-mono">
                  98.7%
                </div>
                <div className="mt-1 text-sm text-white/70">
                  정산 정확도
                </div>
              </div>
            </div>

            {/* 서비스 둘러보기 CTA */}
            <div className="mt-10">
              <a
                href="#quick-access"
                className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-elev1 transition hover:shadow-elev2 hover:bg-brand-secondary/90"
              >
                서비스 둘러보기
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* 오른쪽 비주얼 영역 */}
          <div className="relative lg:col-span-5 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-2xl bg-[#0F0F0F] border border-white/10 overflow-hidden shadow-elev2">
              {/* 살짝 어둡게 */}
              <div
                className="absolute inset-0 bg-black/20 z-10 pointer-events-none"
                aria-hidden="true"
              />
              <Image
                src="/main-map.png"
                alt="RIDE ON Network Map"
                fill
                priority
                className="object-cover opacity-70"
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

      {/* ===== Section 2: Quick Access (3-Card) ===== */}
      <QuickAccess />

      {/* ===== Section 3: Core Systems (CoreServices) ===== */}
      <CoreServices />

      {/* ===== Section 4: Trust Builder (데이터 + 후기) ===== */}
      <TrustBuilder />

      {/* ===== Section 5: Merge / Flow (후속 단계에서 재배치/요약 가능) ===== */}
      <MergeFlow />

      {/* ===== Section 6: Contact / Multi-CTA & Form (추후 확장 예정) ===== */}
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
}
