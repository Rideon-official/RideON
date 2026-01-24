// src/app/brand/components/IdentitySection.tsx
"use client";

import { motion } from "framer-motion";
import { FadeUp } from "@/components/ui/MotionWrapper";
import { ShieldAlert, Zap, Globe } from "lucide-react";

export default function IdentitySection() {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* 왼쪽: 시장의 고통 (Problem) */}
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

          {/* 오른쪽: 라이드온의 해답 (Meaning) */}
          <div className="grid gap-6">
            <FadeUp delay={0.2}>
              <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-[#FFB800]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] font-black text-xl">R</div>
                  <h3 className="text-xl font-bold italic">RAPID & REAL-TIME</h3>
                </div>
                <p className="text-white/60 font-light italic">"모든 정산과 대응은 실시간으로, 라이드온의 속도는 멈추지 않습니다."</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.3}>
              <div className="p-8 rounded-[32px] bg-white/[0.03] border border-white/10 backdrop-blur-sm group hover:border-[#FFB800]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFB800]/10 flex items-center justify-center text-[#FFB800] font-black text-xl">ON</div>
                  <h3 className="text-xl font-bold italic">ALWAYS ON INFRA</h3>
                </div>
                <p className="text-white/60 font-light italic">"모두가 잠든 시간에도 라이드온의 인프라는 항상 켜져(ON) 있습니다."</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}