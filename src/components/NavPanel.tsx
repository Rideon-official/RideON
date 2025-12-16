"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import { INQUIRY } from "@/config/links";

type NavPanelProps = {
  open: boolean;
  setOpen: (val: boolean) => void;
};

export function NavPanel({ open, setOpen }: NavPanelProps) {
  const menu = [
  {
    title: "BRAND",
    items: [
      { label: "브랜드 스토리", href: "/brand#story" },
      { label: "전국 지부 네트워크", href: "/brand#network" },
      { label: "지사 개설/합병 프로세스", href: "/brand#merge-flow" },
    ],
  },
  {
    title: "BIKE",
    items: [
      { label: "렌트/리스 안내", href: "/bike#intro" },
      { label: "센터 안내", href: "/bike#center" },
      { label: "렌트/리스 신청", href: INQUIRY.rent },
    ],
  },
  {
    title: "PAYOUT",
    items: [
      { label: "정산 시스템 소개", href: "/payout#intro" },
      { label: "자동화 프로세스 다이어그램", href: "/payout#process" },
      { label: "도입 효과", href: "/payout#benefit" },
      { label: "도입 문의", href: "/payout#contact" },
    ],
  },
  {
    title: "STORE",
    items: [
      { label: "자체 상품 보기", href: "/store" },
      {
        label: "네이버 스토어 ↗",
        href: "https://smartstore.naver.com/rideon",
        external: true,
      },
      {
        label: "쿠팡 스토어 ↗",
        href: "https://store.coupang.com/rideon",
        external: true,
      },
    ],
  },
  {
    title: "NOTICE",
    items: [
      { label: "공지사항 리스트", href: "/notice#list" },
      { label: "업데이트", href: "/notice#update" },
      { label: "채용/공고", href: "/notice#recruit" },
    ],
  },
  {
    title: "CONTACT",
    items: [
      { label: "기사 문의", href: "/contact#rider" },
      { label: "지사 개설/합병 문의", href: "/contact#branch" },
      { label: "리스/렌탈 신청하기", href: "/contact#lease" },
      { label: "파트너십 제안", href: "/contact#partner" },
    ],
  },
];
  
  const panelRef = useRef<HTMLDivElement>(null);

  // 바디 스크롤 잠금
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // ESC로 닫기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  // 패널 내부 빈영역 탭 시 닫기 (링크/버튼 제외)
  const onPanelClickCapture: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLElement;
    // a, button 또는 data-no-close가 붙은 요소는 무시
    if (target.closest("a,button,[data-no-close]")) return;
    // 스크롤바/스크롤 드래그가 아닌 단순 탭이라면 닫기
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 백드롭 - 바깥 클릭 닫힘 */}
          <motion.button
            aria-label="메뉴 닫기"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] bg-black backdrop-blur-sm"
          />

          {/* 모바일 전용 X 버튼 (데스크톱에도 보이게 하려면 md:hidden 제거) */}
          <button
            aria-label="메뉴 닫기"
            className="md:hidden fixed top-3 right-4 z-[80] p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20"
            onClick={() => setOpen(false)}
          >
            <span className="relative block w-5 h-5">
              <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-white rotate-45" />
              <span className="absolute left-0 right-0 top-1/2 h-[2px] bg-white -rotate-45" />
            </span>
          </button>

          {/* 패널: 모바일 풀스크린 스크롤, 데스크톱 반화면 */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="
              fixed left-0 right-0 z-[70]
              top-0 md:top-[80px]
              w-full md:mx-auto md:max-w-6xl
              h-[100svh] md:h-[50vh] md:max-h-[560px]
              px-4 md:px-8
            "
          >
            <div
              className="
                h-full w-full
                bg-[#1A1A1A]/95 backdrop-blur-md
                border-0 md:border md:border-white/10
                rounded-none md:rounded-2xl
                shadow-none md:shadow-2xl
                overflow-hidden
              "
            >
              {/* ⬇ 내부 스크롤 가능 */}
              <div
                ref={panelRef}
                onClickCapture={onPanelClickCapture}
                className="h-full overflow-y-auto overscroll-contain md:overflow-visible"
              >
                <div className="grid h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  {menu.map((col, idx) => (
                    <motion.div
                      key={col.title}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.03 * idx, duration: 0.18 }}
                      className="group relative flex flex-col gap-3 p-6 border-t lg:border-t-0 lg:border-l border-white/5 first:border-l-0"
                    >
                      <h3 className="text-base md:text-lg font-semibold tracking-wide text-[#FFB800]">
                        {col.title}
                      </h3>

                      <ul className="space-y-2">
                        {col.items.map((item) => (
                          <li key={item.label} className="relative group/item">
                            {item.external ? (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="relative inline-flex items-center rounded-md px-2 py-1 text-gray-300 hover:text-white transition"
                              >
                                <span className="relative z-10">{item.label}</span>
                                <span className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-all duration-300 rounded-full blur-md bg-[radial-gradient(120%_120%_at_50%_50%,rgba(255,184,0,0.18)_0%,rgba(255,184,0,0.08)_45%,rgba(255,184,0,0)_70%)]" />
                              </a>
                            ) : (
                              <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="relative inline-flex items-center rounded-md px-2 py-1 text-gray-300 hover:text-white transition"
                              >
                                <span className="relative z-10">{item.label}</span>
                                <span className="absolute inset-0 -z-10 opacity-0 group-hover/item:opacity-100 transition-all duration-300 rounded-full blur-md bg-[radial-gradient(120%_120%_at_50%_50%,rgba(255,184,0,0.18)_0%,rgba(255,184,0,0.08)_45%,rgba(255,184,0,0)_70%)]" />
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>

                      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.02] transition" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
