// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ChevronRight } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 요청하신 5가지 메뉴 구성으로 업데이트
  const navItems = [
    { name: "회사소개", href: "/brand" },
    { name: "렌트·리스 소개", href: "/bike" },
    { name: "정산시스템 소개", href: "/logiteats" },
    { name: "공지사항", href: "/notice" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#1A1A1A]/90 backdrop-blur-md py-3 shadow-lg border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="flex items-center justify-between">
          {/* 로고 영역 */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/rideon-mark.png"
                alt={`${siteConfig.name} 심볼`}
                fill
                priority
                className="object-contain p-1.5 transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-[#FFB800] font-medium tracking-widest uppercase opacity-80">
                Infrastructure
              </span>
            </div>
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#FFB800] ${
                  pathname === item.href ? "text-[#FFB800]" : "text-white/70"
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA 버튼: 지사 가맹 신청 */}
            <Link
              href="/inquiry"
              className="rounded-full bg-[#FFB800] px-6 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,184,0,0.2)]"
            >
              지사 가맹 신청
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1A1A1A] pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-white flex justify-between items-center border-b border-white/5 pb-4"
              >
                {item.name} <ChevronRight className="text-[#FFB800]" size={20} />
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 rounded-xl bg-[#FFB800] py-4 text-center text-lg font-bold text-black"
            >
              지사 가맹 신청
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}