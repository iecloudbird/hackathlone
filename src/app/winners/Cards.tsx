"use client";
import { IconButton } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import BackButton from "@/assets/images/general/landing-page/back-button.svg";
import Trophy from "@/assets/images/general/landing-page/trophy_draw.png";
import Tooltip from "../general/tooltip";
import { winners } from "./winners.dto";

const WinnerDetails: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-8 overflow-x-hidden sm:mx-[4.06%] lg:mx-[8.06%]">
      {/* Circular icon placeholder */}
      <div className="relative hidden w-full items-center justify-center lg:flex">
        {/* Circular icon placeholder */}
        <div className="absolute right-0 flex h-48 w-52 translate-y-44 items-center justify-center">
          {/* Neon-like inner circular border */}
          <div className="absolute z-[-7] size-80 rounded-full border-8 border-[#d6ff00] opacity-75" />
          {/* Middle circle with medium-dark border */}
          <div className="absolute z-[-108] size-[26rem] rounded-full border-[6px] border-[#EAFE0780] opacity-75" />
          {/* Outer circle with darker border */}
          <div className="absolute z-[-109] size-[32rem] rounded-full border-4 border-[#EAFE0740] opacity-95" />
          {/* Outer fading circle with darkest border */}
          <div className="absolute z-[-100] size-[38rem] rounded-full border-2 border-[#EAFE0740] opacity-75" />
          {/* Trophy Icon */}
          <div className="relative z-0">
            <Image
              src={Trophy}
              alt="Trophy"
              width={400}
              height={400}
              className="max-w-full" // Ensures the image doesn't cause overflow
            />
          </div>
        </div>
      </div>

      {/* Introductory page */}
      <div className="mt-8 flex flex-col lg:mt-12">
        {/* Back Button */}
        {/* Desktop */}
        <Tooltip text="Back to Home">
          <IconButton
            size="small"
            color="primary"
            onClick={() => router.push("/")}
            className="hidden object-left text-white hover:text-hackathone-font-rocket-red lg:block"
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
            <Image width={40} height={40} src={BackButton} alt="Back to Home" />
          </IconButton>
        </Tooltip>

        {/* Rest of the content */}
      </div>

      {/* Cards for Winners */}
      <div className="flex flex-col gap-4 overflow-x-hidden lg:grid lg:grid-cols-3">
        {" "}
        {/* Added overflow-x-hidden */}
        {winners.map((winner, index) => (
          <div
            key={index}
            className={`relative mt-2 flex flex-col overflow-hidden rounded-3xl border-2 border-gray-700`}
          >
            {/* Background Layer with Opacity */}
            <div className="absolute inset-0 z-0 rounded-3xl bg-[#8F8F8F]/50 backdrop-blur-md"></div>

            {/* Image */}
            <div className="relative z-10 flex h-[300px] w-full justify-center p-7 md:h-[400px]">
              {winner.image && (
                <Image
                  src={winner.image}
                  alt={winner.name}
                  width={500}
                  height={300}
                  className="size-full max-w-full object-cover" // Added max-w-full
                />
              )}
            </div>

            {/* Title, Name, and Prize */}
            <div className="relative z-10 w-full px-4 py-2 text-left lg:px-8 xl:px-12">
              {/* Title */}
              <div className="text-3xl font-bold sm:text-4xl">
                <h1 className="text-3xl text-hackathone-font-rocket-red sm:text-4xl">
                  {winner.title}
                </h1>
              </div>

              {/* Name */}
              <div className="mt-2 text-xl font-bold sm:text-2xl">
                <h2>{winner.name}</h2>
              </div>

              {/* Prize */}
              <div className="mt-4 inline-block px-7 py-2 font-bold text-white">
                Prize:
                <span className="text-hackathone-font-rocket-red">
                  {winner.prize}
                </span>
              </div>

              <h3 className="mb-2 text-xl italic text-gray-800">
                Team Members
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {winner.member.map((member, index) => (
                  <span
                    key={index}
                    className="rounded border border-white bg-transparent px-4 py-2 text-white"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WinnerDetails;
