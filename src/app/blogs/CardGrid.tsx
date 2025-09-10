import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { cards } from "./blogs.dto";
export function CardGrid() {
  return (
    <div className="mx-auto max-w-6xl px-8">
      <ShootingStars />
      <StarsBackground />
      <div className="mx-auto my-10 flex flex-col items-center justify-center gap-3 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="mt-10 bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text p-4 text-center font-nokaTrial text-5xl font-semibold text-transparent"
        >
          Blogs
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
          Support the next generation of innovators and problem-solvers. <br />{" "}
          Your sponsorship helps us create an unforgettable experience for
          participants
        </motion.p>
      </div>
      <HoverEffect
        items={cards.map((card) => ({
          title: card.title,
          description: card.description,
          link: `/blogs/${card.slug}`,
          imageSrc: card.imageSrc,
        }))}
      />
    </div>
  );
}
