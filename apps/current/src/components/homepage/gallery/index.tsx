import { motion } from "framer-motion";
import { type FC } from "react";
import { type GallerySectionData } from "@/data/homepage/gallery";
import { SectionContainer } from "../SectionContainer";
import { DualCarousel } from "./DualCarousel";

interface GallerySectionProps {
  galleryData: GallerySectionData;
}

export const GallerySection: FC<GallerySectionProps> = ({ galleryData }) => {
  const { title, subtitle, carousels } = galleryData;

  return (
    <SectionContainer className="hidden md:block">
      <div className="w-full">
        <div className="mb-4 text-center">
          <motion.h2
            className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-2 font-nokaTrial text-[28px] font-semibold text-transparent max-md:text-center lg:text-4xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p
              className="mt-4 font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <DualCarousel carousels={carousels} />
      </div>
    </SectionContainer>
  );
};
