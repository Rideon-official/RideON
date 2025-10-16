"use client";

import { Bike, Wrench, ShieldCheck, Hospital, Building2, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

type ContactItem = {
  id: string;
  label: string;
  desc?: string;
  tel?: string;
  email?: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
};

const CONTACTS: ContactItem[] = [
  { id: "yamaha", label: "야마하", desc: "제휴·정비·문의", tel: "000-0000-0000", email: "yamaha@rideon.co.kr", icon: Bike },
  { id: "honda", label: "혼다", desc: "제휴·정비·문의", tel: "000-0000-0000", email: "honda@rideon.co.kr", icon: Bike },
  { id: "adjuster", label: "손해사정사", desc: "사고 접수·서류 협조", tel: "000-0000-0000", email: "claim@rideon.co.kr", icon: ShieldCheck },
  { id: "hospital", label: "협력병원", desc: "진료·연계 문의", tel: "000-0000-0000", email: "hospital@rideon.co.kr", icon: Hospital },
  { id: "shop1", label: "바이크 정비소 1", desc: "정비·점검 예약", tel: "000-0000-0000", email: "service1@rideon.co.kr", icon: Wrench },
  { id: "shop2", label: "바이크 정비소 2", desc: "정비·점검 예약", tel: "000-0000-0000", email: "service2@rideon.co.kr", icon: Wrench },
  // { id: "merge", label: "지사장·합병 제안", desc: "파트너십 & 합병 문의", href: "/apply/branch-merge", icon: Building2 },
];

export default function ContactSection() {
  return (
    <section
      className="
        relative w-full border-t border-neutral-900
        bg-gradient-to-b from-[#121212] to-[#0F0F0F]
      "
    >
      {/* subtle pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(1px_1px_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 헤더 */}
        <div className="mb-10 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[.2em] text-neutral-400">
              LET’S CONNECT
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
              CONTACT <span className="text-[#FFB800]">RIDE&nbsp;ON</span>
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">
              제휴·정비·사고 대응까지, 파트너 유형별 전용 채널로 가장 빠르게 연결됩니다.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-700 px-4 py-2 text-sm font-semibold text-neutral-200 hover:bg-neutral-900"
          >
            전체 연락망 보기
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* 레이아웃: 좌측 가이드 카드 / 우측 디렉터리 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr,1.4fr]">
          {/* 좌측 가이드 */}
          <div className="rounded-2xl border border-neutral-800 bg-[#161616] p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Building2 className="size-6 text-[#FFB800]" />
              <h3 className="text-lg font-semibold text-white">서비스별 전용 채널</h3>
            </div>
            <p className="mt-3 text-sm text-neutral-400">
              핵심서비스와 겹치지 않도록 카드 대신 <b className="text-neutral-200">리스트·디렉터리</b>로 구성했습니다.
              모바일은 <b className="text-neutral-200">가로 스크롤</b>, 데스크톱은 <b className="text-neutral-200">2열 목록</b>으로 표시됩니다.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-neutral-400">
              <li>• 좌측 포인트 라인 <span className="text-[#FFB800]">#FFB800</span></li>
              <li>• hover: 미세한 그림자 + scale(98% → 100%)</li>
              <li>• 전화/메일 즉시 연결</li>
            </ul>
          </div>

          {/* 우측: 디렉터리 */}
          <div className="rounded-2xl border border-neutral-800 bg-[#141414] p-3">
            {/* 데스크톱 2열 */}
            <div className="hidden gap-3 lg:grid lg:grid-cols-2">
              {CONTACTS.map((c) => (
                <DirectoryRow key={c.id} item={c} />
              ))}
            </div>

            {/* 모바일 가로 스크롤 */}
            <div className="flex gap-3 overflow-x-auto lg:hidden">
              {CONTACTS.map((c) => (
                <DirectoryChip key={c.id} item={c} />
              ))}
            </div>
          </div>
        </div>

        {/* 섹션 디바이더 */}
        <div className="mt-12 h-px w-full bg-neutral-900" />
      </div>
    </section>
  );
}

function DirectoryRow({ item }: { item: ContactItem }) {
  const Icon = item.icon;
  return (
    <div className="group flex items-start gap-3 rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4 transition hover:shadow-sm hover:border-neutral-700">
      <div className="mt-0.5 h-10 w-1 rounded-full bg-[#FFB800]" />
      <Icon className="mt-0.5 size-5 text-neutral-300" />
      <div className="min-w-0 flex-1 text-sm">
        <p className="truncate font-semibold text-white">{item.label}</p>
        {item.desc && <p className="truncate text-neutral-400">{item.desc}</p>}
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
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
            <Link href={item.href} className="inline-flex items-center gap-1 text-neutral-300 hover:underline">
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
    <div className="min-w-[220px] rounded-xl border border-neutral-800 bg-[#1A1A1A] px-4 py-3 shadow-sm transition hover:shadow">
      <div className="flex items-center gap-2">
        <div className="h-5 w-1 rounded bg-[#FFB800]" />
        <Icon className="size-4 text-neutral-300" />
        <p className="truncate text-sm font-semibold text-white">{item.label}</p>
      </div>
      {item.desc && <p className="mt-1 line-clamp-2 text-xs text-neutral-400">{item.desc}</p>}
      <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
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
      </div>
    </div>
  );
}
