"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import GDG from "@/assets/images/general/landing-page/sponsors/gdg.png";
import TUS_WORKS from "@/assets/images/general/landing-page/sponsors/tus_works.png";
import XR4U from "@/assets/images/xr4uLogo.svg";
import Footer from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function Sponsors() {
  return (
    <section className="relative min-h-screen bg-deepSpace text-white">
      <ShootingStars />
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />
        <div className="mx-4 mt-4 max-md:pb-10 sm:mx-4 md:mx-8 lg:mx-4">
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
              Local Collaborators
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="max-w-2xl font-hackathoneCabinetGrotesk text-gray-300"
            >
              Partner with HackAthlone to empower student innovators. Your
              collaboration provides mentorship, equipment, travel support, and
              prizes that help students learn, build, and launch real projects
              at NASA Space Apps Athlone.
            </motion.p>
          </div>

          <div className="mx-auto flex h-64 flex-row items-center justify-center gap-20 px-4 py-10 max-md:flex-col max-md:gap-9 max-md:py-6">
            <Image
              src={XR4U}
              alt="XR4U Logo"
              width={160}
              height={80}
              className="object-contain"
            />
            <Image
              src={TUS_WORKS}
              alt="TUS Works Logo"
              width={160}
              height={80}
              className="object-contain"
            />
            <Image
              src={GDG}
              alt="GDG Logo"
              width={160}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
