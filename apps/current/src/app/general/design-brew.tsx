"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import DesignBrewImage from "@/assets/images/general/landing-page/DesignBrewLogo.png";
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";

const StarWithCircles = () => {
  // Function to calculate star points
  const calculateStarPoints = (
    centerX: number,
    centerY: number,
    arms: number,
    outerRadius: number,
    innerRadius: number
  ) => {
    const points = [];
    for (let i = 0; i < arms * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI * i) / arms;
      points.push([
        centerX + Math.cos(angle) * radius,
        centerY + Math.sin(angle) * radius,
      ]);
    }
    return points.map((point) => point.join(",")).join(" ");
  };

  const centerX = 200; // Center of the star
  const centerY = 200; // Center of the star
  const arms = 20; // Number of arms
  const outerRadius = 200; // Outer radius (half of 400)
  const innerRadius = 122; // Inner radius (half of 244)

  const starPoints = calculateStarPoints(
    centerX,
    centerY,
    arms,
    outerRadius,
    innerRadius
  );

  return (
    <div className="absolute bottom-[-200px] left-[-5px] hidden size-[400px] overflow-hidden lg:block">
      {" "}
      {/* Adjusted container size */}
      <svg
        viewBox="0 0 400 400" // Adjusted viewBox to match new dimensions
        className="absolute left-[-200px] top-0 size-full" // Shift SVG left to push half the star out
      >
        <polygon
          points={starPoints}
          fill="yellow"
          stroke="yellow"
          strokeWidth="1"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r="28" // Size of the inner black circle (half of 60)
          fill="black"
        />
        <circle
          cx={centerX}
          cy={centerY}
          r="60" // Size of the outer dashed circle (half of 120)
          fill="none"
          stroke="black"
          strokeWidth="4"
          strokeDasharray="25 10" // Dash length
        />
      </svg>
    </div>
  );
};

const handleJoinUsClick = () => {
  window.open(
    "https://www.meetup.com/designbrew-design-meetup-events/events/303563168/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link",
    "_blank"
  );
};

const DesignBrew = () => {
  return (
    <>
      {/* Desktop view */}
      {/* logo row */}

      <div className="relative w-full lg:h-[600px]">
        <div className="pb-30 hidden flex-col gap-6 px-4 lg:flex lg:flex-row lg:px-10">
          {/* Text on the left */}
          <div className="flex w-full items-center justify-center pb-20 lg:mr-4 lg:w-1/2">
            <div className="items-center">
              {/* Hero text */}
              <div className="mb-12 flex items-center justify-between">
                <a className="cursor-pointer" href="/">
                  <Image width={100} src={HeroImage} alt="Hero Image" />
                </a>
                <a className="cursor-pointer" href="/">
                  <Image
                    width={100}
                    src={DesignBrewImage}
                    alt="DesignBrew Image"
                  />
                </a>
              </div>
              <div>
                <h3 className="font-hackathoneCabinetGrotesk text-[18px] font-extrabold tracking-widest">
                  IT ALL STARTS HERE
                </h3>
                <h1 className="my-4 text-[52px] font-[700] leading-tight tracking-tight text-hackathone-font-rocket-red">
                  Ready to supercharge
                  <br /> your creative process?
                </h1>
              </div>

              {/* Join button */}

              <motion.button
                onClick={handleJoinUsClick}
                className="mt-6 flex h-14 w-32 items-center justify-center gap-2 rounded-lg bg-slate-50 px-3 py-4 text-center font-[620] italic text-black transition duration-200 ease-in-out"
                initial={{ scale: 1 }} // Initial scale
                whileHover={{ scale: 1.05 }} // Scale up on hover
                whileTap={{ scale: 0.95 }} // Scale down on tap
              >
                <span className="text-lg">Join Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Instagram post on the right */}
          <div className="mb-20 mb-4 mr-4 flex h-[500px] w-full items-center justify-center overflow-hidden rounded-2xl rounded-lg border-none lg:h-[550px] lg:w-1/2">
            <div className="w-full overflow-hidden rounded-2xl">
              <InstagramEmbed
                url="https://www.instagram.com/p/DALAFgJStm-/"
                width={450} // Width for large screens
                height={500} // Height for large screens
                className="ml-6 rounded-2xl"
              />
            </div>
          </div>
        </div>
        <StarWithCircles />
      </div>

      {/* Mobile and Tablet view */}
      <div className="pb-30 block flex flex-col items-center gap-6 px-4 sm:px-6 lg:hidden">
        {/* Hero text */}
        <div className="mt-6 flex flex-col items-center justify-center pb-12 text-center">
          <div className="flex items-center justify-between pb-6">
            <a className="mr-4 cursor-pointer" href="/">
              <Image width={100} src={HeroImage} alt="Hero Image" />
            </a>
            <a className="ml-4 cursor-pointer" href="/">
              <Image width={100} src={DesignBrewImage} alt="DesignBrew Image" />
            </a>
          </div>
          <h3 className="font-hackathoneCabinetGrotesk text-[18px] font-extrabold tracking-widest">
            IT ALL STARTS HERE
          </h3>
          <h1 className="my-4 text-[32px] font-[700] leading-tight tracking-tight text-hackathone-font-rocket-red sm:text-[40px] md:text-[48px]">
            Ready to supercharge
            <br /> your creative process?
          </h1>

          {/* Join button */}
          <div className="mt-6 flex h-14 w-32 items-center justify-center gap-2 rounded-lg bg-slate-50 px-3 py-4 text-center font-[620] italic text-black">
            <span className="text-lg">Join Us</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </div>
        </div>

        {/* Instagram post below */}
        <div className="mb-24 mb-4 flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border-none md:h-[500px]">
          <div className="flex w-full max-w-md items-center justify-center overflow-hidden rounded-2xl md:max-w-lg">
            <InstagramEmbed
              url="https://www.instagram.com/p/DALAFgJStm-/"
              width={350} // Width for mobile
              height={400} // Height for mobile
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignBrew;
