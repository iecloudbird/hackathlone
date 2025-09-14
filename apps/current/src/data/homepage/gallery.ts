import { type StaticImageData } from "next/image";

import P01 from "@/assets/images/general/landing-page/glimpse/photo_wall/033.png";
import P02 from "@/assets/images/general/landing-page/glimpse/photo_wall/041.png";
import P03 from "@/assets/images/general/landing-page/glimpse/photo_wall/105.png";
import P04 from "@/assets/images/general/landing-page/glimpse/photo_wall/119.png";
import P05 from "@/assets/images/general/landing-page/glimpse/photo_wall/131.png";
import P06 from "@/assets/images/general/landing-page/glimpse/photo_wall/188.png";
import P07 from "@/assets/images/general/landing-page/glimpse/photo_wall/247.png";
import P08 from "@/assets/images/general/landing-page/glimpse/photo_wall/256.png";
import P09 from "@/assets/images/general/landing-page/glimpse/photo_wall/261.png";
import P10 from "@/assets/images/general/landing-page/glimpse/photo_wall/265.png";
import P11 from "@/assets/images/general/landing-page/glimpse/photo_wall/340.png";
import M01 from "@/assets/images/general/landing-page/hackthlone24/24_1.jpg";
import M10 from "@/assets/images/general/landing-page/hackthlone24/24_10.jpg";
import M02 from "@/assets/images/general/landing-page/hackthlone24/24_2.jpg";
import M03 from "@/assets/images/general/landing-page/hackthlone24/24_3.jpg";
import M04 from "@/assets/images/general/landing-page/hackthlone24/24_4.jpg";
import M05 from "@/assets/images/general/landing-page/hackthlone24/24_5.jpg";
import M06 from "@/assets/images/general/landing-page/hackthlone24/24_6.jpg";
import M07 from "@/assets/images/general/landing-page/hackthlone24/24_7.jpg";
import M08 from "@/assets/images/general/landing-page/hackthlone24/24_8.jpg";
import M09 from "@/assets/images/general/landing-page/hackthlone24/24_9.jpg";

export interface GalleryImage {
  src: StaticImageData | string;
  alt: string;
  id: string;
}

export interface GallerySectionData {
  title: string;
  subtitle?: string;
  carousels: {
    id: string;
    title: string;
    images: GalleryImage[];
  }[];
}

export const gallerySectionData: GallerySectionData = {
  title: "HackAthlone Snapshots",
  subtitle:
    "Relive the moments and memories from our incredible hackathon journey",
  carousels: [
    {
      id: "moments",
      title: "Moments to Relive",
      images: [
        { src: M01, alt: "HackAthlone moment 1", id: "m01" },
        { src: M02, alt: "HackAthlone moment 2", id: "m02" },
        { src: M03, alt: "HackAthlone moment 3", id: "m03" },
        { src: M04, alt: "HackAthlone moment 4", id: "m04" },
        { src: M05, alt: "HackAthlone moment 5", id: "m05" },
        { src: M06, alt: "HackAthlone moment 6", id: "m06" },
        { src: M07, alt: "HackAthlone moment 7", id: "m07" },
        { src: M08, alt: "HackAthlone moment 8", id: "m08" },
        { src: M09, alt: "HackAthlone moment 9", id: "m09" },
        { src: M10, alt: "HackAthlone moment 9", id: "m10" },
      ],
    },
    {
      id: "photo-wall",
      title: "Photo Wall Highlights",
      images: [
        { src: P01, alt: "Photo wall image 1", id: "p01" },
        { src: P02, alt: "Photo wall image 2", id: "p02" },
        { src: P03, alt: "Photo wall image 3", id: "p03" },
        { src: P04, alt: "Photo wall image 4", id: "p04" },
        { src: P05, alt: "Photo wall image 5", id: "p05" },
        { src: P06, alt: "Photo wall image 6", id: "p06" },
        { src: P07, alt: "Photo wall image 7", id: "p07" },
        { src: P08, alt: "Photo wall image 8", id: "p08" },
        { src: P09, alt: "Photo wall image 9", id: "p09" },
        { src: P10, alt: "Photo wall image 10", id: "p10" },
        { src: P11, alt: "Photo wall image 11", id: "p11" },
      ],
    },
  ],
};
