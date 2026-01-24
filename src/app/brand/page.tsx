// src/app/brand/page.tsx
"use client";

import React from "react";
import Hero from "./components/Hero";
import IdentitySection from "./components/IdentitySection"; // 새로 만들 것
import CoreSolutions from "./components/CoreSolutions";   // 새로 만들 것
import Journey from "./components/Journey";
import PartnershipSection from "./components/PartnershipSection"; // 지도+합병+신청 통합
import OfficeLocation from "./components/OfficeLocation";       // 새로 만들 것
import Starfield from "@/components/Starfield";

export default function BrandPage() {
  return (
    <main className="relative bg-[#0A0A0B] text-white overflow-hidden">
      {/* 전역 우주 배경: 메인 페이지와 통일감 */}
      <Starfield />

      {/* 1. Hero: 물류의 새로운 궤도를 선언 */}
      <Hero />

      {/* 2. Identity: RIDE ON의 의미와 우리가 해결하는 시장의 고통(Problem) */}
      <IdentitySection />

      {/* 3. Core Solutions: 물류를 움직이는 3대 핵심 엔진 (정산/정비/상생) */}
      <CoreSolutions />

      {/* 4. Journey: 라이드온이 걸어온 증명의 시간 */}
      <Journey />

      {/* 5. Partnership: 전국 네트워크 & 합병 프로세스 & 가맹 신청 (통합 섹션) */}
      <PartnershipSection />

      {/* 6. Office: 비전과 본사 위치 */}
      <OfficeLocation />
    </main>
  );
}