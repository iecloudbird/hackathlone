/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import HMD from "@/assets/images/hmd_xr4u.svg";
import XR4U from "@/assets/images/xr4uLogo.svg";

const Xr4uSection = () => {
  return (
    <section className="relative mx-auto mb-20 mt-4 max-w-6xl rounded-2xl bg-gradient-to-br from-transparent via-black to-[#BFFD44]/40 py-20 pl-20 shadow-lg max-md:p-8 md:flex md:items-center md:justify-between md:space-x-10">
      {/* Left Text */}
      <div className="md:w-[45%]">
        <h2 className="mb-6 font-hackathoneCabinetGrotesk text-3xl font-bold text-white max-md:text-center md:text-4xl">
          <span className="text-lime-400">XR4U</span>
        </h2>
        <p className="mb-4 text-justify font-hackathoneCabinetGrotesk text-sm leading-relaxed text-neutral-300 max-md:text-center md:text-base">
          XR is a{" "}
          <span className="font-semibold text-lime-400">
            bunch of evolving technologies{" "}
          </span>
          that enable digital extension of conventional reality. These digital
          extensions get adopted in workplaces as tools when stakeholders
          discover them as{" "}
          <span className="font-semibold text-lime-400">task enhancements</span>
          .
        </p>
        <p className="mb-6 text-justify font-hackathoneCabinetGrotesk text-sm leading-relaxed text-neutral-300 max-md:text-center md:text-base">
          At XR4U, our passion lies in driving process transformations across
          diverse industries. Guided by a data-driven R&amp;D philosophy, we
          focus on optimizing key operational metrics to enhance efficiency and
          performance within companies.
        </p>
        <Link
          href="https://www.xr4u.tech/"
          target="_blank"
          rel="noopener noreferrer"
          className="my-3 rounded-md bg-lime-400 px-5 py-2 font-semibold text-black transition-all duration-300 ease-in-out hover:-translate-y-1 max-md:mx-auto max-md:flex max-md:w-fit max-md:items-center max-md:justify-center"
        >
          Know More
        </Link>
      </div>

      {/* Right Content */}
      <div className="relative mt-10 flex flex-col items-center justify-center md:mt-0 md:w-1/2">
        <Image
          width={350}
          height={350}
          src={XR4U}
          alt="XR4U Logo"
          className="mb-4"
        />
        <p className="text-center font-hackathoneCabinetGrotesk text-sm font-medium text-neutral-200 md:text-base">
          A P2P ecosystem of{" "}
          <span className="font-semibold text-lime-400">Impact-First</span>{" "}
          individuals <br /> working on{" "}
          <span className="font-semibold text-lime-400">
            XR Process Transformations
          </span>
        </p>

        {/* Floating headset image in corner
        <Image
          src={HMD}
          alt="XR Headset"
          className="absolute -top-12 right-0 w-24 max-md:hidden md:w-32"
        /> */}
      </div>
    </section>
  );
};

export default Xr4uSection;
