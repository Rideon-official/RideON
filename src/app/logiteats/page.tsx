export default function LogitEatsPage() {
  return (
    <main className="px-6 sm:px-10 lg:px-20 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">LogitEats</h1>
        <p className="mt-2 text-gray-300">소개 · 정산 자동화 · 도입 문의</p>
      </header>

      <section id="intro" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">소개</h2>
        <p className="mt-2 text-gray-400">정산 리포트/알림/CSV·API…</p>
      </section>

      <section id="process" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">정산 절차/자동화</h2>
        <p className="mt-2 text-gray-400">데이터 수집 → 검증 → 알림/리포트…</p>
      </section>

      <section id="contact" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">도입 문의</h2>
        <p className="mt-2 text-gray-400">데모/견적 요청 링크 등…</p>
      </section>
    </main>
  );
}
