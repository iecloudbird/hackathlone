import Placeholder from "@/assets/svgs/placeholder.svg";

export interface motifItem {
  title: string;
  description: string;
  iconUrl: string;
}

export const motifList: motifItem[] = [
  {
    title: "Innovation",
    description:
      "Fostering creativity and new ideas to solve real-world problems.",
    iconUrl: Placeholder,
  },
  {
    title: "Collaboration",
    description:
      "Bringing together diverse minds to create impactful solutions.",
    iconUrl: Placeholder,
  },
  {
    title: "Impact",
    description:
      "Creating solutions that make a difference in communities and industries.",
    iconUrl: Placeholder,
  },
];
