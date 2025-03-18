import { NextResponse } from "next/server";
import { auth } from "./auth";
import { authRoutes, publicRoutes } from "./routes";

export default auth((request) => {
  const { nextUrl } = request;
  const isLoggedIn = !!request.auth;

  const isPublic = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isProfileComplete = request.auth?.user.profileComplete;
  const isAdmin = request.auth?.user.role === "ADMIN";
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");

  if (isPublic || isAdmin) {
    return NextResponse.next();
  }

  if (isAdminRoute && !isAdmin) {
    return NextResponse.redirect(new URL("/", nextUrl));
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/members", nextUrl));
    }
    return NextResponse.next();
  }

  if (!isPublic && !isLoggedIn) {
    return NextResponse.redirect(new URL("/login", nextUrl));
  }

  if (isLoggedIn && !isProfileComplete && nextUrl.pathname !== "/complete-profile") {
    return NextResponse.redirect(new URL("/complete-profile", nextUrl));
  }

  return NextResponse.next();
});

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - favicon.ico, sitemap.xml, robots.txt (metadata files)
   */
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
