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
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  /** DeskTop View */
  const desktopView = () => {
    return (
      <div className="relative min-h-screen bg-black text-white MobileScreen:hidden TabletScreen:hidden">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>

        <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
          <NavigationBar />
          <div className="m-4">
            <Typography
              variant="h4"
              gutterBottom
              className="font-hackathoneCabinetGrotesk font-[600] text-hackathone-font-rocket-red md:mt-12 lg:px-[6.8%]"
            >
              Frequently Asked Questions (FAQs)
            </Typography>
            <section className="item-center flex flex-row justify-between">
              <div className="w-2/3">
                {faqData.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    className="my-6 rounded border-2 border-hackathone-font-light-grey !bg-transparent py-2 text-white lg:mx-[9.8%]"
                    disableGutters
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          style={{
                            color: "yellow",
                          }}
                        />
                      }
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <h1
                        className="font-hackathoneSFProDisplay text-[18px] font-[300]"
                        style={{
                          color: expanded === index ? "yellow" : "white",
                          fontWeight: expanded === index ? "bold" : "normal",
                        }}
                      >
                        {item.header}
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails className="pr-12 text-slate-50">
                      <Typography>{item.text}</Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
              <div className="z-[-1] -mt-[100px] w-1/3 translate-x-[5%]">
                <Image src={Sun} alt={"Sun Image"}></Image>
              </div>
            </section>
          </div>
          <BackToTopButton />
          <Footer />
        </div>
      </div>
    );
  };

  /** Tablet and Mobile View */
  const tabletMobileView = () => {
    return (
      <div className="relative min-h-screen bg-black text-white DesktopScreen:hidden">
        <div className="fixed inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <CloudParticleBg />
          </Canvas>
        </div>

        <div className="relative z-10 py-[24px] MobileScreen:py-[12px]">
          <NavigationBar />
          <div className="m-8 MobileScreen:m-4">
            <Typography
              variant="h4"
              gutterBottom
              className="font-hackathoneCabinetGrotesk font-[600] text-hackathone-font-rocket-red md:my-[42px] lg:px-[6.8%]"
            >
              Frequently Asked Questions (FAQs)
            </Typography>
            <section>
              <div>
                {faqData.map((item, index) => (
                  <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                    className="my-8 rounded border-2 border-hackathone-font-light-grey !bg-transparent text-white lg:mx-[9.8%]"
                    disableGutters
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon
                          style={{
                            color: "yellow",
                          }}
                        />
                      }
                      aria-controls={`panel${index}-content`}
                      id={`panel${index}-header`}
                    >
                      <h1
                        className="font-hackathoneSFProDisplay text-[14px] font-[300]"
                        style={{
                          color: expanded === index ? "yellow" : "white",
                          fontWeight: expanded === index ? "bold" : "normal",
                        }}
                      >
                        {item.header}
                      </h1>
                    </AccordionSummary>
                    <AccordionDetails className="pr-8 text-slate-50">
                      <p className="text-[14px]">{item.text}</p>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </div>
            </section>
          </div>
          <BackToTopButton />
          <Footer />
        </div>
      </div>
    );
  };

  return (
    <section>
      {desktopView()}
      {tabletMobileView()}
    </section>
  );
};

export default Faq;
