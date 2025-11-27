import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Simple middleware - actual auth check happens in the dashboard component
// Using Next.js 16 proxy pattern instead of deprecated middleware convention
export function middleware(req: NextRequest) {
  // Dashboard protection is handled client-side in the dashboard component
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}

