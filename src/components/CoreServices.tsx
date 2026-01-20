"use client";

import { motion } from "framer-motion";
import { Building2, FileText, Wrench, Palette, CheckCircle2 } from "lucide-react";
import { FadeUp } from "./ui/MotionWrapper";
import { Heading, Eyebrow, BodyText } from "./ui/typography";

const systems = [
  {
    title: "지사 통합 운영 시스템",
    role: "BRANCH MANAGEMENT",
    features: [
      "쿠팡이츠·배민 B2B 관제 최적화 지원",
      "지사 간 유기적인 인력 공유 체계 구축",
      "본사 직영급 운영 노하우 및 매뉴얼 전수",
      "실시간 지표 관리용 통합 대시보드 제공"
    ],
    icon: <Building2 className="w-7 h-7 text-brand-accent" />,
    gradient: "from-blue-600/10 to-transparent"
  },
  {
    title: "렌탈 및 리스 인프라",
    role: "RENTAL & LEASE",
    features: [
      "본사 직영 정비 센터 기반 상시 관리",
      "자체 리스 시스템을 통한 운영비 절감",
      "고성능 신규 차량의 안정적인 우선 공급",
      "전국 서비스 센터 및 인프라 비즈니스 지원"
    ],
    icon: <Wrench className="w-7 h-7 text-brand-accent" />,
    gradient: "from-purple-600/10 to-transparent"
  },
  {
    title: "자동 정산 및 대여금 관리",
    role: "ACCOUNTING SYSTEM",
    features: [
      "번거로운 정산 업무의 완전 자동화 구현",
      "365일 정산 전담팀의 상시 밀착 응대",
      "대여금 관리 양식 제공 및 채권 리스크 방지",
      "세무 신고용 증빙 자료 및 서류 신속 지원"
    ],
    icon: <FileText className="w-7 h-7 text-brand-accent" />,
    gradient: "from-indigo-600/10 to-transparent"
  },
  {
    title: "브랜드 마케팅 및 물품 지원",
    role: "BRANDING & GOODS",
    features: [
      "전용 굿즈(조끼·의류·소모품) 제작 지원",
      "본사 차원의 라이더 수급 마케팅 전개",
      "프리미엄 브랜드 이미지 및 홍보 대행",
      "전국 지사망 연계 정보 및 노하우 공유"
    ],
    icon: <Palette className="w-7 h-7 text-brand-accent" />,
    gradient: "from-emerald-600/10 to-transparent"
  }
];

export default function CoreServices() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6 py-12">
      {/* --- 섹션 헤더: 왼쪽 정렬 + 사이드 바 디자인 --- */}
      <div className="mb-16 lg:mb-20 text-left">
        <FadeUp>
          <Eyebrow className="text-brand-accent/80 mb-2 font-bold tracking-tight">
            통합 운영의 새로운 기준
          </Eyebrow>
          
          <Heading level={2} className="text-3xl lg:text-5xl font-black tracking-tighter mb-8">
            All-in-One <span className="text-white">인프라 시스템</span>
          </Heading>

          <div className="max-w-3xl flex flex-col gap-2 border-l-2 border-brand-accent/20 pl-6">
            <BodyText className="text-text-body/80 text-sm lg:text-lg leading-relaxed font-medium">
              지사, 라이더, 파트너가 하나의 유기적인 시스템 안에서 연결됩니다.
            </BodyText>
            <BodyText className="text-brand-accent font-bold text-sm lg:text-lg">
              "복잡한 운영은 라이드온에 맡기고, 지사장님은 성장에만 집중하십시오."
            </BodyText>
          </div>
        </FadeUp>
      </div>

      {/* --- 시스템 카드 섹션 (4열 그리드) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {systems.map((system, index) => (
          <FadeUp key={index} delay={index * 0.1}>
            <div className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-7 transition-all hover:bg-white/[0.04] hover:border-brand-accent/40 overflow-hidden h-full flex flex-col">
              
              {/* 은은한 배경 조명 효과 */}
              <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${system.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* 카드 상단: 아이콘 및 타이틀 */}
              <div className="mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent/10 transition-all duration-300">
                  {system.icon}
                </div>
                <div className="text-[9px] font-black tracking-[0.2em] text-brand-accent/60 uppercase mb-2">
                  {system.role}
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-brand-accent transition-colors leading-tight">
                  {system.title}
                </h3>
              </div>

              {/* 카드 본문: 핵심 기능 리스트 (4줄로 통일) */}
              <ul className="space-y-3 mb-8 relative z-10 flex-grow">
                {system.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-accent/40 mt-1 shrink-0" />
                    <span className="text-xs lg:text-sm text-text-body/70 group-hover:text-text-body transition-colors leading-snug">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 카드 하단 장식선 애니메이션 */}
              <div className="mt-auto pt-5 border-t border-white/5">
                <div className="h-1 w-6 bg-brand-accent/30 rounded-full group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}