"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

// 섹션 컴포넌트들
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark">
      {/* ===== Section 1: Hero Section (가독성 강화 버전) ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* 가독성을 위해 배경을 더 어둡게 눌러주는 레이어 */}
        <div className="absolute inset-0 bg-hero-vignette z-0" aria-hidden="true" />
        <div className="absolute inset-0 bg-black/20 z-0" aria-hidden="true" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid gap-12 lg:grid-cols-12 items-center">
          
          {/* 왼쪽 텍스트 영역: 가독성 핵심 */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-secondary font-bold tracking-[0.2em] mb-4">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="drop-shadow-xl">
                <span className="text-white">전국을 연결하는</span> <br />
                <span className="text-brand-secondary">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-8 max-w-xl text-text-dimmed leading-relaxed text-lg">
                표준화된 시스템으로 안정적인 배달 운영을 지원합니다. <br className="hidden md:block" />
                정산부터 렌탈까지, 라이더 성장의 모든 과정을 <span className="text-white font-semibold">RIDE ON</span>과 함께하세요.
              </BodyText>
            </FadeUp>

            {/* 통계 지표: 가독성을 위해 대비 상향 */}
            <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="relative">
                    <div className="text-brand-secondary text-4xl font-black font-mono tracking-tighter">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-14">
                <motion.a 
                  href="#quick-access" 
                  whileHover={{ scale: 1.05, backgroundColor: "#E6A700" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-brand-secondary px-10 py-5 text-base font-black text-brand-dark shadow-2xl transition-all"
                >
                  서비스 둘러보기 <span>↓</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* 오른쪽 비주얼 영역: 맵 이미지가 글자를 방해하지 않도록 처리 */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
               {/* 뒤쪽 맵 이미지는 흐릿하고 어둡게 처리하여 텍스트 간섭 최소화 */}
              <div className="absolute inset-0 rounded-full bg-brand-primary/20 blur-[80px]" />
              <div className="relative w-full h-full rounded-3xl bg-brand-surface border border-white/10 overflow-hidden shadow-2xl">
                <Image
                  src="/main-map.png"
                  alt="RIDE ON Network"
                  fill
                  className="object-cover opacity-20 mix-blend-luminosity"
                />
                <div className="absolute inset-0 flex items-center justify-center p-16">
                  <Image
                    src="/rideon-logo.png"
                    alt="RIDE ON Logo"
                    width={320}
                    height={320}
                    className="opacity-100 select-none drop-shadow-2xl"
                  />
                </div>
                <Starfield density={0.08} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 섹션들 */}
      <section className="bg-white rounded-t-[50px] relative z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
        <div id="quick-access" className="py-20">
          <QuickAccess />
        </div>
        <CoreServices />
        <TrustBuilder />
        <ContactSection />
      </section>
    </main>
  );
}