import { type StaticImageData } from "next/image";
import Booz from "@/assets/images/general/landing-page/collabrators/booz.png";
import Mindgrub from "@/assets/images/general/landing-page/collabrators/mindgrub.png";
import SecondMuse from "@/assets/images/general/landing-page/collabrators/muse.png";

export interface Collaborator {
  id: string;
  name: string;
  logo: StaticImageData;
  url: string;
}

export interface CollaboratorsSectionData {
  title: string;
  description: string;
  bulletPoints: {
    title: string;
    description: string;
  }[];
  collaborators: Collaborator[];
}

export const collaboratorsData: CollaboratorsSectionData = {
  title: "NASA Space Apps",
  description:
    "The NASA Space Apps Challenge 2025 is backed by NASA's Earth Science Division through collaborations with Booz Allen Hamilton, Mindgrub, and SecondMuse. This year’s hackathon theme is Learn, Launch, Lead which inspires participants to grow their skills, put bold ideas into motion, and lead innovation in their communities:",
  bulletPoints: [
    {
      title: "Learn:",
      description:
        "Build new skills in STEM, coding, design, storytelling, and research by engaging with NASA’s missions and open data. Whether student or professional, this is learning by doing.",
    },
    {
      title: "Launch:",
      description:
        "Turn ideas into action using NASA’s datasets and tools to tackle real challenges on Earth and in space, like climate, solar weather, resilience, or creative storytelling.",
    },
    {
      title: "Lead:",
      description:
        "Inspire others by collaborating, mentoring, and sharing knowledge. Leadership here is about sparking innovation and guiding impact in your community and beyond.",
    },
  ],
  collaborators: [
    {
      id: "booz-allen",
      name: "Booz Allen Hamilton",
      logo: Booz,
      url: "https://www.boozallen.com/",
    },
    {
      id: "mindgrub",
      name: "Mindgrub",
      logo: Mindgrub,
      url: "https://mindgrub.com/",
    },
    {
      id: "second-muse",
      name: "SecondMuse",
      logo: SecondMuse,
      url: "https://www.secondmuse.com/",
    },
  ],
};
