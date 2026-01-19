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
      {/* ===== Section 1: Hero (정밀 위치 및 간격 조정 버전) ===== */}
      <section id="hero" className="relative min-h-[95vh] flex items-start pt-32 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,25,50,0.25),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* [좌측] 텍스트 및 버튼 영역 */}
          <div className="flex flex-col m-0 p-0 border-none"> 
            <FadeUp delay={0.1}>
              <div className="mt-0 pt-0">
                <Eyebrow className="text-brand-accent font-black tracking-wider text-[10px] lg:text-xs mt-0 pt-0 py-0 leading-none inline-block mb-1">
                  전국 라이더 운영 인프라
                </Eyebrow>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* 줄 간격을 4.0으로 대폭 늘려 답답함을 완전히 없앴습니다 */}
              <Heading level={1} align="left" className="text-3xl lg:text-5xl xl:text-6xl font-black tracking-tighter leading-[4.0] m-0">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="mt-8 flex flex-col gap-2">
                <BodyText className="max-w-md text-text-body text-xs lg:text-sm leading-relaxed opacity-90">
                  표준화된 시스템으로 안정적인 배달 운영을 지원합니다.
                </BodyText>
                <BodyText className="max-w-md text-brand-accent/90 text-xs lg:text-sm font-semibold leading-relaxed">
                  정산·출고·교육·렌탈까지, 모든 과정을 한 번에 관리하세요.
                </BodyText>
                <BodyText className="max-w-md text-text-body text-xs lg:text-sm leading-relaxed opacity-90">
                  대한민국 1등 배달대행 인프라 <span className="text-white font-black underline decoration-brand-accent underline-offset-8">RIDE ON</span>
                </BodyText>
              </div>
            </FadeUp>

            {/* 수치 지표 (요청하신 데이터로 직접 수정) */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-10">
              {[
                { label: "전국 운영 지사", value: "30개" },
                { label: "실운행 라이더", value: "1,500+" },
                { label: "정산 정확도", value: "99.9%" },
              ].map((stat, i) => (
                <FadeUp key={i} delay={0.4 + i * 0.1}>
                  <div>
                    {/* 수치 폰트 크기 살짝 상향 */}
                    <div className="text-xl md:text-2xl xl:text-3xl font-black font-mono text-brand-accent">{stat.value}</div>
                    {/* 라벨 폰트 1px 상향 */}
                    <div className="mt-2 text-[10px] lg:text-[11px] text-text-body font-bold tracking-tighter opacity-50 uppercase">{stat.label}</div>
                  </div>
                </FadeUp>
              ))}
            </div>

            {/* CTA 버튼 영역 */}
            <FadeUp delay={0.7}>
              <div className="mt-14 flex flex-wrap gap-4">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-xs lg:text-sm font-black text-brand-dark transition-transform hover:scale-105 shadow-lg"
                >
                  지사 가맹 문의 <span>→</span>
                </Link>

                <Link 
                  href="#quick-access" 
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-xs lg:text-sm font-black text-white transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-sm"
                >
                  운영 구조 보기 <span>→</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 지도 영역: 중앙 쪽으로 더 이동시킴 */}
          <div className="relative hidden lg:block w-full m-0 p-0"> 
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              {/* -translate-x-16을 통해 지도 박스를 왼쪽(중앙)으로 더 당겼습니다 */}
              className="relative w-full aspect-square max-w-[400px] mx-auto lg:-translate-x-16 border border-white/10 rounded-2xl overflow-hidden bg-black backdrop-blur-2xl mt-0"
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