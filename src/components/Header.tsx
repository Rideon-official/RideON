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
      // 20px 이상 내렸을 때 스타일 변경
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "회사소개", href: "/brand" },
    { name: "렌트·리스 소개", href: "/bike" },
    { name: "정산시스템 소개", href: "/logiteats" },
    { name: "공지사항", href: "/notice" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${
        isScrolled
          ? "bg-white/40 backdrop-blur-xl py-3 shadow-[0_2px_15px_rgba(0,0,0,0.05)] border-b border-white/20"
          : "bg-transparent py-5"
      }`}
    >
      {/* 네이버 스타일 상단 강조 라인 (스크롤 시 노출) */}
      <div 
        className={`absolute top-0 left-0 w-full h-[3px] bg-[#FFB800] transition-transform duration-700 origin-left ${
          isScrolled ? "scale-x-100" : "scale-x-0"
        }`} 
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="flex items-center justify-between">
          {/* 로고 영역 */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className={`relative w-10 h-10 overflow-hidden rounded-lg border transition-colors ${isScrolled ? "border-black/5" : "border-white/10"}`}>
              <Image
                src="/rideon-mark.png"
                alt={`${siteConfig.name} 심볼`}
                fill
                priority
                className="object-contain p-1.5 transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg font-bold tracking-tight leading-none transition-colors ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}>
                {siteConfig.name}
              </span>
              <span className={`text-[10px] font-medium tracking-widest uppercase opacity-80 transition-colors ${isScrolled ? "text-[#FFB800]" : "text-[#FFB800]"}`}>
                Infrastructure
              </span>
            </div>
          </Link>

          {/* 데스크탑 메뉴: 스크롤 시 글자색 반전 */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[#FFB800] ${
                  isScrolled 
                    ? (pathname === item.href ? "text-[#FFB800]" : "text-[#1A1A1A]/40") 
                    : (pathname === item.href ? "text-[#FFB800]" : "text-white/40")
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA 버튼: 지사 가맹 신청 */}
            <Link
              href="/inquiry"
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-md ${
                isScrolled 
                  ? "bg-[#1A1A1A] text-white hover:bg-black" 
                  : "bg-[#FFB800] text-black hover:bg-[#FFB800]/90"
              }`}
            >
              지사 가맹 신청
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-[#1A1A1A]" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-bold text-[#1A1A1A] flex justify-between items-center border-b border-black/5 pb-4"
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