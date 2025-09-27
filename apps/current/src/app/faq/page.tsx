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
import BackToTopButton from "../general/back-to-top";
import { faqData } from "./components/faq.dto";

const Faq = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className="relative min-h-screen bg-deepSpace text-white">
      {/* Main Content */}
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />

        {/* Content Container */}
        <div className="mx-4 mt-4 sm:mx-4 md:mx-8 lg:mx-4">
          <ShootingStars />
          <div className="mx-auto my-10 flex flex-col items-center justify-center gap-3 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-10 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-4 text-center font-nokaTrial text-5xl font-bold text-transparent"
            >
              FAQs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="font-hackathoneCabinetGrotesk text-gray-300"
            >
              Find answers to frequently asked questions about <br /> NASA Space
              Apps Athlone 2025.
            </motion.p>
          </div>

          {/* FAQ Section */}
          <div className="z-10 mx-auto flex flex-col items-center justify-center">
            {/* Mars Image */}
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
                    className="mx-10 my-4 overflow-hidden rounded-[30px] border border-gray-700 bg-black/40 text-white backdrop-blur-xl"
                    disableGutters
                    sx={{
                      backgroundColor: "transparent",
                      "&.MuiAccordion-root": {
                        borderRadius: "15px",
                        background: "rgba(0,0,0,0.6)",
                        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
                      },
                      "& .MuiAccordionSummary-root": {
                        backgroundColor: "transparent",
                      },
                      "& .MuiAccordionDetails-root": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon className="text-white" />}
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <h1 className="font-hackathoneCabinetGrotesk text-lg text-white">
                        {item.header}
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails className="pr-8 sm:pr-8 md:pr-8 lg:pr-12">
                      <Typography className="text-justify font-hackathoneCabinetGrotesk text-sm font-thin leading-relaxed text-gray-300">
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
      </div>
      <Footer />
    </section>
  );
};

export default Faq;
