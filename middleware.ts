import { NextResponse, type NextRequest } from 'next/server'

// Edge runtime is required for deployment via @opennextjs/cloudflare,
// which does not support Next.js 16's Node.js-runtime proxy.ts.
export const config = {
  runtime: 'experimental-edge',
  matcher: ['/((?!_next/static|_next/image|.*\\..*).*)'],
}

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  // Forward the pathname so the root layout can set the correct <html lang>.
  requestHeaders.set('x-pathname', request.nextUrl.pathname)
  return NextResponse.next({ request: { headers: requestHeaders } })
}
