// src/app/inquiry/page.tsx
import type { Metadata } from "next";
import InquiryPage from "../../components/InquiryPage";
import HashTabSync from "./HashTabSync";

export const metadata: Metadata = {
  title: "문의하기 | RIDE ON",
  description: "기사 가입, 지사 합병, 리스/렌탈, 파트너십 문의",
};

export default function Page() {
  return (
    <>
      <HashTabSync />   {/* URL 해시를 보고 탭을 자동으로 눌러줌 */}
      <InquiryPage />   {/* 네가 만든 기존 폼/레이아웃 그대로 */}
    </>
  );
}
