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
      {/* ===== Section 1: Hero (비율 및 레이아웃 복구) ===== */}
      <section id="hero" className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* 은은한 광채 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.15),transparent_70%)]" />
        
        {/* 컨테이너: max-w-7xl(1280px)에서 max-w-[1440px]로 넓혀서 사진처럼 여유로운 공간 확보 */}
        <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 lg:px-10 py-20 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* [좌측] 텍스트 영역 (정확히 50% 차지) */}
          <div className="flex flex-col">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.2em] mb-4">
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-5xl lg:text-7xl font-black tracking-tighter leading-[1.1]">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <BodyText className="mt-8 max-w-xl text-text-body text-xl leading-relaxed opacity-80">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-bold underline decoration-brand-accent underline-offset-8">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 수치 지표 배열 */}
            <div className="mt-12 grid grid-cols-3 gap-8">
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

          {/* [우측] 비주얼 영역 (정확히 50% 차지): 지도가 잘리지 않고 시원하게 배치 */}
          <div className="relative hidden lg:flex items-center justify-end h-[600px] xl:h-[700px]">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              {/* 지도를 우측 정렬(object-right)하여 텍스트와 겹치지 않게 배치 */}
              <Image
                src="/main-map.png"
                alt="RIDE ON Network"
                fill
                priority
                className="object-contain object-right opacity-70" 
              />
              
              {/* 로고 마크: 사진처럼 지도의 특정 포인트 느낌이 나도록 중앙보다 살짝 우측 배치 가능 (원하시면 위치 조정) */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                   {/* 로고 뒤 은은한 글로우 효과 추가 */}
                  <div className="absolute inset-0 bg-brand-accent/20 blur-[100px] rounded-full scale-150" />
                  <Image
                    src="/rideon-mark.png" 
                    alt="RIDE ON Mark"
                    width={280} 
                    height={280}
                    className="relative drop-shadow-[0_0_50px_rgba(206,255,0,0.2)] animate-pulse"
                  />
                </div>
              </div>
              
              <Starfield density={0.03} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 하단 섹션 통합 (Hero와 동일한 max-w 적용) ===== */}
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