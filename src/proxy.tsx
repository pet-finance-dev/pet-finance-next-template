import {
  type MiddlewareConfig,
  // type NextRequest,
  NextResponse,
} from "next/server";

// const privateRoutes = [
//   { path: '/couple', whenAuthenticated: 'next' },
// ];

// const proxy = async (request: NextRequest) => {
const proxy = async () => {
  // const path = request.nextUrl.pathname;
  // const privateRoute = privateRoutes.find((route) => route.path === path);
  // const authToken = request.cookies.get('sb-access-token');
  // const refreshToken = request.cookies.get('sb-refresh-token');

  // if (!authToken && privateRoute) {
  //   if (refreshToken) return NextResponse.next();
  //   const redirectUrl = request.nextUrl.clone();
  //   redirectUrl.pathname = '/login';
  //   return NextResponse.redirect(redirectUrl);
  // }

  // if (authToken && path === '/login') {
  //   const redirectUrl = request.nextUrl.clone();
  //   redirectUrl.pathname = '/couple';
  //   return NextResponse.redirect(redirectUrl);
  // }

  return NextResponse.next();
};

export const config: MiddlewareConfig = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|logo).*)",
  ],
};

export { proxy };
