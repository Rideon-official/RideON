// src/components/BranchApplyForm.tsx
"use client";

import { FormEvent } from "react";
import { Heading, BodyText, Eyebrow } from "@/components/ui/typography";
import { branches } from "@/data/branches";

const regions = Array.from(new Set(branches.map((b) => b.region)));

export default function BranchApplyForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 여기에서 API 연동 / 이메일 전송 로직 추가
    // 현재는 UX용 폼 구조만 제공
    alert("지사 상담 신청이 접수되었습니다. 담당자가 순차적으로 연락드립니다.");
  };

  return (
    <section
      id="branch-apply"
      className="bg-surface-base"
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-6 py-section-y md:py-section-y-lg grid gap-10 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <Eyebrow className="text-brand-primary">
            BRANCH APPLICATION
          </Eyebrow>
          <Heading
            level={2}
            align="left"
            className="mt-3 text-text-heading"
          >
            내 지역에서
            <br className="hidden md:block" />
            RIDE ON 지부를 운영해 보세요.
          </Heading>
          <BodyText className="mt-3 text-text-muted">
            이미 RIDE ON이 운영 중인 권역 뿐 아니라,
            지사 모집이 진행 중인 전략 지역에 대한 상담도 가능합니다.
            간단한 정보를 남겨주시면, 예상 물량·수익·지원 범위를 함께 안내드립니다.
          </BodyText>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-3xl border border-slate-200/80 bg-surface-subtle px-5 py-6 sm:px-7 sm:py-7 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-text-muted">
                  이름
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-text-body outline-none ring-0 transition focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-text-muted">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="010-0000-0000"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-text-body outline-none ring-0 transition focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-text-muted">
                  희망 권역
                </label>
                <select
                  name="region"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-text-body outline-none ring-0 transition focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                >
                  <option value="">선택하세요</option>
                  {regions.map((r) => (
                    <option key={r} value={r}>
                      {r}
                    </option>
                  ))}
                  <option value="other">기타 지역 (직접 입력)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-text-muted">
                  희망 지역(시/구)
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="예: 서울 강동구, 부산 해운대구"
                  className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-text-body outline-none ring-0 transition focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-text-muted">
                문의 내용 (선택)
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="현재 상황이나 궁금하신 점을 자유롭게 남겨주세요."
                className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-text-body outline-none ring-0 transition focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-brand-secondary px-5 py-3 text-sm font-semibold text-white shadow-elev1 transition hover:shadow-elev2 hover:bg-brand-secondary/90"
            >
              지사 상담 신청하기
            </button>
            <p className="mt-2 text-[11px] text-text-muted">
              입력하신 정보는 지사 상담 및 안내 목적 외에는 사용되지 않습니다.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
