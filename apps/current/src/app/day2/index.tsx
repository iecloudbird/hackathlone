/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TimelineDay2 } from "@/components/ui/timelineDay2";

export function TimelineDemo() {
  const data = [
    {
      link: "/day2",
      title: "08:00",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Breakfast with Mentors
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Fresh fruits and bakery buffet to fuel this networking breakfast.
            Head down to Atrium X and get a chance to meet some of the mentors
            at HackAthlone this year.
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "10:00",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Mentor Hours
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Mentors from diverse backgrounds would be going around the event
            venue. They would be accessible to all the participants on a first
            come-first served basis.
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "12:30",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Lunch
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Hot meals will be served.
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "14:00",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Bootcamp
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            To be announced
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "19:00",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Important announcements
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Come down to the atrium X for some final considerations before you
            present your projects in front of judges.
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "21:00",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Dinner
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Pizza Party
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "23:59",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Coffee doesn't Stop...
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            We have tea as well.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full text-clip">
      <TimelineDay2 data={data} />
    </div>
  );
}
