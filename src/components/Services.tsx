"use client";

import Link from "next/link";
import { INQUIRY_MENU } from "@/config/links";

export default function Services() {
  const items = [
    {
      icon: "🛠️",
      title: "운영 대행",
      desc: "쿠팡이츠플러스 / 배민플러스 점주 맞춤 운영 전담",
      cta: "#contact",
    },
    {
      icon: "🛵",
      title: "렌트·리스",
      desc: "오토바이·보험·정비 One-stop 제공",
      cta: "#contact",
    },
    {
      icon: "📊",
      title: "플랫폼 연동",
      desc: "통합 리포트·정산 시스템으로 투명한 매출관리",
      cta: "#ridy",
    },
  ];

  return (
    // 섹션 배경은 상위 레이아웃(다크) 컬러를 따르도록 배경 제거
    <section id="services" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        {/* 섹션 타이틀: 가운데 + 살짝 키움 */}
        <h2 className="text-center font-extrabold text-white text-3xl md:text-4xl tracking-tight">
          핵심 서비스
        </h2>

        {/* 카드 그리드 */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.cta}
              role="group"
              className="
                relative rounded-2xl border border-white/10
                bg-[#1A1A1A]/70 p-8
                transition-all duration-200
                hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#1A1A1A]/80
                focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40
                text-center
              "
            >
              {/* 아이콘 중앙 */}
              <div className="mb-4 select-none text-3xl md:text-4xl leading-none">
                {it.icon}
              </div>

              {/* 제목 */}
              <h3 className="font-bold text-white text-[22px] md:text-[24px]">
                {it.title}
              </h3>

              {/* 설명 */}
              <p className="mt-3 text-[16px] leading-relaxed text-gray-300">
                {it.desc}
              </p>

              {/* CTA */}
              <span
                className="
                  mt-5 inline-block font-semibold text-gray-200
                  group-hover:text-[#FFB800] transition
                  underline decoration-transparent group-hover:decoration-[#FFB800]/60 underline-offset-4
                "
              >
                바로가기 →
              </span>
            </a>
          ))}
        </div>

        {/* ✅ 문의 메뉴 CTA 버튼 그룹 */}
        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {INQUIRY_MENU.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="rounded-lg border border-white/20 px-5 py-3 text-sm font-medium text-gray-200 hover:bg-white/10 hover:text-[#FFB800] transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
