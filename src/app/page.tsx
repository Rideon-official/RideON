export default function Home() {
  return (
    <main>
      {/* Hero 섹션 */}
      <section
        id="hero"
        className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-24"
      >
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-10 items-center">
          {/* Left : Copy */}
          <div>
            {/* 타이틀 */}
            <h1 className="font-black tracking-[-0.02em] text-neutral-900 leading-[1.08] text-[clamp(38px,6.4vw,64px)] whitespace-nowrap">
              전국을 잇는 배달 네트워크,
              <span className="block text-blue-600">RIDE ON</span>
            </h1>

            {/* 서브 카피 1 */}
            <p className="mt-4 text-neutral-800 text-base sm:text-lg lg:text-xl">
              전국 1위 <b>25개 지부</b>와 함께 만드는 새로운 연결.
            </p>

            {/* 서브 카피 2 */}
            <p className="mt-1 text-neutral-600 text-base sm:text-lg">
              지사장 맞춤형 <b>정산·관리·렌탈·리스</b>까지 한 번에.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 font-semibold hover:bg-neutral-800"
              >
                기사 가입 문의
              </a>

              <a
                href="#partner"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-900 px-5 py-3 font-semibold hover:bg-neutral-900 hover:text-white"
              >
                지사장·합병 제안
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-neutral-300 px-5 py-3 font-medium hover:bg-neutral-100"
              >
                서비스 살펴보기
              </a>
            </div>
          </div>

          {/* Right : Visual (임시 플레이스홀더) */}
          <div
            className="h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200"
            aria-hidden
          />
        </div>
      </section>

      {/* 핵심 서비스 앵커(페이지 아래 기존 섹션으로 스크롤 이동용) */}
      <div id="services" />

      {/* 파트너 섹션 */}
      <section id="partner" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-xl font-semibold mb-4">합병·파트너십</h2>
          <p className="text-sm text-neutral-600">
            전국 지부 및 신규 파트너 합병 제안을 상시 접수합니다.
          </p>
        </div>
      </section>

      {/* 연락 섹션 */}
      <section id="contact" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-xl font-semibold mb-4">문의 / 신청</h2>
          <p className="text-sm text-neutral-600 mb-6">
            아래 연락처로 문의 주시면 빠르게 회신드리겠습니다.
          </p>

        <div className="rounded-xl border border-neutral-200 p-6">
            <p className="text-sm">이메일: contact@rideon.kr</p>
            <p className="text-sm">카톡: RIDEON 상담</p>
            <a
              href="/legal/merge.html"
              className="mt-4 inline-flex items-center justify-center rounded-lg border px-4 py-2 text-sm hover:bg-neutral-50"
            >
              합병·파트너십 제안서 보기
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
