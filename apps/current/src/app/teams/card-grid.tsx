import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import InstaIcon from "@/assets/images/general/landing-page/instagram.png";
import InIcon from "@/assets/images/general/landing-page/linkedin.png";
import XIcon from "@/assets/images/general/landing-page/x_logo.svg";
import { teamMembers } from "./teams.dto";

interface SocialLinks {
  twitter?: string | null;
  linkedin?: string | null;
  github?: string | null;
  instagram?: string | null;
}

const gridItems = [...teamMembers];

export const CardGrid = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null); //

  const handleCardClick = (index: number) => {
    setSelectedMember(index);
  };

  // Close the popup
  const handleClosePopup = () => {
    setSelectedMember(null);
  };

  const handleOutsideClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClosePopup();
    }
  };

  const renderSocialIcons = (socials: SocialLinks) => {
    return (
      <div className="ml-6 mt-4 flex justify-start space-x-4 lg:justify-center">
        {socials.twitter && (
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
            <Image
              className="ms-2 w-4 cursor-pointer hover:scale-110 sm:size-6"
              src={XIcon}
              height={80}
              width={80}
              alt={"XIcon"}
            />
          </a>
        )}
        {socials.linkedin && (
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <Image
              className="size-6 cursor-pointer hover:scale-110"
              src={InIcon}
              height={80}
              width={80}
              alt={"InIcon"}
            />
          </a>
        )}
        {socials.github && (
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="size-6 text-white hover:scale-110 hover:text-gray-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.09-.744.084-.729.084-.729 1.205.084 1.838 1.234 1.838 1.234 1.07 1.835 2.809 1.304 3.495.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.334-5.466-5.93 0-1.31.467-2.38 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.983-.399 3.003-.404 1.02.005 2.043.137 3.004.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.841 1.234 1.911 1.234 3.221 0 4.609-2.804 5.623-5.476 5.921.43.371.823 1.103.823 2.222v3.293c0 .321.218.694.824.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
            <Image
              className="ms-2 size-4 cursor-pointer hover:scale-110 sm:size-6"
              src={InstaIcon}
              height={80}
              width={80}
              alt={"InstaIcon"}
            />
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-center overflow-hidden sm:block sm:justify-start">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        {gridItems.map((item, index) => {
          return (
            <div
              key={index}
              className={`start-[4rem] flex flex-col items-start justify-center text-center`}
              style={{ transition: "transform 0.3s ease-in-out" }} // Smooth transition
              onClick={() => handleCardClick(index)}
            >
              {/* Container for the image */}
              <div className="relative max-h-[280px] w-auto max-w-[300px] overflow-hidden rounded-2xl sm:w-80">
                <Image
                  className="h-auto w-full cursor-pointer rounded-2xl object-cover"
                  src={item.image}
                  alt={item.name}
                  // layout="fill"  // Ensures the image fills the container
                  objectFit="cover" // Keeps the aspect ratio
                  quality={100}
                />
              </div>
              {/* Container for the text */}
              <div className="w-80 py-4 pl-4 text-start font-hackathoneCabinetGrotesk text-lg text-slate-50 sm:pl-2">
                <p className="font-bold">{item.name}</p>
                <p className="text-red-400">{item.role}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* Popup Modal */}
      {selectedMember !== null &&
        (gridItems[selectedMember].socials.instagram ||
          gridItems[selectedMember].socials.linkedin) && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={handleOutsideClick}
          >
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="relative w-11/12 rounded-2xl bg-gray-800 p-6 text-white shadow-lg sm:w-7/12 md:w-7/12 lg:w-6/12 xl:w-5/12"
              ref={modalRef}
            >
              <button
                className="absolute right-0 top-0 p-2 text-3xl text-white"
                onClick={handleClosePopup}
              >
                &times;
              </button>

              {/* Image */}
              <div className="flex w-full justify-center">
                <div className="relative my-4 size-80 overflow-hidden rounded-xl">
                  <Image
                    src={gridItems[selectedMember].image}
                    layout="fill"
                    objectFit="cover"
                    alt={gridItems[selectedMember].name}
                  />
                </div>
              </div>

              <div className="ml-6">
                <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                  {gridItems[selectedMember].name}
                </h2>
                <p className="mb-4 text-base font-bold text-red-500 md:text-lg">
                  {gridItems[selectedMember].role}
                </p>

                {/* Display bio or other details */}

                <p className="mb-6 text-base">Check for socials media below:</p>
              </div>

              {/* Social Media Links */}
              {renderSocialIcons(gridItems[selectedMember].socials)}
            </motion.div>
          </div>
        )}
    </div>
  );
};
