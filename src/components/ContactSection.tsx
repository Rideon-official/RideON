"use client";

import {
  Bike,
  Wrench,
  ShieldCheck,
  Hospital,
  Building2,
  Phone,
  Mail,
  ArrowRight,
  Gift,
  QrCode,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Link from "next/link";
import { useMemo, useState } from "react";

type ContactItem = {
  id: string;
  label: string;
  desc?: string;
  tel?: string;
  email?: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
};

// 연락 디렉터리(7개 예시)
const CONTACTS: ContactItem[] = [
  { id: "yamaha", label: "야마하", desc: "공식 정비·제휴 문의", tel: "000-0000-0000", email: "yamaha@rideon.co.kr", icon: Bike },
  { id: "honda", label: "혼다", desc: "리스·정비·제휴 문의", tel: "000-0000-0000", email: "honda@rideon.co.kr", icon: Bike },
  { id: "adjuster", label: "손해사정사", desc: "사고·보험·서류 전담", tel: "000-0000-0000", email: "claim@rideon.co.kr", icon: ShieldCheck },
  { id: "hospital", label: "협력병원", desc: "라이더 전문 진료 연계", tel: "000-0000-0000", email: "hospital@rideon.co.kr", icon: Hospital },
  { id: "shop1", label: "바이크 정비소 1 (강동)", desc: "정비·점검 예약", tel: "000-0000-0000", email: "service1@rideon.co.kr", icon: Wrench },
  { id: "shop2", label: "바이크 정비소 2 (대구)", desc: "정비·점검 예약", tel: "000-0000-0000", email: "service2@rideon.co.kr", icon: Wrench },
  { id: "merge", label: "지사장·합병 제안", desc: "파트너십 & 합병 문의", href: "/apply/branch-merge", icon: Building2 },
];

export default function ContactSection() {
  // 기본 6개까지만 노출, 넘어가면 더보기
  const COLLAPSED_COUNT = 6;
  const [expanded, setExpanded] = useState(false);

  const visible = useMemo(() => {
    if (expanded) return CONTACTS;
    return CONTACTS.slice(0, COLLAPSED_COUNT);
  }, [expanded]);

  const hiddenCount = Math.max(0, CONTACTS.length - COLLAPSED_COUNT);

  return (
    <section className="relative w-full border-t border-neutral-900 bg-gradient-to-b from-[#121212] to-[#0F0F0F]">
      {/* subtle pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(1px_1px_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]"
      />
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[.2em] text-neutral-400">LET’S CONNECT</p>
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

        {/* 상단 프로모션 콜아웃 (KB국민은행 × RIDE ON) */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr,1.2fr]">
          <div className="rounded-2xl border border-neutral-800 bg-[#161616] p-5">
            <div className="flex items-center gap-3">
              <Gift className="size-6 text-[#FFB800]" />
              <h3 className="text-base font-semibold text-white">KB국민은행 × 라이드온 특별 프로모션</h3>
            </div>
            <div className="mt-3 grid gap-3 text-sm text-neutral-300">
              <p><b className="text-neutral-100">대상</b>: KB국민은행 새 계좌 개설 고객</p>
              <p>
                <b className="text-neutral-100">혜택</b>: 계좌 개설 시 <b className="text-[#FFB800]">10,000원</b> 지급 ·
                개설 후 즉시 사용 가능 · 한도 제한 없음 · 간편한 카드 발급 절차
              </p>
              <p><b className="text-neutral-100">신청</b>: 각 지역 지부장에게 문의 (계좌 개설 완료 후 혜택 지급)</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                <QrCode className="size-4" />
                QR로 비대면 가입 가능 · 가입 완료 후 지부장에게 연락 시
                <span className="text-neutral-300"> 10,000원 지급 + 한도 제한 해제</span>
              </div>
            </div>
          </div>

          {/* 안내 블록(섹션 설명) */}
          <div className="rounded-2xl border border-neutral-800 bg-[#161616] p-5">
            <div className="flex items-center gap-3">
              <Building2 className="size-6 text-[#FFB800]" />
              <h3 className="text-base font-semibold text-white">서비스별 전용 채널</h3>
            </div>
            <p className="mt-2 text-sm text-neutral-400">
              핵심서비스와 겹치지 않도록 <b className="text-neutral-200">리스트·디렉터리</b>로 구성했습니다.
              모바일은 <b className="text-neutral-200">1열 리스트</b>, 태블릿 <b className="text-neutral-200">2열</b>,
              데스크탑 <b className="text-neutral-200">3열</b> 그리드로 확인하세요.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-neutral-400">
              <li>• 좌측 포인트 라인 <span className="text-[#FFB800]">#FFB800</span></li>
              <li>• hover: 미세한 그림자 + subtle scale</li>
              <li>• 전화/메일 즉시 연결</li>
            </ul>
          </div>
        </div>

        {/* 디렉터리: 반응형 GRID (가로 스크롤 없음) */}
        <div className="rounded-2xl border border-neutral-800 bg-[#141414] p-3">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((c) => (
              <DirectoryRow key={c.id} item={c} />
            ))}
          </div>

          {/* 더보기 / 접기 */}
          {hiddenCount > 0 && (
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex items-center gap-1 rounded-lg border border-neutral-700 px-3 py-2 text-sm font-medium text-neutral-200 hover:bg-neutral-900"
              >
                {expanded ? (
                  <>
                    접기 <ChevronUp className="size-4" />
                  </>
                ) : (
                  <>
                    더보기 +{hiddenCount} <ChevronDown className="size-4" />
                  </>
                )}
              </button>
            </div>
          )}
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
