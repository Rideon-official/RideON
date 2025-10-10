export default function Footer() {
  return (
    <footer className="bg-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-700">
        <p>상호: 라이드온 | 법인명: 패온 | 대표: 최수호</p>
        <p>주소: 서울특별시 강동구 고덕로 78, 2층 202호</p>
        <p>사업자등록번호: 896-86-02776 | 전화: 010-9705-6965 | 이메일: rideon_official@naver.com</p>
        <p className="mt-2">
          <a className="underline" href="/terms">이용약관</a> · <a className="underline" href="/privacy">개인정보처리방침</a>
        </p>
        <p className="mt-4">© 2025 RIDE ON. All rights reserved.</p>
      </div>
    </footer>
  );
}
