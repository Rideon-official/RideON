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
      {/* ===== Section 1: Hero (칼각 정렬 + 지도 우측 밀착) ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-start pt-32 lg:pt-48 overflow-hidden">
        {/* 배경 광채 (청량한 블루톤 반영) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,25,50,0.3),transparent_70%)]" />
        
        {/* 컨테이너: items-start로 상단 라인(빨간 선) 일치 */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* [좌측] 텍스트 영역: 첫 시작점의 마진을 0으로 고정 */}
          <div className="flex flex-col m-0 p-0"> 
            <FadeUp delay={0.1}>
              {/* mt-0으로 상단 라인 고정 */}
              <Eyebrow className="text-brand-accent font-bold tracking-[0.15em] mb-4 text-sm mt-0 leading-none">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[1.1] m-0">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-6 max-w-md text-text-body text-base lg:text-lg leading-relaxed opacity-80">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-semibold underline decoration-brand-accent underline-offset-4">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 수치 지표 영역 */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div>
                    <div className="text-xl md:text-2xl font-black font-mono text-brand-accent">{stat.value}</div>
                    <div className="mt-1 text-[10px] text-text-body font-bold tracking-tighter opacity-50 uppercase">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-10">
                <Link 
                  href="#quick-access" 
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-black text-brand-dark transition-transform hover:scale-105"
                >
                  서비스 시작하기 <span>→</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 지도 영역: 네모 크기 줄이고 우측으로 더 이동 */}
          <div className="relative hidden lg:block w-full m-0 p-0 lg:translate-x-8"> 
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              // mt-0으로 좌측 텍스트와 상단 시작점 일치
              className="relative w-full aspect-square max-w-[380px] ml-auto border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-2xl mt-0"
            >
              {/* 지도 이미지: object-contain으로 사진 전체가 다 보이게 함 + 선명도 100% */}
              <div className="absolute inset-0 p-2"> 
                <Image
                  src="/main-map.png"
                  alt="RIDE ON Network"
                  fill
                  className="object-contain opacity-100" 
                  priority
                />
              </div>
              
              {/* 로고 영역: 중앙 안착 및 화이트 글로우 */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 blur-[40px] rounded-full scale-150" />
                  <Image
                    src="/rideon-logo.png" 
                    alt="RIDE ON Logo"
                    width={220} 
                    height={220}
                    className="relative drop-shadow-[0_0_25px_rgba(0,0,0,0.9)]"
                  />
                </div>
              </div>
              
              <Starfield density={0.01} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 하단 섹션들 ===== */}
      <div className="relative z-20">
        <section id="quick-access" className="py-20">
          <QuickAccess />
        </section>
        <section className="py-20">
          <CoreServices />
        </section>
        <section className="py-20">
          <TrustBuilder />
        </section>
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}