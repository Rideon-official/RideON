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

  const navItems = [
    { name: "회사소개", href: "/brand" },
    { name: "렌트·리스 소개", href: "/bike" },
    { name: "정산시스템 소개", href: "/logiteats" },
    { name: "공지사항", href: "/notice" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-black/60 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5" // 딥 블랙 반투명으로 변경
          : "bg-transparent py-5"
      }`}
    >
      {/* 상단 노란색 강조 라인 */}
      <div 
        className={`absolute top-0 left-0 w-full h-[2px] bg-[#FFB800] transition-transform duration-500 origin-left ${
          isScrolled ? "scale-x-100" : "scale-x-0"
        }`} 
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="flex items-center justify-between">
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
              <span className="text-xl font-black tracking-tighter leading-none text-white">
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FFB800]">
                Infrastructure
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-[15px] font-bold tracking-tight transition-all hover:text-[#FFB800] ${
                  pathname === item.href ? "text-[#FFB800]" : "text-white/90"
                } drop-shadow-sm`} // 글자색을 화이트로 고정하여 가독성 확보
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="/inquiry"
              className="rounded-full px-7 py-2.5 text-[14px] font-black bg-[#FFB800] text-black transition-all hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(255,184,0,0.4)]"
            >
              지사 가맹 신청
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
          </button>
        </nav>
      </div>

      {/* 모바일 메뉴 오버레이 (딥 블랙) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black text-white flex justify-between items-center border-b border-white/5 pb-5"
              >
                {item.name} <ChevronRight className="text-[#FFB800]" size={24} strokeWidth={3} />
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 rounded-2xl bg-[#FFB800] py-5 text-center text-xl font-black text-black"
            >
              지사 가맹 신청
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}