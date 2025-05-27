"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import HackathoneChallenge from "@/assets/images/general/landing-page/presentation.jpg";

const JoinUsPage = () => {
  return (
    <section className="mx-4 mb-20 mt-14 flex flex-col gap-4 text-justify sm:mx-8 lg:mx-[8.06%] lg:mb-[179.04px] lg:mt-[56.77px] lg:flex-row lg:gap-[1.93%]">
      {/* Left Section: Title and Image */}
      <div className="w-full lg:mr-8 lg:w-[49.11%]">
        <div>
          <h3 className="mt-2 font-hackathoneCabinetGrotesk text-[30.99px] font-extrabold leading-[34.62px] text-hackathone-font-rocket-red sm:text-[32.99px] sm:leading-[44.62px] lg:text-[42px] lg:leading-[44.62px]">
            The Hackathon Challenge will be kicking off soon
          </h3>
          <p className="mt-2 font-hackathoneSFProDisplay text-[16.72px] font-medium leading-[24.57px] text-slate-50 sm:text-[18px] sm:leading-[28.57px] lg:mt-[9.81px] lg:text-[18.72px] lg:leading-[24.57px]">
            Join us in{" "}
            <span className="text-[18px] font-bold text-hackathone-font-rocket-red">
              October 4-6, 2025
            </span>{" "}
            for the largest annual space & sciences hackathon in the world!
          </p>
        </div>
        <div className="mt-6 lg:mt-8">
          <Image
            className="w-full rounded-xl lg:max-w-[600px]"
            src={HackathoneChallenge}
            alt="Hackathone Challenge"
          />
        </div>
      </div>

      {/* Right Section: Text Blocks and Button */}
      <div className="mt-6 w-full lg:w-[48.95%]">
        {/* First Text Block */}
        <div className="h-auto rounded-[13.09px] border-2 p-4 sm:p-6">
          <p className="font-hackathoneCabinetGrotesk text-[16px] font-medium leading-[24.57px] text-slate-50 sm:text-[18px] sm:leading-[28.57px]">
            We’re back! The Athlone chapter of the world’s largest annual space
            and science hackathon is being hosted by the{" "}
            <span className="font-semibold text-hackathone-font-rocket-red">
              Technological University of the Shannon
            </span>
            . HackAthlone is one of over 400 global locations participating in
            this year’s NASA SpaceApps Challenge. Leveraging NASA’s data,
            HackAthlone exemplifies the values and ambitions of the competition
            by promoting diversity in the next generation of scientists,
            engineers, technologists, and designers.
          </p>
          <p className="mt-4 font-hackathoneCabinetGrotesk text-[16px] font-medium leading-[24.57px] text-slate-50 sm:text-[18px] sm:leading-[28.57px]">
            Compete for exciting prizes and goodies, with all the technical
            resources and F&B provisions you need to keep going. Plus, with
            guidance from skilled mentors from academia and industry, you’ll
            have the support to create high-quality projects. The outcomes will
            be documented for open-source research, contributing to global
            innovation.
          </p>
        </div>

        {/* Second Text Block with Button */}
        <div className="mt-4 rounded-[13.09px] border-2 p-4 pb-8 sm:p-6 lg:mt-[16.63px] lg:pb-[36.17px]">
          <p className="font-hackathoneCabinetGrotesk text-[16px] font-medium leading-[24.57px] text-slate-50 sm:text-[18px] sm:leading-[28.57px]">
            Join this 48-hour hackathon, where you’ll tackle problem statements
            curated by NASA and other space agencies, all centered around this
            year’s theme, {'"The Sun Touches Everything"'}, across various STEAM
            fields. Register now and be part of this extraordinary event!
          </p>
          <motion.a
            whileHover={{
              scale: 1.07,
              backgroundColor: "rgba(255, 0, 0, 0.8)",
              borderColor: "white",
              transition: { duration: 0.3 },
            }}
            whileTap={{
              scale: 0.9,
              borderWidth: "3px",
              borderColor: "white",
            }}
            href="#timeline"
            onClick={(event) => {
              event.preventDefault();
              const element = document.getElementById("timeline");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            title="Unfold The Timeline"
            className="mt-4 flex h-[44.31px] w-full items-center justify-center rounded-[6.54px] border-2 border-transparent bg-hackathone-font-rocket-red px-4 py-3 transition-colors duration-300 ease-in-out sm:w-[55%] lg:w-2/5"
          >
            <p className="font-sefarvestCabinetGrotesk text-[16px] font-bold leading-[18.28px] text-black transition-all duration-500 ease-in-out hover:text-hackathone-font-rocket-red">
              Unfold the Timeline
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default JoinUsPage;
