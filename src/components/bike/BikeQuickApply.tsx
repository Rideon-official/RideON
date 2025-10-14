// src/components/bike/BikeQuickApply.tsx
import Link from "next/link";

export default function BikeQuickApply() {
  return (
    <section
      id="apply"
      className="bg-black text-white border-t border-white/10"
      aria-labelledby="apply-heading"
    >
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <h2 id="apply-heading" className="text-2xl sm:text-3xl font-extrabold">
          렌트/리스 신청
        </h2>
        <p className="mt-3 text-neutral-300">
          신용조회 없이 간편 절차로 시작하세요. 라이더 중심 지원으로 처음부터 끝까지 동행합니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact?type=rent"
            className="inline-flex items-center rounded-xl bg-brandYellow px-5 py-3 font-semibold text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brandYellow/40"
          >
            문의하기
          </Link>
          <Link
            href="/contact?type=apply"
            className="inline-flex items-center rounded-xl border border-neutral-700 px-5 py-3 font-semibold hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-brandYellow/40"
          >
            신청하기
          </Link>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          ※ 200콜 이상 수행 시 하루 4,000원 지원 · 마지막 달 면제(PCX 기준). 세부 조건은 상담/계약서 기준으로 안내됩니다.
        </p>
      </div>
    </section>
  );
}