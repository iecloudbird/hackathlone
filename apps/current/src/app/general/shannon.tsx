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
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  adaptiveHeight: true,
  cssEase: "ease-out",
};

const Shannon = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <section className="mx-4 sm:mx-8 lg:mx-[8.06%] mt-10 sm:mt-16 lg:mt-20 mb-20 lg:mb-36 py-8">
      <div className="px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row gap-6">
        {/* Left Section: Text Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mt-2 sm:mt-6 lg:mt-[1.5rem] lg:mr-4">
          <div>
            <motion.h1
              variants={fadeIn("right", "tween", 0.2, 0.4)}
              initial={animationComplete ? "" : "hidden"}
              whileInView="show"
              onAnimationComplete={handleAnimationComplete}
              className="font-hackathoneCabinetGrotesk font-extrabold text-hackathone-font-rocket-red text-[30.99px] leading-[34.62px] sm:text-[32.99px] lg:text-[42px] lg:leading-[44.62px] mb-4 sm:mb-6 pr-4 sm:pr-[20%]"
            >
              Technology University of the Shannon
            </motion.h1>
            <div className="flex flex-col">
              <motion.p
                variants={fadeIn("down", "tween", 1.2, 0.4)}
                initial={animationComplete ? "" : "hidden"}
                whileInView="show"
                onAnimationComplete={handleAnimationComplete}
                className="font-hackathoneCabinetGrotesk font-medium text-slate-50 text-base sm:text-lg leading-[30.57px] my-4 sm:mb-4 pr-4 sm:pr-[20%]"
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
                className="font-hackathoneCabinetGrotesk font-medium text-slate-50 text-base sm:text-lg leading-[30.57px] my-2 sm:my-4 sm:mb-4 pr-4 sm:pr-[20%]"
              >
                As the venue partner, the university also offers resources like:
                <ul className="list-disc py-2 sm:py-4 pl-10">
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
        <div className="w-full lg:w-1/2 mt-6 lg:mt-[1.5rem] lg:mr-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4755.461203507001!2d-7.909200223581451!3d53.419643969237065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485c496e6b7b9b4f%3A0x8f4cd9c287dbe71d!2sTUS%3A%20Midlands%20Engineering%20%26%20Science%20Building!5e0!3m2!1sen!2sie!4v1723633423719!5m2!1sen!2sie"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl h-[300px] lg:h-[400px] w-full mb-4"
          />
          <Slider {...settings}>
            {shannonData.map((item, index) => (
              <div key={index}>
                <Image
                  className="rounded-2xl h-[300px] lg:h-[400px] w-full object-cover"
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
