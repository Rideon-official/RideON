// src/components/ContactSection.tsx
"use client";

import { useMemo, useRef, useState } from "react";
import { Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "정비업체" | "사고·보험" | "협력병원" | "협력사";
type WithAll = Category | "전체";

type PartnerChannel = {
  id: string;
  logo: string;
  name: string;
  subtitle: string;
  desc: string;
  tel?: string;
  email?: string;
  category: Category;
};

const CHANNELS: PartnerChannel[] = [
  // 정비업체
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
  {
    id: "yamaha-gangdong",
    logo: "https://global.yamaha-motor.com/design/logo/img/logo_ymmc.png",
    name: "야마하 강동점",
    subtitle: "공식 정비 · 보증 수리",
    desc: "야마하 인증 절차로 보증 수리 및 정기점검 제공.",
    tel: "010-0000-0000",
    email: "yamaha@rideon.co.kr",
    category: "정비업체",
  },

  // 사고·보험
  {
    id: "adjuster",
    logo: "/logos/adjuster.png",
    name: "손해사정사",
    subtitle: "사고·보험 처리 전담",
    desc: "접수부터 정산까지 원스톱 지원.",
    tel: "010-0000-0001",
    email: "claim@rideon.co.kr",
    category: "사고·보험",
  },
  {
    id: "hyundai-insurance",
    logo: "/logos/hyundai-insurance.png",
    name: "현대해상",
    subtitle: "파트너 보험사",
    desc: "사고 접수 및 보상 진행 지원.",
    tel: "010-0000-0100",
    email: "hi@rideon.co.kr",
    category: "사고·보험",
  },
  {
    id: "kb-insurance",
    logo: "/logos/kb-insurance.png",
    name: "KB보험",
    subtitle: "파트너 보험사",
    desc: "라이더 맞춤 상품 연계.",
    tel: "010-0000-0200",
    email: "kbins@rideon.co.kr",
    category: "사고·보험",
  },
  {
    id: "delivery-mutual",
    logo: "/logos/delivery-mutual.png",
    name: "배달서비스공제",
    subtitle: "배달업 공제조합",
    desc: "업권 특화 공제상품 및 사고 처리 연계.",
    tel: "010-0000-0300",
    email: "mutual@rideon.co.kr",
    category: "사고·보험",
  },

  // 협력병원
  {
    id: "hospital-network",
    logo: "/logos/hospital.png",
    name: "협력병원",
    subtitle: "라이더 전문 진료",
    desc: "진단서 발급·치료 연계·사고 후 케어.",
    tel: "010-0000-0002",
    email: "hospital@rideon.co.kr",
    category: "협력병원",
  },

  // 협력사
  {
    id: "kb-seorin",
    logo: "/logos/kb.png",
    name: "KB국민은행 서린동지점",
    subtitle: "라이더 금융 파트너",
    desc: "계좌·카드·한도 전담 창구.",
    tel: "010-0000-0006",
    email: "kb@rideon.co.kr",
    category: "협력사",
  },
];

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

function Card({ item }: { item: PartnerChannel }) {
  return (
    <article
      className="
        group flex flex-col items-center
        rounded-2xl border border-white/10 bg-[#121212] p-6
        transition duration-300
        hover:-translate-y-0.5 hover:border-white/20 hover:bg-[#151515]
        w-full min-h-[340px]
      "
    >
      {/* 로고 */}
      <div className="mb-3 h-14 w-14 flex items-center justify-center overflow-hidden rounded-xl bg-[#141414] border border-white/10">
        <img
          src={item.logo}
          alt={`${item.name} logo`}
          className="max-h-11 max-w-12 object-contain grayscale opacity-80 transition duration-300 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>

      {/* 텍스트 */}
      <h3 className="text-[16px] font-bold text-white text-center">{item.name}</h3>
      <p className="mt-1 text-[12px] text-white/55 text-center">{item.subtitle}</p>
      <p className="mt-2 text-[12.5px] leading-relaxed text-white/80 text-center line-clamp-2">
        {item.desc}
      </p>

      {/* 연락 수단 */}
      <div className="mt-3 flex flex-wrap justify-center gap-2 text-[12px]">
        {item.tel && (
          <a
            href={telHref(item.tel)}
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-[#FFB800] hover:text-[#111111] transition"
          >
            <Phone className="size-4" />
            {item.tel}
          </a>
        )}
        {item.email && (
          <a
            href={`mailto:${item.email}`}
            className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 hover:bg-[#FFB800] hover:text-[#111111] transition"
          >
            <Mail className="size-4" />
            {item.email}
          </a>
        )}
      </div>
    </article>
  );
}

export default function ContactSection() {
  const [active, setActive] = useState<WithAll>("전체");

  const filtered = useMemo(() => {
    if (active === "전체") return CHANNELS;
    return CHANNELS.filter((c) => c.category === active);
  }, [active]);

  const pages = useMemo(() => chunk(filtered, 6), [filtered]);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth, behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-[#0E0E0E] py-14 lg:py-16">

      {/* 헤더 + 탭 */}
      <div className="relative mx-auto max-w-6xl px-5 lg:px-6">
        <header className="mb-6 lg:mb-7">
          <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
            CONNECT
          </p>
          <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-white">
            파트너 네트워크로 연결하세요
          </h2>
          <p className="mt-2 text-sm text-white/60">
            정비·보험·병원·금융 파트너를 한 번에 조회하고 바로 연락할 수 있습니다.
          </p>
        </header>

        {/* 탭 */}
        <div className="mb-6 flex flex-wrap gap-3" role="tablist" aria-label="연결 카테고리">
          {TABS.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                role="tab"
                aria-selected={isActive}
                className={[
                  "h-11 min-w-[6.5rem] justify-center rounded-full px-4 text-[14px] font-semibold transition-all duration-300",
                  isActive
                    ? "bg-[#FFB800] text-[#111111] border border-transparent shadow"
                    : "text-white border border-white/15 bg-white/5 hover:bg-[#FFB800] hover:text-[#111111]",
                ].join(" ")}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </div>

      {/* 카드 영역 */}
      <div className="relative mx-auto max-w-[92rem] px-6 lg:px-8">
        <div className="relative overflow-visible mt-4">
          {/* 좌우 버튼 */}
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
            className="no-scrollbar snap-x snap-mandatory overflow-x-auto overflow-y-visible mt-2 pb-2"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex items-stretch gap-4">
              {pages.map((page, idx) => (
                <div key={idx} className="snap-start shrink-0 w-full">
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

        {/* 하단 안내 */}
        <p className="mt-6 text-center text-[11px] text-white/40">
          로고 및 상표는 각 소유자의 자산입니다.
        </p>
      </div>
    </section>
  );
}
