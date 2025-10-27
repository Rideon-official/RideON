"use client";

import Link from "next/link";
import { INQUIRY_MENU } from "@/config/links";

export default function Services() {
  const items = [
    { icon: "🛠️", title: "운영 대행",   desc: "쿠팡이츠플러스 / 배민플러스 점주 맞춤 운영 전담", cta: "#contact" },
    { icon: "🛵", title: "렌트·리스",   desc: "오토바이·보험·정비 One-stop 제공",               cta: "#contact" },
    { icon: "📊", title: "플랫폼 연동", desc: "통합 리포트·정산 시스템으로 투명한 매출관리",       cta: "#ridy" },
  ];

  return (
    <section id="services" className="py-14 bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4">
        {/* 섹션 타이틀 */}
        <p className="text-center text-xs uppercase tracking-widest text-white/50">SERVICES</p>
        <h2 className="mt-2 text-center text-2xl md:text-3xl font-extrabold text-white tracking-tight">
          핵심 서비스
        </h2>

        {/* 카드 그리드 */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.cta}
              role="group"
              className="
                relative rounded-2xl border border-white/10
                bg-[#1A1A1A]/70 p-6 text-center
                transition-all duration-200
                hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#1A1A1A]/80
                focus:outline-none focus:ring-2 focus:ring-white/40
              "
            >
              {/* 아이콘 */}
              <div className="mb-3 select-none text-3xl leading-none">{it.icon}</div>

              {/* 제목 */}
              <h3 className="text-lg md:text-xl font-semibold text-white">{it.title}</h3>

              {/* 설명 */}
              <p className="mt-2 text-[15px] leading-relaxed text-white/70">{it.desc}</p>

              {/* CTA */}
              <span
                className="
                  mt-4 inline-block font-semibold text-gray-200 transition
                  group-hover:text-[#FFB800] underline decoration-transparent
                  group-hover:decoration-[#FFB800]/60 underline-offset-4
                "
              >
                바로가기 →
              </span>
            </a>
          ))}
        </div>

        {/* 하단 CTA 버튼 그룹 */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {INQUIRY_MENU.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="
                rounded-2xl border border-white/15 px-5 py-2 text-sm text-gray-200
                hover:bg-white/10 hover:text-[#FFB800] transition
              "
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
