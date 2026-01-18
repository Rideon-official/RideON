// src/components/QuickAccess.tsx

import Link from "next/link";
import { Eyebrow, Heading, BodyText } from "@/components/ui/typography";

type QuickAccessItem = {
  id: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  icon: JSX.Element;
};

const items: QuickAccessItem[] = [
  {
    id: "rider",
    title: "라이더 가입",
    description: "바로 일할 수 있는 바이크·장비·정산 패키지로 시작하세요.",
    cta: "라이드온 가입하기",
    // TODO: 실제 라우트 확정 후 변경 (예: /rider/join)
    href: "/rider",
    icon: (
      <svg
        className="h-6 w-6 text-brand-accent"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm14 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM7 15h4l3-6h3m-7 0h-3"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "rental",
    title: "렌탈·리스 출고",
    description: "전국 지부와 연동된 표준 출고 프로세스로 빠르게 출고합니다.",
    cta: "정산 시스템 알아보기",
    // TODO: 실제 라우트 확정 후 변경 (예: /logeats 또는 /settlement)
    href: "/settlement",
    icon: (
      <svg
        className="h-6 w-6 text-brand-accent"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 7h16M6 4h12M7 10v9m10-9v9M10 10v9m4-9v9M5 19h14"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: "contact",
    title: "빠른 상담 문의",
    description: "지부 운영, 인력 공급, 파트너십까지 한 번에 상담받으세요.",
    cta: "바로 상담 연결",
    // 현재 ContactSection 앵커와 연결
    href: "#contact",
    icon: (
      <svg
        className="h-6 w-6 text-brand-accent"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 5h16v9H5.5L4 15.5V5Zm4 11h5m-3 3h6"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function QuickAccess() {
  return (
    <section className="bg-transparent text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg">
        <Eyebrow className="text-brand-primary">
          가장 많이 찾는 서비스
        </Eyebrow>

        <Heading
          level={2}
          align="left"
          className="mt-3 max-w-2xl text-text-heading"
        >
          한 번에 연결되는
          <br />
          RIDE ON 핵심 서비스
        </Heading>

        <BodyText className="mt-3 max-w-xl text-text-muted">
          바쁜 분들을 위해 가장 많이 사용되는 3가지 서비스를 한 화면에서
          바로 선택할 수 있도록 구성했습니다.
        </BodyText>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col justify-between rounded-2xl bg-surface-base border border-slate-200/70 px-5 py-6 shadow-sm transition hover:-translate-y-1 hover:shadow-elev2 hover:border-brand-secondary/60"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary/10">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-widest2 text-text-muted">
                    빠른 진입
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-muted">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between text-sm font-semibold text-brand-secondary">
                <span>{item.cta}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
