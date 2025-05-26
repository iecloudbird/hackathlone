"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";
import CountDownPage from "./count-down-page";

const targetDate = "2025-10-04T18:00:00";

const HeroPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="flex flex-col items-center justify-center text-center mx-auto mt-16 px-4 sm:px-6 md:px-8 lg:px-[8.06%]">
      <div className="w-full mb-10">
        {/* Hero Image */}
        <motion.button
          className="mb-8"
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        >
          <Image
            src={HeroImage}
            alt="Hero Image"
            width={180}
            className="sm:w-[200px] lg:w-[250px]"
          />
        </motion.button>

        {/* Countdown */}
        <CountDownPage targetDate={targetDate} />

        {/* Title */}
        <div className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[3rem] leading-[51.26px] sm:text-[3.5rem] sm:leading-[4rem] lg:text-[65.08px] lg:leading-[73.26px] mx-auto">
          <p>
            HackAth<span className="text-white">l</span>on
            <span className="text-white">e</span>&apos;25 Returns <br />
            with a Bang!
          </p>
        </div>

        {/* Subtitle */}
        <div className="mx-auto text-[1rem] leading-[24.57px] sm:text-[20px] sm:leading-[28.57px] lg:text-[24px] lg:leading-[36.57px] lg:mx-[10rem]">
          <p className="mt-3 font-hackathoneSFProDisplay font-normal text-white">
            New challenges and features coming soon—stay tuned!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mt-8 mx-12 sm:mx-auto">
          <motion.button
            whileHover={{
              backgroundColor: "rgba(255, 0, 0, 0.8)",
              borderColor: "bg-hackathone-font-rocket-red",
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9, borderWidth: "4px", borderColor: "white" }}
            onClick={() =>
              window.open(
                "https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/athlone/?tab=teams",
                "_blank"
              )
            }
            title="View Teams & Projects"
            className="bg-transparent flex items-center justify-center rounded-[6.54px] px-4 py-3 w-full sm:w-[30%] xl:w-[20%] h-[44.31px] border-2 border-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
          >
            <p className="font-sefarvestCabinetGrotesk font-bold text-[16px] leading-[18.28px] text-hackathone-font-rocket-red transition-all duration-500 ease-in-out">
              Previous Teams & Projects
            </p>
          </motion.button>

          <motion.button
            whileHover={{
              backgroundColor: "rgba(255, 0, 0, 0.8)",
              borderColor: "bg-hackathone-font-rocket-red",
              scale: 1.1,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9, borderWidth: "4px", borderColor: "white" }}
            onClick={() =>
              window.open("https://nasa-spaceapps.vercel.app/", "_blank")
            }
            title="Checkout our 2024 Event"
            className="bg-transparent flex items-center justify-center rounded-[6.54px] px-4 py-3 w-full sm:w-[30%] xl:w-[20%] h-[44.31px] border-2 border-hackathone-font-rocket-red transition-colors duration-300 ease-in-out"
          >
            <p className="font-sefarvestCabinetGrotesk font-bold text-[16px] leading-[18.28px] text-hackathone-font-rocket-red transition-all duration-500 ease-in-out">
              Hackathlone 2024
            </p>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
