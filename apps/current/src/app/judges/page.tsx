/* eslint-disable import/no-named-as-default */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Linkedin, Mail, Phone } from "lucide-react";
import React, { useEffect, useId, useRef, useState } from "react";
import Clare from "@/assets/images/general/landing-page/judges/Clare.jpeg";
import Gillian from "@/assets/images/general/landing-page/judges/Gillian.jpg";
import James from "@/assets/images/general/landing-page/judges/James.jpg";
import Jane from "@/assets/images/general/landing-page/judges/Jane.jpg";
import Michela from "@/assets/images/general/landing-page/judges/Michela.jpg";
import Rebecca from "@/assets/images/general/landing-page/judges/Rebecca.jpg";
import Shane from "@/assets/images/general/landing-page/judges/Shane.jpg";
import Footer from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";

// Import placeholder images - replace with actual judge images

type Judge = {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  bio: string;
  image: string;
  tshirtSize: string;
};

const judges: Judge[] = [
  {
    name: "James Lardner",
    email: "James.Lardner@bsci.com",
    phone: "0876684837",
    linkedin: "https://www.linkedin.com/in/james-lardner-1a0865231",
    bio: "James Lardner is a Fellow Software Engineer at Boston Scientific Galway, Ireland where he leads a team in the development and deployment of advanced manufacturing technologies in highly regulated environments. James holds a B.Sc degree in Mathematical Science and Computer Studies from the University of Galway and has over 20 years of experience working in the medical device and telecommunication industries. His primary focus in MedTech is manufacturing equipment data integration methodologies and it's collection into enterprise systems. For the last 5 years, James has played an integral part in forming and leading the site manufacturing digitalisation transformation strategy and has focused on the development and rollout strategies to deploy the latest technology into Boston Scientific's manufacturing environments.",
    image: James.src,
    tshirtSize: 'M (38/40")',
  },
  {
    name: "Shane Gilligan",
    email: "shane.gilligan@bsci.com",
    phone: "0862510150",
    linkedin: "https://www.linkedin.com/in/shane-gilligan-38888a36",
    bio: "I am a Mechanical Engineer with 12 years Industry experience in the Design & Manufacture of Equipment for many Industries. I hold an MEng in Mech.Engineering. Currently working with Boston Scientific in a Senior Mechanical Design Lead role, I support many exploratory projects within Digital Factory to enable automation of complex medical device production. I am passionate about new technology and how it can compliment the design process. We have been working with TUS over the last number of years to develop an XR toolkit for high impact visualisation of our equipment designs and production layouts. This is my first time experiencing a hackathon and I am looking forward to be involved!",
    image: Shane.src,
    tshirtSize: 'XL (46/48")',
  },
  {
    name: "Jane Burns",
    email: "jane.burns@tus.ie",
    phone: "085 1228 5007",
    linkedin: "https://www.linkedin.com/in/janeaburns/",
    bio: "Jane Burns, MBA, MLIS, MPhil, FLAI, is the Director of Education & Public Engagement at the Technological University of the Shannon, Ireland. Jane has a wealth of employment experiences from a number of Irish Higher Education Institutions, Research Bodies, the Private Sector In 2018 Jane made the move to Academic Management at TUS. She is an experienced Librarian, University Lecturer and CPD facilitator. Her research and personal interests include understanding and communication health issues and experiences. Jane is currently a PhD candidate at Dublin City University where she is exploring the areas of Graphicacy & Graphic Medicine in Education.",
    image: Jane.src,
    tshirtSize: '2XL (50/52")',
  },
  {
    name: "Dr Gillian Lake",
    email: "gillian.lake@childpaths.ie",
    phone: "0838298930",
    linkedin:
      "https://www.linkedin.com/in/dr-gillian-lake-dphil-oxon-35180324/",
    bio: "I have worked in education since 2001 and I'm highly motivated by the power it has to change lives. In August 2024 I began working as Chief Education Officer at Child Paths, with responsibility for creating and driving the education strategy of the business. Before that, I was an Associate Professor in Early Childhood Education and Chair of Postgraduate Studies by Research at DCU Institute of Education (2018 to 2024). I am a fellow of AdvanceHE, (FHEA) in the UK. During my tenure as Chair of the PhD programme in DCU Institute of Education, I ran the first hackathon in the faculty. I was also a mentor for a university wide Hackathon in 2024. I was a primary teacher in Ireland for many years before undertaking an MSc in Child Development and Education (University of Oxford). I was then awarded the Elfrida Talbot Scholarship to undertake a Doctorate of Philosophy in Education at the University of Oxford, focusing on language development and early childhood education. I have continued to work in this area, both as a lecturer (DCU and Oxford Brookes University, UK) and a researcher. Research in early childhood education have allowed me to collaborate with industry, the early childhood sector and international research partners. I proudly co-wrote the Communicating Theme of the Irish government's commissioned Literature Review which informed the updating of the Irish statutory framework ECEC Aistear. I was recently invited to be an expert reviewer at the International Hellenic University, Thessaloniki, Greece on their new National Pedagogical Framework for ECEC. I was presented with a Research Ally Prize from the Irish Research Council in December 2022 for my work in supporting and supervising research students.",
    image: Gillian.src,
    tshirtSize: 'L (42/44")',
  },
  {
    name: "Clare Conneally",
    email: "clare@informedlearning.ie",
    phone: "0872480717",
    linkedin: "https://www.linkedin.com/in/clareconneally/",
    bio: "Clare Conneally is a librarian and founder of Informed Learning, a professional development initiative that delivers specialised training in the library and higher education sectors. With a background in research support, teaching, and user engagement, she combines practical experience with a commitment to learning innovation. Her undergraduate degree in Philosophy means she's no stranger to tackling big questions. Clare is also a strong advocate for fostering inclusive communities in her professional networks and beyond. And having gone to Space Camp almost twenty years ago, she is particularly delighted to be a judge at this year's hackathon.",
    image: Clare.src,
    tshirtSize: '2XL (50/52")',
  },
  {
    name: "Michela Ottaviani",
    email: "michela.ottaviani@tus.ie",
    phone: "0899675755",
    linkedin: "https://www.linkedin.com/in/michela-ottaviani-622963267/",
    bio: "I am currently an Assistant Lecturer in the Department of Applied Sciences at TUS, with my main research area focused on lithium-ion batteries alongside collaborative projects in energy storage and environmentally friendly chemistry. I work with industry partners on initiatives such as the safe storage of lithium-ion batteries, the development of a hospital battery management system, and the detection of microplastics in the Shannon River. The NASA Space Apps Challenge address themes like efficient energy storage for spacecraft, sustainable resource use, pollution monitoring, and safe handling of hazardous materials, all closely aligned with my research. I believe that solutions designed for space can often be adapted to solve urgent challenges here on Earth.",
    image: Michela.src,
    tshirtSize: 'S (34/36")',
  },
  {
    name: "Rebecca Carragher",
    email: "rebecks.c@gmail.com",
    phone: "0838491677",
    linkedin: "https://www.linkedin.com/in/rebecca-carragher-87407011b/",
    bio: "I'm Rebecca Carragher, a communications professional dedicated to bridging the gap between advanced technology, space exploration, and sustainability. My work is centered on how we can leverage our presence in space to foster a more sustainable future on Earth and beyond. Currently, I serve as a Communications Lead for the Space Generation Advisory Council, where I am deeply involved in the 'Cosmic Futures' project. This initiative focuses on developing and advocating for sustainable policies that will govern human activity in space for the next thousand years, addressing critical issues like space debris, resource utilization, and long-term environmental stewardship. Furthermore, my recent participation in the International Space University's Space Studies Program involved intensive team research into using satellite data for climate change mitigation, specifically monitoring Arctic permafrost thaw. This hands-on experience gave me a profound appreciation for the practical application of space assets to solve pressing global environmental challenges. Professionally, I have led rebranding and global campaigns in the green tech sector, working with companies like Hydrogen Green Power to position them at the forefront of the clean energy transition. This blend of experience—from practical climate research and far-sighted space policy to cleantech marketing—informs my perspective. I will be looking for projects that not only demonstrate technical innovation but also a clear, compelling vision for a sustainable and responsible future.",
    image: Rebecca.src,
    tshirtSize: 'M (38/40")',
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

export default function JudgesPage() {
  const [active, setActive] = useState<Judge | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

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
            className="mb-3 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-2 text-center font-nokaTrial text-4xl font-bold text-transparent"
          >
            Meet Our Judges
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            viewport={{ once: true }}
            className="w-full px-4 text-center font-hackathoneCabinetGrotesk text-gray-300"
          >
            Distinguished professionals who evaluated projects at NASA Space
            Apps Athlone, 2025.
          </motion.p>
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

                      {/* Contact Information */}
                      <div className="flex flex-col gap-2 text-sm text-neutral-400">
                        <div className="flex items-center gap-2">
                          <Mail size={14} />
                          <a
                            href={`mailto:${active.email}`}
                            className="hover:text-yellow-400"
                          >
                            {active.email}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone size={14} />
                          <span>{active.phone}</span>
                        </div>
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

        {/* Judge Grid */}
        <ul className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
          {judges.map((judge, index) => (
            <motion.div
              layoutId={`card-${judge.name}-${id}`}
              key={judge.name}
              onClick={() => setActive(judge)}
              className="relative flex cursor-pointer flex-col rounded-xl p-4 transition-all duration-300 hover:bg-neutral-800/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex w-full flex-col gap-4">
                <motion.div layoutId={`image-${judge.name}-${id}`}>
                  <img
                    width={100}
                    height={100}
                    src={judge.image}
                    alt={judge.name}
                    className="h-96 w-full rounded-lg object-cover object-top transition-all duration-300"
                  />
                </motion.div>
                <div className="flex flex-col items-center justify-center">
                  <motion.h3
                    layoutId={`title-${judge.name}-${id}`}
                    className="text-center text-base font-medium text-neutral-200"
                  >
                    {judge.name}
                  </motion.h3>

                  <p className="mt-2 text-sm text-yellow-400 hover:underline">
                    View Bio →
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
  );
}
