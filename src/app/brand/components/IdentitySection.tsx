"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/MotionWrapper";

const rideonValues = [
  { k: "R", title: "Rapid", desc: "즉시 대응하는 실행력" },
  { k: "I", title: "Innovation", desc: "데이터 기반 혁신" },
  { k: "D", title: "Drive", desc: "끝까지 밀어붙이는 추진력" },
  { k: "E", title: "Endurance", desc: "꾸준함으로 만드는 안정성" },
  { k: "O", title: "Onward", desc: "한 단계 더 전진" },
  { k: "N", title: "Nexus", desc: "모두를 연결하는 허브" },
];

export default function IdentitySection() {
  return (
    <section className="relative py-32 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* 상단 섹션: 5:5 배분 및 여백 최적화 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 mb-32 items-stretch">
          
          {/* 왼쪽: 메인 타이틀 및 최종 슬로건 (왼쪽 정렬) */}
          <div className="flex flex-col justify-between">
            <div className="space-y-10">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] text-[10px] font-bold tracking-[0.2em] uppercase">
                  BRAND IDENTITY
                </div>
              </FadeUp>
              
              <div className="space-y-8">
                <h2 className="text-3xl lg:text-[46px] font-black tracking-tighter leading-[1.2] text-white break-keep">
                  홀로 견뎌온 운영의 무게가<br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 font-light italic">
                    투명한 성공의 궤도가 되도록.
                  </span>
                </h2>

                <FadeUp delay={0.1}>
                  <p className="text-white/60 text-lg lg:text-[19px] font-light leading-[1.8] break-keep max-w-xl">
                    끝없는 <span className="text-white font-medium">정산의 늪</span>과 매달 부담되는 <span className="text-white font-medium">세무 신고</span>,<br className="hidden lg:block" />
                    매일 반복되는 <span className="text-white font-medium">구인난</span>과 예측 불가능한 사고들까지.<br />
                    안개 속에 갇혀 있던 지사장님의 복잡한 현장을 라이드온의<br className="hidden lg:block" />
                    <span className="text-white font-medium">데이터 인프라</span>로 정렬하여 가장 명확한 시스템 위에 올립니다.
                  </p>
                </FadeUp>
              </div>
            </div>

            {/* 최종 슬로건: 왼쪽 하단 배치로 무게중심 완성 */}
            <FadeUp delay={0.3}>
              <div className="mt-16 pt-10 border-t border-white/10 max-w-md">
                <p className="text-[20px] lg:text-[22px] text-white/40 leading-relaxed font-light break-keep">
                  "운영은 라이드온에게 맡기고,<br />
                  지사장님은 <span className="text-white font-bold underline underline-offset-8 decoration-[#FFB800] decoration-2">성장에만 집중</span>하세요."
                </p>
              </div>
            </FadeUp>
          </div>

          {/* 오른쪽: 솔루션 상세 리스트 (간격 최적화) */}
          <FadeUp delay={0.2} className="w-full">
            <div className="relative h-full flex flex-col justify-start pt-12 lg:pt-20">
              <div className="absolute inset-0 bg-white/[0.01] rounded-[40px] blur-3xl -z-10" />
              
              <h3 className="text-[#FFB800] text-xl lg:text-2xl font-black mb-10 flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFB800] shadow-[0_0_10px_#FFB800]" />
                지사장님을 위한 원스톱 솔루션
              </h3>

              {/* gap을 10에서 6으로 줄여 밀도를 높임 */}
              <div className="grid gap-6 relative z-10">
                {[
                  { main: "자동화 시스템 및 자체 정산팀 운영", sub: "매일 반복되는 정산의 고통에서 해방되고 투명한 자금 흐름을 확보하세요." },
                  { main: "전문 세무 신고 및 비용 최적화 컨설팅", sub: "복잡한 세무 행정과 지출 구조를 라이드온의 전문가가 직접 관리해 드립니다." },
                  { main: "구인공고 지원 및 기사 매칭 시스템", sub: "끊이지 않는 인력 고민, 라이드온의 네트워크를 통해 빠르게 해결합니다." },
                  { main: "렌트/리스 및 맞춤형 금융 프로그램", sub: "지사장님과 기사님 모두를 위한 최적의 금융 상품과 자산을 연결합니다." },
                  { main: "배달 대행 전문 로펌 자문 서비스 지원", sub: "노무 분쟁부터 사고 처리까지, 든든한 법률 파트너가 지사장님 뒤에 있습니다." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="group"
                  >
                    <div className="text-white text-[17px] font-bold mb-1 group-hover:text-[#FFB800] transition-colors">{item.main}</div>
                    <div className="text-white/40 text-[14px] font-light leading-relaxed break-keep max-w-lg">{item.sub}</div>
                    {/* 선의 위쪽 마진을 줄여 항목 간 간격을 좁게 만듦 */}
                    <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />
                  </motion.div>
                ))}
              </div>

              <div className="absolute -right-8 -bottom-10 text-[160px] font-black text-white/[0.01] select-none pointer-events-none">
                ON
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 하단 가치 그리드 생략 (기존 코드와 동일) */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {rideonValues.map((item, i) => (
            <FadeUp key={item.k} delay={0.1 * i}>
              <div className="group relative h-60 p-7 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#FFB800]/30 transition-all duration-500 flex flex-col justify-end overflow-hidden hover:bg-white/[0.04]">
                <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.02] group-hover:text-[#FFB800]/10 transition-all duration-500">
                  {item.k}
                </div>
                <div className="relative z-10">
                  <div className="text-3xl font-black text-[#FFB800] mb-3 transition-transform group-hover:translate-x-1">
                    {item.k}
                  </div>
                  <div className="text-[15px] font-bold text-white mb-1.5">{item.title}</div>
                  <div className="text-[11px] text-white/40 font-light leading-snug group-hover:text-white/70 transition-colors break-keep">
                    {item.desc}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FFB800]/50 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}