import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { SFProDisplay, CabinetGrotesk } from "@/utils/custom-fonts";

export const metadata: Metadata = {
  title: "HackAthlone",
  description:
    "✨ Come join us in the world's largest hackathon! 🚀 Register now!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    url: "https://www.hackathlone.com/",
    title: "HackAthlone",
    description:
      "✨ Come join us in the world's largest hackathon! 🚀 Register now!",
    images: ["/favicon.ico"],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackAthlone",
    description:
      "✨ Come join us in the world's largest hackathon! 🚀 Register now!",
    images: ["/favicon.ico"],
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
