// src/app/brand/components/About.tsx
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative bg-[#111111] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          About RIDE ON
        </h2>

        {/* 본문 + 인물영역 */}
        <div
          className="
            grid gap-10 md:gap-14
            md:grid-cols-[1.1fr_0.9fr]
            items-start
          "
        >
          {/* 왼쪽 텍스트 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="text-[15px] sm:text-[16px] leading-[1.85] text-white/90"
          >
            <p className="mb-6">
              <span className="font-semibold text-white">RIDE ON</span>은 배달
              라이더의 든든한 파트너를 지향하며, 운영·정산·장비를 아우르는{" "}
              <span className="font-semibold text-[#FFD966]">통합 인프라</span>
              를 구축해 왔습니다.
            </p>

            <p className="mb-6">
              현장 중심의 실행력과 데이터 기반 학습으로{" "}
              <span className="font-semibold text-[#FFD966]">
                안정적인 운영 체계
              </span>
              를 완성했고, 2021년부터 주요 플랫폼과의 협업을 통해 전국 네트워크를
              확장했습니다.
            </p>

            <p className="mb-6">
              표준화된 운영 매뉴얼과 정산 프로세스로{" "}
              <span className="font-semibold text-[#FFD966]">
                신뢰할 수 있는 서비스
              </span>
              를 제공합니다.
            </p>

            <p className="mb-6">
              정산 앱 <span className="font-semibold text-[#FFD966]">LogitEats</span>,
              지역 센터 운영, 바이크 렌트·리스, 파트너사 제휴까지 —{" "}
              <span className="font-semibold">라이더의 시작과 성장을 하나로 연결</span>
              합니다. 현장의 문제를 빠르게 해결하고, 데이터를 통해{" "}
              <span className="font-semibold">더 나은 효율</span>을 만들어갑니다.
            </p>

            <p>
              앞으로도{" "}
              <span className="font-semibold text-[#FFD966]">
                AI 정산과 데이터 통합 관리
              </span>
              를 고도화해, 전국 1등 배달 운영 인프라로서 더 많은 파트너와 함께
              성장하겠습니다.
            </p>
          </motion.div>

          {/* 오른쪽 인물: 원본 흰배경 이미지를 블렌드 + 페이드 처리 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="
              relative hidden md:block
              rounded-2xl ring-1 ring-white/10 overflow-hidden
              bg-[#0d0d0d] p-0
              aspect-[3/4]    /* 세로형 비율 고정 */
            "
          >
            {/* 1) 이미지 → 곱하기 블렌드: 흰 배경이 어둡게 눌리면서 사라짐 */}
            <div
              className="
                absolute inset-0
                bg-no-repeat bg-contain bg-right-bottom
                [mix-blend-mode:multiply]
              "
              style={{
                backgroundImage: "url('/aiceo.png')",
                // 살짝 톤 보정(선택)
                filter: "contrast(1.04) saturate(1.02) brightness(1.02)",
              }}
            />

            {/* 2) 라디얼 페이드: 모서리 하얀 잔상/사각형 경계 부드럽게 제거 */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                // 검정으로 서서히 페이드 → 하얀 경계가 자연스레 사라짐
                background:
                  "radial-gradient(120% 120% at 75% 85%, rgba(17,17,17,0) 55%, rgba(17,17,17,0.6) 80%, rgba(17,17,17,1) 100%)",
              }}
            />

            {/* 3) 아주 옅은 바닥 글로우(선택) */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              style={{
                background:
                  "radial-gradient(60% 60% at 70% 100%, rgba(255,217,102,0.06) 0%, rgba(0,0,0,0) 70%)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
