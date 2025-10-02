import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");
  const tokenHash = searchParams.get("token_hash");
  const type = searchParams.get("type");

  // Handle web verification with token_hash (from the new web button)
  if (tokenHash && type) {
    return NextResponse.redirect(
      new URL(`/auth_action?token_hash=${tokenHash}&type=${type}`, request.url)
    );
  }

  // Handle mobile verification with token (from the existing mobile button)
  if (token && type) {
    // Check if this is a mobile request (deep link)
    const userAgent = request.headers.get("user-agent") || "";
    const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(userAgent);

    if (isMobile) {
      // For mobile, redirect to the app deep link
      return NextResponse.redirect(
        `hackathlone://auth_action?token=${token}&type=${type}`
      );
    } else {
      // For web, redirect to our auth_action page with the token parameter
      return NextResponse.redirect(
        new URL(`/auth_action?token=${token}&type=${type}`, request.url)
      );
    }
  }

  // If no proper parameters, redirect to home
  return NextResponse.redirect(new URL("/", request.url));
}
