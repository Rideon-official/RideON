// src/app/brand/page.tsx 최종본
"use client";

import React from "react";
import Hero from "./components/Hero";
import IdentitySection from "./components/IdentitySection";
import CoreSolutions from "./components/CoreSolutions";
import Journey from "./components/Journey";
import PartnershipSection from "./components/PartnershipSection";
import OfficeLocation from "./components/OfficeLocation";
import Starfield from "@/components/Starfield";

export default function BrandPage() {
  return (
    <main className="relative bg-[#0A0A0B] text-white overflow-hidden">
      <Starfield />

      <Hero />
      <IdentitySection />
      <CoreSolutions />
      <Journey />
      <PartnershipSection />
      <OfficeLocation />
      
      {/* 푸터 영역 (선택사항) */}
      <footer className="py-20 text-center border-t border-white/5">
        <p className="text-white/20 text-sm font-medium tracking-widest">© 2026 RIDE ON INFRASTRUCTURE. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}