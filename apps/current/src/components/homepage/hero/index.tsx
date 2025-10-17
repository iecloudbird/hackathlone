/* eslint-disable tailwindcss/enforces-shorthand */
/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import first from "@/assets/images/general/landing-page/winners25/first.jpg";
import second from "@/assets/images/general/landing-page/winners25/second.jpg";
import third from "@/assets/images/general/landing-page/winners25/third.jpg";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { type HeroSectionData } from "@/data/homepage/hero";
import { SectionContainer } from "../SectionContainer";

interface HeroSectionProps {
  heroData: HeroSectionData;
}

export const HeroSection = ({ heroData }: HeroSectionProps) => {
  const { backgroundImage } = heroData;

  return (
    <SectionContainer className="relative h-screen" marginTop="lg:mt-[5%]">
      <div
        className="absolute inset-0 -translate-y-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      {/* Winners Section */}
      <div className="relative mx-auto flex w-full max-w-3xl items-center justify-center px-4 py-16">
        <div className="absolute flex w-full justify-center">
          {/* 2nd Place - Left */}
          <motion.div
            className="relative -left-4 flex flex-col items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-32 w-40 md:h-40 md:w-48">
              <Image
                src={second}
                alt="3rd Place Winner"
                fill
                className="rounded-lg border-4 border-[#C0C0C0] object-cover shadow-lg"
                sizes="(max-width: 768px) 8rem, 10rem"
              />
            </div>
            <h3 className="mt-4 font-hackathoneCabinetGrotesk text-xl font-bold text-[#C0C0C0]">
              Dilly Dally
            </h3>
            <span className="mt-1 font-nokaTrial text-sm font-medium text-[#C0C0C0]">
              2nd
            </span>
          </motion.div>

          {/* 1st Place - Center */}
          <motion.div
            className="relative -top-8 z-10 mx-[-20px] flex flex-col items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-40 w-48 md:h-48 md:w-56">
              <Image
                src={first}
                alt="1st Place Winner"
                fill
                className="rounded-lg border-4 border-[#FFD700] object-cover shadow-lg"
                sizes="(max-width: 768px) 10rem, 12rem"
              />
            </div>
            <h3 className="mt-4 font-hackathoneCabinetGrotesk text-2xl font-bold text-[#FFD700]">
              CeaSAR
            </h3>
            <span className="mt-1 font-nokaTrial text-lg font-medium text-[#FFD700]">
              1st
            </span>
          </motion.div>

          {/* 3rd Place - Right */}

          <motion.div
            className="relative -right-4 flex flex-col items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-32 w-40 md:h-40 md:w-48">
              <Image
                src={third}
                alt="2nd Place Winner"
                fill
                className="rounded-lg border-4 border-[#CD7F32] object-cover shadow-lg"
                sizes="(max-width: 768px) 8rem, 10rem"
              />
            </div>
            <h3 className="mt-4 font-hackathoneCabinetGrotesk text-xl font-bold text-[#CD7F32]">
              Debugonauts
            </h3>
            <span className="mt-1 font-nokaTrial text-sm font-medium text-[#CD7F32]">
              3rd
            </span>
          </motion.div>
        </div>
      </div>

      {/* Rest of your existing content */}
      <div className="relative flex w-full flex-col items-center pt-10 text-center">
        {/* <motion.h1
          className="text-center font-hackathoneCabinetGrotesk text-lg font-semibold text-hackathone-background-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          viewport={{ once: true }}
        >
          Welcome to
        </motion.h1> */}
        <motion.h1
          className="font-nokaTrial text-6xl font-bold max-md:py-1 max-md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {" "}
          Winners of <span className="text-brightYellow">HackAth</span>l
          <span className="text-brightYellow">on</span>e 2025
        </motion.h1>
        <motion.p
          key="subtitle1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="w-[90%] py-6 font-hackathoneCabinetGrotesk text-xl"
        >
          NASA Space Apps Athlone was a huge success! <br />
          210+ participants with 33 Global Submissions & 4 Global Nominations
        </motion.p>
        {/* <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 font-hackathoneCabinetGrotesk max-md:flex-col"
        >
          <Link
            href="/rulesRegulations"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative w-full overflow-hidden rounded-lg bg-white px-8 py-2.5 text-sm font-bold text-black transition-colors duration-300 hover:bg-white/85">
              <div className="flex items-center justify-center text-black">
                Rules & Regulations
              </div>
            </button>
          </Link>
          <Link
            href="https://www.youtube.com/live/x5fZU-df3qI?si=b9bPgswGjtZVobZg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="relative w-full overflow-hidden rounded-lg bg-[#FFA220] px-8 py-2.5 text-sm font-bold text-black transition-colors duration-300 hover:bg-white/85">
              <div className="flex items-center justify-center text-black">
                Live Stream
              </div>
            </button>
          </Link>
        </motion.div> */}
      </div>
      <ShootingStars className="z-[-1]" />
    </SectionContainer>
  );
};
