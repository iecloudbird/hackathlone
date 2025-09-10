import { type StaticImageData } from "next/image";
import Idontthink from "@/assets/images/general/landing-page/winners/idontthink.png";
import Soundsurfers from "@/assets/images/general/landing-page/winners/Soundsurfers.png";
import Fwf from "@/assets/images/general/landing-page/winners/winners.png";

type WinnerType = {
  title: string;
  name: string;
  details: { text: string; highlight: boolean }[][];
  prize: string;
  image: StaticImageData;
  member: string[];
};

export const winners: WinnerType[] = [
  {
    details: [
      [
        { highlight: false, text: "SpaceApps Athlone, also known as " },
        { highlight: true, text: "HackAthlone" },
        {
          highlight: false,
          text: ", is one of the 300+ locations for this year's NASA SpaceApps Challenge. ",
        },
        { highlight: true, text: "Technology University of the Shannon" },
        {
          highlight: false,
          text: " takes pride in hosting 200 participants on their campus for ",
        },
        { highlight: true, text: "48 hours" },
        { highlight: false, text: " to collaborate on " },
        { highlight: true, text: "30 problem statements" },
        { highlight: false, text: " that cater to all STEAM fields." },
      ],
      [
        {
          highlight: false,
          text: "\nHackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.",
        },
      ],
    ],
    image: Fwf,
    member: [
      "Robert Rafanelli",
      "Claudia Ortiz",
      "Joe Biju",
      "Micheál Gill",
      "Ray Foysal",
      "Moaz Refaei",
    ],
    name: "Fighting Fire \nwith Fire",
    prize: "€ 1500",
    title: "1st",
  },
  {
    details: [
      [
        { highlight: false, text: "SpaceApps Athlone, also known as " },
        { highlight: true, text: "HackAthlone" },
        {
          highlight: false,
          text: ", is one of the 300+ locations for this year's NASA SpaceApps Challenge. ",
        },
        { highlight: true, text: "Technology University of the Shannon" },
        {
          highlight: false,
          text: " takes pride in hosting 200 participants on their campus for ",
        },
        { highlight: true, text: "48 hours" },
        { highlight: false, text: " to collaborate on " },
        { highlight: true, text: "30 problem statements" },
        { highlight: false, text: " that cater to all STEAM fields." },
      ],
      [
        {
          highlight: false,
          text: "\nHackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.",
        },
      ],
    ],
    image: Idontthink,
    member: [
      "Piotr Warkocki",
      "Victor Costello",
      "Josh Quirke",
      "James McNeill",
      "Dylan Lowe",
      "Sorin Stoleru",
    ],
    name: "IDontThink",
    prize: "€ 750",
    title: "2nd",
  },
  {
    details: [
      [
        { highlight: false, text: "SpaceApps Athlone, also known as " },
        { highlight: true, text: "HackAthlone" },
        {
          highlight: false,
          text: ", is one of the 300+ locations for this year's NASA SpaceApps Challenge. ",
        },
        { highlight: true, text: "Technology University of the Shannon" },
        {
          highlight: false,
          text: " takes pride in hosting 200 participants on their campus for ",
        },
        { highlight: true, text: "48 hours" },
        { highlight: false, text: " to collaborate on " },
        { highlight: true, text: "30 problem statements" },
        { highlight: false, text: " that cater to all STEAM fields." },
      ],
      [
        {
          highlight: false,
          text: "\nHackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.",
        },
      ],
    ],
    image: Soundsurfers,
    member: ["Eoghan Hynes", "Dave", "Aine", "Diarmuid", "Fabrizio"],
    name: "Sound \nsurfers",
    prize: "€ 250",
    title: "3rd",
  },
];
