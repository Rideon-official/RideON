// src/components/layout/footer.tsx
export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-[#111111] text-gray-300">
      <div className="mx-auto max-w-screen-xl px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col gap-3 items-start md:items-center md:flex-row md:justify-between py-8">
          <h3 className="text-xl font-bold text-white">전국 운영/정산/렌트 — RIDE ON과 시작하세요</h3>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://pf.kakao.com/_link"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg border border-[#FFB800] px-4 py-2 text-sm font-semibold text-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40"
              aria-label="카카오톡 상담 열기(새 탭)"
            >
              카톡 상담 ↗
            </a>
            <a
              href="tel:01000000000"
              className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm font-semibold text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40"
            >
              전화 상담
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-10">
          <div>
            <p className="text-sm font-semibold text-white">BRAND</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded" href="/brand#story">브랜드 스토리</a></li>
              <li><a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded" href="/brand#partner">협업/제휴 문의</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">BIKE</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded" href="/contact?type=apply">렌트/리스 신청</a></li>
              <li><a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40 rounded" href="/bike#center">센터 안내</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">LogitEats</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a className="hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFB