import { NextResponse } from 'next/server';
import { defaultInvitation } from '@/lib/data';

export async function GET() {
  return NextResponse.json({
    event: 'Ava & Noah wedding',
    invitation: defaultInvitation,
    status: 'ok'
  });
}

export async function POST(request: Request) {
  const payload = await request.json();

  return NextResponse.json({
    success: true,
    invitation: {
      ...defaultInvitation,
      ...payload
    }
  });
}
