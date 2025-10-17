// src/components/CoreServices.tsx
"use client";

import Link from "next/link";

type Service = {
  id: string;
  icon: React.ReactNode;
  eyebrow?: string;
  title: string;
  desc: string;
  bullets?: string[];
  ctas?: { label: string; href: string }[];
};

const services: Service[] = [
  {
    id: "hq",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" className="shrink-0" aria-hidden>
        <path d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M4 20h16M8 10h8M8 14h5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    eyebrow: "HQ Support",
    title: "본사 운영지원",
    desc: "지사는 현장 운영에 집중, 본사는 시스템으로 지원.",
    bullets: ["정산·입금 본사 소통 대행", "채용/홍보 대행", "주간 운영 리포트"],
    ctas: [
      { label: "회사 소개", href: "/about" },
      { label: "합병 문의", href: "/partnership" },
    ],
  },
  {
    id: "bike",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" className="shrink-0" aria-hidden>
        <circle cx="6" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M9 17l3-7h4l3 7M10 10l-2 4" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    ),
    eyebrow: "Ride On Bike",
    title: "RIDE ON BIKE",
    desc: "렌트·리스·튜닝·정비·사고 처리까지 원스톱.",
    bullets: ["신청부터 정비/사고까지 통합", "센터 직영(강동)"],
    ctas: [
      { label: "렌트·리스 문의", href: "/bike#rent" },
      { label: "센터 안내", href: "/bike#center" },
    ],
  },
  {
    id: "settle",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" className="shrink-0" aria-hidden>
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M7 12h10M7 8h6M7 16h5" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    eyebrow: "LogitEats",
    title: "정산 솔루션",
    desc: "타 지사도 사용할 수 있는 정산·리포트 플랫폼.",
    bullets: ["실적/수수료 자동수집", "알림·리포트", "CSV·API 연동"],
    ctas: [{ label: "정산 서비스 보기", href: "/logiteats#intro" }],
  },
  {
    id: "store",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" className="shrink-0" aria-hidden>
        <path d="M3 9l2-4h14l2 4v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M7 9v-2m10 2v-2M8 14h8" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    eyebrow: "Rider Store",
    title: "라이더 스토어",
    desc: "공식 의류/장비/소모품 — 합리적 가격에 바로 구매.",
    bullets: ["티셔츠·바람막이·오더판", "헬멧·장갑·소모품"],
    ctas: [{ label: "스토어 둘러보기", href: "/store" }],
  },
];

export default function CoreServices() {
  return (
    <section className="bg-[#111111] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-6 sm:px-10 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-black text-white text-center tracking-tight">
          핵심 서비스
        </h2>

        <div className="mt-10 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.id}
              className="
                group relative rounded-2xl bg-[#1A1A1A] text-neutral-300
                ring-1 ring-neutral-800 shadow-[0_6px_40px_-12px_rgba(0,0,0,0.6)]
                overflow-hidden flex flex-col
                transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_50px_-10px_rgba(0,0,0,0.7)]
              "
            >
              {/* 상단 얇은 포인트 바 */}
              <div className="h-1 w-full bg-[#FFB800]" />

              {/* 카드 본문 */}
              <div className="p-6 sm:p-7 lg:p-8 flex-1 flex flex-col">
                {/* 아이콘 + eyebrow */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      inline-flex items-center justify-center size-12 rounded-xl
                      bg-black/20 ring-1 ring-neutral-800 text-[#FFB800]
                    "
                  >
                    {s.icon}
                  </span>
                  {s.eyebrow && (
                    <p className="text-xs uppercase tracking-wider text-neutral-400">{s.eyebrow}</p>
                  )}
                </div>

                <h3 className="mt-4 text-xl font-extrabold text-white">{s.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-neutral-400">{s.desc}</p>

                {s.bullets?.length ? (
                  <ul className="mt-4 space-y-1.5 text-[15px]">
                    {s.bullets.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[7px] size-1.5 rounded-full bg-[#FFB800]/80" aria-hidden />
                        <span className="text-neutral-300">{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* CTA */}
                {s.ctas?.length ? (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.ctas.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="
                          inline-flex items-center rounded-lg border border-neutral-600
                          px-4 py-2 text-sm font-semibold text-neutral-200
                          transition-colors duration-300
                          hover:text-[#111111] hover:border-[#FFB800] hover:bg-[#FFB800]
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50
                        "
                        aria-label={`${s.title} - ${c.label}`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              {/* 카드 하단 그라데이션 포커스 글로우 (호버 시) */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ background: "radial-gradient(100% 60% at 50% 100%, rgba(255,184,0,0.25) 0%, rgba(255,184,0,0) 60%)" }} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
