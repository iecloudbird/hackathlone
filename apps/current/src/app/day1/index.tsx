/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TimelineDay1 } from "@/components/ui/timelineDay1";

export function TimelineDemo() {
  const data = [
    {
      link: "/day1",
      title: "6:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Registration Check and Opening Ceremony
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Participants register themselves at the Engineering Building desk to
            collect IDs, T-Shirts and Merchandise.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "6:30 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            HACK101
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            NASA Space Apps Challenge 2025 Itinerary and Problem statements
            would be discussed (in detail)
          </div>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Participants would be introduced to NASA Open Data, judging criteria
            and other helpful resources.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "7:15 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            PITCH101 and Pitches
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            s First it is explained, how to give a pitch, for which each
            participant will be given a maximum of 30 seconds.
          </div>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Everyone is welcome to get in a queue and one by one pitch own idea
            and need on the stage. This is a good way to lookout for skilled
            team mates that can collaborate.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "8:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            The Hack begins officially
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Networking sessions to help participants find teammates and approach
            for collaboration after Pitches
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "11:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Fuel up, the night is young.
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Survival is a prerequisite for creating overnight marvels.
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full text-clip">
      <TimelineDay1 data={data} />
    </div>
  );
}
