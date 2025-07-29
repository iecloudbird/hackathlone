import { motion } from "framer-motion";
import { type FC } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { type SpaceAgenciesSectionData } from "@/data/homepage/space-agencies";
import { SectionContainer } from "../SectionContainer";
import { AgencyCard } from "./AgencyCard";

interface SpaceAgenciesSectionProps {
  spaceAgenciesData: SpaceAgenciesSectionData;
}

export const SpaceAgenciesSection: FC<SpaceAgenciesSectionProps> = ({
  spaceAgenciesData,
}) => {
  const { title, subtitle, agencies } = spaceAgenciesData;

  return (
    <SectionContainer className="text-white">
      <ShootingStars />
      <div className="flex w-full flex-col">
        <motion.h2
          className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-nokaTrial text-[28px] font-semibold text-transparent max-md:text-center lg:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="pb-8 text-center font-hackathoneCabinetGrotesk text-lg font-light max-md:px-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>

        <motion.div
          className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-5 gap-4 max-md:grid-cols-3">
            {agencies.map((agency, index) => (
              <AgencyCard
                key={agency.id}
                agency={agency}
                isLast={index === agencies.length - 1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
