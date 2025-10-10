import "./../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RIDE ON – 전국 1등 배달 운영 플랫폼",
  description: "쿠팡이츠플러스·배민플러스·렌트/리스 운영 대행 전문. 전국 지부/라이더 네트워크.",
  openGraph: {
    title: "RIDE ON – 전국 1등 배달 운영 플랫폼",
    description: "쿠팡이츠플러스·배민플러스·렌트/리스 운영 대행 전문.",
    images: ["/og.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased text-zinc-900 bg-white">{children}</body>
    </html>
  );
}
