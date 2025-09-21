/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { TimelineDay3 } from "@/components/ui/timelineDay3";

export function TimelineDemo() {
  const data = [
    {
      link: "/day3",
      title: "7:00 AM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Breakfast
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Team confirmation breakfast
          </div>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "9:00 AM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Submit Draft Presentations
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            It is a good practice to submit a PDF that can be printed and later
            reviewed by the judges.
          </div>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "10:00 AM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Practice Presentations and Feedback Session
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Time and feedback will be given to assist the hackers with a dry run
            of the presentation.
          </div>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "12:30 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Lunch
          </p>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "2:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Final Presentations Start
          </p>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "3:30 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Show Off your Work
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            The time for the participants to show off their hard work done
            during the Space Apps Challenge!
          </div>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "5:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Judges Deliberation and Feedback Session
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Participants will be reminded to focus on giving kind, specific and
            helpful feedback.
          </div>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "6:00 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Closing Ceremony and Results
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            The most awaited moment! The Global Nominees are announced, along
            with the next steps.
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative w-full text-clip">
      <TimelineDay3 data={data} />
    </div>
  );
}
