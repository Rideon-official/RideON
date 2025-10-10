export default function Services() {
  const items = [
    { title:"운영 대행", desc:"쿠팡이츠플러스 / 배민플러스 점주 맞춤 운영 전담", cta:"#contact" },
    { title:"렌트·리스", desc:"오토바이·보험·정비 One‑stop 제공", cta:"#contact" },
    { title:"플랫폼 연동", desc:"통합 리포트·정산 시스템으로 투명한 매출관리", cta:"#ridy" },
  ];
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">핵심 서비스</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {items.map((it)=>(
            <a key={it.title} href={it.cta}
              className="rounded-2xl border p-6 hover:shadow-lg transition">
              <h3 className="font-bold text-xl">{it.title}</h3>
              <p className="mt-2 text-zinc-600">{it.desc}</p>
              <span className="mt-4 inline-block font-semibold">바로가기 →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
