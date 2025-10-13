"use client";

import { useEffect, useMemo, useState } from "react";
import { INQUIRY_MENU } from "@/config/links";

function getIdFromHref(href: string) {
  const i = href.indexOf("#");
  return i >= 0 ? href.slice(i + 1) : href.replace(/^\//, "");
}

type Tab = {
  key: (typeof INQUIRY_MENU)[number]["key"];
  id: string;
  label: string;
};

export default function InquiryPage() {
  // 탭 메타 (상수에서 id/label만 재가공)
  const tabs: Tab[] = useMemo(
    () =>
      INQUIRY_MENU.map((x) => ({
        key: x.key,
        id: getIdFromHref(x.href),
        label: x.label,
      })),
    []
  );

  const [active, setActive] = useState<Tab["id"]>(tabs[0]?.id ?? "");

  // 진입 시 URL 해시로 초기 탭 세팅
  useEffect(() => {
    const h = window.location.hash.replace(/^#/, "");
    if (h && tabs.some((t) => t.id === h)) setActive(h);
  }, [tabs]);

  // 탭 클릭 → 내용 전환, 주소 해시 갱신(리로드 없음)
  const onTab = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="bg-[#111111] text-gray-200 min-h-screen">
      {/* 상단 여백(고정 헤더 피하기) */}
      <div className="h-6 md:h-8" aria-hidden />

      {/* ▷ 탭바: 가운데 정렬(데스크톱), 모바일 2×2 그리드 */}
      <div className="sticky top-[58px] z-30 border-b border-white/10 bg-[#111111]/95 backdrop-blur-sm transition-all duration-300">
        <div className="mx-auto max-w-6xl px-3">
          <nav className="py-1.5 md:py-2">
            <div
              className="
                grid grid-cols-2 gap-2 justify-items-center
                sm:grid-cols-4
                md:flex md:flex-nowrap md:justify-center md:gap-3
              "
            >
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => onTab(t.id)}
                    className={
                      "w-full md:w-auto whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition " +
                      (isActive
                        ? "bg-[#FFB800] text-black ring-2 ring-[#FFB800]/40"
                        : "text-gray-300 hover:bg-white/5 border border-white/10")
                    }
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* ▷ 본문: 밝은 카드 패널 위에 폼 렌더 */}
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        <div className="rounded-2xl border border-white/10 bg-[#1A1A1A]/90 shadow-[0_10px_30px_rgba(0,0,0,0.35)] p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            {tabs.find((t) => t.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            아래 정보를 작성해 주세요. 제출 전까지 데이터는 저장되지 않습니다.
          </p>

          <FormBlock
            type={(tabs.find((t) => t.id === active)?.key ?? "rider") as Tab["key"]}
          />
        </div>
      </div>
    </div>
  );
}

/* ---------- 폼 (다크 톤) ---------- */
function FormBlock({ type }: { type: (typeof INQUIRY_MENU)[number]["key"] }) {
  // 입력 필드: 배경보다 조금 더 밝게
  const input =
    "w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 " +
    "text-white placeholder:text-gray-400 outline-none " +
    "focus:ring-2 focus:ring-[#FFB800]/40 focus:border-[#FFB800]";

  return (
    <form className="mt-6 space-y-4">
      {/* 공통 필드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">이름 *</label>
          <input className={input} placeholder="김 라이더" required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">연락처 *</label>
          <input className={input} placeholder="10-0000-0000" required />
        </div>
      </div>

      {/* type별 추가 필드 */}
      {type === "rider" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              생년월일(6자리) *
            </label>
            <input className={input} placeholder="000000" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              개인/사업자 구분 *
            </label>
            <select className={input} defaultValue="">
              <option value="" disabled>
                선택
              </option>
              <option>개인</option>
              <option>사업자</option>
            </select>
          </div>
        </div>
      )}

      {type === "branch" && (
        <>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">업체명 *</label>
            <input className={input} placeholder="주식회사 RIDE ON" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">문의 내용 *</label>
            <textarea
              className={input}
              rows={5}
              placeholder="간단한 소개와 협업 제안을 적어주세요."
              required
            />
          </div>
        </>
      )}

      {type === "rent" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">구분 *</label>
            <select className={input} defaultValue="">
              <option value="" disabled>
                선택
              </option>
              <option>반납형 렌탈</option>
              <option>인수형 리스</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">보험</label>
            <select className={input} defaultValue="">
              <option value="" disabled>
                선택
              </option>
              <option>자차 포함</option>
              <option>자차 미포함</option>
            </select>
          </div>
        </div>
      )}

      {type === "partner" && (
        <>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              회사/서비스명 *
            </label>
            <input className={input} placeholder="예: 네이버 / 결제" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">제안 내용 *</label>
            <textarea
              className={input}
              rows={5}
              placeholder="제휴/파트너십 제안을 자유롭게 작성해주세요."
              required
            />
          </div>
        </>
      )}

      {/* 제출 버튼 (데모) */}
      <div className="pt-2">
        <button
          type="button"
          className="w-full md:w-auto rounded-md bg-[#FFB800] px-5 py-3 font-semibold text-black hover:bg-[#ffc52e]"
          onClick={() => alert("데모 폼입니다. 실제 제출 API 연결 전입니다.")}
        >
          다음으로 →
        </button>
      </div>
    </form>
  );
}
