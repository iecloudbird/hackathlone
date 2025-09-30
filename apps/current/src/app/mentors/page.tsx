/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Calendar } from "lucide-react";
import React, { useEffect, useId, useRef, useState, useMemo } from "react";
// import { ShootingStars } from "@/components/ui/shooting-stars";
import Adrielle from "@/assets/images/general/landing-page/mentors/Adrielle.jpg";
import Albert from "@/assets/images/general/landing-page/mentors/Albert.jpeg";
import Yuhang from "@/assets/images/general/landing-page/mentors/Aleko.jpg";
import Amit from "@/assets/images/general/landing-page/mentors/Amit.jpg";
import Bhagyabati from "@/assets/images/general/landing-page/mentors/Bhagyabati.jpg";
import Bryan from "@/assets/images/general/landing-page/mentors/Bryan.jpg";
import Guilherme from "@/assets/images/general/landing-page/mentors/Guilherme.jpeg";
import Kkhawaish from "@/assets/images/general/landing-page/mentors/Khawaish.jpg";
import Mark from "@/assets/images/general/landing-page/mentors/Mark.png";
import Peadar from "@/assets/images/general/landing-page/mentors/Peadar.jpeg";
import Pidgem from "@/assets/images/general/landing-page/mentors/Pidgem.jpg";
import Rohith from "@/assets/images/general/landing-page/mentors/Rohith.jpg";
import Sandeep from "@/assets/images/general/landing-page/mentors/Sandeep.jpg";
import Shane from "@/assets/images/general/landing-page/mentors/Shane.jpeg";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { useOutsideClick } from "../../hooks/use-outside-click";
import BackToTopButton from "../general/back-to-top";

type Mentor = {
  name: string;
  linkedin: string;
  expertise: string[];
  bio: string;
  availability: string;
  image: string;
};

const mentors: Mentor[] = [
  {
    name: "Mark Daly",
    linkedin: "https://www.linkedin.com/in/mark-daly-9393a310/",
    expertise: ["Maths"],
    bio: "Senior Lecturer at TUS Athlone with a PhD in Theoretical Physics. Over 30 years teaching science and tech. Researching AI and Computer Vision, supervising PhDs with I-LOFAR. Member of the European Southern Observatory advisory committee and recipient of €250k+ in funding for AI/CV projects and the TUS–DIAS partnership.",
    availability: "Both days in person (09:00 - 21:00)",
    image: Mark.src,
  },
  {
    name: "Sandeep Dattatraya Joshi",
    linkedin: "https://www.linkedin.com/in/sandeep-dattatraya-joshi/",
    expertise: ["Business"],
    bio: "Senior Lean and Digital Business Transformation Advisor with over two decades of work experience across Defence, Manufacturing, Construction, Food processing, Textile and Chemical industries. He has led operations excellence Consulting assignments across Ireland, APAC and Middle East leveraging data analytics and change management methodologies. He founded and profitably run his Consulting startup SUDHAR Business Consulting. At IDEAM Research Institute, he partners with regional Companies to help them identify operational improvement business growth opportunities and hand hold them through the digitalisation based change implementation projects (Data analytics, ML, AI and IoT based), with keen focus on business circularity and sustainability. He is also leading three EU cascade funding projects.",
    availability: "Saturday Only (10:30 - 17:00)",
    image: Sandeep.src,
  },
  {
    name: "Rohith Addula",
    linkedin: "https://www.linkedin.com/in/rohith-addula/",
    expertise: ["Web Dev"],
    bio: "Senior Software Engineer with 8 years as a full-stack developer focused on web applications. Quantum enthusiast and space explorer, experienced in solution design, code review, and mentoring participants.",
    availability: "Both days (Saturday 09:00 - 18:00, Online Sunday)",
    image: Rohith.src,
  },
  {
    name: "Guilherme Daniel Gomes",
    linkedin: "https://www.linkedin.com/in/guilhermedaniel/",
    expertise: [
      "Creative",
      "Data Science and AI",
      "Remote sensing",
      "General Mentorship",
    ],
    bio: "I like to mess up with electronics, 3d prints, pcbs, prototyping, etc.",
    availability: "Both days (Onsite) - Entire day",
    image: Guilherme.src,
  },
  {
    name: "Shane Byrnes",
    linkedin: "https://www.linkedin.com/in/shane-byrne-phd-7054a715/",
    expertise: ["Creative", "Remote sensing", "Sound Engineering"],
    bio: "Shane Byrne is an electroacoustic composer and sound artist from Wicklow, Ireland. His work explores interactivity, participation, and human-computer interaction, integrating motion, gesture, and wearables into immersive performances and installations. He creates responsive audio works using motion sensors, wearable controllers, micro-controllers, OSC, and real-time processing in environments like Csound.",
    availability: "Saturday (Onsite) 10:00 - 15:00",
    image: Shane.src,
  },
  {
    name: "Amit Hirway",
    linkedin: "https://www.linkedin.com/in/amithirway",
    expertise: ["Agile", "Spatial Audio", "General Mentorship"],
    bio: "Assistant Lecturer at TUS with 12+ years in software engineering, agile practices, and cloud-native development. I mentor students on CI/CD, Git, and rapid prototyping, and I'm passionate about guiding teams to turn ideas into working solutions while fostering creativity and collaboration.",
    availability: "Saturday (Onsite) 10:00 - 14:00",
    image: Amit.src,
  },
  {
    name: "Mary Pidgeon",
    linkedin: "https://www.linkedin.com/in/mary-pidgeon-45745b50",
    expertise: [
      "Data Science and AI",
      "Remote sensing",
      "Web App Dev",
      "General Mentorship",
    ],
    bio: "Lecturer in cybersecurity and software engineering, researching smart textile sensors for emotion detection using AI and federated learning",
    availability: "Saturday (Onsite) 09:00 - 15:00",
    image: Pidgem.src,
  },
  {
    name: "Albert Luganga",
    linkedin: "https://www.linkedin.com/in/albertluganga/",
    expertise: [
      "Data Science",
      "Creative",
      "Web App Dev",
      "General Mentorship",
    ],
    bio: "PhD researcher in emotion-aware, human-centred computing at TUS and software engineer with nearly 10 years building data-driven systems in finance, payments, and education. My work combines applied machine learning, HCI, and practical systems architecture",
    availability: "Both days (Onsite) 08:00 - 18:00",
    image: Albert.src,
  },
  {
    name: "Khawaish Gulati",
    linkedin:
      "https://www.linkedin.com/in/kkhawaish-gulati-050b511ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    expertise: ["General Mentorship"],
    bio: "I've recently completed my master's in Computer and Electronic Engineering at TCD now I'm working as a Software developer at AMD. I've organised and participated in a bunch of Hackathons and enjoy the vibe a lot",
    availability: "Saturday (Onsite) - 3 hours",
    image: Kkhawaish.src,
  },
  {
    name: "Adrielle Nazar Moraes",
    linkedin: "https://www.linkedin.com/in/adrielle-moraes/",
    expertise: ["Web Dev", "Game Dev", "Sound Engineering", "XR", "Sensing"],
    bio: "Adrielle Moraes is a researcher and lecturer at the Technological University of the Shannon, holding a PhD in Software Engineering. Her research background lies in virtual reality and spatial audio, with a focus on auditory attention and localization using user data. In addition to her research, she teaches web development and game development, always aiming at creating interactive applications and games. Her main programming languages are Python, JavaScript, Java, and C++, which she applies across both academic and teaching contexts. This is her second time participating in the hackathon as a tutor, and she is always excited to see how participants from diverse backgrounds and levels—ranging from undergraduate to master’s students—can achieve remarkable results when they put their creativity and skills into practice.",
    availability: "Both days (Onsite) - 9am - 12pm",
    image: Adrielle.src,
  },
  {
    name: "Peadar Casey",
    linkedin: "https://www.linkedin.com/in/peadar-casey-13b489110/",
    expertise: ["Business Modelling", "Agriculture"],
    bio: "Peadar specializes in sustainable business models with a focus on agricultural innovations and how space technology can benefit Earth's agricultural systems.",
    availability: "Saturday",
    image: Peadar.src,
  },
  {
    name: "Bhagyabati Moharana",
    linkedin: "https://www.linkedin.com/in/bhagyabati-m-a07619172/",
    expertise: ["VR", "Physiological Synchrony", "General Mentorship"],
    bio: "PhD in Collaborative VR & Quality of Experience. Skilled in Unity, AI/ML, and data science, with experience in emotion and workload detection. Passionate about rapid prototyping and mentoring in game development and algorithms.",
    availability: "Friday (15:00 - 19:00) + Saturday (09:00 - 13:00) - Onsite",
    image: Bhagyabati.src,
  },
  {
    name: "Bryan Dunphy",
    linkedin: "https://www.linkedin.com/in/bryandunphy/",
    expertise: ["Sound Engineering", "XR", "Creative"],
    bio: "XR Researcher working with VR, AR, MR, volumetric and 360° video. Background in audio (synthesis, recording, performance) and real-time graphics.",
    availability:
      "Both days (Online) - Saturday (15:00 - 17:00), Sunday (14:00 - 16:00)",
    image: Bryan.src,
  },
  {
    name: "Yuhang Ye",
    linkedin: "https://www.linkedin.com/in/yuhang-ye-89a93183/",
    expertise: ["Data Science and AI"],
    bio: "Lecturer at TUS | Research in AI & Computer Vision | Experienced in Data Analytics & Visualization",
    availability: "Both days (Online) - 9AM-12PM (Online)	6PM - 9PM (Online)",
    image: Yuhang.src, // Note: You'll need to add Yuhang's actual image
  },
];

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

export default function MentorsPage() {
  const [active, setActive] = useState<Mentor | null>(null);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Extract unique expertise areas
  const expertiseOptions = useMemo(() => {
    const allExpertise = mentors.flatMap((mentor) => mentor.expertise);
    return Array.from(new Set(allExpertise)).sort();
  }, []);

  // Filter mentors based on selected expertise
  const filteredMentors = useMemo(() => {
    if (selectedExpertise.length === 0) {
      return mentors;
    }
    return mentors.filter((mentor) =>
      selectedExpertise.some((expertise) =>
        mentor.expertise.includes(expertise)
      )
    );
  }, [selectedExpertise]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };

  const clearFilters = () => {
    setSelectedExpertise([]);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-deepSpace text-white">
      {/* <ShootingStars /> */}
      <div className="relative z-10 py-6">
        <NavbarDemo />
        <SectionContainer>
          {/* Header */}
          <div className="mx-auto mb-10 flex max-w-4xl flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-3 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-2 text-center font-nokaTrial text-4xl font-bold text-transparent"
            >
              Meet Our Mentors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              viewport={{ once: true }}
              className="w-full px-4 text-center font-hackathoneCabinetGrotesk text-lg text-gray-300"
            >
              Experienced professionals who will guide teams during NASA Space
              Apps Athlone, 2025.
            </motion.p>
          </div>

          {/* Filters */}
          <div className="mx-auto mb-8 max-w-6xl px-4">
            <div className="mb-4 flex flex-col gap-4 sm:items-center sm:justify-between">
              <div className="mx-auto flex flex-wrap items-center justify-center gap-2">
                {expertiseOptions.map((expertise) => {
                  const isSelected = selectedExpertise.includes(expertise);
                  return (
                    <button
                      key={expertise}
                      onClick={() => toggleExpertise(expertise)}
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? "bg-brightYellow text-black shadow-md"
                          : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/80"
                      }`}
                      aria-pressed={isSelected}
                    >
                      {expertise}
                    </button>
                  );
                })}
              </div>

              {selectedExpertise.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="my-6 rounded-full bg-red-600/80 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-red-600"
                >
                  Clear Filters
                </button>
              )}
            </div>

            <div className="text-center text-sm text-neutral-400">
              {selectedExpertise.length > 0
                ? `Showing ${filteredMentors.length} mentor${filteredMentors.length !== 1 ? "s" : ""} for: ${selectedExpertise.join(", ")}`
                : `Showing all ${mentors.length} mentors`}
            </div>
          </div>

          {/* Expandable Card Modal */}
          <AnimatePresence>
            {active && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-10 size-full bg-black/20"
              />
            )}
          </AnimatePresence>

          <AnimatePresence>
            {active ? (
              <div className="fixed inset-0 z-[100] grid place-items-center">
                <motion.button
                  key={`button-${active.name}-${id}`}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, transition: { duration: 0.05 } }}
                  className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-white lg:hidden"
                  onClick={() => setActive(null)}
                >
                  <CloseIcon />
                </motion.button>
                <motion.div
                  layoutId={`card-${active.name}-${id}`}
                  ref={ref}
                  className="flex size-full max-w-[500px] flex-col overflow-hidden bg-neutral-900 max-md:w-full sm:rounded-3xl md:h-full"
                >
                  <motion.div layoutId={`image-${active.name}-${id}`}>
                    <img
                      width={400}
                      height={400}
                      src={active.image}
                      alt={active.name}
                      className="h-96 w-full object-cover object-top sm:rounded-t-lg"
                    />
                  </motion.div>

                  <div className="flex min-h-0 flex-1 flex-col">
                    <div className="flex items-start justify-between p-4">
                      <div className="flex-1">
                        <motion.h3
                          layoutId={`title-${active.name}-${id}`}
                          className="mb-2 font-nokaTrial text-xl text-neutral-200"
                        >
                          {active.name}
                        </motion.h3>

                        {/* Expertise Tags */}
                        <div className="mb-3 flex flex-wrap gap-2">
                          {active.expertise.map((exp) => (
                            <span
                              key={exp}
                              className="rounded-full bg-brightYellow/20 px-2 py-1 font-hackathoneCabinetGrotesk text-xs text-brightYellow"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>

                        {/* Availability */}
                        <div className="flex items-start gap-2 font-hackathoneCabinetGrotesk text-sm text-neutral-400">
                          <Calendar
                            size={16}
                            className="mt-0.5 flex-shrink-0"
                          />
                          <span className="leading-relaxed">
                            {active.availability}
                          </span>
                        </div>
                      </div>

                      <motion.a
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href={active.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 flex items-center gap-2 rounded-full bg-brightYellow px-4 py-2 font-hackathoneCabinetGrotesk text-sm font-bold text-black hover:opacity-90"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </motion.a>
                    </div>

                    <div className="flex-1 overflow-hidden px-4 pb-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full overflow-y-auto font-hackathoneCabinetGrotesk text-sm leading-relaxed text-neutral-400 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none]"
                        style={{
                          scrollbarWidth: "none",
                          msOverflowStyle: "none",
                        }}
                      >
                        <style jsx>{`
                          div::-webkit-scrollbar {
                            display: none;
                          }
                        `}</style>
                        {active.bio}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          {/* Mentor Grid */}
          <ul className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredMentors.map((mentor, index) => (
              <motion.div
                layoutId={`card-${mentor.name}-${id}`}
                key={mentor.name}
                onClick={() => setActive(mentor)}
                className="flex cursor-pointer flex-col rounded-xl p-4 transition-colors hover:bg-neutral-800/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="flex w-full flex-col gap-4">
                  <motion.div layoutId={`image-${mentor.name}-${id}`}>
                    <img
                      width={100}
                      height={100}
                      src={mentor.image}
                      alt={mentor.name}
                      className="h-96 w-full rounded-lg object-cover object-top"
                    />
                  </motion.div>
                  <div className="flex flex-col items-center justify-center">
                    <motion.h3
                      layoutId={`title-${mentor.name}-${id}`}
                      className="text-center font-nokaTrial text-base font-medium text-neutral-200"
                    >
                      {mentor.name}
                    </motion.h3>
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
                      {mentor.expertise.slice(0, 2).map((exp) => (
                        <span
                          key={exp}
                          className="rounded bg-neutral-800 px-2 py-1 font-hackathoneCabinetGrotesk text-xs text-neutral-400"
                        >
                          {exp}
                        </span>
                      ))}
                      {mentor.expertise.length > 2 && (
                        <span className="px-2 py-1 font-hackathoneCabinetGrotesk text-xs text-neutral-500">
                          +{mentor.expertise.length - 2} more
                        </span>
                      )}
                    </div>
                    <p className="mt-2 font-hackathoneCabinetGrotesk text-sm text-brightYellow hover:underline">
                      Check Bio →
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </ul>

          {/* No results message */}
          {filteredMentors.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-12 max-w-md text-center"
            >
              <p className="text-lg text-neutral-400">
                No mentors found for the selected expertise.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 rounded-full bg-brightYellow px-6 py-2 font-medium text-black transition-opacity hover:opacity-90"
              >
                View All Mentors
              </button>
            </motion.div>
          )}
        </SectionContainer>
        <BackToTopButton />
      </div>
      <Footer />
    </section>
  );
}
