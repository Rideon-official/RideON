// src/components/CoreServices.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import {
  Building2,
  Bike,
  FileText,
  ShoppingBag,
} from "lucide-react";

type Card = {
  eyebrow: string;
  title: string;
  desc: ReactNode;
  href: string;
  icon: ReactNode;
  buttonLabel: string; // ✅ 카드별 CTA 문구
};

const cards: Card[] = [
  {
    eyebrow: "HQ SUPPORT",
    title: "본사 운영지원",
    desc: (
      <>
        <span className="md:hidden">지사는 현장 운영에 집중, 본사는 시스템으로 지원.</span>
        <span className="hidden md:inline">
          지사는 현장 운영에 집중,<br className="hidden md:block" />
          본사는 시스템으로 지원.
        </span>
      </>
    ),
    href: "/about",
    icon: <Building2 className="w-8 h-8" strokeWidth={1.8} />,
    buttonLabel: "운영 방식 보기 →",
  },
  {
    eyebrow: "RIDE ON BIKE",
    title: "RIDE ON BIKE",
    desc: (
      <>
        <span className="md:hidden">렌트·리스·튜닝·정비·사고 처리까지 원스톱.</span>
        <span className="hidden md:inline">
          렌트·리스·튜닝·정비·사고 처리<br className="hidden md:block" />
          까지 원스톱.
        </span>
      </>
    ),
    href: "/bike#rent",
    icon: <Bike className="w-8 h-8" strokeWidth={1.8} />,
    buttonLabel: "서비스 구성 보기 →",
  },
  {
    eyebrow: "LOGITEATS",
    title: "정산 솔루션",
    desc: (
      <>
        <span className="md:hidden">타 지사도 사용할 수 있는 정산·리포트 플랫폼.</span>
        <span className="hidden md:inline">
          타 지사도 사용할 수 있는 <br className="hidden md:block" />
          정산·리포트 플랫폼.
        </span>
      </>
    ),
    href: "/logiteats#intro",
    icon: <FileText className="w-8 h-8" strokeWidth={1.8} />,
    buttonLabel: "정산 솔루션 보기 →",
  },
  {
    eyebrow: "RIDER STORE",
    title: "라이더 스토어",
    desc: (
      <>
        <span className="md:hidden">공식 의류·장비·소모품 — 합리적 가격에 바로 구매.</span>
        <span className="hidden md:inline">
          공식 의류/장비/소모품 <br className="hidden md:block" />
          — 합리적 가격에 바로 구매.
        </span>
      </>
    ),
    href: "/store",
    icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.8} />,
    buttonLabel: "공식 스토어 이동 →",
  },
];

export default function CoreServices() {
  return (
    <section className="section-gray">
      <div className="container-xl section-pad">
        <header className="mb-8 lg:mb-10">
          {/* ✅ 4가지 핵심 가치로 수정 */}
          <h2 className="typo-h2">RIDE ON 솔루션의 4가지 핵심 가치</h2>
          <p className="typo-body text-white/70 mt-2">
            운영 · 정산 · 렌트 · 브랜드 — 각 영역을 하나로 묶어 효율을 극대화합니다.
          </p>
        </header>

        {/* 카드 그리드 (높이 균일 + 적정 간격) */}
        <div className="grid auto-rows-fr gap-5 lg:gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <CardItem key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 재사용 카드 컴포넌트 (컴팩트 + 포인트바 + 부드러운 hover) */
function CardItem({ c }: { c: Card }) {
  return (
    <article
      className={`
        group relative isolate rounded-2xl overflow-hidden border border-white/10 
        bg-white/5 p-7 lg:p-8 text-white transition-all duration-300
        hover:bg-[#FFB800] hover:text-[#111111] hover:scale-[1.02]
        hover:shadow-[0_8px_28px_rgba(255,184,0,0.28)]
        min-h-[230px]
      `}
    >
      {/* 상단 얇은 포인트 바 (호버 시 블랙으로 반전) */}
      <div className="absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-white/10 group-hover:bg-[#111111]/50" />

      {/* 헤더: 라벨 + 아이콘 */}
      <div className="flex items-center justify-between mb-1">
        <p className="text-xs uppercase tracking-wider text-white/55 group-hover:text-[#111111]/70">
          {c.eyebrow}
        </p>
        <div className="text-white/85 group-hover:text-[#111111] transition-colors duration-300">
          <div className="scale-110">{c.icon}</div>
        </div>
      </div>

      {/* 제목/본문 */}
      <h3 className="text-[20px] sm:text-[22px] font-extrabold tracking-tight mt-2">
        {c.title}
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-white/75 group-hover:text-[#111111]/80">
        {c.desc}
      </p>

      {/* CTA 버튼 */}
      <div className="mt-7">
        <Link
          href={c.href}
          className="
            inline-flex items-center justify-center rounded-full
            border border-white/20 px-4 py-2 text-sm font-semibold
            text-white/95 transition-all duration-300
            group-hover:border-[#111111]
            group-hover:bg-[#111111] group-hover:text-[#FFB800]
          "
          aria-label={`${c.title} 이동`}
        >
          {c.buttonLabel}
        </Link>
      </div>
    </article>
  );
}
