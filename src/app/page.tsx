"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

// 기존 섹션 컴포넌트들 (경로가 맞는지 확인해주세요)
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen">
      {/* ===== Section 1: Hero ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/main-map.png"
            alt="RIDE ON Map"
            fill
            priority
            className="object-cover opacity-90 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-hero-mask z-10" />
        </div>
        
        <div className="relative z-20 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-black tracking-[0.3em] mb-6 drop-shadow-text">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-gradient drop-shadow-text">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-8 max-w-xl text-text-body text-xl drop-shadow-text">
                표준화된 시스템으로 안정적인 배달 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-bold underline decoration-brand-accent underline-offset-8">RIDE ON</span>
              </BodyText>
            </FadeUp>

            <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-3">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="group">
                    <div className="text-brand-accent text-4xl font-black font-mono transition-transform group-hover:scale-105 origin-left">
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
                  className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-10 py-5 text-lg font-black text-brand-dark shadow-glow-accent"
                >
                  서비스 둘러보기 <span>↓</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ===== Section 2~5: Seamless Layout ===== */}
      <div className="relative z-30">
        <section className="bg-brand-dark border-t border-white/5 py-section-y-lg">
          <QuickAccess />
        </section>
        <section className="bg-brand-surface py-section-y-lg">
          <CoreServices />
        </section>
        <section className="bg-brand-dark py-section-y-lg">
          <TrustBuilder />
        </section>
        <section className="bg-brand-surface border-y border-white/5 py-section-y-lg">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}