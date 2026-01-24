// src/app/brand/components/PartnershipSection.tsx
"use client";

import React from "react";
import { FadeUp } from "@/components/ui/MotionWrapper";
import NetworkMap from "@/components/NetworkMap";
import MergeFlow from "@/components/MergeFlow";
import BranchApplyForm from "@/components/BranchApplyForm";

export default function PartnershipSection() {
  return (
    <section className="relative py-20 lg:py-32">
      {/* 1. 전국 지부 현황 (지각적 규모감) */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6 mb-32">
        <header className="mb-12">
          <FadeUp>
            <p className="text-[#FFB800] text-xs font-bold tracking-[0.2em] mb-4 uppercase">National Network</p>
            <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">
              전국 배달 인프라,<br />당신의 지역에서 이어갑니다.
            </h2>
            <p className="mt-6 text-white/50 text-lg max-w-3xl font-light leading-relaxed">
              수도권을 넘어 전국 주요 권역으로 네트워크를 확장하고 있습니다. <br className="hidden lg:block" />
              이미 운영 중인 지부와 새롭게 시작되는 전략 지역을 확인하세요.
            </p>
          </FadeUp>
        </header>
        
        <FadeUp delay={0.2}>
          <div className="rounded-[40px] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-md">
            <NetworkMap />
          </div>
        </FadeUp>
      </div>

      {/* 2. 합병 프로세스 (비즈니스 신뢰도) */}
      <div className="bg-white/[0.02] border-y border-white/5 py-32 mb-32">
        <MergeFlow />
      </div>

      {/* 3. 가맹 신청 폼 (최종 목적지) */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-5">
            <FadeUp>
              <p className="text-[#FFB800] text-xs font-bold tracking-[0.2em] mb-4 uppercase">Branch Application</p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter mb-8">
                RIDE ON의<br />새로운 지주가 되세요.
              </h2>
              <BodyText className="text-white/50 text-lg leading-relaxed mb-10">
                단순한 계약 관계를 넘어, 지역 물류의 주인공으로 함께 성장할 파트너를 찾습니다. 
                운영 지원부터 데이터 솔루션까지, 라이드온이 모든 인프라를 지원합니다.
              </BodyText>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="p-1 rounded-[40px] bg-gradient-to-br from-[#FFB800]/20 to-transparent">
                <div className="bg-[#0A0A0B] rounded-[38px] p-8 lg:p-12 border border-white/5 shadow-2xl">
                  <BranchApplyForm />
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}

// 간단한 BodyText 컴포넌트 (없을 경우 대비)
function BodyText({ children, className }: { children: React.ReactNode, className?: string }) {
  return <p className={`font-light ${className}`}>{children}</p>;
}