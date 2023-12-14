import { EmailTemplate } from '../../../components/Mail/template';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.MAIL_SERVER_KEY);

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    const data = await resend.emails.send({
      from: 'Website Contact <contact@contact.alextanase.dev>',
      to: ['alextanase454@gmail.com'],
      subject: 'New message from portfolio website',
      react: EmailTemplate({ email, name, message }),
      text: '',
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
