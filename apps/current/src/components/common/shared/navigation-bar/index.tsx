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
  path: string;
  isActive: boolean;
}

export interface NavigationBarProps {
  items?: NavigationItem[];
}

export const NavigationBar: FC<NavigationBarProps> = () => {
  const navigationInfo = useNavigation();
  const { isSideNavOpen, toggleSideNav } = useSidebar();
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const pageMargin = "mx-[3%] mt-8 lg:mx-[5.5%]";

  const getNavItemStyles = (item: NavigationItem) => {
    return classNames(
      "relative cursor-pointer font-hackathoneSFProDisplay transition-colors duration-200",
      item.isActive && "text-white hover:text-white/90",
      !item.isActive && "text-battleship hover:text-white/70"
    );
  };

  const renderDesktopNavigationItems = () => {
    return navigationInfo.map((item, index) => {
      const isLastItem = index === navigationInfo.length - 1;

      return (
        <div
          key={index}
          className={getNavItemStyles(item)}
          onClick={item.route}
          onMouseEnter={() => isLastItem && setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          {item.text}

          {isLastItem && isTooltipVisible && (
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
      );
    });
  };

  const renderHamburgerMenu = () => {
    return (
      <div className="cursor-pointer px-2 lg:hidden" onClick={toggleSideNav}>
        <div className="space-y-[6px]">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="h-[4px] w-[36px] rounded-2xl bg-white" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <nav
      className={classNames(
        "sticky top-0 z-50 mx-4 flex h-[60px] items-center justify-between bg-transparent",
        pageMargin
      )}
    >
      {/* Logo */}
      <div onClick={navigationInfo[0]?.route} className="px-2 py-1">
        <Image
          src={HackAthlone}
          className="cursor-pointer"
          width={120}
          height={50}
          alt="HackAthlone Logo"
          priority
        />
      </div>

      {/* Navigation Items Container */}
      <div className="flex items-center">
        {/* Desktop Navigation Links */}
        <div className="hidden flex-row gap-12 lg:flex">
          {renderDesktopNavigationItems()}
        </div>

        {/* Mobile Hamburger Menu */}
        {renderHamburgerMenu()}
      </div>

      {/* Register Button */}
      <RedirectButton
        className="hidden lg:block"
        onClick={() =>
          (window.location.href = "https://www.spaceappschallenge.org/")
        }
      >
        Register Now
      </RedirectButton>

      {/* Mobile Sidebar */}
      <SideNav
        items={navigationInfo}
        isOpen={isSideNavOpen}
        onClose={toggleSideNav}
      />
    </nav>
  );
};
