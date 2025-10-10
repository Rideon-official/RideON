export default function Ridy() {
  return (
    <section id="ridy" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-extrabold">정산어플 (Ridy)</h2>
        <ul className="mt-6 list-disc pl-6 text-zinc-700 space-y-1">
          <li><b>정산 내역 확인</b> (일별/주간/월간)</li>
          <li><b>매출 통계 시각화</b></li>
          <li><b>익일 출금 신청</b></li>
          <li><b>푸시 알림</b>으로 정산 통보</li>
          <li><b>이전 기록</b> 자동 저장</li>
        </ul>
        <p className="mt-4 text-zinc-600">자세한 내용은: <a className="underline" href="https://www.ridy.co.kr" target="_blank">www.ridy.co.kr</a></p>
      </div>
    </section>
  );
}
