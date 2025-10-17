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
    <footer
      className="mt-20 bg-[#111111] text-neutral-400 tracking-tight border-t border-neutral-800"
      role="contentinfo"
      aria-label="RIDE ON 사이트 푸터"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20">
        {/* ===== A. 메뉴판(기존 유지, hover=옐로) ===== */}
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
              카톡 상담 <span className="ml-1" aria-hidden>↗</span>
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
              <li><Link href="/brand#story" className={linkBase}>브랜드 스토리</Link></li>
              <li><Link href="/brand#partner" className={linkBase}>협업/제휴 문의</Link></li>
            </ul>
          </div>

          {/* BIKE */}
          <div>
            <p className="text-sm font-semibold text-white">BIKE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/bike#rent" className={linkBase}>렌트/리스 신청</Link></li>
              <li><Link href="/bike#center" className={linkBase}>센터 안내</Link></li>
            </ul>
          </div>

          {/* LogitEats */}
          <div>
            <p className="text-sm font-semibold text-white">LogitEats</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/logiteats#intro" className={linkBase}>소개</Link></li>
              <li><Link href="/logiteats#process" className={linkBase}>정산 절차/자동화</Link></li>
              <li><Link href="/logiteats#contact" className={linkBase}>도입 문의</Link></li>
            </ul>
          </div>

          {/* STORE */}
          <div>
            <p className="text-sm font-semibold text-white">STORE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/store" className={linkBase}>모든 상품 보기</Link></li>
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
              <li><Link href="/notice#update" className={linkBase}>공지사항</Link></li>
              <li><Link href="/notice#recruit" className={linkBase}>채용/알림</Link></li>
            </ul>
          </div>

          {/* 문의하기 */}
          <div>
            <p className="text-sm font-semibold text-white">문의하기</p>
            <ul className="mt-3 space-y-2 text-sm">
              {INQUIRY_MENU.map((item) => (
                <li key={item.key}>
                  <Link href={item.href} className={linkBase}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== B. 구분선 ===== */}
        <div className="border-t border-neutral-800" />

        {/* ===== C. 하단 메인 레이아웃: 좌|중|우 (Desktop 3열 / Mobile 1열) ===== */}
        <div
          className="
            py-8
            grid gap-y-8 gap-x-8
            lg:[grid-template-columns:auto_1fr_auto]
          "
        >
          {/* C-Left: 로고 */}
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

         {/* C-Center: 사업자 정보 — 항목별 줄바꿈 리스트 */}
<section aria-labelledby="business-info-title" className="text-sm">
  <h2 id="business-info-title" className="sr-only">사업자 정보</h2>

  {/* 라벨/값 2열 그리드, 각 항목은 '한 줄'로 내려쓰기 */}
  <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-neutral-400 tracking-tight">
    <dt className="text-neutral-500">사업자명</dt>
    <dd className="text-neutral-300">주식회사 패온</dd>

    <dt className="text-neutral-500">상호명</dt>
    <dd className="text-neutral-300">RIDE ON ( 라이드온 )</dd>

    <dt className="text-neutral-500">대표</dt>
    <dd className="text-neutral-300">최수호</dd>

    <dt className="text-neutral-500">사업자등록번호</dt>
    <dd className="text-neutral-300">896-86-02776</dd>

    <dt className="text-neutral-500 whitespace-nowrap">통신판매업 신고번호</dt>
    <dd className="text-neutral-300">제2025-서울강동-0001호</dd>

    <dt className="text-neutral-500">주소</dt>
    <dd className="text-neutral-300 break-words">
      서울특별시 강동구 천중로 176
    </dd>

    <dt className="text-neutral-500">연락처</dt>
    <dd className="text-neutral-300">010-1234-5678</dd>

    <dt className="text-neutral-500">이메일</dt>
    <dd>
      <Link
        href="mailto:contact@ride-on.co.kr"
        className="text-neutral-300 underline underline-offset-4 decoration-neutral-700
                   transition-colors duration-300 hover:text-[#FFB800] hover:decoration-[#FFB800]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50 rounded"
      >
        contact@ride-on.co.kr
      </Link>
    </dd>
  </dl>
</section>

          {/* C-Right: 3줄 스택(우측 정렬) */}
          <div className="flex flex-col items-start lg:items-end text-left lg:text-right gap-3">
            {/* Top: 소셜 원형 버튼(브랜드 옐로 인터랙션) */}
            <div className="flex items-center gap-3">
              {/* 선택: 작은 브랜드 마크 */}
              <span
                aria-hidden
                className="inline-flex items-center justify-center size-10 rounded-full border border-neutral-700 text-neutral-300 text-xs font-semibold
                           transition-colors duration-300 hover:bg-[#FFB800] hover:text-[#111111] hover:border-[#FFB800]"
                title="RIDE ON"
              >
                RO
              </span>

              {[
                { href: "https://blog.naver.com/", label: "Blog", text: "blog" },
                { href: "https://www.instagram.com/", label: "Instagram", text: "ig" },
                { href: "https://www.threads.net/", label: "Threads", text: "th" },
                { href: "https://www.youtube.com/", label: "YouTube", text: "yt" },
                { href: "https://pf.kakao.com/", label: "KakaoTalk", text: "k" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} 새 창에서 열기`}
                  className="
                    inline-flex items-center justify-center size-10 rounded-full
                    border border-neutral-700 text-neutral-300 text-xs font-semibold tracking-tight
                    transition-colors duration-300
                    hover:bg-[#FFB800] hover:text-[#111111] hover:border-[#FFB800]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50
                  "
                  title={s.label}
                >
                  {s.text}
                </a>
              ))}
            </div>

            {/* Middle: 정책 링크 */}
            <div className="flex items-center gap-4 text-sm">
              <Link href="/privacy" className="transition-colors duration-300 hover:text-[#FFB800]">
                개인정보처리방침
              </Link>
              <span className="text-neutral-700">|</span>
              <Link href="/terms" className="transition-colors duration-300 hover:text-[#FFB800]">
                이용약관
              </Link>
            </div>

            {/* Bottom: 카피라이트 */}
            <p className="text-xs text-neutral-500">© {year} RIDE ON. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
