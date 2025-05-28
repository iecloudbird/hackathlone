"use client";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React from "react";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { CardGrid } from "@/app/teams/card-grid";
import Rocket from "@/assets/images/general/landing-page/RocketLaunch.png";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";
import NavigationBar from "../general/navigation-bar";

const Teams = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-3 sm:py-3 md:py-6">
        <NavigationBar />

        {/* Content Container */}
        <div className="mx-[1.2rem] mb-20 flex flex-col sm:mx-[1.2rem] md:mx-[4.06%] lg:mx-[8.06%] lg:gap-8">
          {/* Circular Icon (Desktop Only) */}
          <div className="pointer-events-none relative hidden w-full items-center justify-center lg:flex">
            <div className="absolute right-0 flex h-48 w-52 translate-y-44 items-center justify-center">
              {/* Concentric Circles */}
              <div className="absolute z-[-100] size-80 rounded-full border-8 border-[#d6ff00] opacity-75" />
              <div className="absolute z-[-100] size-[26rem] rounded-full border-[#EAFE0780] opacity-75" />
              <div className="absolute z-[-100] size-[32rem] rounded-full border-4 border-[#EAFE0740] opacity-95" />
              <div className="absolute z-[-100] size-[38rem] rounded-full border-2 border-[#EAFE0740] opacity-75" />
              {/* Rocket Image */}
              <div className="relative z-0">
                <Image src={Rocket} alt="Rocket" width={400} height={400} />
              </div>
            </div>
          </div>

          {/* Back Button, Header, and Text */}
          <div className="mt-6 w-full sm:mt-2">
            <h1 className="text-3xl font-bold text-hackathone-font-rocket-red lg:my-2">
              Meet the team
            </h1>
            <p className="pr-[8.7%] font-hackathoneCabinetGrotesk text-[16px] leading-[30.57px] text-slate-50 sm:text-[16px] sm:leading-[30.57px] md:pr-[12.7%] md:text-[18px] md:leading-[30.57px] lg:mr-12 lg:text-[18px] lg:leading-[1.8rem]">
              that is making a difference!
            </p>
          </div>

          {/* Card Grid */}
          <div className="mt-4 w-full">
            <CardGrid />
          </div>
        </div>

        <BackToTopButton />
        <Footer />
      </div>
    </section>
  );
};

export default Teams;
