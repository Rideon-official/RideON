// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  // 1. 기본 타이틀 및 설명 설정
  title: {
    default: "RIDE ON - 대한민국 No.1 B2B 배달 운영 인프라",
    template: "%s | RIDE ON" // 하위 페이지에서 타이틀이 "공지사항 | RIDE ON" 형태로 바뀝니다.
  },
  description: "전국 56개 지부, 12,000명 이상의 라이더와 함께하는 대한민국 1위 B2B 배달 인프라 솔루션 RIDE ON입니다. 쿠팡이츠플러스, 배달의민족플러스 공식 파트너.",
  
  // 2. 검색 엔진용 키워드
  keywords: ["라이드온", "RIDE ON", "배달 인프라", "B2B 배달", "쿠팡이츠플러스", "배달의민족플러스", "라이더 운영", "배달 솔루션"],
  
  // 3. Open Graph (카카오톡, 페이스북 등 공유 시 노출)
  openGraph: {
    title: "RIDE ON - 전국을 연결하는 배달 운영 솔루션",
    description: "대한민국 No.1 B2B 배달 인프라. 전국 지사망과 체계적인 운영 시스템을 확인하세요.",
    url: "https://rideon.co.kr", // 실제 배포될 도메인으로 수정하세요.
    siteName: "RIDE ON",
    images: [
      {
        url: "/og.png", // public 폴더에 위치한 이미지 경로
        width: 1200,
        height: 630,
        alt: "RIDE ON 브랜드 메인 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },

  // 4. 트위터(X) 카드 설정
  twitter: {
    card: "summary_large_image",
    title: "RIDE ON | 대한민국 1위 배달 운영 인프라",
    description: "56개 지부, 12,000명 이상의 라이더와 함께하는 No.1 B2B 파트너",
    images: ["/og.png"],
  },

  // 5. 기타 설정
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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