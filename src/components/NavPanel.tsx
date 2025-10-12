"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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

  // 패널 열릴 때 바디 스크롤 잠금
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // 패널 상단 기준(헤더 높이 보정). 헤더는 80→64px이라 80px로 여유 잡음
  const panelTopPx = 80; // 필요시 64로 조정 가능

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ✅ 바깥영역(특히 아래쪽) 클릭 시 닫히는 투명 백드롭 */}
          <motion.button
            aria-label="메뉴 닫기"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] cursor-default"
          />

          {/* ✅ 상단 우측 X 버튼 */}
          <button
            aria-label="메뉴 닫기"
            className="fixed top-4 right-6 z-[70] text-gray-400 hover:text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* ✅ 반화면(50vh) 패널: 헤더 아랫부분부터 내려옴 */}
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ top: panelTopPx }}
            className="fixed left-0 right-0 z-[70] mx-auto max-w-6xl h-[50vh] max-h-[560px] px-6 md:px-8"
          >
            <div className="h-full w-full rounded-2xl border border-white/10 bg-[#1A1A1A]/95 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* 컬럼 영역 */}
              <div className="grid h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {menu.map((col, idx) => (
                  <motion.div
                    key={col.title}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * idx, duration: 0.2 }}
                    className={`group flex flex-col gap-3 p-6 border-t lg:border-t-0 lg:border-l border-white/5
                                first:border-l-0`}
                  >
                    <h3 className="text-base md:text-lg font-semibold tracking-wide text-[#FFB800]">
                      {col.title}
                    </h3>

                    <ul className="space-y-2">
                      {col.items.map((item) =>
                        item.external ? (
                          <li key={item.label}>
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block rounded-md px-2 py-1 text-gray-300 hover:text-white transition"
                            >
                              {item.label}
                            </a>
                          </li>
                        ) : (
                          <li key={item.label}>
                            <Link
                              href={item.href}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-2 py-1 text-gray-300 hover:text-white transition"
                            >
                              {item.label}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>

                    {/* ✅ 컬럼 hover 라인/밝기 강조 */}
                    <span className="pointer-events-none absolute inset-y-0 right-0 w-px bg-transparent group-hover:bg-[#FFB800]/40 transition" />
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
