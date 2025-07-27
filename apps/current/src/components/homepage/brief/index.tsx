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
          <h2 className="font-nokaTrial text-[28px] font-semibold max-md:text-center lg:text-4xl">
            {title}
          </h2>

          <div className="flex flex-col gap-4 text-justify font-hackathoneCabinetGrotesk">
            {paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-300 lg:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 font-hackathoneCabinetGrotesk">
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
