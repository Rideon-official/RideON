import { Button } from "./Button";

export function MobileCTA() {
  return (
    <div className="flex justify-center gap-3 px-6 py-6">
      <Button variant="primary" href="https://pf.kakao.com/_link" external>
        카톡 상담
      </Button>
      <Button variant="secondary" href="tel:010-1234-5678">
        전화·문자 상담
      </Button>
    </div>
  );
}
