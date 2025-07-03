import { statsList } from "@/components/homepage/overview/statsList";
import { SectionContainer } from "../SectionContainer";
import { StatsCard } from "./statsCard";

export const OverviewSection = () => {
  return (
    <SectionContainer>
      <div className="w-full">
        <StatsCard items={statsList} />
      </div>
    </SectionContainer>
  );
};
