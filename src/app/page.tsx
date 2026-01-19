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
      {/* ===== Section 1: Hero (1px 단위 정밀 조정 버전) ===== */}
      <section id="hero" className="relative min-h-[90vh] flex items-start pt-32 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,25,50,0.25),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* [좌측] 텍스트 영역 */}
          <div className="flex flex-col m-0 p-0 border-none"> 
            <FadeUp delay={0.1}>
              <div className="mt-0 pt-0">
                {/* py-[2px]로 미세하게 높이 조절, tracking-wider로 자간 최적화 */}
                <Eyebrow className="text-brand-accent font-black tracking-wider text-xs lg:text-sm mt-0 pt-0 py-[2px] leading-none inline-block mb-6">
                  전국 라이더 운영 인프라
                </Eyebrow>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* leading-[1.6]으로 줄 간격을 조금 더 시원하게 조절 */}
              <Heading level={1} align="left" className="text-3xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[1.6] m-0">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              {/* gap-3으로 세 줄의 간격을 완벽하게 통일 (불균형 해소) */}
              <div className="mt-10 flex flex-col gap-3">
                <BodyText className="max-w-md text-text-body text-sm lg:text-base leading-none opacity-90">
                  표준화된 시스템으로 안정적인 배달 운영을 지원합니다.
                </BodyText>
                <BodyText className="max-w-md text-brand-accent/90 text-sm lg:text-base font-medium leading-none">
                  정산·출고·교육·렌탈까지, 모든 과정을 한 번에 관리하세요.
                </BodyText>
                <BodyText className="max-w-md text-text-body text-sm lg:text-base leading-none opacity-90">
                  대한민국 1등 배달대행 인프라 <span className="text-white font-black underline decoration-brand-accent underline-offset-8">RIDE ON</span>
                </BodyText>
              </div>
            </FadeUp>

            {/* 수치 지표 */}
            <div className="mt-14 grid grid-cols-3 gap-4 border-t border-white/5 pt-8">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div>
                    <div className="text-lg md:text-2xl font-black font-mono text-brand-accent">{stat.value}</div>
                    <div className="mt-1 text-[9px] lg:text-[10px] text-text-body font-bold tracking-tighter opacity-50 uppercase">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-12">
                <Link 
                  href="#quick-access" 
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-black text-brand-dark transition-transform hover:scale-105 shadow-[0_5px_15px_rgba(206,255,0,0.1)]"
                >
                  서비스 시작하기 <span>→</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 지도 영역 (유지) */}
          <div className="relative hidden lg:block w-full m-0 p-0"> 
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[400px] ml-auto border border-white/10 rounded-2xl overflow-hidden bg-black backdrop-blur-2xl mt-0"
            >
              <div className="absolute inset-0"> 
                <Image
                  src="/main-map.png"
                  alt="RIDE ON Network"
                  fill
                  className="object-cover opacity-100 scale-110" 
                  priority
                />
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 blur-[40px] rounded-full scale-150" />
                  <Image
                    src="/rideon-logo.png" 
                    alt="RIDE ON Logo"
                    width={200} 
                    height={200}
                    className="relative drop-shadow-[0_0_30px_rgba(0,0,0,1)]"
                  />
                </div>
              </div>
              
              <Starfield density={0.01} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 하단 섹션들 */}
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