"use client";
import { useRouter } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { type NavigationItem } from "./index";

export const navigationData = (
  router: ReturnType<typeof useRouter>
): NavigationItem[] => [
  {
    route: () => router.push("/"),
    text: "Home",
  },
  {
    route: () => router.push("/blogs"),
    text: "Blogs",
  },
  {
    route: () => router.push("/faq"),
    text: "FAQ's",
  },
  {
    route: () => router.push("/contact-us"),
    text: "Contact Us",
  },
  {
    route: () =>
      window.open(
        "https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/",
        "_blank"
      ),
    text: "Challenges",
  },
];

export const useNavigation = (): NavigationItem[] => {
  const router = useRouter();
  return useMemo(() => navigationData(router), [router]);
};

export const useSidebar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isSideNavOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSideNavOpen]);

  const toggleSideNav = () => setIsSideNavOpen((prev) => !prev);

  return { isSideNavOpen, toggleSideNav };
};

export const sideNavVariants = {
  hidden: { x: "100%" },
  visible: { x: "0%" },
};

export const sideNavTransition = {
  damping: 30,
  stiffness: 300,
  type: "spring",
};

export const tooltipVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const tooltipTransition = {
  duration: 0.5,
};
