import Image from "next/image";
import HackAthlone from "@/assets/svgs/hackathlone-logo.svg";
import { motifList } from "@/data/homepage/brief";
import { Athlone } from "../const";
import { SectionContainer } from "../SectionContainer";
import { BriefCard } from "./grid";

export const BriefSection = () => {
  return (
    <SectionContainer>
      <div className="flex w-full">
        <div className="flex flex-col gap-4 text-left lg:w-1/2">
          <h3 className="font-nokaTrial text-2xl font-bold text-brightYellow lg:text-3xl">
            What is Hack{Athlone}25<span className="font-sans">?</span>
          </h3>
          <p className="lg:max-w-xl lg:text-xl">
            Support breakthrough ideas using NASA&apos;s open data and gain
            visibility in a global innovation movement. Partner with us to power
            bold solutions for Earth and space.
          </p>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <Image
            src={HackAthlone}
            alt="Hackathon Brief"
            width={300}
            height={150}
            className="hidden rounded-lg shadow-lg lg:block"
          />
        </div>
      </div>
      <div className="mt-[10%] flex w-full">
        <BriefCard items={motifList} />
      </div>
    </SectionContainer>
  );
};
