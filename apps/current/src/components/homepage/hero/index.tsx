/* eslint-disable tailwindcss/no-custom-classname */
"use client";
import { motion } from "framer-motion";
import { RedirectButton } from "@/components/common/shared/RedirectButton";
import RegistrationHelp from "@/components/common/shared/RegistrationHelp";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { type HeroSectionData } from "@/data/homepage/hero";
import { SectionContainer } from "../SectionContainer";

interface HeroSectionProps {
  heroData: HeroSectionData;
}

export const HeroSection = ({ heroData }: HeroSectionProps) => {
  const { registerButtonText, registerButtonHref, backgroundImage } = heroData;

  return (
    <SectionContainer className="relative h-screen" marginTop="lg:mt-[5%]">
      <div
        className="absolute inset-0 -translate-y-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />

      <div className="relative flex w-full flex-col items-center text-center">
        <motion.h1
          className="text-center font-hackathoneCabinetGrotesk text-lg font-semibold text-hackathone-background-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0 }}
          viewport={{ once: true }}
        >
          Welcome to
        </motion.h1>

        <motion.h1
          className="font-nokaTrial text-6xl font-bold max-md:py-1 max-md:text-5xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="text-brightYellow">HackAth</span>l
          <span className="text-brightYellow">on</span>e 25
        </motion.h1>

        <motion.p
          key="subtitle1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="w-[90%] py-6 font-hackathoneCabinetGrotesk text-sm"
        >
          We&apos;re one of 450+ locations worldwide, but the only one in
          Ireland offering the full 48-hour overnight experience. <br />
          This October, join the world’s largest space hackathon in Ireland and
          tackle real NASA challenges using their data.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 font-hackathoneCabinetGrotesk max-md:flex-col"
        >
          <RedirectButton href={registerButtonHref} text={registerButtonText} />
          <RegistrationHelp />
        </motion.div>
      </div>
      <ShootingStars className="z-[-1]" />
    </SectionContainer>
  );
};
