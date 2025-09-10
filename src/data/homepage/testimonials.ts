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
      id: "Spartans",
      text: "The organizers played a huge role in making this event special. It wasn’t just a place for creating unique and unheard-of ideas, but also a space to meet amazing people, gain knowledge from everyone, and simply feel happy to be part of such an incredible journey. Thank you so much!",
      teamName: "Spartans",
    },
    {
      id: "Green Guardians",
      text: "I loved everything about the hackathon. I was inspired by the technology and amazed at how much people could build in just 48 hours, often with teammates they had just met. It was an incredible experience and I truly loved it!",
      teamName: "Green Guardians",
    },
    {
      id: "Aquaferst",
      text: "Everything was amazing! The vibes were great, the event was very well organized, and there were plenty of resources with incredibly helpful mentors. We are truly thankful for all the support.",
      teamName: "Aquaferst",
    },
    {
      id: "Eco-Morphix",
      text: "Overall, it was a wonderful experience.",
      teamName: "Eco-Morphix",
    },
    {
      id: "Climate forecast 404",
      text: "It was truly an amazing experience. The event was very well organized, and the mentors were extremely helpful. We are grateful for all the support we received.",
      teamName: "Climate forecast 404",
    },
  ],
};
