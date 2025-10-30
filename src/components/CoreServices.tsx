// src/components/CoreServices.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Building2, Bike, FileText, ShoppingBag } from "lucide-react";

type Card = {
  eyebrow: string;
  title: string;
  desc: ReactNode;
  href: string;
  icon: ReactNode;
  buttonLabel: string;
};

const cards: Card[] = [
  {
    eyebrow: "HQ SUPPORT",
    title: "본사 운영지원",
    desc: (
      <>
        <span className="md:hidden">지사는 현장 운영에 집중, 본사는 시스템으로 지원.</span>
        <span className="hidden md:inline">
          지사는 현장 운영에 집중,
          <br className="hidden md:block" />
          본사는 시스템으로 지원.
        </span>
      </>
    ),
    href: "/brand#story",
    icon: <Building2 className="w-8 h-8" strokeWidth={1.6} />,
    buttonLabel: "운영 방식 보기 →",
  },
  {
    eyebrow: "RIDE ON BIKE",
    title: "RIDE ON BIKE",
    desc: (
      <>
        <span className="md:hidden">렌트·리스·튜닝·정비·사고 처리까지 원스톱.</span>
        <span className="hidden md:inline">
          렌트·리스·튜닝·정비·사고 처리
          <br className="hidden md:block" />
          까지 원스톱.
        </span>
      </>
    ),
    href: "/bike#rent",
    icon: <Bike className="w-8 h-8" strokeWidth={1.6} />,
    buttonLabel: "렌트/리스 안내 →",
  },
  {
    eyebrow: "LOGITEATS",
    title: "정산 솔루션",
    desc: (
      <>
        <span className="md:hidden">타 지사도 사용할 수 있는 정산·리포트 플랫폼.</span>
        <span className="hidden md:inline">
          타 지사도 사용할 수 있는
          <br className="hidden md:block" />
          정산·리포트 플랫폼.
        </span>
      </>
    ),
    href: "/logiteats#intro",
    icon: <FileText className="w-8 h-8" strokeWidth={1.6} />,
    buttonLabel: "정산 솔루션 보기 →",
  },
  {
    eyebrow: "RIDER STORE",
    title: "라이더 스토어",
    desc: (
      <>
        <span className="md:hidden">공식 의류·장비·소모품 — 합리적 가격에 바로 구매.</span>
        <span className="hidden md:inline">
          공식 의류/장비/소모품
          <br className="hidden md:block" />
          — 합리적 가격에 바로 구매.
        </span>
      </>
    ),
    href: "/store",
    icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.6} />,
    buttonLabel: "공식 스토어 이동 →",
  },
];

export default function CoreServices() {
  return (
    // Hero랑 같은 톤
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      {/* 폭을 6xl로 고정해서 위아래 섹션이랑 줄 맞춤 */}
      <div className="mx-auto max-w-6xl px-4 lg:px-5">
        <header className="mb-8 lg:mb-10">
          <h2 className="text-2xl lg:text-[28px] font-semibold text-white">
            RIDE ON 솔루션의 4가지 핵심 가치
          </h2>
          <p className="mt-2 text-sm lg:text-base text-white/70">
            운영 · 정산 · 렌트 · 브랜드를 하나의 프로세스로 묶은 구조입니다.
          </p>
        </header>

        {/* 카드 4개 */}
        <div className="grid auto-rows-fr gap-5 lg:gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <CardItem key={i} c={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CardItem({ c }: { c: Card }) {
  return (
    <article
      className="
        group relative isolate overflow-hidden
        rounded-2xl border border-white/10 bg-[#151515] p-7 lg:p-8 text-white
        transition-all duration-200
        hover:border-[#FFB800]/40 hover:bg-[#FFB800] hover:text-[#111111]
        min-h-[230px]
      "
    >
      {/* 상단 얇은 라인 */}
      <div className="pointer-events-none absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-white/5 group-hover:bg-[#111111]/35" />

      <div className="mb-1 flex items-center justify-between gap-4">
        <p className="text-[11px] uppercase tracking-[0.32em] text-white/55 group-hover:text-[#111111]/70">
          {c.eyebrow}
        </p>
        <div className="text-white/85 group-hover:text-[#111111] transition-colors duration-200">
          {c.icon}
        </div>
      </div>

      <h3 className="mt-2 text-[20px] sm:text-[22px] font-bold tracking-tight">
        {c.title}
      </h3>
      <p className="mt-3 text-[14.5px] leading-relaxed text-white/70 group-hover:text-[#111111]/80">
        {c.desc}
      </p>

      <div className="mt-7">
        <Link
          href={c.href}
          className="
            inline-flex items-center justify-center rounded-full
            border border-white/20 px-4 py-2 text-sm font-semibold
            text-white/95 transition-all duration-200
            group-hover:border-[#111111] group-hover:bg-[#111111] group-hover:text-[#FFB800]
          "
        >
          {c.buttonLabel}
        </Link>
      </div>
    </article>
  );
}
