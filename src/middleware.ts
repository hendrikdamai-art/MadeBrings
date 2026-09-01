import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isIndonesian = pathname === "/id" || pathname.startsWith("/id/");
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", isIndonesian ? "id" : "en");

  const localeCookie = {
    name: "madebrings-locale",
    value: isIndonesian ? "id" : request.cookies.get("madebrings-locale")?.value || "en",
    path: "/",
    sameSite: "lax" as const,
  };

  if (!isIndonesian) {
    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    if (!request.cookies.get("madebrings-locale") && localeCookie.value === "en") {
      response.cookies.set(localeCookie);
    }
    return response;
  }

  const stripped = pathname.replace(/^\/id/, "") || "/";
  const url = request.nextUrl.clone();
  url.pathname = stripped;
  const response = NextResponse.rewrite(url, {
    request: { headers: requestHeaders },
  });
  response.cookies.set({
    name: "madebrings-locale",
    value: "id",
    path: "/",
    sameSite: "lax",
  });
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
