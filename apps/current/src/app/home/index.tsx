"use client";
import React from "react";
import Footer from "@/app/general/footer";
import { NavigationBar } from "@/components/common/shared/navigation-bar";
import { HeroSection } from "@/components/homepage/hero";

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <HeroSection />
      <Footer />;
    </>
  );
};
