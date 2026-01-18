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
      {/* ===== Section 1: Hero (반반 레이아웃 복구) ===== */}
      <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.2),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid lg:grid-cols-12 gap-8 items-center">
          
          {/* [좌측] 내용 영역 (7/12 비중) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.2em] mb-4">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-5xl md:text-6xl font-black tracking-tighter leading-tight text-white">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-6 max-w-xl text-text-body text-lg md:text-xl leading-relaxed">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-bold">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 통계 지표 */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="text-brand-accent text-3xl font-black font-mono">
                    {stat.value}
                    <div className="mt-1 text-[10px] text-text-body font-bold tracking-widest uppercase opacity-60">{stat.label}</div>
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
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 text-base font-black text-brand-dark"
                >
                  서비스 시작하기 <span>→</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 비주얼 (5/12 비중) - 지도가 잘리지 않게 조정 */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-end items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[480px]"
            >
              {/* 지도가 우측에 꽉 차게 배치 */}
              <Image
                src="/main-map.png"
                alt="RIDE ON Network"
                fill
                priority
                className="object-contain object-right opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON Logo"
                  width={280}
                  height={280}
                  className="drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] select-none"
                />
              </div>
              <Starfield density={0.06} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== Section 2~5: 원톤 테마 (배경색 통일) ===== */}
      <div className="relative z-20">
        <section id="quick-access" className="py-section-y">
          <QuickAccess />
        </section>
        
        <section className="py-section-y border-t border-white/5">
          <CoreServices />
        </section>
        
        <section className="py-section-y border-t border-white/5">
          <TrustBuilder />
        </section>
        
        <section id="contact" className="py-section-y border-t border-white/5">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}