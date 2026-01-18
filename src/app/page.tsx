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
      {/* ===== Section 1: Hero (Vivid Map & Clear Text) ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* 오른쪽 지도: 안개를 걷어내고 선명하게 (mix-blend-luminosity로 톤만 조정) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/main-map.png"
            alt="RIDE ON Network Map"
            fill
            priority
            className="object-cover opacity-80 mix-blend-luminosity"
          />
          {/* 텍스트 가독성을 위한 핵심: 왼쪽에서 오른쪽으로 흐려지는 다크 마스크 */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-section-y grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-black tracking-[0.3em] mb-6">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-white drop-shadow-2xl">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-8 max-w-xl text-text-body text-xl leading-relaxed">
                표준화된 시스템으로 안정적인 배달 운영을 지원합니다. <br />
                정산부터 렌탈까지, 모든 과정을 <span className="text-white font-bold">RIDE ON</span>에서 시작하세요.
              </BodyText>
            </FadeUp>

            {/* 통계 지표: 옐로우 포인트로 시선 집중 */}
            <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="group">
                    <div className="text-brand-accent text-4xl font-black font-mono tracking-tighter drop-shadow-lg group-hover:scale-105 transition-transform origin-left">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-xs text-text-muted font-bold tracking-widest uppercase">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-14">
                <motion.a 
                  href="#quick-access" 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255, 184, 0, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-10 py-5 text-lg font-black text-brand-dark transition-all"
                >
                  서비스 둘러보기 <span>↓</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 opacity-30 animate-bounce">
          <span className="text-white text-sm tracking-widest uppercase">Scroll</span>
        </div>
      </section>

      {/* ===== Section 2~5: Deep Dark Seamless Layout ===== */}
      {/* 흰색 배경을 삭제하고, 미세한 경계(border-t)와 여백으로 섹션 구분 */}
      <div className="relative z-20 space-y-0">
        <section id="quick-access" className="bg-brand-dark border-t border-white/5 py-section-y-lg">
          <QuickAccess />
        </section>
        
        <section className="bg-brand-surface py-section-y-lg shadow-inner">
          <CoreServices />
        </section>
        
        <section className="bg-brand-dark py-section-y-lg">
          <TrustBuilder />
        </section>
        
        <section id="contact" className="bg-brand-surface border-y border-white/5 py-section-y-lg">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}