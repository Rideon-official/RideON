"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavPanel } from "./NavPanel";
import { Button } from "./Button";
import useScrollShrink from "@/hooks/useScrollShrink";

const navItems = [
  {
    label: "BRAND",
    href: "/brand",
    submenu: [
      { label: "브랜드 스토리", href: "/brand#story" },
      { label: "협업/제휴 문의", href: "/brand#partner" },
    ],
  },
  {
    label: "BIKE",
    href: "/bike",
    submenu: [
      { label: "렌트/리스 신청", href: "/bike#rent" },
      { label: "센터 안내", href: "/bike#center" },
    ],
  },
  {
    label: "LogitEats",
    href: "/logiteats",
    submenu: [
      { label: "소개", href: "/logiteats#intro" },
      { label: "정산 절차/자동화", href: "/logiteats#process" },
      { label: "도입 문의", href: "/logiteats#contact" },
    ],
  },
  {
    label: "STORE",
    href: "/store",
    submenu: [
      { label: "모든 상품 보기", href: "/store" },
      { label: "네이버 스토어 ↗", href: "https://smartstore.naver.com/rideon", external: true },
      { label: "쿠팡 스토어 ↗", href: "https://store.coupang.com/rideon", external: true },
    ],
  },
  {
    label: "NOTICE",
    href: "/notice",
    submenu: [
      { label: "업데이트", href: "/notice#update" },
      { label: "채용/알림", href: "/notice#recruit" },
    ],
  },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const { isShrunk } = useScrollShrink();

  return (
    <>
      {/* ====== TOP BAR ====== */}
      <motion.header
        className="fixed top-0 z-50 w-full backdrop-blur bg-[#111111]/90 border-b border-white/10 transition-all"
        animate={{ height: isShrunk ? 64 : 80 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* === Left: 로고 밸런스 조정 === */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo2.png"
              alt="RIDE ON Logo"
              width={28}   // 아이콘 살짝 줄임
              height={28}
              className="object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-[18px] font-extrabold tracking-wide text-white group-hover:text-[#FFB800] transition">
              RIDE&nbsp;ON
            </span>
          </Link>

          {/* === Center: 메뉴 === */}
          <nav className="hidden md:flex flex-1 justify-center items-center gap-10 relative">
            {navItems.map(({ label, submenu }) => (
              <div
                key={label}
                className="relative"
                onMouseEnter={() => setHoveredMenu(label)}
              >
                <button
                  className={`text-gray-200 hover:text-white font-medium transition ${
                    hoveredMenu === label ? "text-white" : ""
                  }`}
                >
                  {label}
                </button>

                {/* Hover 서브메뉴 */}
                <AnimatePresence>
                  {hoveredMenu === label && submenu && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-1/2 -translate-x-1/2 mt-4 bg-[#1A1A1A]/95 border border-white/10 rounded-xl px-6 py-4 flex gap-8 shadow-2xl backdrop-blur-md"
                    >
                      {submenu.map((item) =>
                        item.external ? (
                          <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-[#FFB800] text-sm whitespace-nowrap"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={item.label}
                            href={item.href}
                            className="text-gray-300 hover:text-[#FFB800] text-sm whitespace-nowrap"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* === Right: 카톡 + 햄버거 === */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button variant="primary" href="https://pf.kakao.com/_link" external>
                카톡 상담
              </Button>
            </div>

            {/* 햄버거: 三 → X 애니메이션/간격/회전축 수정 */}
            <button
              aria-label="메뉴 열기"
              onClick={() => setOpen(!open)}
              className="relative z-[90] flex w-7 h-5 flex-col justify-between cursor-pointer focus:outline-none ml-4"
            >
              <motion.span
                className="block h-[2px] bg-white rounded-sm origin-center"
                animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                style={{ transformOrigin: "center" }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
              <motion.span
                className="block h-[2px] bg-white rounded-sm origin-center"
                animate={open ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2px] bg-white rounded-sm origin-center"
                animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ====== OVERLAY PANEL (헤더 밖으로 분리) ====== */}
      <NavPanel open={open} setOpen={setOpen} />
    </>
  );
}
