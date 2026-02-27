import { NextResponse } from "next/server";
import {
  SITE_ACCESS_COOKIE,
  SITE_ACCESS_COOKIE_VALUE,
  SITE_ACCESS_PASSWORD,
  sanitizeNextPath,
} from "../../../lib/site-access";

export async function POST(request: Request) {
  const formData = await request.formData();
  const submittedPassword = String(formData.get("password") ?? "");
  const nextPath = sanitizeNextPath(String(formData.get("next") ?? "/"));

  if (submittedPassword !== SITE_ACCESS_PASSWORD) {
    const failureUrl = new URL("/access", request.url);
    failureUrl.searchParams.set("error", "1");
    failureUrl.searchParams.set("next", nextPath);
    return NextResponse.redirect(failureUrl, { status: 303 });
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url), {
    status: 303,
  });

  response.cookies.set({
    name: SITE_ACCESS_COOKIE,
    value: SITE_ACCESS_COOKIE_VALUE,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
