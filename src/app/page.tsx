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
  
  // 숫자와 특수문자 분리 (ex: "1,500+" -> 1500 / "+")
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
    <main className="bg-brand-dark min-h-screen text-white">
      {/* ===== Section 1: Hero (카운트업 & 정밀 간격 최적화) ===== */}
      <section id="hero" className="relative min-h-[95vh] flex items-start pt-32 lg:pt-48 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(10,25,50,0.25),transparent_70%)]" />
        
        <div className="relative z-10 mx-auto max-w-7xl w-full px-4 lg:px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* [좌측] 텍스트 및 버튼 영역 */}
          <div className="flex flex-col m-0 p-0 border-none"> 
            <FadeUp delay={0.1}>
              <div className="mt-0 pt-0">
                <Eyebrow className="text-brand-accent font-black tracking-wider text-[10px] lg:text-xs mt-0 pt-0 py-0 leading-none inline-block mb-2">
                  차세대 배달 운영의 표준
                </Eyebrow>
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              {/* 제목 줄 간격을 leading-[5.8]로 대폭 확장 (겹침 완전 해소) */}
              <Heading level={1} align="left" className="text-[30px] lg:text-[46px] xl:text-[58px] font-black tracking-tighter leading-[5.8] m-0">
                전국을 연결하는 <br />
                <span className="text-brand-accent">라이더 운영 인프라</span>
              </Heading>
            </FadeUp>

            <FadeUp delay={0.3}>
              {/* mt-4로 제목과 아주 가깝게 밀착 (응집력 강화) */}
              <div className="mt-4 flex flex-col gap-2">
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

            {/* 수치 지표 (카운트업 적용) */}
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

            {/* CTA 버튼 영역 (디자인 강화) */}
            <FadeUp delay={0.7}>
              <div className="mt-14 flex flex-wrap gap-5">
                <Link 
                  href="#contact" 
                  className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-10 py-4 text-sm lg:text-base font-black text-brand-dark tracking-tight transition-all hover:scale-105 shadow-[0_20px_40px_rgba(206,255,0,0.2)] active:scale-95"
                >
                  지사 가맹 문의 <span>→</span>
                </Link>

                <Link 
                  href="#quick-access" 
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5 px-10 py-4 text-sm lg:text-base font-black text-white tracking-tight transition-all hover:bg-white/10 hover:scale-105 backdrop-blur-sm shadow-xl active:scale-95"
                >
                  운영 구조 보기 <span>→</span>
                </Link>
              </div>
            </FadeUp>
          </div>

          {/* [우측] 지도 영역 (위치 유지) */}
          <div className="relative hidden lg:block w-full m-0 p-0"> 
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-square max-w-[400px] mx-auto lg:-translate-x-20 border border-white/10 rounded-2xl overflow-hidden bg-black backdrop-blur-2xl mt-0 shadow-2xl"
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
                    width={260} 
                    height={260}
                    className="relative drop-shadow-[0_0_40px_rgba(0,0,0,1)]"
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