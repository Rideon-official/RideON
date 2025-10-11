import Image from "next/image";

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
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-black text-white font-bold"
            >
              운영 대행 신청
            </a>
            <a
              href="/merge"
              className="px-5 py-3 rounded-xl border border-black font-bold hover:bg-black hover:text-white"
            >
              합병·파트너 제안
            </a>
          </div>
        </div>

        {/* 오른쪽 비주얼: 기존 그라디언트 박스 → map.png로 교체 */}
        <div className="relative w-full max-w-[520px] mx-auto md:mx-0" aria-hidden>
          <Image
            src="/map.png"
            alt=""            // 장식용 이미지: 스크린리더 제외
            width={1040}
            height={1040}
            className="w-full h-auto opacity-90"
            priority
          />
        </div>
      </div>
    </section>
  );
}
