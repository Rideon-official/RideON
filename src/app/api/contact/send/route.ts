import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, phone, message } = await req.json();

    await resend.emails.send({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject: `🚀 RideON 신규 문의 - ${name}`,
      html: `
        <h2>신규 문의 도착</h2>
        <p><b>이름:</b> ${name}</p>
        <p><b>연락처:</b> ${phone}</p>
        <p><b>내용:</b><br/>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error });
  }
}
