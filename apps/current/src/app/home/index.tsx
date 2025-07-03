"use client";
import React from "react";
import Footer from "@/app/general/footer";
import { NavigationBar } from "@/components/common/shared/navigation-bar";
import { BriefSection } from "@/components/homepage/brief";
import { ContactSection } from "@/components/homepage/contact-us";
import { HeroSection } from "@/components/homepage/hero";
import { OverviewSection } from "@/components/homepage/overview";
import PerksSection from "@/components/homepage/perks";
import { SponsorSection } from "@/components/homepage/sponsor";
import { TimelineSection } from "@/components/homepage/timeline";

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection />
        <SponsorSection />
        <BriefSection />
        <OverviewSection />
        <TimelineSection />
        <PerksSection />
        <ContactSection />
      </main>
      <Footer />;
    </>
  );
};
