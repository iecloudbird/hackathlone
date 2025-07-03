"use client";
import React from "react";
import Footer from "@/app/general/footer";
import { NavigationBar } from "@/components/common/shared/navigation-bar";
import { BriefSection } from "@/components/homepage/brief";
import { HeroSection } from "@/components/homepage/hero";
import { SponsorSection } from "@/components/homepage/sponsor";
import { OverviewSection } from "@/components/homepage/overview";

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection />
        <SponsorSection />
        <BriefSection />
        <OverviewSection />
      </main>
      <Footer />;
    </>
  );
};
