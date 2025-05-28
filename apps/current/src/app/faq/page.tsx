"use client";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import React, { useState } from "react";
import CloudParticleBg from "@/app/general/cloud-particle-bg";
import Sun from "@/assets/images/faq-page/sun - Copy.png";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";
import NavigationBar from "../general/navigation-bar";
import { faqData } from "./components/faq.dto";

const Faq = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <section className="relative min-h-screen bg-black text-white">
      {/* Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <CloudParticleBg />
        </Canvas>
      </div>

      {/* Main Content */}
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavigationBar />

        {/* Content Container */}
        <div className="mx-4 mt-4 sm:mx-4 md:mx-8 lg:mx-4">
          <h4 className="font-hackathoneCabinetGrotesk text-xl font-semibold text-hackathone-font-rocket-red md:mt-[42px] lg:mt-12 lg:px-[6.8%] lg:text-3xl">
            Frequently Asked Questions (FAQs)
          </h4>

          {/* FAQ Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between">
            {/* Accordion List */}
            <div className="lg:w-2/3">
              {faqData.map((item, index) => (
                <Accordion
                  key={index}
                  expanded={expanded === index}
                  onChange={handleChange(index)}
                  className="my-4 rounded border-2 border-hackathone-font-light-grey !bg-transparent text-white sm:my-6 lg:mx-[9.8%]"
                  disableGutters
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon className="text-yellow-500" />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <h1
                      className={`font-hackathoneSFProDisplay text-[14px] font-light sm:text-[14px] md:text-[14px] lg:text-[18px] ${
                        expanded === index
                          ? "font-bold text-yellow-500"
                          : "text-white"
                      }`}
                    >
                      {item.header}
                    </h1>
                  </AccordionSummary>
                  <AccordionDetails className="pr-8 text-slate-50 sm:pr-8 md:pr-8 lg:pr-12">
                    <Typography className="text-[14px] sm:text-[14px] md:text-[14px] lg:text-base">
                      {item.text}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>

            {/* Sun Image (Desktop Only) */}
            <div className="hidden -translate-y-20 translate-x-[5%] lg:block lg:w-1/3">
              <Image src={Sun} alt="Sun Image" />
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
