// src/app/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RIDE ON — 전국 배달 인프라 · 정산/렌트/운영",
  description: "쿠팡·배민 B2B 운영 네트워크 1위 · 전국 25개 지부",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/* Google Fonts 직접 로드 */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#111111] text-white antialiased font-noto">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
