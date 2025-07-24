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
