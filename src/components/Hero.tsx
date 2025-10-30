"use client";

import Link from "next/link";
import Image from "next/image";
import { INQUIRY_MENU } from "@/config/links";

export default function Hero() {
  return (
    <section className="bg-[#0E0E0E]">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            전국 1등 배달 운영 플랫폼
          </h1>
          <p className="mt-4 text-zinc-600">
            쿠팡이츠플러스 · 배민플러스 · 렌트/리스 운영 대행을 한 번에.
          </p>

          {/* ✅ 문의 메뉴 CTA 버튼 */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {INQUIRY_MENU.map((item, idx) => (
              <Link
                key={item.key}
                href={item.href}
                className={
                  "px-5 py-3 rounded-xl font-bold text-center transition " +
                  (idx === 0
                    ? "bg-black text-white hover:bg-zinc-800"
                    : "border border-black hover:bg-black hover:text-white")
                }
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 오른쪽 비주얼: 기존 그라디언트 박스 → map.png로 교체 */}
        <div
          className="relative w-full max-w-[520px] mx-auto md:mx-0"
          aria-hidden
        >
          <Image
            src="/map.png"
            alt="" // 장식용 이미지: 스크린리더 제외
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
