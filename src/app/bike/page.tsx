// src/app/bike/page.tsx
import Link from "next/link";
import BikeIntro from "../../components/bike/BikeIntro"; // 상대경로

export default function BikePage() {
  return (
    <main className="bg-black text-white">
      <BikeIntro />

      <section id="center" className="px-6 sm:px-10 lg:px-20 py-16 border-t border-white/10">
        <h2 className="text-xl font-bold">센터 안내</h2>
        <p className="mt-2 text-gray-400">운영시간 · 정비 항목 · 오시는 길…</p>
        <div className="mt-6">
          <Link
            href="/contact?type=center"
            className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40"
          >
            문의하기
          </Link>
        </div>
      </section>
    </main>
  );
}