import { NextResponse } from 'next/server';

export function middleware(request) {
  const url = request.nextUrl.clone();
  
  // 1. If the user hits a link without /edition5, redirect them
  // This catches all those 1,000+ broken <a> tags automatically
  if (!url.pathname.startsWith('/edition5') && 
      !url.pathname.startsWith('/_next') && 
      !url.pathname.includes('.')) {
    
    url.pathname = `/edition5${url.pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// This ensures the middleware only runs on actual pages, not images/scripts
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
