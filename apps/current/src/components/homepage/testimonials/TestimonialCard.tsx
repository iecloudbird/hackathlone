import { type FC, lazy, Suspense } from "react";

const MotionDiv = lazy(() =>
  import("framer-motion").then((module) => ({
    default: module.motion.div,
  }))
);

interface TestimonialCardProps {
  text: string;
  teamName: string;
  position: "left" | "center" | "right";
  onClick: () => void;
  isActive: boolean;
}

const cardBaseClass =
  "absolute cursor-pointer rounded-2xl bg-gray-800/90 p-6 backdrop-blur-sm transition-all duration-500 ease-out";
const cardActiveClass = "z-20 scale-100 bg-gray-800/95 shadow-2xl";
const cardInactiveClass = "z-10 scale-90 bg-gray-800/70";
const textClass = "mb-4 leading-relaxed text-gray-100";
const teamNameClass = "text-lg font-semibold text-brightYellow";

const getCardPosition = (position: "left" | "center" | "right") => {
  switch (position) {
    case "left":
      return "left-0 -translate-x-8";
    case "center":
      return "left-1/4";
    case "right":
      return "right-0 translate-x-8";
  }
};

const getCardVariants = (position: "left" | "center" | "right") => ({
  initial: {
    opacity: 0,
    scale: 0.8,
    x: position === "left" ? -100 : position === "right" ? 100 : 0,
  },
  animate: {
    opacity: 1,
    scale: position === "center" ? 1 : 0.9,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  hover:
    position !== "center"
      ? {
          scale: 0.95,
          transition: { duration: 0.3 },
        }
      : {},
});

export const TestimonialCard: FC<TestimonialCardProps> = ({
  text,
  teamName,
  position,
  onClick,
  isActive,
}) => {
  const cardPositionClass = getCardPosition(position);
  const cardStateClass = isActive ? cardActiveClass : cardInactiveClass;
  const cardClass = `${cardBaseClass} ${cardPositionClass} ${cardStateClass}`;

  const variants = getCardVariants(position);

  return (
    <Suspense
      fallback={
        <div className={cardClass}>
          <p className={textClass}>{text}</p>
          <p className={teamNameClass}>{teamName}</p>
        </div>
      }
    >
      <MotionDiv
        className={cardClass}
        onClick={onClick}
        variants={variants}
        initial="initial"
        animate="animate"
        whileHover="hover"
        layout
        style={{
          width: "420px",
          minHeight: "200px",
          opacity: isActive ? 1 : 0.7,
        }}
      >
        <p className={textClass}>{text}</p>
        <p className={teamNameClass}>{teamName}</p>
      </MotionDiv>
    </Suspense>
  );
};
