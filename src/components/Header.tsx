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
      { label: "공지사항", href: "/notice#update" },
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
      <motion.header
        className="fixed top-0 z-50 w-full backdrop-blur bg-[#111111]/90 border-b border-white/10 transition-all"
        animate={{ height: isShrunk ? 64 : 80 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          {/* Left: 로고 밸런스 */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo2.png"
              alt="RIDE ON Logo"
              width={28}
              height={28}
              className="object-contain transition-transform group-hover:scale-105"
            />
            <span className="text-[18px] font-extrabold tracking-wide text-white group-hover:text-[#FFB800] transition">
              RIDE&nbsp;ON
            </span>
          </Link>

          {/* Center: 메뉴 */}
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

          {/* Right: 카톡 + 햄버거 */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Button variant="primary" href="https://pf.kakao.com/_link" external>
                카톡 상담
              </Button>
            </div>

            {/* ✅ 절대배치 방식 햄버거: 완벽한 三→X */}
            <button
              aria-label="메뉴 열기"
              onClick={() => setOpen(!open)}
              className="relative z-[90] ml-4 w-7 h-5 focus:outline-none"
            >
              {/* 공통 스타일 */}
              {["top", "middle", "bottom"].map((key, i) => (
                <motion.span
                  key={key}
                  className="absolute left-0 right-0 top-1/2 block h-[2px] bg-white rounded-sm"
                  style={{ transformOrigin: "50% 50%" }}
                  initial={false}
                  animate={
                    open
                      ? // X 상태: 모두 중앙(y:0)에서 교차 회전
                        i === 0
                        ? { rotate: 45, y: 0 }
                        : i === 1
                        ? { opacity: 0 }
                        : { rotate: -45, y: 0 }
                      : // 기본 三: 위/가운데/아래
                        i === 0
                      ? { rotate: 0, y: -6 }
                      : i === 1
                      ? { opacity: 1, rotate: 0, y: 0 }
                      : { rotate: 0, y: 6 }
                  }
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* 패널은 헤더 밖에 */}
      <NavPanel open={open} setOpen={setOpen} />
    </>
  );
}
