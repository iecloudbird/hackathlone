"use client";
import { useRouter, usePathname } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { type NavigationItem } from "./index";

export const navigationData = (
  router: ReturnType<typeof useRouter>,
  currentPath: string
): NavigationItem[] => [
  {
    route: () => router.push("/"),
    text: "Home",
    path: "/",
    isActive: currentPath === "/",
  },
  {
    route: () => router.push("/blogs"),
    text: "Blogs",
    path: "/blogs",
    isActive: currentPath.startsWith("/blogs"),
  },
  {
    route: () => router.push("/faq"),
    text: "FAQ's",
    path: "/faq",
    isActive: currentPath.startsWith("/faq"),
  },
  {
    route: () => router.push("/contact-us"),
    text: "Contact Us",
    path: "/contact-us",
    isActive: currentPath.startsWith("/contact-us"),
  },
  {
    route: () =>
      window.open(
        "https://www.spaceappschallenge.org/nasa-space-apps-2024/challenges/",
        "_blank"
      ),
    text: "Challenges",
    path: "/challenges",
    isActive: false, // External link, never active
  },
];

export const useNavigation = (): NavigationItem[] => {
  const router = useRouter();
  const pathname = usePathname();

  return useMemo(() => navigationData(router, pathname), [router, pathname]);
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
