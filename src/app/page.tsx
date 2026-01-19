"use client";

import { useEffect, useRef } from "react";
import { useInView, animate, useMotionValue, useTransform, motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

// --- 숫자 카운트업 컴포넌트 (기존 유지) ---
function CountUpNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const numericPart = parseFloat(value.replace(/,/g, "").replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.,]/g, "");
  const hasDecimal = value.includes(".");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const formatted = hasDecimal 
      ? latest.toFixed(1) 
      : Math.floor(latest).toLocaleString();
    return `${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      animate(count, numericPart, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, numericPart]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

export default function Home() {
  return (
    <main className="relative min-h-screen text-white overflow-x-hidden bg-[#05070A]">
      
      {/* [STEP 1] 전역 앰비언트 배경 레이어 
        - fixed를 사용하여 스크롤해도 별빛과 조명이 배경에 고정됩니다.
        - 페이지 전체의 '울퉁불퉁함'을 잡아주는 핵심 요소입니다.
      */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* 전체 페이지 별빛 효과 */}
        <Starfield density={0.08} shootingEvery={0.1} />
        
        {/* 왼쪽 상단 메인 조명 (히어로 섹션의 느낌 유지) */}
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] rounded-full bg-blue-900/15 blur-[120px]" />
        
        {/* 중간 우측 은은한 조명 (스크롤 시 심심하지 않게) */}
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[60%] rounded-full bg-indigo-900/10 blur-[100px]" />
        
        {/* 하단 푸터 근처 조명 */}
        <div className="absolute bottom-[-10%] left-[20%] w-[60%] h-[50%] rounded-full bg-blue-900/10 blur-[120px]" />
      </div>

      {/* [STEP 2] 콘텐츠 레이어 
        - 배경이 fixed이므로 콘텐츠는 relative z-10으로 그 위를 지나갑니다.
      */}
      <div className="relative z-10">
        
        {/* Section 1: Hero */}
        <section id="hero" className="relative min-h-[95vh] flex items-start pt-32 lg:pt-48 overflow-hidden">
          <div className="mx-auto max-w-7xl w-full px-4 lg:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div className="flex flex-col"> 
              <FadeUp delay={0.1}>
                <Eyebrow className="text-brand-accent font-black tracking-wider text-[10px] lg:text-xs mb-2">
                  차세대 배달 운영의 표준
                </Eyebrow>
              </FadeUp>

              <FadeUp delay={0.2}>
                <Heading level={1} align="left" className="text-[30px] lg:text-[46px] xl:text-[58px] font-black tracking-tighter leading-tight m-0">
                  전국을 연결하는 <br />
                  <span className="text-brand-accent">라이더 운영 인프라</span>
                </Heading>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mt-5 flex flex-col gap-2">
                  <BodyText className="max-w-md text-text-body text-xs lg:text-sm leading-relaxed opacity-90">
                    표준화된 시스템으로 안정적인 배달 운영을 지원합니다.
                  </BodyText>
                  <BodyText className="max-w-md text-brand-accent/90 text-xs lg:text-sm font-semibold leading-relaxed">
                    정산·출고·교육·렌탈까지, 모든 과정을 한 번에 관리하세요.
                  </BodyText>
                  <BodyText className="max-w-md text-text-body text-xs lg:text-sm leading-relaxed opacity-90">
                    전국 단위로 검증된 운영 인프라 <span className="text-white font-black underline decoration-brand-accent underline-offset-8">RIDE ON</span>
                  </BodyText>
                </div>
              </FadeUp>

              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/5 pt-10">
                {[
                  { label: "전국 운영 지사", value: "30개" },
                  { label: "실운행 라이더", value: "1,500+" },
                  { label: "정산 정확도", value: "99.9%" },
                ].map((stat, i) => (
                  <FadeUp key={i} delay={0.4 + i * 0.1}>
                    <div>
                      <div className="text-xl md:text-2xl xl:text-3xl font-black font-mono text-brand-accent">
                        <CountUpNumber value={stat.value} />
                      </div>
                      <div className="mt-2 text-[10px] lg:text-[11px] text-text-body font-bold tracking-tighter opacity-50 uppercase">{stat.label}</div>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <FadeUp delay={0.7}>
                <div className="mt-14 flex flex-wrap gap-5">
                  <Link href="#contact" className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-10 py-4 text-sm lg:text-base font-black text-brand-dark tracking-tight transition-all hover:brightness-110 active:scale-95">
                    지사 가맹 문의 <span>→</span>
                  </Link>
                  <Link href="#quick-access" className="inline-flex items-center gap-2 rounded-full border-2 border-white/10 bg-white/5 px-10 py-4 text-sm lg:text-base font-black text-white tracking-tight transition-all hover:bg-white/10 active:scale-95 backdrop-blur-sm">
                    운영 구조 보기 <span>→</span>
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* 히어로 우측 비주얼 (맵 배경은 그대로 유지하되, 내부 Starfield는 제거) */}
            <div className="relative hidden lg:block w-full"> 
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative w-full aspect-square max-w-[400px] mx-auto lg:-translate-x-20 border border-white/10 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-2xl">
                <div className="absolute inset-0"> 
                  <Image src="/main-map.png" alt="RIDE ON Network" fill className="object-cover opacity-80 scale-110" priority />
                </div>
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-white/5 blur-[40px] rounded-full scale-150" />
                    <Image src="/rideon-logo.png" alt="RIDE ON Logo" width={260} height={260} className="relative" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* [STEP 3] 하단 섹션들
          - 개별 섹션에서 bg-[#05070A]와 radial-gradient를 제거했습니다.
          - 배경이 투명해지면서 전역 조명(Global Ambient)이 자연스럽게 비칩니다.
        */}
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