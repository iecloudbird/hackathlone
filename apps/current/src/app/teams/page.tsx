"use client";
import { IconButton } from "@mui/material";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import { CardGrid } from "@/app/teams/card-grid";
import BackButton from "@/assets/images/general/landing-page/back-button.svg";
import Rocket from "@/assets/images/general/landing-page/RocketLaunch.png";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";
import NavigationBar from "../general/navigation-bar";
import Tooltip from "../general/tooltip";

const Teams = () => {
  const router = useRouter();
  /** Desktop View */
  const desktopView = () => {
    return (
      <div className="mx-[8.06%] mb-20 flex flex-col gap-[36px] MobileScreen:hidden TabletScreen:hidden">
        {/* Circular icon placeholder*/}
        <div className="relative flex w-full items-center justify-center">
          {/* Circular icon placeholder */}
          <div className="absolute right-0 flex h-48 w-52 translate-y-44 items-center justify-center">
            {/* Neon-like inner circular border */}
            <div className="absolute z-[-100] size-80 rounded-full border-8 border-[#d6ff00] opacity-75" />
            {/* Middle circle with medium-dark border */}
            <div className="absolute z-[-100] size-[26rem] rounded-full border-[6px] border-[#EAFE0780] opacity-75" />
            {/* Outer circle with darker border */}
            <div className="absolute z-[-100] size-[32rem] rounded-full border-4 border-[#EAFE0740] opacity-95" />
            {/* Outer fading circle with darkest border */}
            <div className="absolute z-[-100] size-[38rem] rounded-full border-2 border-[#EAFE0740] opacity-75" />
            {/* Trophy Icon */}
            <div className="relative z-0">
              <Image src={Rocket} alt="Rocket" width={400} height={400} />
            </div>
          </div>
        </div>
        <div className="mt-[3%] w-full">
          <Tooltip text="Back to Home">
            <IconButton
              size="small"
              color="primary"
              onClick={() => router.push("/")}
              className="object-left text-white hover:text-hackathone-font-rocket-red TabletScreen:hidden"
              edge="start"
              sx={{
                width: "3rem",
                height: "3rem",
                fontSize: "2.5rem",
                position: "relative",
                top: "0",
                left: "-0.5rem",
              }}
              aria-label="back to home"
            >
              <Image
                width={40}
                height={40}
                src={BackButton}
                alt="Back to Home"
              />
            </IconButton>
          </Tooltip>
          <h1 className="my-2 pb-2 text-[42px] font-[700] text-hackathone-font-rocket-red">
            Meet the team
          </h1>
          <div className="mr-12">
            <p className="text-left font-hackathoneCabinetGrotesk text-[18px] leading-[1.8rem]">
              that is making a difference!
            </p>
          </div>
        </div>
        <div className="mt-2 w-full items-start text-center">
          <CardGrid />
        </div>
      </div>
    );
  };

  /** Tablet View */
  const tabletView = () => {
    return (
      <div className="mx-[4.06%] flex flex-col items-center justify-center gap-[36px] MobileScreen:hidden DesktopScreen:hidden">
        <div className="mt-[3%] w-full">
          <IconButton
            size="small"
            color="primary"
            onClick={() => router.push("/")}
            className="object-left text-white hover:text-hackathone-font-rocket-red MobileScreen:hidden DesktopScreen:hidden"
            edge="start"
            sx={{
              width: "2.5rem",
              height: "2.5rem",
              fontSize: "2.5rem",
              position: "relative",
              top: "0",
              left: "0",
            }}
            aria-label="back to home"
          >
            <Image width={80} height={80} src={BackButton} alt="Back to Home" />
          </IconButton>
          <h1 className="my-2 text-[32.99px] font-[700] text-hackathone-font-rocket-red">
            Meet the team
          </h1>
          <p className="pr-[12.7%] font-hackathoneCabinetGrotesk text-[18px] font-[400] leading-[30.57px]">
            that is making a difference!
          </p>
        </div>
        <div className="mb-[20%] w-full">
          <CardGrid />
        </div>
      </div>
    );
  };

  /** Mobile View */
  const mobileView = () => {
    return (
      <div className="mx-[1.2rem] flex flex-col items-center justify-center TabletScreen:hidden DesktopScreen:hidden">
        <div className="mt-[3%] w-full">
          <IconButton
            size="small"
            color="primary"
            onClick={() => router.push("/")}
            className="object-left text-white hover:text-hackathone-font-rocket-red TabletScreen:hidden DesktopScreen:hidden"
            edge="start"
            sx={{
              width: "2.5rem",
              height: "2.5rem",
              fontSize: "2.5rem",
              position: "relative",
              top: "0",
              left: "-3px",
            }}
            aria-label="back to home"
          >
            <Image width={80} height={80} src={BackButton} alt="Back to Home" />
          </IconButton>
          <h1 className="my-2 pb-2 font-hackathoneCabinetGrotesk text-[30.99px] font-[800] leading-[44.62px] text-hackathone-font-rocket-red">
            Meet the team
          </h1>
          <p className="pr-[8.7%] font-hackathoneCabinetGrotesk text-[16px] font-[500] leading-[30.57px] text-slate-50">
            that is making a difference!
          </p>
        </div>

        <div className="mb-[20%] mt-6 w-full">
          <CardGrid />
        </div>
      </div>
    );
  };
  return (
    <section>
      <div className="relative min-h-screen overflow-hidden bg-black text-white">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>
        <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
          <NavigationBar />
          {desktopView()}
          {tabletView()}
          {mobileView()}
          <BackToTopButton />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default Teams;
