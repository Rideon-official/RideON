// src/components/ContactSection.tsx
"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

/* =================================
   채널(세로 카드) 데이터 모델 정의
   ================================= */
type PartnerChannel = {
  id: string;
  logo: string;     // /logos/xxx.png (public 폴더)
  name: string;     // 예: 야마하 강동점
  subtitle: string; // 예: 공식 정비·보증 수리
  desc: string;     // 1~2줄 설명
  tags?: string[];  // ['정비','보증','부품']
  tel?: string;
  email?: string;
  location?: string; // 예: '서울 강동구'
  href?: string;     // 자세히 보기 링크
};

/* ===========================
   세로 카드에 표시할 실제 데이터
   =========================== */
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
  },
];

/* ===========================
   빠른 문의 버튼 (위쪽 4개)
   =========================== */
const QUICK_CTAS = [
  { label: "지사 합병 문의", href: "/inquiry#지사합병문의하기" },
  { label: "파트너십 문의", href: "/inquiry#파트너십문의하기" },
  { label: "기사 가입 문의", href: "/inquiry#기사가입문의하기" },
  { label: "리스/렌탈 문의", href: "/inquiry#리스렌탈신청하기" },
];

export default function ContactSection() {
  const heading = useMemo(
    () => ({
      title: "CONNECT with RIDE ON",
      subtitle:
        "지사 합병·파트너십·기사·리스/렌탈 — 목적별 채널로 가장 빠르게 연결됩니다.",
    }),
    []
  );

  return (
    <section className="relative w-full border-t border-neutral-900 bg-gradient-to-b from-[#121212] to-[#0F0F0F]">
      {/* 미세 패턴 */}
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
        </div>

        {/* 4개의 빠른 CTA */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {QUICK_CTAS.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className="text-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#FFB800] hover:text-[#111111] hover:scale-[1.02]"
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* 세로 그리드 카드 (컴팩트) */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CHANNELS.map((ch) => (
            <article
              key={ch.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 text-white transition-all duration-300 hover:scale-[1.01] hover:border-[#FFB800]/40 hover:shadow-[0_10px_28px_rgba(255,184,0,0.18)]"
            >
              <div className="flex items-start gap-4">
                {/* 로고 */}
                <div className="flex h-14 w-14 items-center justify-center rounded-lg border border-white/10 bg-[#141414] overflow-hidden shrink-0">
                  <img
                    src={ch.logo}
                    alt={`${ch.name} logo`}
                    className="max-h-10 max-w-[48px] object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                  />
                </div>

                {/* 본문 */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <h3 className="truncate text-[15px] font-semibold leading-tight">
                      {ch.name}
                    </h3>
                    <span className="truncate text-xs text-white/70">
                      ({ch.subtitle})
                    </span>
                  </div>

                  <p className="mt-1 line-clamp-2 text-[13px] leading-relaxed text-white/80">
                    {ch.desc}
                  </p>

                  {/* 태그 */}
                  {ch.tags && ch.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {ch.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-white/70"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* 하단 액션/정보 */}
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-[12px]">
                    {ch.tel && (
                      <a
                        href={`tel:${ch.tel.replaceAll(/[^0-9]/g, "")}`}
                        className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white hover:bg-[#FFB800] hover:text-[#111111] transition"
                        aria-label={`${ch.name} 전화 연결`}
                      >
                        <Phone className="size-3.5" />
                        {ch.tel}
                      </a>
                    )}
                    {ch.email && (
                      <a
                        href={`mailto:${ch.email}`}
                        className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white hover:bg-[#FFB800] hover:text-[#111111] transition"
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
                    {ch.href && (
                      <Link
                        href={ch.href}
                        className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-white hover:bg-[#FFB800] hover:text-[#111111] transition"
                        aria-label={`${ch.name} 자세히 보기`}
                      >
                        자세히 보기
                        <ArrowRight className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
