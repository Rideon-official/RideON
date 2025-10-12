export default function StorePage() {
  return (
    <main className="px-6 sm:px-10 lg:px-20 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">RIDER STORE</h1>
        <p className="mt-2 text-gray-300">공식 굿즈/장비/소모품</p>
      </header>

      <section className="py-10 border-t border-white/10">
        <p className="text-gray-400">스토어 카탈로그/카테고리 영역(추가 예정)…</p>
        <div className="mt-6 flex gap-2">
          <a href="https://smartstore.naver.com/rideon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40" aria-label="네이버 스토어 새 탭">
            네이버 스토어 ↗
          </a>
          <a href="https://store.coupang.com/rideon" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40" aria-label="쿠팡 스토어 새 탭">
            쿠팡 스토어 ↗
          </a>
        </div>
      </section>
    </main>
  );
}
