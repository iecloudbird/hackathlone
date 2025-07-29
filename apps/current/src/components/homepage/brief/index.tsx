import { motion } from "framer-motion";
import Image from "next/image";
import { type FC } from "react";
import Jupiter from "@/assets/images/jupiter.png";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { type BriefSectionData } from "@/data/homepage/brief";
import { SectionContainer } from "../SectionContainer";
import { CountdownTimer } from "./CountdownTimer";

interface BriefSectionProps {
  briefData: BriefSectionData;
}

export const BriefSection: FC<BriefSectionProps> = ({ briefData }) => {
  const { title, paragraphs, countdownLabel, eventDate, imageUrl, imageAlt } =
    briefData;

  return (
    <SectionContainer className="relative bg-deepSpace p-0 text-white">
      <ShootingStars />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 text-left">
          <motion.h2
            className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-nokaTrial text-[28px] font-semibold text-transparent max-md:text-center lg:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>

          <div className="flex flex-col gap-4 text-justify font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
            <p>
              Every year, NASA opens up its data and challenges the world to
              help solve problems in space and on Earth. This year's mission:{" "}
              <span className="font-bold text-brightYellow">
                Learn, Launch, Lead
              </span>{" "}
              - where you'll learn new skills to succeed in STEM fields, launch
              ideas that transform NASA's open data into actionable tools, and
              lead your communities in driving technological innovation.
            </p>
            <p>
              You'll have 48 hours to dig into real NASA datasets, form a team,
              and build something that matters. Whether you're a developer,
              designer, researcher, or just someone who loves solving problems,
              there's a place for you here.
            </p>
          </div>

          <div className="mt-2 font-hackathoneCabinetGrotesk">
            <CountdownTimer targetDate={eventDate} label={countdownLabel} />
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute -right-20 top-[105%] z-0 w-3/4 -translate-y-1/2 max-md:hidden"
          >
            <Image src={Jupiter} alt="Jupiter Background" />
          </motion.div>

          <div className="relative z-10 overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
            <div className="overflow-hidden rounded-xl">
              <Image
                src={imageUrl}
                alt={imageAlt}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-300 hover:scale-105"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
