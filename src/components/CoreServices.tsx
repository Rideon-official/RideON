"use client";

import { motion } from "framer-motion";
import { Building2, Bike, FileText, CheckCircle2 } from "lucide-react";
import { FadeUp } from "./ui/MotionWrapper";
import { Heading, Eyebrow, BodyText } from "./ui/typography";

const systems = [
  {
    title: "지사 운영 시스템",
    role: "BRANCH MANAGEMENT",
    features: [
      "실시간 오더 현황 및 모니터링",
      "효율적인 지사 간 오더 공유 망",
      "지사별 수익 및 실적 분석 통계",
      "지점 운영 최적화 솔루션 제공"
    ],
    icon: <Building2 className="w-8 h-8 text-brand-accent" />,
    gradient: "from-blue-600/10 to-transparent"
  },
  {
    title: "라이더 관리 인프라",
    role: "RIDER INFRASTRUCTURE",
    features: [
      "실시간 위치 기반 자동 배차",
      "체계적인 근태 및 성과 관리",
      "자체 정비/리스 인프라 연동",
      "라이더 전용 물품 및 굿즈 지원"
    ],
    icon: <Bike className="w-8 h-8 text-brand-accent" />,
    gradient: "from-indigo-600/10 to-transparent"
  },
  {
    title: "파트너 정산 솔루션",
    role: "PARTNER & ACCOUNTING",
    features: [
      "투명하고 정확한 실시간 정산",
      "가맹점/제휴점 통합 관리 시스템",
      "세금 계산서 및 영수증 자동 발행",
      "미수금 방지 및 리스크 관리"
    ],
    icon: <FileText className="w-8 h-8 text-brand-accent" />,
    gradient: "from-purple-600/10 to-transparent"
  }
];

export default function CoreServices() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6 py-12">
      {/* --- 섹션 헤더: QuickAccess와 스타일 통일 --- */}
      <div className="mb-16 lg:mb-24 text-center">
        <FadeUp>
          <Eyebrow className="text-brand-accent/80 mb-2 font-bold tracking-tight">
            통합 운영의 새로운 기준
          </Eyebrow>
          
          <Heading level={2} className="text-3xl lg:text-5xl font-black tracking-tighter mb-8">
            All-in-One <span className="text-white">인프라 시스템</span>
          </Heading>

          <div className="max-w-3xl mx-auto flex flex-col gap-2">
            <BodyText className="text-text-body/80 text-sm lg:text-lg leading-relaxed font-medium">
              지사, 라이더, 파트너가 하나의 유기적인 시스템 안에서 연결됩니다.
            </BodyText>
            <BodyText className="text-brand-accent font-bold text-sm lg:text-lg">
              복잡했던 운영은 라이드온에게 맡기고, 지사장님은 성장에만 집중하십시오.
            </BodyText>
          </div>
        </FadeUp>
      </div>

      {/* --- 시스템 카드 섹션 --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {systems.map((system, index) => (
          <FadeUp key={index} delay={index * 0.2}>
            <div className="group relative bg-white/[0.02] border border-white/5 rounded-3xl p-8 lg:p-10 transition-all hover:bg-white/[0.04] hover:border-brand-accent/30 overflow-hidden h-full flex flex-col">
              
              {/* 은은한 배경 그라데이션 */}
              <div className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${system.gradient} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* 아이콘 및 서브타이틀 */}
              <div className="mb-10 relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-brand-accent/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {system.icon}
                </div>
                <div className="text-[10px] font-black tracking-[0.2em] text-brand-accent/60 uppercase mb-2">
                  {system.role}
                </div>
                <h3 className="text-2xl font-black text-white group-hover:text-brand-accent transition-colors">
                  {system.title}
                </h3>
              </div>

              {/* 기능 리스트 */}
              <ul className="space-y-4 mb-8 relative z-10 flex-grow">
                {system.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent/40 mt-0.5 shrink-0" />
                    <span className="text-sm lg:text-base text-text-body/70 group-hover:text-text-body transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* 구분선 (데코레이션) */}
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-2">
                <div className="h-1 w-8 bg-brand-accent/30 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}