"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useMemo, useEffect } from "react";
import RunEU from "@/assets/images/general/landing-page/collabrators/runeulogo.png";
import { navigationData } from "./general.dto";

export default function NavigationBar() {
  const router = useRouter();
  const navigationInfo = useMemo(() => navigationData(router), [router]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  // Handle body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSideNavOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSideNavOpen]);

  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);

  // Sidebar animation variants
  const sideNavVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
  };

  // Sidebar component
  const SideNav = () => (
    <motion.div
      className="fixed right-0 top-0 z-50 h-full w-3/4 bg-black p-5 md:block lg:hidden"
      initial="hidden"
      animate={isSideNavOpen ? "visible" : "hidden"}
      variants={sideNavVariants}
      transition={{ damping: 30, stiffness: 300, type: "spring" }}
    >
      <div
        className="absolute right-5 cursor-pointer text-2xl"
        onClick={() => setIsSideNavOpen(false)}
      >
        X
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {navigationInfo.map((item, index) => (
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

  return (
    <nav className="sticky mx-4 flex h-[60px] items-center justify-between rounded-xl border border-white bg-transparent px-[1.2%] py-1 sm:mx-[1%] sm:px-[1.2%] md:mx-[3%] md:px-[1.7%] lg:mx-[7%] lg:px-[1.7%]">
      {/* Logo */}
      <div onClick={() => router.push("/")} className="px-2 py-1">
        <Image
          className="cursor-pointer"
          src={RunEU}
          width={50}
          height={50}
          alt="Deedu logo"
          priority
        />
      </div>

      {/* Navigation Links (Desktop) / Hamburger (Tablet/Mobile) */}
      <div className="flex items-center">
        {/* Desktop Links */}
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
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="whitespace-nowrap rounded-md border border-white bg-gray-800 p-2 text-sm text-white shadow-lg">
                    2024 Challenges
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Hamburger Menu (Tablet/Mobile) */}
        <div className="cursor-pointer px-2 lg:hidden" onClick={toggleSideNav}>
          <div className="space-y-[6px]">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-[4px] w-[36px] rounded-2xl bg-white"
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <SideNav />
    </nav>
  );
}
