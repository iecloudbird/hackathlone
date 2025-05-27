import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import Google from "@/assets/images/general/landing-page/collabrators/google.png";
import RunEU from "@/assets/images/general/landing-page/collabrators/runeulogo.png";
import { navigationData } from "./general.dto";
export default function NavigationBar() {
  const Router = useRouter();
  const navigationInfo = useMemo(() => navigationData(Router), [Router]);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  React.useEffect(() => {
    if (isSideNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup: Ensure scrolling is re-enabled when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSideNavOpen]);

  const renderLines = () => {
    const lines = [];
    for (let i = 0; i < 3; i++) {
      lines.push(
        <div
          key={i}
          className="mt-[6px] h-[5px] w-[36px] rounded-2xl bg-white"
        ></div>
      );
      {
        /*Or fill with: bg-white */
      }
    }
    return lines;
  };

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  const sideNavVariants = {
    hidden: { x: "100%" },
    visible: { x: "0%" },
  };

  const SideNav = () => (
    <motion.div
      className="fixed right-0 top-0 z-50 h-full w-3/4 bg-black p-5"
      initial="hidden"
      animate={isSideNavOpen ? "visible" : "hidden"}
      variants={sideNavVariants}
      transition={{ damping: 30, stiffness: 300, type: "spring" }}
    >
      <div
        className="absolute right-5 cursor-pointer text-[24px]"
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

  /** Desktop View */
  const desktopView = () => (
    <nav className="sticky mx-[7%] flex h-[68px] items-center justify-between rounded-xl border border-white bg-transparent px-[1.7%] MobileScreen:hidden TabletScreen:hidden">
      <div onClick={() => Router.push("/")}>
        <Image
          className="cursor-pointer"
          src={RunEU}
          width={60}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div className="flex flex-row gap-12">
        {navigationInfo.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer font-hackathoneSFProDisplay hover:text-hackathone-font-rocket-red"
            onClick={item.route}
            onMouseEnter={() =>
              index === navigationInfo.length - 1 && setIsTooltipVisible(true)
            }
            onMouseLeave={() => setIsTooltipVisible(false)}
          >
            {item.text}
            {index === navigationInfo.length - 1 && isTooltipVisible && (
              <motion.div
                className="absolute bottom-[-25px] left-[90%] z-50 -translate-x-1/2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="whitespace-nowrap rounded-md border border-white bg-gray-800 p-2 text-center text-sm text-white shadow-lg">
                  2024 Challenges
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );

  /** Tablet View */
  const tabletView = () => (
    <nav className="mx-[3%] flex flex-row justify-between rounded-xl border border-white bg-transparent px-[1.7%] py-[6px] DesktopScreen:hidden MobileScreen:hidden">
      <div onClick={() => Router.push("/")} className="px-2 py-1">
        <Image
          className="cursor-pointer"
          src={Google}
          width={50}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div onClick={toggleSideNav} className="cursor-pointer p-2">
        {renderLines()}
      </div>
    </nav>
  );

  /** Mobile View */
  const mobileView = () => (
    <nav className="mx-[1%] flex flex-row items-center justify-between rounded-md border border-white bg-transparent px-[1.2%] py-[6px] DesktopScreen:hidden TabletScreen:hidden">
      <div onClick={() => Router.push("/")} className="px-2 py-1">
        <Image
          className="cursor-pointer"
          src={Google}
          width={50}
          alt={"Deedu logo"}
        ></Image>
      </div>
      <div onClick={toggleSideNav} className="cursor-pointer px-2 pb-2">
        {renderLines()}
      </div>
    </nav>
  );

  return (
    <section>
      {desktopView()}
      {tabletView()}
      {mobileView()}
      <SideNav />
    </section>
  );
}
