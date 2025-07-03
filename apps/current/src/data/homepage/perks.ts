import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Certificate from "@/assets/svgs/certificate.svg";
import Trophy from "@/assets/svgs/trophy.svg";

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export type Tab = {
  title: string;
  icon: React.ComponentType<IconProps>;
};

export type TabContent = {
  title: string;
  description: string;
  imageUrl: string;
  items: string[];
};

export const tabs: Tab[] = [
  {
    title: "Grand Winner",
    icon: EmojiEventsIcon,
  },
  {
    title: "2nd Place",
    icon: MilitaryTechIcon,
  },
  {
    title: "3rd Place",
    icon: MilitaryTechIcon,
  },
  {
    title: "Souvenirs",
    icon: WorkspacePremiumIcon,
  },
];

export const tabContent: Record<string, TabContent> = {
  "Grand Winner": {
    title: "A cash prize of €3,000 and exclusive HackAthlone merchandise",
    description:
      "Winners of the 1st place will receive exclusive NASA-branded gear, a $500 cash prize, and an opportunity to present their project to NASA experts. Celebrate your innovation with these amazing rewards!",
    imageUrl: Trophy,
    items: [
      "NASA-branded gear",
      "$500 cash prize",
      "Presentation opportunity with NASA experts",
    ],
  },
  "2nd Place": {
    title: "A cash prize of €1,500 and exclusive HackAthlone merchandise",
    description:
      "The 2nd place team will be awarded a €300 cash prize and a selection of NASA merchandise. Showcase your skills and take home these fantastic rewards!",
    imageUrl: Trophy,
    items: ["$300 cash prize", "NASA merchandise"],
  },
  "3rd Place": {
    title: "A cash prize of €750 and exclusive HackAthlone merchandise",
    description:
      "The 3rd place team will receive a $200 cash prize and a set of exclusive Space Apps 2025 merchandise. Celebrate your achievement with these exciting prizes!",
    imageUrl: Trophy,
    items: ["$200 cash prize", "Space Apps 2025 merchandise"],
  },
  Souvenirs: {
    title: "HackAthlone participant T-Shirt and NASA Digital Certificate",
    description:
      "All participants will receive commemorative souvenirs, including a custom Space Apps 2025 badge and a digital certificate. Take home a piece of this global innovation journey!",
    imageUrl: Certificate,
    items: ["Custom Space Apps 2025 badge", "Digital certificate"],
  },
};
