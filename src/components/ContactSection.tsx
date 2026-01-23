// src/components/ContactSection.tsx
"use client";

import React from "react";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { MessageCircle, Mail, MapPin, ShieldCheck, Building2, Wrench } from "lucide-react";

export default function ContactSection() {
  const BRAND_COLOR = "#FFB800"; // 라이드온 브랜드 컬러

  const partnerships = [
    {
      title: "지사 및 지점 파트너",
      desc: "국내 최대 업력, 본사가 신뢰하는 1위 네트워크와 함께 성장할 파트너를 찾습니다.",
      icon: <MapPin className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
    {
      title: "정비 및 인프라 제휴",
      desc: "정비 센터, 사고/보험/렌탈 등 라이더 친화적인 환경을 함께 구축할 전문 기업을 기다립니다.",
      icon: <Wrench className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
    {
      title: "기업 B2B 제휴",
      desc: "대규모 물류 대행부터 맞춤형 라스트마일 솔루션까지, 기업 고객을 위한 최적의 인프라를 제공합니다.",
      icon: <Building2 className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
  ];

  return (
    <section className="relative bg-transparent py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
        
        {/* 상단 헤더: 부제목 추가 및 제목 1줄 변경 */}
        <div className="max-w-4xl mb-20">
          <FadeUp delay={0.1}>
            {/* 부제목: 얇고 브랜드 색상 적용 */}
            <Eyebrow className="text-[#FFB800] font-normal text-[10px] lg:text-xs mb-6 opacity-90">
              성장을 위한 파트너십
            </Eyebrow>
          </FadeUp>

          <FadeUp delay={0.2}>
            {/* 제목: 임팩트 있는 한 줄 처리 */}
            <Heading level={2} className="text-[32px] lg:text-[52px] font-black tracking-tighter text-white mb-8 whitespace-nowrap">
              라이드온과 함께 물류의 미래를 설계하십시오.
            </Heading>
          </FadeUp>

          <FadeUp delay={0.3}>
            <BodyText className="text-white/70 text-base lg:text-lg font-light leading-relaxed">
              2022년 강남특공대 시절부터 증명해온 독보적인 운영 노하우와 <br className="hidden sm:block" />
              본사(쿠팡)의 깊은 신뢰가 당신의 비즈니스에 가장 확실한 성장 동력이 되어드립니다.
            </BodyText>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
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
                    href="#" // 실제 카카오톡 링크로 연결
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#FAE100] text-[#371D1E] font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    카카오톡으로 실시간 상담하기
                  </a>
                  <a 
                    href="mailto:contact@rideon.co.kr" 
                    className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-white/10 text-white font-bold border border-white/5 transition-all hover:bg-white/20"
                  >
                    <Mail className="w-5 h-5" />
                    공식 제휴 제안서 보내기
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
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[11px] lg:text-xs text-white/30 font-light italic">
              * 라이드온(RIDE ON)은 2022년 강남특공대(이츠특공대) 및 쿠팡플렉스 테스트 모델을 기반으로 성장한 국내 물류 분야의 선구적 모델입니다.
            </p>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFB800]/20 bg-[#FFB800]/5">
              <span className="text-[10px] font-bold text-[#FFB800]">RIDE ON UNIVERSE</span>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}