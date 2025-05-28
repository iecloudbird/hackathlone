"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";
import NavigationBar from "../general/navigation-bar";
import CardGrid from "./CardGrid";

const Blogs = () => {
  /** Desktop View */

  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>

        <div className="relative z-10 py-[12px] sm:py-[24px]">
          <NavigationBar />
          <CardGrid />
          <BackToTopButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogs;
