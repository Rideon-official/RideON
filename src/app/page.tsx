"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion, useInView, animate, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

import CoreServices from "@/components/CoreServices";
import ContactSection from "@/components/ContactSection";
import Starfield from "@/components/Starfield";
import QuickAccess from "@/components/QuickAccess";
import TrustBuilder from "@/components/TrustBuilder";

// --- 숫자 카운트업 컴포넌트 ---
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
    <main className="bg-[#05070A] min-h-screen text-white overflow-x-hidden">
      
      {/* ===== Section 1: Hero ===== */}
      <section id="hero" className="relative min-h-[95vh] flex items-start pt-32 lg:pt-48 overflow-hidden">
        {/* 히어로 배경 광채 */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,25,50,0.3),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="flex flex-col m-0 p-0 border-none"> 
            <FadeUp delay={0.1}>
              <div className="mt-0 pt-0">
                <Eyebrow className="text-brand-accent font-black tracking-wider text-[10px] lg:text-xs mt-0 pt-0 py-0 leading-none inline-block mb-2">
                  차세대 배달 운영의 표준
                </Eyebrow>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <Heading level={1} align="left" className="text-[30px] lg:text-[46px] xl:text-[58px] font-black tracking-tighter leading-[5.2] m-0">
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

          <div className="relative hidden lg:block w-full m-0 p-0"> 
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative w-full aspect-square max-w-[400px] mx-auto lg:-translate-x-20 border border-white/10 rounded-2xl overflow-hidden bg-black backdrop-blur-2xl mt-0">
              <div className="absolute inset-0"> 
                <Image src="/main-map.png" alt="RIDE ON Network" fill className="object-cover opacity-100 scale-110" priority />
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative group">
                  <div className="absolute inset-0 bg-white/5 blur-[40px] rounded-full scale-150" />
                  <Image src="/rideon-logo.png" alt="RIDE ON Logo" width={260} height={260} className="relative" />
                </div>
              </div>
              <Starfield density={0.01} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== 하단 섹션 통합 영역 (배경색 및 광채 통일) ===== */}
      <div className="relative z-20">
        
        {/* Section 2: Quick Access - 히어로 색감 강제 유지 */}
        <section id="quick-access" className="relative py-24 overflow-hidden bg-[#05070A]">
          {/* 오른쪽에서 오는 은은한 빛 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(10,25,50,0.2),transparent_70%)]" />
          <div className="relative z-10">
            <QuickAccess />
          </div>
        </section>

        {/* Section 3: Core Services */}
        <section className="relative py-24 bg-[#05070A] overflow-hidden">
           {/* 왼쪽에서 오는 은은한 빛 */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,25,50,0.15),transparent_70%)]" />
           <div className="relative z-10">
            <CoreServices />
           </div>
        </section>

        {/* Section 4: Trust Builder */}
        <section className="relative py-24 bg-[#05070A] overflow-hidden">
          {/* 중앙 깊은 곳의 빛 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(10,25,50,0.1),transparent_70%)]" />
          <div className="relative z-10">
            <TrustBuilder />
          </div>
        </section>

        {/* Section 5: Contact */}
        <section id="contact" className="relative py-24 bg-[#05070A]">
          <ContactSection />
        </section>
      </div>
    </main>
  );
}