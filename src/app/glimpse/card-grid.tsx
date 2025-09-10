import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { motion, animate } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Code from "@/assets/images/general/landing-page/Code.png";
import { MomentsImages, PhotoWallImages, VolunteerImages } from "./glimpse.dto";

const CustomArrow = ({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: () => void;
}) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick();
    //reset color
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <div
      className={`absolute top-0 ${
        direction === "prev" ? "left-0" : "right-0"
      } z-20 flex h-full w-16 cursor-pointer items-center justify-center`}
      onClick={handleClick}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`rounded-full p-2 transition-colors duration-300 ${
          isClicked ? "bg-hackathone-font-rocket-red" : "bg-white/50"
        }`}
      >
        {direction === "prev" ? (
          <ChevronLeft className={`size-6 text-black`} />
        ) : (
          <ChevronRight className={`size-6 text-black`} />
        )}
      </motion.div>
    </div>
  );
};
// navigate to old website
interface CountUpProps {
  target: number;
  className?: string;
  suffix?: string;
  duration?: number;
  decimals?: number;
}

export const CardGrid = () => {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    adaptiveHeight: true,
    cssEase: "ease-out",
    dots: true,
    infinite: true,
    nextArrow: (
      <CustomArrow
        direction="next"
        onClick={() => sliderRef.current?.slickNext()}
      />
    ),
    prevArrow: (
      <CustomArrow
        direction="prev"
        onClick={() => sliderRef.current?.slickPrev()}
      />
    ),
    slidesToScroll: 1,
    slidesToShow: 1,
  };
  const CountUp = ({
    target,
    className,
    suffix = "",
    duration = 3,
    decimals = 0,
  }: CountUpProps) => {
    const [value, setValue] = useState(0);
    const [hasReachedTarget, setHasReachedTarget] = useState(false);

    useEffect(() => {
      const controls = animate(0, target, {
        duration: duration,
        onComplete: () => setHasReachedTarget(true),
        onUpdate: (v) => setValue(parseFloat(v.toFixed(decimals))),
      });

      return () => controls.stop(); // Cleanup animation on unmount
    }, [decimals, duration, target]);

    return (
      <motion.h3
        className={className}
        initial={{ opacity: 0, y: 10 }}
        animate={hasReachedTarget ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {value}
        {suffix}
      </motion.h3>
    );
  };
  return (
    <div className="gap-4 overflow-hidden sm:gap-6 lg:gap-8">
      <div className="mb-4 flex flex-col gap-4 sm:gap-6 lg:flex-row lg:gap-8">
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6 lg:w-2/5 lg:flex-col lg:gap-8">
          {/*Overview: Block 1 */}
          <div className="sm::w-1/2 h-fit w-full items-start justify-start rounded-2xl border border-transparent bg-gray-800 text-start lg:w-full">
            <div className="m-4 w-fit justify-center rounded-md border bg-hackathone-font-rocket-red lg:m-6">
              <motion.button
                className="justify-center rounded-md border bg-hackathone-font-rocket-red ease-in-out"
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <span className="block px-4 py-2 font-hackathoneCabinetGrotesk text-base font-bold text-black lg:text-lg">
                  Overview
                </span>
              </motion.button>
            </div>
            <div className="flex flex-wrap items-start justify-start gap-4 pb-4 pl-4 sm:justify-center md:flex-row md:flex-nowrap lg:pl-2">
              <div className="md:mx-4 md:w-1/3">
                <CountUp
                  target={15}
                  suffix="+"
                  duration={2}
                  className="text-[2.5rem] font-bold lg:text-[3rem]"
                />
                <p className="">
                  Subject Matter{" "}
                  <span className="hidden lg:block">Expert mentors</span>
                </p>
              </div>
              <div className="md:w-1/3">
                <CountUp
                  target={140}
                  suffix="+"
                  duration={5}
                  className="text-[2.5rem] font-bold lg:text-[3rem]"
                />
                <p>Participants</p>
              </div>
              <div className="md:w-1/3">
                <CountUp
                  target={2.5}
                  suffix="k"
                  duration={4}
                  decimals={1}
                  className="text-[2.5rem] font-bold lg:text-[3rem]"
                />
                <p>Cash Prize</p>
              </div>
            </div>
          </div>
          {/*Revisit: Block 2 */}
          <div className="relative h-fit w-full items-start justify-start overflow-hidden rounded-2xl border-4 border-black bg-gray-800 text-start sm:w-1/2 lg:w-full">
            {/* Image as background cover */}
            <Image
              src={Code}
              alt="Code"
              layout="fill" // Ensures the image scales with the parent div size
              objectFit="cover" // Ensures the image covers the container without distortion
              className="rounded-t-2xl" // Add rounded corners to match the parent div
            />
            {/* Content */}
            <div className="relative z-10">
              <div className="m-4 w-fit justify-center rounded-md border bg-hackathone-font-rocket-red lg:m-6">
                <motion.button
                  className="justify-center rounded-md border bg-hackathone-font-rocket-red ease-in-out"
                  whileHover={{
                    scale: 1.1,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  onClick={() =>
                    window.open(
                      "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
                      "_blank"
                    )
                  }
                >
                  <span className="block px-4 py-2 font-hackathoneCabinetGrotesk text-base font-bold text-black lg:text-lg">
                    Revisit
                  </span>
                </motion.button>
              </div>
            </div>
            {/* Text */}
            <div className="relative z-10 flex items-end justify-between">
              <div className="items-end px-6 text-start">
                <p className="py-4 text-[2rem] font-bold leading-tight lg:text-[2.5rem]">
                  <span className="text-hackathone-font-rocket-red">
                    Hackath
                  </span>
                  l<span className="text-hackathone-font-rocket-red">on</span>e{" "}
                  <span className="block">2023</span>
                </p>
              </div>
              <div className="hidden p-4 md:block">
                <motion.button
                  transition={{ duration: 0.1 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="rounded-full border bg-white p-4 transition duration-300 ease-in-out hover:bg-hackathone-font-rocket-red"
                  onClick={() =>
                    window.open(
                      "https://66b8783ce930a118fc45939c--voluble-conkies-fba672.netlify.app/",
                      "_blank"
                    )
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="size-6 text-black"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
        {/* Block 3: Moments to relive */}
        <div className="relative h-52 w-full overflow-hidden rounded-2xl border-4 border-black bg-gray-800 sm:h-[400px] lg:h-[500px] lg:w-3/5">
          <Slider {...settings} className="absolute inset-0 z-0">
            {MomentsImages.map((item, index) => (
              <div key={index} className="relative size-full">
                <Image
                  className="size-full h-[220px] rounded-2xl object-cover sm:h-[500px] lg:h-[600px]"
                  src={item.img}
                  alt={"Participants"}
                ></Image>
              </div>
            ))}
          </Slider>
          <div className="absolute left-4 top-4 z-10 lg:left-6 lg:top-6">
            <motion.button
              className="justify-center rounded-md border bg-hackathone-font-rocket-red ease-in-out"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <span className="block px-4 py-2 font-hackathoneCabinetGrotesk text-base font-bold text-black lg:text-lg">
                Moments to relive
              </span>
            </motion.button>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:gap-6 lg:gap-8">
        {/* Block 4: PhotoWall */}
        <div className="relative h-52 w-full overflow-hidden rounded-2xl border-4 border-black bg-gray-800 sm:h-72 sm:w-1/2 lg:h-96 lg:w-3/5">
          <Slider {...settings} className="absolute inset-0 z-0">
            {PhotoWallImages.map((item, index) => (
              <div key={index} className="relative size-full">
                <Image
                  className="size-full h-[220px] rounded-2xl object-cover sm:h-[300px] lg:h-[400px]"
                  src={item.img}
                  alt={"Participants"}
                ></Image>
              </div>
            ))}
          </Slider>
          <div className="absolute left-4 top-4 z-10 lg:left-6 lg:top-6">
            <motion.button
              className="justify-center rounded-md border bg-hackathone-font-rocket-red ease-in-out"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <span className="block px-4 py-2 text-base font-bold text-black lg:text-lg">
                PhotoWall
              </span>
            </motion.button>
          </div>
        </div>
        {/* Block 5 : Volunteer */}
        <div className="relative h-52 w-full items-start justify-start overflow-hidden rounded-2xl border-4 border-black bg-gray-800 text-start sm:h-72 sm:w-1/2 lg:h-96 lg:w-2/5">
          {/* Image as background cover */}
          <Slider {...settings} className="absolute inset-0 z-0">
            {VolunteerImages.map((item, index) => (
              <div key={index} className="relative size-full">
                <Image
                  className="size-full h-[220px] rounded-2xl object-cover sm:h-[300px] lg:h-[400px]"
                  src={item.img}
                  alt={"Volunteers"}
                />
              </div>
            ))}
          </Slider>
          <div className="absolute left-4 top-4 z-10 lg:left-6 lg:top-6">
            <motion.button
              className="justify-center rounded-md border bg-hackathone-font-rocket-red ease-in-out"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
              }}
            >
              <span className="block px-4 py-2 font-bold text-black lg:text-lg">
                Volunteer
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};
