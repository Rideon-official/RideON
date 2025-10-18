// src/components/CoreServices.tsx
"use client";

import Link from "next/link";
import {
  Building2,
  Bike,
  FileText,
  ShoppingBag,
} from "lucide-react"; // ← lucide-react에서 아이콘 불러옴

type Card = {
  eyebrow: string;
  title: string;
  desc: React.ReactNode;
  href: string;
  icon: React.ReactNode;
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
  },
  {
    eyebrow: "RIDER STORE",
    title: "라이더 스토어",
    desc: (
      <>
        <span className="md:hidden">공식 의류/장비/소모품 — 합리적 가격에 바로 구매.</span>
        <span className="hidden md:inline">
          공식 의류/장비/소모품 <br className="hidden md:block" />
          — 합리적 가격에 바로 구매.
        </span>
      </>
    ),
    href: "/store",
    icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.8} />,
  },
];

export default function CoreServices() {
  return (
    <section className="section-gray">
      <div className="container-xl section-pad">
        <header className="mb-8 lg:mb-10">
          <h2 className="typo-h2">RIDE ON 솔루션의 3가지 핵심 가치</h2>
          <p className="typo-body text-white/70 mt-2">
            운영 · 정산 · 렌트 영역을 하나로 묶어 효율을 극대화합니다.
          </p>
        </header>

        <div className="grid gap-4 sm:gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <CardItem key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 재사용 카드 컴포넌트 (Hover 애니메이션 추가 버전) */
function CardItem({ c, i }: { c: Card; i: number }) {
  return (
    <article
      className={`
        group relative isolate rounded-2xl overflow-hidden border border-white/10 
        bg-white/5 p-7 lg:p-9 text-white transition-all duration-300
        hover:bg-[#FFB800] hover:text-[#111111] hover:scale-[1.03]
        hover:shadow-[0_0_24px_rgba(255,184,0,0.35)]
      `}
    >
      {/* 상단 헤더 (eyebrow + icon) */}
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider text-white/60 group-hover:text-[#111111]/70">
          {c.eyebrow}
        </p>
        <div className="transition-colors duration-300 group-hover:text-[#111111]">
          {c.icon}
        </div>
      </div>

      {/* 제목 + 설명 */}
      <h3 className="text-[19px] sm:text-[21px] font-extrabold tracking-tight mt-3">
        {c.title}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-neutral-400 group-hover:text-[#111111]/80">
        {c.desc}
      </p>

      {/* 버튼 */}
      <div className="mt-auto pt-5">
        <Link
          href={c.href}
          className="
            inline-flex items-center justify-center rounded-full
            border border-white/20 px-4 py-2 text-sm font-semibold
            text-neutral-200 transition-all duration-300
            group-hover:border-[#111111]
            group-hover:bg-[#111111] group-hover:text-[#FFB800]
          "
        >
          자세히 보기
        </Link>
      </div>
    </article>
  );
}
