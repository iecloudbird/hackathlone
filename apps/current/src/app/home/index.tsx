"use client";
import React from "react";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { BentoSection } from "@/components/homepage/bento-section";
import { BriefSection } from "@/components/homepage/brief";
import { CollaboratorsSection } from "@/components/homepage/collaborators";
import { GallerySection } from "@/components/homepage/gallery";
import { HeroSection } from "@/components/homepage/hero";
import RiverShannon from "@/components/homepage/shannonRiver";
import { SpaceAgenciesSection } from "@/components/homepage/space-agencies";
import { TestimonialsSection } from "@/components/homepage/testimonials";
import { TimelineSection } from "@/components/homepage/timeline";
import VenueSection from "@/components/homepage/venue";
import Xr4uSection from "@/components/homepage/xr4u";
import { briefData } from "@/data/homepage/brief";
import { collaboratorsData } from "@/data/homepage/collaborators";
import { gallerySectionData } from "@/data/homepage/gallery";
import { heroData } from "@/data/homepage/hero";
import { spaceAgenciesData } from "@/data/homepage/space-agencies";
import { testimonialData } from "@/data/homepage/testimonials";
import { timelineData } from "@/data/homepage/timeline";

export const HomePage = () => {
  return (
    <>
      <NavbarDemo />
      {/* <NavigationBar /> */}
      <main className="overflow-x-hidden">
        <HeroSection heroData={heroData} />
        <BriefSection briefData={briefData} />
        <BentoSection />
        <SpaceAgenciesSection spaceAgenciesData={spaceAgenciesData} />
        <CollaboratorsSection collaboratorsData={collaboratorsData} />
        <RiverShannon />
        <VenueSection />
        <GallerySection galleryData={gallerySectionData} />
        <TimelineSection timelineData={timelineData} />
        <TestimonialsSection testimonialData={testimonialData} />
        <Xr4uSection />
      </main>
      <Footer />
    </>
  );
};
