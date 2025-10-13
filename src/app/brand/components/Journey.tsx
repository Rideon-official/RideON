"use client";
import { motion } from "framer-motion";
import { useRef } from "react";

const stages = [
  {
    title: "Stage 1",
    sub: "쿠팡이츠플렉스 초기 모델 협업 · ‘이츠특공대’ 브랜드 런칭 · 시그니처 BI 제작",
  },
  {
    title: "Stage 2",
    sub: "렌트·리스 및 장비 인프라 전국 확장 · 운영 표준화",
  },
  {
    title: "Stage 3",
    sub: "DH커넥트 합병 & ‘RIDE ON’ 리브랜딩 · 네트워크 역량 강화",
  },
  {
    title: "Stage 4",
    sub: "AI 정산 자동화 플랫폼 LogitEats 런칭 · 데이터 기반 효율 혁신",
  },
  {
    title: "Stage 5",
    sub: "직영 센터 오픈 · 운영·정산·장비 통합 운영 체계 완성",
  },
  {
    title: "Stage 6",
    sub: "파트너 통합 시스템 & 데이터 고도화 · 확장성과 연결성 강화",
  },
];

export default function Journey() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.8) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="relative py-16 sm:py-24 bg-[#111111] overflow-visible">
      <div className="mx-auto max-w-6xl px-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          RIDE ON Journey
        </h2>

        {/* 타임라인 컨테이너 */}
        <div className="relative">
          {/* 상단 라인 */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 h-[2px] bg-white/10" />

          {/* 스크롤 영역 */}
          <div
            ref={scrollerRef}
            className="no-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 touch-pan-x"
          >
            {stages.map((s, i) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
                className="
                  snap-center shrink-0
                  w-[85%] sm:w-[55%] lg:w-[33.333%]
                  pt-10 relative
                "
              >
                {/* 점 */}
                <div className="absolute left-0 right-0 top-5 flex justify-center">
                  <div className="h-3 w-3 rounded-full bg-[#FFD966] shadow-[0_0_18px_rgba(255,184,0,0.6)]" />
                </div>

                {/* 카드 */}
                <div className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm hover:shadow-[0_0_24px_rgba(255,184,0,0.15)] transition">
                  <div className="text-xs text-[#FFD966]/90 font-semibold tracking-wide">
                    {s.title}
                  </div>
                  <div className="mt-2 text-white/85 leading-relaxed">
                    {s.sub}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* 화살표 — 완전 밖으로 빼기 */}
          <div className="absolute top-1/2 left-[-60px] -translate-y-1/2 z-30">
            <button
              onClick={() => scrollByAmount("left")}
              className="h-12 w-12 rounded-full flex items-center justify-center bg-[#2f2f2f] text-white border border-white/10 hover:bg-[#FFD966] hover:text-black transition"
            >
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M15 6l-6 6 6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-1/2 right-[-60px] -translate-y-1/2 z-30">
            <button
              onClick={() => scrollByAmount("right")}
              className="h-12 w-12 rounded-full flex items-center justify-center bg-[#2f2f2f] text-white border border-white/10 hover:bg-[#FFD966] hover:text-black transition"
            >
              <svg viewBox="0 0 24 24" width="22" height="22">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        <p className="mt-10 text-center text-white/80">
          “신속한 혁신과 지속적인 추진력으로 전진하며, 모두를 연결하는 중심점 —{" "}
          <span className="font-semibold text-[#FFD966]">RIDE ON</span>”
        </p>
      </div>
    </section>
  );
}
