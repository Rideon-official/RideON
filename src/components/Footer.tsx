// src/components/Footer.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { INQUIRY_MENU } from "@/config/links";

export default function Footer() {
  const year = new Date().getFullYear();

  const linkBase =
    "transition-colors duration-300 hover:text-[#FFB800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50 rounded";

  return (
    <footer className="mt-20 bg-[#111111] text-neutral-400 tracking-tight border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
        {/* ====== 블록 A: 메뉴판(기존 유지) ====== */}
        <div className="flex flex-col gap-3 items-start md:items-center md:flex-row md:justify-between py-8">
          <h3 className="text-xl font-bold text-white">
            전국 운영/정산/렌트 — RIDE ON과 시작하세요
          </h3>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://pf.kakao.com/_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-[#FFB800] px-4 py-2 text-sm font-semibold text-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/40"
              aria-label="카카오톡 상담 열기(새 탭)"
            >
              카톡 상담<span className="ml-1" aria-hidden>↗</span>
            </a>
            <a
              href="tel:01000000000"
              className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm font-semibold text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/40"
            >
              전화 상담
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-10">
          {/* BRAND */}
          <div>
            <p className="text-sm font-semibold text-white">BRAND</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/brand#story" className={linkBase}>
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <Link href="/brand#partner" className={linkBase}>
                  협업/제휴 문의
                </Link>
              </li>
            </ul>
          </div>

          {/* BIKE */}
          <div>
            <p className="text-sm font-semibold text-white">BIKE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/bike#rent" className={linkBase}>
                  렌트/리스 신청
                </Link>
              </li>
              <li>
                <Link href="/bike#center" className={linkBase}>
                  센터 안내
                </Link>
              </li>
            </ul>
          </div>

          {/* LogitEats */}
          <div>
            <p className="text-sm font-semibold text-white">LogitEats</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/logiteats#intro" className={linkBase}>
                  소개
                </Link>
              </li>
              <li>
                <Link href="/logiteats#process" className={linkBase}>
                  정산 절차/자동화
                </Link>
              </li>
              <li>
                <Link href="/logiteats#contact" className={linkBase}>
                  도입 문의
                </Link>
              </li>
            </ul>
          </div>

          {/* STORE */}
          <div>
            <p className="text-sm font-semibold text-white">STORE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/store" className={linkBase}>
                  모든 상품 보기
                </Link>
              </li>
              <li>
                <a
                  href="https://smartstore.naver.com/rideon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                  aria-label="네이버 스토어(새 탭)"
                >
                  네이버 스토어 <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.coupang.com/rideon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkBase}
                  aria-label="쿠팡 스토어(새 탭)"
                >
                  쿠팡 스토어 <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>

          {/* NOTICE */}
          <div>
            <p className="text-sm font-semibold text-white">NOTICE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/notice#update" className={linkBase}>
                  공지사항
                </Link>
              </li>
              <li>
                <Link href="/notice#recruit" className={linkBase}>
                  채용/알림
                </Link>
              </li>
            </ul>
          </div>

          {/* 문의하기 */}
          <div>
            <p className="text-sm font-semibold text-white">문의하기</p>
            <ul className="mt-3 space-y-2 text-sm">
              {INQUIRY_MENU.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className={linkBase}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-neutral-800" />

        {/* ====== 블록 B: Legal Bar (PC 한 줄 / 모바일 3행) ====== */}
        <div
          className="
            py-6
            grid gap-6
            sm:grid-cols-1
            md:grid-cols-1
            xl:[grid-template-columns:auto_1fr_auto] xl:items-center
          "
        >
          {/* Left: 로고 + 워드마크 */}
          <div className="flex items-center gap-3">
            <span className="relative block size-12 rounded-xl overflow-hidden ring-1 ring-neutral-800 bg-black/30">
              <Image
                src="/logo/rideon-mark.png"
                alt="RIDE ON 로고"
                fill
                className="object-contain p-2"
                sizes="48px"
                priority
              />
            </span>
            <Link href="/" aria-label="RIDE ON 홈으로 이동" className="text-white text-lg font-black">
              RIDE ON
            </Link>
          </div>

          {/* Center: 사업자 정보 (데스크탑 한 줄, 모바일 자동 줄바꿈) */}
          <div className="text-sm leading-relaxed xl:leading-none xl:whitespace-nowrap xl:overflow-x-visible">
            <span className="text-neutral-500">사업자명</span> : <span className="text-neutral-300">주식회사 패온</span>
            {" · "}
            <span className="text-neutral-500">상호명</span> : <span className="text-neutral-300">RIDE ON ( 라이드온 )</span>
            {" · "}
            <span className="text-neutral-500">대표</span> : <span className="text-neutral-300">최수호</span>
            {" · "}
            <span className="text-neutral-500">사업자등록번호</span> : <span className="text-neutral-300">896-86-02776</span>
            {" · "}
            <span className="text-neutral-500">통신판매업 신고번호</span> :{" "}
            <span className="text-neutral-300">제2025-서울강동-0001호</span>
            {" · "}
            <span className="text-neutral-500">주소</span> : <span className="text-neutral-300">서울특별시 강동구 천중로 176</span>
            {" · "}
            <span className="text-neutral-500">연락처</span> : <span className="text-neutral-300">010-1234-5678</span>
            {" · "}
            <span className="text-neutral-500">이메일</span> :{" "}
            <Link
              href="mailto:contact@ride-on.co.kr"
              className="underline underline-offset-4 decoration-neutral-700 hover:decoration-[#FFB800] hover:text-[#FFB800] transition-colors duration-300 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50"
            >
              contact@ride-on.co.kr
            </Link>
          </div>

          {/* Right: SNS 아이콘 + 정책 링크 (PC 한 줄 묶음) */}
          <div className="flex items-center justify-start xl:justify-end gap-4">
            {/* 아이콘 버튼들(모노톤, hover 시 노랑) */}
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook 새 창에서 열기"
              className="inline-flex items-center justify-center size-8 rounded-full border border-neutral-700 text-neutral-400 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors duration-300"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://blog.naver.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="블로그 새 창에서 열기"
              className="inline-flex items-center justify-center h-8 px-3 rounded-full border border-neutral-700 text-neutral-400 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors duration-300 text-xs font-semibold"
              title="Blog"
            >
              blog
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="인스타그램 새 창에서 열기"
              className="inline-flex items-center justify-center size-8 rounded-full border border-neutral-700 text-neutral-400 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors duration-300"
              title="Instagram"
            >
              ig
            </a>
            <a
              href="https://pf.kakao.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="카카오톡 채널 새 창에서 열기"
              className="inline-flex items-center justify-center size-8 rounded-full border border-neutral-700 text-neutral-400 hover:text-[#FFB800] hover:border-[#FFB800] transition-colors duration-300"
              title="KakaoTalk"
            >
              k
            </a>

            {/* 구분자 */}
            <span className="hidden xl:inline text-neutral-700">|</span>

            {/* 정책 링크 */}
            <div className="flex items-center gap-4">
              <Link href="/privacy" className="text-sm hover:text-[#FFB800] transition-colors duration-300">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-sm hover:text-[#FFB800] transition-colors duration-300">
                이용약관
              </Link>
            </div>
          </div>
        </div>

        {/* 최하단 저작권(모바일/중소 해상도에서만 표기 여백 맞춤용) */}
        <div className="py-4 border-t border-neutral-800">
          <p className="text-xs text-neutral-500 text-center">
            © {year} RIDE ON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
