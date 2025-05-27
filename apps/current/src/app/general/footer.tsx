"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import HeroImage from "@/assets/images/general/landing-page/hero_icon.png";
import InstaIcon from "@/assets/images/general/landing-page/instagram.png";
import InIcon from "@/assets/images/general/landing-page/linkedin.png";
import XIcon from "@/assets/images/general/landing-page/x_logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const navigateToWinners = () => router.push("/winners");
  const navigateToTeams = () => router.push("/teams");
  const navigateToGlimpse = () => router.push("/glimpse");

  return (
    <footer className="flex flex-col gap-4 py-4 text-sm text-[#F6F4F4]">
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-2 sm:px-[5%] lg:flex-row">
        {/* Logo and Social Icons */}
        <div className="flex w-full flex-col items-center gap-6 lg:w-auto lg:gap-12">
          <a href="/" className="cursor-pointer">
            <Image
              src={HeroImage}
              alt="Hero Image"
              width={180}
              className="sm:w-[300px] lg:w-[400px]"
            />
          </a>
          <div className="flex items-center gap-3 lg:gap-4">
            <a
              href="https://twitter.com/hack_athlone?ref_src=twsrc%5Etfw"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="size-4 hover:scale-110 sm:size-6"
                src={XIcon}
                height={80}
                width={80}
                alt="X Icon"
              />
            </a>
            <a
              href="https://www.instagram.com/spaceappsathlone/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="size-4 hover:scale-110 sm:size-6"
                src={InstaIcon}
                height={80}
                width={80}
                alt="Instagram Icon"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/spaceapps-hackathlone/"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className="size-4 hover:scale-110 sm:size-6"
                src={InIcon}
                height={80}
                width={80}
                alt="LinkedIn Icon"
              />
            </a>
            <a
              href="mailto:spaceappsathlone@gmail.com"
              className="hover:scale-110"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 67 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 sm:size-6"
              >
                <path
                  d="M60.3 0.398438H6.7C3.015 0.398438 0.0335 3.41344 0.0335 7.09844L0 47.2984C0 50.9834 3.015 53.9984 6.7 53.9984H60.3C63.985 53.9984 67 50.9834 67 47.2984V7.09844C67 3.41344 63.985 0.398438 60.3 0.398438ZM60.3 13.7984L33.5 30.5484L6.7 13.7984V7.09844L33.5 23.8484L60.3 7.09844V13.7984Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <hr className="my-6 w-full lg:hidden" />
        </div>

        {/* Links Sections */}
        <div className="flex w-full justify-evenly gap-6 lg:flex lg:flex-row lg:items-start lg:gap-16">
          <div className="lg:mt-4">
            <h3 className="mb-2 text-xl font-bold text-hackathone-font-rocket-red lg:mb-4">
              Participation Kit
            </h3>
            <ul className="list-none leading-relaxed">
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="/teams"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToTeams();
                  }}
                >
                  Meet Our Team
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.spaceappschallenge.org/nasa-space-apps-2025/challenges/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Challenges
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=y3LxNcd1jsk"
                  target="_blank"
                  rel="noreferrer"
                >
                  How to Register
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Choose a Challenge
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=37dqOg2ljMw"
                  target="_blank"
                  rel="noreferrer"
                >
                  How to Form Teams
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=lQpLzNgRl8k"
                  target="_blank"
                  rel="noreferrer"
                >
                  Encourage Team Diversity
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=_wJP0GLNdf8"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tips & Tricks
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:mt-4">
            <h3 className="mb-2 text-xl font-bold text-hackathone-font-rocket-red lg:mb-4">
              HackAthlone’23
            </h3>
            <ul className="list-none leading-relaxed">
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="/glimpse"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToGlimpse();
                  }}
                  rel="noreferrer"
                >
                  Glimpse
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] no-underline hover:text-hackathone-font-rocket-red"
                  href="#"
                  rel="noreferrer"
                >
                  Opening Ceremony
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=W3y2qN2spO4"
                  target="_blank"
                  rel="noreferrer"
                >
                  Closing Ceremony
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="/winners"
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToWinners();
                  }}
                  rel="noreferrer"
                >
                  Winners
                </a>
              </li>
            </ul>
          </div>

          <div className="hidden sm:block lg:mt-4">
            <h3 className="mb-2 text-xl font-bold text-hackathone-font-rocket-red lg:mb-4">
              Space Apps UL’21
            </h3>
            <ul className="list-none leading-relaxed">
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=n_KqGdnlOcU"
                  target="_blank"
                  rel="noreferrer"
                >
                  Opening Ceremony
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=zFdhwgOyqho"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mentor Sessions
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=EjbDhhmpgEk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Practice Presentations
                </a>
              </li>
              <li className="my-2">
                <a
                  className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
                  href="https://www.youtube.com/watch?v=CFN7ewwBYT0"
                  target="_blank"
                  rel="noreferrer"
                >
                  Closing Ceremony
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full">
        <hr className="mx-auto w-[92%]" />
        <div className="flex flex-col items-center justify-between px-4 py-3 sm:flex-row sm:px-[5%]">
          <p className="text-center">
            Copyright ©{currentYear} HackAthlone |{" "}
            <a
              className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
              href="https://www.nasa.gov/about/highlights/HP_Privacy.html"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a
              className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
              href="https://www.spaceappschallenge.org/legal/"
              target="_blank"
              rel="noreferrer"
            >
              Legal
            </a>{" "}
            |{" "}
            <a
              className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
              href="mailto:spaceappsathlone@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Contact
            </a>{" "}
            |{" "}
            <a
              className="text-[#f6f4f4] underline hover:text-hackathone-font-rocket-red"
              href="https://www.spaceappschallenge.org/resources/"
              target="_blank"
              rel="noreferrer"
            >
              Resources
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
