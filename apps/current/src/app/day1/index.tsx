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
            Kick-Off Ceremony
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Welcome to HackAthlone! We'll start with a high-energy kick-off
            ceremony to get you ready for the weekend.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "7:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Hacking Begins
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Grab your laptops, form your teams, and let the hacking begin!
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "9:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Dinner
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Food is fuel, and we’ve got you covered. Dinner will be served in
            the Atrium.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "11:59 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Midnight Snacks
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Coffee doesn’t stop. Snacks and drinks to keep you hacking through
            the night.
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
