export default function MergeFlow() {
  const steps = [
    { title: "상담/현황 파악", desc: "지부 구조, 계약, 인원 파악" },
    { title: "계약/이관", desc: "지부 정보와 정산 포인트 이관" },
    { title: "운영 연결", desc: "기존 배송망·플릿 이어 붙이기" },
    { title: "안정화", desc: "본사 규격에 맞춰 고도화" },
  ];

  return (
    <section className="relative bg-[#0E0E0E] py-14 lg:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 lg:mb-10">
          <p className="text-xs font-semibold tracking-[.2em] text-white/35 uppercase">
            MERGE FLOW
          </p>
          <h2 className="mt-2 text-[22px] md:text-[26px] font-semibold text-white">
            지사 합병은 이렇게 진행됩니다
          </h2>
          <p className="mt-2 text-sm text-white/60">
            현장 중단 없이 단계별로 안정적으로 연결되는 구조입니다.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="relative rounded-2xl border border-white/5 bg-[#121212] p-6 text-white transition-all duration-200 hover:border-[#FFB800]/35 hover:bg-[#1A1A1A]/95"
            >
              <p className="text-xs text-white/40">STEP {idx + 1}</p>
              <p className="mt-3 text-[16px] font-semibold text-white">{s.title}</p>
              <p className="mt-2 text-sm text-white/55">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
      {/* ⛔️ 패턴 지움 */}
    </section>
  );
}
