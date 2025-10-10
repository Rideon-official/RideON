"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? "bg-black/90 backdrop-blur" : "bg-white"}`}>
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <a href="#top" className={`font-extrabold tracking-widest text-lg ${scrolled ? "text-white" : "text-zinc-900"}`}>RIDE ON</a>
        <nav className="hidden md:flex gap-6 font-semibold">
          <a href="#services" className={`${scrolled ? "text-white" : "text-zinc-900"}`}>서비스</a>
          <a href="#regions"  className={`${scrolled ? "text-white" : "text-zinc-900"}`}>운영지역</a>
          <a href="#ridy"     className={`${scrolled ? "text-white" : "text-zinc-900"}`}>정산앱</a>
          <a href="#contact"  className={`${scrolled ? "text-white" : "text-zinc-900"}`}>문의</a>
        </nav>
        <div className="hidden md:flex gap-2">
          <a href="https://open.kakao.com/o/sO3OAN2g" target="_blank"
             className="rounded-full px-4 py-2 bg-black text-white hover:bg-white hover:text-black border border-black">카톡상담</a>
          <a href="tel:01097056965"
             className="rounded-full px-4 py-2 border border-black hover:bg-black hover:text-white">전화상담</a>
        </div>
      </div>
    </header>
  );
}
