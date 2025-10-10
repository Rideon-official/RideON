"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    setLoading(true);
    const res = await fetch("/api/contact", { method: "POST", body: fd });
    setLoading(false);
    if (res.ok) setSent(true);
  }
  if (sent) {
    return (
      <section id="contact" className="bg-zinc-900 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <h2 className="text-3xl font-extrabold">신청이 접수되었습니다.</h2>
          <p className="mt-2 opacity-80">담당자가 곧 연락드립니다. 카톡 상담을 원하시면 상단 버튼을 눌러주세요.</p>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="relative bg-[url('/contact-bg.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 text-white">
        <div>
          <h2 className="text-3xl font-extrabold">문의/신청</h2>
          <p className="mt-2 opacity-90">라이드온에 문의 주시면 친절히 상담해드립니다.</p>
          <div className="mt-6 space-y-1 opacity-90">
            <div><b>TEL</b> 010-9705-6965</div>
            <div><b>E-mail</b> rideon_official@naver.com</div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="bg-white rounded-2xl p-6 text-zinc-900 space-y-3">
          <input name="name" placeholder="이름" required className="w-full border rounded-lg px-3 py-2" />
          <input name="phone" placeholder="연락처" required className="w-full border rounded-lg px-3 py-2" />
          <select name="bike" required className="w-full border rounded-lg px-3 py-2">
            <option value="">오토바이 보유 유무</option>
            <option>있음</option><option>없음</option><option>렌트/리스희망</option>
          </select>
          <input name="area" placeholder="예) 서울시 송파구 (구,동까지)" required className="w-full border rounded-lg px-3 py-2" />
          <select name="platform" required className="w-full border rounded-lg px-3 py-2">
            <option value="">플랫폼</option>
            <option>쿠팡이츠플러스</option><option>배민플러스</option>
          </select>
          <textarea name="message" rows={4} placeholder="메시지" className="w-full border rounded-lg px-3 py-2" />
          <label className="text-sm">
            <input type="checkbox" required className="mr-2"/> 이용약관/개인정보처리방침에 동의합니다.
          </label>
          <button disabled={loading}
            className="w-full rounded-xl bg-black text-white py-3 font-bold hover:bg-white hover:text-black border border-black">
            {loading ? "전송 중..." : "SEND"}
          </button>
          <input name="company" className="hidden" tabIndex={-1} autoComplete="off" />
        </form>
      </div>
    </section>
  );
}
