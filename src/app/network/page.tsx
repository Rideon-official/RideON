// src/app/network/page.tsx
import type { Metadata } from "next";
import NetworkMap from "@/components/NetworkMap";
import BranchApplyForm from "@/components/BranchApplyForm";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "전국 지부 네트워크 | RIDE ON",
  description:
    "RIDE ON 전국 지부 현황과 지사 모집 중인 전략 지역을 한눈에 확인하고, 지사 상담을 신청해 보세요.",
};

export default function NetworkPage() {
  return (
    <main>
      {/* Hero for branch owners */}
      <section className="bg-graphite-core text-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg">
          <Eyebrow className="text-brand-accent tracking-widest2">
            BRANCH NETWORK
          </Eyebrow>
          <Heading
            level={1}
            align="left"
            className="mt-4 max-w-3xl"
          >
            전국 배달 인프라,
            <br className="hidden md:block" />
            당신의 지역에서 이어갑니다.
          </Heading>
          <BodyText className="mt-4 max-w-2xl text-white/80">
            RIDE ON은 수도권을 넘어 전국 주요 권역으로 지부 네트워크를 확장하고 있습니다.
            이미 운영 중인 지부와, 지금 막 지사 모집이 시작된 전략 지역을 확인해 보세요.
          </BodyText>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#branch-map"
              className="inline-flex items-center gap-2 rounded-full bg-brand-secondary px-6 py-3 text-sm font-semibold text-white shadow-elev1 transition hover:shadow-elev2 hover:bg-brand-secondary/90"
            >
              전국 지부 현황 보기
              <span aria-hidden="true">↓</span>
            </a>
            <a
              href="#branch-apply"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-brand-accent hover:text-brand-accent"
            >
              지사 상담 바로 신청
            </a>
          </div>
        </div>
      </section>

      {/* Network map section */}
      <section id="branch-map">
        <NetworkMap />
      </section>

      {/* Branch apply form */}
      <BranchApplyForm />
    </main>
  );
}
