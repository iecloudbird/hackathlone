import Image from "next/image";
import HackAthlone from "@/assets/svgs/hackathlone-logo.svg";
import { motifList } from "@/data/homepage/brief";
import { Athlone } from "../const";
import { BriefCard } from "./grid";

export const BriefSection = () => {
  return (
    <section className="mx-auto mt-[10%] flex flex-col items-center justify-center text-center lg:mx-[6%]">
      <div className="flex w-full">
        <div className="flex flex-col gap-4 text-left lg:w-1/2">
          <h3 className="font-nokaTrial text-3xl font-bold text-brightYellow">
            What is Hack{Athlone}25<span className="font-sans">?</span>
          </h3>
          <p className="max-w-xl text-xl">
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
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="mt-[10%] flex w-full">
        <BriefCard items={motifList} />
      </div>
    </section>
  );
};
