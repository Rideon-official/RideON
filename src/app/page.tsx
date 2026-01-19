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
      {/* ===== Section 1: Hero (정렬 라인 및 정사각형 지도박스) ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-start pt-32 lg:pt-48 overflow-hidden">
        {/* 배경 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(26,43,74,0.15),transparent_70%)]" />
        
        {/* 컨테이너: items-start로 상단 라인(빨간 선) 일치시킴 */}
        <div className="relative z-10 mx-auto max-w-6xl w-full px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* [좌측] 텍스트 영역: 마음에 들어하신 글자 크기 유지 */}
          <div className="flex flex-col m-0 p-0"> 
            <FadeUp delay={0.1}>
              <Eyebrow className="text-brand-accent font-bold tracking-[0.15em] mb-4 text-sm">
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

            {/* 수치 지표 */}
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

          {/* [우측] 지도 영역: 정사각형 박스(Square) 형태 */}
          <div className="relative hidden lg:block w-full m-0 p-0">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              // aspect-square로 완벽한 정사각형 박스 생성 + 은은한 테두리로 '네모낳게' 정돈
              className="relative w-full aspect-square max-w-[460px] ml-auto bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm"
            >
              {/* 지도 이미지 */}
              <div className="absolute inset-0 p-8">
                <Image
                  src="/main-map.png"
                  alt="RIDE ON Network"
                  fill
                  className="object-contain opacity-50 p-4" 
                  priority
                />
              </div>
              
              {/* 로고와 글자 모두 포함된 이미지 (중앙 배치) */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-brand-accent/10 blur-[50px] rounded-full scale-150 group-hover:bg-brand-accent/20 transition-colors" />
                  <Image
                    src="/rideon-logo.png" 
                    alt="RIDE ON Logo"
                    width={240} 
                    height={240}
                    className="relative drop-shadow-2xl animate-pulse"
                  />
                </div>
              </div>
              
              <Starfield density={0.02} />
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