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
            Team confirmation breakfast. Send at least one member to the Atrium
            X to the support desk for official confirmation on team status.
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
            Submit Draft Presentations (Optional)
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            It is a good practice to submit a PDF that can be printed and later
            reviewed by the judges. This PPT submission is relevant for and
            followed by a private practice session with an assigned mentor. This
            can help you refine your projects before you make it public,
            although it is optional to submit.
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
            Practice presentation will run ONLY for the teams that submitted
            draft presentations at 9:00 AM. Time and feedback will be given to
            assist the hackers with this dry run of the presentation.
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
            Lunch (And Due time to submit final presentations)
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            Hot meals will be served.
          </div>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "1:30 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Final Presentations Start
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            The time for the participants to show off their hard work done
            during the Space Apps Challenge in Athlone! The exact room location
            for the presentations will be announced at the venue during the
            event. Please Note - The presentations will be live-streamed on
            YouTube.
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
            Feedback Session with Participants
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            While the judges tally the scores, participants will be reminded to
            focus on giving kind, specific and helpful feedback.
          </div>
        </div>
      ),
    },
    {
      link: "/day3",
      title: "5:30 PM",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Awards and Closing Ceremony
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            The most awaited moment! Winners and category specific winners are
            announced, along with the next steps.
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
            Photo Op and Breakout!
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-300 md:text-sm">
            We love to stick around and capture few moments after the hackathon
            with everyone, and you can also join the volunteering team for some
            drinks later at the nearby college bar (Tack Room).
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
