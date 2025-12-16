"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Building2, Bike, FileText, ShoppingBag } from "lucide-react";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

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
    <section
      id="core-systems"
      className="bg-[#0E0E0E]"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg">
        {/* ===== Header ===== */}
        <header className="mb-8 lg:mb-10">
          <Eyebrow className="text-brand-primary">
            CORE SYSTEMS
          </Eyebrow>

          <Heading
            level={2}
            className="mt-2 text-text-heading"
          >
            지사 · 라이더 · 파트너를 위한
            <br className="hidden md:block" />
            통합 운영 시스템
          </Heading>

          <BodyText
            muted
            className="mt-2 max-w-2xl text-text-muted"
          >
            본사 운영지원, 렌트/정비 인프라, 정산 솔루션, 라이더 스토어까지
            하나의 구조 안에서 동일한 기준으로 관리되는 RIDE ON의 핵심 시스템입니다.
          </BodyText>
        </header>

        {/* ===== Cards ===== */}
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
        rounded-2xl border border-slate-200/70 bg-surface-subtle p-7 lg:p-8
        text-text-heading
        shadow-sm
        transition-all duration-200
        hover:-translate-y-1 hover:border-brand-secondary/60 hover:bg-surface-base hover:shadow-elev2
        min-h-[230px]
      "
    >
      <div className="pointer-events-none absolute left-6 right-6 top-0 h-[3px] rounded-b-full bg-slate-200/60 group-hover:bg-brand-secondary/30" />

      <div className="mb-1 flex items-center justify-between gap-4">
        {/* 카드 상단 라벨 */}
        <Eyebrow className="text-text-muted group-hover:text-brand-primary">
          {c.eyebrow}
        </Eyebrow>

        {/* 아이콘 */}
        <div className="text-brand-primary group-hover:text-brand-secondary transition-colors duration-200">
          {c.icon}
        </div>
      </div>

      {/* 카드 타이틀 */}
      <Heading
        level={3}
        className="mt-2 text-[18px] sm:text-[20px] lg:text-[22px] font-semibold"
      >
        {c.title}
      </Heading>

      {/* 카드 설명 */}
      <BodyText
        size="sm"
        muted
        className="mt-3 text-text-muted"
      >
        {c.desc}
      </BodyText>

      {/* 버튼 */}
      <div className="mt-7">
        <Link
          href={c.href}
          className="
            inline-flex items-center justify-center rounded-full
            border border-slate-300 px-4 py-2 text-sm font-semibold
            text-brand-primary transition-all duration-200
            hover:border-brand-secondary hover:bg-brand-secondary hover:text-white
          "
        >
          {c.buttonLabel}
        </Link>
      </div>
    </article>
  );
}
