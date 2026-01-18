"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site"; // 1. 설정 파일 임포트
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
    { name: "서비스 소개", href: "/#quick-access" },
    { name: "지사 통합 문의", href: "/merge" },
    { name: "공지사항", href: "/notice" },
    { name: "문의하기", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-graphite-core/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <nav className="flex items-center justify-between">
          {/* 로고 영역 최적화 */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-white/10">
              <Image
                src="/rideon-mark.png"
                alt={`${siteConfig.name} 심볼`} // 2. siteConfig 적용
                fill
                priority // 3. 이미지 로딩 우선순위 부여
                className="object-contain p-1.5 transition-transform group-hover:scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-brand-accent font-medium tracking-widest uppercase opacity-80">
                Infrastructure
              </span>
            </div>
          </Link>

          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-brand-accent"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/inquiry"
              className="rounded-full bg-brand-secondary px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-brand-secondary/90 hover:scale-105"
            >
              지사 가맹 신청
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* 모바일 메뉴 오버레이 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-graphite-core pt-24 px-6 md:hidden">
          <div className="flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-bold text-white flex justify-between items-center"
              >
                {item.name} <ChevronRight className="text-brand-accent" />
              </Link>
            ))}
            <Link
              href="/inquiry"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 rounded-xl bg-brand-secondary py-4 text-center text-lg font-bold text-white"
            >
              지사 가맹 신청
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}