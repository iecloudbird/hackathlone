/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  FlaskConical,
  Users,
  UtensilsCrossed,
  Network,
} from "lucide-react";

import Link from "next/link";
import fnb from "@/assets/images/bento/fnb.png";
import globalCommunity from "@/assets/images/bento/globalCommunity.jpg";
import mentors from "@/assets/images/bento/mentors.jpg";
import overNightHackathon from "@/assets/images/bento/overnightHack.jpg";
import stateOfTheArt from "@/assets/images/bento/stateOfTheArt.jpg";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { SectionContainer } from "../SectionContainer";

export function BentoSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <SectionContainer>
      <motion.h2
        className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-10 font-nokaTrial text-[28px] font-semibold text-transparent max-md:text-center lg:text-4xl"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        What makes HackAthlone{" "}
        <span className="text-brightYellow">different</span>
      </motion.h2>

      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Globe2 className="size-4 text-white" />}
          title="Ireland’s Biggest Space Hackathon"
          description="An intense 48-hour overnight challenge pushing creativity and innovation"
          bgImage={overNightHackathon.src}
          variants={itemVariants}
          href="https://maps.app.goo.gl/ZMbFCPp9jdJtoBCX8"
        />
        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<FlaskConical className="size-4 text-white" />}
          title="Full Access to TU Shannon Labs"
          description="State‑of‑the‑art tools and equipment at your fingertips"
          bgImage={stateOfTheArt.src}
          variants={itemVariants}
          href="https://maps.app.goo.gl/ZMbFCPp9jdJtoBCX8"
        />
        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Users className="size-4 text-white" />}
          title="Expert Mentorship"
          description="Guidance from academia and industry leaders"
          bgImage={mentors.src}
          variants={itemVariants}
          href="/mentors"
        />
        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<UtensilsCrossed className="size-4 text-white" />}
          title="All-Inclusive Experience"
          description="Meals, resources, and everything you need covered"
          bgImage={fnb.src}
          variants={itemVariants}
          href="https://maps.app.goo.gl/ZMbFCPp9jdJtoBCX8"
        />
        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<Network className="size-4 text-white" />}
          title="Global NASA Network"
          description="Be part of a worldwide innovation community"
          bgImage={globalCommunity.src}
          variants={itemVariants}
          href="https://www.nasa.gov/"
        />
      </ul>
    </SectionContainer>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  bgImage: string;
  variants: any;
  href?: string;
}

const GridItem = ({
  area,
  icon,
  title,
  description,
  bgImage,
  variants,
  href,
}: GridItemProps) => {
  return (
    <motion.li className={`min-h-56 list-none ${area}`} variants={variants}>
      <Link href={`${href}`} target="_blank" aria-label={title}>
        <div className="relative h-full overflow-hidden rounded-2xl border md:rounded-3xl">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className="absolute inset-0 bg-black/40 brightness-50 backdrop-blur-[1px]" />
          </div>

          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
          />

          <div className="relative z-10 flex h-full flex-col justify-between gap-6 rounded-xl p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
            <div className="relative flex flex-1 flex-col justify-between gap-3">
              <div className="w-fit rounded-lg border border-gray-600 bg-black/40 p-2">
                {icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-balance pt-0.5 font-hackathoneCabinetGrotesk text-xl/[1.375rem] font-semibold text-white md:text-2xl/[1.875rem]">
                  {title}
                </h3>
                <h2 className="font-hackathoneCabinetGrotesk text-sm/[1.125rem] text-neutral-200 md:text-base/[1.375rem]">
                  {description}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};
