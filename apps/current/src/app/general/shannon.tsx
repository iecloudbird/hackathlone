"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import { shannonData } from "./general.dto";

const fadeIn = (
  direction: "left" | "right" | "up" | "down",
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: "easeOut",
      type,
    },
    x: 0,
    y: 0,
  },
});

const settings = {
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  cssEase: "ease-out",
  dots: true,
  fade: true,
  infinite: true,
  slidesToScroll: 1,
  slidesToShow: 1,
  speed: 2000,
};

const Shannon = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <section className="mx-4 mb-20 mt-10 py-8 sm:mx-8 sm:mt-16 lg:mx-[8.06%] lg:mb-36 lg:mt-20">
      <div className="flex flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:px-10">
        {/* Left Section: Text Content */}
        <div className="mt-2 flex w-full items-center justify-center sm:mt-6 lg:mr-4 lg:mt-6 lg:w-1/2">
          <div>
            <motion.h1
              variants={fadeIn("right", "tween", 0.2, 0.4)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              className="mb-4 pr-4 font-hackathoneCabinetGrotesk text-[30.99px] font-extrabold leading-[34.62px] text-hackathone-font-rocket-red sm:mb-6 sm:pr-[20%] sm:text-[32.99px] lg:text-[42px] lg:leading-[44.62px]"
            >
              Technology University of the Shannon
            </motion.h1>
            <div className="flex flex-col">
              <motion.p
                variants={fadeIn("down", "tween", 1.2, 0.4)}
                initial={animationComplete ? "" : "hidden"}
                whileInView="show"
                onAnimationComplete={handleAnimationComplete}
                className="my-4 pr-4 font-hackathoneCabinetGrotesk text-base font-medium leading-[30.57px] text-slate-50 sm:mb-4 sm:pr-[20%] sm:text-lg"
              >
                The NASA SpaceApps Challenge 2025 is happening in the heart of
                Ireland, Athlone, with the Technological University of the
                Shannon hosting this in-person hackathon. Renowned for its
                innovation and technological excellence, the university educates
                and inspires over{" "}
                <span className="font-semibold text-hackathone-font-rocket-red">
                  7,000 students
                </span>
                , making it the perfect venue for this prestigious event.
              </motion.p>
              <motion.div
                variants={fadeIn("down", "tween", 1.2, 0.4)}
                initial={animationComplete ? "" : "hidden"}
                whileInView="show"
                onAnimationComplete={handleAnimationComplete}
                className="my-2 pr-4 font-hackathoneCabinetGrotesk text-base font-medium leading-[30.57px] text-slate-50 sm:my-4 sm:pr-[20%] sm:text-lg"
              >
                As the venue partner, the university also offers resources like:
                <ul className="list-disc py-2 pl-10 sm:py-4">
                  <li>Hackshop</li>
                  <li>Software, mechanical, and electrical labs</li>
                  <li>PLA / Resin 3D printers</li>
                  <li>XR headsets like Meta Quest and Hololens</li>
                </ul>
                and more to support your creative projects.
              </motion.div>
            </div>
          </div>
        </div>

        {/* Right Section: Map and Slider */}
        <div className="mt-6 w-full lg:mr-6 lg:mt-6 lg:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4755.461203507001!2d-7.909200223581451!3d53.419643969237065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c496e6b7b9b4f%3A0x8f4cd9c287dbe71d!2sTUS%3A%20Midlands%20Engineering%20%26%20Science%20Building!5e0!3m2!1sen!2sie!4v1723633423719!5m2!1sen!2sie"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="mb-4 h-[300px] w-full rounded-2xl lg:h-[400px]"
          />
          <Slider {...settings}>
            {shannonData.map((item, index) => (
              <div key={index}>
                <Image
                  className="h-[300px] w-full rounded-2xl object-cover lg:h-[400px]"
                  src={item.img}
                  alt="Shannon Image"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Shannon;
