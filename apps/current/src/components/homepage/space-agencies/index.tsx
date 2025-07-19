import { type FC } from "react";
import { type SpaceAgenciesSectionData } from "@/data/homepage/space-agencies";
import { SectionContainer } from "../SectionContainer";
import { AgencyCard } from "./AgencyCard";

interface SpaceAgenciesSectionProps {
  spaceAgenciesData: SpaceAgenciesSectionData;
}

export const SpaceAgenciesSection: FC<SpaceAgenciesSectionProps> = ({
  spaceAgenciesData,
}) => {
  const { title, agencies } = spaceAgenciesData;

  return (
    <SectionContainer className="text-white">
      <div className="flex w-full flex-col gap-8">
        <h2 className="font-nokaTrial text-3xl font-bold lg:text-4xl">
          {title}
        </h2>

        <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {agencies.map((agency) => (
              <AgencyCard key={agency.id} agency={agency} />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
