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
      className="mt-20 bg-[#0E0E0E] text-neutral-400 tracking-tight border-t border-neutral-800"
      role="contentinfo"
      aria-label="RIDE ON 사이트 푸터"
    >
      {/* ===== 상단 컨테이너 ===== */}
      <div className="mx-auto max-w-7xl px-6">
        {/* ============== A. 상단 CTA ============== */}
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

        {/* ============== 메뉴 그리드 ============== */}
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
                <Link href="/bike#guide" className={linkBase}>
                  렌트/리스 안내
                </Link>
              </li>
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

        {/* ============== 구분선 ============== */}
        <div className="border-t border-neutral-800" />
      </div>

      {/* ===== 하단 블록 (로고 / 회사정보 / 회사 연락처 / 회사소개+아이콘) ===== */}
      <div className="mx-auto max-w-[80rem] px-6">
        <div
          className="
            py-12 lg:py-14
            grid gap-y-10 gap-x-12
            grid-cols-1 sm:grid-cols-2
            lg:[grid-template-columns:200px_minmax(0,1.25fr)_minmax(0,1.25fr)_minmax(0,1.1fr)]
          "
        >
          {/* 1. 로고 섹션 (로고 + 텍스트, 둘 다 홈 링크) */}
          <Link
            href="/"
            aria-label="RIDE ON 홈으로 이동"
            className="flex flex-col items-start justify-center gap-2 group"
          >
            <span className="relative h-14 w-14 sm:h-16 sm:w-16 overflow-hidden">
              <Image
                src="/logo/rideon-mark.png"
                alt="RIDE ON 로고"
                fill
                className="object-contain"
                sizes="64px"
                priority
              />
            </span>
            <span className="text-white text-xl font-black tracking-tight group-hover:text-[#FFB800] transition-colors duration-300">
              RIDE ON
            </span>
          </Link>

          {/* 2. 회사정보 */}
          <section
            aria-labelledby="biz-info-left"
            className="self-center"
          >
            <h3
              id="biz-info-left"
              className="text-sm font-semibold text-white mb-3"
            >
              회사정보
            </h3>
            <dl className="grid grid-cols-[minmax(110px,auto)_1fr] gap-x-3 gap-y-1.5 text-sm tracking-tight">
              <dt className="text-neutral-500">사업자명</dt>
              <dd className="text-neutral-300 sm:whitespace-nowrap">
                주식회사 패온
              </dd>

              <dt className="text-neutral-500">상호명</dt>
              <dd className="text-neutral-300 sm:whitespace-nowrap">
                RIDE ON ( 라이드온 )
              </dd>

              <dt className="text-neutral-500">대표</dt>
              <dd className="text-neutral-300 sm:whitespace-nowrap">
                최수호
              </dd>

              <dt className="text-neutral-500">사업자등록번호</dt>
              <dd className="text-neutral-300 sm:whitespace-nowrap">
                896-86-02776
              </dd>
            </dl>
          </section>

          {/* 3. 회사 연락처 */}
          <section
            aria-labelledby="biz-contact"
            className="self-center"
          >
            <h3
              id="biz-contact"
              className="text-sm font-semibold text-white mb-3"
            >
              회사 연락처
            </h3>
            <dl className="grid grid-cols-[minmax(110px,auto)_1fr] gap-x-3 gap-y-1.5 text-sm tracking-tight">
              <dt className="text-neutral-500 whitespace-nowrap">
                통신판매업 신고번호
              </dt>
              <dd className="text-neutral-300 sm:whitespace-nowrap">
                제2025-서울강동-0001호
              </dd>

              <dt className="text-neutral-500">주소</dt>
              <dd className="text-neutral-300 whitespace-normal sm:whitespace-nowrap">
                서울특별시 강동구 천중로 176
              </dd>

              <dt className="text-neutral-500">연락처</dt>
              <dd className="text-neutral-300 sm:whitespace-nowrap">
                010-1234-5678
              </dd>

              <dt className="text-neutral-500">이메일</dt>
              <dd className="sm:whitespace-nowrap">
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

          {/* 4. 회사소개 / 아이콘 / 정책 / 저작권 */}
          <div className="flex flex-col justify-center items-start lg:items-end text-left lg:text-right gap-4">
            {/* 상단 링크 4개 */}
            <nav
              aria-label="회사 주요 링크"
              className="flex flex-wrap gap-x-5 gap-y-2 text-sm"
            >
              {[
                { href: "/about", label: "회사소개" },
                { href: "/partnership", label: "제휴제안" },
                { href: "/location", label: "찾아오시는길" },
                { href: "/notice", label: "공지사항" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-neutral-300 whitespace-nowrap transition-colors duration-300 hover:text-[#FFB800]"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            {/* 소셜 아이콘 */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Naver Blog */}
              <a
                href="https://blog.naver.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="네이버 블로그 새 창에서 열기"
                className="inline-flex items-center justify-center size-10 rounded-full border border-neutral-700 text-neutral-300 transition-colors duration-300 hover:bg-[#FFB800] hover:text-[#111111] hover:border-[#FFB800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50"
                title="Naver Blog"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8 16V8l8 8V8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="유튜브 새 창에서 열기"
                className="inline-flex items-center justify-center size-10 rounded-full border border-neutral-700 text-neutral-300 transition-colors duration-300 hover:bg-[#FFB800] hover:text-[#111111] hover:border-[#FFB800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50"
                title="YouTube"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path
                    d="M22 12c0-3-.5-4-1.1-4.6-.7-.8-2.9-.9-8.9-.9s-8.2.1-8.9.9C2.5 8 2 9 2 12s.5 4 1.1 4.6c.7.8 2.9.9 8.9.9s8.2-.1 8.9-.9C21.5 16 22 15 22 12Z"
                    fill="currentColor"
                  />
                  <path d="M10 9.5v5l4.5-2.5L10 9.5Z" fill="currentColor" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="인스타그램 새 창에서 열기"
                className="inline-flex items-center justify-center size-10 rounded-full border border-neutral-700 text-neutral-300 transition-colors duration-300 hover:bg-[#FFB800] hover:text-[#111111] hover:border-[#FFB800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50"
                title="Instagram"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  fill="none"
                >
                  <rect
                    x="4"
                    y="4"
                    width="16"
                    height="16"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                </svg>
              </a>

              {/* Threads */}
              <a
                href="https://www.threads.net/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="쓰레드 새 창에서 열기"
                className="inline-flex items-center justify-center size-10 rounded-full border border-neutral-700 text-neutral-300 transition-colors duration-300 hover:bg-[#FFB800] hover:text-[#111111] hover:border-[#FFB800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50"
                title="Threads"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  fill="none"
                >
                  <path
                    d="M12 3c5 0 9 4 9 9s-4 9-9 9S3 17 3 12 7 3 12 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M8.5 12c0-2 1.6-3.5 3.6-3.5 1.8 0 3.4 1 3.6 3 .2 1.8-1.6 3-3.6 3h-1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M12 9.5c-.9 0-1.6.7-1.6 1.5s.7 1.5 1.6 1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </a>

              {/* KakaoTalk */}
              <a
                href="https://pf.kakao.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="카카오톡 채널 새 창에서 열기"
                className="inline-flex items-center justify-center size-10 rounded-full border border-neutral-700 text-neutral-300 transition-colors duration-300 hover:bg-[#FFB800] hover:text-[#111111] hover:border-[#FFB800] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/50"
                title="KakaoTalk"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                  fill="none"
                >
                  <path
                    d="M12 4.5c-4.4 0-8 2.7-8 6s3.6 6 8 6c.4 0 .8 0 1.2-.1L16 18l-.7-1.8C17.8 14.9 20 13 20 10.5c0-3.3-3.6-6-8-6Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>

            {/* 정책 + 카피 */}
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-[#FFB800]"
              >
                개인정보처리방침
              </Link>
              <span className="text-neutral-700">|</span>
              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-[#FFB800]"
              >
                이용약관
              </Link>
            </div>
            <p className="text-xs text-neutral-500">
              © {year} RIDE ON. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
