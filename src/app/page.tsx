"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

// 섹션 컴포넌트들
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen text-white">
      {/* ===== Section 1: Hero (반반 레이아웃 복구 + 선명한 지도) ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden border-b border-white/5">
        {/* 배경엔 은은한 네이비 광채만 남기고 지도는 뺍니다 */}
        <div className="absolute inset-0 bg-hero-glow z-0 opacity-40" aria-hidden="true" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid gap-12 lg:grid-cols-12 items-center">
          
          {/* [왼쪽] 내용 (70%) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-black tracking-[0.3em] mb-6">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-gradient leading-[1.1]">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-8 max-w-xl text-text-body text-xl leading-relaxed">
                표준화된 시스템으로 안정적인 배달 운영을 지원합니다. <br />
                모든 과정을 <span className="text-white font-bold underline decoration-brand-accent underline-offset-8">RIDE ON</span>과 함께하세요.
              </BodyText>
            </FadeUp>

            {/* 통계 지표 */}
            <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="group">
                    <div className="text-brand-accent text-4xl font-black font-mono tracking-tighter">
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-10 py-5 text-lg font-black text-brand-dark shadow-glow-accent transition-all"
                >
                  서비스 둘러보기 <span>↓</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* [오른쪽] 사진 박스 (50%) - 안개 제거 및 선명도 강화 */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-[340px] h-[340px] md:w-[450px] md:h-[450px] rounded-[2.5rem] bg-brand-surface border border-white/10 overflow-hidden shadow-2xl"
            >
              {/* 지도 이미지: opacity를 높이고 선명하게 유지 */}
              <Image
                src="/main-map.png"
                alt="RIDE ON Network"
                fill
                priority
                className="object-cover opacity-60" // 20%에서 60%로 상향하여 선명하게
              />
              
              {/* 중앙 로고 */}
              <div className="absolute inset-0 z-20 flex items-center justify-center p-16">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON Logo"
                  width={320}
                  height={320}
                  className="opacity-100 drop-shadow-[0_0_30px_rgba(255,184,0,0.3)]"
                />
              </div>
              
              <Starfield density={0.12} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Section 2~5: 다크 테마 유지 (여백 확보) ===== */}
      <div className="relative z-30">
        <section id="quick-access" className="bg-brand-dark py-section-y-lg">
          <QuickAccess />
        </section>
        
        <section className="bg-brand-surface py-section-y-lg border-y border-white/5">
          <CoreServices />
        </section>
        
        <section className="bg-brand-dark py-section-y-lg">
          <TrustBuilder />
        </section>
        
        <section id="contact" className="bg-brand-surface py-section-y-lg">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}