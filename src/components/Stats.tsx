// src/components/Stats.tsx
"use client";

import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

type StatItem = {
  label: string;
  value: string;
  desc: string;
};

const items: StatItem[] = [
  {
    label: "활동 라이더",
    value: "1,500+",
    desc: "전국에서 활동 중인 라이더 네트워크",
  },
  {
    label: "전국 지부",
    value: "25+",
    desc: "서울·경기·부산·전북·제주 등 주요 권역",
  },
  {
    label: "월간 처리 물량",
    value: "1,000,000+",
    desc: "배달·물류 월간 처리 기준",
  },
  {
    label: "정산 정확도",
    value: "99.99%",
    desc: "누락·지연을 최소화한 정산 시스템",
  },
  {
    label: "운영 연차",
    value: "3년+",
    desc: "쿠팡이츠플러스 전 강남 특공대(이츠특공대) 시절부터 이어온 배달·렌트·정산 운영 기간",
  },
];

export default function Stats() {
  const [first, ...rest] = items;

  return (
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* ===== Header ===== */}
        <header className="mb-8 lg:mb-10">
          <Eyebrow>NETWORK</Eyebrow>

          <Heading
            level={2}
            className="mt-2 text-[24px] sm:text-[26px] lg:text-[32px]"
          >
            전국 단위 운영 지표
          </Heading>

          <BodyText muted className="mt-2 max-w-xl text-[14px] sm:text-[15px]">
            활동 라이더부터 정산 정확도까지, 핵심 운영 지표를 하나의 기준으로
            관리합니다.
          </BodyText>
        </header>

        {/* ===== Layout: 메인 카드 + 보조 카드 4개 ===== */}
        <div className="lg:flex lg:items-stretch lg:gap-6">
          {/* 왼쪽: 메인 KPI 카드 (활동 라이더) */}
          <div className="lg:flex-[1.2]">
            <StatCard item={first} variant="hero" />
          </div>

          {/* 오른쪽: 나머지 4개 카드 2×2 그리드 */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-0 lg:flex-[1.8]">
            {rest.map((item) => (
              <StatCard key={item.label} item={item} variant="default" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type StatCardProps = {
  item: StatItem;
  variant: "hero" | "default";
};

function StatCard({ item, variant }: StatCardProps) {
  const isHero = variant === "hero";

  return (
    <article
      className={[
        "h-full rounded-2xl border border-white/7 bg-[#121212] text-white",
        "transition-all duration-200 hover:border-[#FFB800]/40 hover:bg-[#151515]",
        isHero ? "p-8 sm:p-9 lg:p-10" : "p-6 sm:p-7 lg:p-7",
      ].join(" ")}
    >
      {/* 라벨 */}
      <Eyebrow className="text-white/55">{item.label}</Eyebrow>

      {/* 숫자 */}
      <Heading
        level={3}
        className={
          isHero
            ? "mt-4 text-[34px] sm:text-[38px] lg:text-[44px] font-semibold"
            : "mt-3 text-[26px] sm:text-[30px] lg:text-[32px] font-semibold"
        }
      >
        {item.value}
      </Heading>

      {/* 설명 */}
      <BodyText
        size="sm"
        muted
        className={
          isHero
            ? "mt-3 max-w-xs text-[14px] sm:text-[15px]"
            : "mt-2 text-[13px] sm:text-[14px]"
        }
      >
        {item.desc}
      </BodyText>
    </article>
  );
}
