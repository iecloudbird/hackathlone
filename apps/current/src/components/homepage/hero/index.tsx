"use client";

import { Marquee } from "./Marquee";

export const HeroSection = () => {
  return (
    <section className="mx-auto mt-16 flex flex-col items-center justify-center text-center">
      <Marquee speed={250} />
    </section>
  );
};
