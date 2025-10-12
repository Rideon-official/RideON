// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header"; // ✅ 추가
import Footer from "@/components/Footer";

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
      <body className="bg-[#111111] text-white font-[Pretendard] antialiased">
        {/* ✅ 상단 헤더 추가 */}
        <Header />

        {/* ✅ 메인 콘텐츠: 헤더 높이 확보용 패딩 */}
        <main className="pt-20">{children}</main>

        {/* ✅ 하단 푸터 */}
        <Footer />
      </body>
    </html>
  );
}
