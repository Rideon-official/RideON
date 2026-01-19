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
      {/* ===== Section 1: Hero (두툼한 폰트 & 시원한 레이아웃) ===== */}
      <section id="hero" className="relative min-h-[95vh] flex items-start pt-32 lg:pt-52 overflow-hidden">
        {/* 배경 효과 (청량한 블루/블랙 톤) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,25,50,0.25),transparent_70%)]" />
        
        {/* 컨테이너: max-w-7xl로 하단 섹션들과 왼쪽 정렬 라인을 완벽히 일치시킴 */}
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* [좌측] 텍스트 영역: 두툼하고 시원하게 배치 */}
          <div className="flex flex-col m-0 p-0"> 
            <FadeUp delay={0.1}>
              {/* font-black(900)으로 두께 대폭 강화, mb-8로 여유 확보 */}
              <div className="mt-0 pt-0">
                <Eyebrow className="text-brand-accent font-black tracking-[0.25em] text-sm lg:text-base mt-0 pt-0 leading-none inline-block mb-8">
                  {siteConfig.description}
                </Eyebrow>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* leading-[1.4]로 줄 간격을 시원하게 띄움 */}
              <Heading level={1} align="left" className="text-4xl lg:text-6xl xl:text-7xl font-black tracking-tighter leading-[1.4] m-0 uppercase">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              {/* mt-10으로 Heading과의 간격을 벌려 답답함 해소 */}
              <BodyText className="mt-10 max-w-lg text-text-body text-lg lg:text-xl leading-relaxed opacity-80">
                표준화된 시스템으로 압도적인 운영을 지원합니다. <br />
                대한민국 1등 인프라 <span className="text-white font-black underline decoration-brand-accent underline-offset-8">RIDE ON</span>
              </BodyText>
            </FadeUp>

            {/* 수치 지표 영역: mt-16으로 대폭 확장 */}
            <div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              {[
                { label: "전국 지부", value: siteConfig.stats.branches },
                { label: "활동 라이더", value: siteConfig.stats.riders },
                { label: "정산 정확도", value: siteConfig.stats.payoutAccuracy },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div className="group">
                    <div className="text-2xl md:text-3xl font-black font-mono text-brand-accent group-hover:scale-105 transition-transform origin-left">{stat.value}</div>
                    <div className="mt-2 text-[11px] text-text-body font-bold tracking-widest opacity-40 uppercase">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={0.7}>
              <div className="mt-16">
                <Link 
                  href="#quick-access" 
                  className="inline-flex items-center gap-3 rounded-full bg-brand-accent px-10 py-5 text-base lg:text-lg font-black text-brand-dark transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(206,255,0,0.3)]"
                >
                  서비스 시작하기 <span>→</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 지도 영역: 네모 박스 꽉 찬 느낌 유지 */}
          <div className="relative hidden lg:block w-full m-0 p-0 lg:translate-x-12"> 
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[440px] ml-auto border border-white/10 rounded-3xl overflow-hidden bg-black/60 backdrop-blur-2xl mt-0 shadow-2xl"
            >
              {/* 지도 이미지: object-cover로 검은 여백 완전 제거 */}
              <div className="absolute inset-0"> 
                <Image
                  src="/main-map.png"
                  alt="RIDE ON Network"
                  fill
                  className="object-cover opacity-100 scale-110" 
                  priority
                />
              </div>
              
              {/* 중앙 로고: 선명한 대비 */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 blur-[50px] rounded-full scale-150" />
                  <Image
                    src="/rideon-logo.png" 
                    alt="RIDE ON Logo"
                    width={260} 
                    height={260}
                    className="relative drop-shadow-[0_0_40px_rgba(0,0,0,1)]"
                  />
                </div>
              </div>
              
              <Starfield density={0.015} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 하단 섹션들 (동일한 정렬 라인 유지) ===== */}
      <div className="relative z-20">
        <section id="quick-access" className="py-24">
          <QuickAccess />
        </section>
        <section className="py-24">
          <CoreServices />
        </section>
        <section className="py-24">
          <TrustBuilder />
        </section>
        <section id="contact" className="py-24">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}