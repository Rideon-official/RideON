export default function BrandPage() {
  return (
    <main className="px-6 sm:px-10 lg:px-20 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">BRAND</h1>
        <p className="mt-2 text-gray-300">브랜드 스토리와 파트너십 안내</p>
      </header>

      <section id="story" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">브랜드 스토리</h2>
        <p className="mt-2 text-gray-400">RIDE ON의 시작과 비전…</p>
      </section>

      <section id="partner" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">협업/제휴 문의</h2>
        <p className="mt-2 text-gray-400">파트너 제안, 공동 프로모션, 로고 사용 가이드…</p>
      </section>
    </main>
  );
}
