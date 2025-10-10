export default function Stats() {
  const stats = [
    { k:"1,000+", v:"누적 라이더" },
    { k:"25",    v:"운영 지역" },
    { k:"10,000+", v:"일평균 배달(추정치)" },
  ];
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">실적 & 전국 운영 현황</h2>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {stats.map(s=>(
            <div key={s.v} className="rounded-2xl bg-white p-8 border">
              <div className="text-3xl md:text-4xl font-extrabold">{s.k}</div>
              <div className="mt-2 text-zinc-600">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
