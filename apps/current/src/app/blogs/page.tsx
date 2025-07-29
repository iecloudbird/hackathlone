"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Sun from "@/assets/images/faq-page/sun - Copy.png";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import BackToTopButton from "../general/back-to-top";
import { CardGrid } from "./CardGrid";

const Blogs = () => {
  return (
    <>
      <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
        <div className="relative z-10 py-[12px] sm:py-[24px]">
          <NavbarDemo />
          <CardGrid />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 1.7,
              ease: "easeOut",
            }}
            className="absolute right-0 top-60 hidden -translate-y-20 translate-x-[5%] lg:block lg:w-1/3"
          >
            <Image src={Sun} alt="Sun Image" />
          </motion.div>
          <BackToTopButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogs;
