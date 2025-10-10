export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section
        id="hero"
        className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-24"
      >
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-extrabold tracking-tight text-neutral-900 leading-[1.05] text-[clamp(32px,6vw,56px)]">
              전국을 잇는 배달 네트워크1,
              <span className="block text-blue-600">RIDE ON</span>
            </h1>

            <p className="mt-5 text-neutral-600 text-lg sm:text-xl">
              지사장 맞춤형 <b>정산·렌탈·관리</b>까지 한 번에.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold hover:bg-neutral-800"
              >
                지사 등록하기
              </a>
              <a
                href="#partner"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-900 hover:text-white"
              >
                합병·파트너십 제안
              </a>
            </div>
          </div>

          {/* 우측 비주얼 – 현재는 플레이스홀더 */}
          <div
            className="h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200"
            aria-hidden
          />
        </div>
      </section>

      {/* 아래에 기존 섹션들 그대로 두면 됩니다 */}
    </main>
  );
}
<section id="partner" className="sr-only" aria-hidden />
<section id="contact" className="sr-only" aria-hidden />