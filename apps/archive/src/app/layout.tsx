import type { Metadata } from "next";
import "./globals.css";
import { SFProDisplay, CabinetGrotesk } from "@/utils/custom-fonts";

export const metadata: Metadata = {
  title: "HackAthlone 2024",
  description:
    "✨ Come join us in the world's largest hackathon! 🚀 Register now before Oct 4!",
  icons: {
    icon: "/2024/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://2024.hackathlone.com/",
    title: "HackAthlone 2024",
    description:
      "✨ Come join us in the world's largest hackathon! 🚀 Register now before Oct 4!",
    images: ["/2024/favicon.ico"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackAthlone 2024",
    description:
      "✨ Come join us in the world's largest hackathon! 🚀 Register now before Oct 4!",
    images: ["/2024/favicon.ico"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${SFProDisplay.variable} ${CabinetGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
