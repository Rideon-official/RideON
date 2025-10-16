"use client";

import { Bike, Building2, Hospital, Wrench, ShieldCheck, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

type ContactItem = {
  id: string;
  label: string;
  desc?: string;
  tel?: string;
  email?: string;
  href?: string; // 내부 링크(예: 지사합병 제안)
  icon: React.ComponentType<{ className?: string }>;
};

const CONTACTS: ContactItem[] = [
  { id: "yamaha", label: "야마하", desc: "제휴·정비·문의", tel: "000-0000-0000", email: "yamaha@rideon.co.kr", icon: Bike },
  { id: "honda", label: "혼다", desc: "제휴·정비·문의", tel: "000-0000-0000", email: "honda@rideon.co.kr", icon: Bike },
  { id: "adjuster", label: "손해사정사", desc: "사고 접수·서류 협조", tel: "000-0000-0000", email: "claim@rideon.co.kr", icon: ShieldCheck },
  { id: "hospital", label: "협력병원", desc: "진료·연계 문의", tel: "000-0000-0000", email: "hospital@rideon.co.kr", icon: Hospital },
  { id: "shop1", label: "바이크 정비소 1", desc: "정비·점검 예약", tel: "000-0000-0000", email: "service1@rideon.co.kr", icon: Wrench },
  { id: "shop2", label: "바이크 정비소 2", desc: "정비·점검 예약", tel: "000-0000-0000", email: "service2@rideon.co.kr", icon: Wrench },
  // 예: 지사합병 제안 라우트 연결
  // { id: "merge", label: "지사장·합병 제안", desc: "파트너십 & 합병 문의", href: "/apply/branch-merge", icon: Building2 },
];

export default function ContactSection() {
  return (
    <section className="relative w-full border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 헤더 */}
        <div className="mb-10 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-widest text-neutral-500">LET’S CONNECT</p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-black lg:text-3xl">
              CONTACT&nbsp;<span className="text-[#FFB800]">RIDE&nbsp;ON</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-600">
              제휴·정비·사고 대응까지, 파트너 유형별 전용 채널로 가장 빠르게 연결됩니다.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm font-semibold hover:bg-neutral-100"
          >
            전체 연락망 보기
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 디렉터리: 데스크톱 2열 그리드 + 모바일 가로 스크롤 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* 좌측 설명/CTA 블록 (시각 분리) */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Building2 className="size-6 text-[#FFB800]" />
              <h3 className="text-lg font-semibold">서비스별 전용 채널</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-600">
              핵심서비스 섹션과 구분되도록, 연락처는 카드 대신 <b>리스트형</b>으로 정리했습니다.
              모바일에서는 <b>가로 스크롤</b>로, 데스크톱에서는 <b>2열 목록</b>로 깔끔하게 보여줍니다.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-500">
              <li>• 리스트 좌측에 포인트 라인(<span className="text-[#FFB800]">#FFB800</span>)</li>
              <li>• hover 시 미세한 그림자 + scale(98→100%)</li>
              <li>• 전화/메일은 즉시 연결되는 링크</li>
            </ul>
          </div>

          {/* 우측: 연락 디렉터리 */}
          <div className="rounded-2xl border border-neutral-200 bg-white p-2">
            {/* 모바일 가로 스크롤 래퍼 */}
            <div className="flex snap-x gap-3 overflow-x-auto p-2 lg:block lg:overflow-visible">
              <div className="hidden lg:grid lg:grid-cols-2 lg:gap-2">
                {CONTACTS.map((c) => (
                  <DirectoryRow key={c.id} item={c} />
                ))}
              </div>

              {/* 모바일: 칩/타일처럼 가로 스크롤 */}
              <div className="flex min-w-full snap-start lg:hidden">
                <div className="flex w-full gap-2">
                  {CONTACTS.map((c) => (
                    <DirectoryChip key={c.id} item={c} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 여백용 divider */}
        <div className="mt-12 h-px w-full bg-neutral-200" />
      </div>
    </section>
  );
}

function DirectoryRow({ item }: { item: ContactItem }) {
  const Icon = item.icon;
  return (
    <div className="group flex items-center gap-3 rounded-xl border border-neutral-200 p-4 transition hover:shadow-sm">
      <div className="h-10 w-1 rounded-full bg-[#FFB800]" />
      <Icon className="size-6 text-neutral-700" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold">{item.label}</p>
        {item.desc && <p className="truncate text-xs text-neutral-500">{item.desc}</p>}
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs">
          {item.tel && (
            <a href={`tel:${item.tel}`} className="inline-flex items-center gap-1 hover:underline">
              <Phone className="size-3" />
              {item.tel}
            </a>
          )}
          {item.email && (
            <a href={`mailto:${item.email}`} className="inline-flex items-center gap-1 hover:underline">
              <Mail className="size-3" />
              {item.email}
            </a>
          )}
          {item.href && (
            <Link href={item.href} className="inline-flex items-center gap-1 hover:underline">
              자세히 보기 <ArrowRight className="size-3" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function DirectoryChip({ item }: { item: ContactItem }) {
  const Icon = item.icon;
  return (
    <div className="snap-start rounded-xl border border-neutral-200 px-4 py-3 shadow-sm transition hover:shadow">
      <div className="flex items-center gap-2">
        <Icon className="size-5 text-neutral-700" />
        <p className="text-sm font-semibold">{item.label}</p>
      </div>
      {item.desc && <p className="mt-1 line-clamp-2 w-56 text-xs text-neutral-500">{item.desc}</p>}
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs">
        {item.tel && (
          <a href={`tel:${item.tel}`} className="inline-flex items-center gap-1 hover:underline">
            <Phone className="size-3" />
            {item.tel}
          </a>
        )}
        {item.email && (
          <a href={`mailto:${item.email}`} className="inline-flex items-center gap-1 hover:underline">
            <Mail className="size-3" />
            {item.email}
          </a>
        )}
        {item.href && (
          <Link href={item.href} className="inline-flex items-center gap-1 hover:underline">
            자세히 보기 <ArrowRight className="size-3" />
          </Link>
        )}
      </div>
    </div>
  );
}
