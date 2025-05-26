"use client";

import React from "react";
import { CollabratorsSlider } from "./collabrators-slider";

const GlobalCollabrators = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-6 lg:gap-9 mx-4 sm:mx-8 lg:mx-[8.06%] mt-20 mb-20 items-center">
      {/* Left Section: Slider */}
      <div className="hidden lg:flex mt-6 mt-[5rem] mr-8 w-1/2">
        <CollabratorsSlider />
      </div>

      {/* Right Section: Text Content */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-[3%]">
        <h1 className="font-hackathoneCabinetGrotesk font-bold text-hackathone-font-rocket-red text-[30.99px] leading-[34.62px] sm:text-[32.99px] lg:text-[42px] lg:leading-[44.62px] my-2 pb-2">
          NASA Space Apps
        </h1>
        <div className="font-hackathoneCabinetGrotesk font-normal text-slate-50 text-base sm:text-lg lg:text-lg leading-[160%]">
          <p>
            The NASA Space Apps Challenge 2025 is backed by NASA’s Earth Science
            Division through collaborations with{" "}
            <a
              href="https://www.boozallen.com/"
              className="underline text-hackathone-font-rocket-red hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              Booz Allen Hamilton
            </a>
            ,{" "}
            <a
              href="https://mindgrub.com/"
              className="underline text-hackathone-font-rocket-red hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              Mindgrub
            </a>
            , and{" "}
            <a
              href="https://www.secondmuse.com/"
              className="underline text-hackathone-font-rocket-red hover:text-red-400"
              target="_blank"
              rel="noreferrer"
            >
              SecondMuse
            </a>
            . This year’s hackathon theme is funded by NASA’s Heliophysics
            Division in celebration of the Helio Big Year.
          </p>
          <ul className="list-disc pl-6 sm:pl-12 pr-4 sm:pr-8 pt-8">
            <li>
              NASA’s Heliophysics Division studies the Sun’s impact on space,
              Earth, and technology, using a fleet of spacecraft to understand
              solar wind and space weather. This research protects technology
              and astronauts while revealing how stars influence planetary
              habitability.{" "}
              <a
                href="https://science.nasa.gov/heliophysics/"
                className="underline text-hackathone-font-rocket-red hover:text-red-400"
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
                className="underline text-hackathone-font-rocket-red hover:text-red-400"
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
      <div className="lg:hidden w-full sm:w-[60%] lg:w-1/2 flex justify-center items-center">
        <CollabratorsSlider />
      </div>
    </section>
  );
};

export default GlobalCollabrators;
