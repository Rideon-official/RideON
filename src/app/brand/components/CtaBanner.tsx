"use client";

export default function CtaBanner() {
  return (
    <section className="py-12 border-t border-white/10">
      <div className="rounded-2xl border border-white/10 bg-[#1A1A1A]/70 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h3 className="text-xl md:text-2xl font-extrabold text-white">RIDE ON과 함께 성장하세요</h3>
          <p className="mt-2 text-gray-300">도입/제휴/렌트 상담을 도와드립니다.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href="/contact?type=partner"
            className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm font-semibold text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40"
          >
            제휴 문의
          </a>
          <a
            href="/bike#rent"
            className="inline-flex items-center rounded-lg border border-neutral-600 px-4 py-2 text-sm font-semibold text-gray-200 hover:text-[#FFB800] hover:border-[#FFB800] hover:bg-[#FFB800]/10 focus:outline-none focus:ring-2 focus:ring-[#FFB800]/40"
          >
            렌트·리스 상담
          </a>
        </div>
      </div>
    </section>
  );
}
