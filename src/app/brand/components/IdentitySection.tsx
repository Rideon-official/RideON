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
        
        {/* 상단 섹션: 가로 배치 및 텍스트 정리 */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-32">
          
          {/* 왼쪽: 메인 타이틀 */}
          <div className="w-full lg:w-1/2 space-y-10">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] text-[10px] font-bold tracking-[0.2em] uppercase">
                BRAND IDENTITY
              </div>
            </FadeUp>
            
            <div className="space-y-8">
              <h2 className="text-3xl lg:text-[46px] font-black tracking-tighter leading-[1.2] text-white break-keep">
                홀로 견뎌온 운영의 무게를 덜고,<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 font-light">
                  가장 투명한 궤도를 만듭니다.
                </span>
              </h2>

              <FadeUp delay={0.1}>
                <p className="text-white/60 text-lg lg:text-[19px] font-light leading-[1.7] break-keep max-w-2xl">
                  끝없는 <span className="text-white font-medium">정산의 늪</span>과 매달 부담되는 <span className="text-white font-medium">세무 신고</span>,<br className="hidden lg:block" />
                  매일 반복되는 <span className="text-white font-medium">구인난</span>과 예측 불가능한 사고들까지.<br />
                  안개 속에 갇혀 있던 지사장님의 복잡한 현장을<br className="hidden lg:block" />
                  라이드온의 <span className="text-white font-medium">데이터</span>로 정렬하여 <span className="text-[#FFB800] font-bold">가장 명확한 성공의 궤도</span>에 올립니다.
                </p>
              </FadeUp>
            </div>
          </div>

          {/* 오른쪽: 해결 솔루션 카드 */}
          <FadeUp delay={0.2} className="w-full lg:w-[480px]">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-8 lg:p-10 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden group"
            >
              {/* 내부 장식: 우측 하단으로 이동 */}
              <div className="absolute -right-6 -bottom-10 text-[160px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[#FFB800]/[0.03] transition-colors duration-500">
                ON
              </div>
              
              <h3 className="text-[#FFB800] text-sm font-bold mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
                지사장님을 위한 원스톱 솔루션
              </h3>

              <ul className="space-y-5 relative z-10">
                {[
                  { main: "자동화 시스템 및 자체 정산팀 운영", sub: "매일 반복되는 정산의 고통에서 해방" },
                  { main: "전문 세무 대리 신고 및 비용 최적화 컨설팅", sub: "복잡한 세무와 지출 구조를 스마트하게 관리" },
                  { main: "구인공고 지원 및 기사 매칭 자동화 시스템", sub: "인력 수급 프로세스 간소화로 구인난 해결" },
                  { main: "렌트/리스 및 대여·금융 맞춤형 프로그램", sub: "지사장님과 기사를 위한 최적의 금융 솔루션" },
                  { main: "실시간 관제 및 현장 리스크 즉시 대응 지원", sub: "사고 및 운영 이슈 발생 시 즉각적인 서포트" }
                ].map((item, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + (idx * 0.1) }}
                    className="flex items-start gap-4 group/item"
                  >
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#FFB800]/10 flex items-center justify-center group-hover/item:bg-[#FFB800]/20 transition-colors">
                      <svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14 6L7.125 12L4 9.27273" stroke="#FFB800" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-white/90 text-[15px] font-medium mb-0.5">{item.main}</div>
                      <div className="text-white/30 text-[12px] font-light">{item.sub}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-white/5 relative z-10">
                <p className="text-[16px] lg:text-[17px] text-white/50 leading-relaxed font-light">
                  "운영은 라이드온에게 맡기고,<br />
                  지사장님은 <span className="text-white font-bold underline underline-offset-4 decoration-[#FFB800]/50">성장에만 집중</span>하세요."
                </p>
              </div>
            </motion.div>
          </FadeUp>
        </div>

        {/* 하단: R.I.D.E.O.N. 가치 그리드 */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {rideonValues.map((item, i) => (
            <FadeUp key={item.k} delay={0.1 * i}>
              <div className="group relative h-60 p-7 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#FFB800]/30 transition-all duration-500 flex flex-col justify-end overflow-hidden hover:bg-white/[0.04]">
                <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.02] group-hover:text-[#FFB800]/10 group-hover:scale-110 transition-all duration-500">
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