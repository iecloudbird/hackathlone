"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import Mars from "@/assets/images/faq-page/mars.png";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import BackToTopButton from "../general/back-to-top";
import { faqData } from "./components/faq.dto";

const Faq = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />

        {/* Content Container */}
        <div className="mx-4 mt-4 sm:mx-4 md:mx-8 lg:mx-4">
          <ShootingStars />
          <StarsBackground />
          <div className="mx-auto my-10 flex flex-col items-center justify-center gap-3 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-10 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-4 text-center text-5xl font-bold text-transparent"
            >
              FAQ&apos;s
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="text-gray-300"
            >
              Support the next generation of innovators and problem-solvers.{" "}
              <br /> Your sponsorship helps us create an unforgettable
              experience for participants
            </motion.p>
          </div>

          {/* FAQ Section */}
          <div className="z-10 mx-auto flex flex-col items-center justify-center">
            {/* Mars Image with fade in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute left-0 top-20 hidden w-1/4 lg:block"
            >
              <Image src={Mars} alt="Mars Image" />
            </motion.div>

            {/* Accordion List */}
            <div className="lg:w-2/3">
              {faqData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Accordion
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    className="mx-10 my-4 overflow-hidden rounded-[30px] bg-white/5 p-1 text-white backdrop-blur-md"
                    disableGutters
                    sx={{
                      "&.MuiAccordion-root": {
                        borderRadius: "15px",
                        transformOrigin: "top",
                        "& .MuiCollapse-root": {
                          transformOrigin: "top",
                        },
                      },
                      "& .MuiAccordionSummary-root": {
                        borderRadius: "15px",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className="text-white" />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <h1 className="font-hackathoneSFProDisplay text-lg">
                        {item.header}
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails className="pr-8 sm:pr-8 md:pr-8 lg:pr-12">
                      <Typography className="text-justify text-sm font-thin leading-relaxed text-white">
                        {item.text}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <BackToTopButton />
        <Footer />
      </div>
    </section>
  );
};

export default Faq;
