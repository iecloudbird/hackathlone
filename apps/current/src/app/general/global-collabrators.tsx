"use client";

import React from "react";
import { CollabratorsSlider } from "./collabrators-slider";

const GlobalCollabrators = () => {
  return (
    <section className="mx-4 my-20 flex flex-col items-center gap-6 sm:mx-8 lg:mx-[8.06%] lg:flex-row lg:gap-9">
      {/* Left Section: Slider */}
      <div className="mr-8 mt-20 hidden w-1/2 lg:flex">
        <CollabratorsSlider />
      </div>

      {/* Right Section: Text Content */}
      <div className="mt-6 w-full lg:mt-[3%] lg:w-1/2">
        <h1 className="my-2 pb-2 font-hackathoneCabinetGrotesk text-[30.99px] font-bold leading-[34.62px] text-hackathone-font-rocket-red sm:text-[32.99px] lg:text-[42px] lg:leading-[44.62px]">
          NASA Space Apps
        </h1>
        <div className="font-hackathoneCabinetGrotesk text-base font-normal leading-[160%] text-slate-50 sm:text-lg lg:text-lg">
          <p>
            The NASA Space Apps Challenge 2025 is backed by NASA’s Earth Science
            Division through collaborations with{" "}
            <a
              href="https://www.boozallen.com/"
              className="text-hackathone-font-rocket-red underline hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              Booz Allen Hamilton
            </a>
            ,{" "}
            <a
              href="https://mindgrub.com/"
              className="text-hackathone-font-rocket-red underline hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              Mindgrub
            </a>
            , and{" "}
            <a
              href="https://www.secondmuse.com/"
              className="text-hackathone-font-rocket-red underline hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              SecondMuse
            </a>
            . This year’s hackathon theme is funded by NASA’s Heliophysics
            Division in celebration of the Helio Big Year.
          </p>
          <ul className="list-disc pl-6 pr-4 pt-8 sm:pl-12 sm:pr-8">
            <li>
              NASA’s Heliophysics Division studies the Sun’s impact on space,
              Earth, and technology, using a fleet of spacecraft to understand
              solar wind and space weather. This research protects technology
              and astronauts while revealing how stars influence planetary
              habitability.{" "}
              <a
                href="https://science.nasa.gov/heliophysics/"
                className="text-hackathone-font-rocket-red underline hover:text-red-400"
                target="_blank"
                rel="noreferrer"
              >
                (Know more)
              </a>
            </li>
            <li className="pt-2 sm:pt-4">
              NASA’s Earth Science Division (ESD) uses cutting-edge technology
              to study Earth’s systems, like the atmosphere and oceans,
              providing free data on climate and environmental changes. By
              collaborating globally and supporting education, ESD empowers
              students to explore and understand our planet.{" "}
              <a
                href="https://science.nasa.gov/earth-science"
                className="text-hackathone-font-rocket-red underline hover:text-red-400"
                target="_blank"
                rel="noreferrer"
              >
                (Know more)
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Bottom Section: Slider */}
      <div className="flex w-full items-center justify-center sm:w-3/5 lg:hidden lg:w-1/2">
        <CollabratorsSlider />
      </div>
    </section>
  );
};

export default GlobalCollabrators;
