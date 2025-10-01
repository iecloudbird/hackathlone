/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Calendar, Clock } from "lucide-react";
import React, { useEffect, useId, useRef, useState, useMemo } from "react";
import Adrielle from "@/assets/images/general/landing-page/mentors/Adrielle.jpg";
import Albert from "@/assets/images/general/landing-page/mentors/Albert.jpeg";
import Yuhang from "@/assets/images/general/landing-page/mentors/Aleko.jpg";
import Amit from "@/assets/images/general/landing-page/mentors/Amit.jpg";
import Bhagyabati from "@/assets/images/general/landing-page/mentors/Bhagyabati.jpg";
import Bryan from "@/assets/images/general/landing-page/mentors/Bryan.jpg";
import Eoghan from "@/assets/images/general/landing-page/mentors/Eoghan.jpg";
import Guilherme from "@/assets/images/general/landing-page/mentors/Guilherme.jpeg";
import Kkhawaish from "@/assets/images/general/landing-page/mentors/Khawaish.jpg";
import Mark from "@/assets/images/general/landing-page/mentors/Mark.png";
import Peadar from "@/assets/images/general/landing-page/mentors/Peadar.jpeg";
import Pidgem from "@/assets/images/general/landing-page/mentors/Pidgem.jpg";
import Rohith from "@/assets/images/general/landing-page/mentors/Rohith.jpg";
import Sandeep from "@/assets/images/general/landing-page/mentors/Sandeep.jpg";
import Shane from "@/assets/images/general/landing-page/mentors/Shane.jpeg";
import Footer from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";

type TimeSlot = {
  day: "Saturday" | "Sunday";
  startTime: string;
  endTime: string;
  mode: "Onsite" | "Online" | "Practice Pitches";
};

type Mentor = {
  name: string;
  linkedin: string;
  expertise: string[];
  bio: string;
  availability: string;
  timeSlots: TimeSlot[];
  image: string;
};

type AvailabilityStatus =
  | "available"
  | "leaving-soon"
  | "available-soon"
  | "not-available";

const mentors: Mentor[] = [
  {
    name: "Mark Daly",
    linkedin: "https://www.linkedin.com/in/mark-daly-9393a310/",
    expertise: ["Maths"],
    bio: "Senior Lecturer at TUS Athlone with a PhD in Theoretical Physics. Over 30 years teaching science and tech. Researching AI and Computer Vision, supervising PhDs with I-LOFAR. Member of the European Southern Observatory advisory committee and recipient of €250k+ in funding for AI/CV projects and the TUS–DIAS partnership.",
    availability:
      "Saturday: 9AM-12PM, 5PM-8PM | Sunday: 9AM-12PM (Practice Pitches)",
    timeSlots: [
      { day: "Saturday", startTime: "09:00", endTime: "12:00", mode: "Onsite" },
      { day: "Saturday", startTime: "17:00", endTime: "20:00", mode: "Onsite" },
      {
        day: "Sunday",
        startTime: "09:00",
        endTime: "12:00",
        mode: "Practice Pitches",
      },
    ],
    image: Mark.src,
  },
  {
    name: "Sandeep Dattatraya Joshi",
    linkedin: "https://www.linkedin.com/in/sandeep-dattatraya-joshi/",
    expertise: ["Business"],
    bio: "Senior Lean and Digital Business Transformation Advisor with over two decades of work experience across Defence, Manufacturing, Construction, Food processing, Textile and Chemical industries. He has led operations excellence Consulting assignments across Ireland, APAC and Middle East leveraging data analytics and change management methodologies. He founded and profitably run his Consulting startup SUDHAR Business Consulting. At IDEAM Research Institute, he partners with regional Companies to help them identify operational improvement business growth opportunities and hand hold them through the digitalisation based change implementation projects (Data analytics, ML, AI and IoT based), with keen focus on business circularity and sustainability. He is also leading three EU cascade funding projects.",
    availability:
      "Saturday: 10:30AM-11AM, 11AM-12:30PM, 1:30PM-3:30PM, 3:30PM-5PM",
    timeSlots: [
      { day: "Saturday", startTime: "10:30", endTime: "11:00", mode: "Onsite" },
      { day: "Saturday", startTime: "11:00", endTime: "12:30", mode: "Onsite" },
      { day: "Saturday", startTime: "13:30", endTime: "15:30", mode: "Onsite" },
      { day: "Saturday", startTime: "15:30", endTime: "17:00", mode: "Onsite" },
    ],
    image: Sandeep.src,
  },
  {
    name: "Rohith Addula",
    linkedin: "https://www.linkedin.com/in/rohith-addula/",
    expertise: ["Web Dev"],
    bio: "Senior Software Engineer with 8 years as a full-stack developer focused on web applications. Quantum enthusiast and space explorer, experienced in solution design, code review, and mentoring participants.",
    availability: "Saturday: 9AM-12PM, 2PM-5PM | Sunday: 9AM-12PM (Online)",
    timeSlots: [
      { day: "Saturday", startTime: "09:00", endTime: "12:00", mode: "Onsite" },
      { day: "Saturday", startTime: "14:00", endTime: "17:00", mode: "Onsite" },
      { day: "Sunday", startTime: "09:00", endTime: "12:00", mode: "Online" },
    ],
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
    availability:
      "Saturday: 3PM-6PM, 6PM-9PM | Sunday: 9AM-12PM (Practice Pitches)",
    timeSlots: [
      { day: "Saturday", startTime: "15:00", endTime: "18:00", mode: "Onsite" },
      { day: "Saturday", startTime: "18:00", endTime: "21:00", mode: "Onsite" },
      {
        day: "Sunday",
        startTime: "09:00",
        endTime: "12:00",
        mode: "Practice Pitches",
      },
    ],
    image: Guilherme.src,
  },
  {
    name: "Shane Byrnes",
    linkedin: "https://www.linkedin.com/in/shane-byrne-phd-7054a715/",
    expertise: ["Creative", "Remote sensing", "Sound Engineering"],
    bio: "Shane Byrne is an electroacoustic composer and sound artist from Wicklow, Ireland. His work explores interactivity, participation, and human-computer interaction, integrating motion, gesture, and wearables into immersive performances and installations. He creates responsive audio works using motion sensors, wearable controllers, micro-controllers, OSC, and real-time processing in environments like Csound.",
    availability: "Saturday: 10AM-3PM",
    timeSlots: [
      { day: "Saturday", startTime: "10:00", endTime: "15:00", mode: "Onsite" },
    ],
    image: Shane.src,
  },
  {
    name: "Amit Hirway",
    linkedin: "https://www.linkedin.com/in/amithirway",
    expertise: ["Agile", "Spatial Audio", "General Mentorship"],
    bio: "Assistant Lecturer at TUS with 12+ years in software engineering, agile practices, and cloud-native development. I mentor students on CI/CD, Git, and rapid prototyping, and I'm passionate about guiding teams to turn ideas into working solutions while fostering creativity and collaboration.",
    availability: "Saturday: 11AM-2PM",
    timeSlots: [
      { day: "Saturday", startTime: "11:00", endTime: "14:00", mode: "Onsite" },
    ],
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
    availability: "Saturday: 9AM-12PM, 1:30PM-3PM",
    timeSlots: [
      { day: "Saturday", startTime: "09:00", endTime: "12:00", mode: "Onsite" },
      { day: "Saturday", startTime: "13:30", endTime: "15:00", mode: "Onsite" },
    ],
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
    availability: "Saturday: 2PM-6PM",
    timeSlots: [
      { day: "Saturday", startTime: "14:00", endTime: "18:00", mode: "Onsite" },
    ],
    image: Albert.src,
  },
  {
    name: "Khawaish Gulati",
    linkedin:
      "https://www.linkedin.com/in/kkhawaish-gulati-050b511ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    expertise: ["General Mentorship"],
    bio: "I've recently completed my master's in Computer and Electronic Engineering at TCD now I'm working as a Software developer at AMD. I've organised and participated in a bunch of Hackathons and enjoy the vibe a lot",
    availability: "Saturday: 5PM-8PM",
    timeSlots: [
      { day: "Saturday", startTime: "17:00", endTime: "20:00", mode: "Onsite" },
    ],
    image: Kkhawaish.src,
  },
  {
    name: "Adrielle Nazar Moraes",
    linkedin: "https://www.linkedin.com/in/adrielle-moraes/",
    expertise: ["Web Dev", "Game Dev", "Sound Engineering", "XR", "Sensing"],
    bio: "Adrielle Moraes is a researcher and lecturer at the Technological University of the Shannon, holding a PhD in Software Engineering. Her research background lies in virtual reality and spatial audio, with a focus on auditory attention and localization using user data. In addition to her research, she teaches web development and game development, always aiming at creating interactive applications and games. Her main programming languages are Python, JavaScript, Java, and C++, which she applies across both academic and teaching contexts. This is her second time participating in the hackathon as a tutor, and she is always excited to see how participants from diverse backgrounds and levels—ranging from undergraduate to master's students—can achieve remarkable results when they put their creativity and skills into practice.",
    availability: "Saturday: 9AM-12PM | Sunday: 9AM-12PM (Practice Pitches)",
    timeSlots: [
      { day: "Saturday", startTime: "09:00", endTime: "12:00", mode: "Onsite" },
      {
        day: "Sunday",
        startTime: "09:00",
        endTime: "12:00",
        mode: "Practice Pitches",
      },
    ],
    image: Adrielle.src,
  },
  {
    name: "Peadar Casey",
    linkedin: "https://www.linkedin.com/in/peadar-casey-13b489110/",
    expertise: ["Business Modelling", "Agriculture"],
    bio: "Peadar specializes in sustainable business models with a focus on agricultural innovations and how space technology can benefit Earth's agricultural systems.",
    availability:
      "Saturday: 9AM-4PM, 6PM-10PM | Sunday: 9AM-12PM (Practice Pitches)",
    timeSlots: [
      { day: "Saturday", startTime: "09:00", endTime: "16:00", mode: "Onsite" },
      { day: "Saturday", startTime: "18:00", endTime: "22:00", mode: "Onsite" },
      {
        day: "Sunday",
        startTime: "09:00",
        endTime: "12:00",
        mode: "Practice Pitches",
      },
    ],
    image: Peadar.src,
  },
  {
    name: "Bhagyabati Moharana",
    linkedin: "https://www.linkedin.com/in/bhagyabati-m-a07619172/",
    expertise: ["VR", "Physiological Synchrony", "General Mentorship"],
    bio: "PhD in Collaborative VR & Quality of Experience. Skilled in Unity, AI/ML, and data science, with experience in emotion and workload detection. Passionate about rapid prototyping and mentoring in game development and algorithms.",
    availability: "Saturday: 9AM-12PM",
    timeSlots: [
      { day: "Saturday", startTime: "09:00", endTime: "12:00", mode: "Onsite" },
    ],
    image: Bhagyabati.src,
  },
  {
    name: "Bryan Dunphy",
    linkedin: "https://www.linkedin.com/in/bryandunphy/",
    expertise: ["Sound Engineering", "XR", "Creative"],
    bio: "XR Researcher working with VR, AR, MR, volumetric and 360° video. Background in audio (synthesis, recording, performance) and real-time graphics.",
    availability: "Saturday: 3PM-5PM (Online)",
    timeSlots: [
      { day: "Saturday", startTime: "15:00", endTime: "17:00", mode: "Online" },
    ],
    image: Bryan.src,
  },
  {
    name: "Yuhang Ye",
    linkedin: "https://www.linkedin.com/in/yuhang-ye-89a93183/",
    expertise: ["Data Science and AI"],
    bio: "Lecturer at TUS | Research in AI & Computer Vision | Experienced in Data Analytics & Visualization",
    availability:
      "Saturday: 9AM-12PM (Online), 6PM-9PM (Online) | Sunday: 9AM-12PM (Online)",
    timeSlots: [
      { day: "Saturday", startTime: "09:00", endTime: "12:00", mode: "Online" },
      { day: "Saturday", startTime: "18:00", endTime: "21:00", mode: "Online" },
      { day: "Sunday", startTime: "09:00", endTime: "12:00", mode: "Online" },
    ],
    image: Yuhang.src,
  },
  {
    name: "Eoghan Hynes",
    linkedin: "https://www.linkedin.com/in/eoghan-hynes/",
    expertise: [
      "Data Science and AI",
      "Game Dev",
      "XR",
      "Remote sensing",
      "Web App Dev",
    ],
    bio: "A passionate advocate for space exploration and a self-confessed Trekkie, Eoghan brings both technical expertise and curiosity to innovation challenges. As a previous NASA Space Apps participant and local 3rd-place winner, he understands first-hand the creativity, teamwork and problem-solving required to succeed under time constraints with minimal sleep and a diet of pizza and Monster-based caffeination. Drawing on his experience in agile software development, data analytics and XR, he now mentors Space Apps teams to help them transform bold ideas into practical, impactful solutions.",
    availability: "Both days: 10AM-3PM",
    timeSlots: [
      { day: "Saturday", startTime: "10:00", endTime: "15:00", mode: "Onsite" },
      { day: "Sunday", startTime: "10:00", endTime: "15:00", mode: "Onsite" },
    ],
    image: Eoghan.src,
  },
];

const getMentorStatus = (mentor: Mentor): AvailabilityStatus => {
  // 🧪 TEST MODE START - Remove this entire section for production
  const TEST_MODE = false; // Set to false for production

  let currentDate, currentMonth, currentYear, currentHour, currentMinute;

  if (TEST_MODE) {
    // Hardcode test values for Sunday 10:00 AM Irish time
    currentDate = 4; // 5 = Sunday October 5th
    currentMonth = 9; // 9 = October (0-indexed)
    currentYear = 2025;
    currentHour = 11; // 10 AM
    currentMinute = 58;

    // TO TEST DIFFERENT TIMES, CHANGE THESE VALUES:
    // Saturday 9:30 AM: date=4, hour=9, minute=30
    // Saturday 12:30 PM: date=4, hour=12, minute=30
    // Saturday 1:00 PM: date=4, hour=13, minute=0
    // Sunday 10:00 AM: date=5, hour=10, minute=0
  } else {
    // PRODUCTION MODE - Get real Irish time
    const now = new Date();
    const irishTimeString = now.toLocaleString("en-US", {
      timeZone: "Europe/Dublin",
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    });

    const irishDate = new Date(irishTimeString);
    currentDate = irishDate.getDate();
    currentMonth = irishDate.getMonth();
    currentYear = irishDate.getFullYear();
    currentHour = irishDate.getHours();
    currentMinute = irishDate.getMinutes();
  }
  // 🧪 TEST MODE END

  const isSaturday =
    currentYear === 2025 && currentMonth === 9 && currentDate === 4;
  const isSunday =
    currentYear === 2025 && currentMonth === 9 && currentDate === 5;

  if (!isSaturday && !isSunday) {
    return "not-available";
  }

  const dayName = isSaturday ? "Saturday" : "Sunday";
  const currentTimeInMinutes = currentHour * 60 + currentMinute;

  const todaySlots = mentor.timeSlots.filter((slot) => slot.day === dayName);

  if (todaySlots.length === 0) {
    return "not-available";
  }

  // First pass: Check if currently available or leaving soon
  for (const slot of todaySlots) {
    const [startHour, startMinute] = slot.startTime.split(":").map(Number);
    const [endHour, endMinute] = slot.endTime.split(":").map(Number);
    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;

    if (
      currentTimeInMinutes >= startTimeInMinutes &&
      currentTimeInMinutes < endTimeInMinutes
    ) {
      if (endTimeInMinutes - currentTimeInMinutes <= 30) {
        return "leaving-soon";
      }
      return "available";
    }
  }

  // Second pass: Check if available soon
  for (const slot of todaySlots) {
    const [startHour, startMinute] = slot.startTime.split(":").map(Number);
    const startTimeInMinutes = startHour * 60 + startMinute;

    if (
      startTimeInMinutes > currentTimeInMinutes &&
      startTimeInMinutes - currentTimeInMinutes <= 60
    ) {
      return "available-soon";
    }
  }

  return "not-available";
};

const getStatusConfig = (status: AvailabilityStatus) => {
  switch (status) {
    case "available":
      return {
        color: "bg-green-500",
        text: "Available Now",
        textColor: "text-green-500",
        bgOpacity: "bg-green-500/10",
      };
    case "leaving-soon":
      return {
        color: "bg-yellow-500",
        text: "Leaving Soon",
        textColor: "text-yellow-500",
        bgOpacity: "bg-yellow-500/10",
      };
    case "available-soon":
      return {
        color: "bg-blue-500",
        text: "Available Soon",
        textColor: "text-blue-500",
        bgOpacity: "bg-blue-500/10",
      };
    case "not-available":
      return {
        color: "bg-gray-500",
        text: "Not Available",
        textColor: "text-gray-500",
        bgOpacity: "bg-gray-500/10",
      };
  }
};

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

// Custom hook for outside click
const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, callback]);
};

export default function MentorsPage() {
  const [active, setActive] = useState<Mentor | null>(null);
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<
    AvailabilityStatus[]
  >([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  // Check if availability features should be shown (Oct 4-5, 2025)
  const shouldShowAvailability = useMemo(() => {
    const now = new Date();
    const irishTimeString = now.toLocaleString("en-US", {
      timeZone: "Europe/Dublin",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const irishDate = new Date(irishTimeString);
    const currentDate = irishDate.getDate();
    const currentMonth = irishDate.getMonth();
    const currentYear = irishDate.getFullYear();

    // Show availability features only on Oct 4-5, 2025
    const isHackathonDates =
      currentYear === 2025 &&
      currentMonth === 9 &&
      (currentDate === 4 || currentDate === 5);

    return isHackathonDates;
  }, [currentTime]);

  // Update time every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  // Extract unique expertise areas
  const expertiseOptions = useMemo(() => {
    const allExpertise = mentors.flatMap((mentor) => mentor.expertise);
    return Array.from(new Set(allExpertise)).sort();
  }, []);

  // Availability filter options
  const availabilityOptions: { value: AvailabilityStatus; label: string }[] = [
    { value: "available", label: "Available Now" },
    { value: "leaving-soon", label: "Leaving Soon" },
    { value: "available-soon", label: "Available Soon" },
    { value: "not-available", label: "Not Available" },
  ];

  // Sort and filter mentors
  const sortedAndFilteredMentors = useMemo(() => {
    let filtered = [...mentors];

    // Filter by expertise
    if (selectedExpertise.length > 0) {
      filtered = filtered.filter((mentor) =>
        selectedExpertise.some((expertise) =>
          mentor.expertise.includes(expertise)
        )
      );
    }

    // Filter by availability status (only if availability features are shown)
    if (shouldShowAvailability && selectedAvailability.length > 0) {
      filtered = filtered.filter((mentor) =>
        selectedAvailability.includes(getMentorStatus(mentor))
      );
    }

    // Sort by availability status (only on hackathon dates)
    if (shouldShowAvailability) {
      return filtered.sort((a, b) => {
        const statusOrder: AvailabilityStatus[] = [
          "available",
          "leaving-soon",
          "available-soon",
          "not-available",
        ];
        const statusA = getMentorStatus(a);
        const statusB = getMentorStatus(b);
        return statusOrder.indexOf(statusA) - statusOrder.indexOf(statusB);
      });
    }

    return filtered;
  }, [
    selectedExpertise,
    selectedAvailability,
    currentTime,
    shouldShowAvailability,
  ]);

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

  const toggleAvailability = (availability: AvailabilityStatus) => {
    setSelectedAvailability((prev) =>
      prev.includes(availability)
        ? prev.filter((a) => a !== availability)
        : [...prev, availability]
    );
  };

  const clearFilters = () => {
    setSelectedExpertise([]);
    setSelectedAvailability([]);
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      <div className="relative z-10 py-6">
        <NavbarDemo />
        {/* Header */}
        <div className="mx-auto my-10 flex max-w-4xl flex-col items-center justify-center px-4 pt-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-3 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-2 text-center text-4xl font-bold text-transparent"
          >
            Meet Our Mentors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full px-4 text-center text-lg text-gray-300"
          >
            Experienced professionals who will guide teams during NASA Space
            Apps Athlone, 2025.
          </motion.p>
        </div>

        {/* Filters */}
        <div className="mx-auto mb-8 max-w-6xl px-4">
          {/* Expertise Filters */}
          <div className="mb-6">
            <h3 className="mb-3 text-center text-sm font-semibold text-gray-400">
              Filter by Expertise
            </h3>
            <div className="mx-auto flex flex-wrap items-center justify-center gap-2">
              {expertiseOptions.map((expertise) => {
                const isSelected = selectedExpertise.includes(expertise);
                return (
                  <button
                    key={expertise}
                    onClick={() => toggleExpertise(expertise)}
                    className={`rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 ${
                      isSelected
                        ? "bg-yellow-400 text-black shadow-md"
                        : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/80"
                    }`}
                    aria-pressed={isSelected}
                  >
                    {expertise}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Availability Filters - Only show on Oct 4-5 */}
          {shouldShowAvailability && (
            <div className="mb-6">
              <h3 className="mb-3 text-center text-sm font-semibold text-gray-400">
                Filter by Availability
              </h3>
              <div className="mx-auto flex flex-wrap items-center justify-center gap-2">
                {availabilityOptions.map((option) => {
                  const isSelected = selectedAvailability.includes(
                    option.value
                  );
                  const config = getStatusConfig(option.value);
                  return (
                    <button
                      key={option.value}
                      onClick={() => toggleAvailability(option.value)}
                      className={`flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium transition-all duration-200 ${
                        isSelected
                          ? `${config.bgOpacity} ${config.textColor} ring-2 ring-${config.color}`
                          : "bg-neutral-800/50 text-neutral-300 hover:bg-neutral-700/80"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <span
                        className={`h-2 w-2 rounded-full ${config.color}`}
                      ></span>
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {(selectedExpertise.length > 0 ||
            selectedAvailability.length > 0) && (
            <div className="flex justify-center">
              <button
                onClick={clearFilters}
                className="rounded-full bg-red-600/80 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-red-600"
              >
                Clear All Filters
              </button>
            </div>
          )}

          <div className="mt-4 text-center text-sm text-neutral-400">
            {selectedExpertise.length > 0 || selectedAvailability.length > 0
              ? `Showing ${sortedAndFilteredMentors.length} mentor${sortedAndFilteredMentors.length !== 1 ? "s" : ""}`
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
                  <div className="flex items-start justify-between gap-4 p-4 pb-3">
                    <div className="flex-1">
                      <motion.h3
                        layoutId={`title-${active.name}-${id}`}
                        className="mb-2 text-xl text-neutral-200"
                      >
                        {active.name}
                      </motion.h3>

                      {/* Expertise Tags */}
                      <div className="flex flex-wrap gap-2">
                        {active.expertise.map((exp) => (
                          <span
                            key={exp}
                            className="rounded-full bg-yellow-400/20 px-2 py-1 text-xs text-yellow-400"
                          >
                            {exp}
                          </span>
                        ))}
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
                      className="flex items-center gap-2 whitespace-nowrap rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-black hover:opacity-90"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </motion.a>
                  </div>

                  {/* Scrollable Content Area */}
                  <div className="flex-1 overflow-y-auto px-4 pb-4 [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none]">
                    <style jsx>{`
                      div::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>

                    {/* Availability Table */}
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mb-4"
                    >
                      <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-neutral-300">
                        <Calendar size={16} />
                        <span>Availability Schedule</span>
                      </div>
                      <div className="overflow-hidden rounded-lg border border-neutral-700/50">
                        <table className="w-full text-sm">
                          <thead className="bg-neutral-800/50">
                            <tr>
                              <th className="px-3 py-2 text-left font-medium text-neutral-300">
                                Day
                              </th>
                              <th className="px-3 py-2 text-left font-medium text-neutral-300">
                                Time
                              </th>
                              <th className="px-3 py-2 text-left font-medium text-neutral-300">
                                Mode
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-700/50">
                            {active.timeSlots.map((slot, idx) => (
                              <tr key={idx} className="bg-neutral-800/20">
                                <td className="px-3 py-2 text-neutral-300">
                                  {slot.day === "Saturday"
                                    ? "Sat, Oct 4"
                                    : "Sun, Oct 5"}
                                </td>
                                <td className="px-3 py-2 text-neutral-300">
                                  {slot.startTime} - {slot.endTime}
                                </td>
                                <td className="px-3 py-2">
                                  <span
                                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${
                                      slot.mode === "Online"
                                        ? "bg-blue-500/20 text-blue-400"
                                        : slot.mode === "Practice Pitches"
                                          ? "bg-purple-500/20 text-purple-400"
                                          : "bg-green-500/20 text-green-400"
                                    }`}
                                  >
                                    {slot.mode}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>

                    {/* Bio Section */}
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4"
                    >
                      <div className="mb-2 text-sm font-semibold text-neutral-300">
                        About
                      </div>
                      <div className="text-sm leading-relaxed text-neutral-400">
                        {active.bio}
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        {/* Mentor Grid */}
        <ul className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {sortedAndFilteredMentors.map((mentor, index) => {
            const status = getMentorStatus(mentor);
            const statusConfig = getStatusConfig(status);
            const isNotAvailable = status === "not-available";

            return (
              <motion.div
                layoutId={`card-${mentor.name}-${id}`}
                key={mentor.name}
                onClick={() => setActive(mentor)}
                className={`relative flex cursor-pointer flex-col rounded-xl p-4 transition-all duration-300 ${
                  shouldShowAvailability && isNotAvailable
                    ? "opacity-50 hover:bg-neutral-800/30"
                    : "hover:bg-neutral-800/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: shouldShowAvailability && isNotAvailable ? 0.5 : 1,
                  y: 0,
                }}
                transition={{ delay: index * 0.05 }}
              >
                {/* Status Badge - Top Right - Only show on Oct 4-5 */}
                {shouldShowAvailability && (
                  <div className="absolute right-6 top-6 z-10 flex items-center gap-1.5 rounded-full bg-black/60 px-2 py-1 backdrop-blur-sm">
                    <span
                      className={`h-2 w-2 animate-pulse rounded-full ${statusConfig.color}`}
                    ></span>
                    <span
                      className={`text-xs font-medium ${statusConfig.textColor}`}
                    >
                      {statusConfig.text}
                    </span>
                  </div>
                )}

                <div className="flex w-full flex-col gap-4">
                  <motion.div layoutId={`image-${mentor.name}-${id}`}>
                    <img
                      width={100}
                      height={100}
                      src={mentor.image}
                      alt={mentor.name}
                      className={`h-96 w-full rounded-lg object-cover object-top transition-all duration-300 ${
                        shouldShowAvailability && isNotAvailable
                          ? "grayscale"
                          : ""
                      }`}
                    />
                  </motion.div>
                  <div className="flex flex-col items-center justify-center">
                    <motion.h3
                      layoutId={`title-${mentor.name}-${id}`}
                      className="text-center text-base font-medium text-neutral-200"
                    >
                      {mentor.name}
                    </motion.h3>
                    <div className="mt-2 flex flex-wrap justify-center gap-1">
                      {mentor.expertise.slice(0, 2).map((exp) => (
                        <span
                          key={exp}
                          className="rounded bg-neutral-800 px-2 py-1 text-xs text-neutral-400"
                        >
                          {exp}
                        </span>
                      ))}
                      {mentor.expertise.length > 2 && (
                        <span className="px-2 py-1 text-xs text-neutral-500">
                          +{mentor.expertise.length - 2} more
                        </span>
                      )}
                    </div>

                    {/* Availability Time Display */}
                    <div className="mt-2 flex items-center gap-1 text-xs text-neutral-500">
                      <Clock size={12} />
                      <span className="line-clamp-1">
                        {mentor.availability}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-yellow-400 hover:underline">
                      Check Bio →
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </ul>

        {/* No results message */}
        {sortedAndFilteredMentors.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-12 max-w-md text-center"
          >
            <p className="text-lg text-neutral-400">
              No mentors found for the selected filters.
            </p>
            <button
              onClick={clearFilters}
              className="mt-4 rounded-full bg-yellow-400 px-6 py-2 font-medium text-black transition-opacity hover:opacity-90"
            >
              View All Mentors
            </button>
          </motion.div>
        )}
      </div>
      <Footer />
    </section>
  );
}
