"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#111111] text-gray-300">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-20">
        {/* Top: CTA */}
        <div className="flex flex-col gap-3 items-start md:items-center md:flex-row md:justify-between py-8">
          <h3 className="text-xl font-bold text-white">전국 운영/정산/렌트 — RIDE ON과 시작하세요</h3>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://pf.kakao.com/_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-[#FFB800] px-4 py-2 text-sm font-semibold text-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40"
              aria-label="카카오톡 상담 열기(새 탭)"
            >
              카톡 상담<span className="ml-1" aria-hidden>↗</span>
            </a>
            <a
              href="tel:01000000000"
              className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm font-semibold text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40"
            >
              전화 상담
            </a>
          </div>
        </div>

        {/* Middle: link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 py-10">
          <div>
            <p className="text-sm font-semibold text-white">BRAND</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/brand#story" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">브랜드 스토리</Link></li>
              <li><Link href="/apply/branch-merge" outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">협업/제휴 문의</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">BIKE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/bike#rent" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">렌트/리스 신청</Link></li>
              <li><Link href="/bike#center" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">센터 안내</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">LogitEats</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/logiteats#intro" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">소개</Link></li>
              <li><Link href="/logiteats#process" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">정산 절차/자동화</Link></li>
              <li><Link href="/logiteats#contact" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">도입 문의</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">STORE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/store" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">모든 상품 보기</Link></li>
              <li>
                <a
                  href="https://smartstore.naver.com/rideon"
                  target="_blank" rel="noopener noreferrer"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded"
                  aria-label="네이버 스토어(새 탭)"
                >
                  네이버 스토어 <span aria-hidden>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://store.coupang.com/rideon"
                  target="_blank" rel="noopener noreferrer"
                  className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded"
                  aria-label="쿠팡 스토어(새 탭)"
                >
                  쿠팡 스토어 <span aria-hidden>↗</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">NOTICE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/notice#update" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">공지사항</Link></li>
              <li><Link href="/notice#recruit" className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded">채용/알림</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom: legal */}
        <div className="border-t border-white/10 py-6 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-gray-400">© {new Date().getFullYear()} RIDE ON. All rights reserved.</p>
          <p className="text-gray-500">사업자등록·통신판매 신고 정보는 공지사항에서 확인하세요.</p>
        </div>
      </div>
    </footer>
  );
}
