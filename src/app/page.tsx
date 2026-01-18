"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

// 컴포넌트 임포트
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen text-white">
      {/* ===== Section 1: Hero (Clean & Focused) ===== */}
      <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* 은은한 배경 광채만 유지 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.3),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* [Left] Content Area */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.2em] mb-6">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.1]">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-8 max-w-xl text-text-body text-xl leading-relaxed">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-bold">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* Stats: 깔끔한 배치 */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="text-brand-accent text-3xl md:text-4xl font-black font-mono">
                    {stat.value}
                    <div className="mt-1 text-xs text-text-body font-medium tracking-widest uppercase">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-12">
                <motion.a 
                  href="#quick-access" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-10 py-4 text-lg font-black text-brand-dark shadow-soft-glow"
                >
                  서비스 시작하기 <span>→</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* [Right] Visual: 박스 없이 선명하게 배치 */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-end">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[500px]"
            >
              <Image
                src="/main-map.png"
                alt="RIDE ON Network"
                fill
                className="object-contain opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON Logo"
                  width={300}
                  height={300}
                  className="drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Section 2~5: Seamless Flow (선 없음, 미세한 배경색 차이) ===== */}
      <div className="relative z-20">
        <section id="quick-access" className="bg-brand-dark py-section-y">
          <QuickAccess />
        </section>
        
        <section className="bg-brand-surface py-section-y">
          <CoreServices />
        </section>
        
        <section className="bg-brand-dark py-section-y">
          <TrustBuilder />
        </section>
        
        <section id="contact" className="bg-brand-surface py-section-y">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}