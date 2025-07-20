"use client";
import React from "react";
import Footer from "@/app/general/footer";
import { NavigationBar } from "@/components/common/shared/navigation-bar";
import { BriefSection } from "@/components/homepage/brief";
import { CollaboratorsSection } from "@/components/homepage/collaborators";
import { GallerySection } from "@/components/homepage/gallery";
import { HeroSection } from "@/components/homepage/hero";
import { SpaceAgenciesSection } from "@/components/homepage/space-agencies";
import { VenueSection } from "@/components/homepage/venue";
import { briefData } from "@/data/homepage/brief";
import { collaboratorsData } from "@/data/homepage/collaborators";
import { gallerySectionData } from "@/data/homepage/gallery";
import { heroData } from "@/data/homepage/hero";
import { spaceAgenciesData } from "@/data/homepage/space-agencies";
import { venueSectionData } from "@/data/homepage/venue";

export const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main>
        <HeroSection heroData={heroData} />
        <BriefSection briefData={briefData} />
        <SpaceAgenciesSection spaceAgenciesData={spaceAgenciesData} />
        <CollaboratorsSection collaboratorsData={collaboratorsData} />
        <VenueSection venueData={venueSectionData} />
        <GallerySection galleryData={gallerySectionData} />
      </main>
      <Footer />;
    </>
  );
};
