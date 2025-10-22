export interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  content?: string;
  route?: () => void;
  link?: string;
}

export interface TimelineSectionData {
  title: string;
  events: TimelineEvent[];
  link?: string;
}

// `Register for a Local Event near you or Universal Event \n(please note you MUST be registered for a Local Event or Universal Event to participate).`,
export const timelineData: TimelineSectionData = {
  title: "Timeline",
  events: [
    {
      date: "Closed",
      title: "Register for the Hackathon",
      subtitle: "Registrations are open!",
      content: `HackAthlone spots fill up quickly - we hosted 150+ participants last year and expect even more this time.
`,
      route: () =>
        window.open(
          "https://www.spaceappschallenge.org/2025/local-events/athlone/?tab=schedule",
          "_blank"
        ),
    },
    {
      link: "/day1",
      date: "Friday, October 3rd",
      title: "Registration and Opening Ceremony",
      subtitle: "Kickstart the hackathon and meet your fellow innovators",
      content: `15:00 Technology Showcase
17:30 Registration Check
18:30 HACK101 and the Opening Ceremony
19:15 PITCH101
19:20 Pitch-Fest
20:00 T-40 Hours: Hackspaces are open
21:00 Dinner
23:59 Overnight Coffee`,
    },
    {
      link: "/day2",
      date: "Saturday, October 4th",
      title: "Hack, Learn & Get Guidance",
      subtitle: "Full day of building with mentorship and workshops",
      content: `08:00 Breakfast with Mentors
10:00 Mentor Hours
12:30 Lunch
14:00 Bootcamp
19:00 Important announcements
21:00 Dinner
23:59 Coffee doesn't Stop...`,
    },
    {
      link: "/day3",
      date: "Sunday, October 5th",
      title: "Final Sprint & Presentations",
      subtitle: "Push your project to the finish and showcase to judges",
      content: `07:00 Breakfast
09:00 Submit Draft Presentations (Optional)
10:00 Practice Presentations and Feedback Session
12:30 Lunch (And Due time to submit final presentations)
13:30 Final Presentations Start
17:00 Feedback Session with Participants
17:30 Awards and Closing Ceremony
18:00 Photo Op and Breakout!`,
    },
  ],
};
