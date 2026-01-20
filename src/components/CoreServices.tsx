"use client";

import { motion } from "framer-motion";
import { Building2, Bike, FileText, Wrench, CheckCircle2 } from "lucide-react";
import { FadeUp } from "./ui/MotionWrapper";
import { Heading, Eyebrow, BodyText } from "./ui/typography";

const systems = [
  {
    title: "지사 운영 시스템",
    role: "BRANCH MANAGEMENT",
    features: [
      "실시간 오더 현황 모니터링",
      "효율적인 지사 간 오더 공유",
      "지사별 수익 및 통계 분석",
      "운영 최적화 솔루션 제공"
    ],
    icon: <Building2 className="w-7 h-7 text-brand-accent" />,
    gradient: "from-blue-600/10 to-transparent"
  },
  {
    title: "라이더 관리 체계",
    role: "RIDER INFRA",
    features: [
      "위치 기반 실시간 자동 배차",
      "체계적인 근태 및 성과 관리",
      "사고 예방 및 안전 가이드",
      "라이더 전용 앱 기술 지원"
    ],
    icon: <Bike className="w-7 h-7 text-brand-accent" />,
    gradient: "from-indigo-600/10 to-transparent"
  },
  {
    title: "정산 및 관리 솔루션",
    role: "ACCOUNTING",
    features: [
      "투명한 실시간 자동 정산",
      "가맹점 통합 관리 시스템",
      "세무 증빙 서류 자동 발행",
      "미수금 방지 리스크 관리"
    ],
    icon: <FileText className="w-7 h-7 text-brand-accent" />,
    gradient: "from-purple-600/10 to-transparent"
  },
  {
    title: "정비 및 렌탈 인프라",
    role: "HARDWARE & RENTAL",
    features: [
      "직영 센터 기반 정비 지원",
      "자체 리스 및 렌탈 인프라",
      "브랜드 전용 굿즈 보급",
      "차량 컨디션 상시 모니터링"
    ],
    icon: <Wrench className="w-7 h-7 text-brand-accent" />,
    gradient: "from-emerald-600/10 to-transparent"
  }
];

export default function CoreServices() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6 py-12">
      {/* --- 섹션 헤더: 왼쪽 정렬로 수정 --- */}
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
            <BodyText className="text-brand-accent font-bold text-sm lg:text-lg italic">
              "복잡한 운영은 라이드온에 맡기고, 지사장님은 성장에만 집중하십시오."
            </BodyText>
          </div>
        </FadeUp>
      </div>

      {/* --- 시스템 카드 섹션: grid-cols-4로 변경 --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {systems.map((system, index) => (
          <FadeUp key={index} delay={index * 0.1}>
            <div className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-7 transition-all hover:bg-white/[0.04] hover:border-brand-accent/30 overflow-hidden h-full flex flex-col">
              
              {/* 은은한 배경 그라데이션 */}
              <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${system.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-accent/10 transition-all duration-300">
                  {system.icon}
                </div>
                <div className="text-[9px] font-black tracking-[0.2em] text-brand-accent/60 uppercase mb-2">
                  {system.role}
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-brand-accent transition-colors">
                  {system.title}
                </h3>
              </div>

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