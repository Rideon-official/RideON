// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#111111] text-gray-300 px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-24">
      {/* Brand */}
      <div>
        <div className="text-xl font-black tracking-tight">RIDE ON</div>
        <p className="mt-3 text-sm text-gray-400">
          전국을 잇는 배달 인프라, RIDE ON
        </p>
      </div>

      {/* Links */}
      <nav className="grid gap-2 text-sm">
        <a className="hover:text-[#FFB800]" href="/about">About</a>
        <a className="hover:text-[#FFB800]" href="/services">Services</a>
        <a className="hover:text-[#FFB800]" href="/bike">RIDE ON BIKE</a>
        <a className="hover:text-[#FFB800]" href="/settlement">정산 솔루션</a>
        <a className="hover:text-[#FFB800]" href="/store">라이더 스토어</a>
        <a className="hover:text-[#FFB800]" href="/contact">Contact</a>
      </nav>

      {/* Company */}
      <div className="text-sm text-gray-400">
        <p><span className="text-gray-300">상호</span>: RIDE ON(라이드온)</p>
        <p><span className="text-gray-300">법인명</span>: 주식회사 패온</p>
        <p><span className="text-gray-300">대표</span>: 최수호</p>
        <p><span className="text-gray-300">주소</span>: 천중로 176, 1층 RIDE ON</p>
        <p><span className="text-gray-300">사업자</span>: 123-45-67890</p>
        <p><span className="text-gray-300">E-mail</span>: a@naver.com · <span className="text-gray-300">Tel</span>: 010-0000-0000</p>
      </div>

      {/* 하단 바 */}
      <div className="md:col-span-3 border-t border-neutral-800 mt-4 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="text-xs text-gray-500">© 2025 RIDE ON. All rights reserved.</div>
        <div className="flex gap-4 text-xs">
          <a className="hover:text-[#FFB800]" href="/privacy">개인정보처리방침</a>
          <a className="hover:text-[#FFB800]" href="/terms">이용약관</a>
        </div>
      </div>
    </footer>
  );
}
