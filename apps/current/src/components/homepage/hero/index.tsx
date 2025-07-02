"use client";

import { Marquee } from "./Marquee";

export const HeroSection = () => {
  return (
    <section className="mx-auto mt-16 flex flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8 lg:px-[8.06%]">
      {/* Title */}
      <div className="mx-auto font-hackathoneCabinetGrotesk text-[3rem] font-extrabold leading-[51.26px] text-hackathone-font-rocket-red sm:text-[3.5rem] sm:leading-[4rem] lg:text-[65.08px] lg:leading-[73.26px]">
        <p>
          HackAth<span className="text-white">l</span>on
          <span className="text-white">e</span>&apos;25 Returns <br />
          with a Bang!
        </p>
      </div>

      {/* Subtitle */}
      <div className="mx-auto text-[1rem] leading-[24.57px] sm:text-[20px] sm:leading-[28.57px] lg:mx-40 lg:text-[24px] lg:leading-[36.57px]">
        <p className="mt-3 font-hackathoneSFProDisplay font-normal text-white">
          Registration will start soon — stay tuned!
        </p>
      </div>
      <Marquee speed={100} />
    </section>
  );
};
