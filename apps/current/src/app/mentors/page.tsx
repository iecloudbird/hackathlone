"use client";

import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import React, { useMemo, useState } from "react";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { SectionContainer } from "@/components/homepage/SectionContainer";
import { ShootingStars } from "@/components/ui/shooting-stars";
import BackToTopButton from "../general/back-to-top";

type Mentor = {
  name: string;
  linkedin: string;
  expertise: string[];
};

const mentors: Mentor[] = [
  {
    name: "Mark Daly",
    linkedin: "https://www.linkedin.com/in/mark-daly-9393a310/",
    expertise: ["Maths"],
  },
  {
    name: "Sandeep Dattatrya Joshi",
    linkedin: "https://www.linkedin.com/in/sandeep-dattatraya-joshi/",
    expertise: ["Business"],
  },
  {
    name: "Rohith Addula",
    linkedin: "https://www.linkedin.com/in/rohith-addula/",
    expertise: ["Web Dev"],
  },
  {
    name: "Ray Fitzpatrick",
    linkedin: "https://www.linkedin.com/in/ray-fitzpatrick-351a801a2/",
    expertise: ["Agile", "Scrum Master"],
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
  },
  {
    name: "Shane Byrnes",
    linkedin: "https://www.linkedin.com/in/shane-byrne-phd-7054a715/",
    expertise: ["Creative", "Remote sensing", "Sound Engineering"],
  },
  {
    name: "Amit",
    linkedin: "https://www.linkedin.com/in/amithirway",
    expertise: ["Agile", "Spatial Audio", "General Mentorship"],
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
  },
  {
    name: "Khawaish Gulati",
    linkedin: "/mentors",
    expertise: ["General Mentorship"],
  },
  {
    name: "Peadar Casey",
    linkedin: "/mentors",
    expertise: ["Business Modelling", "Agriculture"],
  },
  {
    name: "Adrielle Nazar Moraes",
    linkedin: "/mentors",
    expertise: ["Web Dev", "Sound Engineering"],
  },
  {
    name: "Eoghan Hynes",
    linkedin: "/mentors",
    expertise: ["XR", "QoE", "General Research"],
  },
  {
    name: "Conor Keighrey",
    linkedin: "/mentors",
    expertise: ["Game Dev"],
  },
  {
    name: "Bhagyabati Moharana",
    linkedin: "https://www.linkedin.com/in/bhagyabati-m-a07619172/",
    expertise: ["VR", "Physiological Synchrony", "General Mentorship"],
  },
  {
    name: "Bryan Dunphy",
    linkedin: "https://www.linkedin.com/in/bryandunphy/",
    expertise: ["Sound Engineering", "XR", "Creative"],
  },
  {
    name: "Yuhang Ye",
    linkedin: "https://www.linkedin.com/in/yuhang-ye-89a93183/",
    expertise: ["Data Science and AI"],
  },
  {
    name: "David Concannon",
    linkedin: "https://www.linkedin.com/in/david-concannon-90685796/",
    expertise: ["Unity"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.06,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

const MentorCard: React.FC<{ mentor: Mentor; index: number }> = ({
  mentor,
  index,
}) => {
  const [flipped, setFlipped] = useState(false);

  const handleCardInteraction = () => {
    // On mobile, toggle the flipped state on tap
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setFlipped(!flipped);
    }
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="h-[170px] w-full cursor-help" // Fixed height container
    >
      {/* perspective container ensures the entire tile flips when hovered anywhere */}
      <div
        className="size-full"
        style={{ perspective: 1000 }}
        onMouseEnter={() => setFlipped(true)}
        onMouseLeave={() => setFlipped(false)}
        onFocus={() => setFlipped(true)}
        onBlur={() => setFlipped(false)}
        onClick={handleCardInteraction}
        onTouchStart={handleCardInteraction}
        tabIndex={0}
        aria-label={`${mentor.name} card`}
      >
        <motion.div
          // inner panel that actually flips
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 24 }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative size-full"
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-xl border border-neutral-800 bg-neutral-950/40 p-5 shadow-sm"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div className="mx-auto flex flex-col items-center justify-center gap-4">
              <div className="flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-slate-700 to-slate-900 text-lg font-bold text-white">
                {mentor.name
                  .split(" ")
                  .map((p) => p[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="flex-1 text-center">
                <h3 className="text-base font-semibold text-white">
                  {mentor.name}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">Mentor</p>
                {/* expertise removed from front per request */}
              </div>
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 flex flex-col justify-between rounded-xl border border-neutral-800 bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 shadow-md"
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <div>
              <h4 className="mb-3 text-center text-lg font-bold text-white">
                Expertise
              </h4>
              <p className="mb-4 text-center text-sm text-neutral-300">
                {mentor.expertise.length
                  ? mentor.expertise.join(", ")
                  : "General Mentorship"}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-400">Connect on</span>
              <a
                href={mentor.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn profile for ${mentor.name}`}
                className="inline-flex items-center justify-center rounded-full bg-brightYellow p-2 text-black hover:opacity-95"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function MentorsPage() {
  // Extract unique expertise areas from mentors
  const expertiseOptions = useMemo(() => {
    const allExpertise = mentors.flatMap((mentor) => mentor.expertise);
    return Array.from(new Set(allExpertise)).sort();
  }, []);

  // State for selected expertise filters
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);

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

  // Toggle expertise selection
  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedExpertise([]);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-deepSpace text-white">
      <ShootingStars />
      <div className="relative z-10 py-6">
        <NavbarDemo />
        <SectionContainer>
          <div className="mx-auto my-10 flex max-w-4xl flex-col items-center justify-center text-center">
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-3 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-2 text-center font-nokaTrial text-4xl font-bold text-transparent"
            >
              Mentors
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              viewport={{ once: true }}
              className="max-w-2xl px-4 text-center font-hackathoneCabinetGrotesk text-lg text-gray-300"
            >
              Experienced professionals who will guide teams during NASA Space
              Apps Athlone.
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

          {/* Mentor Grid */}
          <motion.div
            className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={selectedExpertise.join(",")} // Re-trigger animation when filters change
          >
            {filteredMentors.map((mentor, index) => (
              <MentorCard
                key={`${mentor.name}-${mentor.linkedin}`}
                mentor={mentor}
                index={index}
              />
            ))}
          </motion.div>

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
