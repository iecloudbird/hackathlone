"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import {
  footerData,
  type FooterData,
  type FooterLink,
} from "@/data/homepage/footer";

interface FooterProps {
  data?: FooterData;
}

const EmailIcon = () => (
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
);

const FooterLink: React.FC<{
  link: FooterLink;
  onClick?: () => void;
}> = ({ link, onClick }) => {
  if (link.isExternal) {
    return (
      <a
        className="font-nokaTrial text-[#f6f4f4]"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {link.text}
      </a>
    );
  }

  return (
    <a
      className="text-[#f6f4f4]"
      href={link.href}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {link.text}
    </a>
  );
};

export const Footer: React.FC<FooterProps> = ({ data = footerData }) => {
  const router = useRouter();

  const navigateToWinners = () => router.push("/winners");
  const navigateToTeams = () => router.push("/teams");
  const navigateToGlimpse = () => router.push("/glimpse");

  const getNavigationHandler = (href: string) => {
    switch (href) {
      case "/winners":
        return navigateToWinners;
      case "/teams":
        return navigateToTeams;
      case "/glimpse":
        return navigateToGlimpse;
      default:
        return undefined;
    }
  };

  return (
    <footer className="flex flex-col gap-4 py-4 text-sm text-[#F6F4F4]">
      <div className="flex flex-col items-start justify-between gap-4 px-4 py-2 sm:px-[5%] lg:flex-row">
        {/* Logo and Social Icons */}
        <div className="flex w-full flex-col items-center gap-6 lg:mt-4 lg:w-auto lg:gap-12">
          <a href={data.logo.href} className="cursor-pointer">
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={240}
              height={120}
              className="hidden md:block"
            />
            <Image
              src={data.logo.src}
              alt={data.logo.alt}
              width={180}
              height={90}
              className="block md:hidden"
            />
          </a>

          <div className="flex w-full justify-center gap-3 lg:gap-4">
            {data.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="hover:scale-110"
                aria-label={social.ariaLabel}
              >
                {social.icon === "email" ? (
                  <EmailIcon />
                ) : (
                  <Image
                    className="size-4 hover:scale-110 sm:size-6"
                    src={social.icon}
                    height={80}
                    width={80}
                    alt={social.alt}
                  />
                )}
              </a>
            ))}
          </div>

          <hr className="my-6 w-full lg:hidden" />
        </div>

        {/* Links Sections */}
        <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-start lg:justify-evenly lg:gap-16">
          {data.sections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="lg:mt-4">
              <h3 className="mb-2 font-nokaTrial text-xl text-brightYellow lg:mb-4">
                {section.title}
              </h3>
              <ul className="list-none leading-relaxed no-underline">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="my-2">
                    <FooterLink
                      link={link}
                      onClick={getNavigationHandler(link.href)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full">
        <hr className="mx-auto w-[92%]" />
        <div className="flex flex-col items-center justify-between px-4 py-3 sm:flex-row sm:px-[5%]">
          <p className="text-center">
            Copyright ©{data.copyright.year} {data.copyright.text} |{" "}
            {data.bottomLinks.map((link, index) => (
              <React.Fragment key={index}>
                <FooterLink link={link} />
                {index < data.bottomLinks.length - 1 && " | "}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
