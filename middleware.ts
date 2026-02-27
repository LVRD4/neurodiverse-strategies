import { NextRequest, NextResponse } from "next/server";
import {
  SITE_ACCESS_COOKIE,
  SITE_ACCESS_COOKIE_VALUE,
  sanitizeNextPath,
} from "./lib/site-access";

function isPublicPath(pathname: string): boolean {
  return (
    pathname === "/access" ||
    pathname.startsWith("/access/") ||
    pathname === "/favicon.ico" ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/access")
  );
}

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  const accessCookie = request.cookies.get(SITE_ACCESS_COOKIE)?.value;
  if (accessCookie === SITE_ACCESS_COOKIE_VALUE) {
    return NextResponse.next();
  }

  const destination = sanitizeNextPath(`${pathname}${search}`);
  const loginUrl = new URL("/access", request.url);
  loginUrl.searchParams.set("next", destination);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
