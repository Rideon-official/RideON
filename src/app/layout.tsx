// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "RIDE ON - 전국 라이더 운영 인프라",
  description: "25개 전국 지부, 1,500명 이상의 라이더와 함께하는 대한민국 No.1 B2B 배달 운영 솔루션입니다.",
  openGraph: {
    title: "RIDE ON | 전국을 연결하는 라이더 인프라",
    description: "정산부터 렌탈까지, 표준화된 시스템으로 배달 지사 운영을 지원합니다.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="bg-surface-base text-text-body antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
