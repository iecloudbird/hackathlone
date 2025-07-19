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
    link: string;
    linkText: string;
  }[];
  collaborators: Collaborator[];
}

export const collaboratorsData: CollaboratorsSectionData = {
  title: "NASA Space Apps",
  description:
    "The NASA Space Apps Challenge 2025 is backed by NASA's Earth Science Division through collaborations with Booz Allen Hamilton, Mindgrub, and SecondMuse. This year's hackathon theme is funded by NASA's Heliophysics Division in celebration of the Helio Big Year.",
  bulletPoints: [
    {
      title: "NASA's Heliophysics Division",
      description:
        "studies the Sun's impact on space, Earth, and technology, using a fleet of spacecraft to understand solar wind and space weather. This research protects technology and astronauts while revealing how stars influence planetary habitability.",
      link: "https://science.nasa.gov/heliophysics/",
      linkText: "(Know more)",
    },
    {
      title: "NASA's Earth Science Division (ESD)",
      description:
        "uses cutting-edge technology to study Earth's systems, like the atmosphere and oceans, providing free data on climate and environmental changes. By collaborating globally and supporting education, ESD empowers students to explore and understand our planet.",
      link: "https://science.nasa.gov/earth-science",
      linkText: "(Know more)",
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
