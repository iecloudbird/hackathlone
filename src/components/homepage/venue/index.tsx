import { type FC } from "react";
import { type VenueSectionData } from "@/data/homepage/venue";
import { SectionContainer } from "../SectionContainer";
import { Venue } from "./VenueRow";

interface VenueSectionProps {
  venueData: VenueSectionData;
}

export const VenueSection: FC<VenueSectionProps> = ({ venueData }) => {
  const { eventVenue, title, rows } = venueData;

  return (
    <SectionContainer>
      <div className="w-full space-y-12">
        {rows.map((row, index) => (
          <Venue
            key={index}
            content={row.content}
            image={row.image}
            layout={row.layout}
            isFirstRow={index === 0}
            eventVenue={index === 0 ? eventVenue : undefined}
            title={index === 0 ? title : undefined}
          />
        ))}
      </div>
    </SectionContainer>
  );
};
