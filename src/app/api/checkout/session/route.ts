import { NextRequest, NextResponse } from 'next/server';

/**
 * This endpoint is no longer used - Buy Me a Coffee integration uses direct redirects.
 * Keeping this file for reference in case Stripe integration is needed in the future.
 */

export async function POST(request: NextRequest) {
  return NextResponse.json(
    { error: 'This endpoint is deprecated. Use Buy Me a Coffee direct links instead.' },
    { status: 410 }
  );
}
