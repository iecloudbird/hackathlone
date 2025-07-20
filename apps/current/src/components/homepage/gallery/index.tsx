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
    <SectionContainer>
      <div className="w-full">
        <div className="mb-4 text-center">
          <h2 className="text-3xl font-bold text-white lg:text-4xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 text-gray-300 lg:text-lg">{subtitle}</p>
          )}
        </div>

        <DualCarousel carousels={carousels} />
      </div>
    </SectionContainer>
  );
};
