"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, type FC } from "react";

interface VenueProps {
  content: {
    description?: string;
    resources?: {
      title: string;
      items: string[];
      footer: string;
    };
  };
  image: {
    src: string;
    alt: string;
  };
  layout: "text-left" | "text-right";
  isFirstRow?: boolean;
  eventVenue?: string;
  title?: string;
}

export const Venue: FC<VenueProps> = ({
  content,
  image,
  layout,
  isFirstRow = false,
  eventVenue,
  title,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  /** Image Component */
  const ImageWrapper = (
    <div className="flex justify-center lg:justify-start">
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
        <Image src={image.src} alt={image.alt} fill className="object-cover" />
      </div>
    </div>
  );

  /** Text Content Component */
  const TextContent = (
    <div className="space-y-6 text-left">
      {isFirstRow && eventVenue && title && (
        <>
          <motion.h5
            className="font-hackathoneCabinetGrotesk text-lg font-semibold text-brightYellow lg:text-xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {eventVenue}
          </motion.h5>

          <motion.h2
            className="max-w-md font-nokaTrial text-[28px] font-bold text-white max-md:text-center lg:text-4xl"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {title}
          </motion.h2>
        </>
      )}

      {content.description && (
        <p className="text-justify font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
          {content.description}
        </p>
      )}

      {content.resources && (
        <div className="space-y-3">
          <p className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
            {content.resources.title}
          </p>
          <ul className="list-disc space-y-2 pl-6">
            {content.resources.items.map((item, index) => (
              <li
                key={index}
                className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="font-hackathoneCabinetGrotesk text-gray-300 lg:text-lg">
            {content.resources.footer}
          </p>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
        <div className={layout === "text-left" ? "order-1" : "order-2"}>
          {TextContent}
        </div>
        <div className={layout === "text-left" ? "order-2" : "order-1"}>
          {ImageWrapper}
        </div>
      </div>

      {/* Buttons: rendered once below the grid */}

      {/* Modal */}
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
    </>
  );
};
