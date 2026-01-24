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
        
        {/* 상단: Brand Identity & Problem */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-32">
          <FadeUp>
            <div className="space-y-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/20 text-[#FFB800] text-[10px] font-bold tracking-[0.2em] uppercase">
                BRAND IDENTITY
              </div>
              
              {/* 제목: 줄 간격을 1.3으로 벌려 가독성 확보, 시원하게 2줄 배치 */}
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter leading-[1.3]">
                당연했던 현장의 비정상을 끝내고,<br />
                <span className="text-white/40 font-light text-3xl lg:text-4xl">가장 투명한 인프라의 궤도를 만듭니다.</span>
              </h2>

              {/* 본문: 지사장님의 고충을 든든함으로 연결하는 문구 */}
              <p className="text-white/60 text-lg lg:text-xl font-light leading-[1.7] max-w-2xl">
                누락된 정산, 방치된 기기, 홀로 감당해야 했던 관리의 한계 —<br className="hidden lg:block" />
                라이드온의 압도적인 인프라는 지사장님의 외로운 운영을<br className="hidden lg:block" />
                <span className="text-white font-medium italic underline underline-offset-4 decoration-[#FFB800]/50">가장 든든한 비즈니스</span>로 바꿉니다.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="relative p-12 lg:p-16 rounded-[48px] bg-white/[0.03] border border-white/10 backdrop-blur-md overflow-hidden group">
              {/* 장식용 배경 로고 */}
              <div className="absolute -right-10 -bottom-10 text-[180px] font-black text-white/[0.02] select-none pointer-events-none group-hover:text-[#FFB800]/5 transition-colors duration-700">
                ON
              </div>
              
              <div className="relative z-10 text-center lg:text-left">
                <p className="text-[#FFB800] text-sm font-bold tracking-[0.2em] mb-6 uppercase">Always ON Infrastructure</p>
                <h3 className="text-3xl lg:text-4xl font-black leading-tight tracking-tighter">
                  모두가 멈출 때도 <br />
                  라이드온은 <br />
                  <span className="text-[#FFB800] underline underline-offset-8 decoration-2">항상 ON 상태입니다.</span>
                </h3>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 하단: R.I.D.E.O.N. 6대 가치 (임팩트 강화 버전) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {rideonValues.map((item, i) => (
            <FadeUp key={item.k} delay={0.1 * i}>
              <div className="group relative h-64 lg:h-72 p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-[#FFB800]/40 transition-all duration-500 flex flex-col justify-end overflow-hidden">
                
                {/* 배경 알파벳 장식 */}
                <div className="absolute top-4 right-6 text-7xl font-black text-white/[0.03] group-hover:text-[#FFB800]/10 transition-all duration-500 group-hover:-translate-y-2">
                  {item.k}
                </div>

                <div className="relative z-10">
                  <div className="text-4xl font-black text-[#FFB800] mb-4 scale-90 origin-left group-hover:scale-100 transition-transform duration-500">
                    {item.k}
                  </div>
                  <div className="text-lg font-bold text-white mb-2">{item.title}</div>
                  <div className="text-xs text-white/40 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                    {item.desc}
                  </div>
                </div>

                {/* 하단 하이라이트 바 */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FFB800] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}