"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Card = {
  title: string;
  eyebrow: string;
  desc: string;
  href: string;
  icon: React.ReactNode;
  bg: string;
};

const cards: Card[] = [
  {
    eyebrow: "HQ SUPPORT",
    title: "본사 운영지원",
    desc: "지사는 현장 운영에 집중, 본사는 시스템으로 지원.",
    href: "/about",
    bg: "bg-[#171717]",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden>
        <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M4 20h16M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    eyebrow: "RIDE ON BIKE",
    title: "RIDE ON BIKE",
    desc: "렌트·리스·튜닝·정비·사고 처리까지 원스톱.",
    href: "/bike#rent",
    bg: "bg-[#141414]",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden>
        <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M9 17l3-7h4l3 7M10 10l-2 4" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
  },
  {
    eyebrow: "LOGITEATS",
    title: "정산 솔루션",
    desc: "타 지사도 사용할 수 있는 정산·리포트 플랫폼.",
    href: "/logiteats#intro",
    bg: "bg-[#151515]",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M7 12h10M7 8h6M7 16h5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    eyebrow: "RIDER STORE",
    title: "라이더 스토어",
    desc: "공식 의류/장비/소모품 — 합리적 가격에 바로 구매.",
    href: "/store",
    bg: "bg-[#121212]",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden>
        <path d="M3 9l2-4h14l2 4v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M8 14h8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="relative bg-[#111111] overflow-hidden">
      {/* ▶ 히어로 */}
      <div className="relative w-screen h-[520px] sm:h-[620px] md:h-[720px] lg:h-[800px]">
        <Image
          src="/hero/core.png"
          alt="RIDE ON Core Background"
          fill
          className="object-cover object-left md:object-left"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/70" />

        {/* ✴ 모바일: 중앙 정렬 타이틀 (이미지 보이게) */}
        <div className="absolute inset-0 md:hidden flex items-center justify-center px-6">
          <h2 className="text-center font-black tracking-tight text-white leading-[1.05] text-[clamp(28px,8vw,42px)] drop-shadow-md">
            RIDE ON
            <br />
            <span className="text-white/90">핵심 서비스</span>
          </h2>
        </div>

        {/* ✴ 데스크톱/태블릿: 조금 오른쪽+아래(카드와 비겹침) */}
        <div className="hidden md:flex absolute inset-0 items-end">
          <div
            className="
              pb-[22%]      /* 더 아래 */
              md:pl-24 lg:pl-40  /* 더 오른쪽 */
              translate-x-[4%]   /* 살짝 우측 오프셋 */
            "
          >
            <h2 className="font-black tracking-tight text-white leading-[1.03] text-[clamp(44px,6.2vw,86px)]">
              RIDE ON
              <br />
              <span className="text-white/90 text-[clamp(28px,4vw,52px)]">핵심 서비스</span>
            </h2>
          </div>
        </div>

        {/* ✴ 데스크톱: 카드 4개를 사진 위에 오버랩 */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-[9%] w-full max-w-screen-xl px-6 sm:px-10 lg:px-20 z-10">
          <div className="grid grid-cols-4">
            {cards.map((c, i) => (
              <CardItem key={i} c={c} i={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ✴ 모바일/태블릿: 카드 4개는 히어로 아래에 표시(이미지 가리지 않음) */}
      <div className="md:px-8 lg:px-20 px-6 pt-6 md:pt-10 lg:hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
          {cards.map((c, i) => (
            <CardItem key={i} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* 재사용 카드 컴포넌트 */
function CardItem({ c, i }: { c: Card; i: number }) {
  return (
    <article
      className={[
        "group relative isolate text-neutral-200",
        c.bg,
        "rounded-2xl overflow-hidden",
      ].join(" ")}
    >
      <div className="absolute inset-0 ring-1 ring-neutral-800/70 transition-colors duration-300 group-hover:ring-[#FFB800]/60" />
      <div className="absolute left-6 right-6 top-0 h-[5px] rounded-b-full bg-[#FFB800] scale-x-75 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
      <div className="relative p-7 lg:p-9 flex min-h-[230px] lg:min-h-[260px] flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-xs uppercase tracking-wider text-neutral-400">{c.eyebrow}</p>
          <div className="text-neutral-300 group-hover:text-[#FFB800] transition-colors duration-300">
            {c.icon}
          </div>
        </div>
        <h3 className="text-[19px] sm:text-[21px] font-extrabold tracking-tight text-white">
          {c.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-neutral-400">{c.desc}</p>
        <div className="mt-auto">
          <Link
            href={c.href}
            className="
              inline-flex items-center justify-center rounded-full
              border border-neutral-600 px-4 py-2 text-sm font-semibold
              text-neutral-200 transition-all duration-300
              hover:text-[#111111] hover:bg-[#FFB800] hover:border-[#FFB800]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50
            "
          >
            자세히 보기
          </Link>
        </div>
      </div>
    </article>
  );
}
