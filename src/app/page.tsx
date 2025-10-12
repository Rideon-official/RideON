// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import ConvergeToText from "../components/ConvergeToText";
import HeroParticles from "../components/HeroParticles";

export default function Home() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#1A1A1A] pt-20 pb-16 lg:pt-24 lg:pb-24 noise"
      >
        {/* 작은 지도 오버레이 (기울임 + 투명) */}
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/map-core.png"
            alt=""
            width={900}
            height={1200}
            className="
              absolute
              left-[12%] top-[-33%]
              w-[340px] md:w-[420px] lg:w-[500px]
              -rotate-[-5deg]
              opacity-60
              mix-blend-screen
              select-none
              scale-x-[1.3]
            "
            priority
          />
        </div>

        <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="relative z-[1]">
            <h1 className="font-black tracking-tight text-[clamp(28px,5.6vw,52px)] leading-[1.05]">
              전국을 잇는 배달 인프라,{" "}
              <span id="rideon-text" className="text-[#FFB800]">RIDE ON</span>
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

          {/* Right: 회사 로고 */}
          <div className="relative flex justify-center lg:justify-end">
            <Image
              src="/rideon-logo.png"
              alt="RIDE ON Logo"
              width={360}
              height={360}
              className="w-[180px] md:w-[220px] lg:w-[280px] h-auto opacity-95"
              priority
            />
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
                <li>· 채용/홍보 대행(구인공고·블로그)</li>
                <li>· 주간 운영 리포트</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <Link
                  href="/contact?type=branch"
                  className="px-3 py-2 text-sm rounded-lg bg-black hover:bg-neutral-800"
                >
                  지사 등록
                </Link>
                <Link
                  href="/contact?type=partner"
                  className="px-3 py-2 text-sm rounded-lg border border-neutral-600 hover:bg-neutral-900"
                >
                  제휴 문의
                </Link>
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
                렌트·리스·튜닝·정비·사고처리까지 원스톱.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-gray-400">
                <li>· 렌트/리스 저가</li>
                <li>· 소모품/사고/정비 전담</li>
                <li>· 센터 직영(강동)</li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Link
                  href="/bike"
                  className="px-3 py-2 text-sm rounded-lg bg-black hover:bg-neutral-800"
                >
                  자세히 보기
                </Link>
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
                <Link
                  href="/settlement"
                  className="px-3 py-2 text-sm rounded-lg border border-neutral-600 hover:bg-neutral-900"
                >
                  정산 서비스 보기
                </Link>
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
                <li>· 라이더 용품 및 튜닝제품 </li>
              </ul>
              <div className="mt-4 flex gap-2">
                <Link
                  href="/store"
                  className="px-3 py-2 text-sm rounded-lg bg-black hover:bg-neutral-800"
                >
                  스토어 둘러보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
