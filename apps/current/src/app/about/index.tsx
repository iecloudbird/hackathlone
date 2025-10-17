/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import M01 from "@/assets/images/general/landing-page/hackthlone24/24_1.jpg";
import M03 from "@/assets/images/general/landing-page/hackthlone24/24_3.jpg";
import J23_1 from "@/assets/images/journey/23-1-min.png";
import J23_2 from "@/assets/images/journey/23-2-min.jpg";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      link: "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
      title: "Space Apps 2021",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            The Beginning: A Vision Takes Shape (2021)
          </p>
          <div className="flex w-4/5 items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            It started with Sahir Sharma, a PhD student at TU Shannon with an
            ambitious dream. Having won the NASA Space Apps Challenge in 2016
            and later organized the event in Vellore, India in 2017 with over
            700 participants, Sahir knew the transformative power of bringing
            people together to solve space challenges.
          </div>
          <div className="flex w-4/5 items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            In 2021, while working as a teaching fellow at the University of
            Limerick, Sahir saw an opportunity. Ireland had never hosted the
            full NASA Space Apps experience - the kind of immersive, 48-hour
            hackathon that changes how people think about innovation.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            So he did what visionaries do: he made it happen. NASA Space Apps
            Challenge Limerick 2021 brought together 100+ participants for
            Ireland's first open-source data science hackathon featuring real
            NASA problem statements, held virtually during the pandemic but
            laying the groundwork for something bigger.
          </div>
        </div>
      ),
    },
    {
      link: "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
      title: "HackAthlone 2023",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Building the Foundation: The Athlone Chapter (2023)
          </p>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            Two years later, the vision evolved. Sahir was joined by Manav Shah
            and Nitish Malik, passionate collaborators who shared his belief
            that Ireland deserved a world-class space innovation event. During
            his research at TUS Athlone he shifted it to a full 48-hour
            in-person experience.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            TU Shannon welcomed the challenge with open arms. The university
            didn't just provide space - they became true partners, offering
            their engineering facilities, labs, and full institutional support.
            It was the kind of partnership that makes ambitious projects
            possible. possible.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            HackAthlone 2023 brought together 100+ participants from across
            Ireland for the country's first in-person space hackathon. The
            energy was electric. Students, professionals, and space enthusiasts
            gathered in the TU Shannon Engineering Building, working through the
            night to tackle real NASA challenges.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            It wasn't just an event - it was the start of a legacy. Teams formed
            organically, ideas flowed freely, and by Sunday evening, everyone
            knew they'd been part of something special. The foundation was laid
            for what would become Ireland's premier space innovation community.
          </div>
          <div className="mt-3 flex gap-2">
            <Image
              src={J23_1}
              alt="startup template"
              width={300}
              height={300}
              className="h-20 w-2/5 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={J23_2}
              alt="startup template"
              width={300}
              height={300}
              className="h-20 w-2/5 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            {/* <Image
              src={J23_3}
              alt="startup template"
              width={300}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={J23_4}
              alt="startup template"
              width={300}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
    {
      link: "https://nasa-spaceapps.vercel.app/",
      title: "HackAthlone 2024",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            The Breakthrough: Going International (2024)
          </p>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            By 2024, word had spread beyond Ireland's borders. The event that
            started as Sahir's vision was now attracting international attention
            and support. This was the year HackAthlone truly came of age.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            Manav, a volunteer from India, made the journey to Ireland to join
            the organizing team on the ground. Alongside Sahir and Nitish, they
            built something unprecedented: a truly international team creating
            an Irish-based space innovation hub, forging partnerships with
            organizations and communities that would amplify their impact.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            The numbers spoke volumes: 125+ participants, 200+ registrations ,
            and most importantly, 23 global project submissions to NASA. But the
            real validation came when three HackAthlone teams earned global
            nominations - recognition from NASA that these Irish teams were
            producing world-class innovation.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            TU Shannon continued to be the perfect partner, providing not just
            space but professional-grade equipment: 3D printers, VR/AR headsets,
            advanced labs. The university's support transformed good ideas into
            working prototypes.
          </div>
          <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
            The partnerships grew beyond the university. Organizations and
            communities across Ireland began to see HackAthlone as a flagship
            event that put Irish innovation on the global map. What started as
            one person's vision was becoming a movement.
          </div>
          <div className="mt-3 flex gap-2">
            <Image
              src={M01}
              alt="hero template"
              width={300}
              height={300}
              className="h-20 w-2/5 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            {/* <Image
              src={M02}
              alt="feature template"
              width={300}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
            <Image
              src={M03}
              alt="feature template"
              width={300}
              height={300}
              className="h-20 w-2/5 rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            {/* <Image
              src={M10}
              alt="feature template"
              width={300}
              height={300}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            /> */}
          </div>
        </div>
      ),
    },
    {
      link: "/",
      title: "HackAthlone 2025",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            The Vision Realized: Learn, Launch, Lead (2025)
          </p>
          <div className="mb-8">
            <div className="flex w-4/5 items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
              This year brings NASA's "Learn, Launch, Lead" theme - exactly what
              HackAthlone has been fostering since day one. With 220+
              participants expected, 2025 represents the maturation of Sahir's
              original vision.
            </div>
            <div className="flex w-4/5 items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
              The improvements are concrete and participant-driven. Based on
              2024 feedback, the team has enhanced food options, upgraded
              overnight amenities, and added shower facilities. TU Shannon
              continues providing professional labs, 3D printers, and VR/AR
              equipment.
            </div>
            <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
              HackAthlone is now established as one of 450+ global NASA Space
              Apps locations, with a proven track record of producing globally
              competitive solutions. The partnership with XR4U brings additional
              expertise, while alumni return as mentors and projects continue
              development beyond the weekend.
            </div>
            <div className="flex w-[80%] items-center gap-2 pb-2 text-justify font-hackathoneCabinetGrotesk text-xs text-neutral-300 max-md:w-[90%] md:text-sm">
              Most importantly, HackAthlone has proven that Ireland belongs in
              the global space conversation - not as observers, but as
              contributors solving problems that matter to NASA and humanity's
              future.
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full text-clip">
      <Timeline data={data} />
    </div>
  );
}
