import Image from "next/image";
import { type FC } from "react";
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
    <SectionContainer className="bg-deepSpace text-white">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 text-left">
          <h2 className="font-nokaTrial text-3xl font-semibold lg:text-4xl">
            {title}
          </h2>

          <div className="flex flex-col gap-4">
            {paragraphs.map((paragraph: string, index: number) => (
              <p key={index} className="text-gray-300 lg:text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6">
            <CountdownTimer targetDate={eventDate} label={countdownLabel} />
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
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
