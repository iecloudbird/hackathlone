"use client";
import { IconButton } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { CardGrid } from "@/app/glimpse/card-grid";
import BackButton from "@/assets/images/general/landing-page/back-button.svg";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";
import NavigationBar from "../general/navigation-bar";
import Tooltip from "../general/tooltip";

const Glimpse = () => {
  const router = useRouter();

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavigationBar />

        {/* Content Container */}
        <div className="mx-[1.2rem] flex flex-col gap-9 sm:mx-[1.2rem] md:mx-[4.06%] lg:mx-[8.06%]">
          {/* Back Button, Header, and Text */}
          <div className="mt-[3%] flex w-full flex-col lg:gap-4">
            <Tooltip text="Back to Home">
              <IconButton
                size="small"
                color="primary"
                onClick={() => router.push("/")}
                className="text-white hover:text-hackathone-font-rocket-red"
                sx={{
                  fontSize: "2.5rem",
                  height: { xs: "2.5rem", md: "2.5rem", lg: "3rem" },
                  width: { xs: "2.5rem", md: "2.5rem", lg: "3rem" },
                  position: "relative",
                  left: { xs: "-3px", md: "0", lg: "-0.5rem" },
                  top: "0",
                }}
                aria-label="back to home"
              >
                <Image
                  width={40}
                  height={40}
                  src={BackButton}
                  alt="Back to Home"
                  className="sm:size-20 md:size-20 lg:size-10"
                />
              </IconButton>
            </Tooltip>

            <h1 className="font-hackathoneCabinetGrotesk text-[30.99px] font-bold leading-[44.62px] text-hackathone-font-rocket-red sm:text-[30.99px] sm:leading-[44.62px] md:text-[32.99px] md:leading-[44.62px] lg:text-[42px] lg:leading-[1.8rem]">
              Here&#39;s a glimpse
            </h1>
            <p className="pr-[8.7%] font-hackathoneCabinetGrotesk text-[16px] leading-[30.57px] text-slate-50 sm:text-[16px] sm:leading-[30.57px] md:pr-[12.7%] md:text-[18px] md:leading-[30.57px] lg:mr-12 lg:pr-0 lg:text-[18px] lg:leading-[1.8rem]">
              from HackAthlone&#39;23
            </p>
          </div>

          {/* Card Grid */}
          <div className="mb-12 w-full lg:mb-20 lg:mt-2">
            <CardGrid />
          </div>
        </div>

        <BackToTopButton />
        <Footer />
      </div>
    </section>
  );
};

export default Glimpse;
