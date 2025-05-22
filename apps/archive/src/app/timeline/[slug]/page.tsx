import { notFound } from "next/navigation";
import TimelinePage from "./TimelinePage";

interface TimelineItem {
  time: string;
  title: string;
  content: string;
}

interface DaySchedule {
  slug: string;
  title: string;
  day: TimelineItem[];
}

const schedule: DaySchedule[] = [
  {
    slug: "day-1",
    title: "Day 1",
    day: [
      {
        time: "9:00 AM",
        title: "Registration & Breakfast",
        content: "Check-in and enjoy a light breakfast to kick off the event.",
      },
      {
        time: "10:00 AM",
        title: "Opening Ceremony",
        content: "Welcome remarks and overview of the hackathon challenges.",
      },
      {
        time: "11:00 AM",
        title: "Team Formation & Pitchfest",
        content: "Form teams, pitch ideas, and start brainstorming.",
      },
      {
        time: "12:00 PM",
        title: "Hacking Begins",
        content:
          "Start working on your projects with access to mentors and resources.",
      },
      {
        time: "6:00 PM",
        title: "Dinner Break",
        content: "Enjoy dinner and network with other participants.",
      },
      {
        time: "8:00 PM",
        title: "Evening Hacking Session",
        content: "Continue working on your projects with mentor support.",
      },
    ],
  },
  {
    slug: "day-2",
    title: "Day 2",
    day: [
      {
        time: "8:00 AM",
        title: "Breakfast",
        content: "Fuel up for the final day with breakfast.",
      },
      {
        time: "9:00 AM",
        title: "Final Hacking Session",
        content: "Wrap up your projects and prepare for presentations.",
      },
      {
        time: "12:00 PM",
        title: "Lunch Break",
        content: "Take a break and enjoy lunch.",
      },
      {
        time: "2:00 PM",
        title: "Project Submissions",
        content: "Submit your final projects for judging.",
      },
      {
        time: "3:00 PM",
        title: "Presentations & Judging",
        content: "Present your projects to the judges.",
      },
      {
        time: "5:00 PM",
        title: "Closing Ceremony & Awards",
        content: "Celebrate the winners and wrap up the event.",
      },
    ],
  },
];

// Generate static parameters for all schedule days
export async function generateStaticParams() {
  return schedule.map((day) => ({
    slug: day.slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const daySchedule = schedule.find((d) => d.slug === params.slug);

  if (!daySchedule) {
    notFound();
  }

  return <TimelinePage daySchedule={daySchedule} />;
}
