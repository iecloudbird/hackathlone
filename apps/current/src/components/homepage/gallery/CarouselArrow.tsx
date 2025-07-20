import { type FC } from "react";

interface CarouselArrowProps {
  direction: "prev" | "next";
  onClick?: () => void;
  className?: string;
}

const arrowClass =
  "absolute top-1/2 z-10 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#25252C] text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-brightYellow hover:text-black";

const positionClass = {
  prev: "-left-5",
  next: "-right-5",
} as const;

export const CarouselArrow: FC<CarouselArrowProps> = ({
  direction,
  onClick,
  className = "",
}) => {
  const arrowStyles = `${arrowClass} ${positionClass[direction]} ${className}`;

  return (
    <button
      className={arrowStyles}
      onClick={onClick}
      type="button"
      aria-label={`${direction === "prev" ? "Previous" : "Next"} slide`}
    >
      {direction === "prev" ? (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      ) : (
        <svg
          className="size-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      )}
    </button>
  );
};
