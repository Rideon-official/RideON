"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

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
        { label: "협업/제휴 문의", href: "/brand#partner" },
      ],
    },
    {
      title: "BIKE",
      items: [
        { label: "렌트/리스 신청", href: "/bike#rent" },
        { label: "센터 안내", href: "/bike#center" },
      ],
    },
    {
      title: "LogitEats",
      items: [
        { label: "소개", href: "/logiteats#intro" },
        { label: "정산 절차/자동화", href: "/logiteats#process" },
        { label: "도입 문의", href: "/logiteats#contact" },
      ],
    },
    {
      title: "STORE",
      items: [
        { label: "모든 상품 보기", href: "/store" },
        { label: "네이버 스토어 ↗", href: "https://smartstore.naver.com/rideon", external: true },
        { label: "쿠팡 스토어 ↗", href: "https://store.coupang.com/rideon", external: true },
      ],
    },
    {
      title: "NOTICE",
      items: [
        { label: "업데이트", href: "/notice#update" },
        { label: "채용/알림", href: "/notice#recruit" },
      ],
    },
  ];

  const panelRef = useRef<HTMLDivElement>(null);
  const panelTopPx = 80; // 헤더 아래에서 시작

  // 스크롤 잠금
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // 패널 외부 클릭 감지 → 닫기
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* 배경 어둡기 (톤다운) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-0 z-[60] bg-black backdrop-blur-sm"
          />

          {/* 반화면 메가패널 */}
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            style={{ top: panelTopPx }}
            className="fixed left-0 right-0 z-[70] mx-auto max-w-6xl h-[50vh] max-h-[560px] px-6 md:px-8"
          >
            <div className="h-full w-full rounded-2xl border border-white/10 bg-[#1A1A1A]/95 backdrop-blur-md shadow-2xl overflow-hidden">
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
                              {/* ✨ 글자 길이에 맞춘 글로우 (노랑/부드럽게) */}
                              <span className="absolute inset-0 -z-10 scale-95 opacity-0 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300 rounded-full blur-md bg-[#FFB800]/20" />
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="relative inline-flex items-center rounded-md px-2 py-1 text-gray-300 hover:text-white transition"
                            >
                              <span className="relative z-10">{item.label}</span>
                              <span className="absolute inset-0 -z-10 scale-95 opacity-0 group-hover/item:opacity-100 group-hover/item:scale-100 transition-all duration-300 rounded-full blur-md bg-[#FFB800]/20" />
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>

                    {/* 컬럼 hover 시 아주 미묘한 밝기 */}
                    <span className="pointer-events-none absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.02] transition" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
