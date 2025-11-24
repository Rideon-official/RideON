// src/data/branches.ts

export type BranchStatus = "active" | "open";

export type Branch = {
  id: string;
  name: string;
  region: string;
  city: string;
  status: BranchStatus;
  riders?: string;
  note?: string;
  // 0 ~ 100 사이, 지도 영역 내 상대 좌표
  x: number;
  y: number;
};

export const branches: Branch[] = [
  {
    id: "seoul-east",
    name: "서울 동부 지부",
    region: "수도권",
    city: "서울 강동·송파",
    status: "active",
    riders: "150+",
    note: "쿠팡·배민 B2B 물량 중심, 라이더 교육 거점",
    x: 46,
    y: 28,
  },
  {
    id: "seoul-west",
    name: "서울 서부 지부",
    region: "수도권",
    city: "서울 마포·영등포",
    status: "active",
    riders: "120+",
    note: "심야 물량·장기 렌탈 비중이 높은 권역",
    x: 40,
    y: 26,
  },
  {
    id: "gyeonggi-south",
    name: "경기 남부 지부",
    region: "수도권",
    city: "수원·용인",
    status: "active",
    riders: "180+",
    note: "출고·정비 인프라가 집중된 핵심 거점",
    x: 44,
    y: 35,
  },
  {
    id: "busan",
    name: "부산 지부",
    region: "영남",
    city: "부산 전역",
    status: "active",
    riders: "90+",
    note: "항만·관광지 상권 중심의 라이더 운영",
    x: 58,
    y: 72,
  },
  {
    id: "daegu",
    name: "대구 지부",
    region: "영남",
    city: "대구 중심권",
    status: "active",
    riders: "70+",
    note: "단기 물량과 장기 출고가 균형잡힌 권역",
    x: 53,
    y: 60,
  },
  {
    id: "gwangju",
    name: "광주 지부",
    region: "호남",
    city: "광주·전남 일부",
    status: "open",
    riders: "지사 모집 중",
    note: "호남권 B2B 확장 준비 중인 전략 지역",
    x: 33,
    y: 67,
  },
  {
    id: "daejeon",
    name: "대전 지부",
    region: "충청",
    city: "대전·세종",
    status: "open",
    riders: "지사 모집 중",
    note: "충청권 통합 거점으로 계획 중",
    x: 42,
    y: 50,
  },
  {
    id: "jeju",
    name: "제주 지부",
    region: "제주",
    city: "제주도 전역",
    status: "active",
    riders: "40+",
    note: "관광·렌탈 수요가 높은 시즌성 특화 권역",
    x: 40,
    y: 92,
  },
];
