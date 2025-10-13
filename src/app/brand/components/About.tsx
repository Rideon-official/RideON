"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative py-16 sm:py-24 bg-[#111111]">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
          About RIDE ON
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="space-y-7 text-white/85 leading-relaxed"
        >
          <p>
            <span className="font-semibold text-white">RIDE ON</span>은 배달
            라이더의 든든한 파트너를 지향하며,
            <br />
            운영·정산·장비를 아우르는{" "}
            <span className="font-semibold text-[#FFD966]">통합 인프라</span>를
            구축해 왔습니다.
          </p>

          <p>
            현장 중심의 실행력과 데이터 기반 학습으로{" "}
            <span className="font-semibold text-[#FFD966]">
              안정적인 운영 체계
            </span>
            를 완성했고,
            <br />
            2021년부터 주요 플랫폼과의 협업을 통해 전국 네트워크를
            확장했습니다.
          </p>

          <p>
            표준화된 운영 매뉴얼과 정산 프로세스로{" "}
            <span className="font-semibold text-[#FFD966]">
              신뢰할 수 있는 서비스
            </span>
            를 제공합니다.
          </p>

          <p>
            정산 앱{" "}
            <span className="font-semibold text-[#FFD966]">LogitEats</span>,
            지역 센터 운영, 바이크 렌트·리스, 파트너사 제휴까지
            <br />—{" "}
            <span className="font-semibold text-white">
              라이더의 시작과 성장을 하나로 연결합니다.
            </span>
            <br />
            현장의 문제를 빠르게 해결하고, 데이터를 통해{" "}
            <span className="font-semibold text-[#FFD966]">
              더 나은 효율
            </span>
            을 만들어갑니다.
          </p>

          <p>
            앞으로도{" "}
            <span className="font-semibold text-[#FFD966]">
              AI 정산과 데이터 통합 관리
            </span>
            를 고도화해,
            <br />
            전국 1등 배달 운영 인프라로서 더 많은 파트너와 함께
            성장하겠습니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
