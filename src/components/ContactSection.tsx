// src/components/ContactSection.tsx
"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  QrCode,
} from "lucide-react";

/* =========================
   채널(슬라이더) 데이터 모델
   ========================= */
type PartnerChannel = {
  id: string;
  logo: string;         // /logos/yamaha-gangdong.png 처럼 public에 두세요
  name: string;         // 예: 야마하 강동점
  title: string;        // 예: 공식 정비·보증 수리
  desc: string;         // 1~2줄 설명
  tags?: string[];      // ['정비','보증','부품']
  tel?: string;         // '02-123-4567'
  email?: string;       // 'contact@rideon.co.kr'
  href?: string;        // 상세/외부 링크
};

/* =======================================
   슬라이더에 들어갈 실제 항목 정의 (커스텀)
   로고 파일은 /public/logos 경로에 배치
   ======================================= */
const CHANNELS: PartnerChannel[] = [
  {
    id: "yamaha-gangdong",
    logo: "/logos/yamaha-gangdong.png", // TODO: 로고 파일 배치
    name: "야마하 강동점",
    title: "공식 정비·보증 수리",
    desc: "야마하 인증 장비/절차로 보증 수리 및 정기 점검을 제공합니다.",
    tags: ["정비", "보증", "부품"],
    tel: "02-0000-0000",
    email: "yamaha@rideon.co.kr",
    href: "/bike#center",
  },
  {
    id: "adjuster",
    logo: "/logos/adjuster.png",
    name: "손해사정사",
    title: "사고·보험 처리 서류 전담",
    desc: "접수부터 정산까지 원스톱 지원. 사고 대응을 신속하고 투명하게.",
    tags: ["사고", "보험"],
    tel: "02-0000-0001",
    email: "claim@rideon.co.kr",
    href: "/inquiry#파트너십문의하기",
  },
  {
    id: "hospital-network",
    logo: "/logos/hospital.png",
    name: "협력병원",
    title: "라이더 전문 진료 네트워크",
    desc: "진단서 발급·치료 연계·사고 후 케어까지 지역 협력망 운영.",
    tags: ["의료", "사고케어"],
    tel: "02-0000-0002",
    email: "hospital@rideon.co.kr",
    href: "/inquiry#기사가입문의하기",
  },
  {
    id: "rideon-bike",
    logo: "/logos/rideon-bike.png",
    name: "바이크정비소(라이드온바이크)",
    title: "튜닝·정비·사고 처리",
    desc: "RIDE ON 전용 프로세스. 렌트/리스 차량까지 통합 관리.",
    tags: ["정비", "튜닝", "사고처리"],
    tel: "02-0000-0003",
    email: "service@rideon.co.kr",
    href: "/bike#center",
  },
  {
    id: "munjeong-bike",
    logo: "/logos/munjeong-bike.png",
    name: "바이크정비소(문정바이크)",
    title: "정기 점검·급속 수리",
    desc: "도심형 빠른 대응. 예약/대기 최소화.",
    tags: ["정비", "예약"],
    tel: "02-0000-0004",
    email: "munjeong@rideon.co.kr",
    href: "/bike#center",
  },
  {
    id: "er-motors",
    logo: "/logos/er-motors.png",
    name: "바이크정비소(ER모터스)",
    title: "전문 메인터넌스",
    desc: "숙련 메카닉의 세밀 점검과 책임 정비.",
    tags: ["정비", "점검"],
    tel: "02-0000-0005",
    email: "er@rideon.co.kr",
    href: "/bike#center",
  },
  {
    id: "kb-seorin",
    logo: "/logos/kb.png",
    name: "KB국민은행 서린동지점",
    title: "라이더 금융 파트너",
    desc: "계좌 개설/카드/한도 지원. 지점 전담 창구 운영.",
    tags: ["금융", "계좌", "프로모션"],
    tel: "02-0000-0006",
    email: "kb@rideon.co.kr",
    href: "/contact",
  },
];

/* =====================
   4개 빠른 문의 버튼
   ===================== */
const QUICK_CTAS = [
  { label: "지사 합병 문의", href: "/inquiry#지사합병문의하기" },
  { label: "파트너십 문의", href: "/inquiry#파트너십문의하기" },
  { label: "기사 가입 문의", href: "/inquiry#기사가입문의하기" },
  { label: "리스/렌탈 문의", href: "/inquiry#리스렌탈신청하기" },
];

export default function ContactSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // 스크롤 위치에 따라 페이드/버튼 상태 업데이트
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      setAtStart(el.scrollLeft <= 4);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
    };
    onScroll();
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9);
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  // 히어로 카피
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
      {/* 패턴 오버레이 */}
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

        {/* 4대 문의 CTA */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {QUICK_CTAS.map((btn) => (
            <Link
              key={btn.label}
              href={btn.href}
              className="text-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white hover:bg-[#FFB800] hover:text-[#111111] hover:scale-[1.02] transition-all duration-300"
            >
              {btn.label}
            </Link>
          ))}
        </div>

        {/* 파트너/서비스 채널 — 가로 슬라이더 */}
        <div className="mb-3 flex items-center gap-2">
          <Building2 className="size-5 text-[#FFB800]" />
          <h3 className="text-base font-semibold text-white">
            Partner & Service Channels
          </h3>
        </div>

        <div className="relative">
          {/* 좌/우 페이드 */}
          {!atStart && (
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-[#0F0F0F] to-transparent" />
          )}
          {!atEnd && (
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-[#0F0F0F] to-transparent" />
          )}

          {/* 슬라이더 본체 */}
          <div
            ref={scrollerRef}
            className="no-scrollbar relative flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
          >
            {CHANNELS.map((ch) => (
              <article
                key={ch.id}
                className="
                  group relative snap-start shrink-0
                  min-w-[520px] sm:min-w-[560px] lg:min-w-[640px]
                  rounded-2xl border border-white/10 bg-white/5 p-6
                  text-white transition-all duration-300
                  hover:scale-[1.02] hover:border-[#FFB800]/40
                  hover:shadow-[0_8px_28px_rgba(255,184,0,0.18)]
                "
              >
                <div className="flex items-start gap-5">
                  {/* 로고 */}
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl border border-white/10 bg-[#141414] overflow-hidden">
                    {/* next/image 대신 <img> 사용 — public 정적 파일 */}
                    <img
                      src={ch.logo}
                      alt={`${ch.name} logo`}
                      className="max-h-14 max-w-[72px] object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                    />
                  </div>

                  {/* 본문 */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h4 className="text-[17px] font-semibold leading-tight">
                        {ch.name}
                      </h4>
                      <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-white/80">
                        {ch.title}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-white/80">{ch.desc}</p>

                    {/* 태그 */}
                    {ch.tags && ch.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {ch.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* 액션 */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 text-sm">
                      {ch.tel && (
                        <a
                          href={`tel:${ch.tel.replaceAll(/[^0-9]/g, "")}`}
                          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:bg-[#FFB800] hover:text-[#111111] transition"
                          aria-label={`${ch.name} 전화 연결`}
                        >
                          <Phone className="size-4" />
                          {ch.tel}
                        </a>
                      )}
                      {ch.email && (
                        <a
                          href={`mailto:${ch.email}`}
                          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:bg-[#FFB800] hover:text-[#111111] transition"
                          aria-label={`${ch.name} 메일 보내기`}
                        >
                          <Mail className="size-4" />
                          {ch.email}
                        </a>
                      )}
                      {ch.href && (
                        <Link
                          href={ch.href}
                          className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-white hover:bg-[#FFB800] hover:text-[#111111] transition"
                          aria-label={`${ch.name} 자세히 보기`}
                        >
                          자세히 보기
                          <ArrowRight className="size-4" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 네비게이션 버튼 (데스크톱에서만 표시) */}
          <button
            type="button"
            onClick={() => scrollBy("prev")}
            className={`hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 items-center justify-center size-9 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 ${
              atStart ? "opacity-30 cursor-default" : ""
            }`}
            aria-label="이전 슬라이드"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollBy("next")}
            className={`hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center size-9 rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 ${
              atEnd ? "opacity-30 cursor-default" : ""
            }`}
            aria-label="다음 슬라이드"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>

        {/* (옵션) 추가 프로모션 박스 예시 — 필요 없으면 제거해도 됨 */}
        <div className="mt-10 rounded-2xl border border-neutral-800 bg-[#161616] p-5">
          <div className="flex items-center gap-3">
            <QrCode className="size-6 text-[#FFB800]" />
            <h3 className="text-base font-semibold text-white">
              지점/센터 전체 보기
            </h3>
          </div>
          <p className="mt-2 text-sm text-neutral-400">
            가까운 지점/센터 안내는 BIKE 센터 안내 페이지에서 확인하실 수 있습니다.
          </p>
          <div className="mt-3">
            <Link
              href="/bike#center"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white hover:bg-[#FFB800] hover:text-[#111111] transition"
            >
              센터 안내로 이동
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
