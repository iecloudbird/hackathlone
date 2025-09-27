"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { SectionContainer } from "../SectionContainer";

export default function VenueSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SectionContainer>
      <div className="w-full space-y-12">
        {/* --- Row 1 --- */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Text Column */}
          <div className="order-1 space-y-6 text-left">
            <motion.h5
              className="font-hackathoneCabinetGrotesk text-lg font-semibold text-brightYellow lg:text-xl"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Event Venue
            </motion.h5>

            <motion.h2
              className="max-w-md font-nokaTrial text-[28px] font-bold text-white max-md:text-center lg:text-4xl"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              Technological University of the Shannon, Athlone
            </motion.h2>
          </div>

          {/* Image Column */}
          <div className="order-2 flex justify-center lg:justify-start">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <Image
                src="/assets/images/general/landing-page/mapping-images/tus3.jpg"
                alt="Technological University of the Shannon campus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Buttons for row 1 */}
        <div className="flex flex-wrap gap-4 pt-6 max-md:mx-auto max-md:items-center max-md:justify-center">
          <a
            href="https://maps.app.goo.gl/ZMbFCPp9jdJtoBCX8"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-brightYellow px-5 py-2 font-hackathoneCabinetGrotesk font-semibold text-black transition hover:bg-yellow-400"
          >
            Open in Maps
          </a>
          <button
            onClick={() => setIsModalOpen(true)}
            className="rounded-xl bg-white/10 px-5 py-2 font-hackathoneCabinetGrotesk font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
          >
            How to Get There
          </button>
        </div>

        {/* --- Row 2 --- */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Image Column */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
              <Image
                src="/assets/images/general/landing-page/presentation.jpg"
                alt="Students working at Technological University of Shannon"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="order-2 space-y-6 text-left">
            <p className="text-justify font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
              The NASA Space Apps Challenge 2025 is happening in the heart of
              Ireland, Athlone, with the Technological University of the Shannon
              proudly hosting this massive in-person hackathon. Renowned for its
              innovation and technological excellence, the university educates
              and inspires over 7,000 students, making it the perfect venue for
              this prestigious event.
            </p>

            <div className="space-y-3">
              <p className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
                As the venue partner, the university also offers resources:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
                  Professional labs with software and hardware access
                </li>
                <li className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
                  3D printing for rapid prototyping
                </li>
                <li className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
                  VR/AR equipment for immersive solutions
                </li>
                <li className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
                  Dedicated workspace for the full 48 hours
                </li>
                <li className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
                  Academic and industry mentors on-site to help
                </li>
              </ul>
              <p className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
                Plus all meals, snacks, and the coffee you&apos;ll need to power
                through those late-night coding sessions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* --- Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-xl overflow-auto rounded-2xl bg-black/60 p-6 text-white shadow-xl">
            <h3 className="mb-4 font-nokaTrial text-2xl text-brightYellow">
              Getting to TUS Athlone
            </h3>
            <ul className="space-y-4 font-hackathoneCabinetGrotesk text-lg">
              <li>
                <span className="font-semibold">By bus?</span>{" "}
                <span className="font-semibold text-brightYellow">
                  Hop on CityLink
                </span>{" "}
                and get down at the TUS bus stop.
              </li>
              <li>
                <span className="font-semibold">By train?</span> Arrive at
                Athlone station via{" "}
                <span className="font-semibold text-brightYellow">
                  IrishRail
                </span>
                , then take a short local bus ride to TUS.
              </li>
              <li>
                <span className="font-semibold">By car?</span> Come directly to{" "}
                <span className="font-semibold text-brightYellow">
                  TUS Athlone
                </span>
                , and park behind the engineering building (Do share the license
                plate number with us).
              </li>
            </ul>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="rounded-xl bg-brightYellow px-5 py-2 font-nokaTrial font-semibold text-black transition hover:bg-yellow-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionContainer>
  );
}
