"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

/* ===== 카드 데이터 ===== */
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
        <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M4 20h16M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2" />
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
        <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M9 17l3-7h4l3 7M10 10l-2 4" stroke="currentColor" strokeWidth="2" fill="none" />
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
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M7 12h10M7 8h6M7 16h5" stroke="currentColor" strokeWidth="2" />
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
        <path d="M3 9l2-4h14l2 4v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M8 14h8" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

/* ===== 컴포넌트 ===== */
export default function CoreServices() {
  return (
    <section id="services" className="relative bg-[#111111]">
      {/* 1) 히어로: 좌측 끝까지 풀블리드 */}
      <div className="relative w-full h-[260px] sm:h-[320px] lg:h-[420px]">
        <Image
          src="/hero/services-hero.jpg" // 원하는 이미지로 교체
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/45" />
        {/* 좌 하단 타이틀 (크기 ↓ 조절) */}
        <div className="absolute bottom-0 left-0 pb-6 sm:pb-8 lg:pb-10 pl-6 sm:pl-10 lg:pl-20">
          <h2 className="font-black tracking-tight text-[clamp(28px,6vw,64px)] leading-[1.02] text-white">
            RIDE ON
            <br />
            <span className="text-white/90">핵심 서비스</span>
          </h2>
        </div>
      </div>

      {/* 2) 라인 + 카드 정렬: 타이틀 오른쪽에서 시작하도록 grid 구성 */}
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 -mt-4 sm:-mt-6 lg:-mt-8">
        <div className="grid grid-cols-[auto_1fr] items-end gap-x-6">
          {/* (레이아웃용) 타이틀과 같은 폭을 차지하는 투명한 박스 */}
          <div className="invisible select-none">
            <h2 className="font-black tracking-tight text-[clamp(28px,6vw,64px)] leading-[1.02]">
              RIDE ON
              <br />
              핵심 서비스
            </h2>
          </div>

          {/* 옐로 라인 */}
          <div className="flex items-center">
            <div className="h-[6px] w-full rounded-full bg-[#FFB800]" />
          </div>

          {/* 카드 그리드: 라인 시작점에 맞춰 col-start-2 */}
          <div className="col-start-2 mt-6 sm:mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {cards.map((c, i) => (
                <article
                  key={i}
                  className={[
                    "group relative isolate text-neutral-200",
                    c.bg,
                    i === 0 ? "rounded-t-2xl sm:rounded-tr-none lg:rounded-l-2xl" : "",
                    i === cards.length - 1 ? "rounded-b-2xl sm:rounded-bl-none lg:rounded-r-2xl" : "",
                  ].join(" ")}
                >
                  <div className="absolute inset-0 ring-1 ring-neutral-800/70 transition-colors duration-300 group-hover:ring-[#FFB800]/60" />
                  <div className="absolute left-6 right-6 top-0 h-[5px] rounded-b-full bg-[#FFB800] scale-x-75 group-hover:scale-x-100 transition-transform duration-300 origin-center" />

                  <div className="relative p-8 lg:p-10 flex min-h-[260px] flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-wider text-neutral-400">{c.eyebrow}</p>
                      <div className="text-neutral-300 group-hover:text-[#FFB800] transition-colors duration-300">
                        {c.icon}
                      </div>
                    </div>

                    <h3 className="text-[20px] sm:text-[22px] font-extrabold tracking-tight text-white">
                      {c.title}
                    </h3>
                    <p className="text-[15px] leading-relaxed text-neutral-400">{c.desc}</p>

                    <div className="mt-auto">
                      <Link
                        href={c.href}
                        className="
                          inline-flex items-center justify-center rounded-full
                          border border-neutral-500 px-4 py-2 text-sm font-semibold
                          text-neutral-200
                          transition-all duration-300
                          hover:text-[#111111] hover:bg-[#FFB800] hover:border-[#FFB800]
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50
                        "
                        aria-label={`${c.title} 자세히 보기`}
                      >
                        자세히 보기
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
