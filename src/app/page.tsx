"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

// 컴포넌트 임포트 (경로 확인 필수)
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      {/* ===== Section 1: Hero (Expansive & Cinematic) ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        
        {/* [Visual] 우측 지도를 화면 끝까지 배치하되, 왼쪽 텍스트와는 그라데이션으로 분리 */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-2/3 z-0">
          <Image
            src="/main-map.png"
            alt="RIDE ON National Network"
            fill
            priority
            className="object-cover opacity-60 mix-blend-luminosity"
          />
          {/* 지도의 왼쪽 경계를 흐리게 만들어 텍스트 영역과 통합 */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent" />
        </div>

        {/* [Lighting] 텍스트 뒤에 은은한 네이비 조명 효과 */}
        <div className="absolute inset-0 bg-hero-glow z-10" />

        <div className="relative z-20 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid lg:grid-cols-2 items-center gap-16">
          
          {/* [Left] Content Area: Typography Hierarchy */}
          <div className="max-w-2xl">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-black tracking-[0.4em] mb-8 text-shadow-premium">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-gradient leading-[1.05] text-6xl md:text-8xl tracking-tighter text-shadow-premium">
                전국을 <br />
                연결하는 <br />
                <span className="text-brand-accent">인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-10 max-w-lg text-text-body text-xl md:text-2xl leading-relaxed text-shadow-premium">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등의 무게감, <span className="text-white font-bold underline decoration-brand-accent/50 underline-offset-8">RIDE ON</span>에서 확인하세요.
              </BodyText>
            </FadeUp>

            {/* Stats Table: Simple but Powerful */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-12">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="relative">
                    <div className="text-brand-accent text-4xl md:text-5xl font-black font-mono tracking-tighter">
                      {stat.value}
                    </div>
                    <div className="mt-3 text-sm text-text-muted font-bold tracking-widest uppercase italic">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-16">
                <motion.a 
                  href="#quick-access" 
                  whileHover={{ scale: 1.05, backgroundColor: "#E6A700" }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 rounded-full bg-brand-accent px-12 py-6 text-xl font-black text-brand-dark shadow-accent-glow transition-all"
                >
                  START RIDE ON <span>→</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* [Right] Floating Logo: 박스 없이 공간감 있게 배치 */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-full h-[500px] flex items-center justify-center"
            >
              <Image
                src="/rideon-logo.png"
                alt="RIDE ON Identity"
                width={500}
                height={500}
                className="opacity-100 drop-shadow-[0_0_50px_rgba(255,184,0,0.2)]"
              />
              <Starfield density={0.05} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Section 2~5: Seamless Deep Dark Layout ===== */}
      <div className="relative z-30">
        <section id="quick-access" className="bg-brand-dark section-divider py-section-y-lg">
          <QuickAccess />
        </section>
        
        <section className="bg-brand-surface py-section-y-lg border-y border-white/[0.02]">
          <CoreServices />
        </section>
        
        <section className="bg-brand-dark py-section-y-lg">
          <TrustBuilder />
        </section>
        
        <section id="contact" className="bg-brand-surface section-divider py-section-y-lg">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}