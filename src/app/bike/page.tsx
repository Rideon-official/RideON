// src/app/bike/page.tsx
import BikeIntro from "../../components/bike/BikeIntro";
import BikeQuickApply from "../../components/bike/BikeQuickApply";
import BikeCenters from "../../components/bike/BikeCenters";

export default function BikePage() {
  return (
    <main className="bg-black text-white">
      {/* 1) 렌트/리스 소개 */}
      <BikeIntro />
      {/* 2) 렌트/리스 신청(가벼운 CTA) */}
      <BikeQuickApply />
      {/* 3) 센터 위치 및 안내(하단) */}
      <BikeCenters />
    </main>
  );
}