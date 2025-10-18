// src/app/inquiry/page.tsx
"use client";

import { useEffect, useMemo, useState, useCallback } from "react";

type TabKey = "기사가입문의하기" | "지사합병문의하기" | "리스렌탈신청하기" | "파트너십문의하기";

const TABS: { key: TabKey; label: string; hash: string }[] = [
  { key: "기사가입문의하기", label: "기사 가입 문의하기", hash: "기사가입문의하기" },
  { key: "지사합병문의하기", label: "지사 합병 문의하기", hash: "지사합병문의하기" },
  { key: "리스렌탈신청하기", label: "리스/렌탈 신청하기", hash: "리스렌탈신청하기" }, // id에 /를 쓰지 않도록 정규화
  { key: "파트너십문의하기", label: "파트너십 문의하기", hash: "파트너십문의하기" },
];

function normalizeHash(raw: string) {
  // "#지사합병문의하기" → "지사합병문의하기"
  return decodeURIComponent(raw || "").replace(/^#/, "").trim();
}

export default function InquiryPage() {
  const defaultKey: TabKey = "기사가입문의하기";
  const [active, setActive] = useState<TabKey>(defaultKey);

  const keyByHash = useMemo(() => {
    const map = new Map<string, TabKey>();
    TABS.forEach((t) => map.set(t.hash, t.key));
    return map;
  }, []);

  // 1) 최초 로드 시 해시로 활성 탭 설정
  useEffect(() => {
    if (typeof window === "undefined") return;
    const h = normalizeHash(window.location.hash);
    if (h && keyByHash.has(h)) {
      setActive(keyByHash.get(h)!);
    }
  }, [keyByHash]);

  // 2) 해시 변경 감지하여 활성 탭 동기화
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onHash = () => {
      const h = normalizeHash(window.location.hash);
      if (h && keyByHash.has(h)) {
        setActive(keyByHash.get(h)!);
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [keyByHash]);

  // 3) 탭 클릭 시 상태 + 해시를 함께 갱신
  const activate = useCallback((key: TabKey) => {
    setActive(key);
    const tab = TABS.find((t) => t.key === key)!;
    if (typeof window !== "undefined") {
      // replaceState를 쓰면 스크롤 점프 없이 해시만 바꿈. 스크롤도 하고 싶으면 location.hash = ...
      history.replaceState(null, "", `#${encodeURIComponent(tab.hash)}`);
    }
  }, []);

  return (
    <main className="min-h-screen bg-[#111111] text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* 상단 탭 */}
        <nav className="flex flex-wrap gap-2">
          {TABS.map((t) => {
            const selected = active === t.key;
            return (
              <button
                key={t.key}
                type="button"
                aria-selected={selected}
                onClick={() => activate(t.key)}
                className={[
                  "rounded-full px-4 py-2 text-sm",
                  selected
                    ? "bg-[#FFB800] text-black font-semibold"
                    : "bg-white/5 text-white/80 border border-white/10 hover:bg-white/10",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </nav>

        {/* 본문 */}
        <section className="mt-6">
          {/* 기사 가입 문의하기 */}
          <div
            id="기사가입문의하기"
            hidden={active !== "기사가입문의하기"}
            aria-hidden={active !== "기사가입문의하기"}
            className="rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h1 className="text-2xl font-semibold">기사 가입 문의하기</h1>
            <p className="mt-2 text-white/70 text-sm">
              아래 정보를 작성해 주세요. 제출 전까지 데이터는 저장되지 않습니다.
            </p>

            {/* ⬇️ 여기부터 네가 쓰던 기존 '기사 가입' 폼 마크업으로 교체 */}
            {/* Rider Form … */}
          </div>

          {/* 지사 합병 문의하기 */}
          <div
            id="지사합병문의하기"
            hidden={active !== "지사합병문의하기"}
            aria-hidden={active !== "지사합병문의하기"}
            className="rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h1 className="text-2xl font-semibold">지사 합병 문의하기</h1>
            <p className="mt-2 text-white/70 text-sm">
              지사 합병·창업 관련 상담을 요청해 주세요.
            </p>

            {/* ⬇️ 기존 '지사 합병' 폼 마크업으로 교체 */}
            {/* Branch/Merge Form … */}
          </div>

          {/* 리스/렌탈 신청하기 */}
          <div
            id="리스렌탈신청하기"
            hidden={active !== "리스렌탈신청하기"}
            aria-hidden={active !== "리스렌탈신청하기"}
            className="rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h1 className="text-2xl font-semibold">리스/렌탈 신청하기</h1>
            <p className="mt-2 text-white/70 text-sm">
              리스/렌탈에 필요한 정보를 입력해 주세요.
            </p>

            {/* ⬇️ 기존 '리스/렌탈' 폼 마크업으로 교체 */}
            {/* Lease/Rental Form … */}
          </div>

          {/* 파트너십 문의하기 */}
          <div
            id="파트너십문의하기"
            hidden={active !== "파트너십문의하기"}
            aria-hidden={active !== "파트너십문의하기"}
            className="rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >
            <h1 className="text-2xl font-semibold">파트너십 문의하기</h1>
            <p className="mt-2 text-white/70 text-sm">
              정산/운영/기술 제휴 등 파트너십 관련 문의를 남겨 주세요.
            </p>

            {/* ⬇️ 기존 '파트너십' 폼 마크업으로 교체 */}
            {/* Partnership Form … */}
          </div>
        </section>
      </div>
    </main>
  );
}
