"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { INQUIRY_MENU } from "@/config/links";

/** INQUIRY_MENU의 href에서 #뒤의 id만 뽑아 section id로 사용 */
function getIdFromHref(href: string) {
  const i = href.indexOf("#");
  return i >= 0 ? href.slice(i + 1) : href.replace(/^\//, "");
}

export default function InquiryPage() {
  // 탭/섹션 메타
  const items = useMemo(
    () =>
      INQUIRY_MENU.map((x) => ({
        key: x.key,
        label: x.label,
        id: getIdFromHref(x.href), // "기사가입문의하기" 같은 id
      })),
    []
  );

  const [active, setActive] = useState(items[0]?.id ?? "");
  const sectionsRef = useRef<Record<string, HTMLElement | null>>({});

  // 스크롤스파이: 현재 보이는 섹션을 active로
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // 화면 중심에 더 가까운 섹션을 우선
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0));
        if (visible[0]) {
          const id = visible[0].target.getAttribute("id") || "";
          if (id) setActive(id);
        }
      },
      {
        // 헤더 높이가 80px 내외이므로 top margin을 넉넉히
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6],
      }
    );

    items.forEach((it) => {
      const el = sectionsRef.current[it.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  // 탭 클릭 시 부드러운 스크롤 + 주소 해시만 교체
  const handleClick = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = sectionsRef.current[id];
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // 해시만 바꾸어 새로고침 없이 주소 반영
    history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  return (
    <div className="bg-white">
      {/* 상단 탭바 (헤더가 fixed라서 여유 패딩) */}
      <div className="h-6 md:h-8" aria-hidden />{/* 헤더와 간격 확보 */}

      <div className="sticky top-[64px] z-30 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4">
          <nav className="flex gap-6 md:gap-10 py-3 md:py-4">
            {items.map((it) => {
              const isActive = active === it.id;
              return (
                <Link
                  key={it.id}
                  href={`#${it.id}`}
                  scroll={false}
                  onClick={handleClick(it.id)}
                  className={
                    "rounded-full px-4 py-2 text-sm font-semibold transition " +
                    (isActive
                      ? "bg-indigo-600 text-white"
                      : "text-zinc-700 hover:bg-zinc-100")
                  }
                >
                  {it.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* 본문 섹션들 */}
      <div className="mx-auto max-w-4xl px-4 py-10 md:py-14">
        {items.map((it) => (
          <section
            key={it.id}
            id={it.id}
            ref={(el) => (sectionsRef.current[it.id] = el)}
            className="scroll-mt-28 border-b last:border-b-0 border-zinc-200 py-10 md:py-14"
            aria-labelledby={`${it.id}-title`}
          >
            <h2
              id={`${it.id}-title`}
              className="text-2xl md:text-3xl font-extrabold text-indigo-600"
            >
              {it.label}
            </h2>

            {/* 실제 폼 */}
            <FormBlock type={it.key} />
          </section>
        ))}
      </div>
    </div>
  );
}

/** 간단 폼 블록 – type별로 필드 구성만 살짝 다르게 */
function FormBlock({ type }: { type: (typeof INQUIRY_MENU)[number]["key"] }) {
  // 공통 input 스타일
  const input =
    "w-full rounded-md border border-zinc-300 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-300";

  // 예시 필드 (실제 제출/검증 로직은 추후 API에 맞춰 연결)
  return (
    <form className="mt-6 space-y-4">
      {/* 공통 필드 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium">이름 *</label>
          <input className={input} placeholder="김 라이더" required />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium">연락처 *</label>
          <input className={input} placeholder="10-0000-0000" required />
        </div>
      </div>

      {/* type별 필드 분기 – 필요하면 자유롭게 확장 */}
      {type === "rider" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm font-medium">생년월일(6자리) *</label>
            <input className={input} placeholder="000000" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">개인/사업자 구분 *</label>
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
            <label className="mb-1 block text-sm font-medium">업체명 *</label>
            <input className={input} placeholder="주식회사 RIDE ON" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">문의 내용 *</label>
            <textarea className={input} rows={5} placeholder="간단한 소개와 협업 제안을 적어주세요." />
          </div>
        </>
      )}

      {type === "rent" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm font-medium">구분 *</label>
              <select className={input} defaultValue="">
                <option value="" disabled>
                  선택
                </option>
                <option>반납형 렌탈</option>
                <option>인수형 리스</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium">보험</label>
              <select className={input} defaultValue="">
                <option value="" disabled>
                  선택
                </option>
                <option>자차 포함</option>
                <option>자차 미포함</option>
              </select>
            </div>
          </div>
        </>
      )}

      {type === "partner" && (
        <>
          <div>
            <label className="mb-1 block text-sm font-medium">회사/서비스명 *</label>
            <input className={input} placeholder="예: 네이버 / 결제" required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium">제안 내용 *</label>
            <textarea className={input} rows={5} placeholder="제휴/파트너십 제안을 자유롭게 작성해주세요." />
          </div>
        </>
      )}

      {/* 제출 버튼 – 데모용 */}
      <div className="pt-2">
        <button
          type="button"
          className="w-full md:w-auto rounded-md bg-indigo-600 px-5 py-3 font-semibold text-white hover:bg-indigo-700"
          onClick={() => alert("데모 폼입니다. 실제 제출 API 연결 전입니다.")}
        >
          다음으로 →
        </button>
      </div>
    </form>
  );
}
