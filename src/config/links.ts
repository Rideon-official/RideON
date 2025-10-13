// src/config/links.ts
export const INQUIRY = {
  rider: "/inquiry#기사가입문의하기",
  branch: "/inquiry#지사합병문의하기",
  rent: "/inquiry#리스렌탈문의하기",
  partner: "/inquiry#파트너십문의하기",
} as const;

export const INQUIRY_MENU = [
  { key: "rider",   label: "기사 가입 문의하기",   href: INQUIRY.rider },
  { key: "branch",  label: "지사 합병 문의하기",   href: INQUIRY.branch },
  { key: "rent",    label: "리스/렌탈 신청하기",   href: INQUIRY.rent },
  { key: "partner", label: "파트너십 문의하기",    href: INQUIRY.partner },
] as const;
