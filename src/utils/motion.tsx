export const fadeIn = (
  direction: "left" | "right" | "up" | "down" | "",
  type: string,
  delay: number,
  duration: number
) => ({
  hidden: {
    opacity: 0,
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: "easeOut",
      type,
    },
    x: 0,
    y: 0,
  },
});
