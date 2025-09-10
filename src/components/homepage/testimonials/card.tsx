import classNames from "classnames";
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
  "absolute cursor-pointer p-20 will-change-transform border border-[#000000]";
const cardSizeClass =
  "h-[260px] w-[320px] sm:h-[280px] sm:w-[380px] md:w-[460px] lg:w-[680px]";
// Remove the left-[25%] positioning
const cardPositionClass = ""; // Changed from "left-[25%]"
const fallbackBackgroundClass = "opacity-70";
const textClass =
  "mb-6 text-white text-justify md:text-center font-hackathoneCabinetGrotesk";
const teamNameClass =
  "text-xl font-bold text-white text-center font-hackathoneCabinetGrotesk";

const getCardVariants = (position: "left" | "center" | "right") => {
  const cardOffset = 200;

  return {
    left: {
      x: -cardOffset,
      y: 15,
      scale: 0.88,
      opacity: 0.65,
      zIndex: 1,
      background: "#15151A",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    center: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 10,
      background: "#15151A",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    right: {
      x: cardOffset,
      y: 15,
      scale: 0.88,
      opacity: 0.65,
      zIndex: 1,
      background: "#15151A",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    hover: {
      scale: position === "center" ? 1.03 : 0.92,
      y: position === "center" ? -3 : 10,
      opacity: position === "center" ? 1 : 0.8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 20,
      },
    },
    tap: {
      scale: position === "center" ? 0.98 : 0.85,
      transition: {
        type: "spring",
        stiffness: 600,
        damping: 25,
      },
    },
  };
};

export const TestimonialCard: FC<TestimonialCardProps> = ({
  text,
  teamName,
  position,
  onClick,
}) => {
  const variants = getCardVariants(position);

  return (
    <Suspense
      fallback={
        <div
          className={classNames(
            cardBaseClass,
            cardSizeClass,
            cardPositionClass,
            fallbackBackgroundClass
          )}
        >
          <p className={textClass}>{text}</p>
          <p className={teamNameClass}>{teamName}</p>
        </div>
      }
    >
      <MotionDiv
        className={classNames(cardBaseClass, cardSizeClass, cardPositionClass)}
        onClick={onClick}
        animate={position}
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        layout
        style={{
          transformOrigin: "center center",
        }}
      >
        <div className="relative z-10 flex h-full flex-col">
          <p className={`${textClass} text-base`}>{text}</p>
          <p className={teamNameClass}>{teamName}</p>
        </div>
      </MotionDiv>
    </Suspense>
  );
};
