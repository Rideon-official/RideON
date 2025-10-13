// src/app/inquiry/page.tsx
import type { Metadata } from "next";
import InquiryPage from "../../components/InquiryPage";

export const metadata: Metadata = {
  title: "문의하기 | RIDE ON",
  description: "기사 가입, 지사 합병, 리스/렌탈, 파트너십 문의",
};

export default function Page() {
  return <InquiryPage />;
}
