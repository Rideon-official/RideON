"use client";

import { useEffect, useMemo, useState } from "react";
import { INQUIRY_MENU } from "@/config/links";

/* ---------------- utils ---------------- */
function getIdFromHref(href: string) {
  const i = href.indexOf("#");
  return i >= 0 ? href.slice(i + 1) : href.replace(/^\//, "");
}

type Tab = {
  key: (typeof INQUIRY_MENU)[number]["key"];
  id: string;
  label: string;
};

/* ---------------- page ---------------- */
export default function InquiryPage() {
  const tabs: Tab[] = useMemo(
    () =>
      INQUIRY_MENU.map((x) => ({
        key: x.key,
        id: getIdFromHref(x.href),
        label: x.label,
      })),
    []
  );

  const [active, setActive] = useState<Tab["id"]>(tabs[0]?.id ?? "");

  // 해시로 진입 시 해당 탭 활성화
  useEffect(() => {
    const h = window.location.hash.replace(/^#/, "");
    if (h && tabs.some((t) => t.id === h)) setActive(h);
  }, [tabs]);

  const onTab = (id: string) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
  };

  const activeKey = (tabs.find((t) => t.id === active)?.key ?? "rider") as Tab["key"];

  return (
    <div className="bg-[#111111] text-gray-200 min-h-screen">
      <div className="h-6 md:h-8" aria-hidden />

      {/* 탭바: 모바일 2×2, 데스크톱 가운데 정렬 / 컴팩트 고정 */}
      <div className="fixed top-[64px] left-0 right-0 z-30 border-b border-white/10 bg-[#111111]/95 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-3">
          <nav className="py-2 md:py-2.5">
            <div className="grid grid-cols-2 gap-2 justify-items-center sm:grid-cols-4 md:flex md:flex-nowrap md:justify-center md:gap-3">
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => onTab(t.id)}
                    className={
                      "w-full md:w-auto whitespace-nowrap rounded-full px-3 py-1.5 text-sm font-semibold transition " +
                      (isActive
                        ? "bg-[#FFB800] text-black ring-2 ring-[#FFB800]/40"
                        : "text-gray-300 hover:bg-white/5 border border-white/10")
                    }
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
          </nav>
        </div>
      </div>

      {/* 카드 패널 */}
      <div className="mx-auto max-w-4xl px-4 py-8 md:py-12">
        <div className="rounded-2xl border border-white/10 bg-[#1A1A1A]/90 shadow-[0_12px_34px_rgba(0,0,0,0.35)] p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">
            {tabs.find((t) => t.id === active)?.label}
          </h1>
          <p className="mt-2 text-sm text-gray-400">
            아래 정보를 작성해 주세요. 제출 전까지 데이터는 저장되지 않습니다.
          </p>

          <FormBlock type={activeKey} />
        </div>
      </div>
    </div>
  );
}

/* ---------- 공통 스타일 ---------- */
const inputBase =
  "w-full rounded-md bg-[#1F1F1F] border border-white/10 px-3 py-2 text-white " +
  "placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#FFB800]/40 focus:border-[#FFB800]";
const labelCls = "mb-1 block text-sm font-medium text-gray-300";

/* ---------- 섹션별 폼 ---------- */
function FormBlock({ type }: { type: (typeof INQUIRY_MENU)[number]["key"] }) {
  // 공통 플레이스홀더
  const namePH = "홍길동";
  const phonePH = "01012345678";

  // 기사가입: 희망 플랫폼 멀티선택 상태 + 기타
  const [platforms, setPlatforms] = useState<string[]>([]);
  const [otherPlat, setOtherPlat] = useState("");

  const togglePlatform = (v: string) => {
    setPlatforms((prev) =>
      prev.includes(v) ? prev.filter((x) => x !== v) : [...prev, v]
    );
  };

  // 리스/렌탈: 리스 기간(인수형 선택 시)
  const [rentType, setRentType] = useState<"rental" | "lease" | "">("");
  const [leaseTerm, setLeaseTerm] = useState<"6" | "12" | "">("");

  // 전송 상태/핸들러
  const [sending, setSending] = useState(false);
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    try {
      setSending(true);

      const fd = new FormData(e.currentTarget);
      const payload: Record<string, any> = {
        type,
        name: fd.get("name"),
        phone: fd.get("phone"),
      };

      if (type === "rider") {
        payload.platforms = fd.getAll("platforms");
        payload.platformsOther = fd.get("platformsOther");
        payload.owncar = fd.get("owncar");
        payload.region = fd.get("region");
      }
      if (type === "branch") {
        payload.company = fd.get("company");
        payload.bizType = fd.get("bizType");
        payload.region = fd.get("region");
        payload.riders = fd.get("riders");
        payload.message = fd.get("message");
      }
      if (type === "rent") {
        payload.birth = fd.get("birth");
        payload.rentBizType = fd.get("rentBizType");
        payload.region = fd.get("region");
        payload.model = fd.get("model");
        payload.rentType = fd.get("rentType");
        payload.leaseTerm = fd.get("leaseTerm");
        payload.insurance = fd.get("insurance");
      }
      if (type === "partner") {
        payload.company = fd.get("company");
        payload.message = fd.get("message");
      }

      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        throw new Error(`문의 전송 실패 (${res.status}) ${txt}`);
      }

      alert("문의가 접수되었습니다! 빠르게 연락드릴게요.");
      (e.currentTarget as HTMLFormElement).reset();
      // 상태 초기화
      setPlatforms([]);
      setOtherPlat("");
      setRentType("");
      setLeaseTerm("");
    } catch (err: any) {
      alert(err?.message ?? "전송 중 오류가 발생했습니다.");
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      {/* 공통 이름/연락처 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelCls}>이름 *</label>
          <input className={inputBase} placeholder={namePH} required name="name" />
        </div>
        <div>
          <label className={labelCls}>연락처 *</label>
          <input className={inputBase} placeholder={phonePH} required name="phone" />
        </div>
      </div>

      {/* ---------- 기사 가입 문의하기 (rider) ---------- */}
      {type === "rider" && (
        <>
          {/* 희망 플랫폼: 멀티 선택 */}
          <div>
            <span className={labelCls}>희망 플랫폼 (복수 선택 가능)</span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {["쿠팡이츠플러스", "배민플러스", "땡겨요", "기타"].map((opt) => (
                <label
                  key={opt}
                  className={
                    "flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 cursor-pointer select-none " +
                    (platforms.includes(opt) ? "ring-2 ring-[#FFB800]/40" : "")
                  }
                >
                  <input
                    type="checkbox"
                    className="accent-[#FFB800]"
                    name="platforms"
                    value={opt}
                    checked={platforms.includes(opt)}
                    onChange={() => togglePlatform(opt)}
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>

            {/* 기타 선택 시 자유 입력 */}
            {platforms.includes("기타") && (
              <div className="mt-3">
                <input
                  className={inputBase}
                  placeholder="기타 플랫폼을 입력하세요"
                  value={otherPlat}
                  onChange={(e) => setOtherPlat(e.target.value)}
                  name="platformsOther"
                />
              </div>
            )}
          </div>

          {/* 근무 희망 지역 */}
          <div>
            <label className={labelCls}>근무 희망 지역</label>
            <input
              className={inputBase}
              placeholder="도/시 입력 (ex. 서울시 강동구 강동중앙)"
              name="region"
            />
          </div>

          {/* 자차 여부 */}
          <div>
            <span className={labelCls}>자차 여부 *</span>
            <div className="flex flex-wrap gap-3">
              {["자차 있음", "렌트/리스 필요"].map((opt) => (
                <label
                  key={opt}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 cursor-pointer"
                >
                  <input
                    required
                    type="radio"
                    name="owncar"
                    value={opt}
                    className="accent-[#FFB800]"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ---------- 지사 합병 문의하기 (branch) ---------- */}
      {type === "branch" && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 업체명 (절반 너비) */}
            <div>
              <label className={labelCls}>업체명 *</label>
              <input
                className={inputBase}
                placeholder="주식회사 패온, 라이드온 등"
                required
                name="company"
              />
            </div>
            {/* 개인/법인/기타 (단일 선택) */}
            <div>
              <span className={labelCls}>개인/법인 사업자 구분 *</span>
              <div className="flex flex-wrap gap-3">
                {["개인", "법인", "기타"].map((opt) => (
                  <label
                    key={opt}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 cursor-pointer"
                  >
                    <input
                      required
                      type="radio"
                      name="bizType"
                      value={opt}
                      className="accent-[#FFB800]"
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 운영중인 지역 */}
          <div>
            <label className={labelCls}>운영중인 지역 *</label>
            <input
              className={inputBase}
              placeholder="도/시 입력 (ex. 서울시 강동구)"
              required
              name="region"
            />
          </div>

          {/* 같이하는 라이더 수 */}
          <div>
            <label className={labelCls}>같이하는 라이더 수</label>
            <input className={inputBase} placeholder="100명" name="riders" />
          </div>

          {/* 문의 내용 */}
          <div>
            <label className={labelCls}>문의 내용 *</label>
            <textarea
              className={inputBase}
              rows={5}
              placeholder="간단한 회사 소개와 협업 제안 내용을 구체적으로 작성해주세요."
              required
              name="message"
            />
          </div>
        </>
      )}

      {/* ---------- 리스/렌탈 신청하기 (rent) ---------- */}
      {type === "rent" && (
        <>
          {/* 생년월일 + 개인/사업자 구분 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>생년월일(6자리) *</label>
              <input className={inputBase} placeholder="850101" required name="birth" />
            </div>
            <div>
              <span className={labelCls}>개인/사업자 구분 *</span>
              <div className="flex flex-wrap gap-3">
                {["개인", "사업자"].map((opt) => (
                  <label
                    key={opt}
                    className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 cursor-pointer"
                  >
                    <input
                      required
                      type="radio"
                      name="rentBizType"
                      value={opt}
                      className="accent-[#FFB800]"
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* 지역 */}
          <div>
            <label className={labelCls}>지역 *</label>
            <input
              className={inputBase}
              placeholder="도/시 입력 (ex. 서울시 강동구)"
              required
              name="region"
            />
          </div>

          {/* 차종 */}
          <div>
            <label className={labelCls}>차종 *</label>
            <select className={inputBase} defaultValue="" required name="model">
              <option value="" disabled>
                선택
              </option>
              <option>PCX</option>
              <option>NMAX125</option>
              <option>NMAX155</option>
              <option>FORZA350</option>
              <option>XMAX300</option>
              <option>기타</option>
            </select>
          </div>

          {/* 구분 */}
          <div>
            <label className={labelCls}>구분 *</label>
            <div className="flex flex-wrap gap-3">
              <label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="rentType"
                  className="accent-[#FFB800]"
                  value="rental"
                  onChange={() => setRentType("rental")}
                  required
                />
                <span className="text-sm">반납형 렌탈 (1개월~)</span>
              </label>

              <label className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 cursor-pointer">
                <input
                  type="radio"
                  name="rentType"
                  className="accent-[#FFB800]"
                  value="lease"
                  onChange={() => setRentType("lease")}
                  required
                />
                <span className="text-sm">인수형 리스</span>
              </label>
            </div>

            {/* 인수형 리스 선택 시 기간 선택 */}
            {rentType === "lease" && (
              <div className="mt-3">
                <label className={labelCls}>리스 기간 *</label>
                <select
                  className={inputBase}
                  value={leaseTerm}
                  onChange={(e) => setLeaseTerm(e.target.value as "6" | "12")}
                  required={rentType === "lease"}
                  name="leaseTerm"
                >
                  <option value="" disabled>
                    기간 선택
                  </option>
                  <option value="6">6개월</option>
                  <option value="12">12개월</option>
                </select>
              </div>
            )}
          </div>

          {/* 보험 */}
          <div>
            <label className={labelCls}>보험 *</label>
            <div className="flex flex-wrap gap-3">
              {["유상운송책임", "유상운송종합"].map((opt) => (
                <label
                  key={opt}
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-3 py-2 cursor-pointer"
                >
                  <input
                    required
                    type="radio"
                    name="insurance"
                    value={opt}
                    className="accent-[#FFB800]"
                  />
                  <span className="text-sm">{opt}</span>
                </label>
              ))}
            </div>
          </div>
        </>
      )}

      {/* ---------- 파트너십 문의하기 (partner) ---------- */}
      {type === "partner" && (
        <>
          <div>
            <label className={labelCls}>회사/서비스명 *</label>
            <input className={inputBase} placeholder="예: 네이버 / 결제" required name="company" />
          </div>
          <div>
            <label className={labelCls}>제안 내용 *</label>
            <textarea
              className={inputBase}
              rows={5}
              placeholder="제휴/파트너십 제안을 자유롭게 작성해주세요."
              required
              name="message"
            />
          </div>
        </>
      )}

      {/* 제출 버튼 */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={sending}
          className="w-full md:w-auto rounded-md bg-[#FFB800] px-5 py-3 font-semibold text-black hover:bg-[#ffc52e] disabled:opacity-60"
        >
          {sending ? "전송 중..." : "다음으로 →"}
        </button>
      </div>
    </form>
  );
}
