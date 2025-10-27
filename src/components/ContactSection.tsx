// src/components/ContactSection.tsx
"use client";

import { useMemo, useRef, useState } from "react";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

/* ================================
   타입
   ================================ */
type Category = "정비업체" | "사고·보험" | "협력병원" | "협력사";
type WithAll = Category | "전체";

type PartnerChannel = {
  id: string;
  logo: string; // 단일 로고
  name: string;
  subtitle: string;
  desc: string;
  tel?: string;
  email?: string;
  category: Category;
};

/* ================================
   데이터
   ================================ */
const CHANNELS: PartnerChannel[] = [
  // ----- 정비업체 -----
  {
    id: "yamaha-gangdong",
    logo: "https://global.yamaha-motor.com/design/logo/img/logo_ymmc.png",
    name: "야마하 강동점",
    subtitle: "공식 정비 · 보증 수리",
    desc: "야마하 인증 장비/절차로 보증 수리 및 정기점검을 제공합니다. 라이드온과 정식 협업관계입니다.",
    tel: "010-0000-0000",
    email: "yamaha@rideon.co.kr",
    category: "정비업체",
  },
  {
    id: "rideon-bike",
    logo: "/logos/rideon-bike.png",
    name: "라이드온바이크",
    subtitle: "튜닝 · 정비 · 사고 처리",
    desc: "RIDE ON 전용 프로세스로 렌트/리스 차량까지 통합 관리.",
    tel: "010-0000-0003",
    email: "service@rideon.co.kr",
    category: "정비업체",
  },
  {
    id: "munjeong-bike",
    logo: "/logos/munjeong-bike.png",
    name: "문정바이크",
    subtitle: "정기 점검 · 급속 수리",
    desc: "도심형 빠른 대응. 예약/대기 최소화.",
    tel: "010-0000-0004",
    email: "munjeong@rideon.co.kr",
    category: "정비업체",
  },
  {
    id: "er-motors",
    logo: "/logos/er-motors.png",
    name: "ER모터스",
    subtitle: "전문 메인터넌스",
    desc: "숙련 메카닉의 세밀 점검과 책임 정비.",
    tel: "010-0000-0005",
    email: "er@rideon.co.kr",
    category: "정비업체",
  },

  // ----- 사고·보험 -----
  {
    id: "adjuster",
    logo: "/logos/adjuster.png",
    name: "손해사정사",
    subtitle: "사고·보험 처리 전담",
    desc: "접수부터 정산까지 원스톱 지원. 빠르고 투명한 사고 대응.",
    tel: "010-0000-0001",
    email: "claim@rideon.co.kr",
    category: "사고·보험",
  },
  {
    id: "hyundai-insurance",
    logo: "/logos/hyundai-insurance.png",
    name: "현대해상",
    subtitle: "파트너 보험사",
    desc: "사고 접수 및 보상 진행 지원. 파트너 전용 상담 채널 운영.",
    tel: "010-0000-0100",
    email: "hi@rideon.co.kr",
    category: "사고·보험",
  },
  {
    id: "kb-insurance",
    logo: "/logos/kb-insurance.png",
    name: "KB보험",
    subtitle: "파트너 보험사",
    desc: "신속한 보상 심사와 전담 창구 제공. 라이더 맞춤 상품 연계.",
    tel: "010-0000-0200",
    email: "kbins@rideon.co.kr",
    category: "사고·보험",
  },
  {
    id: "delivery-mutual",
    logo: "/logos/delivery-mutual.png",
    name: "배달서비스공제",
    subtitle: "배달업 공제조합",
    desc: "업권 특화 공제상품 및 사고 처리 연계. 서류 발급/정산 지원.",
    tel: "010-0000-0300",
    email: "mutual@rideon.co.kr",
    category: "사고·보험",
  },

  // ----- 협력병원 -----
  {
    id: "hospital-network",
    logo: "/logos/hospital.png",
    name: "협력병원",
    subtitle: "라이더 전문 진료",
    desc: "진단서 발급·치료 연계·사고 후 케어까지 지역 네트워크 운영.",
    tel: "010-0000-0002",
    email: "hospital@rideon.co.kr",
    category: "협력병원",
  },

  // ----- 협력사 -----
  {
    id: "kb-seorin",
    logo: "/logos/kb.png",
    name: "KB국민은행 서린동지점",
    subtitle: "라이더 금융 파트너",
    desc: "계좌·카드·한도 지원을 위한 전담 창구 운영.",
    tel: "010-0000-0006",
    email: "kb@rideon.co.kr",
    category: "협력사",
  },
];

/* ================================
   유틸
   ================================ */
const TABS: WithAll[] = ["전체", "정비업체", "사고·보험", "협력병원", "협력사"];

function chunk<T>(arr: T[], size: number) {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
function telHref(t?: string) {
  if (!t) return undefined;
  return `tel:${t.replaceAll(/[^0-9+]/g, "")}`;
}

/* ================================
   카드 (세로형, 더 슬림)
   ================================ */
function Card({ item }: { item: PartnerChannel }) {
  return (
    <article className="group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3 text-white transition-all duration-300 hover:scale-[1.01] hover:border-[#FFD247]/40 hover:shadow-[0_10px_28px_rgba(255,210,71,0.18)] w-full min-h-[340px]">
      <div className="h-14 w-14 mb-2.5 flex items-center justify-center overflow-hidden rounded-xl bg-[#141414] border border-white/10">
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className="max-h-11 max-w-12 object-contain"
        />
      </div>

      <h3 className="text-[16px] font-bold text-white text-center">{item.name}</h3>
      <p className="mt-0.5 text-[12px] text-white/60 text-center">{item.subtitle}</p>

      <p className="mt-1.5 text-[12.5px] leading-relaxed text-white/80 text-center line-clamp-2">
        {item.desc}
      </p>

      <div className="mt-auto pt-2 flex flex-wrap justify-center gap-1.5 text-[12px]">
        {item.tel && (
          <a
            href={telHref(item.tel)}
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-[#FFD247] hover:text-[#111111] transition"
            aria-label={`${item.name} 전화 연결`}
          >
            <Phone className="size-4" />
            {item.tel}
          </a>
        )}
        {item.email && (
          <a
            href={`mailto:${item.email}`}
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-[#FFD247] hover:text-[#111111] transition"
            aria-label={`${item.name} 메일 보내기`}
          >
            <Mail className="size-4" />
            {item.email}
          </a>
        )}
      </div>
    </article>
  );
}

/* ================================
   메인
   ================================ */
export default function ContactSection() {
  const [active, setActive] = useState<WithAll>("전체");
  const [showAll, setShowAll] = useState(false);

  const filtered = useMemo(() => {
    if (active === "전체") return CHANNELS;
    return CHANNELS.filter((c) => c.category === active);
  }, [active]);

  // 캐러셀
  const pages = useMemo(() => chunk(filtered, 6), [filtered]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollByPage = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="relative w-full border-t border-neutral-900 bg-gradient-to-b from-[#121212] to-[#0F0F0F]">
      {/* 배경 패턴 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(1px_1px_at_1px_1px,#fff_1px,transparent_0)] [background-size:16px_16px]"
      />

      {/* 헤더/탭 컨테이너: 상단 섹션과 라인 맞춤 */}
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:px-8">
        {/* 헤더(좌측 정렬) */}
        <div className="mb-4">
          <p className="text-xs font-semibold tracking-[.2em] text-neutral-400">
            CONNECT
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white lg:text-3xl">
            CONNECT with RIDE ON
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            파트너 네트워크로 가장 빠르게 연결됩니다.
          </p>
          <p className="mt-1 text-sm text-white/60">
            우리는 전국 1위 네트워크로 연결된 파트너입니다.
          </p>
        </div>

        {/* 탭(가운데) + 전체보기(오른쪽) */}
        <div className="mb-6 grid grid-cols-[1fr_auto_1fr] items-center">
          <div />
          <div
            className="flex flex-wrap justify-center gap-2"
            role="tablist"
            aria-label="연결 카테고리"
          >
            {TABS.map((tab) => {
              const isActive = active === tab;
              return (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(tab)}
                  className={[
                    "h-10 w-24 justify-center whitespace-nowrap rounded-full px-0 text-sm font-semibold transition-all duration-300 focus-visible:outline focus-visible:outline-2",
                    isActive
                      ? "bg-[#FFB800] text-[#111111] border border-transparent shadow hover:brightness-95"
                      : "text-white border border-white/15 bg-white/5 hover:bg-[#FFB800] hover:text-[#111111]",
                  ].join(" ")}
                >
                  {tab}
                </button>
              );
            })}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="text-sm font-semibold rounded-full border border-white/15 bg-white/5 px-3.5 py-2 hover:bg-[#FFD247] hover:text-[#111111] transition"
            >
              {showAll ? "접기" : "전체보기"}
            </button>
          </div>
        </div>
      </div>

      {/* ★ 카드 영역만 살짝 더 넓힘: max-w-[92rem] */}
      <div className="relative mx-auto max-w-[92rem] px-6 lg:px-8">
        {showAll ? (
          // ===== 전체보기: 세로 그리드 =====
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {filtered.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        ) : (
          // ===== 컴팩트 캐러셀 =====
          <div className="relative">
            {/* 네비 버튼: 카드 밖쪽으로 배치(겹침 방지) */}
            <button
              onClick={() => scrollByPage(-1)}
              className="hidden lg:flex items-center justify-center absolute -left-10 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2.5 backdrop-blur hover:bg-black/60 transition"
              aria-label="이전"
            >
              <ChevronLeft className="size-6 text-white" />
            </button>
            <button
              onClick={() => scrollByPage(1)}
              className="hidden lg:flex items-center justify-center absolute -right-10 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-black/50 p-2.5 backdrop-blur hover:bg-black/60 transition"
              aria-label="다음"
            >
              <ChevronRight className="size-6 text-white" />
            </button>

            {/* 스크롤 컨테이너 */}
            <div
              ref={scrollerRef}
              className="snap-x snap-mandatory overflow-x-auto overflow-y-visible mt-2 pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
              style={{ scrollBehavior: "smooth" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar { display: none; }
              `}</style>

              <div className="flex items-stretch gap-4">
                {pages.map((page, idx) => (
                  <div key={idx} className="snap-start shrink-0 w-full">
                    {/* 넓어진 폭에 맞춰 열도 자연스럽게 증가 */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-3">
                      {page.map((item) => (
                        <Card key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
