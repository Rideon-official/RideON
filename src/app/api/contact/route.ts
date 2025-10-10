import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const fd = await req.formData();
  // TODO: 연동하고 싶은 곳에 전송 (Slack Webhook/Email/Google Sheet 등)
  // 개발 전까지는 성공만 응답
  return NextResponse.json({ ok: true });
}
