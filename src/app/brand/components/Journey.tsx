// src/app/brand/components/Journey.tsx
"use client";
import { motion } from "framer-motion";
import { useRef, useState, useCallback } from "react";

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

  // 좌우 버튼 이동
  const scrollByAmount = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = Math.round(el.clientWidth * 0.8) * (dir === "left" ? -1 : 1);
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // 드래그 스크롤
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const startLeft = useRef(0);

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.setPointerCapture(e.pointerId);
    setDragging(true);
    startX.current = e.clientX;
    startLeft.current = el.scrollLeft;
  }, []);

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging) return;
      const el = scrollerRef.current;
      if (!el) return;
      const dx = e.clientX - startX.current;
      el.scrollLeft = startLeft.current - dx;
    },
    [dragging]
  );

  const onPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {}
    setDragging(false);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 bg-[#111111] overflow-visible">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          RIDE ON Journey
        </h2>

        <div className="relative">
          {/* 상단 라인 */}
          <div className="pointer-events-none absolute left-0 right-0 top-7 h-[2px] bg-white/10" />

          {/* 스크롤 영역 */}
          <div
            ref={scrollerRef}
            className={`no-scrollbar flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x px-1 sm:px-2 ${
              dragging ? "cursor-grabbing select-none" : "cursor-grab"
            }`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {stages.map((s) => (
              <motion.article
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45 }}
                className="
                  snap-center shrink-0
                  w-[74%] sm:w-[54%] lg:w-[33.333%]
                  min-w-[240px] sm:min-w-[360px] lg:min-w-[420px]
                  pt-10 sm:pt-12 relative
                "
              >
                {/* 노드 점 (카드 크기 조정에 맞춰 위치도 함께 조정) */}
                <div className="absolute left-0 right-0 top-5 sm:top-6 flex justify-center">
                  <div className="h-3 w-3 rounded-full bg-[#FFD966] shadow-[0_0_18px_rgba(255,184,0,0.6)]" />
                </div>

                {/* 카드 */}
                <div
                  className="
                    rounded-xl border border-white/10 bg-black/30
                    p-4 sm:p-5 lg:p-7
                    min-h-[120px] sm:min-h-[140px] lg:min-h-[160px]
                    backdrop-blur-sm
                    hover:shadow-[0_0_24px_rgba(255,184,0,0.15)]
                    transition
                  "
                >
                  <div className="text-xs sm:text-sm lg:text-base font-extrabold text-[#FFD966]/90 tracking-wide">
                    {s.title}
                  </div>

                  {/* 한국어 줄바꿈 품질 개선 */}
                  <div
                    className="
                      mt-2 text-white/90
                      text-pretty break-keep break-words whitespace-pre-line
                      leading-[1.55]
                      text-[14px] sm:text-[16px] lg:text-[18px]
                    "
                  >
                    {s.sub}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* 좌우 화살표 */}
          <button
            aria-label="이전 단계"
            onClick={() => scrollByAmount("left")}
            className="absolute top-1/2 -left-3 sm:-left-5 md:-left-7 lg:-left-10 -translate-y-1/2 z-30
                       h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12
                       flex items-center justify-center rounded-full
                       bg-[#2f2f2f]/80 text-white border border-white/10
                       hover:bg-[#FFD966] hover:text-black shadow-[0_0_8px_rgba(0,0,0,0.4)] transition"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </button>

          <button
            aria-label="다음 단계"
            onClick={() => scrollByAmount("right")}
            className="absolute top-1/2 -right-3 sm:-right-5 md:-right-7 lg:-right-10 -translate-y-1/2 z-30
                       h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12
                       flex items-center justify-center rounded-full
                       bg-[#2f2f2f]/80 text-white border border-white/10
                       hover:bg-[#FFD966] hover:text-black shadow-[0_0_8px_rgba(0,0,0,0.4)] transition"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px]">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <p className="mt-10 text-center text-white/80 text-[15px] sm:text-[16px]">
          “신속한 혁신과 지속적인 추진력으로 전진하며, 모두를 연결하는 중심점 —{" "}
          <span className="font-semibold text-[#FFD966]">RIDE ON</span>”
        </p>
      </div>
    </section>
  );
}
