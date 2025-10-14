// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// ✅ 실제 존재하는 경로로, 상대경로 import
import Header from "../components/layout/header";
import Footer from "../components/layout/footer"; // ← 2단계에서 새로 만듦

export const metadata: Metadata = {
  title: "RIDE ON — 전국 배달 인프라 · 정산/렌트/운영",
  description: "쿠팡·배민 B2B 운영 네트워크 1위 · 전국 25개 지부",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "RIDE ON",
    description: "전국을 잇는 배달 인프라, RIDE ON",
    images: ["/og.jpg"], // 없으면 나중에 교체
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-[#111111] text-white antialiased">
        {/* 상단 헤더 */}
        <Header />

        {/* 헤더 높이만큼 여백(헤더가 fixed/sticky가 아니면 줄여도 됨) */}
        <main className="pt-20">{children}</main>

        {/* 하단 푸터 */}
        <Footer />
      </body>
    </html>
  );
}