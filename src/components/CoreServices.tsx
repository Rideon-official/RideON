// src/components/CoreServices.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type Card = {
  title: string;
  eyebrow: string;
  desc: string;
  href: string;
  bg: string;     // 카드 배경색
  ring: string;   // 카드 외곽선 색
  text: string;   // 카드 텍스트 색
  icon: React.ReactNode;
};

const cards: Card[] = [
  {
    eyebrow: "HQ SUPPORT",
    title: "본사 운영지원",
    desc: "지사는 현장 운영에 집중, 본사는 시스템으로 지원.",
    href: "/about",
    bg: "bg-[#0E5AA7]",
    ring: "ring-[#0E5AA7]",
    text: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden>
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
    bg: "bg-[#0597D5]",
    ring: "ring-[#0597D5]",
    text: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden>
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
    bg: "bg-[#07B3D9]",
    ring: "ring-[#07B3D9]",
    text: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden>
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
    bg: "bg-[#06C4D9]",
    ring: "ring-[#06C4D9]",
    text: "text-white",
    icon: (
      <svg viewBox="0 0 24 24" width="44" height="44" aria-hidden>
        <path d="M3 9l2-4h14l2 4v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M8 14h8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function CoreServices() {
  return (
    <section id="services" className="relative">
      {/* 상단: 배경이미지 + 큰 타이포 */}
      <div className="relative overflow-hidden bg-[#111111]">
        <div className="absolute inset-0">
          {/* ▼ 배경 사진 경로: /public/hero/services-hero.jpg (원하는 걸로 교체 가능) */}
          <Image
            src="/hero/services-hero.jpg"
            alt=""
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* 가독성 보정 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/50" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20 py-28 sm:py-36 lg:py-44">
          <h2 className="font-black tracking-tight text-[clamp(40px,9vw,112px)] leading-[0.95] text-white">
            RIDE ON
            <br />
            <span className="text-white/90">핵심 서비스</span>
          </h2>
        </div>
      </div>

      {/* 하단: 색상 카드 4개 스트립 (히어로에 겹쳐 붙음) */}
      <div className="relative -mt-10 sm:-mt-14 lg:-mt-20 z-[1]">
        <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((c, i) => (
              <article
                key={i}
                className={[
                  "group relative isolate",
                  c.bg,
                  c.text,
                  // 붙어 보이도록 끝 카드만 라운드
                  i === 0 ? "rounded-t-2xl sm:rounded-tr-none lg:rounded-l-2xl" : "",
                  i === cards.length - 1 ? "rounded-b-2xl sm:rounded-bl-none lg:rounded-r-2xl" : "",
                ].join(" ")}
              >
                {/* 살짝 입체감 테두리 */}
                <div className={`absolute inset-0 ring-1 ${c.ring}/30`} />

                <div className="relative p-8 lg:p-10 flex min-h-[280px] flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs uppercase tracking-wider opacity-90">{c.eyebrow}</p>
                    <div className="opacity-90">{c.icon}</div>
                  </div>

                  <h3 className="text-2xl font-extrabold tracking-tight">{c.title}</h3>
                  <p className="text-[15px] leading-relaxed opacity-95">{c.desc}</p>

                  <div className="mt-auto">
                    <Link
                      href={c.href}
                      className="
                        inline-flex items-center justify-center rounded-full
                        border-2 border-current px-4 py-2 text-sm font-semibold
                        transition-transform duration-200 hover:scale-[1.03]
                      "
                      aria-label={`${c.title} 자세히 보기`}
                    >
                      자세히
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
