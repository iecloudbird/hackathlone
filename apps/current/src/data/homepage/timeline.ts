export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  content?: string;
  route?: () => void;
}

export interface TimelineSectionData {
  title: string;
  events: TimelineEvent[];
}

// `Register for a Local Event near you or Universal Event \n(please note you MUST be registered for a Local Event or Universal Event to participate).`,
export const timelineData: TimelineSectionData = {
  title: "Timeline",
  events: [
    {
      date: "17th July 2025",
      title: "2025 Challenges brewing",
      subtitle: "Registration opens now, get ready!",
      content: `Get ready for the NASA Space Apps Challenge! \n Challenges will be release soon, so stay tuned!`,
      route: () =>
        window.open("https://www.spaceappschallenge.org/2025/", "_blank"),
    },
    {
      date: "3th October 2025",
      title: "Day 1",
      subtitle: "Assemble at TU Shannon & Start problem-solving with your team",
      content: `Check your Space Apps Messages, review the Participant`,
    },
    {
      date: "4th October 2025",
      title: "Day 2",
      subtitle:
        "Connect with industry experts: Get tips and feedback for your project",
      content: `At 9:00 a.m. (local time) teams may begin 
      working on their hackathon projects.`,
    },
    {
      date: "5th October 2025",
      title: "Day 3",
      subtitle:
        "Get ready to present your project & Get a chance to win the challenge",
      content: ` The hackathon ends at 11:59 p.m. (local time). 
   All projects must be submitted to the NASA Space Apps Challenge website by this deadline.`,
    },
  ],
};
