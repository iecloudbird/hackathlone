"use client";
import React from "react";
import Footer from "@/app/general/footer";
import { NavigationBar } from "@/components/common/shared/navigation-bar";
import { BriefSection } from "@/components/homepage/brief";
import { CollaboratorsSection } from "@/components/homepage/collaborators";
import { HeroSection } from "@/components/homepage/hero";
import { SpaceAgenciesSection } from "@/components/homepage/space-agencies";
import { briefData } from "@/data/homepage/brief";
import { collaboratorsData } from "@/data/homepage/collaborators";
import { heroData } from "@/data/homepage/hero";
import { spaceAgenciesData } from "@/data/homepage/space-agencies";

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection heroData={heroData} />
        <BriefSection briefData={briefData} />
        <SpaceAgenciesSection spaceAgenciesData={spaceAgenciesData} />
        <CollaboratorsSection collaboratorsData={collaboratorsData} />
      </main>
      <Footer />;
    </>
  );
};
