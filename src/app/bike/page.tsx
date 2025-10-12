import Link from "next/link";

export default function BikePage() {
  return (
    <main className="px-6 sm:px-10 lg:px-20 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">RIDE ON BIKE</h1>
        <p className="mt-2 text-gray-300">렌트/리스 · 정비 · 센터 안내</p>
      </header>

      <section id="rent" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">렌트/리스 신청</h2>
        <p className="mt-2 text-gray-400">요금제/서류/인도 절차…</p>
        <div className="mt-4">
          <Link href="/contact?type=rent" className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40">
            상담 신청
          </Link>
        </div>
      </section>

      <section id="center" className="py-10 border-t border-white/10">
        <h2 className="text-xl font-bold text-white">센터 안내</h2>
        <p className="mt-2 text-gray-400">운영시간 · 정비 항목 · 오시는 길…</p>
      </section>
    </main>
  );
}
