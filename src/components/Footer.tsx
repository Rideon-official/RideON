// src/components/Footer.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="w-full bg-[#111111] text-neutral-400 tracking-tight border-t border-neutral-800"
      role="contentinfo"
      aria-label="RIDE ON 사이트 푸터"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-20 py-12 space-y-10">
        {/* 상단 블록 */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* 좌: 로고 */}
          <div className="shrink-0">
            <Link
              href="/"
              aria-label="RIDE ON 홈으로 이동"
              className="inline-flex items-center gap-3 group"
            >
              <span className="relative block size-16 rounded-xl overflow-hidden ring-1 ring-neutral-800">
                <Image
                  src="/logo/rideon-mark.png"
                  alt="RIDE ON 로고"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </span>
              <span className="text-lg md:text-xl font-black text-white">RIDE ON</span>
            </Link>
          </div>

          {/* 우: 링크 그룹 2열 */}
          <div className="w-full md:max-w-2xl">
            <nav aria-labelledby="footer-links-title">
              <h2 id="footer-links-title" className="sr-only">
                푸터 링크
              </h2>
              {/* 모바일: 2열 카드식, 데스크탑: 두 열 정렬 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2">
                {/* 그룹 1 */}
                <ul aria-label="회사 정보" className="space-y-2 rounded-lg border border-neutral-800 p-4 md:p-5">
                  <li>
                    <Link
                      href="/about"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                    >
                      회사소개
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/partnership"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                    >
                      제휴제안
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/location"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                    >
                      찾아오시는길
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/notice"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                    >
                      공지사항
                    </Link>
                  </li>
                </ul>

                {/* 그룹 2 */}
                <ul aria-label="채널 & 미디어" className="space-y-2 rounded-lg border border-neutral-800 p-4 md:p-5">
                  <li>
                    <Link
                      href="https://blog.naver.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                      aria-label="블로그 새 창에서 열기"
                    >
                      블로그
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                      aria-label="인스타그램 새 창에서 열기"
                    >
                      인스타그램
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.threads.net/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                      aria-label="쓰레드 새 창에서 열기"
                    >
                      쓰레드
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
                      aria-label="유튜브 새 창에서 열기"
                    >
                      유튜브
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-neutral-800" />

        {/* 중단 블록: 사업자 정보 */}
        <section aria-labelledby="business-info-title" className="text-sm leading-relaxed">
          <h2 id="business-info-title" className="sr-only">
            사업자 정보
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            <p><span className="text-neutral-500">사업자명</span> : RIDE ON</p>
            <p><span className="text-neutral-500">대표</span> : 한선규</p>
            <p><span className="text-neutral-500">사업자등록번호</span> : 123-45-67890</p>
            <p className="sm:col-span-1 lg:col-span-1">
              <span className="text-neutral-500">통신판매업 신고번호</span> : 제2025-서울강동-0001호
            </p>
            <p className="sm:col-span-2 lg:col-span-1">
              <span className="text-neutral-500">주소</span> : 서울특별시 강동구 ○○로 123
            </p>
            <p><span className="text-neutral-500">연락처</span> : 02-1234-5678</p>
            <p className="sm:col-span-2 lg:col-span-1">
              <span className="text-neutral-500">이메일</span> :{" "}
              <Link
                href="mailto:contact@ride-on.co.kr"
                className="underline underline-offset-4 decoration-neutral-700 hover:decoration-[#FFB800] transition-colors duration-300 hover:text-[#FFB800] rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60"
              >
                contact@ride-on.co.kr
              </Link>
            </p>
          </div>
        </section>

        {/* 구분선 */}
        <div className="border-t border-neutral-800" />

        {/* 하단 블록 */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="text-sm transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
            >
              개인정보처리방침
            </Link>
            <span className="hidden md:inline text-neutral-700">|</span>
            <Link
              href="/terms"
              className="text-sm transition-colors duration-300 hover:text-[#FFB800] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB800]/60 rounded"
            >
              이용약관
            </Link>
          </div>

          <p className="text-xs text-neutral-500">
            © 2025 RIDE ON. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
