"use client";

import Link from "next/link";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { motion } from "framer-motion";

const items = [
  {
    id: "branch",
    title: "지사 가맹 문의",
    description: "전국 어디서나 라이드온의 검증된 인프라로 지사를 운영하세요.",
    cta: "상담 신청하기",
    href: "#contact",
    category: "Quick Access",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" />
        <path d="M22 11h-4" /><path d="M20 9v4" />
      </svg>
    ),
  },
  {
    id: "structure",
    title: "운영 구조 확인",
    description: "정산부터 교육까지, 한눈에 확인하는 라이드온의 워크플로우.",
    cta: "자세히 보기",
    href: "/merge",
    category: "Quick Access",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" /><path d="M12 17v4" />
      </svg>
    ),
  },
  {
    id: "bike",
    title: "바이크 렌탈",
    description: "업계 최저 수준의 유지비로 최상의 컨디션 바이크를 렌탈하세요.",
    cta: "렌탈 상품 보기",
    href: "/bike",
    category: "Quick Access",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 15h4l3-6h3" />
      </svg>
    ),
  },
];

export default function QuickAccess() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6">
      <FadeUp>
        {/* 히어로 섹션과 완벽 통일된 부제목 */}
        <Eyebrow className="text-brand-accent font-black tracking-wider text-[10px] lg:text-xs leading-none inline-block mb-1">
          가장 많이 찾는 서비스
        </Eyebrow>
        <Heading level={2} className="text-2xl lg:text-4xl font-black tracking-tighter mt-4 uppercase">
          RIDE ON <span className="text-brand-accent">빠른 진입</span>
        </Heading>
      </FadeUp>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {items.map((item, idx) => (
          <FadeUp key={item.id} delay={0.2 + idx * 0.1}>
            <Link 
              href={item.href} 
              className="group relative block rounded-[24px] border border-white/5 bg-white/[0.02] p-8 lg:p-10 transition-all duration-500 hover:bg-white/[0.04] hover:border-brand-accent/40 backdrop-blur-xl overflow-hidden"
            >
              {/* 내부 광채 효과 (훵함 방지) */}
              <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-brand-accent/5 blur-[60px] transition-all group-hover:bg-brand-accent/10" />

              {/* 아이콘 + 카테고리 (밀도 조절) */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20 transition-transform group-hover:scale-110 duration-500">
                  {item.icon}
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent opacity-80">
                    {item.category}
                  </span>
                  <div className="h-[1px] w-4 bg-brand-accent/40" />
                </div>
              </div>

              <div className="space-y-4 relative z-10">
                <h3 className="text-xl lg:text-2xl font-black text-white group-hover:text-brand-accent transition-colors duration-300 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm lg:text-base text-text-body leading-relaxed opacity-60 font-medium">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-2 pt-4 text-xs lg:text-sm font-black text-brand-accent group/btn">
                  <span className="uppercase tracking-tight">{item.cta}</span>
                  <span className="transition-transform group-hover/btn:translate-x-2 duration-300">→</span>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}