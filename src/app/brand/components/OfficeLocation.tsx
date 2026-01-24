// src/app/brand/components/OfficeLocation.tsx
"use client";

import { FadeUp } from "@/components/ui/MotionWrapper";
import { MapPin, Phone, Mail } from "lucide-react";

export default function OfficeLocation() {
  return (
    <section className="relative py-32 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <FadeUp>
            <div className="space-y-10">
              <header>
                <p className="text-[#FFB800] text-xs font-bold tracking-[0.2em] mb-4">OUR BASE</p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tighter">
                  전국을 잇는<br />네트워크의 중심
                </h2>
              </header>

              <div className="space-y-6">
                <div className="flex gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <MapPin className="text-[#FFB800] w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">본사 위치</h4>
                    <p className="text-white/50 text-sm">서울특별시 강남구 테헤란로 (상세 주소 필요)</p>
                  </div>
                </div>
                <div className="flex gap-4 p-6 rounded-3xl bg-white/[0.02] border border-white/5">
                  <Phone className="text-[#FFB800] w-6 h-6 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">대표 번호</h4>
                    <p className="text-white/50 text-sm">15xx-xxxx</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* 지도 또는 비주얼 요소 공간 */}
          <FadeUp delay={0.2}>
            <div className="aspect-square lg:aspect-video rounded-[40px] bg-white/[0.03] border border-white/10 overflow-hidden relative group">
              {/* 여기에 실제 지도 API나 위성 지도를 넣으면 멋집니다. 임시로 배경 처리 */}
              <div className="absolute inset-0 bg-[url('/main-map.png')] bg-cover bg-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent" />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}