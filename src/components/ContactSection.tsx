// src/components/ContactSection.tsx
"use client";

import React from "react";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { MessageCircle, Mail, MapPin, ShieldCheck, Building2, Wrench, CheckCircle2, HeartPulse } from "lucide-react";

export default function ContactSection() {
  const BRAND_COLOR = "#FFB800";

  const partnerships = [
    {
      title: "지사 및 지점 파트너",
      desc: "국내 최대 업력과 본사 모델의 안착을 지원해온 노하우로\n성공적인 비즈니스 궤도에 합류할 파트너를 찾습니다.",
      icon: <MapPin className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
    {
      title: "현장 및 인프라 제휴",
      desc: "전국 단위 정비 네트워크와 소모품 공급 인프라 등\n라이더 친화적인 현장 환경을 함께 구축할 기업을 기다립니다.",
      icon: <Wrench className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
    {
      title: "사고 및 토탈 케어 제휴",
      desc: "사고 현장 긴급 출동부터 보험수리, 렌탈 서비스까지\n라이더의 완벽한 일상 복구를 지원하는 솔루션을 구축합니다.",
      icon: <HeartPulse className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
    {
      title: "기업 비즈니스 제휴",
      desc: "초기 태동기부터 검증된 운영 역량과 본사 직계 인프라로\n가장 효율적인 라스트마일 최적화 솔루션을 제공합니다.",
      icon: <Building2 className="w-5 h-5" style={{ color: BRAND_COLOR }} />,
    },
  ];

  return (
    <section className="relative bg-transparent py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 relative z-10">
        
        {/* 상단 헤더 */}
        <header className="mb-12">
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
            <BodyText className="mt-8 text-text-body text-sm lg:text-base opacity-70 font-light leading-relaxed max-w-3xl">
              정확한 데이터는 운영의 투명성을 증명하고, 안정적인 시스템은 파트너 성공의 기반이 됩니다. <br className="hidden sm:block" />
              라이드온은 전국 단위의 견고한 인프라를 통해 라스트마일 배달의 가장 앞선 현장 경험을 제공합니다.
            </BodyText>
          </FadeUp>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* 좌측: 제휴 상담 채널 (옹골차게 구성) */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.3} className="h-full">
              <div className="flex flex-col h-full p-10 lg:p-14 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                {/* 시인성 개선 및 제목과의 간격 축소 */}
                <div className="flex items-center gap-2 mb-4 text-white/90 text-[11px] font-bold tracking-[0.2em] uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFB800]" /> 전문 파트너십 안내
                </div>
                
                <div className="mb-8">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">제휴 및 상담 문의</h3>
                  <p className="text-white/40 font-light leading-relaxed text-sm lg:text-base">
                    라이드온의 독보적인 인프라와 함께할<br/>
                    비즈니스 파트너의 문의를 기다립니다.
                  </p>
                </div>

                {/* 체크 리스트: 카드 중간에 콤팩트하게 배치 */}
                <div className="space-y-3 py-6 border-y border-white/5 mb-8">
                  <div className="flex items-center gap-3 text-white/70 text-[13px] lg:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                    <span>업계 최장기 무사고 운영 인프라</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 text-[13px] lg:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                    <span>전담 파트너 매니저 1:1 배정</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/70 text-[13px] lg:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#FFB800]" />
                    <span>24시간 이내 제휴 제안 검토</span>
                  </div>
                </div>
                
                <div className="space-y-4 mt-auto">
                  <a 
                    href="#" 
                    className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-[#FAE100] text-[#371D1E] font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                    카카오톡 실시간 상담
                  </a>
                  <a 
                    href="mailto:contact@rideon.co.kr" 
                    className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl bg-white/10 text-white font-bold border border-white/5 transition-all hover:bg-white/20"
                  >
                    <Mail className="w-5 h-5" />
                    공식 제휴 제안서 발송
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* 우측: 파트너십 카테고리 (순서 재조정 및 여백 제거) */}
          <div className="lg:col-span-7 flex flex-col rounded-[32px] bg-white/[0.02] border border-white/5 overflow-hidden">
            {partnerships.map((item, i) => (
              <FadeUp key={item.title} delay={0.4 + i * 0.1} className="w-full">
                <div className={`group flex items-start gap-6 p-7 transition-all hover:bg-white/[0.05] ${i !== partnerships.length - 1 ? 'border-b border-white/5' : ''}`}>
                  <div className="p-4 rounded-2xl bg-white/[0.05] group-hover:bg-[#FFB800]/10 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2 tracking-tight">{item.title}</h4>
                    <p className="text-sm text-white/50 font-light leading-relaxed whitespace-pre-line">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>

        {/* 하단 역사 강조 문구 */}
        <FadeUp delay={0.8}>
          <div className="mt-10 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/80 text-sm lg:text-base font-normal tracking-tight text-center md:text-left leading-relaxed">
              초기 B2B 배달 모델의 태동기부터 현장 중심의 실행력으로 파트너십의 가치를 증명해온 라이드온은,<br className="hidden md:block" />
              이제 가장 견고한 업력을 바탕으로 국내 최대 규모의 운영 네트워크를 구축하고 있습니다.
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