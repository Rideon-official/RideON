export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            전국 1등 배달 운영 플랫폼
          </h1>
          <p className="mt-4 text-zinc-600">
            쿠팡이츠플러스 · 배민플러스 · 렌트/리스 운영 대행을 한 번에.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#contact" className="px-5 py-3 rounded-xl bg-black text-white font-bold">운영 대행 신청</a>
            <a href="/merge" className="px-5 py-3 rounded-xl border border-black font-bold hover:bg-black hover:text-white">합병·파트너 제안</a>
          </div>
        </div>
        <div className="rounded-2xl aspect-video bg-gradient-to-br from-zinc-100 to-zinc-200" aria-hidden />
      </div>
    </section>
  );
}
