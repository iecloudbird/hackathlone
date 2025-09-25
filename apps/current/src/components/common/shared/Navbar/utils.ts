import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";
export type NavigationItem = {
  route: () => void;
  text: string;
  path: string;
  isActive: boolean;
};

export const navigationData = (
  router: ReturnType<typeof useRouter>,
  currentPath: string
): NavigationItem[] => [
  {
    route: () => router.push("/about"),
    text: "About",
    path: "/about",
    isActive: currentPath.startsWith("/about"),
  },
  {
    route: () => router.push("/teams"),
    text: "Team",
    path: "/teams",
    isActive: currentPath.startsWith("/teams"),
  },

  {
    route: () =>
      window.open(
        "https://www.spaceappschallenge.org/2025/challenges/",
        "_blank"
      ),
    text: "Challenges",
    path: "/challenges",
    isActive: false, // External link, never active
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
    route: () => router.push("/sponsors"),
    text: "Sponsors",
    path: "/sponsors",
    isActive: currentPath.startsWith("/sponsors"),
  },
  {
    route: () => router.push("/mentors"),
    text: "Mentors",
    path: "/mentors",
    isActive: currentPath.startsWith("/mentors"),
  },
  {
    route: () => router.push("/contact-us"),
    text: "Contact Us",
    path: "/contact-us",
    isActive: currentPath.startsWith("/contact-us"),
  },
];

export const useNavigation = (): NavigationItem[] => {
  const router = useRouter();
  const pathname = usePathname();

  return useMemo(() => navigationData(router, pathname), [router, pathname]);
};
