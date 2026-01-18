"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";
import Link from "next/link";

import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

export default function Home() {
  return (
    <main className="bg-brand-dark min-h-screen text-white">
      {/* ===== Section 1: Hero (배열 복구) ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* 은은한 광채 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.15),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-6 py-20 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* [좌측] 텍스트 영역 (7/12 비중) */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.2em] mb-4">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-5xl lg:text-6xl font-black tracking-tighter leading-[1.15]">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-8 max-w-xl text-text-body text-xl leading-relaxed">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-bold underline decoration-brand-accent underline-offset-8">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 수치 지표 배열 */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-10">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="text-brand-accent">
                    <div className="text-3xl md:text-4xl font-black font-mono tracking-tighter">{stat.value}</div>
                    <div className="mt-2 text-[11px] text-text-body font-bold tracking-widest uppercase opacity-60">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-14">
                <Link 
                  href="#quick-access" 
                  className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-10 py-5 text-lg font-black text-brand-dark transition-transform hover:scale-105"
                >
                  서비스 시작하기 <span>→</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 비주얼 영역 (5/12 비중): 1번 사진처럼 지도 위에 로고가 딱 오게 배열 */}
          <div className="lg:col-span-5 relative hidden lg:flex items-center justify-center h-full">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[500px] flex items-center justify-center"
            >
              {/* 1. 지도를 중앙에 넓게 배치 (object-right 제거) */}
              <Image
                src="/main-map.png"
                alt="RIDE ON Network"
                fill
                priority
                className="object-contain opacity-80" 
              />
              
              {/* 2. 라이드온 마크를 지도의 정중앙에 띄움 */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Image
                  src="/rideon-logo.png"
                  alt="RIDE ON Logo"
                  width={320} // 1번 느낌을 위해 크기를 조금 더 키움
                  height={320}
                  className="drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                />
              </div>
              
              <Starfield density={0.04} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 하단 섹션 통합 ===== */}
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