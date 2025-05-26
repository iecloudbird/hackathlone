"use client";

import React from "react";
import { AgenciesSlider } from "./agencies-slider";

const SpaceAgencies = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-9 mx-4 sm:mx-8 lg:mx-[8.06%] mt-[3%] mb-[20%] items-center">
      {/* Left Section: Text Content */}
      <div className="w-full lg:w-1/2 lg:ml-8">
        <h1 className="font-hackathoneCabinetGrotesk font-bold text-hackathone-font-rocket-red text-[30.99px] leading-[44.62px] sm:text-[32.99px] lg:text-[42px] my-2 pb-2">
          Space Agencies
        </h1>
        <div className="lg:mr-12">
          <p className="font-hackathoneCabinetGrotesk font-medium text-slate-50 text-[16px] leading-[30.57px] sm:text-[18px] sm:leading-[30.57px] lg:text-[18px] lg:leading-[1.8rem] text-justify lg:text-left">
            <span className="text-hackathone-font-rocket-red font-semibold">
              NASA
            </span>{" "}
            teamed up with{" "}
            <span className="text-hackathone-font-rocket-red font-semibold">
              16 agencies
            </span>{" "}
            space agency partners to bring the largest global hackathon to
            communities worldwide! Together with{" "}
            <span className="text-hackathone-font-rocket-red font-semibold">
              NASA’s Earth Science Division
            </span>
            , these agencies have crafted unique problem statements across
            various domains, from agrotech and biotech to software, the arts,
            and more. They provide access to data and resources related to Earth
            observations to help participants tackle these challenges.
          </p>
        </div>
      </div>

      {/* Right Section: Agencies Slider */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
        <AgenciesSlider />
      </div>
    </section>
  );
};

export default SpaceAgencies;
