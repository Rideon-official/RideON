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
    <section className="relative py-24 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        
        {/* 상단 섹션: 수직 중앙 정렬로 여백 불균형 해소 */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20 mb-32">
          
          {/* 왼쪽: 메인 타이틀 및 브랜드 슬로건 */}
          <div className="w-full lg:flex-1 space-y-8">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] text-[10px] font-bold tracking-[0.2em] uppercase">
                BRAND IDENTITY
              </div>
            </FadeUp>
            
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-[44px] font-black tracking-tighter leading-[1.2] text-white break-keep">
                홀로 견뎌온 운영의 무게가<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/40 font-light">
                  투명한 성공의 궤도가 되도록.
                </span>
              </h2>

              <FadeUp delay={0.1}>
                <p className="text-white/60 text-lg lg:text-[19px] font-light leading-relaxed break-keep max-w-xl">
                  끝없는 <span className="text-white font-medium">정산의 늪</span>과 매달 부담되는 <span className="text-white font-medium">세무 신고</span>,<br className="hidden lg:block" />
                  반복되는 <span className="text-white font-medium">구인난</span>과 예측 불가능한 사고들까지.<br />
                  안개 속 복잡한 현장을 라이드온의 <span className="text-white font-medium">데이터 인프라</span>로<br className="hidden lg:block" />
                  정렬하여 가장 명확한 시스템 위에 올립니다.
                </p>
              </FadeUp>
            </div>

            {/* 왼쪽 하단에 빈 공간을 채워줄 팩트 체크 지표 (여백 해소용) */}
            <FadeUp delay={0.2} className="flex gap-8 pt-4 border-t border-white/5 max-w-md">
               <div>
                  <div className="text-[#FFB800] text-xl font-bold">100%</div>
                  <div className="text-white/40 text-xs mt-1 font-light uppercase tracking-wider">Transparency</div>
               </div>
               <div>
                  <div className="text-[#FFB800] text-xl font-bold">Real-time</div>
                  <div className="text-white/40 text-xs mt-1 font-light uppercase tracking-wider">Settlement</div>
               </div>
               <div>
                  <div className="text-[#FFB800] text-xl font-bold">One-stop</div>
                  <div className="text-white/40 text-xs mt-1 font-light uppercase tracking-wider">Solution</div>
               </div>
            </FadeUp>
          </div>

          {/* 오른쪽: 컴팩트해진 솔루션 카드 */}
          <FadeUp delay={0.3} className="w-full lg:w-[440px]">
            <motion.div 
              whileHover={{ y: -5 }}
              className="relative p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden group"
            >
              {/* 배경 ON 텍스트 위치 및 크기 조정 */}
              <div className="absolute -right-4 -bottom-8 text-[120px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[#FFB800]/[0.03] transition-colors">
                ON
              </div>
              
              <h3 className="text-[#FFB800] text-lg font-bold mb-8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
                지사장님 원스톱 솔루션
              </h3>

              <ul className="space-y-4 relative z-10">
                {[
                  "자동화 시스템 및 자체 정산팀 운영",
                  "전문 세무 신고 및 비용 최적화 지원",
                  "구인공고 지원 및 기사 매칭 시스템",
                  "렌트/리스 및 맞춤형 금융 프로그램",
                  "배달 대행 전문 로펌 자문 서비스"
                ].map((text, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (idx * 0.1) }}
                    className="flex items-center gap-3 text-white/90 text-[15px] font-light group/item hover:text-white transition-colors"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#FFB800]/50 group-hover/item:bg-[#FFB800] transition-colors" />
                    {text}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-10 pt-6 border-t border-white/5 relative z-10">
                <p className="text-[15px] lg:text-[16px] text-white/50 leading-snug font-light break-keep">
                  "운영은 라이드온에게 맡기고,<br />
                  지사장님은 <span className="text-white font-bold underline underline-offset-4 decoration-[#FFB800]">성장에만 집중</span>하세요."
                </p>
              </div>
            </motion.div>
          </FadeUp>
        </div>

        {/* 하단: R.I.D.E.O.N. 가치 그리드 */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {rideonValues.map((item, i) => (
            <FadeUp key={item.k} delay={0.1 * i}>
              <div className="group relative h-56 p-7 rounded-[28px] bg-white/[0.02] border border-white/5 hover:border-[#FFB800]/30 transition-all duration-500 flex flex-col justify-end overflow-hidden hover:bg-white/[0.04]">
                <div className="absolute top-4 right-6 text-6xl font-black text-white/[0.02] group-hover:text-[#FFB800]/10 group-hover:scale-110 transition-all duration-500">
                  {item.k}
                </div>
                <div className="relative z-10">
                  <div className="text-3xl font-black text-[#FFB800] mb-3">
                    {item.k}
                  </div>
                  <div className="text-[14px] font-bold text-white mb-1">{item.title}</div>
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