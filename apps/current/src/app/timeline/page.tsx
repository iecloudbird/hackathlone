"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
// import CardGrid from "./CardGrid";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";
import NavigationBar from "../general/navigation-bar";
import ItineraryPage from "./itinerary";

const Itinerary = () => {
  /** Desktop View */
  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>
        <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
          <NavigationBar />
          <ItineraryPage />
          <BackToTopButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Itinerary;
