// src/components/ContactSection.tsx
"use client";

import React from "react";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { MessageCircle, Mail, MapPin, ShieldCheck, Building2, Wrench } from "lucide-react";

export default function ContactSection() {
  const BRAND_COLOR = "#FFB800"; // 라이드온 브랜드 컬러 (옐로우)

  const partnerships = [
    {
      title: "지사 및 지점 파트너",
      desc: "국내 최대 업력, 본사가 신뢰하는 1위 네트워크와 함께 성공 가도에 합류하십시오.",
      icon: <MapPin className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
    {
      title: "현장 및 인프라 제휴",
      desc: "정비 센터, 사고 보험, 렌탈 등 라이더의 일상을 함께 책임질 전문 파트너를 기다립니다.",
      icon: <Wrench className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
    {
      title: "기업 비즈니스 제휴",
      desc: "본사 직계 인프라를 기반으로 가장 빠르고 정확한 라스트마일 최적화 솔루션을 제공합니다.",
      icon: <Building2 className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
  ];

  return (
    <section className="relative bg-transparent py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
        
        {/* 상단 헤더: 부제목 추가 및 제목 1줄 변경 */}
        <header className="mb-12"> {/* 여백 축소로 표와 더 가깝게 */}
          <FadeUp delay={0.1}>
            <Eyebrow className="text-[#FFB800] font-normal text-[10px] lg:text-xs mb-6 opacity-90">
              성장을 위한 파트너십
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            <Heading level={2} className="text-[32px] lg:text-[52px] font-black tracking-tighter text-white mb-8 whitespace-nowrap">
              라이드온과 함께 성공의 궤도에 오르십시오.
            </Heading>
          </FadeUp>

          <FadeUp delay={0.3}>
            <BodyText className="text-white/70 text-base lg:text-lg font-light leading-relaxed max-w-3xl">
              검증된 운영 노하우는 파트너의 수익이 되고, 탄탄한 인프라는 성장의 발판이 됩니다. <br className="hidden sm:block" />
              라이드온은 단순한 대행을 넘어 파트너와 함께 현장의 새로운 가치를 만들어갑니다.
            </BodyText>
          </FadeUp>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* 좌측: 제휴 상담 채널 */}
          <div className="lg:col-span-5 space-y-8">
            <FadeUp delay={0.3}>
              <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-6 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                  <ShieldCheck className="w-3 h-3" /> Professional Partnership
                </div>
                <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">제휴 및 상담 문의</h3>
                
                <div className="space-y-4">
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#FAE100] text-[#371D1E] font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    카카오톡 실시간 상담
                  </a>
                  <a 
                    href="mailto:contact@rideon.co.kr" 
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/10 text-white font-bold border border-white/5 transition-all hover:bg-white/20"
                  >
                    <Mail className="w-5 h-5" />
                    공식 제휴 제안서 발송
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 우측: 파트너십 카테고리 */}
          <div className="lg:col-span-7 grid grid-cols-1 gap-6">
            {partnerships.map((item, i) => (
              <FadeUp key={item.title} delay={0.4 + i * 0.1}>
                <div className="group flex items-start gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/[0.05] hover:border-[#FFB800]/20">
                  <div className="p-4 rounded-2xl bg-white/[0.05] group-hover:bg-[#FFB800]/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>

        {/* 하단 역사 강조 문구 */}
        <FadeUp delay={0.8}>
          <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/80 text-sm lg:text-base font-normal tracking-tight text-center md:text-left">
              2022년 강남특공대부터 시작된 라이드온은 본사의 두터운 신뢰를 바탕으로 가장 오래된 업력을 쌓아온 국내 최대 규모의 운영 네트워크입니다.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFB800]/20 bg-[#FFB800]/5 shrink-0">
              <span className="text-[10px] font-bold text-[#FFB800]">RIDE ON UNIVERSE</span>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}