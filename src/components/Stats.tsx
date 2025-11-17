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
    value: "1,000+",
    desc: "전국에서 활동 중인 라이더 네트워크",
  },
  {
    label: "전국 지부",
    value: "25+",
    desc: "서울·경기·부산·전북·제주 등 주요 권역",
  },
  {
    label: "월간 처리 물량",
    value: "10,000+",
    desc: "배달·물류 월간 처리 기준",
  },
  {
    label: "정산 정확도",
    value: "99.9%",
    desc: "누락·지연을 최소화한 정산 시스템",
  },
];

export default function Stats() {
  const [first, ...rest] = items;

  return (
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      {/* 헤더 / Hero랑 같은 폭·패딩으로 정렬 */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <header className="mb-8 lg:mb-10">
          <Eyebrow>NETWORK</Eyebrow>

          <Heading level={2} className="mt-2">
            전국 단위 운영 지표
          </Heading>

          <BodyText muted className="mt-2 max-w-xl">
            활동 라이더부터 정산 정확도까지, 핵심 운영 지표를 하나의 기준으로
            관리합니다.
          </BodyText>
        </header>

        {/* 레이아웃: 데스크톱에서만 1 + 3 비대칭 구조 */}
        <div className="lg:flex lg:items-stretch lg:gap-6">
          {/* 왼쪽: 메인 KPI 카드 */}
          <div className="lg:flex-[1.15]">
            <StatCard item={first} variant="hero" />
          </div>

          {/* 오른쪽: 나머지 3개 카드 그리드 */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:mt-0 lg:flex-[1.5]">
            {rest.map((it) => (
              <StatCard key={it.label} item={it} variant="default" />
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
        "rounded-2xl border border-white/6 bg-[#121212] text-white",
        "transition-all duration-200 hover:border-[#FFB800]/40 hover:bg-[#151515]",
        isHero ? "p-8 lg:p-9 h-full" : "p-6 lg:p-7",
      ].join(" ")}
    >
      {/* 라벨 */}
      <Eyebrow className="text-white/55">{item.label}</Eyebrow>

      {/* 값 */}
      <Heading
        level={3}
        className={
          isHero
            ? "mt-4 text-[34px] md:text-[40px] font-semibold"
            : "mt-3 text-[28px] md:text-[32px] font-semibold"
        }
      >
        {item.value}
      </Heading>

      {/* 설명 */}
      <BodyText
        size="sm"
        muted
        className={isHero ? "mt-3 max-w-xs" : "mt-2"}
      >
        {item.desc}
      </BodyText>
    </article>
  );
}
