"use client";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Branding from "@/assets/images/general/landing-page/branding_Guidelines_25/hackathlone_BrandGuidelines.png";
import Assets from "@/assets/images/general/landing-page/branding_Guidelines_25/hackathlone_ExtraAssets.png";
import Logo from "@/assets/images/general/landing-page/branding_Guidelines_25/hackathlone_Logos.png";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";
import BackToTopButton from "../general/back-to-top";

const Brand = () => {
  const handleDownload = (fileName: string) => {
    const link = document.createElement("a");
    link.href = fileName;
    link.download = fileName.split("/").pop() || "download";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              HackAthlone Brand <br /> Guidelines 2025
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
              Explore the visual identity, voice, and design standards that
              bring HackAthlone to <br /> life and ensure consistency across
              every platform, project, and collaboration.
            </motion.p>
          </div>

          {/* Brand Assets Section */}
          <div className="z-10 mx-auto max-w-4xl px-4 pb-20">
            {/* Large Preview Card */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: "easeOut",
              }}
              className="mb-8"
            >
              <div className="overflow-hidden rounded-[30px] border border-gray-700 bg-gradient-to-br from-blue-900/20 via-black/40 to-black/40 p-6 backdrop-blur-xl">
                <div className="mb-4 flex h-[500px] items-center justify-center overflow-hidden rounded-2xl max-md:h-[200px]">
                  <Image
                    src={Branding}
                    alt="Brand Guidelines"
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-2">
                  <div>
                    <h3 className="mb-2 font-hackathoneCabinetGrotesk text-xl font-semibold text-white">
                      NASA HackAthlone Brand Guidelines 2025
                    </h3>
                  </div>
                  <button
                    onClick={() =>
                      handleDownload(
                        "/downloads/Brand Guidelines - HackAthlone_25.pdf"
                      )
                    }
                    className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-hackathoneCabinetGrotesk font-semibold text-black transition-all hover:scale-105 hover:bg-gray-100"
                  >
                    <DownloadIcon className="size-4" />
                    Download
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Two Column Grid for Logo and Extra Assets */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Brand Logo Card */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7,
                  ease: "easeOut",
                }}
              >
                <div className="overflow-hidden rounded-[30px] border border-gray-700 bg-black/40 p-4 backdrop-blur-xl">
                  <div className="mb-3 flex h-[200px] items-center justify-center overflow-hidden rounded-2xl">
                    <Image
                      src={Logo}
                      alt="Brand Logo"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-hackathoneCabinetGrotesk text-lg font-semibold text-white">
                      Brand Logo
                    </h3>
                    <p className="mb-3 font-hackathoneCabinetGrotesk text-xs text-gray-300">
                      Our logo represents the heritage and connections between
                      the Midlands and Midwest regions.
                    </p>
                    <button
                      onClick={() =>
                        handleDownload("/downloads/HackAthlone_25_Logos.zip")
                      }
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-hackathoneCabinetGrotesk text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-gray-100"
                    >
                      <DownloadIcon className="size-4" />
                      Download Logo
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Extra Assets Card */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.9,
                  ease: "easeOut",
                }}
              >
                <div className="overflow-hidden rounded-[30px] border border-gray-700 bg-black/40 p-4 backdrop-blur-xl">
                  <div className="mb-3 flex h-[200px] items-center justify-center overflow-hidden rounded-2xl">
                    <Image
                      src={Assets}
                      alt="Extra Assets"
                      className="size-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-hackathoneCabinetGrotesk text-lg font-semibold text-white">
                      Extra Assets
                    </h3>
                    <p className="mb-3 font-hackathoneCabinetGrotesk text-xs text-gray-300">
                      Our logo represents the heritage and connections between
                      the Midlands and Midwest regions.
                    </p>
                    <button
                      onClick={() =>
                        handleDownload(
                          "/downloads/HackAthlone_25_All-Assets.zip"
                        )
                      }
                      className="flex items-center gap-2 rounded-full bg-white px-4 py-2 font-hackathoneCabinetGrotesk text-sm font-semibold text-black transition-all hover:scale-105 hover:bg-gray-100"
                    >
                      <DownloadIcon className="size-4" />
                      Download Backdrops
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <BackToTopButton />
      </div>
      <Footer />
    </section>
  );
};

export default Brand;
