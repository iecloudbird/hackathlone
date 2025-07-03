import RUNEU from "@/assets/images/general/landing-page/collabrators/runeulogo.png";
// import ADAPT from "@/assets/svgs/adapt.svg";
import Deedu from "@/assets/svgs/deedu-logo.svg";
import DesignBrew from "@/assets/svgs/design-brew-logo.svg";
// import Hackathlone from "@/assets/svgs/hackathlone-logo.svg";
import TUS from "@/assets/svgs/tus-logo.svg";
import XR4U from "@/assets/svgs/xr4u-logo.svg";

export interface Sponsor {
  name: string;
  role: string;
  imageUrl: string;
  canonicalUrl: string;
}

export const sponsorsList: Sponsor[] = [
  {
    name: "RUN EU",
    role: "Event Partner",
    imageUrl: RUNEU,
    canonicalUrl: "",
  },
  {
    name: "TUS",
    role: "Venue Partner",
    imageUrl: TUS,
    canonicalUrl: "",
  },
  {
    name: "RUN EU",
    role: "Creative Partner",
    imageUrl: DesignBrew,
    canonicalUrl: "",
  },
  {
    name: "Deedu",
    role: "Knowledge Partner",
    imageUrl: Deedu,
    canonicalUrl: "",
  },
  //   {
  //     name: "Way to India",
  //     role: "Travel Partner",
  //     imageUrl: DesignBrew,
  //     canonicalUrl: "",
  //   },
  {
    name: "XR4U",
    role: "Community Partner",
    imageUrl: XR4U,
    canonicalUrl: "",
  },
  //   {
  //     name: "Adapt",
  //     role: "Community Partner",
  //     imageUrl: ADAPT,
  //     canonicalUrl: "",
  //   },
];
