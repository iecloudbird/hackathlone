"use client";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image from "next/image";
import { type FC, useState } from "react";
import HackAthlone from "@/assets/svgs/hackathlone-logo.svg";
import { RedirectButton } from "../RedirectButton";
import { SideNav } from "./SideNav";
import {
  useNavigation,
  useSidebar,
  tooltipVariants,
  tooltipTransition,
} from "./utils";

export interface NavigationItem {
  route: () => void;
  text: string;
}

export interface NavigationBarProps {
  items?: NavigationItem[];
}

export const NavigationBar: FC<NavigationBarProps> = () => {
  const navigationFromHook = useNavigation();
  const navigationInfo = navigationFromHook;
  const { isSideNavOpen, toggleSideNav } = useSidebar();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const pageMargin = "mx-[3%] mt-8 lg:mx-[5.5%]";

  return (
    <nav
      className={classNames(
        "sticky mx-4 flex h-[60px] items-center justify-between bg-transparent",
        pageMargin
      )}
    >
      <div onClick={navigationInfo[0]?.route} className="px-2 py-1">
        <Image
          src={HackAthlone}
          className="cursor-pointer"
          width={120}
          height={50}
          alt="RunEU Logo"
          priority
        />
      </div>

      <div className="flex items-center">
        <div className="hidden flex-row gap-12 lg:flex">
          {navigationInfo.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer font-hackathoneSFProDisplay hover:text-hackathone-font-rocket-red"
              onClick={item.route}
              onMouseEnter={() =>
                index === navigationInfo.length - 1 && setIsTooltipVisible(true)
              }
              onMouseLeave={() => setIsTooltipVisible(false)}
            >
              {item.text}
              {index === navigationInfo.length - 1 && isTooltipVisible && (
                <motion.div
                  className="absolute -left-4 bottom-[-50px] z-50"
                  initial="hidden"
                  animate="visible"
                  variants={tooltipVariants}
                  transition={tooltipTransition}
                >
                  <div className="whitespace-nowrap rounded-md border border-white bg-gray-800 p-2 text-sm text-white shadow-lg">
                    2024 Challenges
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>
        <div className="cursor-pointer px-2 lg:hidden" onClick={toggleSideNav}>
          <div className="space-y-[6px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-[4px] w-[36px] rounded-2xl bg-white" />
            ))}
          </div>
        </div>
      </div>

      <RedirectButton
        className="hidden lg:block"
        onClick={() =>
          (window.location.href = "https://www.spaceappschallenge.org/")
        }
      >
        Register Now
      </RedirectButton>
      <SideNav
        items={navigationInfo}
        isOpen={isSideNavOpen}
        onClose={toggleSideNav}
      />
    </nav>
  );
};
