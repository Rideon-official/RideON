export default function NoticePage() {
  return (
    <main className="px-6 sm:px-10 lg:px-20 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">NOTICE</h1>
        <p className="mt-2 text-gray-300">업데이트 · 채용/알림</p>
      </header>

      <section id="update" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">업데이트</h2>
        <ul className="mt-3 space-y-3 text-gray-400">
          <li>– 릴리스 노트/변경 사항 (예정)</li>
        </ul>
      </section>

      <section id="recruit" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">채용/알림</h2>
        <p className="mt-2 text-gray-400">채용 공고/알림 등록 (예정)</p>
      </section>
    </main>
  );
}
