// src/app/brand/components/IdentitySection.tsx
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
        
        {/* 상단: 구조를 가로로 더 길게 활용하여 한 줄 배치 유도 */}
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-32">
          
          {/* 왼쪽: 제목 섹션 - 폰트 사이즈 최적화 및 줄바꿈 제거 */}
          <FadeUp className="flex-1">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] text-[10px] font-bold tracking-[0.2em] uppercase">
                BRAND IDENTITY
              </div>
              
              <div className="space-y-6">
                {/* 텍스트를 한 줄로 쭉 뻗게 수정 */}
                <h2 className="text-3xl lg:text-[40px] font-black tracking-tighter leading-tight whitespace-nowrap">
                  비정상을 끝내고, <span className="text-white/40 font-light">가장 투명한 궤도를 만듭니다.</span>
                </h2>

                <p className="text-white/60 text-lg lg:text-[18px] font-light leading-relaxed max-w-3xl break-keep">
                  누락과 방치의 시대를 지나, 라이드온의 인프라는 지사장님의 운영을 
                  <span className="text-white font-medium italic border-b border-[#FFB800]/50 pb-0.5 ml-2">가장 든든한 비즈니스</span>로 바꿉니다.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* 오른쪽: 카드 섹션 - 가로형 카드로 변경하여 문구를 한 줄로 배치 */}
          <FadeUp delay={0.2} className="w-full lg:w-auto">
            <div className="relative p-8 lg:p-10 px-12 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden group min-w-[400px]">
              <div className="absolute -right-6 -bottom-6 text-[120px] font-black text-white/[0.015] select-none pointer-events-none group-hover:text-[#FFB800]/5 transition-colors duration-700">
                ON
              </div>
              
              <div className="relative z-10">
                <p className="text-[#FFB800] text-[10px] font-bold tracking-[0.2em] mb-4 uppercase opacity-80">Always ON Infrastructure</p>
                <h3 className="text-2xl lg:text-[28px] font-black leading-tight tracking-tighter whitespace-nowrap">
                  모두가 멈출 때도, <span className="text-[#FFB800]">항상 ON 상태입니다.</span>
                </h3>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 하단: R.I.D.E.O.N. 가치는 그대로 유지 (디자인 만족도가 높으므로) */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {rideonValues.map((item, i) => (
            <FadeUp key={item.k} delay={0.1 * i}>
              <div className="group relative h-60 p-7 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#FFB800]/30 transition-all duration-500 flex flex-col justify-end overflow-hidden">
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