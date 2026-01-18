"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

// 컴포넌트 임포트 (모든 섹션이 같은 배경을 공유하도록 내부 bg 삭제 권장)
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen text-white">
      {/* ===== Section 1: Hero (확실한 반반 레이아웃) ===== */}
      <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
        {/* 배경 은은한 조명 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.3),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* [Left] 내용 영역 (60%) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.3em] mb-6">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.05] text-white">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-10 max-w-xl text-text-body text-xl md:text-2xl leading-relaxed">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등의 무게감, <span className="text-white font-bold underline decoration-brand-accent underline-offset-8">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 깔끔한 수치 배치 */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-10">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="text-brand-accent text-4xl md:text-5xl font-black font-mono tracking-tighter">
                    {stat.value}
                    <div className="mt-2 text-sm text-text-body font-bold tracking-widest uppercase opacity-60">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-16">
                <motion.a 
                  href="#quick-access" 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-4 rounded-full bg-brand-accent px-12 py-5 text-xl font-black text-brand-dark transition-all"
                >
                  START RIDE ON <span>↓</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* [Right] 비주얼 영역 (40%) - 박스 제거 및 시원한 배치 */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-end items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full aspect-square"
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
                  width={350}
                  height={350}
                  className="drop-shadow-[0_0_50px_rgba(255,184,0,0.2)]"
                />
              </div>
              <Starfield density={0.08} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Section 2~5: Seamless Theme (배경색 통일) ===== */}
      <div className="relative z-20">
        {/* 모든 섹션의 개별 배경색을 지우고 main의 배경색을 그대로 따르게 합니다 */}
        <section id="quick-access" className="py-section-y">
          <QuickAccess />
        </section>
        
        <section className="py-section-y border-t border-white/[0.03]">
          <CoreServices />
        </section>
        
        <section className="py-section-y border-t border-white/[0.03]">
          <TrustBuilder />
        </section>
        
        <section id="contact" className="py-section-y border-t border-white/[0.03]">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}