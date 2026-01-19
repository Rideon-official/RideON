"use client";

import Link from "next/link";
import { Eyebrow, Heading } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

const items = [
  {
    id: "branch",
    title: "지사 가맹 문의",
    description: "전국 어디서나 라이드온의 검증된 인프라로 지사를 운영하세요.",
    cta: "상담 신청하기",
    href: "#contact",
    category: "Quick Access",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" />
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
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
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
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 15h4l3-6h3" />
      </svg>
    ),
  },
];

export default function QuickAccess() {
  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-6">
      <FadeUp>
        {/* 부제목 스타일 히어로와 완벽 통일 */}
        <Eyebrow className="text-brand-accent font-black tracking-wider text-[10px] lg:text-xs leading-none inline-block mb-1">
          가장 많이 찾는 서비스
        </Eyebrow>
        <Heading level={2} className="text-2xl lg:text-4xl font-black tracking-tighter mt-4">
          RIDE ON <span className="text-brand-accent">빠른 진입</span>
        </Heading>
      </FadeUp>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((item, idx) => (
          <FadeUp key={item.id} delay={0.2 + idx * 0.1}>
            <Link href={item.href} className="group relative block rounded-2xl border border-white/5 bg-white/[0.02] p-8 transition-all hover:bg-white/[0.05] hover:border-brand-accent/30 overflow-hidden">
              
              {/* 아이콘과 카테고리 간격을 좁혀서(gap-3) 훵한 느낌 제거 */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent border border-brand-accent/20">
                  {item.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand-accent opacity-80">
                  {item.category}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-brand-accent transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-text-body leading-relaxed opacity-60">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 pt-2 text-xs font-black text-brand-accent">
                  {item.cta} <span>→</span>
                </div>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}