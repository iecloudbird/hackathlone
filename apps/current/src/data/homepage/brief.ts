export interface BriefSectionData {
  title: string;
  paragraphs: string[];
  countdownLabel: string;
  eventDate: string;
  imageUrl: string;
  imageAlt: string;
}

export const briefData: BriefSectionData = {
  title: "Introducing HackAthlone 25",
  paragraphs: [
    "SpaceApps Athlone, also known as HackAthlone, is one of the 300+ locations for this year's NASA SpaceApps Challenge. Technology University of the Shannon takes pride in hosting 200 participants on their campus for 48 hours to collaborate on 30 problem statements that cater to all STEAM fields.",
    "HackAthlone stands as the sole in-person Hackathon location in Ireland for this event, offering exciting prizes, goodies, and all necessary technical components and F&B provisions.",
  ],
  countdownLabel: "Time Left",
  eventDate: "2025-10-04T00:00:00Z",
  imageUrl: "/assets/images/general/landing-page/hackathlone_challenge.jpg",
  imageAlt: "HackAthlon 25 Event",
};
