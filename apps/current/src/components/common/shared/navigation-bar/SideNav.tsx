// components/navigation/SideNav.tsx
"use client";
import { motion } from "framer-motion";
import { type FC } from "react";
import { sideNavVariants, sideNavTransition } from "./utils";
import { type NavigationItem } from "./index";

interface SideNavProps {
  items: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
}

export const SideNav: FC<SideNavProps> = ({ items, isOpen, onClose }) => (
  <motion.div
    className="fixed right-0 top-0 z-50 h-full w-3/4 bg-black p-5 md:block lg:hidden"
    initial="hidden"
    animate={isOpen ? "visible" : "hidden"}
    variants={sideNavVariants}
    transition={sideNavTransition}
  >
    <div className="absolute right-5 cursor-pointer text-2xl" onClick={onClose}>
      X
    </div>
    <div className="mt-4 flex flex-col gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="cursor-pointer font-hackathoneSFProDisplay hover:text-hackathone-font-rocket-red"
          onClick={item.route}
        >
          {item.text}
        </div>
      ))}
    </div>
  </motion.div>
);
