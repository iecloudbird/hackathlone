"use client";

import React from "react";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import BackToTopButton from "../general/back-to-top";
import Footer from "../general/footer";
import CardGrid from "./CardGrid";

const Blogs = () => {
  /** Desktop View */

  return (
    <>
      <div className="relative min-h-screen bg-black text-white">
        <div className="relative z-10 py-[12px] sm:py-[24px]">
          <NavbarDemo />
          <CardGrid />
          <BackToTopButton />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Blogs;
