"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { Building2, Bike, FileText, ShoppingBag } from "lucide-react";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { FadeUp } from "@/components/ui/MotionWrapper";

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
        지사는 현장 운영에 집중하고,
        <br className="hidden md:block" />
        본사는 정산·모집·교육을 시스템으로 지원합니다.
      </>
    ),
    href: "/brand#story",
    icon: <Building2 className="w-8 h-8" strokeWidth={1.2} />,
    buttonLabel: "지사장 운영지원 보기 →",
  },
  {
    eyebrow: "RIDE ON BIKE",
    title: "RIDE ON BIKE",
    desc: (
      <>
        라이더 렌트·리스·튜닝·정비·사고 처리까지
        <br className="hidden md:block" />
        본사 기준으로 통합 관리합니다.
      </>
    ),
    href: "/bike#rent",
    icon: <Bike className="w-8 h-8" strokeWidth={1.2} />,
    buttonLabel: "라이더 바이크 안내 →",
  },
  {
    eyebrow: "LOGITEATS",
    title: "정산 솔루션",
    desc: (
      <>
        타 지사도 사용할 수 있는
        <br className="hidden md:block" />
        쿠팡·배민 B2B 정산·리포트 플랫폼입니다.
      </>
    ),
    href: "/logiteats#intro",
    icon: <FileText className="w-8 h-8" strokeWidth={1.2} />,
    buttonLabel: "정산 솔루션 살펴보기 →",
  },
  {
    eyebrow: "RIDER STORE",
    title: "라이더 스토어",
    desc: (
      <>
        라이더 필수 공식 의류/장비/소모품을
        <br className="hidden md:block" />
        합리적인 가격에 바로 구매할 수 있습니다.
      </>
    ),
    href: "/store",
    icon: <ShoppingBag className="w-8 h-8" strokeWidth={1.2} />,
    buttonLabel: "공식 스토어 이동 →",
  },
];

export default function CoreServices() {
  return (
    <section id="core-systems" className="bg-transparent">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-20">
        {/* ===== Header ===== */}
        <header className="mb-12 lg:mb-16">
          <FadeUp>
            <Eyebrow className="text-brand-accent tracking-[0.2em]">
              CORE SYSTEMS
            </Eyebrow>
            <Heading level={2} className="mt-4 text-white">
              지사 · 라이더 · 파트너를 위한 <br className="hidden md:block" />
              통합 운영 시스템
            </Heading>
            <BodyText className="mt-6 max-w-2xl text-text-body text-lg">
              본사 운영지원부터 정산 솔루션까지, 하나의 구조 안에서 
              동일한 기준으로 관리되는 RIDE ON의 핵심 인프라입니다.
            </BodyText>
          </FadeUp>
        </header>

        {/* ===== Cards: 줄무늬 없이 투명하고 고급스럽게 ===== */}
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((c, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <CardItem c={c} />
            </FadeUp>
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
        group relative overflow-hidden
        rounded-3xl border border-white/5 bg-white/5 p-8
        transition-all duration-300
        hover:-translate-y-2 hover:border-brand-accent/30 hover:bg-white/[0.08]
        min-h-[320px] flex flex-col justify-between
      "
    >
      <div>
        <div className="mb-6 flex items-center justify-between">
          {/* 아이콘: 브랜드 옐로우 포인트 */}
          <div className="text-brand-accent">
            {c.icon}
          </div>
          <Eyebrow className="text-white/30 group-hover:text-brand-accent/50 transition-colors">
            {c.eyebrow}
          </Eyebrow>
        </div>

        <Heading level={3} className="text-2xl font-bold text-white">
          {c.title}
        </Heading>

        <BodyText size="sm" className="mt-4 text-text-body leading-relaxed">
          {c.desc}
        </BodyText>
      </div>

      <div className="mt-8">
        <Link
          href={c.href}
          className="
            inline-flex items-center text-sm font-bold
            text-brand-accent transition-all
            group-hover:translate-x-1
          "
        >
          {c.buttonLabel}
        </Link>
      </div>
    </article>