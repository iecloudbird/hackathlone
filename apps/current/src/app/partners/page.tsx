/* eslint-disable import/no-named-as-default */
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Boston from "@/assets/images/general/landing-page/sponsors/boston_scientific.png";
import GDG from "@/assets/images/general/landing-page/sponsors/gdg.png";
import TUS from "@/assets/images/general/landing-page/sponsors/TUS.png";
import TUS_WORKS from "@/assets/images/general/landing-page/sponsors/tus_works.png";
import XR4U from "@/assets/images/xr4uLogo.svg";
import Footer from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";

const partners = [
  {
    name: "TUS",
    logo: TUS,
    alt: "TUS Logo",
    description:
      "Venue and event partner, the institute that has consistently supported HackAthlone with the venue, resources, prizes, and much more. They provide a space for innovators to tackle problem statements and create something extraordinary.",
  },
  {
    name: "XR4U",
    logo: XR4U,
    alt: "XR4U Logo",
    description:
      "Community and event partner, the team behind HackAthlone since day one. They bring together volunteers from around the world to organize this event for hackathon enthusiasts in Ireland.",
  },
  {
    name: "TU Works",
    logo: TUS_WORKS,
    alt: "TU Works Logo",
    description:
      "A local collaborator aiming to give changemakers the opportunity to upskill through their bootcamps around Shannon Studio and Business Modeling, and apply that knowledge to the first-ever local challenge at HackAthlone.",
  },
  {
    name: "GDG",
    logo: GDG,
    alt: "GDG Logo",
    description:
      "A local collaborator focusing on this year’s hackathon theme. They help participants learn and launch through sessions centered on Vibe Coding and Perfect Pitch Presentation, both powered by AI.",
  },
  {
    name: "Boston Scientific",
    logo: Boston,
    alt: "Boston Scientific Logo",
    description:
      "A local collaborator bringing their expertise to the table by supporting participants with valuable feedback and serving as judges throughout the hackathon.",
  },
];

export default function Sponsors() {
  return (
    <section className="relative min-h-screen bg-deepSpace py-10 text-white">
      <ShootingStars />
      <div className="relative z-10 py-6">
        <NavbarDemo />

        {/* Header */}
        <div className="mx-auto my-10 flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-b from-white via-gray-400 to-gray-700 bg-clip-text p-4 font-nokaTrial text-5xl font-bold text-transparent"
          >
            Partners
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl font-hackathoneCabinetGrotesk text-gray-300"
          >
            Our partners support HackAthlone by providing mentorship, resources,
            and prizes, helping students learn, build, and launch real projects
            at NASA Space Apps Athlone.
          </motion.p>
        </div>

        {/* Partner Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-2xl bg-white/5 p-6 shadow-lg backdrop-blur-sm transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.alt}
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-center font-nokaTrial text-xl text-white">
                {partner.name}
              </h3>
              <p className="mt-2 text-center font-hackathoneCabinetGrotesk text-sm text-gray-300">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </section>
  );
}
