// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import ConvergeToText from "../components/ConvergeToText";
import HeroParticles from "../components/HeroParticles";
import ContactSection from "../components/ContactSection";
import CoreServices from "@/components/CoreServices"; // ✅ 추가
import HeroServices from "@/components/HeroServices";

export default function Home() {
  return (
    <main>
      {/* ===== Hero ===== */}
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-[#111111] to-[#1A1A1A] pt-20 pb-16 lg:pt-24 lg:pb-24 noise"
      >
<div className="pointer-events-none absolute inset-0">
  <Image
    src="/main-map.png"
    alt=""
    width={900}
    height={1200}
    className="
      absolute
      left-[6%] md:left-[10%] lg:left-[12%]   /* ✅ 데스크탑은 살짝 오른쪽으로 */
      top-[15%] md:top-[5%] lg:top-[-5%]      /* ✅ 반응형으로 자연스럽게 이동 */
      w-[300px] sm:w-[360px] md:w-[420px] lg:w-[480px]
      -rotate-[4deg]                          /* ✅ 살짝 기울이기 */
      opacity-55                              /* ✅ 은은하게 (밝지 않게) */
      mix-blend-screen                        /* ✅ 글자 뒤에서 부드럽게 빛남 */
      select-none
      scale-x-[1.15]
      z-[1]                                   /* ✅ 텍스트보다 살짝 뒤 */
    "
    priority
  />
</div>

        <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-20 grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="relative z-[1]">
            <h1 className="font-black tracking-tight text-[clamp(28px,5.6vw,52px)] leading-[1.05]">
              전국을 잇는 배달 인프라,{" "}
              <span id="rideon-text" className="text-[#FFB800]">
                RIDE ON
              </span>
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
                href="/apply/branch-merge"
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

      {/* ===== Core Services (4카드) ===== */}
      <CoreServices /> {/* ✅ 새 섹션 */}

      {/* ===== Contact Section ===== */}
      <ContactSection /> {/* ✅ 하단 문의 섹션 */}
    </main>
  );
}
