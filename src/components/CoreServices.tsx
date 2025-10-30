// src/components/CoreServices.tsx
"use client";

import Link from "next/link";

const SERVICES = [
  {
    id: "merge",
    title: "지사 합병",
    desc: "기존 조직을 본사 운영/정산 체계로 흡수합니다.",
    href: "/inquiry#지사합병문의하기",
    level: "primary",
  },
  {
    id: "bike",
    title: "바이크·렌탈",
    desc: "플릿 운영, 배달 특화 조건으로 제공.",
    href: "/bike",
    level: "normal",
  },
  {
    id: "logi",
    title: "정산(Logiteats)",
    desc: "수수료·배송비·가맹 정산의 단일 창구.",
    href: "/logiteats",
    level: "normal",
  },
  {
    id: "store",
    title: "라이더 스토어",
    desc: "장비, 유니폼, 소모품 일괄 공급.",
    href: "/store",
    level: "muted",
  },
];

export default function CoreServices() {
  return (
    <section className="bg-[#0D0D0D] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <header className="flex items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-xs tracking-[0.28em] text-white/35 uppercase">SERVICES</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">RIDE ON이 하는 일</h2>
            <p className="mt-2 text-sm text-white/45">
              지사합병을 중심으로 운영, 장비, 정산까지 한 번에 묶습니다.
            </p>
          </div>
          <Link href="/inquiry" className="text-sm text-[#FFB800]">
            전체 문의 →
          </Link>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            if (service.level === "primary") {
              return (
                <article
                  key={service.id}
                  className="rounded-2xl bg-[#FFB800] text-[#111111] p-6 flex flex-col justify-between min-h-[200px]"
                >
                  <div>
                    <p className="text-xs tracking-wide uppercase">TOP PRIORITY</p>
                    <h3 className="mt-3 text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm text-black/70">{service.desc}</p>
                  </div>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold"
                  >
                    상담하기
                    <span aria-hidden="true">→</span>
                  </Link>
                </article>
              );
            }

            if (service.level === "normal") {
              return (
                <article
                  key={service.id}
                  className="rounded-2xl border border-white/6 bg-[#151515] p-6 hover:border-[#FFB800]/35 transition-colors"
                >
                  <h3 className="text-lg font-medium text-white">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/55">{service.desc}</p>
                  <Link href={service.href} className="mt-5 inline-flex text-sm text-white/80">
                    자세히 →
                  </Link>
                </article>
              );
            }

            // muted
            return (
              <article
                key={service.id}
                className="rounded-2xl border border-dashed border-white/10 bg-[#121212] p-6 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-medium text-white/85">{service.title}</h3>
                  <p className="mt-2 text-sm text-white/40">{service.desc}</p>
                </div>
                <Link href={service.href} className="mt-5 inline-flex text-sm text-[#FFB800]">
                  입점/문의 →
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
