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
        <span className="md:hidden">
          지사는 현장 운영에 집중, 본사는 정산·모집·교육을 시스템으로 지원합니다.
        </span>
        <span className="hidden md:inline">
          지사는 현장 운영에 집중하고,
          <br className="hidden md:block" />
          본사는 정산·모집·교육을 시스템으로 지원합니다.
        </span>
      </>
    ),
    href: "/brand#story",
    icon: <Building2 className="w-8 h-8" strokeWidth={1.6} />,
    buttonLabel: "지사장 운영지원 보기 →",
  },
  {
    eyebrow: "RIDE ON BIKE",
    title: "RIDE ON BIKE",
    desc: (
      <>
        <span className="md:hidden">
          라이더 렌트·리스·정비·사고 처리까지 본사 기준으로 통합 관리합니다.
        </span>
        <span className="hidden md:inline">
          라이더 렌트·리스·튜닝·정비·사고 처리까지
          <br className="hidden md:block" />
          본사 기준으로 통합 관리합니다.
        </span>
      </>
    ),
    href: "/bike#rent",
    icon: <Bike className="w-8 h-8" strokeWidth={1.6} />,
    buttonLabel: "라이더 바이크 안내 →",
  },
  {
    eyebrow: "LOGITEATS",
    title: "정산 솔루션",
    desc: (
      <>
        <span className="md:hidden">
          타 지사도 사용할 수 있는 쿠팡·배민 B2B 정산·리포트 플랫폼입니다.
        </span>
        <span className="hidden md:inline">
          타 지사도 사용할 수 있는
          <br className="hidden md:block" />
          쿠팡·배민 B2B 정산·리포트 플랫폼입니다.
        </span>
      </>
    ),
    href: "/logiteats#intro",
    icon: <FileText className="w-8 h-8" strokeWidth={1.6} />,
    buttonLabel: "정산 솔루션 살펴보기 →",
  },
  {
    eyebrow: "RIDER STORE",
    title: "라이더 스토어",
    desc: (
      <>
        <span className="md:hidden">
          라이더 필수 공식 의류·장비·소모품을 합리적인 가격에 바로 구매할 수 있습니다.
        </span>
        <span className="hidden md:inline">
          라이더 필수 공식 의류/장비/소모품을
          <br className="hidden md:block" />
          합리적인 가격에 바로 구매할 수 있습니다.
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
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      {/* 헤더/Hero/Stats와 같은 컨테이너 기준 */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
            SOLUTIONS
          </p>
          <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-white">
            지사 · 라이더 · 파트너를 위한 4가지 솔루션
          </h2>
          <p className="mt-2 text-sm lg:text-base text-white/60">
            본사 운영지원, 렌트/정비 인프라, 정산 솔루션, 라이더 스토어까지
            하나의 구조 안에서 동일한 기준으로 제공합니다.
          </p>
        </header>

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
        rounded-2xl border border-white/5 bg-[#121212] p-7 lg:p-8 text-white
        transition-all duration-200
        hover:border-[#FFB800]/40 hover:bg-[#FFB800] hover:text-[#111111]
        min-h-[230px]
      "
    >
      <div className="pointer-events-none absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-white/3 group-hover:bg-[#111111]/35" />
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
      <p className="mt-3 text-sm leading-relaxed text-white/70 group-hover:text-[#111111]/80">
        {c.desc}
      </p>
      <div className="mt-7">
        <Link
          href={c.href}
          className="
            inline-flex items-center justify-center rounded-full
            border border-white/12 px-4 py-2 text-sm font-semibold
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
