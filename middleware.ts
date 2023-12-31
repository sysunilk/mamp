import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    if(req.nextUrl.href.includes('/api/auth?query=login')) {

    }
    
    console.log(req.nextUrl.pathname,'jayant');
  return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/api/:path*',
}