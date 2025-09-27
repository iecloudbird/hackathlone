/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Calendar } from "lucide-react";
import React, { useEffect, useId, useRef, useState, useMemo } from "react";
// import { ShootingStars } from "@/components/ui/shooting-stars";
import Albert from "@/assets/images/general/landing-page/mentors/Albert.jpeg";
import Amit from "@/assets/images/general/landing-page/mentors/Amit.jpg";
import Bhagyabati from "@/assets/images/general/landing-page/mentors/Bhagyabati.jpg";
import Bryan from "@/assets/images/general/landing-page/mentors/Bryan.jpg";
import Guilherme from "@/assets/images/general/landing-page/mentors/Guilherme.jpeg";
import Kkhawaish from "@/assets/images/general/landing-page/mentors/Kkhawaish.jpeg";
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
    bio: "Mark is a mathematics expert with extensive experience in statistical analysis and problem-solving. He specializes in helping teams tackle complex mathematical challenges and data-driven solutions for space applications.",
    availability: "Weekend mornings",
    image: Mark.src,
  },
  {
    name: "Sandeep Dattatrya Joshi",
    linkedin: "https://www.linkedin.com/in/sandeep-dattatraya-joshi/",
    expertise: ["Business"],
    bio: "Sandeep brings deep business acumen and strategic thinking to guide teams in developing viable business models and go-to-market strategies for space-related innovations.",
    availability: "Friday evening, Saturday",
    image: Sandeep.src,
  },
  {
    name: "Rohith Addula",
    linkedin: "https://www.linkedin.com/in/rohith-addula/",
    expertise: ["Web Dev"],
    bio: "Rohith is a skilled web developer specializing in modern frameworks and full-stack applications. He helps teams build robust and scalable web solutions for their space projects.",
    availability: "Full weekend",
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
    bio: "Guilherme combines creativity with technical expertise in data science, AI, and remote sensing. His interdisciplinary approach helps teams develop innovative solutions to complex space challenges.",
    availability: "Saturday and Sunday",
    image: Guilherme.src,
  },
  {
    name: "Shane Byrnes",
    linkedin: "https://www.linkedin.com/in/shane-byrne-phd-7054a715/",
    expertise: ["Creative", "Remote sensing", "Sound Engineering"],
    bio: "Dr. Shane Byrnes brings PhD-level expertise in remote sensing and sound engineering, helping teams develop innovative solutions at the intersection of creativity and space technology.",
    availability: "Saturday afternoon",
    image: Shane.src,
  },
  {
    name: "Amit Hirway",
    linkedin: "https://www.linkedin.com/in/amithirway",
    expertise: ["Agile", "Spatial Audio", "General Mentorship"],
    bio: "Amit specializes in agile methodologies and spatial audio technologies. He guides teams in implementing efficient project management and innovative audio solutions for space applications.",
    availability: "Throughout the weekend",
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
    bio: "Mary is a versatile mentor with expertise spanning data science, AI, remote sensing, and web development. She helps teams leverage cutting-edge technologies for space exploration projects.",
    availability: "Friday evening, full weekend",
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
    bio: "Albert brings a unique blend of data science expertise and creative thinking to help teams develop innovative web-based solutions for space challenges.",
    availability: "Saturday and Sunday",
    image: Albert.src,
  },
  {
    name: "Khawaish Gulati",
    linkedin: "/mentors",
    expertise: ["General Mentorship"],
    bio: "Khawaish provides comprehensive mentorship across various domains, helping teams navigate challenges and achieve their project goals in the space apps competition.",
    availability: "Full weekend",
    image: Kkhawaish.src,
  },
  {
    name: "Peadar Casey",
    linkedin: "/mentors",
    expertise: ["Business Modelling", "Agriculture"],
    bio: "Peadar specializes in sustainable business models with a focus on agricultural innovations and how space technology can benefit Earth's agricultural systems.",
    availability: "Saturday",
    image: Peadar.src,
  },
  {
    name: "Bhagyabati Moharana",
    linkedin: "https://www.linkedin.com/in/bhagyabati-m-a07619172/",
    expertise: ["VR", "Physiological Synchrony", "General Mentorship"],
    bio: "Bhagyabati brings expertise in virtual reality and physiological synchrony research, helping teams create immersive and human-centered experiences for space exploration.",
    availability: "Weekend mornings",
    image: Bhagyabati.src,
  },
  {
    name: "Bryan Dunphy",
    linkedin: "https://www.linkedin.com/in/bryandunphy/",
    expertise: ["Sound Engineering", "XR", "Creative"],
    bio: "Bryan is an expert in sound engineering and XR technologies, guiding teams in creating immersive audio-visual experiences for space-related applications.",
    availability: "Friday and Saturday",
    image: Bryan.src,
  },
  // {
  //   name: "Yuhang Ye",
  //   linkedin: "https://www.linkedin.com/in/yuhang-ye-89a93183/",
  //   expertise: ["Data Science and AI"],
  //   bio: "Yuhang specializes in advanced AI and machine learning techniques, helping teams implement sophisticated data-driven solutions for space exploration challenges.",
  //   availability: "Sunday",
  //   image: Mark.src,
  // },
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
                  className="flex size-full max-w-[400px] flex-col overflow-hidden bg-neutral-900 max-md:w-full sm:rounded-3xl md:h-fit md:max-h-[90%]"
                >
                  <motion.div layoutId={`image-${active.name}-${id}`}>
                    <img
                      width={200}
                      height={200}
                      src={active.image}
                      alt={active.name}
                      className="h-96 w-full object-cover object-top sm:rounded-t-lg lg:h-80"
                    />
                  </motion.div>

                  <div>
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
                        <div className="flex items-center gap-2 font-hackathoneCabinetGrotesk text-sm text-neutral-400">
                          <Calendar size={14} />
                          <span>{active.availability}</span>
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
                        className="flex items-center gap-2 rounded-full bg-brightYellow px-4 py-2 font-hackathoneCabinetGrotesk text-sm font-bold text-black hover:opacity-90"
                      >
                        <Linkedin size={16} />
                        LinkedIn
                      </motion.a>
                    </div>

                    <div className="relative px-4 pt-4">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex h-40 flex-col items-start gap-4 overflow-auto pb-10 font-hackathoneCabinetGrotesk text-sm text-neutral-400 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] md:h-fit lg:text-base"
                      >
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
