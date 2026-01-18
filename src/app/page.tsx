"use client";

import Image from "next/image";
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

export default function Home() {
  return (
    <main>
      {/* ===== Section 1: Hero Section ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-graphite-core text-white"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-80"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/60 via-graphite-core to-black" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg grid gap-12 lg:grid-cols-12 items-center">
          <div className="relative z-10 lg:col-span-7 w-full max-w-2xl">
            <Eyebrow className="text-brand-accent tracking-widest2 uppercase">
              {siteConfig.description}
            </Eyebrow>

            <Heading level={1} align="left" className="mt-4 max-w-3xl">
              <span className="block">전국을 연결하는</span>
              <span className="block text-brand-secondary">라이더 운영 인프라</span>
            </Heading>

            <BodyText className="mt-5 max-w-xl text-white/80">
              표준화된 시스템으로 안정적인 배달 운영을 지원합니다. 정산·출고·교육·렌탈까지,
              라이더 성장의 모든 과정을 한 번에 관리하세요.
            </BodyText>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
              <div>
                <div className="text-brand-accent text-2xl font-semibold font-mono">
                  {siteConfig.stats.branches}
                </div>
                <div className="mt-1 text-sm text-white/70">전국 지부</div>
              </div>
              <div>
                <div className="text-brand-accent text-2xl font-semibold font-mono">
                  {siteConfig.stats.riders}
                </div>
                <div className="mt-1 text-sm text-white/70">활동 라이더</div>
              </div>
              <div>
                <div className="text-brand-accent text-2xl font-semibold font-mono">
                  {siteConfig.stats.payoutAccuracy}
                </div>
                <div className="mt-1 text-sm text-white/70">정산 정확도</div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#quick-access"
                className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-elev1 transition hover:shadow-elev2 hover:bg-brand-secondary/90"
              >
                서비스 둘러보기 <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* 오른쪽 비주얼 영역 최적화 */}
          <div className="relative lg:col-span-5 mt-10 lg:mt-0 flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[380px] md:h-[380px] rounded-2xl bg-[#0F0F0F] border border-white/10 overflow-hidden shadow-elev2">
              <div
                className="absolute inset-0 bg-black/20 z-10 pointer-events-none"
                aria-hidden="true"
              />
              {/* 네트워크 맵 이미지 최적화 */}
              <Image
                src="/main-map.png"
                alt={`${siteConfig.name} 전국 지부 네트워크망 지도`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw" // 반응형 크기 힌트 제공
                className="object-cover opacity-70"
              />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                {/* 메인 로고 이미지 최적화 */}
                <Image
                  src="/rideon-logo.png"
                  alt={`${siteConfig.name} 공식 로고`}
                  width={260}
                  height={260}
                  className="opacity-90 mix-blend-lighten select-none"
                  priority // 우선순위 부여
                />
              </div>
              <div className="absolute inset-0 z-30">
                <Starfield density={0.16} twinkleSpeed={1.0} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#1A2B4A]">
        <div id="quick-access">
          <QuickAccess />
        </div>
        <CoreServices />
        <TrustBuilder />
        <div id="contact">
          <ContactSection />
        </div>
      </section>
    </main>
  );
}