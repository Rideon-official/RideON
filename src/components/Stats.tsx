// src/components/Stats.tsx
export default function Stats() {
  const items = [
    { label: "전국 지부", value: "25", desc: "전국 단위 커버리지" },
    { label: "월간 처리 물량", value: "1,000,000+", desc: "배달·물류 누적 기준" },
    { label: "운영 가동률", value: "99.2%", desc: "중단 없이 운영" },
  ];

  return (
    <section className="bg-[#0E0E0E] py-10">
      <div className="mx-auto max-w-6xl px-4 grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="rounded-2xl border border-white/5 bg-[#121212] p-6"
          >
            <p className="text-sm text-white/40">{it.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{it.value}</p>
            <p className="mt-2 text-xs text-white/30">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
