// src/app/inquiry/page.tsx
"use client";

import type { Metadata } from "next";
import InquiryPage from "../../components/InquiryPage";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "문의하기 | RIDE ON",
  description: "기사 가입, 지사 합병, 리스/렌탈, 파트너십 문의",
};

const HASH_TO_BUTTON_TEXT: Record<string, string> = {
  "기사가입문의하기": "기사 가입 문의하기",
  "지사합병문의하기": "지사 합병 문의하기",
  "리스렌탈신청하기": "리스/렌탈 신청하기",   // 해시: 슬래시 없이 정규화 추천
  "파트너십문의하기": "파트너십 문의하기",
};

function useHashSyncTabs() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const clickTabByHash = () => {
      const raw = decodeURIComponent(window.location.hash || "").replace(/^#/, "").trim();
      if (!raw) return;

      // 해시를 네가 쓰는 탭 라벨로 매핑
      const label = HASH_TO_BUTTON_TEXT[raw] || raw;
      // 상단 탭 영역에서 해당 버튼을 찾아 클릭(네 기존 컴포넌트 구조 유지)
      const buttons = Array.from(document.querySelectorAll("nav button, nav a, [role='tab']")) as HTMLElement[];
      const target = buttons.find((el) => (el.textContent || "").trim() === label);
      if (target) {
        (target as HTMLButtonElement).click?.();
        // 탭이 바뀐 뒤 해당 섹션으로 스크롤(필요시)
        const section = document.getElementById(raw);
        if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // 최초 진입 시 1회
    clickTabByHash();
    // 해시 변경 시마다
    window.addEventListener("hashchange", clickTabByHash);
    return () => window.removeEventListener("hashchange", clickTabByHash);
  }, []);
}

export default function Page() {
  useHashSyncTabs();  // 🔗 해시와 탭 동기화 (원본 InquiryPage는 그대로)
  return <InquiryPage />;
}
