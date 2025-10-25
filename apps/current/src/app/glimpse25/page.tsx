/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// Day 1 imports
import D1_1 from "@/assets/images/general/landing-page/day1/D1_1.jpg";
import D1_10 from "@/assets/images/general/landing-page/day1/D1_10.jpg";
import D1_11 from "@/assets/images/general/landing-page/day1/D1_11.jpg";
import D1_12 from "@/assets/images/general/landing-page/day1/D1_12.jpg";
import D1_13 from "@/assets/images/general/landing-page/day1/D1_13.jpg";
import D1_14 from "@/assets/images/general/landing-page/day1/D1_14.jpg";
import D1_15 from "@/assets/images/general/landing-page/day1/D1_15.jpg";
import D1_16 from "@/assets/images/general/landing-page/day1/D1_16.jpg";
import D1_17 from "@/assets/images/general/landing-page/day1/D1_17.jpg";
import D1_18 from "@/assets/images/general/landing-page/day1/D1_18.jpg";
import D1_2 from "@/assets/images/general/landing-page/day1/D1_2.jpg";
import D1_3 from "@/assets/images/general/landing-page/day1/D1_3.jpg";
import D1_4 from "@/assets/images/general/landing-page/day1/D1_4.jpg";
import D1_5 from "@/assets/images/general/landing-page/day1/D1_5.jpg";
import D1_6 from "@/assets/images/general/landing-page/day1/D1_6.jpg";
import D1_7 from "@/assets/images/general/landing-page/day1/D1_7.jpg";
import D1_8 from "@/assets/images/general/landing-page/day1/D1_8.jpg";
import D1_9 from "@/assets/images/general/landing-page/day1/D1_9.jpg";

// Day 2 imports
import D2_1 from "@/assets/images/general/landing-page/day2/D2_1.jpg";
import D2_10 from "@/assets/images/general/landing-page/day2/D2_10.jpg";
import D2_11 from "@/assets/images/general/landing-page/day2/D2_11.jpg";
import D2_12 from "@/assets/images/general/landing-page/day2/D2_12.jpg";
import D2_13 from "@/assets/images/general/landing-page/day2/D2_13.jpg";
import D2_14 from "@/assets/images/general/landing-page/day2/D2_14.jpg";
import D2_15 from "@/assets/images/general/landing-page/day2/D2_15.jpg";
import D2_16 from "@/assets/images/general/landing-page/day2/D2_16.jpg";
import D2_2 from "@/assets/images/general/landing-page/day2/D2_2.jpg";
import D2_3 from "@/assets/images/general/landing-page/day2/D2_3.jpg";
import D2_4 from "@/assets/images/general/landing-page/day2/D2_4.jpg";
import D2_5 from "@/assets/images/general/landing-page/day2/D2_5.jpg";
import D2_6 from "@/assets/images/general/landing-page/day2/D2_6.jpg";
import D2_7 from "@/assets/images/general/landing-page/day2/D2_7.jpg";
import D2_8 from "@/assets/images/general/landing-page/day2/D2_8.jpg";
import D2_9 from "@/assets/images/general/landing-page/day2/D2_9.jpg";

// Day 3 imports
import D3_1 from "@/assets/images/general/landing-page/day3/D3_1.jpg";
import D3_10 from "@/assets/images/general/landing-page/day3/D3_10.jpg";
import D3_11 from "@/assets/images/general/landing-page/day3/D3_11.jpg";
import D3_12 from "@/assets/images/general/landing-page/day3/D3_12.jpg";
import D3_13 from "@/assets/images/general/landing-page/day3/D3_13.jpg";
import D3_14 from "@/assets/images/general/landing-page/day3/D3_14.jpg";
import D3_15 from "@/assets/images/general/landing-page/day3/D3_15.jpg";
import D3_16 from "@/assets/images/general/landing-page/day3/D3_16.jpg";
import D3_17 from "@/assets/images/general/landing-page/day3/D3_17.jpg";
import D3_18 from "@/assets/images/general/landing-page/day3/D3_18.jpg";
import D3_19 from "@/assets/images/general/landing-page/day3/D3_19.jpg";
import D3_2 from "@/assets/images/general/landing-page/day3/D3_2.jpg";
import D3_20 from "@/assets/images/general/landing-page/day3/D3_20.jpg";
import D3_21 from "@/assets/images/general/landing-page/day3/D3_21.jpg";
import D3_3 from "@/assets/images/general/landing-page/day3/D3_3.jpg";
import D3_4 from "@/assets/images/general/landing-page/day3/D3_4.jpg";
import D3_5 from "@/assets/images/general/landing-page/day3/D3_5.jpg";
import D3_6 from "@/assets/images/general/landing-page/day3/D3_6.jpg";
import D3_7 from "@/assets/images/general/landing-page/day3/D3_7.jpg";
import D3_8 from "@/assets/images/general/landing-page/day3/D3_8.jpg";
import D3_9 from "@/assets/images/general/landing-page/day3/D3_9.jpg";
import { Footer } from "@/components/common/shared/footer";
import { NavbarDemo } from "@/components/common/shared/Navbar/Navbar";
import { ShootingStars } from "@/components/ui/shooting-stars";

const day1Images = [
  D1_1,
  D1_2,
  D1_3,
  D1_4,
  D1_5,
  D1_6,
  D1_7,
  D1_8,
  D1_9,
  D1_10,
  D1_11,
  D1_12,
  D1_13,
  D1_14,
  D1_15,
  D1_16,
  D1_17,
  D1_18,
];

const day2Images = [
  D2_1,
  D2_2,
  D2_3,
  D2_4,
  D2_5,
  D2_6,
  D2_7,
  D2_8,
  D2_9,
  D2_10,
  D2_11,
  D2_12,
  D2_13,
  D2_14,
  D2_15,
  D2_16,
];

const day3Images = [
  D3_1,
  D3_2,
  D3_3,
  D3_4,
  D3_5,
  D3_6,
  D3_7,
  D3_8,
  D3_9,
  D3_10,
  D3_11,
  D3_12,
  D3_13,
  D3_14,
  D3_15,
  D3_16,
  D3_17,
  D3_18,
  D3_19,
  D3_20,
  D3_21,
];

interface DayGalleryProps {
  title: string;
  subtitle: string;
  images: any[];
  gridCols: 2 | 3 | 4;
  initialCount: number;
  loadMoreCount: number;
}

const imageVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.8,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  }),
};

const DayGallery = ({
  title,
  subtitle,
  images,
  gridCols,
  initialCount,
  loadMoreCount,
}: DayGalleryProps) => {
  const [visibleCount, setVisibleCount] = useState(initialCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + loadMoreCount, images.length));
  };

  const getGridClass = () => {
    switch (gridCols) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2";
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-8 text-center"
      >
        <h2 className="mb-3 bg-gradient-to-b from-white from-30% via-gray-400 via-95% bg-clip-text font-nokaTrial text-4xl text-transparent">
          {title}
        </h2>
        <p className="font-hackathoneCabinetGrotesk text-gray-400">
          {subtitle}
        </p>
      </motion.div>

      <div className={`grid ${getGridClass()} gap-4`}>
        {images.slice(0, visibleCount).map((image, index) => (
          <motion.div
            key={index}
            custom={index % loadMoreCount}
            initial="hidden"
            whileInView="visible"
            variants={imageVariants}
            viewport={{ once: true, margin: "-50px", amount: 0.3 }}
            className="group relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 },
            }}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={image}
                alt={`${title} - Photo ${index + 1}`}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Overlay effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </motion.div>
        ))}
      </div>

      {visibleCount < images.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 flex justify-center"
        >
          <motion.button
            onClick={handleLoadMore}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 px-6 py-3 font-hackathoneCabinetGrotesk font-semibold text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Load More</span>
            <ChevronDown className="size-5 animate-bounce" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

const Glimpse25Page = () => {
  return (
    <section className="relative min-h-screen bg-deepSpace text-white">
      {/* Main Content */}
      <div className="relative z-10 py-3 sm:py-3 md:py-6 lg:py-6">
        <NavbarDemo />

        {/* Content Container */}
        <div className="mx-4 mt-4 sm:mx-4 md:mx-8 lg:mx-4">
          <ShootingStars />
          <div className="mx-auto my-10 flex flex-col items-center justify-center gap-3 text-center">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
                ease: "easeOut",
              }}
              className="mt-10 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-4 text-center font-nokaTrial text-5xl font-bold text-transparent"
            >
              Glimpse 25
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="font-hackathoneCabinetGrotesk text-gray-300"
            >
              Explore the highlights and memorable moments from HackAthlone.
            </motion.p>
          </div>

          {/* Gallery Sections */}
          <div className="mx-auto max-w-7xl px-4 py-12">
            {/* Day 1 */}
            <DayGallery
              title="Day 1"
              subtitle="The journey begins with innovation and excitement"
              images={day1Images}
              gridCols={3}
              initialCount={5}
              loadMoreCount={6}
            />

            {/* Day 2 */}
            <DayGallery
              title="Day 2"
              subtitle="Teams collaborate and ideas come to life"
              images={day2Images}
              gridCols={4}
              initialCount={8}
              loadMoreCount={8}
            />

            {/* Day 3 */}
            <DayGallery
              title="Day 3"
              subtitle="Final presentations and celebration of achievements"
              images={day3Images}
              gridCols={3}
              initialCount={6}
              loadMoreCount={6}
            />
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Glimpse25Page;
