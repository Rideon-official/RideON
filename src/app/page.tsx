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
      {/* ===== Section 1: Hero (글자 및 지도 크기 축소, 1:1 비율) ===== */}
      <section id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* 은은한 광채 효과 (그대로 유지) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.15),transparent_70%)]" />
        
        {/* 컨테이너: 너비를 적당히 줄여서(max-w-6xl) 옹골찬 느낌을 줌 */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* [좌측] 텍스트 영역: 글자 크기 전체적으로 축소 */}
          <div className="flex flex-col">
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.2em] mb-3 text-sm lg:text-base"> {/* 글자 크기 축소 */}
                {siteConfig.description}
              </Eyebrow>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* 제목 크기 대폭 축소 (text-5xl/7xl -> text-4xl/5xl) */}
              <Heading level={1} align="left" className="text-4xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[1.15]">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              {/* 본문 크기 축소 (text-lg/xl -> text-base/lg) 및 불투명도 조절 */}
              <BodyText className="mt-6 max-w-lg text-text-body text-base lg:text-lg leading-relaxed opacity-90">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-bold underline decoration-brand-accent underline-offset-4">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 수치 지표 배열: 숫자 크기 축소 */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="text-brand-accent">
                    {/* 숫자 크기 축소 (text-3xl/4xl -> text-2xl/3xl) */}
                    <div className="text-2xl md:text-3xl font-black font-mono tracking-tighter">{stat.value}</div>
                    <div className="mt-1 text-[10px] lg:text-xs text-text-body font-bold tracking-widest uppercase opacity-70">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-12">
                <Link 
                  href="#quick-access" 
                  // 버튼 크기 및 글자 축소
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-black text-brand-dark transition-transform hover:scale-105"
                >
                  서비스 시작하기 <span>→</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 비주얼 영역: 지도 크기 축소 및 선명도 확보 */}
          {/* 높이를 줄이고(h-450px), 최대 너비(max-w-lg)를 주어 크기 제한 */}
          <div className="relative hidden lg:flex items-center justify-end h-[400px] xl:h-[500px] max-w-lg ml-auto">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative w-full h-full"
            >
              {/* 지도가 작아지면서 더 선명해 보임. object-contain 유지 */}
              <Image
                src="/main-map.png"
                alt="RIDE ON Network"
                fill
                priority
                className="object-contain object-right opacity-80" 
              />
              
              {/* 로고 마크: 크기를 조금 줄여서 지도와 어우러지게 함 */}
              <div className="absolute inset-0 flex items-center justify-center z-10 translate-x-4"> {/* 위치 미세 조정 */}
                <div className="relative">
                  <div className="absolute inset-0 bg-brand-accent/30 blur-[80px] rounded-full scale-125" />
                  <Image
                    src="/rideon-mark.png" 
                    alt="RIDE ON Mark"
                    width={220} // 크기 축소
                    height={220}
                    className="relative drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-pulse"
                  />
                </div>
              </div>
              
              <Starfield density={0.03} />
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