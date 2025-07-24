import { type FC, useState, useCallback } from "react";
import { type TestimonialData } from "@/data/homepage/testimonials";
import { SectionContainer } from "../SectionContainer";
import { TestimonialCard } from "./card";

interface TestimonialsSectionProps {
  testimonialData: TestimonialData;
}

const titleClass =
  "mb-12 text-center text-3xl font-bold text-white lg:text-4xl";
const containerClass = "mx-auto h-96 max-w-7xl overflow-hidden";

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
      <div className="w-full">
        <h2 className={titleClass}>{title}</h2>

        <div className={containerClass}>
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
    </SectionContainer>
  );
};
