// src/components/MergeFlow.tsx
export default function MergeFlow() {
  const steps = [
    { title: "상담/현황 파악", desc: "지부 구조, 계약, 인원 파악" },
    { title: "계약/이관", desc: "지부 정보와 정산 포인트 이관" },
    { title: "운영 연결", desc: "기존 배송망·플릿 이어 붙이기" },
    { title: "안정화", desc: "본사 규격에 맞춰 고도화" },
  ];
  return (
    <section className="bg-[#111111] py-14">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl font-semibold text-white">지사 합병은 이렇게 진행됩니다</h2>
        <p className="mt-2 text-sm text-white/55">
          현장 중단 없이 단계별로 넘기는 구조입니다.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {steps.map((s, idx) => (
            <div
              key={s.title}
              className="rounded-2xl border border-white/5 bg-[#121212] p-5"
            >
              <p className="text-xs text-white/35">STEP {idx + 1}</p>
              <p className="mt-3 text-base font-medium text-white">{s.title}</p>
              <p className="mt-2 text-sm text-white/45">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
