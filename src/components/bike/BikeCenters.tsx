// src/components/bike/BikeCenters.tsx
"use client";

import { useMemo, useState } from "react";

type Center = {
  id: "gangdong" | "songpa";
  name: string;
  brandName: string;
  address: string;
  phone: string;
  mapQuery: string;
};

const CENTERS: Center[] = [
  {
    id: "gangdong",
    name: "강동점",
    brandName: "라이드온바이크 강동점",
    address: "서울특별시 강동구 천중로 176, 1층",
    phone: "010-9810-3323",
    mapQuery: "서울특별시 강동구 천중로 176",
  },
  {
    id: "songpa",
    name: "송파점",
    brandName: "문정오토바이",
    address: "서울특별시 송파구 동남로18길 49, 1층 101호",
    phone: "02-407-0010",
    mapQuery: "서울특별시 송파구 동남로18길 49",
  },
];

const telHref = (p: string) => `tel:${p.replace(/[^\d]/g, "")}`;
const gmapEmbed = (q: string) => `https://www.google.com/maps?q=${encodeURIComponent(q)}&output=embed`;
const gmapDir = (q: string) => `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(q)}`;

export default function BikeCenters() {
  const [active, setActive] = useState<Center["id"]>("gangdong");
  const current = useMemo(() => CENTERS.find(c => c.id === active)!, [active]);

  return (
    <section id="center" className="bg-black text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold">센터 위치 및 안내</h2>
          <p className="mt-3 text-neutral-300">정비·점검·소모품 교체까지 한 번에. 방문 전 연락 부탁드립니다.</p>
        </div>

        <div className="flex gap-3 mb-6">
          {CENTERS.map(c => {
            const on = c.id === active;
            return (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-semibold transition",
                  on
                    ? "bg-brandYellow text-black shadow-neon"
                    : "border border-neutral-700 text-neutral-200 hover:bg-brandGraphite/30",
                ].join(" ")}
                aria-pressed={on}
              >
                {c.name}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
            <p className="text-sm text-neutral-400">RIDE ON CENTER</p>
            <h3 className="mt-1 text-xl font-bold">{current.brandName}</h3>

            <dl className="mt-5 space-y-3 text-sm">
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-neutral-400">주소</dt>
                <dd className="text-neutral-200">{current.address}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-16 shrink-0 text-neutral-400">연락처</dt>
                <dd>
                  <a href={telHref(current.phone)} className="text-brandYellow hover:opacity-90">
                    {current.phone}
                  </a>
                </dd>
              </div>
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={telHref(current.phone)} className="inline-flex items-center rounded-xl bg-brandYellow px-4 py-2 font-semibold text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brandYellow/40">
                전화하기
              </a>
              <a href={gmapDir(current.mapQuery)} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center rounded-xl border border-neutral-700 px-4 py-2 hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-brandYellow/40">
                길찾기(구글 지도)
              </a>
            </div>

            <p className="mt-4 text-xs text-neutral-500">
              ※ 운영시간·정비 항목은 지점별로 상이할 수 있습니다.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/40">
            <iframe
              title={`${current.name} 위치`}
              src={gmapEmbed(current.mapQuery)}
              className="h-[360px] w-full md:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}