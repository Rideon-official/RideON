// src/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#1A1A1A] pt-20 pb-16 lg:pt-24 lg:pb-24 noise"
      >
        <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="relative z-[1]">
            {/* (선택) 좌상단 로고 자리
            <div className="absolute -top-10 left-0 text-xs text-gray-400">RIDE ON</div> */}

            <h1 className="font-black tracking-tight text-[clamp(28px,5.6vw,52px)] leading-[1.05]">
              전국을 잇는 배달 인프라, <span className="text-[#FFB800]">RIDE ON</span>
            </h1>

            <p className="mt-4 text-gray-300 text-base sm:text-lg">
              쿠팡·배민 B2B 운영 네트워크 1위 · 전국 25개 지부
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=rider"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold hover:bg-neutral-800"
              >
                기사 가입 문의
              </Link>
              <Link
                href="/contact?type=branch"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 font-semibold hover:bg-neutral-100 hover:text-black"
              >
                지사장·합병 제안
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-[#FFB800]/40 px-5 py-3 font-medium hover:bg-[#FFB800]/10"
              >
                서비스 살펴보기
              </Link>
            </div>
          </div>

          {/* Right: Korea Map (북한 제외, 심볼릭) */}
          <div className="relative h-[280px] sm:h-[360px] lg:h-[420px]">
            <svg
              viewBox="0 0 420 520"
              className="absolute inset-0 w-full h-full"
              aria-hidden="true"
            >
              {/* 지도 몸체(심볼릭 남한 윤곽) */}
              <path
                d="M220 40c-18 22-40 34-58 50-18 16-30 38-36 62-6 25-10 54-4 78 6 25 24 45 36 68 12 22 18 46 18 72 0 20-6 40-10 60-2 10 10 14 18 12 42-12 78-40 106-74 22-26 38-60 42-96 4-36-12-68-30-100-16-28-38-56-62-84-6-8-16-8-20-8z"
                fill="url(#bodyGrad)"
                opacity="0.7"
              />
              <defs>
                <linearGradient id="bodyGrad" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#2a2a2a" />
                  <stop offset="100%" stopColor="#1a1a1a" />
                </linearGradient>
              </defs>

              {/* 라인(네트워크) */}
              <g stroke="#FFB800" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8">
                <path d="M90 380 C150 340, 230 330, 300 360" className="line-shimmer" />
                <path d="M120 300 C170 280, 260 270, 320 310" className="line-shimmer" />
                <path d="M110 220 C190 210, 250 200, 310 230" className="line-shimmer" />
              </g>

              {/* 노드(거점) */}
              <g fill="#FFB800">
                <circle cx="100" cy="380" r="4" className="node-pulse" />
                <circle cx="170" cy="340" r="3.5" className="node-pulse" />
                <circle cx="230" cy="330" r="3.5" className="node-pulse" />
                <circle cx="300" cy="360" r="4" className="node-pulse" />
                <circle cx="120" cy="300" r="3.5" className="node-pulse" />
                <circle cx="260" cy="270" r="3.5" className="node-pulse" />
                <circle cx="320" cy="310" r="4" className="node-pulse" />
                <circle cx="110" cy="220" r="3.5" className="node-pulse" />
                <circle cx="250" cy="200" r="3.5" className="node-pulse" />
                <circle cx="310" cy="230" r="3.5" className="node-pulse" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* ===== Services (4카드) ===== */}
      <section id="services" className="px-6 sm:px-10 lg:px-20 py-16">
        <h2 className="text-xl font-semibold text-gray-200">핵심 서비스</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. 본사 운영지원 */}
          <div className="group rounded-2xl bg-[#1A1A1A] border border-neutral-800 hover:bg-[#222] transition-all">
            <div className="h-1 w-full bg-[#FFB800]" />
            <div className="p-5">
              <div className="text-2xl">⚙️</div>
              <h3 className="mt-3 font-bold tracking-tight">본사 운영지원</h3>
              <p className="mt-2 text-sm text-gray-400">
                지사는 현장 운영에 집중, 본사는 시스템으로 지원.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>· 정산·입금·본사 소통 대행</li>
                <li>· 채용/홍보 대행(알바채널·블로그)</li>
                <li>· 주간 운영 리포트</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link href="/contact?type=branch" className="px-3 py-2 text-sm rounded-lg bg-black hover:bg-neutral-800">지사 등록</Link>
                <Link href="/contact?type=partner" className="px-3 py-2 text-sm rounded-lg border border-neutral-600 hover:bg-neutral-900">제휴 문의</Link>
              </div>
            </div>
          </div>

          {/* 2. RIDE ON BIKE */}
          <div className="group rounded-2xl bg-[#1A1A1A] border border-neutral-800 hover:bg-[#222] transition-all">
            <div className="h-1 w-full bg-[#FFB800]" />
            <div className="p-5">
              <div className="text-2xl">🛵</div>
              <h3 className="mt-3 font-bold tracking-tight">RIDE ON BIKE</h3>
              <p className="mt-2 text-sm text-gray-400">
                렌트·리스·튜닝·정비·사고차리까지 원스톱.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>· 출고/보험/등록 원패스</li>
                <li>· 소모품/사고/정비 전담</li>
                <li>· 센터 직영(강동·남양주)</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Link href="/bike" className="px-3 py-2 text-sm rounded-lg bg-black hover:bg-neutral-800">센터 견적 문의</Link>
              </div>
            </div>
          </div>

          {/* 3. 정산 솔루션 */}
          <div className="group rounded-2xl bg-[#1A1A1A] border border-neutral-800 hover:bg-[#222] transition-all">
            <div className="h-1 w-full bg-[#FFB800]" />
            <div className="p-5">
              <div className="text-2xl">📊</div>
              <h3 className="mt-3 font-bold tracking-tight">정산 솔루션</h3>
              <p className="mt-2 text-sm text-gray-400">
                타 지사도 사용할 수 있는 정산·리포트 플랫폼.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>· 실적/수수료 자동수집</li>
                <li>· 익일/주정산 알림</li>
                <li>· CSV·API 연동</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Link href="/settlement" className="px-3 py-2 text-sm rounded-lg border border-neutral-600 hover:bg-neutral-900">정산 서비스 보기</Link>
              </div>
            </div>
          </div>

          {/* 4. 라이더 스토어 */}
          <div className="group rounded-2xl bg-[#1A1A1A] border border-neutral-800 hover:bg-[#222] transition-all">
            <div className="h-1 w-full bg-[#FFB800]" />
            <div className="p-5">
              <div className="text-2xl">🧤</div>
              <h3 className="mt-3 font-bold tracking-tight">라이더 스토어</h3>
              <p className="mt-2 text-sm text-gray-400">
                공식 의류/장비/소모품 — 합리적 가격에 바로 구매.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>· 티셔츠·바람막이·오더판·조끼</li>
                <li>· 헬멧·장갑·소모품</li>
                <li>· (선택) 오토바이 악세서리</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Link href="/store" className="px-3 py-2 text-sm rounded-lg bg-black hover:bg-neutral-800">스토어 둘러보기</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Proof + Contact는 다음 단계에서 붙임(지금은 메인 뼈대 우선) ===== */}
    </main>
  );
}
