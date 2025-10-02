import { type Metadata } from "next";
import React from "react";
import { AuthProvider } from "@/lib/contexts/AuthContext";
import "./globals.css";
import { SFProDisplay, CabinetGrotesk, NokaTrial } from "@/utils/custom-fonts";

export const metadata: Metadata = {
  description:
    "✨ Come join us in the world's largest hackathon! 🚀 Register now!",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    description:
      "✨ Come join us in the world's largest hackathon! 🚀 Register now!",
    images: ["/favicon.ico"],
    title: "HackAthlone",
    type: "website",
    url: "https://www.hackathlone.com/",
  },
  title: "HackAthlone",
  twitter: {
    card: "summary_large_image",
    description:
      "✨ Come join us in the world's largest hackathon! 🚀 Register now!",
    images: ["/favicon.ico"],
    title: "HackAthlone",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SFProDisplay.variable} ${CabinetGrotesk.variable} ${NokaTrial.variable}`}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
