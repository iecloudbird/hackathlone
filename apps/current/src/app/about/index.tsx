import React from "react";
import { Timeline } from "@/components/ui/timeline";
import J23_1 from "@/assets/images/journey/23-1-min.png";
import J23_2 from "@/assets/images/journey/23-2-min.jpg";
import J23_3 from "@/assets/images/journey/23-3-min.png";
import J23_4 from "@/assets/images/journey/23-4-min.png";
import J24_1 from "@/assets/images/journey/24-1-min.jpeg";
import J24_2 from "@/assets/images/journey/24-2-min.jpg";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "HackAthlone 2023",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Our beginning
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            First-ever 48-hour space hackathon in Ireland
          </div>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            100+ participants from across Ireland
          </div>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            Groundbreaking inaugural event
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <Image
              src={J23_1}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={J23_2}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={J23_3}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={J23_4}
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "HackAthlone 2024",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Growing stronger
          </p>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            210+ participants with 22 global submissions
          </div>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            3 global nominations to NASA
          </div>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            Expanded international participation
          </div>
          <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
            Theme: "The Sun Touches Everything"
          </div>
          <div className="mt-3 grid grid-cols-2 gap-4">
            <Image
              src={J24_1}
              alt="hero template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src={J24_2}
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "HackAthlone 2025",
      content: (
        <div>
          <p className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 font-hackathoneCabinetGrotesk text-2xl font-semibold text-transparent">
            Our moment
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              220+ participants expected
            </div>
            <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Enhanced facilities and resources
            </div>
            <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              New theme: "Learn, Launch, Lead"
            </div>
            <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Biggest year yet with improved everything
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
