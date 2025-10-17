/* eslint-disable import/no-named-as-default */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";

export default function Glimpse21() {
  return (
    <section className="relative bg-deepSpace text-white">
      <ShootingStars />
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />
        <div className="mx-4 mt-4 h-96 sm:mx-4 md:mx-8 lg:mx-4">
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
              Glimpse 21
            </motion.h1>
            <ul className="max-w-2xl list-inside list-disc font-hackathoneCabinetGrotesk text-gray-300">
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brightYellow hover:underline"
                >
                  UL 21 Opening Ceremony
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brightYellow hover:underline"
                >
                  UL 21 Mentor Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=EjbDhhmpgEk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brightYellow hover:underline"
                >
                  UL 21 Practice Presentations
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/watch?v=CFN7ewwBYT0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brightYellow hover:underline"
                >
                  UL 21 Closing Ceremony
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}
