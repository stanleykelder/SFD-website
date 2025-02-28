import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Create a response
  const response = NextResponse.next()

  // Add the pathname to the response headers
  response.headers.set('x-pathname', request.nextUrl.pathname)

  return response
}

export const config = {
  matcher: '/:path*',
} 