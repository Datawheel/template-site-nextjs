// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {NextRequest, NextResponse} from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export async function middleware(req) {
  if (
    req.nextUrl.pathname.startsWith("/_next")
    || req.nextUrl.pathname.includes("/api/")
    || PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === "default") {
    // eslint-disable-next-line consistent-return
    return NextResponse.redirect(new URL(`/en${req.nextUrl.pathname}`, req.url));
  }
}
