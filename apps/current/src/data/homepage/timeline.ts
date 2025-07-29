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
      title: "Register for the Hackathon",
      subtitle: "Registrations are open!",
      content: `HackAthlone spots fill up quickly - we hosted 150+ participants last year and expect even more this time.
`,
      route: () =>
        window.open("https://www.spaceappschallenge.org/2025/", "_blank"),
    },
    {
      date: "Friday, October 3rd",
      title: "Registration and Opening Ceremony",
      subtitle: "Kickstart the hackathon and meet your fellow innovators",
      content: `6:00 PM: Registration and opening ceremony
6:30 PM: Challenge presentations
7:15 PM: Individual pitches (30 seconds to share your idea)
8:00 PM: Team formation and project planning
11:00 PM: Late dinner (the real work is just beginning)`,
    },
    {
      date: "Saturday, October 4th",
      title: "Hack, Learn & Get Guidance",
      subtitle: "Full day of building with mentorship and workshops",
      content: `8:00 AM: Breakfast and team check-ins
10:00 AM: Mentor office hours begin
All day: Build, test, iterate
7:00 PM: Presentation workshop
9:00 PM: Dinner break`,
    },
    {
      date: "Sunday, October 5th",
      title: "Final Sprint & Presentations",
      subtitle: "Push your project to the finish and showcase to judges",
      content: `7:00 AM: Final sprint begins
10:00 AM: Practice presentations with feedback
2:00 PM: Final presentations to judges
6:00 PM: Results and closing ceremony`,
    },
  ],
};
