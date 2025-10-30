export default function Stats() {
  const items = [
    { label: "전국 지부", value: "25", desc: "전국 단위 커버리지" },
    { label: "월간 처리 물량", value: "1,000,000+", desc: "배달·물류 누적 기준" },
    { label: "운영 가동률", value: "99.2%", desc: "중단 없이 운영" },
  ];

  return (
    <section className="bg-[#0E0E0E] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
            NETWORK
          </p>
          <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-white">
            전국 단위 운영 지표
          </h2>
          <p className="mt-2 text-sm text-white/60">
            지점이 늘어나도 동일한 KPI로 관리되는 구조입니다.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.label}
              className="rounded-2xl border border-white/5 bg-[#121212] p-7 text-white transition-all duration-200 hover:border-white/15 hover:bg-[#151515]"
            >
              <p className="text-sm text-white/45">{it.label}</p>
              <p className="mt-3 text-[32px] font-semibold leading-tight text-white">
                {it.value}
              </p>
              <p className="mt-2 text-xs text-white/35">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
