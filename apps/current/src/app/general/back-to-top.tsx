"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import rocket from "@/assets/images/general/landing-page/rocket.png";
import rocket_hover from "@/assets/images/general/landing-page/rocket_hover.png";
import rocket_motion from "@/assets/images/general/landing-page/rocket_motion.png";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageSrc, setImageSrc] = useState(rocket);
  const [isClicked, setIsClicked] = useState(false);

  const scrollFunction = () => {
    setIsVisible(window.scrollY > 20);
  };

  const topFunction = () => {
    setIsClicked(true);
    setImageSrc(rocket_motion);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsClicked(false);
      setImageSrc(rocket);
    }, 1000);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <>
      {isVisible && (
        <motion.button
          title="T-minus..."
          onClick={topFunction}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onHoverStart={() => !isClicked && setImageSrc(rocket_hover)}
          onHoverEnd={() => !isClicked && setImageSrc(rocket)}
          className="fixed bottom-4 right-4 z-50 cursor-pointer rounded-full border-none bg-hackathone-font-rocket-red p-1 opacity-50 transition-opacity duration-300 hover:opacity-100 sm:p-2 lg:bottom-10 lg:right-10 lg:p-3"
        >
          <motion.div
            animate={isClicked ? { y: -600, scale: 2 } : { y: 0, scale: 1 }} // Animate the rocket on click
            transition={{ duration: 3, ease: "easeOut" }}
          >
            <Image
              src={imageSrc}
              alt="Back to top"
              width={40}
              height={40}
              className="transition-transform duration-300 lg:size-[50px]"
            />
          </motion.div>
        </motion.button>
      )}
    </>
  );
};

export default BackToTopButton;
