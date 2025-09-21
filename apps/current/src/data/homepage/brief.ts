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
    "Space Apps Athlone, also known as HackAthlone, is one of the 300+ locations for this year's NASA Space Apps Challenge. Technology University of the Shannon takes pride in hosting 200 participants on their campus for 48 hours to collaborate on 30 problem statements that cater to all STEAM fields.",
    "You'll have 48 hours to dig into real NASA datasets, form a team, and build something that matters. Whether you're a developer, designer, researcher, or just someone who loves solving problems, there's a place for you here.",
  ],
  countdownLabel: "Time Left",
  eventDate: "2025-10-04T00:00:00Z",
  imageUrl: "/assets/images/general/landing-page/hackathlone_challenge.jpg",
  imageAlt: "HackAthlon 25 Event",
};
