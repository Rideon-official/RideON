// src/components/ContactSection.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

/* ================================
   데이터 모델
   ================================ */
type Category = "합병" | "파트너십" | "기사" | "리스" | "기타";

type PartnerChannel = {
  id: string;
  logo: string;           // /public/logos/*.png
  name: string;           // 카드 제목
  subtitle: string;       // 부제
  desc: string;           // 1~2줄 설명
  tags?: string[];
  tel?: string;
  email?: string;
  location?: string;
  href?: string;          // 자세히/예약 등 이동 링크
  cta?: string;           // 행동형 CTA 문구
  category: Category;     // ← 필터용 카테고리
};

/* ================================
   채널 데이터
   ================================ */
const CHANNELS: PartnerChannel[] = [
  {
    id: "yamaha-gangdong",
    logo: "/logos/yamaha-gangdong.png",
    name: "야마하 강동점",
    subtitle: "공식 정비 · 보증 수리",
    desc: "야마하 인증 장비/절차로 보증 수리 및 정기점검을 제공합니다.",
    tags: ["정비", "보증", "부품"],
    tel: "02-0000-0000",
    email: "yamaha@rideon.co.kr",
    location: "서울 강동구",
    href: "/bike#center",
    cta: "정비 예약하기",
    category: "파트너십",
  },
  {
    id: "adjuster",
    logo: "/logos/adjuster.png",
    name: "손해사정사",
    subtitle: "사고·보험 처리 서류 전담",
    desc: "접수부터 정산까지 원스톱 지원. 사고 대응을 신속하고 투명하게.",
    tags: ["사고", "보험"],
    tel: "02-0000-0001",
    email: "claim@rideon.co.kr",
    location: "전국",
    href: "/inquiry#파트너십문의하기",
    cta: "사고 접수하기",
    category: "파트너십",
  },
  {
    id: "hospital-network",
    logo: "/logos/hospital.png",
    name: "협력병원",
    subtitle: "라이더 전문 진료 네트워크",
    desc: "진단서 발급·치료 연계·사고 후 케어까지 지역 협력망 운영.",
    tags: ["의료", "사고케어"],
    tel: "02-0000-0002",
    email: "hospital@rideon.co.kr",
    location: "수도권 중심",
    href: "/inquiry#기사가입문의하기",
    cta: "진료 문의하기",
    category: "파트너십",
  },
  {
    id: "rideon-bike",
    logo: "/logos/rideon-bike.png",
    name: "바이크정비소(라이드온바이크)",
    subtitle: "튜닝 · 정비 · 사고 처리",
    desc: "RIDE ON 전용 프로세스. 렌트/리스 차량까지 통합 관리.",
    tags: ["정비", "튜닝", "사고처리"],
    tel: "02-0000-0003",
    email: "service@rideon.co.kr",
    location: "서울 송파구",
    href: "/bike#center",
    cta: "정비 예약하기",
    category: "파트너십",
  },
  {
    id: "munjeong-bike",
    logo: "/logos/munjeong-bike.png",
    name: "바이크정비소(문정바이크)",
    subtitle: "정기 점검 · 급속 수리",
    desc: "도심형 빠른 대응. 예약/대기 최소화.",
    tags: ["정비", "예약"],
    tel: "02-0000-0004",
    email: "munjeong@rideon.co.kr",
    location: "서울 송파구 문정동",
    href: "/bike#center",
    cta: "예약 문의하기",
    category: "파트너십",
  },
  {
    id: "er-motors",
    logo: "/logos/er-motors.png",
    name: "바이크정비소(ER모터스)",
    subtitle: "전문 메인터넌스",
    desc: "숙련 메카닉의 세밀 점검과 책임 정비.",
    tags: ["정비", "점검"],
    tel: "02-0000-0005",
    email: "er@rideon.co.kr",
    location: "서울 강서권",
    href: "/bike#center",
    cta: "점검 예약하기",
    category: "파트너십",
  },
  {
    id: "kb-seorin",
    logo: "/logos/kb.png",
    name: "KB국민은행 서린동지점",
    subtitle: "라이더 금융 파트너",
    desc: "계좌 개설/카드/한도 지원. 지점 전담 창구 운영.",
    tags: ["금융", "계좌", "프로모션"],
    tel: "02-0000-0006",
    email: "kb@rideon.co.kr",
    location: "서울 종로구 서린동",
    href: "/contact",
    cta: "전담 창구 연결",
    category: "합병", // 임시: 필요에 맞게 분류 변경 가능
  },
];

/* ================================
   탭(필터) 정의 — 상단 4버튼을 탭처럼 동작
   ================================ */
const TABS: { key: Category | "전체"; label: string }[] = [
  { key: "합병", label: "지사 합병 문의" },
  { key: "파트너십", label: "파트너십 문의" },
  { key: "기사", label: "기사 가입 문의" },
  { key: "리스", label: "리스/렌탈 문의" },
  // 필요하다면 "전체" 탭도 추가 가능
];

export default function ContactSection() {
  const heading = useMemo(
    () => ({
      title: "CONNECT with RIDE ON",
      subtitle:
        "지사 합병·파트너십·기사·리스/렌탈 — 목적별 채널로 가장 빠르게 연결됩니다.",
      microcopy:
        "우리는 전국 1위 네트워크로 연결된 파트너입니다. 당신의 도전을 기다립니다.",
    }),
    []
  );

  // 활성 탭 상태
  const [active, setActive] = useState<Category>("파트너십");

  const filtered = useMemo(
    () => CHANNELS.filter((c) => c.category === active),
    [active]
  );

  return (
    <section className="relative w-full border-t border-neutral-900 bg-gradient-to-b from-[#121212] to-[#0F0F0F]">
      {/* 배경 패턴 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(1px_1px_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-[.2em] text-neutral-400">
            CONNECT
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
            {heading.title}
          </h2>
          <p className="mt-2 text-sm text-neutral-400">{heading.subtitle}</p>
          <p className="mt-2 text-sm text-white/60">{heading.microcopy}</p>
        </div>

        {/* 상단 4버튼 → 탭처럼 동작 */}
        <div
          className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          role="tablist"
          aria-label="연결 카테고리"
        >
          {TABS.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.key as Category)}
                className={[
                  "rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2",
                  isActive
                    ? "bg-[#FFD247] text-[#111111] border border-transparent shadow hover:brightness-95"
                    : "text-white border border-white/10 bg-white/5 hover:bg-[#FFD247] hover:text-[#111111]",
                ].join(" ")}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* 필터된 카드 목록 (세로형/중간 밀도) */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {filtered.map((ch) => (
            <article
              key={ch.id}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-all duration-300 hover:scale-[1.01] hover:border-[#FFD247]/40 hover:shadow-[0_10px_28px_rgba(255,210,71,0.18)] min-h-[320px] sm:min-h-[360px]"
            >
              {/* 헤더: 로고 + 이름 */}
              <header className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-[#141414] overflow-hidden mb-3">
                  <img
                    src={ch.logo}
                    alt={`${ch.name} logo`}
                    className="max-h-10 max-w-[48px] object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-[16px] sm:text-[17px] font-semibold leading-tight truncate max-w-[90%]">
                  {ch.name}
                </h3>
                <p className="mt-1 text-[12px] text-white/60 truncate max-w-[92%]">
                  {ch.subtitle}
                </p>
              </header>

              {/* 본문 */}
              <div className="mt-3">
                <p className="text-[13px] leading-relaxed text-white/80 line-clamp-3">
                  {ch.desc}
                </p>

                {ch.tags && ch.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                    {ch.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
                      >
                        #{t}
                      </span>
                    ))}
                    {ch.tags.length > 2 && (
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/60">
                        +{ch.tags.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* 하단: CTA + 액션 */}
              <div className="mt-auto pt-4 flex flex-col items-center gap-2">
                {ch.href && (
                  <Link
                    href={ch.href}
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-[#FFD247]/10 px-4 py-2 text-[#FFD247] hover:bg-[#FFD247] hover:text-[#111111] transition font-semibold w-full"
                    aria-label={`${ch.name} 이동`}
                  >
                    {ch.cta ?? "자세히 보기"}
                    <ArrowRight className="size-4" />
                  </Link>
                )}

                <div className="flex flex-wrap justify-center gap-2 text-[12px]">
                  {ch.tel && (
                    <a
                      href={`tel:${ch.tel.replaceAll(/[^0-9]/g, "")}`}
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 hover:bg-[#FFD247] hover:text-[#111111] transition"
                      aria-label={`${ch.name} 전화 연결`}
                    >
                      <Phone className="size-3.5" />
                      {ch.tel}
                    </a>
                  )}
                  {ch.email && (
                    <a
                      href={`mailto:${ch.email}`}
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 hover:bg-[#FFD247] hover:text-[#111111] transition"
                      aria-label={`${ch.name} 메일 보내기`}
                    >
                      <Mail className="size-3.5" />
                      {ch.email}
                    </a>
                  )}
                  {ch.location && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white/85">
                      <MapPin className="size-3.5" />
                      {ch.location}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
