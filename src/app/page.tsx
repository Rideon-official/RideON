"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // 추가
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper"; // 추가

// 섹션 컴포넌트들
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark">
      {/* ===== Section 1: Hero (Animation Applied) ===== */}
      <section id="hero" className="relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-hero-glow opacity-50" aria-hidden="true" />
        
        <div className="relative mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg grid gap-12 lg:grid-cols-12 items-center">
          
          {/* 왼쪽 컨텐츠: 순차적 등장 (Staggered Effect) */}
          <div className="relative z-10 lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent uppercase tracking-widest2">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="mt-4 text-gradient">
                전국을 연결하는 <br />
                <span className="text-brand-secondary">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-6 max-w-xl text-white/70">
                표준화된 시스템으로 안정적인 배달 운영을 지원합니다. 
                정산부터 렌탈까지, 라이더 성장의 모든 과정을 RIDE ON과 함께하세요.
              </BodyText>
            </FadeUp>

            {/* 통계 지표: 개별적으로 나타남 */}
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="group">
                    <div className="text-brand-accent text-3xl font-bold font-mono transition-transform group-hover:scale-110 origin-left">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-sm text-white/50 font-medium">{stat.label}</div>
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
                  className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-8 py-4 text-sm font-bold text-white shadow-glowOrange transition-all"
                >
                  서비스 둘러보기 <span>↓</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* 오른쪽 비주얼 영역: 둥실둥실 떠있는 효과 추가 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative lg:col-span-5 flex justify-center"
          >
            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] rounded-3xl bg-brand-surface border border-white/5 overflow-hidden shadow-elev2"
            >
              <Image
                src="/main-map.png"
                alt="RIDE ON Network"
                fill
                priority
                className="object-cover opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON Logo"
                  width={280}
                  height={280}
                  className="opacity-90 mix-blend-lighten select-none"
                />
              </div>
              <Starfield density={0.12} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== Section 2: Contents (Scroll Animation) ===== */}
      <section className="bg-white rounded-t-[40px] -mt-10 relative z-20">
        <FadeUp>
          <div id="quick-access" className="pt-10">
            <QuickAccess />
          </div>
        </FadeUp>
        
        <FadeUp delay={0.2}>
          <CoreServices />
        </FadeUp>
        
        <FadeUp>
          <TrustBuilder />
        </FadeUp>
        
        <FadeUp>
          <div id="contact">
            <ContactSection />
          </div>
        </FadeUp>
      </section>
    </main>
  );
}