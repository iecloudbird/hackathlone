"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HackAthlone from "@/assets/svgs/hackathlone-logo.svg";
import {
  Navbar,
  NavBody,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useNavigation } from "./utils";

export function NavbarDemo() {
  const navigationInfo = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="fixed left-0 top-0 z-50 my-2 w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link href="/">
            <Image
              className="cursor-pointer"
              src={HackAthlone}
              width={80}
              height={80}
              alt="HackAthlone logo"
              priority
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-1 items-center justify-center">
            {navigationInfo.map((item, idx) => (
              <button
                key={idx}
                onClick={item.route}
                className={`relative rounded-full px-4 py-2 font-hackathoneCabinetGrotesk transition-colors duration-200 hover:bg-black/30 ${
                  item.isActive
                    ? "text-white hover:text-white/90"
                    : "text-battleship hover:text-white/70"
                }`}
              >
                {item.text}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4 font-hackathoneCabinetGrotesk">
            <NavbarButton
              variant="primary"
              href="https://www.spaceappschallenge.org/2025/local-events/athlone/"
              target="_blank"
            >
              Register Now
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <div onClick={() => navigationInfo[0].route()} className="px-2">
              <Image
                className="cursor-pointer"
                src={HackAthlone}
                width={50}
                height={50}
                alt="HackAthlone logo"
                priority
              />
            </div>
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {/* Mobile Navigation Links */}
            {navigationInfo.map((item, idx) => (
              <button
                key={`mobile-link-${idx}`}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  item.route();
                }}
                className={`relative w-full rounded-full px-4 py-2 text-left font-hackathoneSFProDisplay transition-colors duration-200 hover:bg-gray-100/10 ${
                  item.isActive
                    ? "text-white hover:text-white/90"
                    : "text-battleship hover:text-white/70"
                }`}
              >
                {item.text}
              </button>
            ))}
            <div className="mt-4 flex w-full flex-col gap-4">
              <NavbarButton
                variant="primary"
                href="https://www.spaceappschallenge.org/2025/local-events/athlone/"
                target="_blank"
                className="w-full"
              >
                Register Now
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
