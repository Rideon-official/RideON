"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { NavPanel } from "./NavPanel";
import { Button } from "./Button";
import useScrollShrink from "@/hooks/useScrollShrink";

const navItems = [
  { href: "/brand", label: "브랜드" },
  { href: "/bike", label: "라이드온 바이크" },
  { href: "/logiteats", label: "LogitEats" },
  { href: "/store", label: "스토어" },
  { href: "/notice", label: "공지" },
  { href: "/cases", label: "사례" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const { isShrunk } = useScrollShrink();

  return (
    <motion.header
      className="fixed top-0 z-50 w-full backdrop-blur bg-[#111111]/90 border-b border-white/10 transition-all"
      animate={{ height: isShrunk ? 64 : 80 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold tracking-tight text-white">
          RIDE&nbsp;ON
        </Link>

        {/* 데스크톱 내비 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative font-medium hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:ring-offset-2 focus:ring-offset-[#111111]"
            >
              <span>{label}</span>
              <motion.span
                layoutId="underline"
                className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#FFB800]"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.15 }}
              />
            </Link>
          ))}
          <div className="flex items-center gap-3">
            <Button variant="primary" href="https://pf.kakao.com/_link" external>
              카톡 상담
            </Button>
            <Button variant="secondary" href="tel:010-1234-5678">
              전화·문자 상담
            </Button>
          </div>
        </nav>

        {/* 모바일 햄버거 */}
        <button
          aria-label="메뉴 열기"
          className="relative z-50 flex flex-col md:hidden w-6 h-5 justify-between"
          onClick={() => setOpen(!open)}
        >
          <motion.span
            className="block h-0.5 bg-white"
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block h-0.5 bg-white"
            animate={open ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block h-0.5 bg-white"
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          />
        </button>

        {/* 모바일 오프캔버스 */}
        <NavPanel open={open} setOpen={setOpen} />
      </div>
    </motion.header>
  );
}
