/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TimelineDay1 } from "@/components/ui/timelineDay1";

export function TimelineDemo() {
  const data = [
    {
      link: "/day1",
      title: "15:00",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Technology Showcase
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            The event is preceded by live demonstrations of various
            state-of-the-art technology projects by industry partners, mentors
            and TUS researchers.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "17:30",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Registration Check
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Participants present themselves at the Engineering Building desk to
            collect IDs, T-Shirts and Merchandise.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "18:30",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            HACK101 and the Opening Ceremony
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            NASA Space Apps Challenge 2025 Itinerary and Problem statements
            would be discussed (in detail). Participants would also be
            introduced to NASA Open Data, judging criteria and other helpful
            resources. An opening note by TUS President Vincent Cunnane will
            mark the beginning of HackAthlone 2025.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "19:15 ",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            PITCH101
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            It will be explained "How to give an ideal pitch", for which each
            participant will be given a maximum of 30 seconds on the stage. A
            pitch could be positioned around an idea, a vacant spot in your team
            or even for marketing your own skills to a potential teammate.
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "19:20",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Pitch-Fest
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Everyone is then welcome to get in a queue and one by one pitch own
            ideas or need on the stage. This is a good way to lookout for
            skilled team mates that can collaborate together. It acts as an ice
            breaker among all the participants and it is highly recommended for
            all to practice a pitch here for the optimal hackathon
            experience.{" "}
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "20:00",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            T-40 Hours: Hackspaces are open
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Venue space will be open for participants on a first-come
            first-served basis. All areas will be equipped with adequate
            internet and power to keep you supported throughout the event.
            Participants are free to bring air mattresses, pillows, sleeping
            bags or anything that they think would add to the vibe of the event
            (and of course some utility to their survival).{" "}
          </div>
        </div>
      ),
    },
    {
      link: "/day1",
      title: "21:00 ",
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
      link: "/day1",
      title: "23:59",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Overnight Coffee
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Coffee stations will be running and refuelling 24 hours.
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
