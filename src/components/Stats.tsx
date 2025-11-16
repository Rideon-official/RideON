// src/components/Stats.tsx
"use client";

export default function Stats() {
  const items = [
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

  return (
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      {/* 헤더 / Hero랑 같은 폭·패딩으로 정렬 */}
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
            NETWORK
          </p>
          <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-white">
            전국 단위 운영 지표
          </h2>
          <p className="mt-2 text-sm text-white/60">
            활동 라이더부터 정산 정확도까지, 핵심 운영 지표를 하나의 기준으로
            관리합니다.
          </p>
        </header>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.label}
              className="rounded-2xl border border-white/5 bg-[#121212] p-7 text-white transition-all duration-200 hover:border-white/15 hover:bg-[#151515]"
            >
              <p className="text-sm text-white/45">{it.label}</p>
              <p className="mt-3 text-[32px] font-semibold leading-tight text-white">
                {it.value}
              </p>
              <p className="mt-2 text-xs text-white/35">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
