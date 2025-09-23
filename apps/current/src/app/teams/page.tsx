"use client";
import { motion } from "framer-motion";
import React from "react";
import { CardGrid } from "@/app/teams/card-grid";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import BackToTopButton from "../general/back-to-top";

const Teams = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-deepSpace text-white">
      {/* Main Content */}
      <div className="relative z-10 py-3 sm:py-3 md:py-6">
        <NavbarDemo />
        <SectionContainer>
          <ShootingStars />
          {/* Content Container */}
          <div className="mx-auto flex flex-col items-center justify-center">
            <motion.h2
              className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-6 font-nokaTrial text-[28px] font-semibold text-transparent max-md:text-center lg:text-4xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{ once: true }}
            >
              Meet the team
            </motion.h2>

            <motion.p
              className="pb-8 text-center font-hackathoneCabinetGrotesk text-lg font-light max-md:px-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
            >
              that is making a difference
            </motion.p>
          </div>
          {/* Card Grid */}
          <div className="grid-cols-3 py-10 max-md:grid-cols-1">
            <CardGrid />
          </div>
        </SectionContainer>

        <BackToTopButton />
      </div>
      <Footer />
    </section>
  );
};

export default Teams;
