import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import InstaIcon from "@/assets/images/general/landing-page/instagram.png";
import InIcon from "@/assets/images/general/landing-page/linkedin.png";
import XIcon from "@/assets/images/general/landing-page/x_logo.svg";
import { fadeIn } from "../../utils/motion";
import InPostEmbed from "./linkedin-embed";
import TweetEmbed from "./xpost-embed";

const Socials = () => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAnimationComplete = () => {
    setAnimationComplete(true);
  };

  return (
    <>
      <motion.div className="mb-6 flex w-full flex-col items-center justify-center bg-cover bg-center bg-repeat text-center md:mb-12">
        <motion.h1
          variants={fadeIn("down", "tween", 0.5, 0.4)}
          initial={animationComplete ? "" : "hidden"}
          whileInView="show"
          onAnimationComplete={handleAnimationComplete}
          className="mb-4 px-12 text-center font-hackathoneCabinetGrotesk text-5xl font-extrabold tracking-tight text-white MobileScreen:text-[30.99px] MobileScreen:leading-[34.62px]"
        >
          Discover more on Our{" "}
          <span className="font-extrabold text-hackathone-font-rocket-red">
            Socials
          </span>
        </motion.h1>
        <div className="mb-8">
          <p className="font-hackathoneCabinetGrotesk text-[22px] leading-tight text-white MobileScreen:px-4">
            Keep your self updated by{" "}
            <span className="font-extrabold text-hackathone-font-rocket-red">
              following us on social media
            </span>
          </p>
        </div>
        <motion.div
          variants={fadeIn("down", "tween", 1.1, 0.7)}
          initial="hidden"
          animate={animationComplete ? "show" : "hidden"}
          onAnimationComplete={handleAnimationComplete}
          className="my-3 flex flex-row flex-wrap items-start justify-center gap-8 MobileScreen:mx-8 TabletScreen:mx-8"
        >
          <motion.div
            variants={fadeIn("down", "tween", 1.0, 0.5)}
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            onAnimationComplete={handleAnimationComplete}
            className="mb-8"
          >
            {isClient && <TweetEmbed />}
            <a
              href="https://twitter.com/hack_athlone?ref_src=twsrc%5Etfw"
              target="_blank"
              className="my-2 me-2 inline-flex items-center rounded-lg text-center text-[18px] font-[700] text-hackathone-font-rocket-red"
              rel="noreferrer"
            >
              Follow us on
              <Image
                className="ms-2 size-6 cursor-pointer MobileScreen:w-4"
                src={XIcon}
                height={80}
                width={80}
                alt={"XIcon"}
              ></Image>
            </a>
          </motion.div>

          <motion.div
            variants={fadeIn("down", "tween", 1.0, 0.5)}
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            onAnimationComplete={handleAnimationComplete}
            className="mb-8"
          >
            <iframe
              src="https://www.instagram.com/p/C-dJTQhhL-I/embed/"
              width={300}
              height={400}
              className="rounded-md"
              frameBorder="0"
              scrolling="no"
              allow="encrypted-media"
            />
            <a
              href="https://www.instagram.com/spaceappsathlone/"
              target="_blank"
              className="my-4 mb-2 me-2 inline-flex items-center rounded-lg text-center text-[18px] font-[700] text-hackathone-font-rocket-red"
              rel="noreferrer"
            >
              Follow us on
              <Image
                className="ms-2 size-6 cursor-pointer MobileScreen:size-4"
                src={InstaIcon}
                height={80}
                width={80}
                alt={"InstaIcon"}
              ></Image>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("down", "tween", 1.0, 0.5)}
            initial="hidden"
            animate={animationComplete ? "show" : "hidden"}
            onAnimationComplete={handleAnimationComplete}
            className="mb-8"
          >
            <InPostEmbed />
            <a
              href="https://www.linkedin.com/company/spaceapps-hackathlone/"
              target="_blank"
              className="my-4 mb-2 me-2 inline-flex items-center rounded-lg text-center text-[18px] font-[700] text-hackathone-font-rocket-red"
              rel="noreferrer"
            >
              Follow us on
              <Image
                className="ms-2 size-6 cursor-pointer MobileScreen:size-4"
                src={InIcon}
                height={80}
                width={80}
                alt={"InIcon"}
              ></Image>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default Socials;
