export default function Stats() {
  const stats = [
    { k: "지부",     v: "25개" },
    { k: "월 처리",  v: "100만 건" },
    { k: "출고율",   v: "99.2%" },
  ];

  return (
    <section className="bg-[#111111]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Eyebrow 라벨: 자간/대문자 고정 */}
        <p className="text-xs uppercase tracking-widest text-white/50">KPI</p>
        <h2 className="mt-2 text-2xl md:text-3xl font-extrabold text-white">
          실적 & 전국 운영 현황
        </h2>

        {/* KPI 배지 3개: 값(굵게) + 라벨(60%) */}
        <ul className="mt-6 flex flex-wrap items-center gap-3">
          {stats.map((s) => (
            <li
              key={s.k}
              className="rounded-full border border-white/15 px-4 py-2"
            >
              <span className="text-white font-semibold">{s.v}</span>
              <span className="ml-1 text-white/60">{s.k}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
