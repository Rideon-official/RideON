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

  // 스크롤 잠금 (body overflow hidden)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[999] bg-[#111111]/95 text-white backdrop-blur-md flex items-center justify-center"
        >
          {/* 닫기 버튼 */}
          <button
            aria-label="메뉴 닫기"
            className="absolute top-8 right-8 text-gray-400 hover:text-white text-3xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>

          {/* 메가메뉴 컨테이너 */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="w-full max-w-6xl px-8 md:px-12 lg:px-16"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center md:text-left">
              {menu.map((col) => (
                <div key={col.title} className="space-y-3">
                  <h3 className="text-lg font-semibold text-[#FFB800] tracking-wide">
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
                            className="text-gray-300 hover:text-white transition"
                          >
                            {item.label}
                          </a>
                        </li>
                      ) : (
                        <li key={item.label}>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="text-gray-300 hover:text-white transition"
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
