"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { RedirectButton } from "@/components/common/shared/RedirectButton";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { type HeroSectionData } from "@/data/homepage/hero";
import { SectionContainer } from "../SectionContainer";

interface HeroSectionProps {
  heroData: HeroSectionData;
}

export const HeroSection = ({ heroData }: HeroSectionProps) => {
  const { registerButtonText, registerButtonHref, backgroundImage } = heroData;

  const [showSecond, setShowSecond] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowSecond((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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

        <motion.div
          className="w-full py-6 lg:w-[30%]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {!showSecond ? (
              <motion.p
                key="subtitle1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="font-hackathoneCabinetGrotesk text-lg"
              >
                This October, join the world’s largest space hackathon in{" "}
                <span className="font-bold text-brightYellow">Ireland</span> and
                tackle real NASA challenges using their data.
              </motion.p>
            ) : (
              <motion.p
                key="subtitle2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="font-hackathoneCabinetGrotesk text-lg"
              >
                We&apos;re one of{" "}
                <span className="font-bold text-brightYellow">450+</span>{" "}
                locations worldwide, but the only one in Ireland offering the
                full 48-hour overnight experience.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-6 font-hackathoneCabinetGrotesk"
        >
          <RedirectButton href={registerButtonHref} text={registerButtonText} />
        </motion.div>
      </div>
      <ShootingStars className="z-[-1]" />
    </SectionContainer>
  );
};
