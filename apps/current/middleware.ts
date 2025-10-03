// // eslint-disable-next-line import/no-extraneous-dependencies
// import { createServerClient } from "@supabase/ssr";
// import { type NextRequest, NextResponse } from "next/server";

// export async function middleware(req: NextRequest) {
//   let supabaseResponse = NextResponse.next({
//     request: req,
//   });

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return req.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) => {
//             req.cookies.set(name, value);
//           });
//           supabaseResponse = NextResponse.next({
//             request: req,
//           });
//           cookiesToSet.forEach(({ name, value, options }) => {
//             supabaseResponse.cookies.set(name, value, options);
//           });
//         },
//       },
//     }
//   );

//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   // If user is not signed in and the current path is not /auth_action, redirect to login
//   if (!user && req.nextUrl.pathname.startsWith("/dashboard")) {
//     return NextResponse.redirect(new URL("/login", req.url));
//   }

//   return supabaseResponse;
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/profile/:path*"],
// };
