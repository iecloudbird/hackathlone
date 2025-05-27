import Image from "next/image";
import React from "react";
import FirstPlace from "@/assets/images/general/landing-page/first-place.jpg";
import SecondPlace from "@/assets/images/general/landing-page/second-place.jpg";
import ThirdPlace from "@/assets/images/general/landing-page/third-place.jpg";

export const WinnersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-center font-hackathoneCabinetGrotesk text-[28px] font-extrabold text-yellow-400 lg:text-[48px]">
        Our Crowned Champions
      </h1>
      <p className="text-center font-hackathoneSFProDisplay text-[24px]">
        Where Innovation Meets Excellence
      </p>
      <div className="my-5 flex flex-col items-center justify-center md:mx-4 md:flex-row">
        <Image
          className="w-full p-5 shadow-2xl md:relative md:mt-8 md:w-1/3"
          src={SecondPlace}
          alt={"Second Place"}
        ></Image>
        <Image
          className="w-full p-5 shadow-2xl md:w-1/3"
          src={FirstPlace}
          alt={"First Place"}
        ></Image>
        <Image
          className="w-full p-5 shadow-2xl md:relative md:mt-16 md:w-1/3"
          src={ThirdPlace}
          alt={"Third Place"}
        ></Image>
      </div>
    </div>
  );
};
