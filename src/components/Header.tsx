"use client";

import Link from "next/link";
import Image from "next/image";
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
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* === Left: 로고 + 텍스트 === */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo2.png"
              alt="RIDE ON Logo"
              width={36}
              height={36}
              className="object-contain"
            />
            <span className="text-lg font-bold tracking-tight text-white">
              RIDE&nbsp;ON
            </span>
          </Link>
        </div>

        {/* === Center: 메뉴 === */}
        <nav className="hidden md:flex flex-1 justify-center items-center gap-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative font-medium hover:text-white text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFB800] focus:ring-offset-2 focus:ring-offset-[#111111]"
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
        </nav>

        {/* === Right: 버튼 + 햄버거 === */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-3">
            <Button variant="primary" href="https://pf.kakao.com/_link" external>
              카톡 상담
            </Button>
            <Button variant="secondary" href="tel:010-1234-5678">
              전화·문자 상담
            </Button>
          </div>

          {/* 모바일 햄버거 */}
          <button
            aria-label="메뉴 열기"
            className="relative flex flex-col w-6 h-5 justify-between md:block"
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
        </div>

        <NavPanel open={open} setOpen={setOpen} />
      </div>
    </motion.header>
  );
}
