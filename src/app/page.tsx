export default function Home() {
  return (
    <main>
      {/* Hero 섹션 */}
      <section
        id="hero"
        className="px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-24 lg:pb-24"
      >
        <div className="mx-auto max-w-screen-xl grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-extrabold tracking-tight text-neutral-900 leading-[1.05] text-[clamp(32px,6vw,56px)]">
              전국을 잇는 배달 네트워크,
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

          {/* 우측 비주얼 (플레이스홀더) */}
          <div
            className="h-[280px] sm:h-[360px] lg:h-[420px] rounded-2xl bg-gradient-to-b from-neutral-100 to-neutral-200"
            aria-hidden
          />
        </div>
      </section>

      {/* 핵심 서비스 섹션 */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 py-14">
        <div className="mx-auto max-w-screen-xl">
          <h2 className="text-2xl font-semibold mb-6">핵심 서비스</h2>

          <div className="grid gap-6 md:grid-cols-3">
            {/* 카드 1: 운영 대행 */}
            <a
              href="#contact"
              className="block rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">운영 대행</h3>
              <p className="text-sm text-neutral-600">
                쿠팡이츠플러스 / 배민플러스 지사 맞춤 운영 전담
              </p>
              <span className="mt-4 inline-block text-sm">바로가기 →</span>
            </a>

            {/* 카드 2: 렌트·리스 */}
            <a
              href="#contact"
              className="block rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">렌트·리스</h3>
              <p className="text-sm text-neutral-600">
                전용 오토바이·보험·정비 One-stop 제공
              </p>
              <span className="mt-4 inline-block text-sm">바로가기 →</span>
            </a>

            {/* 카드 3: 플랫폼 연동 */}
            <a
              href="/legal/merge.html"
              className="block rounded-2xl border border-neutral-200 p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">플랫폼 연동</h3>
              <p className="text-sm text-neutral-600">
                통합 리포트·정산 시스템으로 투명한 매출 관리
              </p>
              <span className="mt-4 inline-block text-sm">자세히 보기 →</span>
            </a>
          </div>
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

      {/* 파트너 섹션 */}
      <section id="partner" className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="mx-auto max-w-screen-md">
          <h2 className="text-xl font-semibold mb-4">합병·파트너십</h2>
          <p className="text-sm text-neutral-600">
            전국 지부 및 신규 파트너 합병 제안을 상시 접수합니다.
          </p>
        </div>
      </section>
    </main>
  );
}
