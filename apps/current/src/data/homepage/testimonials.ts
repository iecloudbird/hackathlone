export interface TestimonialData {
  title: string;
  testimonials: {
    id: string;
    text: string;
    teamName: string;
  }[];
}

export const testimonialData: TestimonialData = {
  title: "Stories Unfolded at Hackathlone",
  testimonials: [
    {
      id: "help-kelp",
      text: `"I teamed up with people from different backgrounds, but we all had the same interests, which are sharing experiences and ideas. It was a good experience to hear different perspectives and ideas regarding our challenge 'Ocean Garden' which we focusing on the seaweed kelp."`,
      teamName: "Help Kelp, Help Ourselves",
    },
    {
      id: "cococrunch",
      text: `"Initially, we struggled with hard coding from scratch, but a mentor's advice to focus on product design improved our teamwork. While the event was challenging, it offered valuable learning experiences, though better communication and more diverse food options could enhance future hackathons."`,
      teamName: "Cococrunch",
    },
    {
      id: "artemis-go",
      text: `"It was a wonderful experience, 3 days of brain storming, networking, and hacking. I would definitely want to be a part of the next one and more to come. The tutors and instructors were very helpful and worked hard too as well. Happy to be a part of it"`,
      teamName: "Artemis Go",
    },
    {
      id: "idontthink",
      text: `"Great Event, run very well with lots of opportunities to gain experience and make connections. Great experience for similar events in the future. Provided food and drinks and made sure everyone was satisfied!"`,
      teamName: "IdontThink",
    },
    {
      id: "antriksh",
      text: `"Great first hackathon. Mentors and organisers were very kind and helpful, providing key insights and suggestions to our project. I believe the lunch could've been improved for both the days. While dinner was great, lunch was just rolls and sandwiches. The guy who took the photographs was great as well! Shoutout to him!"`,
      teamName: "Team Antriksh",
    },
  ],
};
