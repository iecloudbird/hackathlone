import { motion } from "framer-motion";
import { type FC, useState, useCallback } from "react";
import { type TestimonialData } from "@/data/homepage/testimonials";
import { SectionContainer } from "../SectionContainer";
import { TestimonialCard } from "./card";

interface TestimonialsSectionProps {
  testimonialData: TestimonialData;
}

export const TestimonialsSection: FC<TestimonialsSectionProps> = ({
  testimonialData,
}) => {
  const { title, testimonials } = testimonialData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleCardClick = useCallback(
    (index: number) => {
      if (index !== currentIndex && !isAnimating) {
        setIsAnimating(true);
        setCurrentIndex(index);
        setTimeout(() => setIsAnimating(false), 600);
      }
    },
    [currentIndex, isAnimating]
  );

  const getVisibleCards = () => {
    const totalCards = testimonials.length;
    const prevIndex = (currentIndex - 1 + totalCards) % totalCards;
    const nextIndex = (currentIndex + 1) % totalCards;

    return [
      {
        ...testimonials[prevIndex],
        index: prevIndex,
        position: "left" as const,
      },
      {
        ...testimonials[currentIndex],
        index: currentIndex,
        position: "center" as const,
      },
      {
        ...testimonials[nextIndex],
        index: nextIndex,
        position: "right" as const,
      },
    ];
  };

  const visibleCards = getVisibleCards();

  return (
    <SectionContainer className="hidden lg:block">
      <div className="relative mx-auto max-w-[1440px]">
        <motion.h2
          className="bg-gradient-to-b from-white from-30% via-gray-600 via-70% to-black to-95% bg-clip-text pb-4 text-center font-nokaTrial text-[28px] font-semibold text-transparent lg:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <div className="relative mx-auto h-96 w-full">
          <div className="absolute left-1/2 mt-48 flex -translate-x-1/2 items-center justify-center">
            {visibleCards.map((card) => (
              <TestimonialCard
                key={card.id}
                text={card.text}
                teamName={card.teamName}
                position={card.position}
                isActive={card.position === "center"}
                onClick={() => handleCardClick(card.index)}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
