import classNames from "classnames";
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
    <div
      className="absolute right-5 top-5 cursor-pointer text-2xl text-white"
      onClick={onClose}
    >
      ×
    </div>

    {/* Navigation Items */}
    <div className="mt-12 flex flex-col gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className={classNames(
            "cursor-pointer font-hackathoneSFProDisplay text-lg transition-colors duration-200",
            {
              "text-white": item.isActive,
              "text-battleship": !item.isActive,
            }
          )}
          onClick={() => {
            item.route();
            onClose();
          }}
        >
          {item.text}
        </div>
      ))}
    </div>
  </motion.div>
);
