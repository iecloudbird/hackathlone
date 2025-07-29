export interface VenueSectionData {
  eventVenue: string;
  title: string;
  rows: {
    content: {
      description?: string;
      resources?: {
        title: string;
        items: string[];
        footer: string;
      };
    };
    image: {
      src: string;
      alt: string;
    };
    layout: "text-left" | "text-right"; // determines if text is on left or right
  }[];
}

export const venueSectionData: VenueSectionData = {
  eventVenue: "Event Venue",
  title: "Technological University of the Shannon",
  rows: [
    {
      content: {},
      image: {
        src: "/assets/images/general/landing-page/mapping-images/tus3.jpg",
        alt: "Technological University of the Shannon campus",
      },
      layout: "text-left",
    },
    {
      content: {
        description:
          "The NASA SpaceApps Challenge 2025 is happening in the heart of Ireland, Athlone, with the Technological University of the Shannon proudly hosting this massive in-person hackathon. Renowned for its innovation and technological excellence, the university educates and inspires over 7,000 students, making it the perfect venue for this prestigious event.",
        resources: {
          title: "As the venue partner, the university also offers resources:",
          items: [
            "Professional labs with software and hardware access",
            "3D printing for rapid prototyping",
            "VR/AR equipment for immersive solutions",
            "Dedicated workspace for the full 48 hours",
            "Academic and industry mentors on-site to help",
          ],
          footer:
            "Plus all meals, snacks, and the coffee you'll need to power through those late-night coding sessions.",
        },
      },
      image: {
        src: "/assets/images/general/landing-page/presentation.jpg",
        alt: "Students working at Technological University of Shannon",
      },
      layout: "text-right",
    },
  ],
};
