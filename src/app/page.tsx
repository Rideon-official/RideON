"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen text-white">
      {/* ===== Section 1: Hero (원래의 이쁜 반반 레이아웃 완벽 복구) ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* 첫 번째 섹션의 은은한 광채 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.15),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid lg:grid-cols-12 gap-8 items-center">
          
          {/* [좌측] 내용 영역 (7/12 비중) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.2em] mb-4">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-6 max-w-xl text-text-body text-lg lg:text-xl leading-relaxed">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-bold underline decoration-brand-accent underline-offset-8">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 깔끔한 수치 배치 */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-8">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="text-brand-accent">
                    <div className="text-3xl md:text-4xl font-black font-mono tracking-tighter">{stat.value}</div>
                    <div className="mt-1 text-[11px] text-text-body font-bold tracking-widest uppercase opacity-60">{stat.label}</div>
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
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-10 py-4 text-lg font-black text-brand-dark"
                >
                  서비스 시작하기 <span>→</span>
                </motion.a>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 비주얼 영역 (5/12 비중) - 잘리지 않게 조정 */}
          <div className="lg:col-span-5 relative hidden lg:flex justify-end items-center h-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square"
            >
              {/* object-contain과 object-right로 지도가 절대 안 잘리고 우측 끝에 붙게 함 */}
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
                  width={300}
                  height={300}
                  className="drop-shadow-[0_0_40px_rgba(0,0,0,0.5)]"
                />
              </div>
              <Starfield density={0.05} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 하단 모든 섹션: 좆같은 줄(Border) 다 지우고 배경 투명화 ===== */}
      <div className="relative z-20">
        <section id="quick-access" className="bg-transparent py-section-y">
          <QuickAccess />
        </section>
        <section className="bg-transparent py-section-y">
          <CoreServices />
        </section>
        <section className="bg-transparent py-section-y">
          <TrustBuilder />
        </section>
        <section id="contact" className="bg-transparent py-section-y">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}