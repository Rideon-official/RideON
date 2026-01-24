// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 하위 메뉴 데이터 구성
  const navItems = [
    { 
      name: "회사소개", 
      href: "/brand",
      subMenus: [
        { name: "브랜드 스토리", href: "/brand#story" },
        { name: "역사 및 연혁", href: "/brand#history" },
        { name: "오시는 길", href: "/brand#location" }
      ]
    },
    { 
      name: "렌트·리스 소개", 
      href: "/bike",
      subMenus: [
        { name: "신차 렌트 프로그램", href: "/bike#new" },
        { name: "중고 리스 프로그램", href: "/bike#used" },
        { name: "정비 서비스 안내", href: "/bike#service" }
      ]
    },
    { 
      name: "정산시스템 소개", 
      href: "/logiteats",
      subMenus: [
        { name: "실시간 정산 안내", href: "/logiteats#realtime" },
        { name: "투명한 내역 관리", href: "/logiteats#transparency" },
        { name: "파트너 전용 앱", href: "/logiteats#app" }
      ]
    },
    { name: "공지사항", href: "/notice" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        isScrolled || hoveredMenu
          ? "bg-white/90 backdrop-blur-2xl py-3 shadow-lg border-b border-black/5"
          : "bg-transparent py-5"
      }`}
      onMouseLeave={() => setHoveredMenu(null)} // 마우스가 헤더 밖으로 나가면 닫기
    >
      {/* 상단 노란색 라인 */}
      <div className={`absolute top-0 left-0 w-full h-[2px] bg-[#FFB800] transition-transform duration-500 origin-left ${isScrolled ? "scale-x-100" : "scale-x-0"}`} />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="flex items-center justify-between">
          {/* 로고 영역 */}
          <Link href="/" className="flex items-center gap-2 group relative z-10">
            <div className={`relative w-10 h-10 overflow-hidden rounded-lg border transition-colors ${isScrolled || hoveredMenu ? "border-black/10" : "border-white/20"}`}>
              <Image src="/rideon-mark.png" alt="RIDE ON" fill className="object-contain p-1.5" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-black tracking-tighter leading-none transition-colors ${isScrolled || hoveredMenu ? "text-[#1A1A1A]" : "text-white"}`}>
                {siteConfig.name}
              </span>
              <span className="text-[10px] font-bold tracking-[0.15em] uppercase text-[#FFB800]">Infrastructure</span>
            </div>
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative py-2"
                onMouseEnter={() => setHoveredMenu(item.name)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 text-[15px] font-bold tracking-tight transition-colors hover:text-[#FFB800] ${
                    isScrolled || hoveredMenu
                      ? (pathname === item.href ? "text-[#FFB800]" : "text-[#1A1A1A]")
                      : (pathname === item.href ? "text-[#FFB800]" : "text-white")
                  }`}
                >
                  {item.name}
                  {item.subMenus && <ChevronDown size={14} className={`transition-transform ${hoveredMenu === item.name ? "rotate-180" : ""}`} />}
                </Link>
              </div>
            ))}
            
            <Link
              href="/inquiry"
              className="rounded-full px-7 py-2.5 text-[14px] font-black bg-[#FFB800] text-black transition-all hover:scale-105 active:scale-95 shadow-md"
            >
              지사 가맹 신청
            </Link>
          </div>
        </nav>
      </div>

      {/* 하위 메뉴 드롭다운 패널 (네이버 스타일) */}
      <div 
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-3xl border-b border-black/5 overflow-hidden transition-all duration-300 ease-in-out ${
          hoveredMenu && navItems.find(i => i.name === hoveredMenu)?.subMenus
            ? "max-height-[300px] opacity-100 py-10" 
            : "max-height-0 opacity-0 py-0"
        }`}
        style={{ maxHeight: hoveredMenu && navItems.find(i => i.name === hoveredMenu)?.subMenus ? "300px" : "0px" }}
      >
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="flex gap-20">
            {/* 현재 호버된 메뉴의 서브메뉴만 표시 */}
            {navItems.find(i => i.name === hoveredMenu)?.subMenus?.map((sub) => (
              <Link 
                key={sub.name} 
                href={sub.href}
                className="group flex flex-col gap-2"
              >
                <span className="text-[16px] font-bold text-[#1A1A1A] group-hover:text-[#FFB800] transition-colors">
                  {sub.name}
                </span>
                <span className="text-[12px] text-black/40 font-medium group-hover:text-[#FFB800]/60">
                  자세히 보기
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}