import Link from "next/link";

export default function BikeIntro() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              누구나 오늘부터 탈 수 있는 <span className="text-brand">BIKE</span>
            </h1>
            <p className="mt-4 text-lg text-neutral-300">
              신용조회 없음 · 간편 절차 · 라이더 중심 지원
            </p>
            <div className="mt-6 rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
              <p className="text-sm text-neutral-300">
                <span className="mr-2 inline-flex h-6 items-center rounded-md bg-brand px-2 text-sm font-bold text-black">
                  혜택
                </span>
                200콜 이상 수행 시 <strong>하루 4,000원 지원</strong> ·{" "}
                <strong>마지막 달 면제(PCX 기준)</strong>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact?type=rent"
                className="inline-flex items-center rounded-xl bg-brand px-5 py-3 font-semibold text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                문의하기
              </Link>
              <Link
                href="/contact?type=apply"
                className="inline-flex items-center rounded-xl border border-neutral-700 px-5 py-3 font-semibold hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/40"
              >
                신청하기
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800">
            <div className="absolute inset-0 grid place-items-center">
              <div className="rounded-xl border border-neutral-700 px-4 py-2 text-sm text-neutral-400">
                배달세팅(거치대/배달통) · 정비 · 사고 대차 지원
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "간편 절차", desc: "비대면 전자계약으로 빠르게 시작" },
            { title: "보험 옵션", desc: "유상운송 종합/책임 중 선택" },
            { title: "정비·대차", desc: "고장·사고 시 대차 지원(범위 내)" },
            { title: "배달 세팅", desc: "거치대/배달통 등 장착 지원" },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <h3 className="text-base font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="text-2xl font-extrabold">진행 절차</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "1", title: "신청", desc: "온라인 간편 신청" },
            { step: "2", title: "일정확인", desc: "상담·서류 안내" },
            { step: "3", title: "전자계약", desc: "비대면 서명" },
            { step: "4", title: "인도", desc: "세팅 완료 차량 수령" },
          ].map((s) => (
            <li key={s.step} className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand font-bold text-black">
                  {s.step}
                </span>
                <h3 className="text-base font-bold">{s.title}</h3>
              </div>
              <p className="mt-2 text-sm text-neutral-300">{s.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact?type=rent"
            className="inline-flex items-center rounded-xl bg-brand px-5 py-3 font-semibold text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-brand/40"
          >
            문의하기
          </Link>
          <Link
            href="/contact?type=apply"
            className="inline-flex items-center rounded-xl border border-neutral-700 px-5 py-3 font-semibold hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-brand/40"
          >
            신청하기
          </Link>
        </div>

        <p className="mt-6 text-xs text-neutral-400">
          ※ 지원/대차 범위, 배달세팅 구성, 보험 선택 가능 항목은 계약서 및 운영정책에 따릅니다. 상담 시 정확히 안내됩니다.
        </p>
      </div>
    </section>
  );
}