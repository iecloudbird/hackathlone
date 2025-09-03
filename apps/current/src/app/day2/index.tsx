/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TimelineDay2 } from "@/components/ui/timelineDay2";

export function TimelineDemo() {
  const data = [
    {
      link: "/day2",
      title: "8:00 AM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Breakfast
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Networking breakfast, head down to the atrium.
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "10:00 AM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Mentor Hours (10 AM - 10 PM)
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Mentors from diverse backgrounds would be accessible to all the
            participants (first come - first served basis).
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "11:00 AM",
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
      title: "12:30 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Lunch Time
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Grab your Lunch Coupons from the organizers and make sure to refill.
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "7:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Important announcements
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Tips & Tricks for final presentations.
          </div>
        </div>
      ),
    },
    {
      link: "/day2",
      title: "9:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Dinner Break
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Hackers in the hacker house need fuel to survive. Pizza on the
            house.
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
