// src/components/ContactSection.tsx
"use client";

import { useMemo } from "react";
import { Phone, Mail } from "lucide-react";

/* ================================
   데이터 모델 (기존 유지: 타입만 둠)
   ================================ */
type Category = "합병" | "파트너십" | "기사" | "리스" | "기타";

type PartnerChannel = {
  id: string;
  logo: string;           // /public/logos/*.png
  name: string;           // 카드 제목
  subtitle: string;       // 부제
  desc: string;           // 1~2줄 설명
  tags?: string[];        // ← 더이상 렌더링하지 않음
  tel?: string;
  email?: string;
  location?: string;      // ← 더이상 렌더링하지 않음
  href?: string;          // ← 더이상 렌더링하지 않음
  cta?: string;           // ← 더이상 렌더링하지 않음
  category: Category;
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
    // (요청 5) 문구 보강: 뒤에 정식 협업 관계 문장 추가
    desc: "야마하 인증 장비/절차로 보증 수리 및 정기점검을 제공합니다. 라이드온과 정식 협업관계입니다.",
    tags: ["정비", "보증", "부품"], // 이제 화면에는 안 보임
    // (요청 3) 휴대폰 번호만 표시하고 싶다고 했으므로 모바일 번호 예시로 교체
    tel: "010-0000-0000",
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
    tel: "010-0000-0001",
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
    tel: "010-0000-0002",
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
    tel: "010-0000-0003",
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
    tel: "010-0000-0004",
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
    tel: "010-0000-0005",
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
    tel: "010-0000-0006",
    email: "kb@rideon.co.kr",
    location: "서울 종로구 서린동",
    href: "/contact",
    cta: "전담 창구 연결",
    category: "합병",
  },
];

/* ================================
   컴포넌트
   ================================ */
export default function ContactSection() {
  const heading = useMemo(
    () => ({
      title: "CONNECT with RIDE ON",
      // (요청 1) 상단 탭/버튼을 모두 삭제했으므로 안내 문구만 간결화
      subtitle: "파트너 네트워크로 가장 빠르게 연결됩니다.",
      microcopy: "우리는 전국 1위 네트워크로 연결된 파트너입니다.",
    }),
    []
  );

  // (요청 1) 탭/필터 전체 제거 → 항상 전체 채널을 노출
  const list = CHANNELS;

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

        {/* (요청 1) 상단 4버튼 탭 UI 완전 삭제 */}

        {/* 카드 목록 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3">
          {list.map((ch) => (
            <article
              key={ch.id}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-5 text-white transition-all duration-300 hover:scale-[1.01] hover:border-[#FFD247]/40 hover:shadow-[0_10px_28px_rgba(255,210,71,0.18)] min-h-[320px] sm:min-h-[360px]"
            >
              {/* 헤더: (요청 4) 야마하 글로벌 로고를 야마하 카드 위쪽에 추가 표시 */}
              {ch.id === "yamaha-gangdong" && (
                <div className="mb-3 flex justify-center">
                  <img
                    src="https://global.yamaha-motor.com/design/logo/img/logo_ymmc.png"
                    alt="YAMAHA Logo"
                    className="h-6 object-contain opacity-90"
                  />
                </div>
              )}

              {/* 브랜드 로고 + 이름 */}
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
                <p className="text-[13px] leading-relaxed text-white/80">
                  {ch.desc}
                </p>

                {/* (요청 2) 태그 전부 삭제 → 렌더링 자체 제거 */}
              </div>

              {/* 하단: 연락 수단만 (요청 3, 6) */}
              <div className="mt-auto pt-4 flex flex-col items-center gap-2">
                {/* (요청 6) 카드 내 CTA 버튼/링크 전부 제거 */}
                {/* (요청 3) 전화/이메일만 남기고 위치 뱃지 제거 */}
                <div className="flex flex-wrap justify-center gap-2 text-[12px]">
                  {ch.tel && (
                    <a
                      href={`tel:${ch.tel.replaceAll(/[^0-9]/g, "")}`}
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-[#FFD247] hover:text-[#111111] transition"
                      aria-label={`${ch.name} 전화 연결`}
                    >
                      <Phone className="size-3.5" />
                      {ch.tel}
                    </a>
                  )}
                  {ch.email && (
                    <a
                      href={`mailto:${ch.email}`}
                      className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-[#FFD247] hover:text-[#111111] transition"
                      aria-label={`${ch.name} 메일 보내기`}
                    >
                      <Mail className="size-3.5" />
                      {ch.email}
                    </a>
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
