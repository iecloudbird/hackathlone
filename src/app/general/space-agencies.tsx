"use client";

import React from "react";
import { AgenciesSlider } from "./agencies-slider";

const SpaceAgencies = () => {
  return (
    <section className="mx-4 mb-[20%] mt-[3%] flex flex-col items-center gap-6 sm:mx-8 lg:mx-[8.06%] lg:flex-row lg:gap-9">
      {/* Left Section: Text Content */}
      <div className="w-full lg:ml-8 lg:w-1/2">
        <h1 className="my-2 pb-2 font-hackathoneCabinetGrotesk text-[30.99px] font-bold leading-[44.62px] text-hackathone-font-rocket-red sm:text-[32.99px] lg:text-[42px]">
          Space Agencies
        </h1>
        <div className="lg:mr-12">
          <p className="text-justify font-hackathoneCabinetGrotesk text-[16px] font-medium leading-[30.57px] text-slate-50 sm:text-[18px] sm:leading-[30.57px] lg:text-left lg:text-[18px] lg:leading-[1.8rem]">
            <span className="font-semibold text-hackathone-font-rocket-red">
              NASA
            </span>{" "}
            teamed up with{" "}
            <span className="font-semibold text-hackathone-font-rocket-red">
              16 agencies
            </span>{" "}
            space agency partners to bring the largest global hackathon to
            communities worldwide! Together with{" "}
            <span className="font-semibold text-hackathone-font-rocket-red">
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
      <div className="mt-6 w-full lg:mt-0 lg:w-1/2">
        <AgenciesSlider />
      </div>
    </section>
  );
};

export default SpaceAgencies;
