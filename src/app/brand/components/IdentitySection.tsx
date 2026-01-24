// src/app/brand/components/IdentitySection.tsx
"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { ShieldAlert } from "lucide-react";

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
    <section className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* 상단: Market Problem (기존 유지) */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          <FadeUp>
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold">
                <ShieldAlert className="w-3 h-3" /> MARKET PROBLEM
              </div>
              <h2 className="text-3xl lg:text-5xl font-black tracking-tighter leading-tight">
                불투명한 데이터와<br />
                멈춰있는 시스템,<br />
                현장은 지쳐있었습니다.
              </h2>
              <p className="text-white/50 text-lg font-light leading-relaxed">
                정확하지 않은 정산 내역, 관리가 안 되는 바이크, 그리고 단절된 소통까지. 
                기존 물류 현장의 고질적인 문제들은 파트너와 라이더의 성장을 가로막는 거대한 벽이었습니다.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="p-10 rounded-[40px] bg-white/[0.03] border border-white/10 backdrop-blur-md">
              <h3 className="text-[#FFB800] text-sm font-bold tracking-widest mb-6 uppercase text-center">Brand Identity</h3>
              <p className="text-2xl lg:text-3xl font-bold text-center leading-snug">
                "모두가 멈출 때도 <br />
                <span className="text-[#FFB800]">라이드온의 인프라는 <br />항상 ON 상태입니다.</span>"
              </p>
            </div>
          </FadeUp>
        </div>

        {/* 하단: R.I.D.E.O.N. 6대 가치 (추가) */}
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
          {rideonValues.map((item, i) => (
            <FadeUp key={item.k} delay={0.1 * i}>
              <div className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-[#FFB800]/30 hover:bg-[#FFB800]/5 transition-all text-center h-full flex flex-col justify-center">
                <div className="text-3xl font-black text-[#FFB800] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  {item.k}
                </div>
                <div className="text-sm font-bold text-white mb-1">{item.title}</div>
                <div className="text-[11px] text-white/40 font-light break-keep">
                  {item.desc}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}