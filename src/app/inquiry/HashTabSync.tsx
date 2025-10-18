"use client";

import { useEffect } from "react";

// 해시 → 탭 버튼 라벨 맵핑 (네 실제 탭 라벨에 맞춰 필요시 수정)
const HASH_TO_BUTTON_TEXT: Record<string, string> = {
  "기사가입문의하기": "기사 가입 문의하기",
  "지사합병문의하기": "지사 합병 문의하기",
  "리스렌탈신청하기": "리스/렌탈 신청하기", // 해시에는 슬래시 제거 권장
  "파트너십문의하기": "파트너십 문의하기",
};

function normalizeHash(raw: string) {
  return decodeURIComponent(raw || "").replace(/^#/, "").trim();
}

export default function HashTabSync() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const clickTabByHash = () => {
      const raw = normalizeHash(window.location.hash);
      if (!raw) return;

      const label = HASH_TO_BUTTON_TEXT[raw] || raw;

      // 상단 탭 버튼을 찾아 클릭 (네 InquiryPage 구조는 그대로 둠)
      const cands = Array.from(
        document.querySelectorAll<HTMLElement>("nav button, nav a, [role='tab']")
      );

      const target = cands.find((el) =>
        (el.textContent || "").replace(/\s+/g, " ").trim() === label
      );
      target?.click();

      // 동일 id의 섹션이 있으면 스크롤 이동
      document.getElementById(raw)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    clickTabByHash(); // 처음 진입
    window.addEventListener("hashchange", clickTabByHash); // 해시 변경 시
    return () => window.removeEventListener("hashchange", clickTabByHash);
  }, []);

  return null;
}
