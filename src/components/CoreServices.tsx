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

function CardItem({ c }: { c: Card }) {
  return (
    <article className="card p-5 lg:p-6 group relative isolate text-white">
      <div className="flex items-center justify-between">
        <p className="text-xs uppercase tracking-wider text-white/50">{c.eyebrow}</p>
        <div className="text-white/80 group-hover:text-graphite-yellow transition-colors duration-300">
          {c.icon}
        </div>
      </div>

      <h3 className="typo-h3 mt-3">{c.title}</h3>
      <p className="typo-body text-white/80 mt-2">{c.desc}</p>

      <div className="mt-5">
        <Link
          href={c.href}
          className="btn-ghost px-4 py-2"
          aria-label={`${c.title} 자세히 보기`}
        >
          자세히 보기
        </Link>
      </div>
    </article>
  );
}
